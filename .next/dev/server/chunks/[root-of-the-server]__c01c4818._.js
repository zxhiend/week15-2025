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
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/api/items/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/lib/prisma.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const items = await __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].item.findMany({
            orderBy: {
                date: 'desc'
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(items);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'gagal mengambil data'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        // simple validation; ensure description and amount exist
        if (!body.description || typeof body.amount !== 'number') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'data tidak valid'
            }, {
                status: 400
            });
        }
        // normalize type
        const type = body.type === 'INCOME' ? 'INCOME' : 'EXPENSE';
        const data = {
            description: body.description,
            amount: body.amount,
            type,
            category: body.category ?? null,
            isRecurring: !!body.isRecurring,
            recurrence: body.recurrence ?? null,
            nextOccurrence: body.nextOccurrence ? new Date(body.nextOccurrence) : null,
            date: body.date ? new Date(body.date) : new Date()
        };
        // amount effect on account: income adds, expense subtracts
        const effect = type === 'INCOME' ? body.amount : -body.amount;
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"];
        // create item and update account in a transaction
        const [newItem] = await p.$transaction([
            p.item.create({
                data
            }),
            // update account balance (create if missing)
            p.account.upsert({
                where: {
                    name: 'default'
                },
                update: {
                    balance: {
                        increment: effect
                    }
                },
                create: {
                    name: 'default',
                    balance: effect
                }
            })
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newItem, {
            status: 201
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'gagal membuat item'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c01c4818._.js.map