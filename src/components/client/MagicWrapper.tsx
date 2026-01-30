"use client";

import React from "react";

export default function MagicWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
