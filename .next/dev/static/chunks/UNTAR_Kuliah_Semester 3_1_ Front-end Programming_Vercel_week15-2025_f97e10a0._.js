(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewItemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function NewItemPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EXPENSE');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isRecurring, setIsRecurring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recurrence, setRecurrence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [nextOccurrence, setNextOccurrence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function handleSubmit(e) {
        e.preventDefault();
        // buat object untuk di-send
        const item = {
            description,
            amount: parseFloat(amount),
            date: date ? new Date(date).toISOString() : new Date().toISOString(),
            type,
            category: category || null,
            isRecurring,
            recurrence: recurrence || null,
            nextOccurrence: nextOccurrence ? new Date(nextOccurrence).toISOString() : null
        };
        const res = await fetch('/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        if (res.ok) {
            router.push('/items');
        } else {
            alert('gagal membuat item');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "tambah item baru"
            }, void 0, false, {
                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "needs-validation",
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "description",
                                className: "form-label",
                                children: "deskripsi"
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "description",
                                type: "text",
                                className: "form-control",
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "amount",
                                className: "form-label",
                                children: "jumlah"
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "amount",
                                type: "number",
                                step: "0.01",
                                className: "form-control",
                                value: amount,
                                onChange: (e)=>setAmount(e.target.value),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "date",
                                className: "form-label",
                                children: "tanggal"
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "date",
                                type: "date",
                                className: "form-control",
                                value: date,
                                onChange: (e)=>setDate(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "tipe"
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-check form-check-inline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "form-check-input",
                                                type: "radio",
                                                name: "type",
                                                id: "expense",
                                                value: "EXPENSE",
                                                checked: type === 'EXPENSE',
                                                onChange: ()=>setType('EXPENSE')
                                            }, void 0, false, {
                                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-check-label",
                                                htmlFor: "expense",
                                                children: "Expense"
                                            }, void 0, false, {
                                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-check form-check-inline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "form-check-input",
                                                type: "radio",
                                                name: "type",
                                                id: "income",
                                                value: "INCOME",
                                                checked: type === 'INCOME',
                                                onChange: ()=>setType('INCOME')
                                            }, void 0, false, {
                                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-check-label",
                                                htmlFor: "income",
                                                children: "Income"
                                            }, void 0, false, {
                                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "category",
                                className: "form-label",
                                children: "kategori (opsional)"
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "category",
                                type: "text",
                                className: "form-control",
                                value: category,
                                onChange: (e)=>setCategory(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 form-check",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "isRecurring",
                                type: "checkbox",
                                className: "form-check-input",
                                checked: isRecurring,
                                onChange: (e)=>setIsRecurring(e.target.checked)
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "isRecurring",
                                className: "form-check-label",
                                children: "recurring payment"
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    isRecurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "recurrence",
                                className: "form-label",
                                children: "recurrence"
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "recurrence",
                                className: "form-select mb-2",
                                value: recurrence,
                                onChange: (e)=>setRecurrence(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "-- pilih --"
                                    }, void 0, false, {
                                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "daily",
                                        children: "Daily"
                                    }, void 0, false, {
                                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "weekly",
                                        children: "Weekly"
                                    }, void 0, false, {
                                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "monthly",
                                        children: "Monthly"
                                    }, void 0, false, {
                                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "yearly",
                                        children: "Yearly"
                                    }, void 0, false, {
                                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "nextOccurrence",
                                className: "form-label",
                                children: "next occurrence"
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "nextOccurrence",
                                type: "date",
                                className: "form-control",
                                value: nextOccurrence,
                                onChange: (e)=>setNextOccurrence(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        children: "simpan"
                    }, void 0, false, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/app/items/new/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(NewItemPage, "iBvWeDqCiQl8oqbdn5688P4iRfA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NewItemPage;
var _c;
__turbopack_context__.k.register(_c, "NewItemPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=UNTAR_Kuliah_Semester%203_1_%20Front-end%20Programming_Vercel_week15-2025_f97e10a0._.js.map