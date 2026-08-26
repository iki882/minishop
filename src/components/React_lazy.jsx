import { lazy, Suspense } from "react";

const keranjang = lazy(() => import("./pages/keranjang"));

<Suspense fallback={<p>Memuat...</p>}>
<keranjang />
</Suspense>