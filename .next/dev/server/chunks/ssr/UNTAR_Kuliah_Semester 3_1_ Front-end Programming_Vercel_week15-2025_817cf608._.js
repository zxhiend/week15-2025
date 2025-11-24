module.exports = [
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AccountBalance({ compact = false }) {
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function load() {
            const res = await fetch('/api/account');
            if (res.ok) {
                const data = await res.json();
                setBalance(data.balance ?? 0);
            }
        }
        load();
    }, []);
    async function save() {
        const num = parseFloat(value);
        if (isNaN(num)) return alert('balance tidak valid');
        const res = await fetch('/api/account', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                balance: num
            })
        });
        if (res.ok) {
            const data = await res.json();
            setBalance(data.balance);
            setEditing(false);
        } else {
            alert('gagal update balance');
        }
    }
    const containerClass = compact ? 'd-flex align-items-center gap-2' : 'd-flex align-items-center gap-3 mb-3';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClass,
        children: [
            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Account balance:"
                    }, void 0, false, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    ' ',
                    balance === null ? '—' : balance.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "form-control form-control-sm",
                        style: {
                            width: 140
                        },
                        value: value,
                        onChange: (e)=>setValue(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-sm btn-primary",
                        onClick: save,
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-sm btn-secondary",
                        onClick: ()=>setEditing(false),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "badge bg-primary",
                        children: [
                            "Balance: ",
                            balance === null ? '—' : balance.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$UNTAR$2f$Kuliah$2f$Semester__3$2f$1$2e$__Front$2d$end__Programming$2f$Vercel$2f$week15$2d$2025$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-sm btn-outline-primary",
                        onClick: ()=>{
                            setValue(balance !== null ? String(balance) : '0');
                            setEditing(true);
                        },
                        children: "Set balance"
                    }, void 0, false, {
                        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/components/AccountBalance.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/UNTAR/Kuliah/Semester 3/1. Front-end Programming/Vercel/week15-2025/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=UNTAR_Kuliah_Semester%203_1_%20Front-end%20Programming_Vercel_week15-2025_817cf608._.js.map