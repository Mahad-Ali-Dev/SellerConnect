-- Create a table for user profiles if it doesn't exist
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  name text,
  phone text,
  company text,
  role text default 'user',
  avatar_url text,
  updated_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on public.profiles for update
  using ( auth.uid() = id );

-- Create a table for applications (forms)
create table if not exists public.applications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete set null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  company text,
  store_name text,
  store_url text,
  product_count text,
  services text[],
  message text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.applications enable row level security;

-- Policies for applications
-- Allow anyone (public/anon) to insert applications
create policy "Anyone can insert application"
  on public.applications for insert
  with check ( true );

-- Admins can view all applications
create policy "Admins can view all applications."
  on public.applications for select
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

-- Create a table for contact submissions
create table if not exists public.contact_submissions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete set null,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  status text default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.contact_submissions enable row level security;

-- Allow anyone to insert contact submissions
create policy "Anyone can insert contact submission"
  on public.contact_submissions for insert
  with check ( true );

create policy "Admins can view all contact submissions."
  on public.contact_submissions for select
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

-- Trigger to automatically assign admin role to specific email
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, name, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'name',
    case when new.email = 'beheer.sellerconnect@gmail.com' then 'admin' else 'user' end
  );
  return new;
end;
$$ language plpgsql security definer;

-- Re-create trigger (if it doesn't exist, this might fail in SQL editor if duplicate, but usually handled)
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
