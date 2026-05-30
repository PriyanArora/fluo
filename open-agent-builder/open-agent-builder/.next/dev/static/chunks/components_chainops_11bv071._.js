(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/chainops/AffectedProjectsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AffectedProjectsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CircleCheck>");
"use client";
;
;
function AffectedProjectsPanel({ projects, currentProjectId, isBlocked }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border border-neutral-200 bg-white p-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-8",
                children: [
                    isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-18 w-18 text-red-600"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__["CircleCheck"], {
                        className: "h-18 w-18 text-emerald-600"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[15px] font-semibold text-neutral-950",
                        children: "Affected Projects"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            projects.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 space-y-8",
                children: projects.map((project)=>{
                    const status = project.id === currentProjectId ? "BLOCKED" : "REVIEW REQUIRED";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-12 border border-neutral-200 bg-neutral-50 px-10 py-9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "break-words text-[13px] font-medium leading-18 text-neutral-950",
                                        children: project.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-[11px] text-neutral-500",
                                        children: project.id
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                                        lineNumber: 46,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: [
                                    "shrink-0 px-8 py-3 text-[11px] font-semibold",
                                    project.id === currentProjectId ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"
                                ].join(" "),
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                        lineNumber: 38,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-10 text-[13px] leading-20 text-neutral-600",
                children: "No related project is blocked. Vendor can proceed through the visible approval path."
            }, void 0, false, {
                fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chainops/AffectedProjectsPanel.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = AffectedProjectsPanel;
var _c;
__turbopack_context__.k.register(_c, "AffectedProjectsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chainops/ConsoleNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsoleNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const links = [
    {
        key: "workspace",
        label: "Workspace",
        href: (orgId)=>`/orgs/${orgId}`
    },
    {
        key: "trace",
        label: "Part Trace",
        href: ()=>"/trace"
    },
    {
        key: "ledger",
        label: "Audit Ledger",
        href: ()=>"/ledger"
    }
];
function ConsoleNav({ orgId, active, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fluo-console-nav",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fluo-console-nav-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "fluo-console-wordmark fluo-headline",
                        href: "/",
                        children: "fluo"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/ConsoleNav.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "fluo-console-divider"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/ConsoleNav.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fluo-console-links fluo-mono",
                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: [
                                    "fluo-console-link",
                                    active === link.key ? "fluo-console-link-active" : ""
                                ].join(" "),
                                href: link.href(orgId),
                                children: link.label
                            }, link.key, false, {
                                fileName: "[project]/components/chainops/ConsoleNav.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/ConsoleNav.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/ConsoleNav.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fluo-console-nav-right",
                children: action
            }, void 0, false, {
                fileName: "[project]/components/chainops/ConsoleNav.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chainops/ConsoleNav.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ConsoleNav;
var _c;
__turbopack_context__.k.register(_c, "ConsoleNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chainops/LedgerDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LedgerDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/blocks.js [app-client] (ecmascript) <export default as Blocks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-search.js [app-client] (ecmascript) <export default as PackageSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldQuestion$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-question-mark.js [app-client] (ecmascript) <export default as ShieldQuestion>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const EVENT_META = {
    VENDOR_DROPPED_ON_WORKFLOW: {
        title: "Vendor added to workflow",
        description: "A contractor was dropped onto a procurement workflow.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageSearch$3e$__["PackageSearch"],
        tone: "info"
    },
    VENDOR_FLAG_DETECTED: {
        title: "Vendor flag detected",
        description: "Vetting registry flagged this contractor as a risk.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        tone: "danger"
    },
    PROJECT_BLOCKED: {
        title: "Project blocked",
        description: "This project's approval path was stopped for review.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"],
        tone: "danger"
    },
    RELATED_PROJECT_ALERTED: {
        title: "Related project alerted",
        description: "Another project using this contractor was flagged for review.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
        tone: "warning"
    },
    HUMAN_REVIEW_REQUIRED: {
        title: "Human review required",
        description: "Sent to a security officer for an authorized decision.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldQuestion$3e$__["ShieldQuestion"],
        tone: "warning"
    }
};
const DEFAULT_META = {
    title: "Audit event",
    description: "An event was written to the audit ledger.",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__["Blocks"],
    tone: "info"
};
function shortHash(value) {
    if (!value || value.length < 14) return value;
    return `${value.slice(0, 8)}…${value.slice(-6)}`;
}
function LedgerDrawer({ events, variant = "drawer", nameMap = {} }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const visibleEvents = [
        ...events
    ].sort((a, b)=>b.eventId - a.eventId);
    const label = (id)=>nameMap[id] ?? id;
    const copyHash = async (event)=>{
        try {
            await navigator.clipboard.writeText(event.transactionHash);
            setCopied(event.eventId);
            setTimeout(()=>setCopied(null), 1400);
        } catch  {
        /* clipboard unavailable */ }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: variant === "drawer" ? "fluo-ledger fluo-ledger-drawer" : "fluo-ledger",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fluo-ledger-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "fluo-ledger-head-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__["Blocks"], {
                                    className: "h-16 w-16"
                                }, void 0, false, {
                                    fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "fluo-headline text-[16px] font-bold leading-18",
                                        children: "Blockchain Audit Log"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-[var(--fluo-muted)]",
                                        children: "Tamper-evident record · newest first"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "fluo-ledger-count fluo-mono",
                        children: [
                            events.length,
                            " events"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            visibleEvents.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fluo-ledger-list",
                children: visibleEvents.map((event)=>{
                    const meta = EVENT_META[event.eventType] ?? DEFAULT_META;
                    const Icon = meta.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "fluo-ledger-item",
                        "data-tone": meta.tone,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "fluo-ledger-item-icon",
                                "data-tone": meta.tone,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-16 w-16"
                                }, void 0, false, {
                                    fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-semibold text-[var(--fluo-text)]",
                                                children: meta.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fluo-mono fluo-ledger-tag",
                                                "data-tone": meta.tone,
                                                children: event.eventType
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[12px] leading-17 text-[var(--fluo-muted)]",
                                        children: meta.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fluo-ledger-meta fluo-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fluo-ledger-meta-key",
                                                        children: "Project"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this),
                                                    label(event.projectId)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fluo-ledger-meta-key",
                                                        children: "Entity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 23
                                                    }, this),
                                                    label(event.entityId)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fluo-ledger-meta-key",
                                                        children: "When"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 23
                                                    }, this),
                                                    new Date(event.timestamp).toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                lineNumber: 147,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "fluo-ledger-hash fluo-mono",
                                        onClick: ()=>copyHash(event),
                                        title: "Copy transaction hash",
                                        children: [
                                            copied === event.eventId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-12 w-12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                lineNumber: 159,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "h-12 w-12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                                lineNumber: 161,
                                                columnNumber: 23
                                            }, this),
                                            "tx ",
                                            shortHash(event.transactionHash)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                lineNumber: 125,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "fluo-ledger-id fluo-mono",
                                children: [
                                    "#",
                                    event.eventId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                                lineNumber: 167,
                                columnNumber: 17
                            }, this)
                        ]
                    }, event.eventId, true, {
                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                        lineNumber: 120,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fluo-ledger-empty",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__["Blocks"], {
                        className: "h-22 w-22 text-[var(--fluo-border-strong)]"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-10 text-[14px] font-semibold text-[var(--fluo-text)]",
                        children: "No audit events yet"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[12px] text-[var(--fluo-muted)]",
                        children: "Drop a flagged contractor into a workflow to write the first event."
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/LedgerDrawer.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chainops/LedgerDrawer.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(LedgerDrawer, "U3Wn6eMtWpitvaT4qdZ0zTGWB6Q=");
_c = LedgerDrawer;
var _c;
__turbopack_context__.k.register(_c, "LedgerDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chainops/LedgerLogNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LedgerLogNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/blocks.js [app-client] (ecmascript) <export default as Blocks>");
"use client";
;
;
;
function LedgerLogNode({ data, selected }) {
    const nodeData = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            "relative w-[250px] border border-violet-300 bg-violet-50 p-14 shadow-sm",
            selected ? "ring-2 ring-violet-200" : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                className: "!h-10 !w-10 !border-2 !border-white !bg-violet-700"
            }, void 0, false, {
                fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-34 w-34 shrink-0 items-center justify-center bg-violet-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__["Blocks"], {
                            className: "h-18 w-18 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] font-medium uppercase text-violet-800",
                                children: "Ledger Log"
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-[15px] font-semibold leading-20 text-neutral-950",
                                children: nodeData.label ?? "Write Vendor Flag Event"
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-[12px] leading-18 text-violet-900",
                                children: "Stores event metadata and payload hash."
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 bg-white px-8 py-6 text-[12px] text-violet-900",
                children: [
                    "Cached ledger events: ",
                    nodeData.eventCount ?? 0
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                className: "!h-10 !w-10 !border-2 !border-white !bg-violet-700"
            }, void 0, false, {
                fileName: "[project]/components/chainops/LedgerLogNode.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chainops/LedgerLogNode.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = LedgerLogNode;
var _c;
__turbopack_context__.k.register(_c, "LedgerLogNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chainops/workflowSteps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPLETABLE_KINDS",
    ()=>COMPLETABLE_KINDS,
    "applyStepCompletion",
    ()=>applyStepCompletion
]);
const COMPLETABLE_KINDS = [
    "partOrigin",
    "humanReview"
];
function applyStepCompletion(nodes, nodeId) {
    const updated = nodes.map((node)=>node.id === nodeId ? {
            ...node,
            data: {
                ...node.data,
                status: "complete"
            }
        } : node);
    const completable = updated.filter((node)=>COMPLETABLE_KINDS.includes(node.data.nodeKind ?? ""));
    const anyBlocked = updated.some((node)=>node.data.status === "blocked");
    const allComplete = completable.length > 0 && completable.every((node)=>node.data.status === "complete");
    if (allComplete && !anyBlocked) {
        return updated.map((node)=>node.data.nodeKind === "approval" ? {
                ...node,
                data: {
                    ...node.data,
                    status: "approved"
                }
            } : node);
    }
    return updated;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chainops/PartOriginNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartOriginNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$workflowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chainops/workflowSteps.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PartOriginNode({ id, data, selected }) {
    _s();
    const nodeData = data;
    const { setNodes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const exposure = nodeData.countryExposure ?? [
        "Canada",
        "United States",
        "China"
    ];
    const isComplete = nodeData.status === "complete";
    const onComplete = (event)=>{
        event.stopPropagation();
        setNodes((nodes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$workflowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyStepCompletion"])(nodes, id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            "relative w-[260px] border p-14 shadow-sm transition",
            isComplete ? "border-emerald-500 bg-emerald-50" : "border-cyan-300 bg-cyan-50",
            selected ? "ring-2 ring-cyan-200" : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                className: "!h-10 !w-10 !border-2 !border-white !bg-cyan-700"
            }, void 0, false, {
                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            "flex h-34 w-34 shrink-0 items-center justify-center",
                            isComplete ? "bg-emerald-600" : "bg-cyan-700"
                        ].join(" "),
                        children: isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-18 w-18 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chainops/PartOriginNode.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                            className: "h-18 w-18 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chainops/PartOriginNode.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/PartOriginNode.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: [
                                    "text-[12px] font-medium uppercase",
                                    isComplete ? "text-emerald-800" : "text-cyan-800"
                                ].join(" "),
                                children: "Part / Origin Check"
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-[15px] font-semibold leading-20 text-neutral-950",
                                children: nodeData.label ?? "Component Origin Review"
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-[12px] leading-18 text-cyan-900",
                                children: "Component origin visibility required."
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/PartOriginNode.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 flex flex-wrap gap-6",
                children: exposure.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "border border-cyan-200 bg-white px-7 py-3 text-[11px] text-cyan-900",
                        children: country
                    }, country, false, {
                        fileName: "[project]/components/chainops/PartOriginNode.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 inline-flex items-center gap-6 bg-emerald-100 px-9 py-5 text-[12px] font-semibold text-emerald-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-14 w-14"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/PartOriginNode.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    "Origin check complete"
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "nodrag mt-12 inline-flex w-full items-center justify-center gap-6 border border-cyan-700 bg-cyan-700 px-10 py-7 text-[12px] font-semibold uppercase text-white transition hover:opacity-90",
                onClick: onComplete,
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-14 w-14"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/PartOriginNode.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    "Mark check complete"
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                className: "!h-10 !w-10 !border-2 !border-white !bg-cyan-700"
            }, void 0, false, {
                fileName: "[project]/components/chainops/PartOriginNode.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chainops/PartOriginNode.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(PartOriginNode, "jcIzez+loDp+0i2Yjj+IJ2lNdAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"]
    ];
});
_c = PartOriginNode;
var _c;
__turbopack_context__.k.register(_c, "PartOriginNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chainops/VendorNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VendorNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
"use client";
;
;
;
function VendorNode({ data, selected }) {
    const nodeData = data;
    const status = nodeData.status ?? "pending";
    const isBlocked = status === "blocked";
    const isAllowed = status === "allowed";
    const title = isBlocked ? "Vendor blocked: risk flag found in local vetting registry." : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        title: title,
        className: [
            "relative w-[250px] border bg-white p-14 shadow-sm transition",
            selected ? "ring-2 ring-neutral-300" : "",
            isBlocked ? "border-red-500 bg-red-50" : isAllowed ? "border-emerald-500 bg-emerald-50" : "border-neutral-200"
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                className: "!h-10 !w-10 !border-2 !border-white !bg-neutral-500"
            }, void 0, false, {
                fileName: "[project]/components/chainops/VendorNode.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            "flex h-34 w-34 shrink-0 items-center justify-center",
                            isBlocked ? "bg-red-600" : isAllowed ? "bg-emerald-600" : "bg-neutral-800"
                        ].join(" "),
                        children: isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-18 w-18 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chainops/VendorNode.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this) : isAllowed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            className: "h-18 w-18 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chainops/VendorNode.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                            className: "h-18 w-18 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chainops/VendorNode.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/VendorNode.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] font-medium uppercase text-neutral-500",
                                children: "Vendor / Contractor"
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/VendorNode.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 break-words text-[15px] font-semibold leading-20 text-neutral-950",
                                children: nodeData.vendorName ?? nodeData.label ?? "Vendor / Contractor"
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/VendorNode.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: [
                                    "mt-8 inline-flex px-8 py-3 text-[12px] font-medium",
                                    isBlocked ? "bg-red-100 text-red-800" : isAllowed ? "bg-emerald-100 text-emerald-800" : "bg-neutral-100 text-neutral-700"
                                ].join(" "),
                                children: isBlocked ? "Blocked" : isAllowed ? "Authorized path allowed" : "Awaiting drop"
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/VendorNode.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/VendorNode.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/VendorNode.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            nodeData.countryExposure?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 flex flex-wrap gap-6",
                children: nodeData.countryExposure.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "border border-neutral-200 bg-white px-7 py-3 text-[11px] text-neutral-700",
                        children: country
                    }, country, false, {
                        fileName: "[project]/components/chainops/VendorNode.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chainops/VendorNode.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this) : null,
            isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-10 text-[12px] leading-18 text-red-800",
                children: nodeData.riskReason ?? "Human review required before authorization."
            }, void 0, false, {
                fileName: "[project]/components/chainops/VendorNode.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                className: "!h-10 !w-10 !border-2 !border-white !bg-neutral-500"
            }, void 0, false, {
                fileName: "[project]/components/chainops/VendorNode.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chainops/VendorNode.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = VendorNode;
var _c;
__turbopack_context__.k.register(_c, "VendorNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chainops/DocumentWorkflowPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentWorkflowPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/blocks.js [app-client] (ecmascript) <export default as Blocks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleStop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as CircleStop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gavel.js [app-client] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$AffectedProjectsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chainops/AffectedProjectsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$ConsoleNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chainops/ConsoleNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$LedgerDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chainops/LedgerDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$LedgerLogNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chainops/LedgerLogNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$PartOriginNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chainops/PartOriginNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$VendorNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chainops/VendorNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$workflowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chainops/workflowSteps.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const defaultEdgeStyle = {
    stroke: "#75777a",
    strokeWidth: 2
};
const blockedEdgeStyle = {
    stroke: "#ba1a1a",
    strokeDasharray: "9 6",
    strokeWidth: 3
};
const paletteItems = [
    {
        label: "Project Start",
        nodeKind: "projectStart",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
    },
    {
        label: "Vendor / Contractor",
        nodeKind: "vendor",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"]
    },
    {
        label: "Part / Origin Check",
        nodeKind: "partOrigin",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        label: "Human Review",
        nodeKind: "humanReview",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    },
    {
        label: "Ledger Log",
        nodeKind: "ledgerLog",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__["Blocks"]
    },
    {
        label: "Blocked / Escalated",
        nodeKind: "blocked",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleStop$3e$__["CircleStop"]
    }
];
function GenericWorkflowNode({ id, data, selected }) {
    _s();
    const nodeData = data;
    const { setNodes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const kind = nodeData.nodeKind;
    const status = nodeData.status;
    const isStart = kind === "projectStart";
    const isApproval = kind === "approval";
    const isHumanReview = kind === "humanReview";
    const isBlocked = status === "blocked";
    const isComplete = status === "complete";
    const isApproved = status === "approved";
    const tone = isBlocked ? "blocked" : isApproved || isComplete ? "done" : isHumanReview ? "review" : isApproval ? "gate" : isStart ? "start" : "default";
    const accentClass = {
        blocked: "border-red-500 bg-red-50",
        done: "border-emerald-500 bg-emerald-50",
        review: "border-amber-300 bg-amber-50",
        gate: "border-neutral-300 bg-white",
        start: "border-sky-300 bg-sky-50",
        default: "border-neutral-200 bg-white"
    }[tone];
    const iconClass = {
        blocked: "bg-red-600",
        done: "bg-emerald-600",
        review: "bg-amber-700",
        gate: "bg-neutral-400",
        start: "bg-sky-700",
        default: "bg-neutral-950"
    }[tone];
    const eyebrowClass = {
        blocked: "text-red-800",
        done: "text-emerald-800",
        review: "text-amber-800",
        gate: "text-neutral-500",
        start: "text-sky-800",
        default: "text-neutral-500"
    }[tone];
    const Icon = isStart ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"] : isBlocked ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleStop$3e$__["CircleStop"] : isApproved || isComplete ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"] : isHumanReview ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"];
    const eyebrow = isStart ? "Project Start" : isBlocked ? "Blocked / Escalated" : isHumanReview ? "Human Review" : "Approval Gate";
    const onComplete = (event)=>{
        event.stopPropagation();
        setNodes((nodes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$workflowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyStepCompletion"])(nodes, id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            "relative w-[245px] border p-14 shadow-sm transition",
            selected ? "ring-2 ring-neutral-300" : "",
            accentClass
        ].join(" "),
        children: [
            !isStart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                className: "!h-10 !w-10 !border-2 !border-white !bg-neutral-700",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                type: "target"
            }, void 0, false, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            "flex h-34 w-34 shrink-0 items-center justify-center",
                            iconClass
                        ].join(" "),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-18 w-18 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: [
                                    "fluo-mono text-[11px] uppercase",
                                    eyebrowClass
                                ].join(" "),
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 break-words text-[15px] font-semibold leading-20 text-neutral-950",
                                children: nodeData.label
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            nodeData.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-[12px] leading-18 text-neutral-600",
                                children: nodeData.description
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            isHumanReview ? isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 inline-flex items-center gap-6 bg-emerald-100 px-9 py-5 text-[12px] font-semibold text-emerald-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-14 w-14"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this),
                    "Review complete"
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 215,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "nodrag mt-12 inline-flex w-full items-center justify-center gap-6 border border-amber-700 bg-amber-700 px-10 py-7 text-[12px] font-semibold uppercase text-white transition hover:opacity-90",
                onClick: onComplete,
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-14 w-14"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 225,
                        columnNumber: 13
                    }, this),
                    "Mark review complete"
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 220,
                columnNumber: 11
            }, this) : null,
            isApproval ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    "mt-12 inline-flex items-center gap-6 px-9 py-5 text-[12px] font-semibold",
                    isApproved ? "bg-emerald-100 text-emerald-800" : "bg-neutral-100 text-neutral-600"
                ].join(" "),
                children: isApproved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-14 w-14"
                        }, void 0, false, {
                            fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, this),
                        "Approved — released"
                    ]
                }, void 0, true) : "Awaiting upstream steps"
            }, void 0, false, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this) : null,
            !isApproval && !isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                className: "!h-10 !w-10 !border-2 !border-white !bg-neutral-700",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                type: "source"
            }, void 0, false, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(GenericWorkflowNode, "jcIzez+loDp+0i2Yjj+IJ2lNdAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"]
    ];
});
_c = GenericWorkflowNode;
function buildInitialNodes(workflow, eventCount) {
    return workflow.nodes.map((workflowNode)=>({
            id: workflowNode.id,
            type: workflowNode.type,
            position: workflowNode.position,
            data: {
                label: workflowNode.label,
                status: workflowNode.status,
                nodeKind: workflowNode.type,
                countryExposure: workflowNode.countryExposure,
                eventCount: workflowNode.type === "ledgerLog" ? eventCount : undefined,
                description: workflowNode.type === "humanReview" ? "Human review required before final authorization." : undefined
            }
        }));
}
function buildInitialEdges(workflow) {
    return workflow.edges.map((workflowEdge)=>({
            id: workflowEdge.id,
            source: workflowEdge.source,
            target: workflowEdge.target,
            label: workflowEdge.label,
            markerEnd: {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                color: "#75777a"
            },
            style: defaultEdgeStyle,
            labelStyle: {
                fill: "#44474a",
                fontSize: 12,
                fontWeight: 700
            },
            labelBgStyle: {
                fill: "#ffffff",
                fillOpacity: 0.94
            }
        }));
}
function createPaletteNode(item, position, eventCount) {
    const nodeKind = item.nodeKind;
    const data = {
        label: nodeKind === "vendor" ? "Vendor / Contractor" : nodeKind === "partOrigin" ? "Component Origin Review" : nodeKind === "ledgerLog" ? "Write Vendor Flag Event" : item.label,
        status: nodeKind === "blocked" ? "blocked" : nodeKind === "humanReview" ? "required" : nodeKind === "partOrigin" ? "review" : "ready",
        nodeKind,
        countryExposure: nodeKind === "partOrigin" ? [
            "Canada",
            "United States",
            "China"
        ] : undefined,
        eventCount: nodeKind === "ledgerLog" ? eventCount : undefined,
        description: nodeKind === "humanReview" ? "Human review required before final authorization." : nodeKind === "blocked" ? "Human review required before authorization." : undefined
    };
    return {
        id: `${nodeKind}-${crypto.randomUUID()}`,
        type: nodeKind,
        position: {
            x: position.x - 120,
            y: position.y - 48
        },
        data
    };
}
function DocumentWorkflowCanvas(props) {
    _s1();
    const { organization, document, project, workflow, vendors, projects, ledgerEvents: initialLedgerEvents } = props;
    const nameMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DocumentWorkflowCanvas.useMemo[nameMap]": ()=>{
            const map = {};
            for (const item of projects)map[item.id] = item.name;
            for (const item of vendors)map[item.id] = item.name;
            return map;
        }
    }["DocumentWorkflowCanvas.useMemo[nameMap]"], [
        projects,
        vendors
    ]);
    const { screenToFlowPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [vendorList, setVendorList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(vendors);
    const [ledgerEvents, setLedgerEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLedgerEvents);
    const [nodes, setNodes, onNodesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"])(buildInitialNodes(workflow, initialLedgerEvents.length));
    const [edges, setEdges, onEdgesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"])(buildInitialEdges(workflow));
    const [selectedNodeId, setSelectedNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("vendor-slot");
    const [dropResult, setDropResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEvaluating, setIsEvaluating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropError, setDropError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentWorkflowCanvas.useCallback[onConnect]": (connection)=>{
            setEdges({
                "DocumentWorkflowCanvas.useCallback[onConnect]": (currentEdges)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEdge"])({
                        ...connection,
                        markerEnd: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                            color: "#75777a"
                        },
                        style: defaultEdgeStyle
                    }, currentEdges)
            }["DocumentWorkflowCanvas.useCallback[onConnect]"]);
        }
    }["DocumentWorkflowCanvas.useCallback[onConnect]"], [
        setEdges
    ]);
    const nodeTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DocumentWorkflowCanvas.useMemo[nodeTypes]": ()=>({
                projectStart: GenericWorkflowNode,
                vendor: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$VendorNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                partOrigin: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$PartOriginNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                humanReview: GenericWorkflowNode,
                ledgerLog: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$LedgerLogNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                approval: GenericWorkflowNode,
                blocked: GenericWorkflowNode
            })
    }["DocumentWorkflowCanvas.useMemo[nodeTypes]"], []);
    const selectedNode = nodes.find((node)=>node.id === selectedNodeId) ?? nodes[0];
    const affectedProjects = dropResult?.status === "blocked" ? dropResult.affectedProjects : [];
    const updateLedgerEventCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentWorkflowCanvas.useCallback[updateLedgerEventCount]": (nextEventCount)=>{
            setNodes({
                "DocumentWorkflowCanvas.useCallback[updateLedgerEventCount]": (currentNodes)=>currentNodes.map({
                        "DocumentWorkflowCanvas.useCallback[updateLedgerEventCount]": (node)=>node.id === "ledger-log" ? {
                                ...node,
                                data: {
                                    ...node.data,
                                    eventCount: nextEventCount
                                }
                            } : node
                    }["DocumentWorkflowCanvas.useCallback[updateLedgerEventCount]"])
            }["DocumentWorkflowCanvas.useCallback[updateLedgerEventCount]"]);
        }
    }["DocumentWorkflowCanvas.useCallback[updateLedgerEventCount]"], [
        setNodes
    ]);
    const markVendorAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentWorkflowCanvas.useCallback[markVendorAllowed]": (vendor)=>{
            setNodes({
                "DocumentWorkflowCanvas.useCallback[markVendorAllowed]": (currentNodes)=>currentNodes.filter({
                        "DocumentWorkflowCanvas.useCallback[markVendorAllowed]": (node)=>node.id !== "blocked-vendor"
                    }["DocumentWorkflowCanvas.useCallback[markVendorAllowed]"]).map({
                        "DocumentWorkflowCanvas.useCallback[markVendorAllowed]": (node)=>node.id === "vendor-slot" ? {
                                ...node,
                                data: {
                                    ...node.data,
                                    label: vendor.name,
                                    vendorName: vendor.name,
                                    vendorId: vendor.id,
                                    status: "allowed",
                                    controlledGoodsStatus: vendor.controlledGoodsStatus,
                                    countryExposure: vendor.countryExposure,
                                    riskReason: undefined
                                }
                            } : node
                    }["DocumentWorkflowCanvas.useCallback[markVendorAllowed]"])
            }["DocumentWorkflowCanvas.useCallback[markVendorAllowed]"]);
            setEdges(buildInitialEdges(workflow));
        }
    }["DocumentWorkflowCanvas.useCallback[markVendorAllowed]"], [
        setEdges,
        setNodes,
        workflow
    ]);
    const markVendorBlocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentWorkflowCanvas.useCallback[markVendorBlocked]": (vendor, reason)=>{
            setNodes({
                "DocumentWorkflowCanvas.useCallback[markVendorBlocked]": (currentNodes)=>{
                    const withoutBlockedNode = currentNodes.filter({
                        "DocumentWorkflowCanvas.useCallback[markVendorBlocked].withoutBlockedNode": (node)=>node.id !== "blocked-vendor"
                    }["DocumentWorkflowCanvas.useCallback[markVendorBlocked].withoutBlockedNode"]);
                    return [
                        ...withoutBlockedNode.map({
                            "DocumentWorkflowCanvas.useCallback[markVendorBlocked]": (node)=>node.id === "vendor-slot" ? {
                                    ...node,
                                    data: {
                                        ...node.data,
                                        label: vendor?.name ?? "Vendor Not Found",
                                        vendorName: vendor?.name ?? "Vendor Not Found",
                                        vendorId: vendor?.id,
                                        status: "blocked",
                                        controlledGoodsStatus: vendor?.controlledGoodsStatus,
                                        countryExposure: vendor?.countryExposure,
                                        riskReason: reason
                                    }
                                } : node
                        }["DocumentWorkflowCanvas.useCallback[markVendorBlocked]"]),
                        {
                            id: "blocked-vendor",
                            type: "blocked",
                            position: {
                                x: 380,
                                y: 520
                            },
                            data: {
                                label: "Vendor Not Authorized",
                                status: "blocked",
                                nodeKind: "blocked",
                                description: "Human review required before authorization."
                            }
                        }
                    ];
                }
            }["DocumentWorkflowCanvas.useCallback[markVendorBlocked]"]);
            setEdges([
                ...buildInitialEdges(workflow).map({
                    "DocumentWorkflowCanvas.useCallback[markVendorBlocked]": (edge)=>edge.id === "edge-vendor-origin" ? {
                            ...edge,
                            label: "connection blocked",
                            markerEnd: {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                                color: "#ba1a1a"
                            },
                            style: blockedEdgeStyle,
                            labelStyle: {
                                fill: "#93000a",
                                fontSize: 12,
                                fontWeight: 800,
                                textDecoration: "line-through"
                            }
                        } : edge
                }["DocumentWorkflowCanvas.useCallback[markVendorBlocked]"]),
                {
                    id: "edge-vendor-blocked",
                    source: "vendor-slot",
                    target: "blocked-vendor",
                    label: "blocked",
                    markerEnd: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                        color: "#ba1a1a"
                    },
                    style: {
                        stroke: "#ba1a1a",
                        strokeWidth: 3
                    },
                    labelStyle: {
                        fill: "#93000a",
                        fontSize: 12,
                        fontWeight: 800
                    },
                    labelBgStyle: {
                        fill: "#ffdad6",
                        fillOpacity: 0.96
                    }
                }
            ]);
        }
    }["DocumentWorkflowCanvas.useCallback[markVendorBlocked]"], [
        setEdges,
        setNodes,
        workflow
    ]);
    const evaluateVendor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentWorkflowCanvas.useCallback[evaluateVendor]": async (vendorId)=>{
            setIsEvaluating(true);
            setDropError(null);
            try {
                const response = await fetch("/api/chainops/vendor-drop", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        vendorId,
                        projectId: project.id
                    })
                });
                if (!response.ok) {
                    throw new Error("Vendor risk evaluation failed.");
                }
                const payload = await response.json();
                setDropResult(payload.result);
                setLedgerEvents({
                    "DocumentWorkflowCanvas.useCallback[evaluateVendor]": (currentEvents)=>{
                        const nextEvents = [
                            ...currentEvents,
                            ...payload.ledgerEvents
                        ];
                        updateLedgerEventCount(nextEvents.length);
                        return nextEvents;
                    }
                }["DocumentWorkflowCanvas.useCallback[evaluateVendor]"]);
                if (payload.result.status === "allowed") {
                    markVendorAllowed(payload.result.vendor);
                } else {
                    markVendorBlocked(payload.result.vendor, payload.result.reason);
                }
                setSelectedNodeId("vendor-slot");
            } catch (error) {
                setDropError(error instanceof Error ? error.message : "Vendor drop failed.");
            } finally{
                setIsEvaluating(false);
            }
        }
    }["DocumentWorkflowCanvas.useCallback[evaluateVendor]"], [
        markVendorAllowed,
        markVendorBlocked,
        project.id,
        updateLedgerEventCount
    ]);
    const applyMockVettingUpdate = async ()=>{
        setDropError(null);
        const response = await fetch("/api/chainops/vendor-risk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                vendorId: "vendor-northline-systems",
                riskStatus: "flagged"
            })
        });
        if (!response.ok) {
            setDropError("Could not apply mock vetting update.");
            return;
        }
        const payload = await response.json();
        setVendorList((currentVendors)=>currentVendors.map((vendor)=>vendor.id === payload.vendor.id ? payload.vendor : vendor));
    };
    const onVendorDragStart = (event, vendorId)=>{
        event.dataTransfer.setData("application/chainops-vendor", vendorId);
        event.dataTransfer.effectAllowed = "move";
    };
    const onPaletteDragStart = (event, item)=>{
        event.dataTransfer.setData("application/chainops-node", JSON.stringify({
            label: item.label,
            nodeKind: item.nodeKind
        }));
        event.dataTransfer.effectAllowed = "copy";
    };
    const onDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentWorkflowCanvas.useCallback[onDragOver]": (event)=>{
            event.preventDefault();
            setIsDragOver(true);
            event.dataTransfer.dropEffect = event.dataTransfer.types.includes("application/chainops-node") ? "copy" : "move";
        }
    }["DocumentWorkflowCanvas.useCallback[onDragOver]"], []);
    const onDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentWorkflowCanvas.useCallback[onDragLeave]": (event)=>{
            if (!wrapperRef.current?.contains(event.relatedTarget)) {
                setIsDragOver(false);
            }
        }
    }["DocumentWorkflowCanvas.useCallback[onDragLeave]"], []);
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentWorkflowCanvas.useCallback[onDrop]": (event)=>{
            event.preventDefault();
            setIsDragOver(false);
            const vendorId = event.dataTransfer.getData("application/chainops-vendor");
            if (vendorId) {
                void evaluateVendor(vendorId);
                return;
            }
            const nodeData = event.dataTransfer.getData("application/chainops-node");
            if (nodeData) {
                const parsed = JSON.parse(nodeData);
                const item = paletteItems.find({
                    "DocumentWorkflowCanvas.useCallback[onDrop].item": (candidate)=>candidate.nodeKind === parsed.nodeKind
                }["DocumentWorkflowCanvas.useCallback[onDrop].item"]);
                if (!item) return;
                const position = screenToFlowPosition({
                    x: event.clientX,
                    y: event.clientY
                });
                const nextNode = createPaletteNode(item, position, ledgerEvents.length);
                setNodes({
                    "DocumentWorkflowCanvas.useCallback[onDrop]": (currentNodes)=>[
                            ...currentNodes,
                            nextNode
                        ]
                }["DocumentWorkflowCanvas.useCallback[onDrop]"]);
                setSelectedNodeId(nextNode.id);
            }
        }
    }["DocumentWorkflowCanvas.useCallback[onDrop]"], [
        evaluateVendor,
        ledgerEvents.length,
        screenToFlowPosition,
        setNodes
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fluo-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$ConsoleNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: "workspace",
                orgId: organization.id,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "fluo-console-action",
                    onClick: applyMockVettingUpdate,
                    children: "Simulate Vetting Update"
                }, void 0, false, {
                    fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                    lineNumber: 648,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fluo-doc-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "fluo-label",
                                children: project.id
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 656,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "fluo-headline mt-12 text-[32px] font-bold leading-37",
                                children: document.title
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 657,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 max-w-[760px] text-[14px] leading-21 text-[var(--fluo-muted)]",
                                children: "Build the approval path, then drop a vendor to run vetting and write the ledger event."
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 660,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 655,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "fluo-doc-header-link fluo-mono",
                        href: "/trace",
                        children: "Trace a part →"
                    }, void 0, false, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 654,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fluo-workspace-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "fluo-side",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fluo-side-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "fluo-label",
                                        children: "Step 1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 673,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "fluo-headline mt-8 text-[17px] font-semibold",
                                        children: "Workflow Nodes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 674,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-[12px] leading-17 text-[var(--fluo-muted)]",
                                        children: "Drag any block onto the canvas to build the approval path."
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 677,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 672,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-14 space-y-8",
                                children: paletteItems.map((item)=>{
                                    const Icon = item.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fluo-palette-item",
                                        "data-node-kind": item.nodeKind,
                                        draggable: true,
                                        onDragStart: (event)=>onPaletteDragStart(event, item),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fluo-palette-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-15 w-15"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 693,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fluo-palette-label",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 696,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                className: "fluo-palette-grip h-15 w-15"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 697,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.nodeKind, true, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 686,
                                        columnNumber: 15
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 681,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-26",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "fluo-label",
                                        children: "Step 2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 704,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "fluo-headline mt-8 text-[17px] font-semibold",
                                        children: "Drop a Vendor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 705,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-[12px] leading-17 text-[var(--fluo-muted)]",
                                        children: "Drag a contractor into the canvas to run vetting."
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 708,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 space-y-10",
                                        children: vendorList.map((vendor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fluo-vendor-chip",
                                                "data-risk": vendor.riskStatus,
                                                draggable: true,
                                                onDragStart: (event)=>onVendorDragStart(event, vendor.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "truncate text-[14px] font-semibold",
                                                                        children: vendor.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                                        lineNumber: 722,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-3 text-[12px] text-[var(--fluo-muted)]",
                                                                        children: vendor.controlledGoodsStatus
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                                lineNumber: 721,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: [
                                                                    "fluo-mono shrink-0 px-8 py-4 text-[10px] uppercase",
                                                                    vendor.riskStatus === "flagged" ? "fluo-status-error" : "fluo-status-clear"
                                                                ].join(" "),
                                                                children: vendor.riskStatus
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                                lineNumber: 729,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "fluo-vendor-chip-hint fluo-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                                className: "h-12 w-12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Drag to canvas"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, vendor.id, true, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 713,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 711,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 671,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: [
                            "fluo-flow",
                            isDragOver ? "fluo-flow-dragover" : ""
                        ].join(" "),
                        ref: wrapperRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
                                className: "fluo-flow-react-bg",
                                connectionLineStyle: {
                                    stroke: "#070a0c",
                                    strokeWidth: 2
                                },
                                defaultEdgeOptions: {
                                    markerEnd: {
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                                        color: "#75777a"
                                    },
                                    style: defaultEdgeStyle
                                },
                                edges: edges,
                                elementsSelectable: true,
                                fitView: true,
                                fitViewOptions: {
                                    padding: 0.22,
                                    maxZoom: 1
                                },
                                minZoom: 0.4,
                                maxZoom: 1.6,
                                nodeTypes: nodeTypes,
                                nodes: nodes,
                                nodesConnectable: true,
                                nodesDraggable: true,
                                onConnect: onConnect,
                                onDragLeave: onDragLeave,
                                onDragOver: onDragOver,
                                onEdgesChange: onEdgesChange,
                                onNodeClick: (_, node)=>setSelectedNodeId(node.id),
                                onNodesChange: onNodesChange,
                                onDrop: onDrop,
                                onPaneClick: ()=>setIsDragOver(false),
                                panOnDrag: true,
                                proOptions: {
                                    hideAttribution: true
                                },
                                zoomOnDoubleClick: true,
                                zoomOnPinch: true,
                                zoomOnScroll: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                                        color: "#d4d4d4",
                                        gap: 22,
                                        size: 1.4,
                                        variant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BackgroundVariant"].Dots
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 788,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {
                                        maskColor: "rgba(243, 243, 243, 0.7)",
                                        nodeColor: "#070a0c",
                                        pannable: true,
                                        zoomable: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 789,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {
                                        showInteractive: false
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 795,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, this),
                            isDragOver ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fluo-flow-dropzone",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Drop to place on the workflow canvas"
                                }, void 0, false, {
                                    fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                    lineNumber: 800,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 799,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 750,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "fluo-inspector",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "fluo-card p-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 808,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "fluo-headline text-[18px] font-semibold",
                                                children: "Inspector"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 809,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 807,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-16 border border-[var(--fluo-border)] bg-[var(--fluo-panel-soft)] p-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fluo-mono text-[11px] uppercase text-[var(--fluo-muted)]",
                                                children: "Selected Node"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 812,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 text-[15px] font-semibold",
                                                children: String(selectedNode?.data?.label ?? "Workflow node")
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 815,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 text-[12px] text-[var(--fluo-muted)]",
                                                children: [
                                                    "Status: ",
                                                    String(selectedNode?.data?.status ?? "ready")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 818,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 811,
                                        columnNumber: 13
                                    }, this),
                                    dropResult?.status === "blocked" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 border border-red-200 bg-red-50 p-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-8 text-[13px] font-semibold text-red-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "h-16 w-16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Human review required before authorization."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 825,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-8 text-[12px] leading-18 text-red-800",
                                                children: dropResult.reason
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 829,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 824,
                                        columnNumber: 15
                                    }, this) : null,
                                    dropResult?.status === "allowed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 border border-emerald-200 bg-emerald-50 p-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-8 text-[13px] font-semibold text-emerald-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-16 w-16"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 19
                                                }, this),
                                                "Vendor path allowed."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 836,
                                        columnNumber: 15
                                    }, this) : null,
                                    isEvaluating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-12 text-[13px] text-[var(--fluo-muted)]",
                                        children: "Reading local vetting JSON and writing ledger event..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 845,
                                        columnNumber: 15
                                    }, this) : null,
                                    dropError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-12 text-[13px] text-red-700",
                                        children: dropError
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 849,
                                        columnNumber: 26
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 806,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$AffectedProjectsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    currentProjectId: project.id,
                                    isBlocked: dropResult?.status === "blocked",
                                    projects: affectedProjects
                                }, void 0, false, {
                                    fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                    lineNumber: 853,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 852,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mt-16 border border-[var(--fluo-border)] bg-white p-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8 flex items-center gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 862,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fluo-mono text-[11px] uppercase",
                                                children: "Part-Origin Context"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                                lineNumber: 863,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 861,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] leading-18 text-[var(--fluo-muted)]",
                                        children: "Component origin visibility required. Country exposure: Canada, United States, China."
                                    }, void 0, false, {
                                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                        lineNumber: 865,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                        lineNumber: 805,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chainops$2f$LedgerDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                events: ledgerEvents,
                nameMap: nameMap,
                variant: "drawer"
            }, void 0, false, {
                fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
                lineNumber: 873,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
        lineNumber: 643,
        columnNumber: 5
    }, this);
}
_s1(DocumentWorkflowCanvas, "9Om7IAxWKwr42ZFzdJRa99pHl1c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"]
    ];
});
_c1 = DocumentWorkflowCanvas;
function DocumentWorkflowPage(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlowProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentWorkflowCanvas, {
            ...props
        }, void 0, false, {
            fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
            lineNumber: 881,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chainops/DocumentWorkflowPage.tsx",
        lineNumber: 880,
        columnNumber: 5
    }, this);
}
_c2 = DocumentWorkflowPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "GenericWorkflowNode");
__turbopack_context__.k.register(_c1, "DocumentWorkflowCanvas");
__turbopack_context__.k.register(_c2, "DocumentWorkflowPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_chainops_11bv071._.js.map