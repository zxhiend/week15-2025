module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) global.prisma = prisma;
}),
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/api/account/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/lib/prisma.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"];
        let acct = await p.account.findUnique({
            where: {
                name: 'default'
            }
        });
        if (!acct) {
            acct = await p.account.create({
                data: {
                    name: 'default',
                    balance: 0
                }
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(acct);
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'gagal mengambil account'
        }, {
            status: 500
        });
    }
}
async function PATCH(request) {
    try {
        const body = await request.json();
        if (typeof body.balance !== 'number') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'balance tidak valid'
            }, {
                status: 400
            });
        }
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"];
        let acct = await p.account.upsert({
            where: {
                name: 'default'
            },
            update: {
                balance: body.balance
            },
            create: {
                name: 'default',
                balance: body.balance
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(acct);
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'gagal update balance'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6d405578._.js.map