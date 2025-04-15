// app/stores/page.tsx
import { Suspense } from "react";
import StoresClient from "..//components/ui/store-client";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StoresClient />
    </Suspense>
  );
}
