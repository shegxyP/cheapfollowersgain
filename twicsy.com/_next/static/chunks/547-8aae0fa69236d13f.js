"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [547], {
        991: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return h
                }
            });
            var s = i(9501),
                n = (i(7294), i(4184)),
                r = i.n(n),
                l = (i(3062), i(6845)),
                a = i(1614),
                C = i(7812),
                o = i(6061);
            var c = function(e) {
                    var t = (0, o.Z)(e).plans,
                        i = function() {
                            var e = [];
                            return e.push(t.forEach((function(t) {
                                e = [].concat((0, C.Z)(e), (0, C.Z)(t.data))
                            }))), e.map((function(e) {
                                return e.price_discounted
                            }))
                        };
                    return {
                        minPrice: Math.min.apply(Math, (0, C.Z)(i())),
                        maxPrice: Math.max.apply(Math, (0, C.Z)(i()))
                    }
                },
                d = i(1325),
                u = i(5893),
                h = function(e) {
                    var t = e.offer,
                        i = t.type,
                        n = t.buttonText,
                        C = t.buttonUrl,
                        o = t.showStars,
                        h = (0, a.P)(i.toLowerCase()).stats,
                        p = c(i).minPrice;
                    return (0, u.jsxs)("div", {
                        className: r()("offer", {
                            "has-stars": o
                        }),
                        children: [(0, u.jsx)(d.Z, {
                            href: C,
                            children: n
                        }), (0, u.jsxs)("div", {
                            className: "offer__inner",
                            children: [(0, u.jsx)("p", {
                                children: (0, u.jsx)(s.cC, {
                                    id: "Starting at <0>${minPrice}</0>",
                                    values: {
                                        minPrice: p
                                    },
                                    components: {
                                        0: (0, u.jsx)("strong", {})
                                    }
                                })
                            }), o && (0, u.jsx)(l.Z, {
                                rating: h.average
                            }), (0, u.jsx)(l.Z, {
                                rating: t.rating,
                                children: (0, u.jsx)(s.cC, {
                                    id: "<0>{0} / 5</0> \u2014 based on {1} reviews",
                                    values: {
                                        0: h.average,
                                        1: h.totalReviews
                                    },
                                    components: {
                                        0: (0, u.jsx)("strong", {
                                            className: "text-orange"
                                        })
                                    }
                                })
                            })]
                        })]
                    })
                }
        },
        1325: function(e, t, i) {
            var s = i(9499),
                n = i(4730),
                r = i(4184),
                l = i.n(r),
                a = i(3966),
                C = i.n(a),
                o = i(5893),
                c = ["href", "children", "onClick", "block", "small", "large", "secondary", "tertiary", "rounded", "transparent", "className"];

            function d(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(i), !0).forEach((function(t) {
                        (0, s.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            t.Z = function(e) {
                var t = e.href,
                    i = e.children,
                    r = e.onClick,
                    a = e.block,
                    d = e.small,
                    h = e.large,
                    p = e.secondary,
                    L = e.tertiary,
                    m = e.rounded,
                    w = e.transparent,
                    g = e.className,
                    x = (0, n.Z)(e, c),
                    f = l()("btn", (0, s.Z)({
                        "btn--small": d,
                        "btn--large": h,
                        "btn--block": a,
                        "btn--tertiary": L,
                        "btn--secondary": p,
                        "btn--rounded": m,
                        "btn--transparent": w
                    }, g, g));
                return (0, o.jsx)(C(), {
                    href: t,
                    children: (0, o.jsxs)("a", u(u({
                        className: f,
                        onClick: r
                    }, x), {}, {
                        children: [(0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("strong", {
                            children: i
                        })]
                    }))
                })
            }
        },
        3062: function(e, t, i) {
            var s = i(9499),
                n = i(4730),
                r = i(7294),
                l = i(4184),
                a = i.n(l),
                C = i(3966),
                o = i.n(C),
                c = i(5893),
                d = ["href", "children", "buttonType", "onClick", "block", "small", "large", "secondary", "tertiary", "rounded", "transparent", "className"];

            function u(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(i), !0).forEach((function(t) {
                        (0, s.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var p = function(e) {
                var t = e.href,
                    i = e.children,
                    l = (e.buttonType, e.onClick),
                    C = e.block,
                    u = e.small,
                    p = e.large,
                    L = e.secondary,
                    m = e.tertiary,
                    w = e.rounded,
                    g = e.transparent,
                    x = e.className,
                    f = (0, n.Z)(e, d),
                    v = a()("btn", (0, s.Z)({
                        "btn--small": u,
                        "btn--large": p,
                        "btn--block": C,
                        "btn--tertiary": m,
                        "btn--secondary": L,
                        "btn--rounded": w,
                        "btn--transparent": g
                    }, x, x)),
                    j = t ? {
                        href: t
                    } : "",
                    y = t ? o() : r.Fragment,
                    V = t ? "a" : "button";
                return (0, c.jsx)(y, h(h({}, j), {}, {
                    children: (0, c.jsxs)(V, h(h(h({
                        className: v,
                        onClick: l
                    }, j), f), {}, {
                        children: [(0, c.jsx)("span", {}), (0, c.jsx)("span", {}), (0, c.jsx)("span", {}), (0, c.jsx)("strong", {
                            children: i
                        })]
                    }))
                }))
            };
            p.defaultProps = {
                buttonType: "button"
            }, t.Z = p
        },
        9322: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return g
                }
            });
            var s = i(9499),
                n = i(6864),
                r = i(7294),
                l = i(4184),
                a = i.n(l),
                C = i(1798),
                o = i(5893),
                c = function(e) {
                    var t = e.children;
                    return (0, o.jsx)("div", {
                        className: "section__head",
                        children: t
                    })
                },
                d = function(e) {
                    var t = e.children;
                    return (0, o.jsx)("div", {
                        className: "section__image",
                        children: t
                    })
                },
                u = function(e) {
                    var t = e.children;
                    return (0, o.jsx)("div", {
                        className: "section__footer text-sm",
                        children: t
                    })
                },
                h = function(e) {
                    var t = e.children;
                    return (0, o.jsx)("div", {
                        className: "section__body",
                        children: t
                    })
                },
                p = function(e) {
                    var t = e.children;
                    return (0, o.jsx)("div", {
                        className: "section__entry",
                        children: t
                    })
                };

            function L(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(i), !0).forEach((function(t) {
                        (0, s.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : L(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var w = (0, r.forwardRef)((function(e, t) {
                var i, l = (0, n.Z)({}, e),
                    c = l.size,
                    d = void 0 === c ? "" : c,
                    u = l.gray,
                    h = void 0 !== u && u,
                    p = l.noShell,
                    L = void 0 !== p && p,
                    w = l.modifier,
                    g = void 0 === w ? "" : w,
                    x = l.className,
                    f = void 0 === x ? "" : x,
                    v = l.children,
                    j = L ? r.Fragment : C.Z,
                    y = L ? {} : {
                        size: d
                    };
                return (0, o.jsx)("div", {
                    className: a()("section", (i = {}, (0, s.Z)(i, "section--".concat(g), g), (0, s.Z)(i, "section--gray", h), (0, s.Z)(i, f, f), i)),
                    ref: t,
                    dir: "ltr",
                    children: (0, o.jsx)(j, m(m({}, y), {}, {
                        children: v
                    }))
                })
            }));
            w.displayName = "Section", w.Head = c, w.Image = d, w.Footer = u, w.Body = h, w.Entry = p;
            var g = w
        },
        1798: function(e, t, i) {
            var s = i(9499),
                n = (i(7294), i(4184)),
                r = i.n(n),
                l = i(5893);
            t.Z = function(e) {
                var t = e.size,
                    i = e.children;
                return (0, l.jsx)("div", {
                    className: r()("shell", (0, s.Z)({}, {
                        xsm: "shell--extra-small",
                        small: "shell--small",
                        medium: "shell--medium",
                        large: "shell--large"
                    }[t], t)),
                    children: i
                })
            }
        },
        6845: function(e, t, i) {
            i(7294);
            var s = i(4377),
                n = i(5893);
            t.Z = function(e) {
                for (var t = e.rating, i = e.children, r = [], l = 0; l < t; l++) r.push((0, n.jsx)("li", {
                    children: (0, n.jsx)(s.Z, {
                        name: "star"
                    })
                }, l));
                return (0, n.jsxs)("div", {
                    className: "stars text-xsm",
                    children: [(0, n.jsx)("ul", {
                        children: r
                    }), i]
                })
            }
        },
        4377: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return u
                }
            });
            var s = i(9499),
                n = i(4730),
                r = i(4184),
                l = i.n(r),
                a = (i(7294), i(5893)),
                C = ["name", "className"];

            function o(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(i), !0).forEach((function(t) {
                        (0, s.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var d = {
                    warning: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FD5252" : i,
                            n = e.width,
                            r = void 0 === n ? 23 : n,
                            l = e.height,
                            C = void 0 === l ? 23 : l;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 23 23",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M11.2408 22.4812C17.4606 22.4812 22.4814 17.4604 22.4814 11.2406C22.4814 5.02081 17.4606 0 11.2408 0C5.02102 0 0.00021553 5.02081 0.00021553 11.2406C0.00021553 17.4604 5.02102 22.4812 11.2408 22.4812ZM11.2408 1.49875C16.6363 1.49875 20.9827 5.84512 20.9827 11.2406C20.9827 16.6361 16.6363 20.9825 11.2408 20.9825C5.84534 20.9825 1.49896 16.6361 1.49896 11.2406C1.49896 5.84512 5.84534 1.49875 11.2408 1.49875Z",
                                fill: s
                            }), (0, a.jsx)("path", {
                                d: "M11.2409 4.28271C10.3577 4.28271 9.63508 4.92504 9.63508 5.71009V11.4196C9.63508 12.2047 10.3577 12.847 11.2409 12.847C12.1241 12.847 12.8467 12.2047 12.8467 11.4196V5.71009C12.8467 4.92504 12.1241 4.28271 11.2409 4.28271Z",
                                fill: s
                            }), (0, a.jsx)("path", {
                                d: "M11.2409 14.9878C10.3577 14.9878 9.63508 15.7104 9.63508 16.5936C9.63508 17.4768 10.3577 18.1994 11.2409 18.1994C12.1241 18.1994 12.8467 17.4768 12.8467 16.5936C12.8467 15.7104 12.1241 14.9878 11.2409 14.9878Z",
                                fill: s
                            })]
                        })
                    },
                    split: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? 14 : i,
                            n = e.height,
                            r = void 0 === n ? 14 : n,
                            l = e.color,
                            C = void 0 === l ? "#FF553C" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 14 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M13.4908 4.00003L11.4285 5.71432C11.1002 5.97528 10.8928 6.14289 10.5714 6.14289C10.0773 6.14289 9.71422 5.74474 9.71422 5.28575V4.00003H6.50213C6.30067 4.27564 5.99081 4.96988 5.79585 5.4057C5.52195 6.019 5.27343 6.57318 4.99437 7.00003C5.27333 7.4265 5.52195 7.98107 5.79585 8.59437C5.99081 9.03021 6.30066 9.72492 6.50213 10H9.71422V8.71432C9.71422 8.25533 10.0773 7.85718 10.5714 7.85718C10.8928 7.85718 11.1002 8.02478 11.4285 8.28575L13.4908 10C13.7989 10.261 13.9999 10.5088 13.9999 10.8572C13.9999 11.2056 13.7989 11.4534 13.4908 11.7143L11.4285 13.4286C11.1002 13.6896 10.8928 13.8572 10.5714 13.8572C10.0773 13.8572 9.71422 13.459 9.71422 13V11.7143H6.28564C5.31237 11.7143 4.83492 10.6459 4.23061 9.29328C4.03096 8.84635 3.71211 8.13279 3.50595 7.85718H1.14279C0.669645 7.85718 0.285645 7.47318 0.285645 7.00003C0.285645 6.52689 0.669645 6.14289 1.14279 6.14289H3.50595C3.71211 5.86728 4.03097 5.15372 4.23071 4.70679C4.83492 3.35421 5.31237 2.28575 6.28564 2.28575H9.71422V1.00003C9.71422 0.541047 10.0773 0.142892 10.5714 0.142892C10.8928 0.142892 11.1002 0.310495 11.4285 0.571464L13.4908 2.28575C13.7989 2.54671 13.9999 2.79448 13.9999 3.14289C13.9999 3.49131 13.7989 3.73907 13.4908 4.00003Z",
                                fill: C
                            })
                        })
                    },
                    people: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? 19 : i,
                            n = e.height,
                            r = void 0 === n ? 9 : n,
                            l = e.color,
                            C = void 0 === l ? "#FF553C" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 19 9",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M9.67674 3.79166C10.7221 3.79166 11.5724 2.94115 11.5724 1.89583C11.5724 0.850507 10.7221 0 9.67674 0C8.63142 0 7.78091 0.850507 7.78091 1.89583C7.78091 2.94115 8.63142 3.79166 9.67674 3.79166ZM13.7899 6.84184C13.7899 8.18363 11.8131 8.36865 9.67674 8.36865C7.54037 8.36865 5.56361 8.18375 5.56361 6.84184C5.56361 5.65619 7.36028 4.27802 9.67674 4.27802C11.9931 4.27802 13.7899 5.65619 13.7899 6.84184ZM13.2641 2.51429C13.2641 1.61347 13.9969 0.880716 14.8976 0.880716C15.7985 0.880716 16.5314 1.6135 16.5314 2.51429C16.5314 3.41511 15.7985 4.148 14.8976 4.148C13.9968 4.14787 13.2641 3.41498 13.2641 2.51429ZM18.442 6.77642C18.442 7.93278 16.7385 8.09211 14.8975 8.09211C14.7214 8.09211 14.5485 8.09051 14.3797 8.08676C14.2981 8.08502 14.2248 8.03659 14.1908 7.96234C14.1571 7.88822 14.1686 7.80139 14.2204 7.73864C14.2276 7.72994 14.6827 7.16145 14.5372 6.44367C14.3939 5.73752 13.6574 5.09841 13.65 5.09197C13.5917 5.04194 13.5649 4.96447 13.5799 4.88914C13.5949 4.81382 13.6494 4.75241 13.7223 4.72846C14.1575 4.58557 14.5789 4.56724 14.8974 4.56724C16.8938 4.56711 18.4419 5.75478 18.4419 6.7764L18.442 6.77642ZM4.44115 4.22877C5.34197 4.22877 6.07473 3.49598 6.07473 2.59519C6.07473 1.69437 5.34194 0.961479 4.44115 0.961479C3.54033 0.961479 2.80744 1.69437 2.80744 2.59519C2.80757 3.49587 3.54047 4.22877 4.44115 4.22877ZM5.7875 4.88261C5.76677 4.80688 5.70616 4.74855 5.62976 4.73102C5.28191 4.65048 4.85646 4.60432 4.46258 4.60432C2.45851 4.60432 0.904297 5.79665 0.904297 6.82245C0.904297 7.98337 2.61456 8.14335 4.46258 8.14335L4.62633 8.14402C4.6852 8.14442 4.74514 8.14469 4.80347 8.14469C4.86194 8.14469 4.91894 8.14442 4.97165 8.14335C5.05273 8.14175 5.12564 8.09412 5.16016 8.02094C5.19495 7.94762 5.18491 7.86079 5.13487 7.7971C5.13073 7.79175 4.72346 7.26434 4.80241 6.53747C4.85793 6.02584 5.49009 5.32186 5.72905 5.09375C5.78578 5.03943 5.80826 4.95835 5.78752 4.88262L5.7875 4.88261Z",
                                fill: C
                            })
                        })
                    },
                    message: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? 12 : i,
                            n = e.height,
                            r = void 0 === n ? 12 : n,
                            l = e.color,
                            C = void 0 === l ? "#FF553C" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 12 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M8.29421 0.44431C5.65215 -0.621959 2.59643 0.28437 1.00853 2.59018C-0.552686 4.86933 -0.272468 7.89486 1.64903 9.86746C1.51559 10.4406 1.24872 11.1337 0.714968 11.4802C0.621562 11.5468 0.581531 11.6535 0.594874 11.7601C0.621562 11.8667 0.701624 11.9467 0.821718 11.9733C0.848405 11.9733 1.04856 12 1.36881 12C1.96928 12 2.97006 11.8934 3.8374 11.2803C4.51793 11.5335 5.23849 11.6668 5.98574 11.6668H5.99908C8.85464 11.6668 11.3232 9.69419 11.8837 6.97521C12.4441 4.25622 10.9363 1.51058 8.29421 0.44431ZM3.89078 4.22956H6.90646C7.05324 4.22956 7.17333 4.34952 7.17333 4.49613C7.17333 4.64274 7.05324 4.7627 6.90646 4.7627H3.89078C3.74399 4.7627 3.6239 4.64274 3.6239 4.49613C3.6239 4.34952 3.74399 4.22956 3.89078 4.22956ZM8.72121 7.17513H3.89078C3.74399 7.17513 3.6239 7.05518 3.6239 6.90857C3.6239 6.76195 3.74399 6.642 3.89078 6.642H8.72121C8.86799 6.642 8.98808 6.76195 8.98808 6.90857C8.98808 7.05518 8.86799 7.17513 8.72121 7.17513Z",
                                fill: C
                            })
                        })
                    },
                    lock: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FF553C" : i,
                            n = e.width,
                            r = void 0 === n ? "13" : n,
                            l = e.height,
                            C = void 0 === l ? "13" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 13 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M13 3.38286V3.67751C13 3.77839 12.9792 3.87815 12.939 3.97029C12.8988 4.06243 12.8401 4.14488 12.7667 4.21228C12.6933 4.27969 12.6068 4.33053 12.5129 4.36151C12.419 4.39249 12.3198 4.4029 12.2217 4.39208H12.2069C12.0341 4.37367 11.8742 4.29042 11.758 4.15842C11.6419 4.02643 11.5777 3.85507 11.578 3.67751V3.38286C11.578 2.87164 11.3794 2.38136 11.0258 2.01987C10.6723 1.65839 10.1928 1.45531 9.69277 1.45531H9.57023C9.07024 1.45531 8.59072 1.65839 8.23717 2.01987C7.88362 2.38136 7.685 2.87164 7.685 3.38286V4.45817C7.21235 4.40722 6.74239 4.3673 6.263 4.34389V3.38011C6.26371 2.48411 6.61205 1.625 7.23158 0.991303C7.85111 0.357607 8.69121 0.001094 9.56754 2.8021e-07H9.69008C10.1247 -0.000180574 10.5551 0.0871864 10.9566 0.25711C11.3582 0.427034 11.7231 0.676185 12.0305 0.990331C12.3378 1.30448 12.5817 1.67746 12.748 2.08798C12.9144 2.4985 13 2.9385 13 3.38286ZM10.1277 6.60739V11.7843C10.1279 11.9609 10.0677 12.132 9.95752 12.268C9.84736 12.404 9.69417 12.4964 9.52445 12.5291L9.07468 12.6159C7.75261 12.8715 6.41004 13.0001 5.06453 13C3.71858 13.0002 2.37556 12.8716 1.05304 12.6159L0.603274 12.5291C0.433549 12.4964 0.280356 12.404 0.170195 12.268C0.0600331 12.132 -0.0001695 11.9609 3.58454e-07 11.7843V6.60739C-0.0001695 6.43079 0.0600331 6.25969 0.170195 6.12367C0.280356 5.98765 0.433549 5.89528 0.603274 5.86253L0.669257 5.85014C3.57368 5.28833 6.55539 5.28833 9.45981 5.85014L9.52579 5.86253C9.69527 5.89556 9.84815 5.98806 9.95804 6.12405C10.0679 6.26004 10.1279 6.43099 10.1277 6.60739ZM6.92014 7.98422L6.55117 7.60697C6.49036 7.54677 6.40931 7.51265 6.32467 7.51163C6.24003 7.5106 6.15821 7.54275 6.09602 7.60146L4.57437 8.97829L3.86741 8.41241C3.80362 8.3613 3.7237 8.33587 3.6428 8.34094C3.5619 8.34602 3.48563 8.38124 3.42842 8.43995L3.0608 8.8172C3.00187 8.87791 2.96748 8.9591 2.96448 9.04459C2.96149 9.13007 2.99011 9.21357 3.04464 9.27844L4.33737 10.8067C4.36845 10.8425 4.40661 10.8712 4.44932 10.8908C4.49202 10.9105 4.53832 10.9206 4.58515 10.9206C4.63197 10.9206 4.67827 10.9105 4.72098 10.8908C4.76369 10.8712 4.80184 10.8425 4.83292 10.8067L6.93091 8.45509C6.98842 8.39066 7.01939 8.30603 7.01738 8.21882C7.01538 8.13162 6.98054 8.04857 6.92014 7.98697V7.98422Z",
                                fill: s
                            })
                        })
                    },
                    lightning: function(e) {
                        e.className;
                        var t = e.color,
                            i = void 0 === t ? "#FF553C" : t,
                            s = e.width,
                            n = void 0 === s ? "16" : s,
                            r = e.height,
                            l = void 0 === r ? "12" : r;
                        return (0, a.jsxs)("svg", {
                            width: n,
                            height: l,
                            viewBox: "0 0 16 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M14.6147 4.69785L13.2279 4.91039C13.0754 4.94079 12.9231 4.81932 12.9231 4.65231L12.9383 1.61585C12.9383 0.826343 11.8866 0.568244 11.5055 1.25145L8.39628 7.05108C8.10667 7.59765 8.56395 8.25043 9.17357 8.15936L10.5606 7.94682C10.713 7.91642 10.8654 8.0379 10.8654 8.2049L10.8502 11.2414C10.8502 12.0309 11.9019 12.289 12.2829 11.6058L15.3921 5.80613C15.6818 5.25957 15.2245 4.60678 14.6148 4.69785H14.6147Z",
                                fill: i
                            }), (0, a.jsx)("path", {
                                opacity: "0.3",
                                d: "M8.51873 1.77303C8.51873 1.26768 8.12706 0.857178 7.64495 0.857178H1.30249C0.820353 0.857178 0.428711 1.2677 0.428711 1.77303C0.428711 2.27835 0.82038 2.68888 1.30249 2.68888H7.66001C8.12701 2.68888 8.51868 2.27827 8.51868 1.77303H8.51873Z",
                                fill: i
                            }), (0, a.jsx)("path", {
                                opacity: "0.3",
                                d: "M7 6C7 5.44821 6.70952 5 6.35195 5H1.64804C1.29046 5 1 5.44825 1 6C1 6.55176 1.29048 7 1.64804 7H6.36313C6.70948 7 6.99996 6.55166 6.99996 6H7Z",
                                fill: i
                            }), (0, a.jsx)("path", {
                                opacity: "0.2",
                                d: "M6.73209 9.55762H2.2147C1.73439 9.55762 1.34424 9.96814 1.34424 10.4735C1.34424 10.9788 1.73442 11.3893 2.2147 11.3893H6.73209C7.2124 11.3893 7.60256 10.9788 7.60256 10.4735C7.60256 9.96823 7.21238 9.55762 6.73209 9.55762Z",
                                fill: i
                            })]
                        })
                    },
                    camera: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FF553C" : i,
                            n = e.width,
                            r = void 0 === n ? "12" : n,
                            l = e.height,
                            C = void 0 === l ? "8" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 12 8",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M7.09674 6.48499e-05C7.48011 6.48499e-05 7.84781 0.172801 8.11889 0.480311C8.39006 0.787936 8.54232 1.20506 8.54232 1.63997V2.41077L10.8173 0.919903C10.9779 0.814661 11.166 0.777118 11.3486 0.813621C11.5312 0.850227 11.6967 0.958694 11.8157 1.11989C11.9349 1.28108 12.0001 1.4848 12 1.69518V6.30489C12.0001 6.51527 11.9349 6.719 11.8157 6.88018C11.6967 7.04137 11.5312 7.14984 11.3486 7.18644C11.166 7.22295 10.9779 7.1854 10.8173 7.08016L8.54232 5.58929V6.3601C8.54232 6.79501 8.39005 7.21213 8.11889 7.51975C7.84781 7.82727 7.48011 8 7.09674 8H1.44567C1.0622 8 0.694509 7.82726 0.423431 7.51975C0.152354 7.21213 0 6.79501 0 6.3601V1.6399C0 1.205 0.152358 0.787871 0.423431 0.480246C0.694509 0.172728 1.0622 0 1.44567 0L7.09674 6.48499e-05Z",
                                fill: s
                            })
                        })
                    },
                    heart: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FF553C" : i,
                            n = e.width,
                            r = void 0 === n ? "18" : n,
                            l = e.height,
                            C = void 0 === l ? "17" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M9.07974 16.7646L7.83097 15.5086C3.19714 11.3708 0.168091 8.58102 0.168091 5.15948C0.168091 2.37529 2.30925 0.214355 5.06715 0.214355C6.58671 0.214355 8.10062 0.934894 9.07974 2.10338C10.0588 0.934876 11.5728 0.214355 13.0923 0.214355C15.8502 0.214355 17.9914 2.37529 17.9914 5.15948C17.9914 8.58093 14.9623 11.3707 10.3285 15.5086L9.07974 16.7646Z",
                                fill: s
                            })
                        })
                    },
                    star: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FF553C" : i,
                            n = e.width,
                            r = void 0 === n ? "19" : n,
                            l = e.height,
                            C = void 0 === l ? "20" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 19 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M8.80729 0.655781C9.19147 -0.218594 9.8084 -0.218594 10.193 0.655781L12.6447 6.22902L18.1772 7.06861C19.0648 7.20264 19.2653 7.86154 18.6265 8.54377L14.588 12.8227L15.5787 18.9209C15.7303 19.8773 15.216 20.2677 14.4315 19.8067L9.50003 16.8973L4.56876 19.8067C3.78387 20.2677 3.26973 19.8773 3.42116 18.9209L4.41182 12.8227L0.373554 8.54377C-0.265227 7.86154 -0.0649666 7.20264 0.822905 7.06861L6.35495 6.22902L8.80729 0.655781Z",
                                fill: s
                            })
                        })
                    },
                    visa: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "28" : i,
                            n = e.height,
                            r = void 0 === n ? "10" : n;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 28 10",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7.03166 9.05277H4.62731L2.82439 2.32375C2.73873 2.01428 2.55705 1.74057 2.28982 1.61166C1.62279 1.28754 0.887736 1.02961 0.0859375 0.899469V0.640419H3.95912C4.49369 0.640419 4.89465 1.02962 4.9614 1.48152L5.89693 6.33538L8.30014 0.640419H10.6377L7.03166 9.05277ZM11.9739 9.05277H9.70314L11.5729 0.640419H13.8437L11.9739 9.05277ZM16.7802 2.96974C16.847 2.51671 17.248 2.25766 17.7157 2.25766C18.4507 2.19258 19.2514 2.32262 19.9196 2.64562L20.3205 0.834399C19.6524 0.575347 18.9173 0.445312 18.2503 0.445312C16.0464 0.445312 14.4427 1.61053 14.4427 3.22766C14.4427 4.45796 15.5786 5.10395 16.3805 5.49315C17.248 5.88122 17.5821 6.14027 17.5152 6.52823C17.5152 7.11028 16.847 7.36944 16.18 7.36944C15.3782 7.36944 14.5763 7.17535 13.8424 6.85123L13.4416 8.66357C14.2434 8.98657 15.1109 9.11671 15.9127 9.11671C18.3839 9.18066 19.9196 8.01645 19.9196 6.26918C19.9196 4.06888 16.7802 3.93986 16.7802 2.96974ZM27.8678 9.05277L26.0649 0.640419H24.1282C23.7273 0.640419 23.3264 0.89947 23.1927 1.28754L19.8541 9.05277H22.1916L22.6581 7.8236H25.5303L25.7976 9.05277H27.8678ZM24.4616 2.90466L25.1287 6.0752H23.2589L24.4616 2.90466Z",
                                fill: "#172B85"
                            })
                        })
                    },
                    symantec: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "72" : i,
                            n = e.height,
                            r = void 0 === n ? "19" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 77 22",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M9.60899 6.23189C13.0832 6.23189 15.8341 8.97467 15.8341 12.414C15.8341 15.8643 13.0722 18.5962 9.60899 18.5962C6.13478 18.5962 3.38391 15.8534 3.38391 12.414C3.38391 8.96378 6.14574 6.23189 9.60899 6.23189ZM9.60899 3.2932C4.61139 3.2932 0.523438 7.34206 0.523438 12.3161C0.523438 17.2792 4.61139 21.3389 9.60899 21.3389C14.6066 21.3389 18.6945 17.2792 18.6945 12.3161C18.6945 7.34206 14.6175 3.2932 9.60899 3.2932ZM17.8835 2.8796V3.48911H18.4973V2.8796H17.8835ZM19.8234 2.17214V2.78164H20.4371V2.17214H19.8234ZM19.8234 0.953125V1.56263H20.4371V0.953125H19.8234Z",
                                fill: "#FDB511"
                            }), (0, a.jsx)("path", {
                                d: "M12.1616 7.85156C10.5287 9.87599 10.1231 10.7903 9.39981 12.5099C8.68743 10.9862 7.76682 9.97395 6.23247 9.26649C5.9256 9.16853 5.82696 9.16853 5.61873 9.47329C5.4105 9.77804 5.52009 9.98484 5.82696 10.2896C6.4407 11.1059 7.15308 11.8134 7.66819 12.6188C8.28193 13.631 8.89567 15.3616 9.20254 15.7643C9.41077 16.069 9.81628 16.2758 10.0245 16.2758C10.9451 16.1779 10.9451 15.6663 11.1424 14.8609C11.4493 13.5439 11.8548 12.1181 13.5974 10.4964V7.9604H12.1726V7.85156H12.1616ZM74.6426 17.1792C73.6234 17.1792 72.8014 16.8744 72.2972 16.2649C71.7821 15.6554 71.4753 14.85 71.4753 13.8269C71.4753 12.8038 71.7821 11.9984 72.2972 11.3889C72.8124 10.7794 73.6234 10.3767 74.6426 10.3767C75.5632 10.3767 76.2756 10.5835 76.7907 11.0841L75.9687 12.4011C75.7605 12.1943 75.5632 12.0963 75.355 12.0963C75.1468 11.9984 74.9495 11.9984 74.7412 11.9984C73.9193 11.9984 73.5138 12.6079 73.5138 13.8269C73.5138 15.0459 73.9193 15.6554 74.7412 15.6554C75.1468 15.6554 75.5632 15.4486 76.0674 15.1439L76.988 16.3629C76.2756 16.8744 75.5632 17.1792 74.6426 17.1792V17.1792ZM66.5763 13.2174H68.6148C68.6148 12.2052 68.3079 11.6936 67.6942 11.6936C67.3873 11.6936 67.1791 11.7916 66.9818 11.9984C66.6859 12.314 66.5763 12.7167 66.5763 13.2174ZM66.5763 14.3385C66.5763 14.7412 66.7845 15.1548 66.9818 15.3507C67.1901 15.5575 67.4969 15.6554 67.9024 15.6554C68.1107 15.6554 68.3079 15.6554 68.6148 15.5575C68.823 15.4595 69.0203 15.4595 69.1299 15.3507C69.2285 15.2527 69.4368 15.2527 69.645 15.0459L70.3574 16.2649C70.0505 16.4717 69.8423 16.5697 69.645 16.6676C69.4368 16.7656 69.2395 16.8744 68.823 16.9724C68.5162 17.0703 68.1107 17.0703 67.7052 17.0703C66.7845 17.0703 65.9735 16.7656 65.3598 16.1561C64.746 15.5466 64.5378 14.7412 64.5378 13.7181C64.5378 12.695 64.8447 11.8895 65.3598 11.1821C65.8749 10.5726 66.6859 10.1699 67.6065 10.1699C68.6258 10.1699 69.3381 10.4746 69.7546 11.1821C70.2697 11.7916 70.467 12.7058 70.467 13.7181V14.2296L66.5763 14.3385V14.3385ZM60.2526 11.8025H59.332V10.4855H60.3512L60.6581 8.65698H62.1924V10.4855H63.6172V11.8025H62.1924V14.948C62.1924 15.2527 62.1925 15.4595 62.2911 15.5575C62.3897 15.6554 62.598 15.7643 62.9048 15.7643C63.1131 15.7643 63.3103 15.7643 63.6172 15.6663L63.8254 16.9833C63.3103 17.1901 62.8062 17.1901 62.4007 17.1901C60.9759 17.1901 60.3622 16.4826 60.3622 15.0568V11.8025H60.2526ZM52.5918 17.0703V10.5835H53.8193L54.2248 11.5957C54.9372 10.7794 55.6495 10.4855 56.4715 10.4855C57.699 10.4855 58.3127 11.3018 58.3127 12.9235V17.1792H56.3729V12.8147C56.3729 12.3031 56.1646 11.9984 55.7591 11.9984C55.3536 11.9984 54.9372 12.2052 54.6413 12.5099V17.0703H52.5918ZM49.1176 15.4486V14.0337C48.2956 14.2405 47.7915 14.3385 47.5832 14.5452C47.4846 14.6432 47.375 14.85 47.375 15.0568C47.375 15.5683 47.5832 15.7643 48.0874 15.7643C48.5148 15.8622 48.8217 15.6554 49.1176 15.4486V15.4486ZM49.1176 12.9235V12.7167C49.1176 12.412 49.0189 12.2052 48.9094 12.1072C48.8107 12.0093 48.6025 11.9004 48.197 11.9004C47.6819 11.9004 47.0791 12.1072 46.3558 12.412L45.742 11.193C46.564 10.6814 47.4736 10.4855 48.3943 10.4855C49.3149 10.4855 49.9286 10.6923 50.3341 11.095C50.7396 11.4977 51.0465 12.1072 51.0465 12.9235V17.1792H49.819C49.6108 16.6676 49.5121 16.4717 49.5121 16.4717C48.8984 16.9833 48.2847 17.288 47.5723 17.288C46.9585 17.288 46.4544 17.0812 46.1475 16.7765C45.742 16.4717 45.5338 15.9602 45.5338 15.3616C45.5338 14.6541 45.742 14.1425 46.2462 13.8378C46.7722 13.3262 47.6928 13.1194 49.1176 12.9235V12.9235ZM40.4485 11.3998C41.0622 10.6923 41.7746 10.3875 42.487 10.3875C43.1994 10.3875 43.6049 10.5943 43.9118 11.095C44.2186 11.4977 44.3173 12.1072 44.3173 12.8147V17.0703H42.3774V12.7058C42.3774 12.1943 42.1692 11.8895 41.7637 11.8895C41.4568 11.8895 41.0513 12.0963 40.6458 12.4011V16.9615H38.7059V12.597C38.7059 12.0855 38.4977 11.7807 38.0922 11.7807C37.6867 11.7807 37.3798 11.9875 36.9743 12.2923V16.8527H35.1331V10.3875H36.3606L36.7661 11.3998C37.4784 10.5835 38.1908 10.2896 38.9142 10.2896C39.6265 10.3875 40.1416 10.6923 40.4485 11.3998V11.3998ZM30.4423 17.3751L27.9874 10.4855H30.0259L31.2534 15.2527L32.2726 10.4855H34.1138L32.174 17.0812C31.7685 18.605 30.7492 19.4104 29.3135 19.4104C29.0066 19.4104 28.6011 19.4104 28.1956 19.3125L28.4038 17.9955H29.0176C29.3245 17.9955 29.6313 17.8975 29.8396 17.7887C30.1355 17.7887 30.2341 17.5819 30.4423 17.3751ZM24.009 17.1792C22.6829 17.1792 21.5541 16.8744 20.743 16.167L21.565 14.752C22.2774 15.2636 23.0994 15.4595 24.02 15.4595C24.4255 15.4595 24.842 15.3616 25.0392 15.2527C25.2475 15.0459 25.4447 14.85 25.4447 14.5452V14.3385L25.3461 14.1317L25.2475 13.9249C25.2475 13.9249 25.1488 13.8269 25.0392 13.8269C24.9296 13.8269 24.831 13.7289 24.831 13.7289C24.7324 13.7289 24.6228 13.631 24.5241 13.631C24.4255 13.631 24.3159 13.533 24.2173 13.533C24.1186 13.533 24.009 13.4351 23.8118 13.4351C23.6035 13.3371 23.5049 13.3371 23.4062 13.3371C23.0994 13.2392 22.7925 13.1303 22.5843 13.0324C22.376 12.9344 22.1788 12.7276 21.8719 12.5208C21.6637 12.314 21.4664 12.1181 21.3568 11.8134C21.2582 11.5086 21.1486 11.1059 21.1486 10.8011C21.1486 9.98484 21.4554 9.38621 21.9705 8.97262C22.4856 8.56991 23.2966 8.26516 24.2173 8.26516C25.3351 8.26516 26.2558 8.47195 26.8695 8.87466L26.2558 10.2896C25.642 9.98484 24.9296 9.88688 24.3159 9.88688C23.3953 9.88688 22.9898 10.1916 22.9898 10.7032C22.9898 10.8011 22.9898 10.91 23.0884 11.0079C23.0884 11.1059 23.1871 11.2147 23.2966 11.2147C23.3953 11.3127 23.5049 11.3127 23.6035 11.4215C23.8118 11.5195 23.9104 11.5195 24.009 11.5195C24.1077 11.5195 24.3159 11.6174 24.5241 11.7263C24.6228 11.7263 24.7324 11.8242 24.7324 11.8242C25.0392 11.9222 25.2475 12.031 25.4447 12.129C25.653 12.2269 25.8502 12.3358 26.1571 12.5317C26.3654 12.6297 26.6722 12.8365 26.7709 13.0433C26.9791 13.25 27.0777 13.446 27.1764 13.7507C27.275 14.0555 27.3846 14.3602 27.3846 14.7629C27.3846 15.5792 27.0777 16.1779 26.5626 16.6894C25.8502 16.9724 25.0283 17.1792 24.009 17.1792",
                                fill: "black"
                            }), (0, a.jsx)("path", {
                                d: "M16.6561 4.09457V3.48507H16.0423V4.09457H16.6561ZM16.6561 4.70408H17.2698V4.09457H16.6561V4.70408ZM17.8836 4.70408H17.2698V5.31359H16.6561V4.70408H15.4286V5.31359H14.7162V5.92309H15.33V6.5326H14.7162V6.02105H14.1025V6.63056H13.4887V7.24006H12.875V9.77604H14.1025V9.16654H14.7162V8.55703H15.33V7.94753H14.7162V7.33802H15.33V7.94753H15.9437V7.33802H16.5574V6.63056H17.1712V6.02105H17.7849V4.70408H17.8836V4.70408ZM18.5959 4.09457H19.2097V3.48507H18.5959V4.09457ZM17.8836 4.09457V4.70408H18.4973V4.09457H17.8836ZM17.8836 2.87556H17.2698V4.09457H17.8836V2.87556ZM19.2097 2.1681H17.9822V2.77761H19.2097V2.1681ZM19.2097 1.55859V2.1681H19.8234V1.55859H19.2097Z",
                                fill: "black"
                            })]
                        })
                    },
                    mastercard: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "27" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 27 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M18.4112 16.132C22.68 16.132 26.1397 12.7036 26.1397 8.47441C26.1397 4.24523 22.68 0.816772 18.4112 0.816772C16.4968 0.816772 14.7451 1.50641 13.3951 2.64852C12.0458 1.50935 10.2964 0.821737 8.38473 0.821737C4.11624 0.821737 0.655884 4.25019 0.655884 8.47938C0.655884 12.7086 4.11624 16.137 8.38473 16.137C10.2991 16.137 12.0509 15.4474 13.401 14.3053C14.7501 15.4444 16.4995 16.132 18.4112 16.132Z",
                                fill: "#ED0006"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M13.4063 14.2975C15.0686 12.8928 16.1226 10.8026 16.1226 8.46844C16.1226 6.13494 15.0692 4.04516 13.4077 2.64062C11.7454 4.04516 10.6914 6.1354 10.6914 8.46968C10.6914 10.8032 11.7449 12.8928 13.4063 14.2975Z",
                                fill: "#FF603C"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M13.3984 14.3023C15.0603 12.8978 16.1139 10.8078 16.1139 8.47404C16.1139 6.14021 15.0603 4.05032 13.3984 2.64578C14.7481 1.50503 16.4988 0.816406 18.4119 0.816406C22.68 0.816406 26.1409 4.24486 26.1409 8.47404C26.1409 12.7032 22.68 16.1317 18.4119 16.1317C16.4988 16.1317 14.7481 15.4429 13.3984 14.3023Z",
                                fill: "#F9A000"
                            })]
                        })
                    },
                    dc: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 20 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M8.26761 16.1047H11.1947C15.7634 16.1047 19.404 12.5382 19.547 8.13254V8.06262C19.4755 3.58702 15.7634 -0.0493994 11.1947 0.020523H7.91139C3.55713 0.160481 0.130895 3.79678 0.273847 8.13254C0.273847 12.4683 3.84187 16.0348 8.26761 16.1047ZM1.70105 8.0633C1.70105 4.42688 4.76991 1.41987 8.48204 1.41987C12.1942 1.41987 15.263 4.42688 15.263 8.0633C15.263 11.6997 12.1942 14.7067 8.48204 14.7067C4.76991 14.7067 1.70105 11.6997 1.70105 8.0633ZM9.55303 12.5387V3.65739C12.0512 4.28681 13.6214 6.73443 12.9793 9.18194C12.5516 10.8603 11.2661 12.119 9.55303 12.5387ZM4.0563 6.9442C3.41416 9.39171 4.91286 11.9093 7.41106 12.5387V3.65739C5.76942 4.07704 4.484 5.33576 4.0563 6.9442Z",
                                fill: "#1B79BE"
                            })
                        })
                    },
                    applePay: function(e) {
                        var t = e.className,
                            i = e.height,
                            s = void 0 === i ? "13" : i,
                            n = e.width,
                            r = void 0 === n ? "29" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: r,
                            height: s,
                            viewBox: "0 0 29 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsxs)("g", {
                                clipPath: "url(#clip0_47_2178)",
                                children: [(0, a.jsx)("path", {
                                    d: "M0.527344 5.6954C0.538423 5.56356 0.54507 5.43062 0.561689 5.29988C0.665831 4.50884 0.986014 3.83967 1.66183 3.37657C2.03298 3.12175 2.44844 2.99545 2.90047 2.99767C3.16082 2.99878 3.40456 3.07633 3.64497 3.16718C3.81005 3.22922 3.97513 3.29237 4.14131 3.3533C4.30861 3.41424 4.4759 3.41424 4.6443 3.3522C4.88028 3.26467 5.11627 3.17493 5.35446 3.09295C5.61593 3.0021 5.88515 2.9467 6.16212 2.96332C6.85899 3.00653 7.44729 3.26467 7.8694 3.843C7.87826 3.85518 7.88602 3.86737 7.89488 3.87956C7.8971 3.88288 7.8982 3.8862 7.90042 3.89285C7.23014 4.35374 6.84459 4.97084 6.89888 5.80619C6.95316 6.63823 7.40408 7.20547 8.14305 7.57551C8.11424 7.65971 8.08655 7.74613 8.05331 7.83143C7.80625 8.47956 7.43842 9.05455 6.98086 9.57194C6.79806 9.77912 6.57869 9.94198 6.30394 10.0107C6.01256 10.0838 5.73447 10.0306 5.46193 9.91982C5.29353 9.85113 5.12624 9.77469 4.95119 9.72816C4.55124 9.62069 4.16015 9.67055 3.77792 9.82787C3.60509 9.89877 3.43004 9.97079 3.24945 10.0195C2.86612 10.1237 2.53486 10.0029 2.24237 9.75032C1.97537 9.52098 1.77041 9.23847 1.56988 8.95263C1.10013 8.28346 0.796563 7.54227 0.631486 6.74348C0.578307 6.48312 0.543962 6.22055 0.536207 5.95465C0.535099 5.92695 0.52956 5.90037 0.527344 5.87267C0.527344 5.81395 0.527344 5.75523 0.527344 5.6954Z",
                                    fill: "white"
                                }), (0, a.jsx)("path", {
                                    d: "M6.19864 0.703125C6.21637 0.936892 6.19975 1.16734 6.13106 1.39224C5.93718 2.03482 5.55384 2.51233 4.92012 2.76714C4.72846 2.8447 4.52793 2.87793 4.30856 2.85799C4.30856 2.75717 4.29859 2.65525 4.30967 2.55553C4.3695 2.02374 4.60659 1.57947 5.001 1.22273C5.30789 0.946863 5.66907 0.774031 6.0801 0.714204C6.09007 0.713096 6.10004 0.707557 6.11112 0.703125C6.13992 0.703125 6.16984 0.703125 6.19864 0.703125Z",
                                    fill: "white"
                                }), (0, a.jsx)("path", {
                                    d: "M10.6333 1.35717C10.6577 1.35717 10.6776 1.35717 10.6976 1.35717C11.7611 1.35717 12.8236 1.35495 13.8872 1.35828C14.4611 1.36049 15.0017 1.49122 15.4892 1.80365C16.0365 2.15486 16.3977 2.64898 16.5772 3.27162C16.7788 3.97071 16.7655 4.66979 16.4908 5.34672C16.144 6.20312 15.497 6.72051 14.6073 6.9432C14.3525 7.00746 14.0922 7.03294 13.8296 7.03294C13.2358 7.03183 12.6408 7.03294 12.047 7.03294C12.0248 7.03294 12.0027 7.03294 11.975 7.03294C11.975 8.01454 11.975 8.99282 11.975 9.97552C11.5252 9.97552 11.082 9.97552 10.6344 9.97552C10.6333 7.10495 10.6333 4.23549 10.6333 1.35717ZM11.9727 5.9051C11.9927 5.90621 12.0071 5.90842 12.0215 5.90842C12.5212 5.90842 13.0219 5.90842 13.5216 5.90842C13.7565 5.90842 13.9891 5.88294 14.2151 5.81647C14.737 5.66247 15.097 5.33675 15.2532 4.80828C15.3696 4.41608 15.3696 4.01835 15.2654 3.62393C15.1557 3.20958 14.9109 2.89604 14.5242 2.69994C14.2639 2.5681 13.9836 2.50052 13.6944 2.49609C13.1372 2.48612 12.5799 2.48944 12.0226 2.48834C12.0071 2.48834 11.9905 2.49055 11.9727 2.49277C11.9727 3.63058 11.9727 4.76507 11.9727 5.9051Z",
                                    fill: "white"
                                }), (0, a.jsx)("path", {
                                    d: "M21.1134 6.2502C21.1012 6.00425 21.109 5.76051 21.0735 5.52342C21.0214 5.17332 20.8109 4.92848 20.4775 4.80882C20.0387 4.6515 19.5945 4.64485 19.1624 4.8343C18.8511 4.97058 18.645 5.20545 18.5641 5.54225C18.5608 5.55555 18.5397 5.57438 18.5264 5.57549C18.1409 5.5766 17.7553 5.5766 17.3687 5.5766C17.3632 5.5766 17.3587 5.57327 17.3499 5.57106C17.3576 5.39712 17.3875 5.22761 17.4451 5.06364C17.6158 4.58281 17.947 4.24158 18.3868 3.99895C18.7536 3.7962 19.1502 3.69206 19.5668 3.66104C20.0709 3.62337 20.565 3.66658 21.0425 3.83941C21.4446 3.98565 21.7892 4.21388 22.0429 4.56508C22.2512 4.85314 22.3587 5.17886 22.3841 5.53117C22.3908 5.62313 22.3908 5.71508 22.3908 5.80815C22.3908 7.17308 22.3908 8.53801 22.3908 9.90406C22.3908 9.92954 22.3908 9.95502 22.3908 9.98272C21.9753 9.98272 21.5654 9.98272 21.1488 9.98272C21.1488 9.64038 21.1488 9.29914 21.1488 8.9568C21.1444 8.95458 21.1389 8.95237 21.1344 8.95126C21.1256 8.96234 21.1134 8.97231 21.1067 8.9845C20.7888 9.53623 20.2991 9.85531 19.6897 9.99158C19.1314 10.1168 18.5807 10.0702 18.0589 9.82429C17.4861 9.55396 17.1416 9.10083 17.0529 8.47043C16.9964 8.06826 17.0452 7.67939 17.2601 7.32376C17.4374 7.03238 17.6944 6.83185 17.998 6.6845C18.2971 6.53936 18.6151 6.44851 18.9441 6.41195C19.323 6.36985 19.7041 6.3477 20.0853 6.32111C20.4054 6.29895 20.7256 6.28233 21.0469 6.26239C21.0646 6.25906 21.0802 6.25574 21.1134 6.2502ZM21.1034 7.15868C21.0591 7.162 21.0248 7.16643 20.9893 7.16865C20.4719 7.20189 19.9545 7.23291 19.4382 7.27058C19.2189 7.28719 19.0062 7.34037 18.8067 7.43787C18.3802 7.64726 18.2727 8.03946 18.3802 8.40174C18.4611 8.67429 18.6616 8.84269 18.922 8.928C19.4737 9.10748 20.0077 9.0554 20.5029 8.74408C20.7954 8.56017 20.9849 8.29206 21.0657 7.95415C21.1278 7.69269 21.0934 7.4279 21.1034 7.15868Z",
                                    fill: "white"
                                }), (0, a.jsx)("path", {
                                    d: "M22.9141 3.72767C22.9373 3.72767 22.9562 3.72767 22.9739 3.72767C23.4004 3.72767 23.827 3.72878 24.2524 3.72656C24.3 3.72656 24.3167 3.74207 24.3311 3.78639C24.844 5.44713 25.3581 7.10676 25.8733 8.7675C25.8788 8.78523 25.8854 8.80406 25.8921 8.82179C25.8976 8.82179 25.9021 8.8229 25.9076 8.8229C25.9154 8.80628 25.9253 8.79077 25.9309 8.77415C26.0904 8.25787 26.2499 7.74159 26.4106 7.2242C26.7651 6.07642 27.1208 4.92974 27.4753 3.78196C27.4886 3.73986 27.5063 3.72656 27.5517 3.72656C27.965 3.72878 28.3782 3.72767 28.7915 3.72767C28.8103 3.72767 28.828 3.72767 28.8546 3.72767C28.8391 3.77199 28.8258 3.81187 28.8125 3.85065C28.037 6.02324 27.2626 8.19583 26.487 10.3684C26.3541 10.7407 26.1968 11.1007 25.9763 11.4309C25.6395 11.9361 25.1697 12.2197 24.5682 12.2951C24.2424 12.336 23.9167 12.3349 23.591 12.3039C23.5622 12.3017 23.5367 12.3006 23.5367 12.2585C23.5378 11.9317 23.5378 11.6059 23.5389 11.2791C23.5389 11.2758 23.5411 11.2725 23.5445 11.2614C23.5877 11.2647 23.632 11.268 23.6774 11.2702C23.8713 11.2813 24.0641 11.2891 24.2557 11.2492C24.5382 11.1905 24.7443 11.0276 24.8883 10.7806C24.9969 10.5944 25.049 10.3861 25.1243 10.1867C25.172 10.0604 25.1631 9.95074 25.1166 9.82333C24.3865 7.81471 23.6608 5.80387 22.934 3.79414C22.9262 3.77531 22.9218 3.75426 22.9141 3.72767Z",
                                    fill: "white"
                                })]
                            }), (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                    id: "clip0_47_2178",
                                    children: (0, a.jsx)("rect", {
                                        width: "28.3268",
                                        height: "11.623",
                                        fill: "white",
                                        transform: "translate(0.527344 0.703125)"
                                    })
                                })
                            })]
                        })
                    },
                    americanExpress: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "33" : i,
                            n = e.height,
                            r = void 0 === n ? "9" : n;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 22 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M2.48288 0L0 5.49788H2.97235L3.34084 4.62129H4.18311L4.5516 5.49788H7.82333V4.82884L8.11486 5.49788H9.80725L10.0988 4.8147V5.49788H16.9031L17.7305 4.64406L18.5052 5.49788L22 5.50495L19.5093 2.76429L22 0H18.5594L17.754 0.838047L17.0037 0H9.60146L8.96584 1.41905L8.3153 0H5.34915V0.646277L5.01919 0C5.01919 0 2.48288 0 2.48288 0ZM3.05801 0.780706H4.50687L6.15377 4.50885V0.780706H7.74094L9.01297 3.45377L10.1853 0.780706H11.7645V4.7258H10.8036L10.7958 1.63445L9.39482 4.7258H8.53522L7.12643 1.63445V4.7258H5.14957L4.77479 3.84136H2.75002L2.37602 4.72502H1.31684C1.31684 4.72502 3.05801 0.780706 3.05801 0.780706ZM12.6437 0.780706H16.5511L17.7461 2.0724L18.9797 0.780706H20.1748L18.359 2.76351L20.1748 4.72347H18.9255L17.7305 3.41678L16.4906 4.72347H12.6437V0.780706ZM3.76284 1.4482L3.09576 3.02375H4.42914L3.76284 1.4482ZM13.6086 1.59754V2.31772H15.7402V3.12041H13.6086V3.90664H15.9995L17.1105 2.7486L16.0467 1.59685H13.6086V1.59754Z",
                                fill: "#fff"
                            })
                        })
                    },
                    quotes: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#9095A0" : i,
                            n = e.width,
                            r = void 0 === n ? "21" : n,
                            l = e.height,
                            C = void 0 === l ? "15" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 21 15",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M19.8184 2.69092C19.2373 3.05615 18.6978 3.41309 18.1997 3.76172C17.7017 4.11035 17.27 4.48389 16.9048 4.88232C16.5396 5.26416 16.249 5.6875 16.0332 6.15234C15.834 6.60059 15.7344 7.10693 15.7344 7.67139C15.7344 7.854 15.751 8.02832 15.7842 8.19434C15.8174 8.36035 15.8589 8.54297 15.9087 8.74219C16.0083 8.65918 16.1992 8.56787 16.4814 8.46826C16.7637 8.36865 17.0708 8.31885 17.4028 8.31885C18.3491 8.31885 19.063 8.59277 19.5444 9.14062C20.0259 9.67187 20.2666 10.3608 20.2666 11.2075C20.2666 11.6392 20.1836 12.0625 20.0176 12.4775C19.8682 12.876 19.644 13.2329 19.3452 13.5483C19.063 13.8638 18.7144 14.1211 18.2993 14.3203C17.8843 14.5029 17.4194 14.5942 16.9048 14.5942C15.9585 14.5942 15.145 14.4365 14.4644 14.1211C13.7837 13.8057 13.2275 13.3989 12.7959 12.9009C12.3643 12.4028 12.0488 11.855 11.8496 11.2573C11.6504 10.6597 11.5508 10.0786 11.5508 9.51416C11.5508 8.30225 11.7334 7.24805 12.0986 6.35156C12.4639 5.45508 12.9536 4.6665 13.5679 3.98584C14.1987 3.30518 14.9209 2.70752 15.7344 2.19287C16.5645 1.66162 17.436 1.17188 18.3491 0.723633L19.8184 2.69092ZM8.86133 2.69092C8.28027 3.05615 7.74072 3.41309 7.24268 3.76172C6.74463 4.11035 6.31299 4.48389 5.94775 4.88232C5.58252 5.26416 5.29199 5.6875 5.07617 6.15234C4.87695 6.60059 4.77734 7.10693 4.77734 7.67139C4.77734 7.854 4.79395 8.02832 4.82715 8.19434C4.86035 8.36035 4.90186 8.54297 4.95166 8.74219C5.05127 8.65918 5.24219 8.56787 5.52441 8.46826C5.80664 8.36865 6.11377 8.31885 6.4458 8.31885C7.39209 8.31885 8.10596 8.59277 8.5874 9.14062C9.06885 9.67187 9.30957 10.3608 9.30957 11.2075C9.30957 11.6392 9.22656 12.0625 9.06055 12.4775C8.91113 12.876 8.68701 13.2329 8.38818 13.5483C8.10596 13.8638 7.75732 14.1211 7.34229 14.3203C6.92725 14.5029 6.4624 14.5942 5.94775 14.5942C5.00146 14.5942 4.18799 14.4365 3.50732 14.1211C2.82666 13.8057 2.27051 13.3989 1.83887 12.9009C1.40723 12.4028 1.0918 11.855 0.892578 11.2573C0.693359 10.6597 0.59375 10.0786 0.59375 9.51416C0.59375 8.30225 0.776367 7.24805 1.1416 6.35156C1.50684 5.45508 1.99658 4.6665 2.61084 3.98584C3.2417 3.30518 3.96387 2.70752 4.77734 2.19287C5.60742 1.66162 6.479 1.17188 7.39209 0.723633L8.86133 2.69092Z",
                                fill: s
                            })
                        })
                    },
                    check: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FF553C" : i,
                            n = e.width,
                            r = void 0 === n ? "14" : n,
                            l = e.height,
                            C = void 0 === l ? "14" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 14 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M14 7.00082C14 6.3602 13.4832 5.84168 12.8427 5.83852C13.136 5.71484 13.3532 5.48492 13.4657 5.21216C13.5799 4.93784 13.5894 4.61912 13.4657 4.32259C13.2216 3.73115 12.5447 3.44888 11.9518 3.69148C12.1753 3.46473 12.2878 3.1698 12.2878 2.87326C12.2878 2.57516 12.1737 2.27863 11.947 2.05189C11.4952 1.59837 10.7612 1.59837 10.3078 2.04872C10.4283 1.75378 10.4187 1.43666 10.3062 1.1639C10.192 0.889576 9.97329 0.658076 9.67682 0.534382C9.08551 0.290187 8.40857 0.569266 8.16126 1.15755C8.15968 0.838832 8.02968 0.550242 7.82042 0.340926C7.60957 0.130032 7.31946 0 6.99923 0C6.35875 0 5.84035 0.516927 5.83719 1.15755C5.71354 0.864203 5.48367 0.646971 5.21098 0.532787C4.93672 0.418619 4.61807 0.409105 4.32161 0.532787C3.7303 0.778568 3.44809 1.45405 3.69064 2.04712C3.46394 1.82196 3.16908 1.71095 2.87261 1.71095C2.57458 1.71095 2.27811 1.82512 2.05142 2.05188C1.5996 2.5038 1.59801 3.23795 2.04825 3.69147C1.75338 3.57096 1.43789 3.58047 1.16363 3.69305C0.889374 3.80722 0.657926 4.02604 0.53426 4.32257C0.290121 4.91401 0.569137 5.59111 1.15728 5.83847C0.838641 5.84006 0.550117 5.97008 0.340848 6.1794C0.130002 6.39029 0 6.68046 0 7.00077C0 7.64139 0.516809 8.15991 1.15569 8.16307C0.862411 8.28676 0.645229 8.51667 0.532666 8.78943C0.418523 9.06534 0.410598 9.38247 0.532666 9.679C0.778391 10.2704 1.45372 10.5527 2.04665 10.3101C1.82154 10.5369 1.71056 10.8318 1.71056 11.1283C1.71056 11.4264 1.8247 11.723 2.05141 11.9497C2.50323 12.4016 3.23722 12.4032 3.69063 11.9529C3.57015 12.2478 3.57966 12.5649 3.69221 12.8377C3.80636 13.112 4.02512 13.3435 4.32159 13.4672C4.9129 13.713 5.59143 13.4323 5.83873 12.8425C5.84032 13.1612 5.97032 13.4498 6.17958 13.6591C6.39043 13.87 6.68054 14 7.00077 14C7.64125 14 8.15965 13.4831 8.16281 12.8425C8.28646 13.1358 8.51633 13.353 8.78902 13.4672C9.06328 13.5814 9.38193 13.5893 9.67839 13.4672C10.2697 13.223 10.5519 12.5459 10.3094 11.9529C10.5361 12.1765 10.8309 12.289 11.1274 12.289C11.4254 12.289 11.7219 12.1749 11.9486 11.9481C12.402 11.4946 12.402 10.762 11.9517 10.3085C12.2466 10.429 12.5637 10.4195 12.8364 10.3069C13.1106 10.1928 13.3421 9.97396 13.4657 9.67743C13.7115 9.08598 13.4309 8.40889 12.8427 8.16153C13.1614 8.15994 13.4499 8.02992 13.6592 7.8206C13.87 7.61129 14 7.3211 14 7.00082V7.00082ZM10.208 5.89877C10.0891 6.0177 9.9702 6.13662 9.85129 6.25556C9.22827 6.87872 8.60525 7.50189 7.98379 8.12349C7.58111 8.52626 7.17845 8.929 6.77418 9.33337C6.43017 9.67746 5.8864 9.66635 5.53764 9.33971C5.48374 9.28897 5.43142 9.23982 5.37752 9.19066C4.85121 8.69751 4.32489 8.20436 3.79854 7.7128C3.45135 7.38614 3.46404 6.80737 3.7922 6.47598C4.13462 6.1303 4.68157 6.14457 5.02874 6.46964C5.08264 6.5188 5.13496 6.56954 5.18886 6.61869C5.50275 6.91363 5.81823 7.20857 6.13212 7.50192C6.6727 6.95962 7.2149 6.41889 7.75548 5.87818C8.15816 5.47541 8.56081 5.07267 8.96509 4.6683C9.30275 4.33056 9.86237 4.32581 10.2016 4.66196C10.5393 4.99494 10.5456 5.56104 10.208 5.89878L10.208 5.89877Z",
                                fill: s
                            })
                        })
                    },
                    clock: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? 14 : i,
                            n = e.height,
                            r = void 0 === n ? 16 : n,
                            l = e.color,
                            C = void 0 === l ? "#FF553C" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M7 2.24003C5.14349 2.24003 3.36296 2.96487 2.05026 4.25513C0.737595 5.54543 0 7.29537 0 9.12001C0 10.9447 0.73763 12.6947 2.05026 13.9849C3.36306 15.2752 5.14366 16 7 16C8.85634 16 10.637 15.2752 11.9497 13.9849C13.2624 12.6946 14 10.9447 14 9.12001C13.9978 7.29588 13.2596 5.54704 11.9473 4.25753C10.635 2.96765 8.85564 2.24215 6.99996 2.23999L7 2.24003ZM9.98725 12.2643C9.833 12.4369 9.6106 12.5361 9.37677 12.5363C9.17619 12.5379 8.98188 12.4668 8.83143 12.3362L6.46285 10.2722C6.2872 10.1206 6.18636 9.90204 6.18609 9.67222V5.67204V5.67217C6.18609 5.38636 6.34116 5.12225 6.59298 4.97935C6.8448 4.83644 7.15521 4.83644 7.40704 4.97935C7.65887 5.12225 7.81393 5.38636 7.81393 5.67217V9.28012L9.91394 11.1041H9.91407C10.0858 11.245 10.1908 11.4491 10.2047 11.6685C10.2185 11.888 10.1399 12.1034 9.98725 12.2641L9.98725 12.2643ZM4.94053 1.01601L9.44201 1.59993H4.5582C4.26741 1.59993 3.99869 1.44752 3.85329 1.20002C3.70789 0.952517 3.70789 0.647428 3.85329 0.399915C3.99869 0.152403 4.2674 0 4.5582 0H9.44201C9.7328 0 10.0015 0.152413 10.1469 0.399915C10.2923 0.647418 10.2923 0.952507 10.1469 1.20002C10.0015 1.44753 9.7328 1.59993 9.44201 1.59993L4.94053 1.01601Z",
                                fill: C
                            })
                        })
                    },
                    questionMark: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FF6D58" : i,
                            n = e.width,
                            r = void 0 === n ? "51" : n,
                            l = e.height,
                            C = void 0 === l ? "50" : l;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 51 50",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("circle", {
                                cx: "26",
                                cy: "27",
                                r: "16",
                                fill: s
                            }), (0, a.jsx)("path", {
                                d: "M50.5945 23.4938C50.5945 23.4937 50.5945 23.4937 50.5945 23.4937L49.1204 20.9483C48.3865 19.6811 48 18.2426 48 16.7783V14.0539C48 12.9337 47.4054 11.9207 46.4327 11.334C43.5611 9.6899 41.1551 7.34219 39.4411 4.51179L39.4057 4.45331C38.865 3.49349 37.784 2.90682 36.649 2.90682H36.552C33.2139 2.90682 29.9326 2.04328 27.027 0.400119C26.0542 -0.133373 24.8107 -0.133373 23.8379 0.400119C20.9387 2.03968 17.6549 2.90682 14.3242 2.90682C13.1888 2.90682 12.1622 3.49351 11.5675 4.45331C9.90341 7.28294 7.5209 9.6224 4.6614 11.2346L4.48653 11.3332C3.51375 11.8667 2.91915 12.9333 2.91915 14.0531V14.2348C2.91915 17.4692 2.06108 20.6457 0.43248 23.4402C0.162133 23.9201 0 24.4536 0 24.9867C0 25.5202 0.162133 26.0533 0.43248 26.5332C2.06108 29.3277 2.91915 32.5042 2.91915 35.7386V35.9203C2.91915 37.0405 3.51377 38.0534 4.48653 38.6402L4.6614 38.7388C7.5209 40.351 9.90341 42.6905 11.5675 45.5201C12.1082 46.4799 13.1892 47.0666 14.3242 47.0666C17.6549 47.0666 20.9387 47.9337 23.8379 49.5733C24.3243 49.84 24.8651 50 25.4053 50C25.946 50 26.4863 49.84 26.9727 49.5733C29.8783 47.9301 33.1596 47.0668 36.4976 47.0673L36.7029 47.0673C37.8382 47.0673 38.8648 46.4806 39.4595 45.5208L39.503 45.4467C41.1745 42.5947 43.5635 40.2299 46.4323 38.5874C47.4051 38.0539 47.9997 36.9873 47.9997 35.8675C47.9997 32.6185 48.8571 29.4271 50.4853 26.6156L50.5942 26.4277C51.1352 25.6271 51.1352 24.4537 50.5946 23.4938C50.5945 23.4938 50.5945 23.4938 50.5945 23.4938ZM27.5676 34.1072C27.5676 35.0498 26.8034 35.8139 25.8609 35.8139H25.2202C24.2776 35.8139 23.5135 35.0498 23.5135 34.1072C23.5135 33.1646 24.2776 32.4005 25.2202 32.4005H25.8609C26.8034 32.4005 27.5676 33.1646 27.5676 34.1072ZM27.6215 27.8138C27.6215 27.8138 27.6215 27.8138 27.6215 27.8138V28.8004C27.6215 29.3453 27.1797 29.787 26.6348 29.787H25.5675C24.4331 29.787 23.5135 28.8674 23.5135 27.733V26.1346C23.5135 25.0002 24.4331 24.0805 25.5676 24.0805C27.2432 24.0805 28.6489 22.6939 28.6489 21.0403C28.6489 19.387 27.2436 18 25.5676 18C24.6112 18 23.7428 18.4518 23.1734 19.1471C22.4548 20.0248 21.5667 21.0403 20.4324 21.0403C19.298 21.0403 18.3488 20.1007 18.68 19.0158C19.5713 16.0966 22.3335 13.9469 25.5675 13.9469C29.5134 13.9469 32.7567 17.1471 32.7567 21.0403C32.7563 24.2404 30.5944 26.9602 27.6214 27.8137C27.6214 27.8137 27.6214 27.8138 27.6215 27.8138Z",
                                fill: "white"
                            })]
                        })
                    },
                    question: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FF553C" : i,
                            n = e.width,
                            r = void 0 === n ? "18" : n,
                            l = e.height,
                            C = void 0 === l ? "17" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M9.07422 0C13.7664 0.00530795 17.5689 3.80778 17.5742 8.5C17.5742 13.1944 13.7686 17 9.07422 17C4.3798 17 0.574219 13.1944 0.574219 8.5C0.574219 3.80558 4.3798 0 9.07422 0ZM9.11011 11.0821C8.96907 11.0821 8.83024 11.1064 8.69361 11.1548C8.55698 11.2033 8.43577 11.2716 8.33 11.3598C8.22422 11.4479 8.14048 11.5559 8.07877 11.6837C8.01707 11.8115 7.98622 11.9592 7.98622 12.1267C7.98622 12.2941 8.01707 12.4418 8.07877 12.5696C8.14048 12.6974 8.22422 12.8054 8.33 12.8936C8.43577 12.9817 8.55698 13.05 8.69361 13.0985C8.83024 13.147 8.96907 13.1712 9.11011 13.1712C9.39218 13.1712 9.64781 13.0787 9.877 12.8936C10.1062 12.7084 10.2208 12.4528 10.2208 12.1267C10.2208 11.9592 10.1899 11.8115 10.1282 11.6837C10.0665 11.5559 9.98277 11.4479 9.877 11.3598C9.77122 11.2716 9.65222 11.2033 9.52 11.1548C9.38777 11.1064 9.25114 11.0821 9.11011 11.0821ZM9.29522 3.74378C8.95144 3.74378 8.62088 3.78124 8.30355 3.85617C7.98622 3.93109 7.6777 4.03026 7.378 4.15367C6.19422 4.56083 6.64192 6.22069 7.88523 5.79253C8.08068 5.72522 8.34763 5.63015 8.67377 5.542C8.6914 5.53319 8.71785 5.52657 8.75311 5.52217C8.78837 5.51776 8.81481 5.51115 8.83244 5.50233C8.98229 5.47589 9.12774 5.46267 9.26877 5.46267C9.57729 5.46267 9.82631 5.5398 10.0158 5.69406C10.2053 5.84831 10.3001 6.06207 10.3001 6.33533C10.3001 6.5557 10.2472 6.75183 10.1414 6.92372C10.0357 7.09561 9.90564 7.25869 9.75138 7.41294C9.59713 7.5672 9.42964 7.72367 9.24894 7.88233C9.06824 8.041 8.90076 8.21289 8.7465 8.398C8.59224 8.58311 8.46222 8.78806 8.35644 9.01283C8.25066 9.23761 8.19777 9.49985 8.19777 9.79956C8.19777 9.92296 8.20439 10.0398 8.21761 10.1499C8.23083 10.2601 8.25066 10.3769 8.27711 10.5003C8.97406 10.6469 9.56025 10.6469 10.0357 10.5003C10.1464 10.4662 10.1464 10.2855 10.0357 9.95822C10.0533 9.67615 10.1503 9.45357 10.3266 9.2905C10.5028 9.12743 10.688 8.96215 10.8819 8.79467C11.0494 8.65363 11.2124 8.50378 11.3711 8.34511C11.5298 8.18644 11.673 8.01015 11.8008 7.81622C11.9286 7.6223 12.0322 7.40633 12.1116 7.16833C12.1909 6.93033 12.2306 6.66148 12.2306 6.36178C12.2306 5.91222 12.1512 5.52217 11.9926 5.19161C11.8339 4.86106 11.6179 4.59 11.3447 4.37844C11.0714 4.16689 10.7585 4.00822 10.4059 3.90244C10.0533 3.79667 9.68307 3.74378 9.29522 3.74378Z",
                                fill: s
                            })
                        })
                    },
                    shield: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? {
                                light: "#FFB6AB",
                                dark: "#FF553C"
                            } : i,
                            n = e.width,
                            r = void 0 === n ? "40" : n,
                            l = e.height,
                            C = void 0 === l ? "49" : l;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 40 49",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("ellipse", {
                                cx: "20.5",
                                cy: "20.0078",
                                rx: "15.5",
                                ry: "15",
                                fill: s.dark
                            }), (0, a.jsx)("path", {
                                d: "M20 0.0078125L0 5.83327V14.7792C0 30.4512 7.38909 38.455 20 48.0078C32.611 38.4493 40 30.4512 40 14.7792V5.83327L20 0.0078125ZM17.9677 32.1714L8.16168 22.5862L12.4318 18.3476L17.9616 23.7526L29.3834 12.5861L33.6592 16.8246L17.9677 32.1714Z",
                                fill: s.light
                            })]
                        })
                    },
                    testimonialCheck: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? {
                                light: "#FFB6AB",
                                dark: "#FF553C"
                            } : i,
                            n = e.width,
                            r = void 0 === n ? "35" : n,
                            l = e.height,
                            C = void 0 === l ? "35" : l;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 35 35",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("ellipse", {
                                cx: "17.4999",
                                cy: "17.8888",
                                rx: "12.0556",
                                ry: "11.6667",
                                fill: s.dark
                            }), (0, a.jsx)("path", {
                                d: "M32.5925 12.5748C31.8934 11.9859 31.5441 11.0803 31.6676 10.1744C31.8607 8.3074 31.2022 6.45242 29.8747 5.12528C28.5476 3.79776 26.6926 3.13925 24.8256 3.3324C23.9197 3.45592 23.0141 3.10657 22.4252 2.40749C21.2428 0.888439 19.4254 0 17.5 0C15.5746 0 13.7572 0.888449 12.5748 2.40749C11.9859 3.10657 11.0803 3.45594 10.1744 3.3324C8.30739 3.13931 6.45241 3.79783 5.12528 5.12528C3.79776 6.45242 3.13924 8.3074 3.3324 10.1744C3.45592 11.0803 3.10657 11.9859 2.40749 12.5748C0.888439 13.7572 0 15.5746 0 17.5C0 19.4254 0.888448 21.2428 2.40749 22.4252C3.10657 23.0141 3.45594 23.9197 3.3324 24.8256C3.13931 26.6926 3.79783 28.5476 5.12528 29.8747C6.45241 31.2022 8.30739 31.8608 10.1744 31.6676C11.0803 31.5441 11.9859 31.8934 12.5748 32.5925C13.7572 34.1116 15.5746 35 17.5 35C19.4254 35 21.2428 34.1116 22.4252 32.5925C23.0141 31.8934 23.9197 31.5441 24.8256 31.6676C26.6926 31.8607 28.5476 31.2022 29.8747 29.8747C31.2022 28.5476 31.8608 26.6926 31.6676 24.8256C31.5441 23.9197 31.8934 23.0141 32.5925 22.4252C34.1116 21.2428 35 19.4254 35 17.5C35 15.5746 34.1116 13.7572 32.5925 12.5748V12.5748ZM27.4505 15.9084L18.2832 25.0756H18.2836C17.8144 25.5463 17.1771 25.8108 16.5126 25.8108C15.8477 25.8108 15.2108 25.5463 14.7416 25.0756L9.34135 19.6668H9.34098C8.71445 19.028 8.47597 18.1039 8.71556 17.2414C8.95553 16.3794 9.63676 15.7108 10.5033 15.4872C11.3698 15.264 12.2895 15.5196 12.9164 16.1584L16.5498 19.8003L23.9506 12.3996C24.5816 11.7671 25.5024 11.5189 26.3659 11.7492C27.2294 11.9795 27.9046 12.6533 28.1368 13.5161C28.3694 14.3793 28.1234 15.3004 27.4925 15.9333L27.4505 15.9084Z",
                                fill: s.light
                            })]
                        })
                    },
                    boxQuestion: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? {
                                light: "#FFB6AB",
                                dark: "#FF553C"
                            } : i,
                            n = e.width,
                            r = void 0 === n ? "51" : n,
                            l = e.height,
                            C = void 0 === l ? "50" : l;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 51 50",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("circle", {
                                cx: "26",
                                cy: "27",
                                r: "16",
                                fill: s.dark
                            }), (0, a.jsx)("path", {
                                d: "M50.5945 23.4937L48 19.0138V14.0539C48 12.9337 47.4054 11.9207 46.4327 11.334L42.0544 8.82727L39.4057 4.45331C38.865 3.49349 37.784 2.90682 36.649 2.90682H31.4596L27.027 0.400119C26.0542 -0.133373 24.8107 -0.133373 23.8379 0.400119L19.4053 2.90682H14.3242C13.1888 2.90682 12.1622 3.49351 11.5675 4.45331L9.02696 8.77327L4.48653 11.3332C3.51375 11.8667 2.91915 12.9333 2.91915 14.0531V19.1734L0.43248 23.4402C0.162133 23.9201 0 24.4536 0 24.9867C0 25.5202 0.162133 26.0533 0.43248 26.5332L2.91915 30.8V35.9203C2.91915 37.0405 3.51377 38.0534 4.48653 38.6402L9.02696 41.2001L11.5675 45.5201C12.1082 46.4799 13.1892 47.0666 14.3242 47.0666H19.4053L23.8379 49.5733C24.3243 49.84 24.8651 50 25.4053 50C25.946 50 26.4863 49.84 26.9727 49.5733L31.4053 47.0666L36.7029 47.0673C37.8382 47.0673 38.8648 46.4806 39.4595 45.5208L42.054 41.0941L46.4323 38.5874C47.4051 38.0539 47.9997 36.9873 47.9997 35.8675V30.9076L50.5942 26.4277C51.1352 25.6271 51.1352 24.4536 50.5945 23.4938L50.5945 23.4937ZM27.5676 35.8139H23.5135V32.4005H27.5676V35.8139ZM27.6215 27.8138V29.787H23.5135V24.0805H25.5676C27.2432 24.0805 28.6489 22.6939 28.6489 21.0403C28.6489 19.387 27.2436 18 25.5676 18C23.892 18 22.4864 19.3866 22.4864 21.0403H18.3783C18.3783 17.147 21.6218 13.9469 25.5675 13.9469C29.5134 13.9469 32.7567 17.1471 32.7567 21.0403C32.7563 24.2405 30.5944 26.9603 27.6213 27.8138H27.6215Z",
                                fill: s.light
                            })]
                        })
                    },
                    TrustpilotStar: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "20" : i,
                            n = e.height,
                            r = void 0 === n ? "19" : n,
                            l = e.color,
                            C = void 0 === l ? "#00b67a" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 25.866 24.588",
                            children: (0, a.jsx)("path", {
                                d: "M13.032,2.09l3.042,9.4h9.882l-7.992,5.8,3.042,9.4-7.992-5.814L5.022,26.678l3.06-9.4L.09,11.468l9.882.018,3.06-9.4Zm4.932,15.192-4.932,3.582,5.616-1.458Z",
                                transform: "translate(-0.09 -2.09)",
                                fill: C
                            })
                        })
                    },
                    planCheck: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? 12 : i,
                            n = e.height,
                            r = void 0 === n ? 12 : n,
                            l = e.color,
                            C = void 0 === l ? "currentColor" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 12 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M5.27434 11.0391L0 6.96866L1.50311 5.20007L4.67896 7.65149L9.32546 0.561035L11.3512 1.76532L5.27434 11.0391Z",
                                fill: C
                            })
                        })
                    },
                    close: function(e) {
                        var t = e.className,
                            i = e.color,
                            s = void 0 === i ? "#FF553C" : i,
                            n = e.width,
                            r = void 0 === n ? "17" : n,
                            l = e.height,
                            C = void 0 === l ? "17" : l;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: r,
                            height: C,
                            viewBox: "0 0 17 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M14.4009 2.80511C11.1951 -0.400722 5.99645 -0.400722 2.80506 2.79067C-0.40077 5.9965 -0.40077 11.1952 2.80506 14.401C5.99646 17.5924 11.1951 17.5924 14.4009 14.3865C17.5923 11.1951 17.5923 5.9965 14.4009 2.80511ZM12.307 6.22755L10.9641 4.88457L8.59578 7.25284L6.2275 4.88457L4.88452 6.22755L7.25279 8.59583L4.88452 10.9641L6.22751 12.3071L8.59578 9.93881L10.9641 12.3071L12.307 10.9641L9.93876 8.59583L12.307 6.22755Z",
                                fill: s
                            })
                        })
                    },
                    globe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M16.5407 8.40873C16.5407 8.7631 16.5154 9.11569 16.4683 9.46652C16.4755 9.41868 16.481 9.37261 16.4882 9.32477C16.3922 10.0052 16.2075 10.6696 15.934 11.3021C15.9521 11.2596 15.9702 11.2171 15.9883 11.1746C15.8326 11.5342 15.6496 11.8815 15.4413 12.2146C15.3381 12.3794 15.2276 12.5424 15.1117 12.6983C15.0845 12.7356 15.0556 12.7728 15.0266 12.81C15.0121 12.8277 14.9976 12.8472 14.9831 12.8649C14.9252 12.9411 15.07 12.7568 15.0103 12.8312C14.9469 12.911 14.8817 12.9889 14.8147 13.0651C14.5593 13.361 14.2822 13.6374 13.9851 13.8926C13.9145 13.9546 13.8421 14.013 13.7678 14.0733C13.7316 14.1034 13.6935 14.1318 13.6573 14.1601C13.6265 14.1849 13.5486 14.2398 13.6917 14.1335C13.6664 14.153 13.641 14.1707 13.6157 14.1902C13.4563 14.3072 13.2933 14.417 13.1266 14.5216C12.7499 14.7572 12.3533 14.961 11.9421 15.1311C11.9856 15.1134 12.029 15.0956 12.0725 15.0779C11.4259 15.3437 10.7467 15.5262 10.0512 15.6201C10.1001 15.613 10.1472 15.6077 10.1961 15.6006C9.47888 15.6945 8.75078 15.6945 8.03354 15.6006C8.08244 15.6077 8.12954 15.613 8.17844 15.6201C7.48294 15.5262 6.80374 15.3455 6.15714 15.0779C6.20061 15.0956 6.24408 15.1134 6.28755 15.1311C5.91987 14.9787 5.56488 14.7997 5.22437 14.596C5.05593 14.495 4.8893 14.3869 4.72991 14.2735C4.69188 14.2469 4.65384 14.2186 4.61581 14.1902C4.5977 14.1761 4.57777 14.1619 4.55966 14.1477C4.48178 14.091 4.67015 14.2328 4.59407 14.1743C4.51257 14.1123 4.43288 14.0485 4.355 13.9829C4.05253 13.7331 3.76998 13.462 3.50917 13.1714C3.44577 13.1023 3.386 13.0314 3.32442 12.9588C3.29363 12.9234 3.26465 12.8862 3.23568 12.8507C3.21032 12.8206 3.15417 12.7444 3.26284 12.8844C3.24292 12.8596 3.22481 12.8348 3.20488 12.81C3.08535 12.654 2.97305 12.4946 2.86619 12.3316C2.6253 11.963 2.41701 11.575 2.24314 11.1728C2.26125 11.2153 2.27936 11.2578 2.29747 11.3004C2.02579 10.6678 1.83924 10.0034 1.74325 9.323C1.75049 9.37084 1.75593 9.4169 1.76317 9.46474C1.66718 8.7631 1.66718 8.05082 1.76317 7.34917C1.75593 7.39701 1.75049 7.44308 1.74325 7.49092C1.83924 6.81053 2.02398 6.1461 2.29747 5.51355C2.27936 5.55608 2.26125 5.5986 2.24314 5.64112C2.3989 5.28144 2.58183 4.93416 2.79012 4.60106C2.89336 4.43628 3.00384 4.27327 3.11976 4.11735C3.14693 4.08014 3.17591 4.04293 3.20488 4.00572C3.21937 3.988 3.23386 3.96851 3.24835 3.95079C3.30631 3.87461 3.16142 4.05888 3.22119 3.98446C3.28458 3.90473 3.34978 3.82677 3.4168 3.75058C3.67217 3.45468 3.94929 3.17827 4.24632 2.92313C4.31696 2.86112 4.38941 2.80265 4.46367 2.7424C4.49989 2.71228 4.53793 2.68393 4.57415 2.65558C4.60494 2.63078 4.68282 2.57585 4.53974 2.68216C4.5651 2.66267 4.59045 2.64495 4.61581 2.62546C4.77519 2.50852 4.9382 2.39867 5.10483 2.29413C5.48156 2.05847 5.87821 1.85471 6.28936 1.68462C6.24589 1.70234 6.20242 1.72005 6.15895 1.73777C6.80555 1.472 7.48475 1.2895 8.18025 1.19559C8.13135 1.20268 8.08426 1.20799 8.03535 1.21508C8.75259 1.12117 9.48069 1.12117 10.1979 1.21508C10.149 1.20799 10.1019 1.20268 10.053 1.19559C10.7485 1.2895 11.4277 1.47023 12.0743 1.73777C12.0309 1.72005 11.9874 1.70234 11.9439 1.68462C12.3116 1.837 12.6666 2.01595 13.0071 2.21971C13.1755 2.32071 13.3404 2.42879 13.5016 2.54219C13.5396 2.56876 13.5776 2.59711 13.6157 2.62546C13.6338 2.63964 13.6537 2.65381 13.6718 2.66799C13.7497 2.72468 13.5613 2.58294 13.6374 2.64141C13.7189 2.70342 13.7986 2.76721 13.8765 2.83277C14.1789 3.0826 14.4615 3.35369 14.7223 3.64427C14.7857 3.71337 14.8455 3.78424 14.907 3.85689C14.9378 3.89232 14.9668 3.92953 14.9958 3.96497C15.0211 3.99509 15.0773 4.07128 14.9686 3.9313C14.9885 3.95611 15.0067 3.98092 15.0266 4.00572C15.1461 4.16164 15.2584 4.32111 15.3653 4.48412C15.6062 4.85266 15.8145 5.24069 15.9883 5.6429C15.9702 5.60037 15.9521 5.55785 15.934 5.51532C16.2057 6.14787 16.3922 6.81231 16.4882 7.49269C16.481 7.44485 16.4755 7.39878 16.4683 7.35094C16.5154 7.70177 16.5407 8.05436 16.5407 8.40873C16.5407 8.68691 16.7907 8.95268 17.0841 8.94028C17.3775 8.92788 17.6275 8.7064 17.6275 8.40873C17.6257 7.54585 17.4916 6.6741 17.2181 5.85374C16.9537 5.05996 16.5715 4.29985 16.0771 3.61946C15.5591 2.90896 14.9469 2.29413 14.2405 1.76435C13.5649 1.25761 12.8115 0.86603 12.0146 0.578993C11.1905 0.281324 10.312 0.121859 9.4336 0.0881944C8.54792 0.0545296 7.64595 0.159068 6.79287 0.394722C5.9724 0.621517 5.17728 0.974112 4.46367 1.43302C3.7573 1.88661 3.11432 2.43942 2.5764 3.07728C2.00587 3.75412 1.55488 4.49652 1.21438 5.30802C0.881116 6.1018 0.692752 6.94519 0.625737 7.80099C0.556912 8.66565 0.636605 9.54802 0.844892 10.3914C1.04594 11.2047 1.38101 11.9967 1.82475 12.7125C2.26125 13.4177 2.80823 14.068 3.44034 14.6155C4.07426 15.1665 4.78787 15.6343 5.56125 15.9762C6.39803 16.3465 7.2674 16.5804 8.18025 16.6832C9.06955 16.7842 9.97515 16.7346 10.8518 16.5609C11.694 16.3944 12.5144 16.0896 13.2643 15.6803C13.9978 15.2799 14.677 14.7661 15.2566 14.1725C15.8416 13.5754 16.3415 12.8897 16.7201 12.1491C17.1058 11.3907 17.3829 10.5792 17.5152 9.74115C17.584 9.29996 17.6257 8.857 17.6275 8.40873C17.6275 8.13055 17.3775 7.86478 17.0841 7.87718C16.7889 7.88958 16.5407 8.11106 16.5407 8.40873Z",
                                fill: "#59636B"
                            }), (0, a.jsx)("path", {
                                d: "M12.4973 8.3714C12.4973 9.05888 12.452 9.74458 12.3597 10.425C12.3669 10.3771 12.3723 10.3311 12.3796 10.2832C12.2347 11.3251 11.9829 12.358 11.5645 13.3272C11.5827 13.2847 11.6008 13.2422 11.6189 13.1997C11.4197 13.6603 11.1842 14.1068 10.8908 14.5161C10.8582 14.5622 10.8256 14.6065 10.7912 14.6508C10.764 14.6862 10.6934 14.7713 10.8129 14.6242C10.793 14.6472 10.7749 14.672 10.7549 14.6951C10.6861 14.7784 10.6137 14.8599 10.5394 14.9378C10.4706 15.0105 10.3981 15.0813 10.3221 15.1487C10.2858 15.1806 10.2478 15.2125 10.2116 15.2444C10.1935 15.2603 10.1735 15.2745 10.1554 15.2886C10.0667 15.3595 10.2714 15.2054 10.1808 15.2709C10.0105 15.3932 9.83123 15.4995 9.63562 15.581C9.67909 15.5633 9.72256 15.5456 9.76603 15.5278C9.59215 15.5987 9.41103 15.6501 9.22448 15.6749C9.27338 15.6678 9.32047 15.6625 9.36937 15.6554C9.19912 15.6767 9.02887 15.6767 8.85862 15.6554C8.90752 15.6625 8.95461 15.6678 9.00351 15.6749C8.81696 15.6501 8.63584 15.6005 8.46196 15.5278C8.50543 15.5456 8.5489 15.5633 8.59237 15.581C8.42031 15.5084 8.2573 15.418 8.10516 15.3117C8.08523 15.2975 8.06712 15.2851 8.0472 15.2709C7.95845 15.2071 8.13595 15.34 8.08705 15.301C8.0472 15.2692 8.00735 15.2373 7.96751 15.2036C7.88962 15.1363 7.81355 15.0672 7.74111 14.9945C7.66504 14.9183 7.59259 14.8386 7.52376 14.7571C7.49116 14.7181 7.45856 14.6791 7.42777 14.6402C7.38068 14.5817 7.47848 14.7039 7.47486 14.7004C7.46762 14.6898 7.45856 14.6791 7.4495 14.6685C7.42777 14.6419 7.40785 14.6136 7.38792 14.5852C7.24665 14.3921 7.11624 14.1901 6.99851 13.9828C6.85362 13.7294 6.72683 13.4672 6.61092 13.2014C6.62903 13.2439 6.64714 13.2865 6.66525 13.329C6.24868 12.358 5.99511 11.3251 5.85021 10.285C5.85746 10.3328 5.86289 10.3789 5.87014 10.4267C5.72524 9.36009 5.69445 8.27927 5.77596 7.20554C5.79769 6.91141 5.83029 6.61729 5.87014 6.32493C5.86289 6.37277 5.85746 6.41884 5.85021 6.46668C5.99149 5.44965 6.23962 4.44147 6.64533 3.49354C6.62722 3.53607 6.60911 3.57859 6.59099 3.62112C6.78842 3.16398 7.02387 2.71925 7.31366 2.31173C7.34626 2.26743 7.37887 2.22137 7.41147 2.17884C7.42777 2.15758 7.44407 2.13632 7.46218 2.11328C7.34264 2.26921 7.42234 2.1629 7.45313 2.12746C7.52195 2.04418 7.59259 1.96445 7.66866 1.88649C7.7393 1.81207 7.81355 1.73943 7.89144 1.6721C7.92766 1.6402 7.96388 1.60831 8.00192 1.57819C8.02003 1.56224 8.03995 1.54807 8.05807 1.53389C8.14681 1.46302 7.95121 1.61185 8.02546 1.5587C8.19753 1.43467 8.37865 1.32659 8.57607 1.24509C8.5326 1.2628 8.48913 1.28052 8.44566 1.29824C8.61954 1.22737 8.80066 1.17598 8.98721 1.14941C8.93831 1.15649 8.89122 1.16181 8.84232 1.1689C9.02162 1.14586 9.20455 1.14586 9.38386 1.1689C9.33496 1.16181 9.28787 1.15649 9.23897 1.14941C9.42552 1.17598 9.60664 1.22559 9.78052 1.29824C9.73705 1.28052 9.69358 1.2628 9.65011 1.24509C9.82217 1.31773 9.98337 1.40809 10.1373 1.51263C10.1572 1.52681 10.1754 1.53921 10.1953 1.55338C10.284 1.61717 10.0957 1.47542 10.1554 1.52326C10.1971 1.55693 10.2406 1.59059 10.2822 1.62603C10.3583 1.68982 10.4307 1.75715 10.5014 1.82802C10.5793 1.90598 10.6535 1.98748 10.7242 2.07076C10.7586 2.11151 10.7894 2.15581 10.8256 2.19479C10.8292 2.19833 10.7332 2.07608 10.7785 2.13455C10.7875 2.14518 10.7948 2.15581 10.8038 2.16644C10.822 2.19124 10.8419 2.21605 10.86 2.24086C11.0013 2.43221 11.1299 2.63243 11.2476 2.83796C11.3925 3.09311 11.5211 3.35711 11.6388 3.62466C11.6207 3.58214 11.6026 3.53961 11.5845 3.49709C11.9902 4.44502 12.2383 5.45319 12.3796 6.47023C12.3723 6.42239 12.3669 6.37632 12.3597 6.32848C12.452 7.00178 12.4955 7.68748 12.4973 8.3714C12.4973 8.64958 12.7473 8.91536 13.0407 8.90295C13.3341 8.89055 13.584 8.66907 13.584 8.3714C13.5822 6.79624 13.3685 5.18387 12.8251 3.69553C12.3995 2.52789 11.771 1.36557 10.7314 0.617855C10.304 0.309556 9.79682 0.125285 9.26795 0.0863051C8.74994 0.0473247 8.22289 0.194387 7.77552 0.442444C7.26657 0.725937 6.86267 1.13877 6.5113 1.58882C6.11646 2.09557 5.82667 2.6661 5.57853 3.25257C4.97541 4.67536 4.7164 6.23989 4.65663 7.77252C4.59505 9.38135 4.76531 11.0292 5.23984 12.5742C5.44269 13.2369 5.70532 13.8907 6.04945 14.4984C6.33743 15.0069 6.69242 15.4995 7.13073 15.8946C7.52557 16.249 8.00011 16.5466 8.52717 16.6671C9.02887 16.7805 9.56317 16.7504 10.0413 16.5608C11.1588 16.1143 11.9123 15.0955 12.4122 14.0572C13.086 12.6575 13.4156 11.1231 13.5369 9.58688C13.5695 9.1829 13.584 8.77715 13.584 8.3714C13.584 8.09323 13.3341 7.82745 13.0407 7.83985C12.7454 7.85226 12.4973 8.07374 12.4973 8.3714Z",
                                fill: "#59636B"
                            }), (0, a.jsx)("path", {
                                d: "M8.57698 0.619859C8.57698 0.759834 8.57698 0.898037 8.57698 1.03801C8.57698 1.41718 8.57698 1.79636 8.57698 2.17376C8.57698 2.73189 8.57698 3.29001 8.57698 3.84637C8.57698 4.5303 8.57698 5.21245 8.57698 5.89638C8.57698 6.6441 8.57698 7.39358 8.57698 8.1413C8.57698 8.89433 8.57698 9.64558 8.57698 10.3986C8.57698 11.1038 8.57698 11.8072 8.57698 12.5124C8.57698 13.1077 8.57698 13.7031 8.57698 14.2984C8.57698 14.7254 8.57698 15.1542 8.57698 15.5812C8.57698 15.7832 8.57517 15.9852 8.57698 16.1872C8.57698 16.1961 8.57698 16.2049 8.57698 16.2138C8.57698 16.492 8.82692 16.7577 9.12034 16.7453C9.41556 16.7329 9.6637 16.5114 9.6637 16.2138C9.6637 16.0738 9.6637 15.9356 9.6637 15.7956C9.6637 15.4164 9.6637 15.0373 9.6637 14.6599C9.6637 14.1017 9.6637 13.5436 9.6637 12.9873C9.6637 12.3033 9.6637 11.6212 9.6637 10.9373C9.6637 10.1895 9.6637 9.44005 9.6637 8.69234C9.6637 7.93931 9.6637 7.18805 9.6637 6.43502C9.6637 5.72983 9.6637 5.02641 9.6637 4.32122C9.6637 3.72589 9.6637 3.13055 9.6637 2.53521C9.6637 2.1082 9.6637 1.67942 9.6637 1.2524C9.6637 1.05041 9.66551 0.848425 9.6637 0.646436C9.6637 0.637577 9.6637 0.628718 9.6637 0.619859C9.6637 0.341681 9.41375 0.0759055 9.12034 0.0883084C8.82692 0.100711 8.57698 0.32219 8.57698 0.619859Z",
                                fill: "#59636B"
                            }), (0, a.jsx)("path", {
                                d: "M1.14926 8.96526C1.29234 8.96526 1.43361 8.96526 1.5767 8.96526C1.96429 8.96526 2.35189 8.96526 2.73768 8.96526C3.3082 8.96526 3.87873 8.96526 4.44745 8.96526C5.14657 8.96526 5.84388 8.96526 6.54301 8.96526C7.30733 8.96526 8.07347 8.96526 8.8378 8.96526C9.60755 8.96526 10.3755 8.96526 11.1453 8.96526C11.8661 8.96526 12.5852 8.96526 13.306 8.96526C13.9146 8.96526 14.5231 8.96526 15.1317 8.96526C15.5682 8.96526 16.0065 8.96526 16.443 8.96526C16.6495 8.96526 16.856 8.96703 17.0624 8.96526C17.0715 8.96526 17.0806 8.96526 17.0896 8.96526C17.374 8.96526 17.6457 8.72074 17.633 8.43371C17.6203 8.1449 17.3939 7.90215 17.0896 7.90215C16.9465 7.90215 16.8053 7.90215 16.6622 7.90215C16.2746 7.90215 15.887 7.90215 15.5012 7.90215C14.9307 7.90215 14.3601 7.90215 13.7914 7.90215C13.0923 7.90215 12.395 7.90215 11.6959 7.90215C10.9315 7.90215 10.1654 7.90215 9.40108 7.90215C8.63132 7.90215 7.86337 7.90215 7.09361 7.90215C6.37275 7.90215 5.65371 7.90215 4.93285 7.90215C4.32429 7.90215 3.71572 7.90215 3.10716 7.90215C2.67066 7.90215 2.23235 7.90215 1.79585 7.90215C1.58938 7.90215 1.3829 7.90038 1.17642 7.90215C1.16737 7.90215 1.15831 7.90215 1.14926 7.90215C0.864897 7.90215 0.593217 8.14667 0.605896 8.43371C0.618574 8.72251 0.843163 8.96526 1.14926 8.96526Z",
                                fill: "#59636B"
                            }), (0, a.jsx)("path", {
                                d: "M2.51254 13.0756C2.63026 13.0756 2.74799 13.0756 2.86572 13.0756C3.1863 13.0756 3.5087 13.0756 3.82928 13.0756C4.302 13.0756 4.77472 13.0756 5.24564 13.0756C5.82522 13.0756 6.40299 13.0756 6.98258 13.0756C7.6165 13.0756 8.25042 13.0756 8.88615 13.0756C9.52731 13.0756 10.1667 13.0756 10.8078 13.0756C11.4019 13.0756 11.996 13.0756 12.59 13.0756C13.0954 13.0756 13.5989 13.0756 14.1042 13.0756C14.4665 13.0756 14.8305 13.0756 15.1927 13.0756C15.3648 13.0756 15.5369 13.0774 15.7089 13.0756C15.7162 13.0756 15.7234 13.0756 15.7307 13.0756C16.015 13.0756 16.2867 12.8311 16.274 12.5441C16.2613 12.2552 16.0349 12.0125 15.7307 12.0125C15.6129 12.0125 15.4952 12.0125 15.3775 12.0125C15.0569 12.0125 14.7345 12.0125 14.4139 12.0125C13.9412 12.0125 13.4685 12.0125 12.9976 12.0125C12.418 12.0125 11.8402 12.0125 11.2606 12.0125C10.6267 12.0125 9.99279 12.0125 9.35706 12.0125C8.71589 12.0125 8.07654 12.0125 7.43538 12.0125C6.8413 12.0125 6.24723 12.0125 5.65316 12.0125C5.14783 12.0125 4.64432 12.0125 4.13899 12.0125C3.77675 12.0125 3.4127 12.0125 3.05046 12.0125C2.8784 12.0125 2.70634 12.0107 2.53427 12.0125C2.52703 12.0125 2.51978 12.0125 2.51254 12.0125C2.22818 12.0125 1.9565 12.257 1.96918 12.5441C1.98186 12.8329 2.20826 13.0756 2.51254 13.0756Z",
                                fill: "#59636B"
                            }), (0, a.jsx)("path", {
                                d: "M2.51254 4.85637C2.63026 4.85637 2.74799 4.85637 2.86572 4.85637C3.1863 4.85637 3.5087 4.85637 3.82928 4.85637C4.302 4.85637 4.77472 4.85637 5.24564 4.85637C5.82522 4.85637 6.40299 4.85637 6.98258 4.85637C7.6165 4.85637 8.25042 4.85637 8.88615 4.85637C9.52731 4.85637 10.1667 4.85637 10.8078 4.85637C11.4019 4.85637 11.996 4.85637 12.59 4.85637C13.0954 4.85637 13.5989 4.85637 14.1042 4.85637C14.4665 4.85637 14.8305 4.85637 15.1927 4.85637C15.3648 4.85637 15.5369 4.85814 15.7089 4.85637C15.7162 4.85637 15.7234 4.85637 15.7307 4.85637C16.015 4.85637 16.2867 4.61186 16.274 4.32482C16.2613 4.03601 16.0349 3.79327 15.7307 3.79327C15.6129 3.79327 15.4952 3.79327 15.3775 3.79327C15.0569 3.79327 14.7345 3.79327 14.4139 3.79327C13.9412 3.79327 13.4685 3.79327 12.9976 3.79327C12.418 3.79327 11.8402 3.79327 11.2606 3.79327C10.6267 3.79327 9.99279 3.79327 9.35706 3.79327C8.71589 3.79327 8.07654 3.79327 7.43538 3.79327C6.8413 3.79327 6.24723 3.79327 5.65316 3.79327C5.14783 3.79327 4.64432 3.79327 4.13899 3.79327C3.77675 3.79327 3.4127 3.79327 3.05046 3.79327C2.8784 3.79327 2.70634 3.7915 2.53427 3.79327C2.52703 3.79327 2.51978 3.79327 2.51254 3.79327C2.22818 3.79327 1.9565 4.03778 1.96918 4.32482C1.98186 4.61186 2.20826 4.85637 2.51254 4.85637Z",
                                fill: "#59636B"
                            })]
                        })
                    },
                    enGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M13.5958 1.30334C12.2642 0.481667 10.7342 0 9.0625 0V1.30334H13.5958Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M9.0625 2.60668H15.1825C14.7008 2.12501 14.1625 1.67168 13.5958 1.30334H9.0625V2.60668Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M9.0625 3.91002H16.2308C15.9192 3.42836 15.5792 3.00336 15.2108 2.60669H9.0625V3.91002Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M9.0625 5.21331H16.9108C16.7125 4.75997 16.4858 4.30664 16.2308 3.90997H9.0625V5.21331Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M9.0625 6.51671H17.3358C17.2225 6.06338 17.0808 5.63838 16.9108 5.21338H9.0625V6.51671Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M9.0625 7.84838H17.5342C17.5058 7.39505 17.4208 6.97004 17.3358 6.54504H9.0625V7.84838",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M17.5342 7.84839H9.06251V8.50006H0.5625C0.5625 8.72672 0.5625 8.92506 0.590833 9.15172H17.5342C17.5625 8.92506 17.5625 8.72672 17.5625 8.50006C17.5625 8.27339 17.5625 8.04672 17.5342 7.84839",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M0.789032 10.455H17.3357C17.4491 10.03 17.5057 9.60501 17.5341 9.15167H0.590698C0.619032 9.57667 0.704032 10.03 0.789032 10.455Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M1.21419 11.7584H16.9109C17.0809 11.3334 17.2225 10.9084 17.3359 10.455H0.789185C0.902518 10.9084 1.04419 11.3334 1.21419 11.7584Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M1.89411 13.0617H16.2308C16.4858 12.6367 16.7125 12.2117 16.9108 11.7584H1.21411C1.41244 12.2117 1.63911 12.6367 1.89411 13.0617",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M2.91417 14.365H15.2109C15.5792 13.9684 15.9475 13.515 16.2309 13.0617H1.89417C2.1775 13.5434 2.54583 13.9684 2.91417 14.365Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M4.50085 15.6683H13.6242C14.2192 15.3 14.7292 14.8467 15.2109 14.365H2.91418C3.39585 14.875 3.93419 15.3 4.50085 15.6683Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M9.06253 17C10.7342 17 12.2925 16.5183 13.6242 15.6683H4.50085C5.83252 16.5183 7.39086 17 9.06253 17Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M4.52917 1.30334C3.93417 1.67167 3.39584 2.125 2.91417 2.60667C2.5175 3.00334 2.1775 3.45667 1.89417 3.91001C1.63917 4.33501 1.38417 4.76001 1.21417 5.21334C1.04417 5.63834 0.9025 6.06334 0.789167 6.51668C0.675833 6.94168 0.619167 7.36668 0.590833 7.82001C0.5625 8.04668 0.5625 8.27335 0.5625 8.50001H9.06251V0C7.39084 0 5.86084 0.481667 4.52917 1.30334Z",
                                fill: "#428BC1"
                            }), (0, a.jsx)("path", {
                                d: "M7.07924 0.283325L7.2209 0.708326H7.64591L7.3059 0.99166L7.41924 1.41666L7.07924 1.16166L6.73924 1.41666L6.85257 0.99166L6.51257 0.708326H6.93757L7.07924 0.283325ZM8.21257 1.98333L8.35424 2.40833H8.77924L8.43924 2.69166L8.55257 3.11666L8.21257 2.86166L7.87257 3.11666L7.98591 2.69166L7.64591 2.40833H8.07091L8.21257 1.98333ZM5.9459 1.98333L6.08757 2.40833H6.51257L6.17257 2.69166L6.2859 3.11666L5.9459 2.86166L5.6059 3.11666L5.71924 2.69166L5.37924 2.40833H5.80424L5.9459 1.98333ZM7.07924 3.68333L7.2209 4.10833H7.64591L7.3059 4.39166L7.41924 4.81667L7.07924 4.56166L6.73924 4.81667L6.85257 4.39166L6.51257 4.10833H6.93757L7.07924 3.68333ZM4.81257 3.68333L4.95423 4.10833H5.37924L5.03923 4.39166L5.15257 4.81667L4.81257 4.56166L4.47257 4.81667L4.5859 4.39166L4.2459 4.10833H4.6709L4.81257 3.68333ZM2.5459 3.68333L2.68756 4.10833H3.11256L2.77256 4.39166L2.8859 4.81667L2.5459 4.56166L2.2059 4.81667L2.31923 4.39166L1.97923 4.10833H2.40423L2.5459 3.68333ZM8.21257 5.38333L8.35424 5.80833H8.77924L8.43924 6.09167L8.55257 6.51667L8.21257 6.26167L7.87257 6.51667L7.98591 6.09167L7.64591 5.80833H8.07091L8.21257 5.38333ZM5.9459 5.38333L6.08757 5.80833H6.51257L6.17257 6.09167L6.2859 6.51667L5.9459 6.26167L5.6059 6.51667L5.71924 6.09167L5.37924 5.80833H5.80424L5.9459 5.38333ZM3.67923 5.38333L3.8209 5.80833H4.2459L3.9059 6.09167L4.01923 6.51667L3.67923 6.26167L3.33923 6.51667L3.45257 6.09167L3.11256 5.80833H3.53757L3.67923 5.38333ZM7.07924 7.08334L7.2209 7.50834H7.64591L7.3059 7.79167L7.41924 8.21667L7.07924 7.96167L6.73924 8.21667L6.85257 7.79167L6.51257 7.50834H6.93757L7.07924 7.08334ZM4.81257 7.08334L4.95423 7.50834H5.37924L5.03923 7.79167L5.15257 8.21667L4.81257 7.96167L4.47257 8.21667L4.5859 7.79167L4.2459 7.50834H4.6709L4.81257 7.08334ZM2.5459 7.08334L2.68756 7.50834H3.11256L2.77256 7.79167L2.8859 8.21667L2.5459 7.96167L2.2059 8.21667L2.31923 7.79167L1.97923 7.50834H2.40423L2.5459 7.08334ZM3.33923 3.11666L3.67923 2.86166L4.01923 3.11666L3.87757 2.69166L4.21757 2.40833H3.79257L3.67923 1.98333L3.53757 2.40833H3.1409L3.4809 2.66333L3.33923 3.11666M1.07256 6.51667L1.41256 6.26167L1.75256 6.51667L1.6109 6.09167L1.9509 5.80833H1.55423L1.41256 5.38333L1.2709 5.80833H0.987562C0.987562 5.83667 0.959229 5.865 0.959229 5.89333L1.1859 6.06333L1.07256 6.51667",
                                fill: "white"
                            })]
                        })
                    },
                    arGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M0 8.50002C0 12.2117 2.38 15.3567 5.66667 16.5184V0.481689C2.38 1.64336 0 4.78836 0 8.50002Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M8.49996 0C7.50829 0 6.54496 0.17 5.66663 0.481667V5.66667H16.5183C15.3566 2.38 12.2116 0 8.49996 0Z",
                                fill: "#699635"
                            }), (0, a.jsx)("path", {
                                d: "M16.5183 5.66669H5.66663V11.3334H16.5183C16.83 10.455 17 9.49169 17 8.50002C17 7.50835 16.83 6.54502 16.5183 5.66669Z",
                                fill: "#F9F9F9"
                            }), (0, a.jsx)("path", {
                                d: "M5.66663 11.3333V16.5183C6.54496 16.83 7.50829 17 8.49996 17C12.2116 17 15.3566 14.6483 16.5183 11.3333H5.66663Z",
                                fill: "#3E4347"
                            })]
                        })
                    },
                    daGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M16.7734 6.51667C15.8667 2.77667 12.5234 0 8.50002 0H8.21668V6.51667H16.7734ZM4.25002 1.13333C2.26668 2.295 0.793351 4.22167 0.226685 6.51667H4.25002V1.13333ZM0.226685 10.4833C0.793351 12.7783 2.26668 14.705 4.25002 15.8667V10.4833H0.226685ZM8.21668 17H8.50002C12.5234 17 15.8667 14.2233 16.7734 10.4833H8.21668V17Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M16.7733 6.51667H8.21667V0C6.77167 0.0566667 5.41167 0.453333 4.25 1.13333V6.51667H0.226667C0.085 7.14 0 7.82 0 8.5C0 9.18 0.085 9.86 0.226667 10.4833H4.25V15.8667C5.41167 16.5467 6.77167 16.9433 8.21667 17V10.4833H16.7733C16.915 9.86 17 9.18 17 8.5C17 7.82 16.915 7.14 16.7733 6.51667Z",
                                fill: "white"
                            })]
                        })
                    },
                    ukGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M8.5 17C13.2033 17 17 13.2033 17 8.5H0C0 13.2033 3.79667 17 8.5 17Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M8.5 0C3.79667 0 0 3.79667 0 8.5H17C17 3.79667 13.2033 0 8.5 0Z",
                                fill: "#428BC1"
                            })]
                        })
                    },
                    idGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M8.5 17C13.2033 17 17 13.2033 17 8.5H0C0 13.2033 3.79667 17 8.5 17",
                                fill: "#F9F9F9"
                            }), (0, a.jsx)("path", {
                                d: "M8.5 0C3.79667 0 0 3.79667 0 8.5H17C17 3.79667 13.2033 0 8.5 0",
                                fill: "#ED4C5C"
                            })]
                        })
                    },
                    itGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M0 8.50002C0 12.2117 2.38 15.3567 5.66667 16.5184V0.481689C2.38 1.64336 0 4.78836 0 8.50002Z",
                                fill: "#75A843"
                            }), (0, a.jsx)("path", {
                                d: "M17 8.50002C17 4.78836 14.62 1.64336 11.3334 0.481689V16.5184C14.6484 15.3567 17 12.2117 17 8.50002",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M5.66663 16.5183C6.54496 16.83 7.50829 17 8.49996 17C9.49163 17 10.455 16.83 11.3333 16.5183V0.481667C10.455 0.17 9.49163 0 8.49996 0C7.50829 0 6.54496 0.17 5.66663 0.481667V16.5183",
                                fill: "white"
                            })]
                        })
                    },
                    koGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z",
                                fill: "#F5F5F5"
                            }), (0, a.jsx)("path", {
                                d: "M6.06329 8.98168C6.85663 9.52001 7.96163 9.29334 8.49996 8.50001C9.03829 7.70668 10.115 7.48001 10.9366 8.01834C11.7016 8.52834 11.9283 9.52001 11.5033 10.285C12.4383 8.69834 12.0133 6.63001 10.4266 5.58168C8.81163 4.50501 6.62996 4.93001 5.55329 6.54501C5.52496 6.60168 5.49663 6.65834 5.46829 6.68668C5.07163 7.50834 5.32663 8.47168 6.06329 8.98168",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M11.4183 10.455C11.4467 10.3984 11.475 10.3417 11.5033 10.3134C11.475 10.3417 11.4467 10.3984 11.4183 10.455Z",
                                fill: "#003478"
                            }), (0, a.jsx)("path", {
                                d: "M10.9367 8.01836C10.1434 7.48003 9.03837 7.70669 8.50003 8.50003C7.9617 9.29336 6.88503 9.52003 6.06336 8.98169C5.29836 8.47169 5.0717 7.48003 5.4967 6.71503C4.53336 8.30169 4.9867 10.37 6.57337 11.4184C8.18837 12.495 10.37 12.07 11.4467 10.455C11.475 10.3984 11.5034 10.3417 11.5317 10.3134C11.9284 9.49169 11.6734 8.52836 10.9367 8.01836",
                                fill: "#428BC1"
                            }), (0, a.jsx)("path", {
                                d: "M1.64337 6.03497L3.59837 3.11663L3.40004 2.97497L3.2017 2.86163L1.2467 5.77997L1.44504 5.8933L1.64337 6.03497ZM2.1817 6.4033L2.38004 6.51663L4.3067 3.5983L4.1367 3.48497L3.93837 3.3433L1.98337 6.26163L2.1817 6.4033ZM4.6467 3.82497L2.72004 6.7433L2.91837 6.88497L3.1167 6.9983L5.04337 4.07997L4.84504 3.96663L4.6467 3.82497ZM13.175 11.475L13.3734 11.6166L14.28 10.2566L14.0817 10.115L13.8834 10.0016L12.9767 11.3616L13.175 11.475ZM15.3567 10.965L14.45 12.325L14.6484 12.4666L14.8467 12.58L15.7534 11.22L15.555 11.1066L15.3567 10.965ZM14.11 12.0983L15.0167 10.7383L14.8184 10.5966L14.62 10.4833L13.7134 11.8433L13.9117 11.9566L14.11 12.0983ZM13.0617 11.6733L12.8634 11.56L11.9567 12.92L12.155 13.0333L12.3534 13.175L13.26 11.815L13.0617 11.6733ZM13.77 12.155L13.6 12.0416L12.6934 13.4016L12.8634 13.515L13.0617 13.6566L13.9684 12.2966L13.77 12.155ZM14.3084 12.5233L13.4017 13.8833L13.6 14.025L13.7984 14.1383L14.705 12.7783L14.5067 12.6366L14.3084 12.5233ZM1.44504 11.1066L1.2467 11.22L3.2017 14.1383L3.40004 14.025L3.59837 13.8833L1.64337 10.965L1.44504 11.1066ZM3.23004 12.155L3.0317 12.2966L3.93837 13.6566L4.1367 13.515L4.3067 13.4016L3.40004 12.0416L3.23004 12.155ZM2.91837 10.115L2.72004 10.2566L4.6467 13.175L4.84504 13.0333L5.04337 12.92L3.1167 10.0016L2.91837 10.115ZM1.98337 10.7383L2.89004 12.0983L3.08837 11.9566L3.2867 11.8433L2.38004 10.4833L2.1817 10.5966L1.98337 10.7383ZM14.5067 4.3633L14.705 4.22163L13.7984 2.86163L13.6 2.97497L13.4017 3.11663L14.3084 4.47663L14.5067 4.3633ZM13.0617 5.32663L13.26 5.18497L12.3534 3.82497L12.155 3.96663L11.9567 4.07997L12.8634 5.43997L13.0617 5.32663ZM14.45 4.67497L15.3567 6.03497L15.555 5.8933L15.7534 5.77997L14.8467 4.41997L14.6484 4.5333L14.45 4.67497ZM14.8184 6.4033L15.0167 6.26163L13.0617 3.3433L12.8634 3.48497L12.6934 3.5983L14.62 6.51663L14.8184 6.4033ZM14.0817 6.88497L14.28 6.7433L13.3734 5.3833L13.175 5.52497L12.9767 5.6383L13.8834 6.9983L14.0817 6.88497Z",
                                fill: "#3E4347"
                            })]
                        })
                    },
                    noGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M16.8868 7.35438C16.8586 7.07152 16.802 6.78866 16.7454 6.5058H0.22627C0.169697 6.78866 0.113125 7.07152 0.0848389 7.35438H16.8868M0.0848389 9.61728C0.113125 9.90014 0.169697 10.183 0.22627 10.4659H16.7171C16.7737 10.183 16.8303 9.90014 16.8586 9.61728H0.0848389Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M5.09151 0.707155C4.80864 0.8203 4.52578 0.990017 4.24292 1.13145V15.8403C4.52578 16.01 4.80864 16.1514 5.09151 16.2646V0.707155ZM7.3544 0.0848586V16.9151L8.20299 17V0C7.92012 0 7.63726 0.0282862 7.3544 0.0848586Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M0 8.48588C0 8.88189 0.0282862 9.24961 0.0848586 9.61733H16.9151C16.9717 9.24961 17 8.88189 17 8.48588C17 8.08987 16.9717 7.72215 16.9151 7.35443H0.0848586C0.0282862 7.72215 0 8.08987 0 8.48588",
                                fill: "#428BC1"
                            }), (0, a.jsx)("path", {
                                d: "M5.09155 16.2645C5.79871 16.5757 6.56243 16.802 7.35445 16.8868V0.0848389C6.56243 0.197984 5.79871 0.395987 5.09155 0.707135V16.2645Z",
                                fill: "#428BC1"
                            }), (0, a.jsx)("path", {
                                d: "M4.24296 6.50582V1.13145C2.26292 2.29118 0.792042 4.21464 0.226318 6.50582H4.24296ZM4.24296 10.4659V15.8403C2.26292 14.6805 0.792042 12.7571 0.226318 10.4659H4.24296ZM8.48589 0H8.20302V6.50582H16.7455C15.8403 2.77205 12.5025 0 8.48589 0ZM8.20302 10.4659V16.9717H8.48589C12.5025 16.9717 15.8403 14.1997 16.7455 10.4659H8.20302Z",
                                fill: "#ED4C5C"
                            })]
                        })
                    },
                    esGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M0 8.50001C0 10.1717 0.482471 11.73 1.30551 13.0333H15.6945C16.5175 11.73 17 10.1717 17 8.50001C17 6.82834 16.5175 5.27001 15.6945 3.96667H1.30551C0.482471 5.27001 0 6.82834 0 8.50001Z",
                                fill: "#FFCE31"
                            }), (0, a.jsx)("path", {
                                d: "M15.7229 3.96667C14.2187 1.58667 11.551 0 8.51422 0C5.4775 0 2.80972 1.58667 1.30554 3.96667H15.7229ZM1.30554 13.0333C2.80972 15.4133 5.4775 17 8.51422 17C11.551 17 14.2187 15.4133 15.7229 13.0333H1.30554Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M2.04333 7.565H2.95152V8.075H2.04333V7.565ZM2.04333 11.305H2.9799V11.7867H2.04333V11.305Z",
                                fill: "#C8B100"
                            }), (0, a.jsx)("path", {
                                d: "M1.95831 10.5117C1.87317 10.5683 1.81641 10.625 1.81641 10.6533C1.81641 10.6817 1.84479 10.71 1.90155 10.7383C1.95831 10.7667 2.01507 10.8233 1.98669 10.88C2.04345 10.8233 2.07183 10.7667 2.07183 10.71C2.07183 10.625 2.01507 10.54 1.95831 10.5117",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M2.1853 8.07501H2.83806V11.305H2.1853V8.07501Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M3.51919 9.26499C3.37728 9.20833 3.12186 9.15166 2.83805 9.15166C2.75291 9.15166 2.63939 9.15166 2.52586 9.17999C2.12854 9.23666 1.81635 9.40666 1.84473 9.51999L1.70283 9.20833C1.67445 9.06666 2.01501 8.89666 2.44072 8.81166C2.58263 8.78332 2.72453 8.78333 2.83805 8.78333C3.12186 8.78333 3.37728 8.81166 3.51919 8.86832V9.26499",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M2.18536 9.68998C2.01507 9.68998 1.87317 9.63331 1.87317 9.54831C1.87317 9.49164 1.92993 9.40664 2.04345 9.34998H2.21374L2.18536 9.68998ZM2.83811 9.43498C2.95163 9.46331 3.03677 9.49164 3.09354 9.51998C3.12192 9.54831 3.00839 9.66164 2.83811 9.74664V9.43498",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M1.75954 10.3134C1.73116 10.2567 1.92982 10.1434 2.18525 10.0584C2.29877 10.03 2.38391 9.97335 2.52582 9.91669C2.86638 9.77502 3.15019 9.57669 3.09343 9.52002L3.15019 9.86002C3.17857 9.91669 2.95153 10.0867 2.61096 10.2567C2.49744 10.3134 2.29877 10.3984 2.18525 10.4267C1.98658 10.4834 1.8163 10.5967 1.8163 10.625L1.75954 10.3134",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M8.1452 7.565H9.05338V8.075H8.1452V7.565ZM8.11682 11.305H9.05338V11.7867H8.11682V11.305Z",
                                fill: "#C8B100"
                            }), (0, a.jsx)("path", {
                                d: "M9.13855 10.5117C9.22369 10.5683 9.28045 10.625 9.28045 10.6533C9.28045 10.6817 9.25207 10.71 9.19531 10.7383C9.13855 10.795 9.08179 10.88 9.11017 10.9083C9.0534 10.8517 9.02502 10.795 9.02502 10.7383C9.02502 10.625 9.08179 10.54 9.13855 10.5117",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M8.25879 8.07501H8.91154V11.305H8.25879V8.07501Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M7.57764 9.26499C7.71954 9.20833 7.97497 9.15166 8.25877 9.15166C8.34391 9.15166 8.45744 9.15166 8.57096 9.17999C8.96829 9.23666 9.28047 9.40666 9.25209 9.51999L9.394 9.17999C9.42238 9.03833 9.08181 8.86833 8.6561 8.78333H8.25877C7.97497 8.78333 7.71954 8.81166 7.57764 8.86832V9.26499",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M8.91155 9.68998C9.08183 9.68998 9.22374 9.63331 9.22374 9.54831C9.22374 9.49164 9.16698 9.40664 9.05345 9.34998H8.88317L8.91155 9.68998ZM8.2588 9.43498C8.14527 9.46331 8.06013 9.49164 8.00337 9.51998C7.97499 9.54831 8.08851 9.66164 8.2588 9.74664V9.43498",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M9.33726 10.3133C9.36564 10.2566 9.16697 10.1433 8.91155 10.0583C8.79802 10.03 8.71288 9.97331 8.57098 9.91665C8.23041 9.77498 7.9466 9.57665 8.00337 9.51998L7.9466 9.85998C7.91822 9.91665 8.14527 10.0866 8.48584 10.2566C8.59936 10.3133 8.79802 10.3983 8.91155 10.4266C9.11021 10.4833 9.28049 10.625 9.25211 10.6533L9.33726 10.3133M5.53425 5.75165C6.07348 5.75165 7.18033 5.86498 7.57766 6.26165C7.15195 7.28165 6.47081 6.85665 5.53425 6.85665C4.62607 6.85665 3.91655 7.28165 3.49084 6.26165C3.88817 5.86498 4.96664 5.75165 5.53425 5.75165Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M6.92488 6.88497C6.58432 6.68664 6.07346 6.6583 5.53423 6.6583C4.995 6.6583 4.48415 6.71497 4.14358 6.88497L4.2571 7.36664C4.56929 7.45164 5.02338 7.5083 5.53423 7.5083C6.04508 7.5083 6.47079 7.45164 6.81136 7.36664L6.92488 6.88497ZM7.40735 5.66664C7.29383 5.58164 7.06679 5.49664 6.86812 5.49664C6.78298 5.49664 6.69784 5.49664 6.6127 5.52497C6.6127 5.52497 6.44241 5.29831 6.04508 5.29831C5.90318 5.29831 5.78966 5.32664 5.67614 5.3833V5.35497C5.64776 5.2983 5.59099 5.24164 5.53423 5.24164C5.47747 5.24164 5.39233 5.32664 5.39233 5.3833V5.41164C5.27881 5.35497 5.16528 5.32664 5.02338 5.32664C4.62605 5.32664 4.45577 5.58164 4.45577 5.5533C4.37063 5.52497 4.28548 5.52497 4.20034 5.52497C2.89483 5.52497 3.54759 6.4033 3.54759 6.4033L3.68949 6.2333C3.3773 5.83664 3.66111 5.60997 4.22872 5.60997C4.31387 5.60997 4.37063 5.60997 4.42739 5.6383C4.22872 5.92164 4.59767 6.17664 4.59767 6.17664L4.68281 6.03497C4.48415 5.8933 4.45577 5.41164 5.02338 5.41164C5.16528 5.41164 5.27881 5.43997 5.39233 5.52497C5.39233 5.5533 5.36395 5.94997 5.33557 6.00664L5.56261 6.20497L5.78966 6.00664C5.76128 5.92164 5.7329 5.5533 5.7329 5.52497C5.81804 5.4683 5.95994 5.41164 6.10185 5.41164C6.69784 5.41164 6.69784 5.8933 6.44241 6.03497L6.52755 6.17664C6.52755 6.17664 6.83974 5.92164 6.69784 5.6383C6.7546 5.6383 6.83974 5.60997 6.8965 5.60997C7.57764 5.60997 7.60602 6.11997 7.43574 6.2333L7.54926 6.4033C7.4925 6.4033 7.80468 6.00664 7.40735 5.66664",
                                fill: "#C8B100"
                            }), (0, a.jsx)("path", {
                                d: "M5.36389 5.12831C5.36389 5.04331 5.44903 4.95831 5.53418 4.95831C5.6477 4.95831 5.70446 5.04331 5.70446 5.12831C5.70446 5.21331 5.61932 5.29831 5.53418 5.29831C5.44903 5.29831 5.36389 5.21331 5.36389 5.12831Z",
                                fill: "#005BBF"
                            }), (0, a.jsx)("path", {
                                d: "M5.47741 4.64667V4.73167H5.39227V4.81667H5.47741V5.1H5.36389V5.185H5.70446L5.73284 5.12833L5.70446 5.1H5.59094V4.81667H5.67608V4.73167H5.59094V4.64667H5.47741Z",
                                fill: "#C8B100"
                            }), (0, a.jsx)("path", {
                                d: "M5.53421 7.45167C5.08012 7.45167 4.68279 7.395 4.37061 7.31C4.68279 7.225 5.08012 7.16833 5.53421 7.16833C5.9883 7.16833 6.38563 7.225 6.69782 7.31C6.41401 7.395 5.9883 7.45167 5.53421 7.45167Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M5.56257 12.3533C5.02334 12.3533 4.51249 12.2117 4.0584 12.0133C3.71783 11.8433 3.51917 11.5317 3.51917 11.1633V9.80335H7.60598V11.1633C7.60598 11.5317 7.37893 11.8717 7.06674 12.0133C6.61265 12.24 6.1018 12.3533 5.56257 12.3533ZM5.53419 7.53668H7.5776V9.80335H5.53419V7.53668Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M5.56257 11.1633C5.56257 11.7017 5.10848 12.1267 4.54087 12.1267C3.97326 12.1267 3.51917 11.7017 3.51917 11.1633V9.80334H5.56257V11.1633Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M3.94493 11.9567C4.0017 11.985 4.08684 12.0417 4.20036 12.07V9.7467H3.97332L3.94493 11.9567ZM3.49084 11.135C3.49084 11.4184 3.60437 11.645 3.71789 11.7584V9.7467H3.49084V11.135Z",
                                fill: "#C8B100"
                            }), (0, a.jsx)("path", {
                                d: "M4.39905 12.1267H4.62609V9.7467H4.39905V12.1267Z",
                                fill: "#C7B500"
                            }), (0, a.jsx)("path", {
                                d: "M4.85303 12.07C4.93817 12.0417 5.05169 11.985 5.10845 11.9567V9.7467H4.88141L4.85303 12.07",
                                fill: "#C8B100"
                            }), (0, a.jsx)("path", {
                                d: "M3.49084 7.53668H5.53425V9.80335H3.49084V7.53668Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M5.33557 11.7584C5.44909 11.6734 5.53424 11.475 5.56262 11.2484V9.77502H5.33557V11.7584Z",
                                fill: "#C8B100"
                            }), (0, a.jsx)("path", {
                                d: "M7.60603 9.80332V11.1633C7.60603 11.7017 7.15194 12.1267 6.58432 12.1267C6.01671 12.1267 5.56262 11.7017 5.56262 11.1633V9.80332H7.60603M6.86813 7.93332C6.95327 8.10332 6.95327 8.52832 6.69785 8.44332C6.75461 8.47165 6.78299 8.66999 6.86813 8.78332C7.01003 8.95332 7.18032 8.81165 7.15194 8.61332C7.09518 8.30165 7.12356 8.10332 7.18032 7.79165C7.18032 7.81999 7.32222 7.81999 7.37898 7.76332C7.3506 7.84832 7.32222 7.96165 7.37898 7.96165C7.32222 8.04665 7.18032 8.18832 7.15194 8.27332C7.12356 8.47165 7.43574 8.83999 7.09517 8.92499C6.86813 8.98165 7.01003 9.15165 7.09517 9.23665C7.09517 9.23665 6.98165 9.60499 7.03841 9.57665C6.81137 9.66165 6.86813 9.46332 6.86813 9.46332C6.98165 9.12332 6.66947 9.09499 6.69785 9.03832C6.41404 9.00999 6.72623 9.29332 6.4708 9.29332C6.41404 9.29332 6.30052 9.34999 6.30052 9.34999C5.98833 9.32165 6.15861 9.03832 6.27214 9.06665C6.35728 9.09499 6.44242 9.23665 6.44242 9.03832C6.44242 9.03832 6.30052 8.81165 6.66947 8.81165C6.52756 8.81165 6.44242 8.69832 6.38566 8.55665C6.3289 8.58499 6.24376 8.72665 5.93157 8.75499C5.93157 8.75499 5.84643 8.44332 5.93157 8.49999C6.04509 8.55665 6.10185 8.55665 6.21538 8.44332C6.15861 8.35832 5.81805 8.24499 5.87481 8.04665C5.87481 7.98999 6.04509 7.90499 6.04509 7.90499C6.01671 8.04665 6.10185 8.18832 6.27214 8.18832C6.49918 8.21665 6.41404 8.13165 6.44242 8.07499C6.4708 8.01832 6.64108 8.10332 6.58432 7.96165C6.58432 7.93332 6.38566 7.90499 6.44242 7.81999C6.55594 7.67832 6.72623 7.79165 6.86813 7.93332M5.56262 12.07L5.50586 11.9283L5.56262 11.7583L5.61938 11.9283L5.56262 12.07Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M4.11523 8.01835V8.16002H4.17199V8.27335H4.03009V8.55669H4.11523V9.18002H3.94495V9.49169H5.10855V9.18002H4.96665V8.55669H5.02341V8.27335H4.88151V8.16002H4.96665V8.01835H4.68284V8.16002H4.7396V8.27335H4.5977V7.93335H4.68284V7.79169H4.37066V7.93335H4.4558V8.27335H4.31389V8.16002H4.37066V8.01835H4.11523ZM7.32224 11.5034V10.0867H5.84645V11.5034L6.52758 11.815H6.61273L7.32224 11.5034ZM6.52758 10.2V10.6817L6.04511 10.2H6.52758ZM5.93159 10.2284L6.4992 10.795L5.93159 11.3617V10.2284ZM5.98835 11.475L6.52758 10.9367V11.73L5.98835 11.475ZM6.61273 11.7017V10.9084L7.15196 11.4467L6.61273 11.7017ZM7.20872 11.3617L6.64111 10.795L7.20872 10.2284V11.3617ZM6.61273 10.2H7.0952L6.61273 10.6817V10.2Z",
                                fill: "#C8B100"
                            }), (0, a.jsx)("path", {
                                d: "M4.88147 9.775C4.88147 9.35 5.16528 9.03833 5.53422 9.03833C5.90317 9.03833 6.18698 9.37833 6.18698 9.775C6.18698 10.1717 5.90317 10.5117 5.53422 10.5117C5.16528 10.5117 4.88147 10.2 4.88147 9.775Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M5.0802 9.77497C5.0802 9.4633 5.27886 9.23663 5.53429 9.23663C5.78972 9.23663 5.98838 9.49163 5.98838 9.77497C5.98838 10.0866 5.78972 10.3133 5.53429 10.3133C5.30725 10.3416 5.0802 10.0866 5.0802 9.77497Z",
                                fill: "#005BBF"
                            }), (0, a.jsx)("path", {
                                d: "M5.33557 9.40668L5.22205 9.71834L5.30719 9.74668L5.25043 9.86001H5.42071L5.36395 9.74668L5.44909 9.71834L5.33557 9.40668M5.76128 9.40668L5.64776 9.71834L5.7329 9.74668L5.67614 9.86001H5.84642L5.81804 9.74668L5.90318 9.71834L5.76128 9.40668M5.56261 9.77501L5.42071 10.0867L5.50585 10.115L5.47747 10.2283H5.61937L5.59099 10.115L5.67614 10.0867L5.56261 9.77501Z",
                                fill: "#C8B100"
                            })]
                        })
                    },
                    tlGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M8.78334 8.5L2.63501 14.6483C4.16501 16.0933 6.23334 17 8.50001 17C13.2033 17 17 13.2033 17 8.5H8.78334Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M17 8.5C17 3.79667 13.2033 0 8.50001 0C6.23334 0 4.16501 0.906667 2.63501 2.35167L8.78334 8.5H17Z",
                                fill: "#428BC1"
                            }), (0, a.jsx)("path", {
                                d: "M2.635 2.35168C1.02 3.91002 0 6.09168 0 8.50002C0 10.9084 1.02 13.09 2.635 14.6484L8.78334 8.50002L2.635 2.35168Z",
                                fill: "#F9F9F9"
                            }), (0, a.jsx)("path", {
                                d: "M3.11666 3.28666L2.88999 3.68333L3.20166 3.99499L2.77666 3.93833L2.54999 4.33499L2.49332 3.90999L2.06832 3.85333L2.46499 3.62666L2.40832 3.20166L2.71999 3.51333L3.11666 3.28666ZM3.17332 13.0333L2.86166 13.3733L3.08832 13.7417L2.69166 13.5717L2.37999 13.9117L2.43666 13.4583L2.01166 13.2883L2.46499 13.2033L2.52166 12.75L2.74832 13.1467L3.17332 13.0333ZM8.07499 8.49999L7.64999 8.64166V9.06666L7.36666 8.72666L6.94166 8.83999L7.22499 8.49999L6.94166 8.15999L7.36666 8.27333L7.64999 7.93333V8.35833L8.07499 8.49999ZM6.14832 8.07499L5.97832 7.93333L4.13666 8.32999H4.16499L5.89332 7.87666L5.66666 7.73499L4.19332 8.30166L5.41166 7.28166L5.38332 7.02666L4.10832 8.32999H4.07999L5.35499 6.91333L5.32666 6.71499L5.12832 6.74333L3.99499 8.21666V8.18833L5.04332 6.68666L4.78832 6.71499L4.02332 8.10333L4.30666 6.51666L4.13666 6.34666L3.96666 8.18833V8.21666L4.02332 6.28999L3.88166 6.14833L3.73999 6.28999L3.79666 8.21666V8.18833L3.65499 6.37499L3.48499 6.54499L3.76832 8.13166L3.00332 6.74333L2.74832 6.71499L3.79666 8.21666V8.24499L2.63499 6.71499L2.43666 6.68666L2.40832 6.88499L3.68332 8.30166H3.65499L2.37999 6.99833L2.35166 7.25333L3.56999 8.27333L2.09666 7.70666L1.89832 7.84833L3.62666 8.30166H3.65499L1.78499 7.93333L1.61499 8.04666L1.72832 8.21666L3.59832 8.47166H3.56999L1.78499 8.30166L1.92666 8.49999L3.51332 8.47166L2.03999 9.06666L1.98332 9.32166L3.59832 8.52833H3.62666L1.95499 9.43499L1.89832 9.63333L2.09666 9.68999L3.71166 8.66999V8.69833L2.23832 9.74666L2.46499 9.80333L3.65499 8.75499L2.83332 10.1433L2.94666 10.37L3.68332 8.72666L3.71166 8.69833L3.00332 10.4833L3.08832 10.6817L3.28666 10.5967L3.88166 8.75499V8.78333L3.39999 10.54L3.62666 10.4267L3.88166 8.83999L4.13666 10.4267L4.36332 10.54L3.88166 8.78333V8.75499L4.47666 10.5967L4.67499 10.6817L4.75999 10.4833L4.05166 8.69833L4.07999 8.72666L4.81666 10.37L4.92999 10.1433L4.13666 8.75499L5.32666 9.80333L5.55332 9.74666L4.07999 8.69833V8.66999L5.69499 9.68999L5.89332 9.63333L5.83666 9.43499L4.16499 8.52833H4.19332L5.80832 9.32166L5.72332 9.06666L4.22166 8.52833L5.80832 8.55666L5.94999 8.35833L4.16499 8.52833H4.13666L6.00666 8.27333L6.14832 8.07499",
                                fill: "#FFCE31"
                            }), (0, a.jsx)("path", {
                                d: "M3.88169 9.77498C4.58585 9.77498 5.15669 9.20414 5.15669 8.49998C5.15669 7.79581 4.58585 7.22498 3.88169 7.22498C3.17753 7.22498 2.60669 7.79581 2.60669 8.49998C2.60669 9.20414 3.17753 9.77498 3.88169 9.77498Z",
                                fill: "#FFCE31"
                            })]
                        })
                    },
                    trGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M11.135 10.4833L11.1633 8.95333L9.6333 8.5L11.1633 8.04666L11.135 6.51666L12.07 7.735L13.6 7.28166L12.665 8.5L13.6 9.71833L12.07 9.265L11.135 10.4833Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M8.84002 11.9C6.97002 11.9 5.46836 10.37 5.46836 8.5C5.46836 6.63 6.97002 5.1 8.84002 5.1C9.54836 5.1 10.2 5.32667 10.7667 5.695C10.0017 4.81667 8.86836 4.25 7.59336 4.25C5.27002 4.25 3.40002 6.14833 3.40002 8.5C3.40002 10.8517 5.27002 12.75 7.59336 12.75C8.86836 12.75 10.0017 12.1833 10.7667 11.305C10.2284 11.6733 9.57669 11.9 8.84002 11.9Z",
                                fill: "white"
                            })]
                        })
                    },
                    deGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M9.03433 0C5.32266 0 2.17766 2.38 1.01599 5.66667H17.0527C15.891 2.38 12.746 0 9.03433 0Z",
                                fill: "#3E4347"
                            }), (0, a.jsx)("path", {
                                d: "M9.03433 17C12.746 17 15.891 14.6483 17.0527 11.3333H1.01599C2.17766 14.6483 5.32266 17 9.03433 17V17Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M1.01609 5.66669C0.704424 6.54502 0.534424 7.50835 0.534424 8.50002C0.534424 9.49169 0.704424 10.455 1.01609 11.3334H17.0528C17.3644 10.455 17.5344 9.49169 17.5344 8.50002C17.5344 7.50835 17.3644 6.54502 17.0528 5.66669H1.01609Z",
                                fill: "#ED4C5C"
                            })]
                        })
                    },
                    greyGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsx)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, a.jsx)("path", {
                                d: "M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z",
                                fill: "#D1D1D1"
                            })
                        })
                    },
                    frGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M0.534424 8.50002C0.534424 12.2117 2.91442 15.3567 6.20109 16.5184V0.481689C2.91442 1.64336 0.534424 4.78836 0.534424 8.50002Z",
                                fill: "#428BC1"
                            }), (0, a.jsx)("path", {
                                d: "M17.5345 8.50002C17.5345 4.78836 15.1828 1.64336 11.8678 0.481689V16.5184C15.1828 15.3567 17.5345 12.2117 17.5345 8.50002",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M6.20105 16.5183C7.07938 16.83 8.04272 17 9.03438 17C10.026 17 10.9894 16.83 11.8677 16.5183V0.481667C10.9894 0.17 10.0544 0 9.03438 0C8.01438 0 7.07938 0.17 6.20105 0.481667V16.5183",
                                fill: "white"
                            })]
                        })
                    },
                    nlGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 17 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M8.49978 0C4.78811 0 1.64311 2.35167 0.481445 5.66667H16.5181C15.3564 2.35167 12.2114 0 8.49978 0Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M8.49978 17C12.2114 17 15.3564 14.6483 16.5181 11.3333H0.481445C1.64311 14.6483 4.78811 17 8.49978 17Z",
                                fill: "#428BC1"
                            }), (0, a.jsx)("path", {
                                d: "M0.481667 5.66669C0.17 6.54502 0 7.50835 0 8.50002C0 9.49169 0.17 10.455 0.481667 11.3334H16.5183C16.83 10.455 17 9.49169 17 8.50002C17 7.50835 16.83 6.54502 16.5183 5.66669H0.481667Z",
                                fill: "white"
                            })]
                        })
                    },
                    ptGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            className: t,
                            width: s,
                            height: r,
                            viewBox: "0 0 18 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                d: "M4.8125 15.8667V1.13336C2.2625 2.6067 0.5625 5.35503 0.5625 8.50003C0.5625 11.645 2.2625 14.3934 4.8125 15.8667Z",
                                fill: "#699635"
                            }), (0, a.jsx)("path", {
                                d: "M9.0625 0C7.50417 0 6.05917 0.425 4.8125 1.13333V15.8667C6.05917 16.6033 7.50417 17 9.0625 17C13.7658 17 17.5625 13.2033 17.5625 8.5C17.5625 3.79667 13.7658 0 9.0625 0Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M4.81248 5.10004C2.94248 5.10004 1.41248 6.63004 1.41248 8.50004C1.41248 10.37 2.94248 11.9 4.81248 11.9C6.68248 11.9 8.21248 10.37 8.21248 8.50004C8.21248 6.63004 6.68248 5.10004 4.81248 5.10004ZM4.81248 11.475C3.16914 11.475 1.83748 10.1434 1.83748 8.50004C1.83748 6.8567 3.16914 5.52504 4.81248 5.52504C6.45581 5.52504 7.78748 6.8567 7.78748 8.50004C7.78748 10.1434 6.45581 11.475 4.81248 11.475Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M5.97418 11.8151C5.91752 11.8717 5.83252 11.8717 5.77585 11.8151L1.89418 6.68673C1.83752 6.63007 1.83752 6.54507 1.89418 6.4884L1.97918 6.4034C2.03585 6.34673 2.12085 6.34673 2.17752 6.4034L6.05918 11.5317C6.11585 11.5884 6.11585 11.6734 6.05918 11.7301L5.97418 11.8151",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M4.86903 4.95831C4.95403 4.95831 5.01069 5.01498 5.01069 5.09998V11.9C5.01069 11.985 4.95403 12.0416 4.86903 12.0416H4.72736C4.64236 12.0416 4.58569 11.985 4.58569 11.9V5.09998C4.58569 5.01498 4.64236 4.95831 4.72736 4.95831H4.86903Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M8.18418 8.8684L4.81252 8.2734V8.6984L8.12752 9.2934C8.21252 9.2934 8.26918 9.26507 8.29752 9.18007L8.32585 9.0384C8.32585 8.98173 8.26918 8.89673 8.18418 8.8684M4.81252 8.24507L2.14918 6.37507C2.09252 6.3184 2.00752 6.34673 1.95085 6.4034L1.86585 6.51673C1.80918 6.5734 1.83752 6.6584 1.89418 6.71507L4.81252 8.75507V8.24507",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M4.69915 7.93333L2.03581 10.5967C1.97915 10.6533 1.97915 10.7383 2.03581 10.795L2.14915 10.9083C2.20581 10.965 2.29081 10.965 2.34748 10.9083L4.69915 8.55666V7.93333ZM4.81248 6.65833L1.27081 8.32999C1.21415 8.35832 1.15748 8.44332 1.21415 8.52832L1.27081 8.66999C1.29915 8.72666 1.38415 8.78332 1.46915 8.72666L4.81248 7.13999V6.65833Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M7.95738 7.13998L4.58572 6.54498V6.96998L7.90072 7.56498C7.98572 7.56498 8.04238 7.53665 8.07072 7.45165L8.09905 7.30998C8.07072 7.22498 8.01405 7.13998 7.95738 7.13998M4.78405 10.455C4.72738 10.4833 4.67072 10.5683 4.72738 10.6533L4.78405 10.795C4.81238 10.8516 4.89738 10.9083 4.98238 10.8516L7.81572 9.54832L7.95738 9.00998L4.78405 10.455M4.78405 9.49165L1.61072 8.32998V8.78332L4.78405 9.94498V9.49165Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M2.57422 10.4266V10.8516L6.76755 11.135C6.93755 11.0216 7.07922 10.88 7.22089 10.7383L2.57422 10.4266Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M3.39587 7.08331V9.06665C3.39587 9.85998 4.01921 10.4833 4.81254 10.4833C5.60587 10.4833 6.22921 9.85998 6.22921 9.06665V7.08331H3.39587Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.81256 11.05C3.70756 11.05 2.82922 10.1717 2.82922 9.06666V6.51666H6.79589V9.06666C6.79589 10.1717 5.91756 11.05 4.81256 11.05ZM3.96256 7.65V9.06666C3.96256 9.54833 4.33089 9.91666 4.81256 9.91666C5.29422 9.91666 5.66256 9.54833 5.66256 9.06666V7.65H3.96256Z",
                                fill: "#ED4C5C"
                            }), (0, a.jsx)("path", {
                                d: "M4.55751 7.76332V8.21665C4.55751 8.30165 4.61418 8.35832 4.69918 8.35832H4.92584C5.01084 8.35832 5.06751 8.30165 5.06751 8.21665V7.73499H4.55751V7.76332ZM4.55751 8.47165V8.95332C4.55751 9.03832 4.61418 9.09498 4.69918 9.09498H4.92584C5.01084 9.09498 5.06751 9.03832 5.06751 8.95332V8.47165H4.55751M3.99084 8.47165V8.95332C3.99084 9.03832 4.04751 9.09498 4.13251 9.09498H4.35918C4.44418 9.09498 4.50084 9.03832 4.50084 8.95332V8.47165H3.99084ZM5.12418 8.47165V8.95332C5.12418 9.03832 5.18084 9.09498 5.26584 9.09498H5.49251C5.57751 9.09498 5.63418 9.03832 5.63418 8.95332V8.47165H5.12418ZM4.55751 9.15165V9.63332C4.55751 9.71832 4.61418 9.77499 4.69918 9.77499H4.92584C5.01084 9.77499 5.06751 9.71832 5.06751 9.63332V9.15165H4.55751",
                                fill: "#0071BC"
                            }), (0, a.jsx)("path", {
                                d: "M4.81253 8.8117C4.84382 8.8117 4.86919 8.78633 4.86919 8.75503C4.86919 8.72374 4.84382 8.69836 4.81253 8.69836C4.78123 8.69836 4.75586 8.72374 4.75586 8.75503C4.75586 8.78633 4.78123 8.8117 4.81253 8.8117Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.69925 8.95336C4.73054 8.95336 4.75591 8.92799 4.75591 8.89669C4.75591 8.8654 4.73054 8.84003 4.69925 8.84003C4.66795 8.84003 4.64258 8.8654 4.64258 8.89669C4.64258 8.92799 4.66795 8.95336 4.69925 8.95336Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.92593 8.95336C4.95723 8.95336 4.9826 8.92799 4.9826 8.89669C4.9826 8.8654 4.95723 8.84003 4.92593 8.84003C4.89463 8.84003 4.86926 8.8654 4.86926 8.89669C4.86926 8.92799 4.89463 8.95336 4.92593 8.95336Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.69925 8.66997C4.73054 8.66997 4.75591 8.6446 4.75591 8.61331C4.75591 8.58201 4.73054 8.55664 4.69925 8.55664C4.66795 8.55664 4.64258 8.58201 4.64258 8.61331C4.64258 8.6446 4.66795 8.66997 4.69925 8.66997Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.92593 8.66997C4.95723 8.66997 4.9826 8.6446 4.9826 8.61331C4.9826 8.58201 4.95723 8.55664 4.92593 8.55664C4.89463 8.55664 4.86926 8.58201 4.86926 8.61331C4.86926 8.6446 4.89463 8.66997 4.92593 8.66997Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.81253 8.10332C4.84382 8.10332 4.86919 8.07795 4.86919 8.04666C4.86919 8.01536 4.84382 7.98999 4.81253 7.98999C4.78123 7.98999 4.75586 8.01536 4.75586 8.04666C4.75586 8.07795 4.78123 8.10332 4.81253 8.10332Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.69925 8.24505C4.73054 8.24505 4.75591 8.21968 4.75591 8.18838C4.75591 8.15708 4.73054 8.13171 4.69925 8.13171C4.66795 8.13171 4.64258 8.15708 4.64258 8.18838C4.64258 8.21968 4.66795 8.24505 4.69925 8.24505Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.92593 8.24505C4.95723 8.24505 4.9826 8.21968 4.9826 8.18838C4.9826 8.15708 4.95723 8.13171 4.92593 8.13171C4.89463 8.13171 4.86926 8.15708 4.86926 8.18838C4.86926 8.21968 4.89463 8.24505 4.92593 8.24505Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.69925 7.96166C4.73054 7.96166 4.75591 7.93629 4.75591 7.90499C4.75591 7.8737 4.73054 7.84833 4.69925 7.84833C4.66795 7.84833 4.64258 7.8737 4.64258 7.90499C4.64258 7.93629 4.66795 7.96166 4.69925 7.96166Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.92593 7.96166C4.95723 7.96166 4.9826 7.93629 4.9826 7.90499C4.9826 7.8737 4.95723 7.84833 4.92593 7.84833C4.89463 7.84833 4.86926 7.8737 4.86926 7.90499C4.86926 7.93629 4.89463 7.96166 4.92593 7.96166Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M5.3793 8.8117C5.41059 8.8117 5.43597 8.78633 5.43597 8.75503C5.43597 8.72374 5.41059 8.69836 5.3793 8.69836C5.348 8.69836 5.32263 8.72374 5.32263 8.75503C5.32263 8.78633 5.348 8.8117 5.3793 8.8117Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M5.2659 8.95336C5.29719 8.95336 5.32256 8.92799 5.32256 8.89669C5.32256 8.8654 5.29719 8.84003 5.2659 8.84003C5.2346 8.84003 5.20923 8.8654 5.20923 8.89669C5.20923 8.92799 5.2346 8.95336 5.2659 8.95336Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M5.49258 8.95336C5.52388 8.95336 5.54925 8.92799 5.54925 8.89669C5.54925 8.8654 5.52388 8.84003 5.49258 8.84003C5.46128 8.84003 5.43591 8.8654 5.43591 8.89669C5.43591 8.92799 5.46128 8.95336 5.49258 8.95336Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M5.2659 8.66997C5.29719 8.66997 5.32256 8.6446 5.32256 8.61331C5.32256 8.58201 5.29719 8.55664 5.2659 8.55664C5.2346 8.55664 5.20923 8.58201 5.20923 8.61331C5.20923 8.6446 5.2346 8.66997 5.2659 8.66997Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M5.49258 8.66997C5.52388 8.66997 5.54925 8.6446 5.54925 8.61331C5.54925 8.58201 5.52388 8.55664 5.49258 8.55664C5.46128 8.55664 5.43591 8.58201 5.43591 8.61331C5.43591 8.6446 5.46128 8.66997 5.49258 8.66997Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.24588 8.8117C4.27717 8.8117 4.30254 8.78633 4.30254 8.75503C4.30254 8.72374 4.27717 8.69836 4.24588 8.69836C4.21458 8.69836 4.18921 8.72374 4.18921 8.75503C4.18921 8.78633 4.21458 8.8117 4.24588 8.8117Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.13259 8.95336C4.16389 8.95336 4.18926 8.92799 4.18926 8.89669C4.18926 8.8654 4.16389 8.84003 4.13259 8.84003C4.1013 8.84003 4.07593 8.8654 4.07593 8.89669C4.07593 8.92799 4.1013 8.95336 4.13259 8.95336Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.35928 8.95336C4.39058 8.95336 4.41595 8.92799 4.41595 8.89669C4.41595 8.8654 4.39058 8.84003 4.35928 8.84003C4.32798 8.84003 4.30261 8.8654 4.30261 8.89669C4.30261 8.92799 4.32798 8.95336 4.35928 8.95336Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.13259 8.66997C4.16389 8.66997 4.18926 8.6446 4.18926 8.61331C4.18926 8.58201 4.16389 8.55664 4.13259 8.55664C4.1013 8.55664 4.07593 8.58201 4.07593 8.61331C4.07593 8.6446 4.1013 8.66997 4.13259 8.66997Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.35928 8.66997C4.39058 8.66997 4.41595 8.6446 4.41595 8.61331C4.41595 8.58201 4.39058 8.55664 4.35928 8.55664C4.32798 8.55664 4.30261 8.58201 4.30261 8.61331C4.30261 8.6446 4.32798 8.66997 4.35928 8.66997Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.81253 9.52001C4.84382 9.52001 4.86919 9.49464 4.86919 9.46334C4.86919 9.43205 4.84382 9.40668 4.81253 9.40668C4.78123 9.40668 4.75586 9.43205 4.75586 9.46334C4.75586 9.49464 4.78123 9.52001 4.81253 9.52001Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.69925 9.66173C4.73054 9.66173 4.75591 9.63636 4.75591 9.60507C4.75591 9.57377 4.73054 9.5484 4.69925 9.5484C4.66795 9.5484 4.64258 9.57377 4.64258 9.60507C4.64258 9.63636 4.66795 9.66173 4.69925 9.66173Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.92593 9.66173C4.95723 9.66173 4.9826 9.63636 4.9826 9.60507C4.9826 9.57377 4.95723 9.5484 4.92593 9.5484C4.89463 9.5484 4.86926 9.57377 4.86926 9.60507C4.86926 9.63636 4.89463 9.66173 4.92593 9.66173Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.69925 9.37835C4.73054 9.37835 4.75591 9.35298 4.75591 9.32168C4.75591 9.29039 4.73054 9.26501 4.69925 9.26501C4.66795 9.26501 4.64258 9.29039 4.64258 9.32168C4.64258 9.35298 4.66795 9.37835 4.69925 9.37835Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.92593 9.37835C4.95723 9.37835 4.9826 9.35298 4.9826 9.32168C4.9826 9.29039 4.95723 9.26501 4.92593 9.26501C4.89463 9.26501 4.86926 9.29039 4.86926 9.32168C4.86926 9.35298 4.89463 9.37835 4.92593 9.37835Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M4.52917 7.36666H5.09584L5.03917 7.08333V6.79999H5.09584V6.65833H5.01084V6.74332H4.98251V6.65833H4.89751V6.74332H4.84084V6.65833H4.78417V6.74332H4.72751V6.65833H4.64251V6.74332H4.58584V6.65833H4.52917V6.79999H4.58584V7.08333L4.52917 7.36666Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M4.89758 7.3667H4.86925V7.25337C4.86925 7.22504 4.84091 7.1967 4.81258 7.1967C4.78424 7.1967 4.75591 7.22504 4.75591 7.25337V7.3667H4.72758V7.25337C4.72758 7.1967 4.75591 7.16837 4.81258 7.16837C4.86924 7.16837 4.89758 7.1967 4.89758 7.25337V7.3667ZM4.81258 7.05504H4.64258V6.91337C4.64258 6.8567 4.67091 6.82837 4.72758 6.82837C4.78425 6.82837 4.81258 6.8567 4.81258 6.91337V7.05504ZM4.67091 7.0267H4.78424V6.91337C4.78424 6.88504 4.75591 6.8567 4.72758 6.8567C4.69925 6.8567 4.67091 6.88504 4.67091 6.91337V7.0267ZM4.98258 7.05504H4.81258V6.91337C4.81258 6.8567 4.84091 6.82837 4.89758 6.82837C4.95424 6.82837 4.98258 6.8567 4.98258 6.91337V7.05504ZM4.84091 7.0267H4.95424V6.91337C4.95424 6.88504 4.92591 6.8567 4.89758 6.8567C4.86924 6.8567 4.84091 6.88504 4.84091 6.91337V7.0267Z",
                                fill: "#3E4347"
                            }), (0, a.jsx)("path", {
                                d: "M3.11243 7.36666H3.67909L3.62243 7.08333V6.79999H3.67909V6.65833H3.59409V6.74332H3.56576V6.65833H3.48076V6.74332H3.42409V6.65833H3.36743V6.74332H3.31076V6.65833H3.22576V6.74332H3.16909V6.65833H3.11243V6.79999H3.16909V7.08333L3.11243 7.36666Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M3.48095 7.3667H3.45262V7.25337C3.45262 7.22504 3.42429 7.1967 3.39595 7.1967C3.36762 7.1967 3.33929 7.22504 3.33929 7.25337V7.3667H3.31095V7.25337C3.31095 7.1967 3.33929 7.16837 3.39595 7.16837C3.45262 7.16837 3.48095 7.1967 3.48095 7.25337V7.3667M3.39595 7.05504H3.22595V6.91337C3.22595 6.8567 3.25429 6.82837 3.31095 6.82837C3.36762 6.82837 3.39595 6.8567 3.39595 6.91337V7.05504M3.25429 7.0267H3.36762V6.91337C3.36762 6.88504 3.33929 6.8567 3.31095 6.8567C3.28262 6.8567 3.25429 6.88504 3.25429 6.91337V7.0267",
                                fill: "#3E4347"
                            }), (0, a.jsx)("path", {
                                d: "M3.56587 7.05504H3.39587V6.91337C3.39587 6.8567 3.42421 6.82837 3.48087 6.82837C3.53754 6.82837 3.56587 6.8567 3.56587 6.91337V7.05504M3.42421 7.0267H3.53754V6.91337C3.53754 6.88504 3.50921 6.8567 3.48087 6.8567C3.45254 6.8567 3.42421 6.88504 3.42421 6.91337V7.0267",
                                fill: "#3E4347"
                            }), (0, a.jsx)("path", {
                                d: "M3.11243 9.03835H3.67909L3.62243 8.75502V8.47168H3.67909V8.33002H3.62243V8.41502H3.56576V8.33002H3.50909V8.41502H3.42409V8.33002H3.36743V8.41502H3.31076V8.33002H3.25409V8.41502H3.19743V8.33002H3.11243V8.47168H3.19743V8.75502L3.11243 9.03835Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M3.48095 9.03833H3.45262V8.925C3.45262 8.89667 3.42429 8.86833 3.39595 8.86833C3.36762 8.86833 3.33929 8.89667 3.33929 8.925V9.03833H3.31095V8.925C3.31095 8.86833 3.33929 8.84 3.39595 8.84C3.45262 8.84 3.48095 8.86833 3.48095 8.925V9.03833M3.39595 8.72667H3.22595V8.585C3.22595 8.52833 3.25429 8.5 3.31095 8.5C3.36762 8.5 3.39595 8.52833 3.39595 8.585V8.72667M3.25429 8.69833H3.36762V8.585C3.36762 8.55667 3.33929 8.52833 3.31095 8.52833C3.28262 8.52833 3.25429 8.55667 3.25429 8.585V8.69833M3.59429 8.72667H3.42429V8.585C3.42429 8.52833 3.45262 8.5 3.50929 8.5C3.56595 8.5 3.59429 8.52833 3.59429 8.585V8.72667M3.45262 8.69833H3.56595V8.585C3.56595 8.55667 3.53762 8.52833 3.50929 8.52833C3.48095 8.52833 3.45262 8.55667 3.45262 8.585V8.69833",
                                fill: "#3E4347"
                            }), (0, a.jsx)("path", {
                                d: "M5.9458 9.06666H6.51247L6.4558 8.78332V8.49999H6.51247V8.38666H6.42747V8.44332H6.39913V8.38666H6.31413V8.44332H6.25747V8.38666H6.2008V8.44332H6.14413V8.38666H6.05913V8.44332H6.00247V8.38666H5.9458V8.49999H6.00247V8.78332L5.9458 9.06666Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M6.3142 9.06672H6.28587V8.95338C6.28587 8.92505 6.25754 8.89672 6.2292 8.89672C6.20087 8.89672 6.17254 8.92505 6.17254 8.95338V9.06672H6.1442V8.95338C6.1442 8.89671 6.17254 8.86838 6.2292 8.86838C6.28587 8.86838 6.3142 8.89671 6.3142 8.95338V9.06672ZM6.2292 8.75505H6.0592V8.61338C6.0592 8.55672 6.08754 8.52838 6.1442 8.52838C6.20087 8.52838 6.2292 8.55672 6.2292 8.61338V8.75505ZM6.08754 8.72671H6.20087V8.61338C6.20087 8.58505 6.17254 8.55672 6.1442 8.55672C6.11587 8.55672 6.08754 8.58505 6.08754 8.61338V8.72671ZM6.3992 8.75505H6.2292V8.61338C6.2292 8.55672 6.25754 8.52838 6.3142 8.52838C6.37087 8.52838 6.3992 8.55672 6.3992 8.61338V8.75505ZM6.25754 8.72671H6.37087V8.61338C6.37087 8.58505 6.34254 8.55672 6.3142 8.55672C6.28587 8.55672 6.25754 8.58505 6.25754 8.61338V8.72671Z",
                                fill: "#3E4347"
                            }), (0, a.jsx)("path", {
                                d: "M5.9458 7.36666H6.51247L6.4558 7.08333V6.79999H6.51247V6.65833H6.42747V6.74332H6.39913V6.65833H6.31413V6.74332H6.25747V6.65833H6.2008V6.74332H6.14413V6.65833H6.05913V6.74332H6.00247V6.65833H5.9458V6.79999H6.00247V7.08333L5.9458 7.36666Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M6.3142 7.3667H6.28587V7.25337C6.28587 7.22504 6.25754 7.1967 6.2292 7.1967C6.20087 7.1967 6.17254 7.22504 6.17254 7.25337V7.3667H6.1442V7.25337C6.1442 7.1967 6.17254 7.16837 6.2292 7.16837C6.28587 7.16837 6.3142 7.1967 6.3142 7.25337V7.3667ZM6.2292 7.05504H6.0592V6.91337C6.0592 6.8567 6.08754 6.82837 6.1442 6.82837C6.20087 6.82837 6.2292 6.8567 6.2292 6.91337V7.05504ZM6.08754 7.0267H6.20087V6.91337C6.20087 6.88504 6.17254 6.8567 6.1442 6.8567C6.11587 6.8567 6.08754 6.88504 6.08754 6.91337V7.0267ZM6.3992 7.05504H6.2292V6.91337C6.2292 6.8567 6.25754 6.82837 6.3142 6.82837C6.37087 6.82837 6.3992 6.8567 6.3992 6.91337V7.05504ZM6.25754 7.0267H6.37087V6.91337C6.37087 6.88504 6.34254 6.8567 6.3142 6.8567C6.28587 6.8567 6.25754 6.88504 6.25754 6.91337V7.0267Z",
                                fill: "#3E4347"
                            }), (0, a.jsx)("path", {
                                d: "M4.01914 10.6534L4.41581 10.2284L4.16081 10.0867L3.96248 9.88837L4.01914 9.8317L3.93414 9.7467L3.87748 9.80337L3.93414 9.86004L3.90581 9.88837L3.84914 9.8317L3.79248 9.88837L3.84914 9.9167L3.79248 9.97337L3.76414 9.9167L3.70748 9.97337L3.76414 10.03L3.70748 10.0584L3.67914 10.0017L3.62248 10.0584L3.65081 10.115L3.62248 10.1434L3.59414 10.0867L3.53748 10.1434L3.62248 10.2284H3.65081L3.67914 10.2L3.87748 10.3984L4.01914 10.6534Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M4.27428 10.37L4.16095 10.3133C4.13261 10.285 4.10428 10.285 4.07595 10.3133C4.04761 10.3417 4.04761 10.37 4.07595 10.3983L4.16095 10.4833L4.13261 10.5117L4.04761 10.4267C4.01928 10.3983 4.01928 10.3417 4.04761 10.3133C4.07595 10.285 4.13261 10.285 4.16095 10.3133L4.27428 10.37ZM3.99095 10.2283L3.87761 10.3417L3.79261 10.2567C3.76428 10.2283 3.76428 10.1717 3.79261 10.1433C3.82095 10.115 3.87761 10.115 3.90595 10.1433L3.99095 10.2283ZM3.87761 10.3133L3.96261 10.2283L3.87761 10.1433C3.84928 10.115 3.82095 10.115 3.79261 10.1433C3.76428 10.1717 3.76428 10.2 3.79261 10.2283L3.87761 10.3133ZM4.13261 10.0867L4.01928 10.2L3.93428 10.115C3.90595 10.0867 3.90595 10.03 3.93428 10.0017C3.96261 9.97332 4.01928 9.97332 4.04761 10.0017L4.13261 10.0867ZM4.01928 10.1717L4.10428 10.0867L4.01928 10.0017C3.99095 9.97332 3.96261 9.97332 3.93428 10.0017C3.90595 10.03 3.90595 10.0583 3.93428 10.0867L4.01928 10.1717Z",
                                fill: "#3E4347"
                            }), (0, a.jsx)("path", {
                                d: "M5.6059 10.6534L5.20923 10.2284L5.4359 10.0867L5.63423 9.88837L5.6059 9.8317L5.6909 9.7467L5.74756 9.80337L5.6909 9.86004L5.71923 9.88837L5.7759 9.8317L5.83256 9.88837L5.7759 9.9167L5.83256 9.97337L5.8609 9.9167L5.91756 9.97337L5.8609 10.03L5.91756 10.0584L5.9459 10.0017L6.00256 10.0584L5.9459 10.115L6.00256 10.1434L6.0309 10.0867L6.08756 10.1434L6.00256 10.2284H5.97423L5.9459 10.2L5.74756 10.3984L5.6059 10.6534Z",
                                fill: "#FFE62E"
                            }), (0, a.jsx)("path", {
                                d: "M5.35095 10.37L5.46429 10.3133C5.49262 10.285 5.52095 10.285 5.54929 10.3133C5.57762 10.3417 5.57762 10.37 5.54929 10.3983L5.43595 10.4833L5.46429 10.5117L5.54929 10.4267C5.57762 10.3983 5.57762 10.3417 5.54929 10.3133C5.52095 10.285 5.46429 10.285 5.43595 10.3133L5.35095 10.37M5.71929 10.1433C5.74762 10.115 5.80429 10.115 5.83262 10.1433C5.86095 10.1717 5.86095 10.2283 5.83262 10.2567L5.74762 10.3417L5.63429 10.2283L5.71929 10.1433ZM5.80429 10.2283C5.83262 10.2 5.83262 10.1717 5.80429 10.1433C5.77595 10.115 5.74762 10.115 5.71929 10.1433L5.66262 10.2283L5.74762 10.3133L5.80429 10.2283ZM5.57762 10.0017C5.60595 9.97332 5.66262 9.97332 5.69095 10.0017C5.71929 10.03 5.71929 10.0867 5.69095 10.115L5.60595 10.2L5.49262 10.0867L5.57762 10.0017ZM5.69095 10.0867C5.71929 10.0583 5.71929 10.03 5.69095 10.0017C5.66262 9.97332 5.63429 9.97332 5.60595 10.0017L5.52095 10.0867L5.60595 10.1717L5.69095 10.0867Z",
                                fill: "#3E4347"
                            })]
                        })
                    },
                    rGlobe: function(e) {
                        var t = e.className,
                            i = e.width,
                            s = void 0 === i ? "18" : i,
                            n = e.height,
                            r = void 0 === n ? "17" : n;
                        return (0, a.jsxs)("svg", {
                            width: s,
                            height: r,
                            className: t,
                            viewBox: "0 0 17 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsxs)("g", {
                                clipPath: "url(#clip0_140_290)",
                                children: [(0, a.jsx)("mask", {
                                    id: "mask0_140_290",
                                    style: {
                                        maskType: "alpha"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "0",
                                    y: "0",
                                    width: "17",
                                    height: "17",
                                    children: (0, a.jsx)("path", {
                                        d: "M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z",
                                        fill: "white"
                                    })
                                }), (0, a.jsxs)("g", {
                                    mask: "url(#mask0_140_290)",
                                    children: [(0, a.jsx)("path", {
                                        d: "M0 5.54512L8.42695 4.9043L17 5.54512V11.4553L8.53652 12.5277L0 11.4553V5.54512Z",
                                        fill: "#0052B4"
                                    }), (0, a.jsx)("path", {
                                        d: "M0 0H17V5.54492H0V0Z",
                                        fill: "#EEEEEE"
                                    }), (0, a.jsx)("path", {
                                        d: "M0 11.4551H17V17H0V11.4551Z",
                                        fill: "#D80027"
                                    })]
                                })]
                            }), (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                    id: "clip0_140_290",
                                    children: (0, a.jsx)("rect", {
                                        width: "17",
                                        height: "17",
                                        fill: "white"
                                    })
                                })
                            })]
                        })
                    }
                },
                u = function(e) {
                    var t = e.name,
                        i = e.className,
                        r = (0, n.Z)(e, C);
                    if (!d[t]) throw new Error("Icon with name ".concat(t, " was not found!"));
                    var o = d[t],
                        u = l()("svg-icon svg-icon--".concat(t), (0, s.Z)({}, i, i));
                    return (0, a.jsx)(o, c(c({}, r), {}, {
                        className: u
                    }))
                }
        },
        1614: function(e, t, i) {
            i.d(t, {
                P: function() {
                    return r
                }
            });
            var s = i(7294),
                n = JSON.parse('{"qF":[{"@type":"Review","name":"You\'ll love it too!","reviewBody":"I\'ve purchased Instagram services from this service, amazing result! I finally have a lot of followers who do not unsubscribe quickly, they are not bots but genuine users with normal accounts. If you also want to promote your instagram page and get wider audience, I advise you to try, you\'ll love it too. Special thanks to the support staff.","datePublished":"2021-11-25T18:31:22+0000","author":{"@type":"Person","name":"Benjamin Berry"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Definitely the best site","reviewBody":"Great service I\'d recommend to everyone willing to make their insta account popular quickly and easily. There\'s no need to wait for a long time, it\'s awesome, \'cause I\'m very impatient \ud83d\ude42 I already have hundreds of subscribers, views and likes and definitely not gonna stop. By the way, it\'s not expensive at all, prices reasonable enough.","datePublished":"2021-11-23T18:31:22+0000","author":{"@type":"Person","name":"Jennifer Young"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Good company","reviewBody":"I figured out how to benefit as much as possible from the capability of this help and I see how it functions. Presently my devotees have expanded, I see that they show up on my page each day, which intrigues and motivates me. Participation with this organization permitted me to carry my page to an undeniable level. I will prescribe your support of my companions, this is a commendable proposition.","datePublished":"2021-11-22T18:31:22+0000","author":{"@type":"Person","name":"Jane Wilson"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"100 likes for $2.97!","reviewBody":"I just recently started an Instagram account. I have interesting content, but not enough reaction from my followers. So to get the likes faster, I bought 100 likes on this site for $2.97. Very effective. Now my account looks great!","datePublished":"2021-11-18T18:31:22+0000","author":{"@type":"Person","name":"Ella Hill"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}}],"Pb":[{"@type":"Review","name":"Absolutely amazing!","reviewBody":"I love Instagram, great platform to share photos, videos, etc., can\'t live a day without it \ud83d\ude42 I guess I\'m not the only one crazy about this social network. It wasn\'t easy to attract followers, so I decided to try this service. Thank you very much, twicsy.com, for the stunning result, number of my subscribers has increased significantly.","datePublished":"2021-11-17T14:35:46+0000","author":{"@type":"Person","name":"Matt V"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"An easy way","reviewBody":"This service is the best when you want to make your Instagram account more popular!\\nThe price is nice. You get followers and likes almost instantly. If something is wrong, the support will explain everything. They will fix it so you won\'t lose your money.\\nI managed to increase the number of subscribers from 5000 to 11000 in a day! A great result. And no need to waste time doing it yourself \ud83d\ude42","datePublished":"2021-11-16T14:35:46+0000","author":{"@type":"Person","name":"F S"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Good service!","reviewBody":"I used to think that on Instagram you could only gain subscribers with quality content that was frequently updated. But now, with the good help of this site, I am constantly building up my followers. I can also increase my views and likes here. And this is very important for my account because with its help I conduct an educational project that helps many people.","datePublished":"2021-11-15T14:35:46+0000","author":{"@type":"Person","name":"Sally Thomson"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Love this app!","reviewBody":"Love this app!","datePublished":"2021-01-10T18:31:22+0000","author":{"@type":"Person","name":"Ellie"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","author":{"@type":"Person","name":"andre"},"datePublished":"2021-01-08T04:12:00+0000","name":"better than all other we...","reviewBody":"better than all other websites and this one actually works!","reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Great service and like t...","reviewBody":"Great service and like that you\'re given a trial before paying!","datePublished":"2021-01-05T14:35:46+0000","author":{"@type":"Person","name":"Kay"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}}],"qV":[{"@type":"Review","name":"It actually works and al...","reviewBody":"It actually works and all of them were legit !!","datePublished":"2021-01-03T20:17:33+0000","author":{"@type":"Person","name":"Jason"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Really quick and easy","reviewBody":"Really quick and easy","datePublished":"2020-12-24T19:20:37+0000","author":{"@type":"Person","name":"Bailey"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Amazing, so helpful and ...","reviewBody":"Amazing, so helpful and has helped me improve my page and earn more followers with the positive engagement increase.","datePublished":"2020-12-24T08:58:38+0000","author":{"@type":"Person","name":"Matt Cromer"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}}]}');
            var r = function(e) {
                var t = (0, s.useMemo)((function() {
                        return {
                            followers: [{
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                name: "Twicsy Followers",
                                image: "",
                                url: "https://twicsy.com/buy-instagram-followers",
                                description: "The Twicsy Followers boost packages",
                                sku: "buy-instagram-followers",
                                mpn: "buy-instagram-followers",
                                brand: {
                                    "@type": "Brand",
                                    name: "Twicsy"
                                },
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: 5,
                                    reviewCount: n.qF.length,
                                    bestRating: 5,
                                    worstRating: 1
                                },
                                offers: {
                                    "@type": "Offer",
                                    url: "https://twicsy.com/buy-instagram-followers",
                                    priceCurrency: "USD",
                                    price: "2.97",
                                    priceValidUntil: "2024-12-01",
                                    availability: "http://schema.org/InStock",
                                    seller: {
                                        "@type": "Organization",
                                        name: "Twicsy"
                                    }
                                },
                                review: n.qF
                            }],
                            likes: [{
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                name: "Twicsy Likes",
                                image: "",
                                url: "https://twicsy.com/buy-instagram-likes",
                                description: "The Twicsy Likes boost packages",
                                sku: "buy-instagram-likes",
                                mpn: "buy-instagram-likes",
                                brand: {
                                    "@type": "Brand",
                                    name: "Twicsy"
                                },
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: 5,
                                    reviewCount: n.Pb.length,
                                    bestRating: 5,
                                    worstRating: 1
                                },
                                offers: {
                                    "@type": "Offer",
                                    url: "https://twicsy.com/buy-instagram-likes",
                                    priceCurrency: "USD",
                                    price: "2.97",
                                    priceValidUntil: "2024-12-01",
                                    availability: "http://schema.org/InStock",
                                    seller: {
                                        "@type": "Organization",
                                        name: "Twicsy"
                                    }
                                },
                                review: n.Pb
                            }],
                            views: [{
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                name: "Twicsy Views",
                                image: "",
                                url: "https://twicsy.com/buy-instagram-views",
                                description: "The Twicsy Views boost packages",
                                sku: "buy-instagram-views",
                                mpn: "buy-instagram-views",
                                brand: {
                                    "@type": "Brand",
                                    name: "Twicsy"
                                },
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: 5,
                                    reviewCount: n.qV.length,
                                    bestRating: 5,
                                    worstRating: 1
                                },
                                offers: {
                                    "@type": "Offer",
                                    url: "https://twicsy.com/buy-instagram-views",
                                    priceCurrency: "USD",
                                    price: "1.99",
                                    priceValidUntil: "2024-12-01",
                                    availability: "http://schema.org/InStock",
                                    seller: {
                                        "@type": "Organization",
                                        name: "Twicsy"
                                    }
                                },
                                review: n.qV
                            }]
                        }
                    }), []),
                    i = (0, s.useMemo)((function() {
                        return t[e]
                    }), [t, e]),
                    r = (0, s.useMemo)((function() {
                        return i[0].review
                    }), [i]),
                    l = function(e) {
                        var t, i = (0, s.useMemo)((function() {
                            return e.map((function(e) {
                                return e.reviewRating.ratingValue
                            }))
                        }), [e]);
                        return {
                            totalReviews: e.length,
                            average: parseFloat((t = i, t ? t.reduce((function(e, t) {
                                return e + t
                            }), 0) / t.length : null).toFixed(2))
                        }
                    }(r);
                return {
                    schema: i,
                    testimonials: r,
                    stats: l
                }
            }
        },
        6061: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return a
                }
            });
            var s = i(9501),
                n = i(7294),
                r = JSON.parse('{"z":[{"id":11,"group_id":3,"slug":"50-likes","name":"50 Likes","sub_name":"Likes","item":"LIKES","item_mode":null,"max_targets":2,"quantity":50,"price":1.99,"up_discount":0.52,"price_discounted":1.47,"up_quantity":25,"up_price":0.55,"active":true,"_link":"https://app.twicsy.com/order/start/50-likes"},{"id":1,"group_id":1,"slug":"100-followers","name":"100 Followers","sub_name":"Followers","item":"FOLLOWERS","item_mode":null,"max_targets":null,"quantity":100,"price":3.63,"up_discount":0.66,"price_discounted":2.97,"up_quantity":50,"up_price":1.11,"active":true,"_link":"https://app.twicsy.com/order/start/100-followers"},{"id":12,"group_id":3,"slug":"100-likes","name":"100 Likes","sub_name":"Likes","item":"LIKES","item_mode":null,"max_targets":5,"quantity":100,"price":3.98,"up_discount":1.01,"price_discounted":2.97,"up_quantity":50,"up_price":1.11,"active":true,"_link":"https://app.twicsy.com/order/start/100-likes"},{"id":19,"group_id":4,"slug":"50-premium-likes","name":"50 Premium Likes","sub_name":"Premium Likes","item":"LIKES","item_mode":"PREMIUM","max_targets":2,"quantity":50,"price":5.54,"up_discount":2.05,"price_discounted":3.49,"up_quantity":25,"up_price":1.31,"active":true,"_link":"https://app.twicsy.com/order/start/50-premium-likes"},{"id":2,"group_id":1,"slug":"250-followers","name":"250 Followers","sub_name":"Followers","item":"FOLLOWERS","item_mode":null,"max_targets":null,"quantity":250,"price":9.075,"up_discount":3.585,"price_discounted":5.49,"up_quantity":125,"up_price":2.06,"active":true,"_link":"https://app.twicsy.com/order/start/250-followers"},{"id":13,"group_id":3,"slug":"250-likes","name":"250 Likes","sub_name":"Likes","item":"LIKES","item_mode":null,"max_targets":5,"quantity":250,"price":9.951,"up_discount":4.461,"price_discounted":5.49,"up_quantity":125,"up_price":2.06,"active":true,"_link":"https://app.twicsy.com/order/start/250-likes"},{"id":20,"group_id":4,"slug":"100-premium-likes","name":"100 Premium Likes","sub_name":"Premium Likes","item":"LIKES","item_mode":"PREMIUM","max_targets":5,"quantity":100,"price":12.94,"up_discount":5.95,"price_discounted":6.99,"up_quantity":50,"up_price":2.62,"active":true,"_link":"https://app.twicsy.com/order/start/100-premium-likes"},{"id":3,"group_id":1,"slug":"500-followers","name":"500 Followers","sub_name":"Followers","item":"FOLLOWERS","item_mode":null,"max_targets":null,"quantity":500,"price":18.15,"up_discount":10.16,"price_discounted":7.99,"up_quantity":250,"up_price":3,"active":true,"_link":"https://app.twicsy.com/order/start/500-followers"},{"id":14,"group_id":3,"slug":"500-likes","name":"500 Likes","sub_name":"Likes","item":"LIKES","item_mode":null,"max_targets":10,"quantity":500,"price":19.902,"up_discount":11.912,"price_discounted":7.99,"up_quantity":250,"up_price":3,"active":true,"_link":"https://app.twicsy.com/order/start/500-likes"},{"id":7,"group_id":2,"slug":"500-premium-followers","name":"500 Active Followers","sub_name":"Active Followers","item":"FOLLOWERS","item_mode":"PREMIUM","max_targets":null,"quantity":500,"price":23.985,"up_discount":11.995,"price_discounted":11.99,"up_quantity":250,"up_price":4.5,"active":true,"_link":"https://app.twicsy.com/order/start/500-premium-followers"},{"id":21,"group_id":4,"slug":"250-premium-likes","name":"250 Premium Likes","sub_name":"Premium Likes","item":"LIKES","item_mode":"PREMIUM","max_targets":5,"quantity":250,"price":28.87,"up_discount":15.88,"price_discounted":12.99,"up_quantity":125,"up_price":4.87,"active":true,"_link":"https://app.twicsy.com/order/start/250-premium-likes"},{"id":4,"group_id":1,"slug":"1000-followers","name":"1000 Followers","sub_name":"Followers","item":"FOLLOWERS","item_mode":null,"max_targets":null,"quantity":1000,"price":36.3,"up_discount":23.21,"price_discounted":12.99,"up_quantity":500,"up_price":4.87,"active":true,"_link":"https://app.twicsy.com/order/start/1000-followers"},{"id":15,"group_id":3,"slug":"1000-likes","name":"1000 Likes","sub_name":"Likes","item":"LIKES","item_mode":null,"max_targets":10,"quantity":1000,"price":39.805,"up_discount":26.815,"price_discounted":12.99,"up_quantity":500,"up_price":4.87,"active":true,"_link":"https://app.twicsy.com/order/start/1000-likes"},{"id":22,"group_id":4,"slug":"500-premium-likes","name":"500 Premium Likes","sub_name":"Premium Likes","item":"LIKES","item_mode":"PREMIUM","max_targets":10,"quantity":500,"price":55.53,"up_discount":35.54,"price_discounted":19.99,"up_quantity":250,"up_price":7.5,"active":true,"_link":"https://app.twicsy.com/order/start/500-premium-likes"},{"id":8,"group_id":2,"slug":"1000-premium-followers","name":"1000 Active Followers","sub_name":"Active Followers","item":"FOLLOWERS","item_mode":"PREMIUM","max_targets":null,"quantity":1000,"price":47.97,"up_discount":27.98,"price_discounted":19.99,"up_quantity":500,"up_price":7.5,"active":true,"_link":"https://app.twicsy.com/order/start/1000-premium-followers"},{"id":16,"group_id":3,"slug":"2500-likes","name":"2500 Likes","sub_name":"Likes","item":"LIKES","item_mode":null,"max_targets":10,"quantity":2500,"price":99.512,"up_discount":70.522,"price_discounted":28.99,"up_quantity":1250,"up_price":10.87,"active":true,"_link":"https://app.twicsy.com/order/start/2500-likes"},{"id":5,"group_id":1,"slug":"2500-followers","name":"2500 Followers","sub_name":"Followers","item":"FOLLOWERS","item_mode":null,"max_targets":null,"quantity":2500,"price":90.75,"up_discount":61.76,"price_discounted":28.99,"up_quantity":1250,"up_price":10.87,"active":true,"_link":"https://app.twicsy.com/order/start/2500-followers"},{"id":9,"group_id":2,"slug":"2500-premium-followers","name":"2500 Active Followers","sub_name":"Active Followers","item":"FOLLOWERS","item_mode":"PREMIUM","max_targets":null,"quantity":2500,"price":119.925,"up_discount":72.935,"price_discounted":46.99,"up_quantity":1250,"up_price":17.62,"active":true,"_link":"https://app.twicsy.com/order/start/2500-premium-followers"},{"id":6,"group_id":1,"slug":"5000-followers","name":"5000 Followers","sub_name":"Followers","item":"FOLLOWERS","item_mode":null,"max_targets":null,"quantity":5000,"price":181.5,"up_discount":131.51,"price_discounted":49.99,"up_quantity":2500,"up_price":18.75,"active":true,"_link":"https://app.twicsy.com/order/start/5000-followers"},{"id":17,"group_id":3,"slug":"5000-likes","name":"5000 Likes","sub_name":"Likes","item":"LIKES","item_mode":null,"max_targets":10,"quantity":5000,"price":199.023,"up_discount":149.033,"price_discounted":49.99,"up_quantity":2500,"up_price":18.75,"active":true,"_link":"https://app.twicsy.com/order/start/5000-likes"},{"id":18,"group_id":3,"slug":"10000-likes","name":"10000 Likes","sub_name":"Likes","item":"LIKES","item_mode":null,"max_targets":10,"quantity":10000,"price":398.046,"up_discount":309.056,"price_discounted":88.99,"up_quantity":5000,"up_price":33.37,"active":true,"_link":"https://app.twicsy.com/order/start/10000-likes"},{"id":10,"group_id":2,"slug":"5000-premium-followers","name":"5000 Active Followers","sub_name":"Active Followers","item":"FOLLOWERS","item_mode":"PREMIUM","max_targets":null,"quantity":5000,"price":239.85,"up_discount":150.86,"price_discounted":88.99,"up_quantity":2500,"up_price":33.37,"active":true,"_link":"https://app.twicsy.com/order/start/5000-premium-followers"},{"id":27,"group_id":5,"slug":"500-views","name":"500 Views","sub_name":"Views","item":"VIEWS","item_mode":null,"max_targets":5,"quantity":500,"price":2.21,"up_discount":0.22,"price_discounted":1.99,"up_quantity":250,"up_price":0.75,"active":true,"_link":"https://app.twicsy.com/order/start/500-views"},{"id":28,"group_id":5,"slug":"2500-views","name":"2500 Views","sub_name":"Views","item":"VIEWS","item_mode":null,"max_targets":10,"quantity":2500,"price":9.08,"up_discount":2.09,"price_discounted":6.99,"up_quantity":1250,"up_price":2.62,"active":true,"_link":"https://app.twicsy.com/order/start/2500-views"},{"id":29,"group_id":5,"slug":"5000-views","name":"5000 Views","sub_name":"Views","item":"VIEWS","item_mode":null,"max_targets":10,"quantity":5000,"price":23.42,"up_discount":8.43,"price_discounted":14.99,"up_quantity":2500,"up_price":5.62,"active":true,"_link":"https://app.twicsy.com/order/start/5000-views"},{"id":30,"group_id":5,"slug":"10000-views","name":"10000 Views","sub_name":"Views","item":"VIEWS","item_mode":null,"max_targets":10,"quantity":10000,"price":49,"up_discount":24.01,"price_discounted":24.99,"up_quantity":5000,"up_price":9.37,"active":true,"_link":"https://app.twicsy.com/order/start/10000-views"},{"id":31,"group_id":5,"slug":"25000-views","name":"25000 Views","sub_name":"Views","item":"VIEWS","item_mode":null,"max_targets":10,"quantity":25000,"price":131.55,"up_discount":81.56,"price_discounted":49.99,"up_price":18.75,"up_quantity":12500,"active":true,"_link":"https://app.twicsy.com/order/start/25000-views"},{"id":32,"group_id":5,"slug":"50000-views","name":"50000 Views","sub_name":"Views","item":"VIEWS","item_mode":null,"max_targets":10,"quantity":50000,"price":299.96,"up_discount":224.97,"price_discounted":74.99,"up_quantity":25000,"up_price":28.12,"active":true,"_link":"https://app.twicsy.com/order/start/50000-views"}]}'),
                l = i(5893);

            function a(e) {
                var t = (0, n.useMemo)((function() {
                        return r.z.filter((function(e) {
                            return "LIKES" === e.item && "PREMIUM" !== e.item_mode
                        }))
                    }), []),
                    i = (0, n.useMemo)((function() {
                        return r.z.filter((function(e) {
                            return "LIKES" === e.item && "PREMIUM" === e.item_mode
                        }))
                    }), []),
                    a = (0, n.useMemo)((function() {
                        return r.z.filter((function(e) {
                            return "FOLLOWERS" === e.item && "PREMIUM" !== e.item_mode
                        }))
                    }), []),
                    C = (0, n.useMemo)((function() {
                        return r.z.filter((function(e) {
                            return "FOLLOWERS" === e.item && "PREMIUM" === e.item_mode
                        }))
                    }), []),
                    o = (0, n.useMemo)((function() {
                        return r.z.filter((function(e) {
                            return "VIEWS" === e.item
                        }))
                    }), []);
                return (0, n.useMemo)((function() {
                    return "LIKES" === e ? {
                        navigation: [{
                            id: "high-quality-likes",
                            type: "Regular",
                            sub_name: (0, l.jsx)(s.cC, {
                                id: "High Quality"
                            }),
                            label: (0, l.jsx)(s.cC, {
                                id: "High Quality Likes"
                            }),
                            altLabel: (0, l.jsx)(s.cC, {
                                id: "High Quality <0/> Likes",
                                components: {
                                    0: (0, l.jsx)("br", {})
                                }
                            }),
                            text: (0, l.jsx)(s.cC, {
                                id: "These are Likes with profile pictures but no further uploads on their account. Auto-refill is enabled within the warranty."
                            }),
                            features: [(0, l.jsx)(s.cC, {
                                id: "<0>REAL</0> likes from <1/><2>REAL</2> people",
                                components: {
                                    0: (0, l.jsx)("strong", {}),
                                    1: (0, l.jsx)("br", {}),
                                    2: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "Guaranteed <0/> <1>Instant Delivery</1>",
                                components: {
                                    0: (0, l.jsx)("br", {}),
                                    1: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "Option to <0>split likes</0> <1/> on multiple pictures",
                                components: {
                                    0: (0, l.jsx)("strong", {}),
                                    1: (0, l.jsx)("br", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "Includes video views"
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>No password</0> <1/> required",
                                components: {
                                    0: (0, l.jsx)("strong", {}),
                                    1: (0, l.jsx)("br", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "Fast Delivery <0/> <1>(gradual or instant)</1>",
                                components: {
                                    0: (0, l.jsx)("br", {}),
                                    1: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>24/7</0> support",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            })]
                        }, {
                            id: "premium-likes",
                            type: "Premium",
                            sub_name: (0, l.jsx)(s.cC, {
                                id: "Premium"
                            }),
                            label: (0, l.jsx)(s.cC, {
                                id: "Premium Likes"
                            }),
                            altLabel: (0, l.jsx)(s.cC, {
                                id: "Premium <0/> Likes",
                                components: {
                                    0: (0, l.jsx)("br", {})
                                }
                            }),
                            text: (0, l.jsx)(s.cC, {
                                id: "Twicsy is now the only website to offer active likes. That's right \u2014 100% real Instagram likes, from 100% real Instagram users! Likes from real people really interested in your content. NO Drops!"
                            }),
                            features: [(0, l.jsx)(s.cC, {
                                id: "<0>REAL</0> likes from <1/> <2>ACTIVE</2> people",
                                components: {
                                    0: (0, l.jsx)("strong", {}),
                                    1: (0, l.jsx)("br", {}),
                                    2: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0><1>Increased chance <2/> to reach explore page</1></0>",
                                components: {
                                    0: (0, l.jsx)("span", {}),
                                    1: (0, l.jsx)("strong", {}),
                                    2: (0, l.jsx)("br", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "Guaranteed <0/> <1>Instant Delivery</1>",
                                components: {
                                    0: (0, l.jsx)("br", {}),
                                    1: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "Option to <0>split likes</0> <1/> on multiple pictures",
                                components: {
                                    0: (0, l.jsx)("strong", {}),
                                    1: (0, l.jsx)("br", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "Includes video views"
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>No password</0> <1/> required",
                                components: {
                                    0: (0, l.jsx)("strong", {}),
                                    1: (0, l.jsx)("br", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "Fast Delivery <0/> <1>(gradual or instant)</1>",
                                components: {
                                    0: (0, l.jsx)("br", {}),
                                    1: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>24/7</0> support",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            })]
                        }],
                        plans: [{
                            id: "high-quality-likes",
                            data: t
                        }, {
                            id: "premium-likes",
                            data: i
                        }],
                        features: [{
                            icon: "check",
                            text: (0, l.jsx)(s.cC, {
                                id: "Guaranteed Instant Delivery"
                            })
                        }, {
                            icon: "people",
                            text: (0, l.jsx)(s.cC, {
                                id: "Real likes from real people"
                            })
                        }, {
                            icon: "split",
                            text: (0, l.jsx)(s.cC, {
                                id: "Option to split likes on multiple pictures"
                            })
                        }, {
                            icon: "lock",
                            text: (0, l.jsx)(s.cC, {
                                id: "No password required"
                            })
                        }, {
                            icon: "camera",
                            text: (0, l.jsx)(s.cC, {
                                id: "Includes video views"
                            })
                        }, {
                            icon: "lightning",
                            text: (0, l.jsx)(s.cC, {
                                id: "Fast delivery (gradual or instant)"
                            })
                        }, {
                            icon: "message",
                            text: (0, l.jsx)(s.cC, {
                                id: "24/7 Live Support"
                            })
                        }]
                    } : "FOLLOWERS" === e ? {
                        navigation: [{
                            id: "high-quality-followers",
                            type: "Regular",
                            sub_name: (0, l.jsx)(s.cC, {
                                id: "High Quality"
                            }),
                            label: (0, l.jsx)(s.cC, {
                                id: "High Quality Followers"
                            }),
                            altLabel: (0, l.jsx)(s.cC, {
                                id: "High Quality <0/> Followers",
                                components: {
                                    0: (0, l.jsx)("br", {})
                                }
                            }),
                            text: (0, l.jsx)(s.cC, {
                                id: "These are Followers with profile pictures but no further uploads on their account. Auto-refill is enabled within the warranty."
                            }),
                            features: [(0, l.jsx)(s.cC, {
                                id: "<0>High quality</0> followers",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>Fast</0> Delivery",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>No password</0> required",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>24/7</0> support",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            })]
                        }, {
                            id: "premium-followers",
                            type: "Active",
                            sub_name: (0, l.jsx)(s.cC, {
                                id: "Active"
                            }),
                            label: (0, l.jsx)(s.cC, {
                                id: "Active Followers"
                            }),
                            altLabel: (0, l.jsx)(s.cC, {
                                id: "Active <0/> Followers",
                                components: {
                                    0: (0, l.jsx)("br", {})
                                }
                            }),
                            text: (0, l.jsx)(s.cC, {
                                id: "New Active followers are for those who are serious about their instagram growth. These are guaranteed with very little to NO drop!"
                            }),
                            features: [(0, l.jsx)(s.cC, {
                                id: "<0>Real Active</0> followers",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>Guaranteed</0> Delivery",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>30 day</0> refills",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>No password</0> required",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            }), (0, l.jsx)(s.cC, {
                                id: "<0>24/7</0> support",
                                components: {
                                    0: (0, l.jsx)("strong", {})
                                }
                            })]
                        }],
                        plans: [{
                            id: "high-quality-followers",
                            data: a
                        }, {
                            id: "premium-followers",
                            data: C
                        }],
                        features: [{
                            icon: "check",
                            text: (0, l.jsx)(s.cC, {
                                id: "Guaranteed Instant Delivery"
                            })
                        }, {
                            icon: "people",
                            text: (0, l.jsx)(s.cC, {
                                id: "Real follows from real people"
                            })
                        }, {
                            icon: "lock",
                            text: (0, l.jsx)(s.cC, {
                                id: "No password required"
                            })
                        }, {
                            icon: "lightning",
                            text: (0, l.jsx)(s.cC, {
                                id: "Fast delivery (gradual or instant)"
                            })
                        }, {
                            icon: "message",
                            text: (0, l.jsx)(s.cC, {
                                id: "24/7 Live Support"
                            })
                        }]
                    } : "VIEWS" === e ? {
                        navigation: [{
                            id: "high-quality-views",
                            sub_name: (0, l.jsx)(s.cC, {
                                id: "High Quality"
                            }),
                            label: (0, l.jsx)(s.cC, {
                                id: "High Quality Views"
                            }),
                            altLabel: (0, l.jsx)(s.cC, {
                                id: "High Quality <0/> Views",
                                components: {
                                    0: (0, l.jsx)("br", {})
                                }
                            }),
                            text: (0, l.jsx)(s.cC, {
                                id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nisi facilisis, pellentesque dui non, interdum augue. Phasellus id leo."
                            })
                        }],
                        plans: [{
                            id: "high-quality-views",
                            data: o
                        }],
                        features: [{
                            icon: "check",
                            text: (0, l.jsx)(s.cC, {
                                id: "High Quality Views"
                            })
                        }, {
                            icon: "lightning",
                            text: (0, l.jsx)(s.cC, {
                                id: "Fast delivery (gradual or instant)"
                            })
                        }, {
                            icon: "clock",
                            text: (0, l.jsx)(s.cC, {
                                id: "Orders start in 60 seconds"
                            })
                        }, {
                            icon: "message",
                            text: (0, l.jsx)(s.cC, {
                                id: "24/7 Live Support"
                            })
                        }]
                    } : null
                }), [])
            }
        },
        6716: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return T
                }
            });
            var s = i(9499),
                n = i(9501),
                r = i(6077),
                l = i(9008),
                a = i(7294),
                C = i(4184),
                o = i.n(C),
                c = i(1163),
                d = i(1798),
                u = i(1664),
                h = i(5893),
                p = function() {
                    return (0, h.jsx)(u.default, {
                        href: "/",
                        children: (0, h.jsx)("a", {
                            className: "logo",
                            children: (0, h.jsxs)("svg", {
                                width: "135",
                                height: "28",
                                viewBox: "0 0 135 28",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, h.jsx)("path", {
                                    d: "M61.881 22.5855H65.6515V7.76684H70.5841V4.19171H57V7.76684H61.881V22.5855Z",
                                    fill: "black"
                                }), (0, h.jsx)("path", {
                                    d: "M81.5359 22.5855H85.0481L89.3093 9.63213H85.513L83.0854 17.9223L80.4512 9.63213H77.7396L75.1312 17.9223L72.6778 9.63213H68.9073L73.1943 22.5855H76.7066L79.1083 15.2021L81.5359 22.5855Z",
                                    fill: "black"
                                }), (0, h.jsx)("path", {
                                    d: "M94.6501 5.25389C94.6501 4.01036 93.6429 3 92.3775 3C91.1637 3 90.1307 4.01036 90.1307 5.25389C90.1307 6.49741 91.1637 7.50777 92.3775 7.50777C93.6429 7.50777 94.6501 6.49741 94.6501 5.25389ZM90.6214 22.5855H94.1594V9.63213H90.6214V22.5855Z",
                                    fill: "black"
                                }), (0, h.jsx)("path", {
                                    d: "M109.178 19.1399L106.105 17.4819C105.589 18.6736 104.478 19.5544 103.058 19.5544C101.198 19.5544 99.7779 18.1036 99.7779 16.1088C99.7779 14.114 101.198 12.6632 103.058 12.6632C104.478 12.6632 105.589 13.544 106.105 14.7358L109.178 13.0777C108.068 10.8497 105.744 9.34715 103.058 9.34715C99.2355 9.34715 96.214 12.1969 96.214 16.1088C96.214 20.0207 99.2355 22.8705 103.058 22.8705C105.744 22.8705 108.068 21.3679 109.178 19.1399Z",
                                    fill: "black"
                                }), (0, h.jsx)("path", {
                                    d: "M120.17 18.6477C120.17 16.3938 118.75 15.2539 116.425 14.6321L115.212 14.2694C114.127 13.9845 113.946 13.544 113.946 13.1554C113.946 12.5596 114.618 12.2746 115.237 12.2746C116.09 12.2746 116.839 12.6632 117.433 13.4145L119.757 11.5233C118.775 10.0984 117.252 9.34715 115.289 9.34715C112.552 9.34715 110.485 10.8756 110.434 13.2591C110.382 15.2539 111.622 16.7824 113.998 17.4041L114.953 17.6373C116.374 18.0259 116.684 18.3368 116.684 18.8808C116.684 19.5285 115.986 19.8135 115.263 19.8135C114.024 19.8135 112.939 19.2694 112.371 18.3109L109.943 20.3834C111.054 22.0674 112.991 22.8705 115.263 22.8705C118.026 22.8705 120.17 21.1606 120.17 18.6477Z",
                                    fill: "black"
                                }), (0, h.jsx)("path", {
                                    d: "M126.891 28L135 9.63213H131.1L127.666 18.0259L124.205 9.63213H120.331L125.755 21.8601L123.043 28H126.891Z",
                                    fill: "black"
                                }), (0, h.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M26.405 23.7737V14.2355L29.6376 16.1432C31.0902 17.0005 32.9628 16.5179 33.8202 15.0652C34.6775 13.6126 34.1948 11.74 32.7422 10.8827L24.9355 6.27546C24.0155 5.7325 22.8787 5.7097 21.9376 6.21534L13.3631 10.8225C11.8772 11.6209 11.3199 13.4727 12.1183 14.9585C12.9167 16.4444 14.7684 17.0017 16.2543 16.2034L20.7194 13.8042C20.7164 13.8578 20.7148 13.9118 20.7148 13.9662V23.5176C19.3787 24.6184 17.6984 25.2555 15.9322 25.2957C13.5345 25.3503 11.245 24.2988 9.72396 22.4445L1.76966 12.7477C-0.962498 9.41696 -0.477285 4.50205 2.85341 1.7699C6.1841 -0.962256 11.099 -0.477044 13.8312 2.85365L15.4667 4.84754L16.7471 3.13321C18.2922 1.06431 20.6673 -0.0189852 23.0655 0.000251815C25.3253 -0.00335165 27.5683 0.970196 29.1133 2.85365L30.7489 4.84754L32.0292 3.13321C34.6069 -0.318364 39.4947 -1.02673 42.9463 1.55103C46.3978 4.12879 47.1062 9.01653 44.5284 12.4681L37.2865 22.165C35.8514 24.0865 33.6121 25.2411 31.2144 25.2957C29.469 25.3354 27.781 24.7891 26.405 23.7737Z",
                                    fill: "#FF553C"
                                })]
                            })
                        })
                    })
                },
                L = i(4730),
                m = i(3966),
                w = i.n(m),
                g = function(e) {
                    return e.split("").map((function(e, t) {
                        return (0, h.jsx)("span", {
                            style: {
                                animationDelay: "".concat(25 * (t + 1), "ms")
                            },
                            className: o()("nav__char", {
                                "is-empty": " " === e
                            }),
                            children: e
                        }, t)
                    }))
                },
                x = (i(8633), ["children", "activeClassName"]);

            function f(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(i), !0).forEach((function(t) {
                        (0, s.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var j = function(e) {
                    var t = e.children,
                        i = e.activeClassName,
                        s = (0, L.Z)(e, x),
                        n = (0, c.useRouter)(),
                        r = n.asPath,
                        l = n.pathname,
                        C = a.Children.only(t),
                        o = C.props.className || "",
                        d = l === s.href || r === s.as ? "".concat(o, " ").concat(i).trim() : o;
                    return (0, h.jsx)(w(), v(v({}, s), {}, {
                        children: a.cloneElement(C, {
                            className: d || null
                        })
                    }))
                },
                y = ["href", "label", "children"];

            function V(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(i), !0).forEach((function(t) {
                        (0, s.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : V(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var M = function(e) {
                    var t = e.href,
                        i = e.label,
                        s = (e.children, (0, L.Z)(e, y)),
                        n = s.activeClassName ? j : w();
                    return (0, h.jsx)(n, H(H({
                        href: t
                    }, s), {}, {
                        children: (0, h.jsx)("a", {
                            className: "animated-link",
                            children: "string" === typeof i ? g(i) : "function" === typeof i && "Trans" === i.type.name ? g(i.props.id) : i
                        })
                    }))
                },
                b = function(e) {
                    var t = e.links,
                        i = (0, a.useRef)(null),
                        s = "is-active";
                    return (0, a.useEffect)((function() {
                        var e = i.current;
                        return e.querySelectorAll("a").forEach((function(t) {
                                t.addEventListener("mouseenter", (function() {
                                    var i = t.getBoundingClientRect(),
                                        s = e.getBoundingClientRect(),
                                        n = i.left - s.left;
                                    e.style.setProperty("--posX", n + "px"), e.style.setProperty("--width", i.width + "px"), e.style.setProperty("--opacity", ".5")
                                })), t.addEventListener("mouseleave", (function() {
                                    return e.style = null
                                }))
                            })),
                            function() {
                                e.querySelectorAll("a").forEach((function(e) {
                                    e.removeEventListener("mouseenter", null), e.removeEventListener("mouseleave", null)
                                }))
                            }
                    }), []), (0, h.jsx)("nav", {
                        className: "nav",
                        children: (0, h.jsxs)("ul", {
                            children: [(0, h.jsx)("li", {
                                className: o()("", {
                                    "hidden-xs": t[0].hideOnMobile
                                }),
                                children: (0, h.jsx)(M, {
                                    activeClassName: s,
                                    label: t[0].label,
                                    href: t[0].url
                                })
                            }), (0, h.jsx)("div", {
                                ref: i,
                                className: "nav__inner",
                                children: t.map((function(e, i) {
                                    return 0 === i || i === t.length - 1 ? null : (0, h.jsx)("li", {
                                        className: o()("", {
                                            "hidden-xs": t[0].hideOnMobile
                                        }),
                                        children: (0, h.jsx)(j, {
                                            href: e.url,
                                            activeClassName: s,
                                            children: (0, h.jsx)("a", {
                                                children: e.label
                                            })
                                        })
                                    }, i)
                                }))
                            }), (0, h.jsx)("li", {
                                className: o()("", {
                                    "hidden-xs": t[t.length - 1].hideOnMobile
                                }),
                                children: (0, h.jsx)(M, {
                                    activeClassName: s,
                                    label: t[t.length - 1].label,
                                    href: t[t.length - 1].url
                                })
                            })]
                        })
                    })
                },
                Z = function(e) {
                    var t = e.onClick;
                    return (0, h.jsxs)("button", {
                        type: "button",
                        className: "burger",
                        onClick: t,
                        children: [(0, h.jsx)("span", {}), (0, h.jsx)("span", {}), (0, h.jsx)("span", {})]
                    })
                },
                _ = (i(3062), i(1325)),
                k = function(e) {
                    var t = e.links,
                        i = (0, c.useRouter)(),
                        s = (0, a.useState)(!1),
                        r = s[0],
                        l = s[1];
                    return (0, a.useEffect)((function() {
                        ["mobile-nav-visible", "no-scroll"].map((function(e) {
                            return document.body.classList.toggle(e, r)
                        }))
                    }), [r]), (0, a.useEffect)((function() {
                        l(!1)
                    }), [i.asPath]), (0, h.jsx)("div", {
                        className: "header",
                        children: (0, h.jsx)(d.Z, {
                            children: (0, h.jsxs)("div", {
                                className: "header__inner",
                                children: [(0, h.jsxs)("div", {
                                    className: "header__bar",
                                    children: [(0, h.jsx)(p, {}), (0, h.jsx)(Z, {
                                        onClick: function() {
                                            return l(!r)
                                        }
                                    })]
                                }), (0, h.jsxs)("div", {
                                    className: "header__menu",
                                    children: [(0, h.jsx)(b, {
                                        links: t
                                    }), (0, h.jsx)("div", {
                                        className: "header__menu-footer",
                                        children: (0, h.jsxs)("ul", {
                                            children: [(0, h.jsx)("li", {
                                                children: (0, h.jsx)(_.Z, {
                                                    href: "/contact",
                                                    tertiary: !0,
                                                    small: !0,
                                                    rounded: !0,
                                                    children: (0, h.jsx)(n.cC, {
                                                        id: "Contact Us"
                                                    })
                                                })
                                            }), (0, h.jsx)("li", {
                                                children: (0, h.jsx)(_.Z, {
                                                    href: "/blog",
                                                    tertiary: !0,
                                                    small: !0,
                                                    rounded: !0,
                                                    transparent: !0,
                                                    children: (0, h.jsx)(n.cC, {
                                                        id: "Twicsy Blog"
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                E = i(4377),
                N = function(e) {
                    var t = e.payments;
                    return (0, h.jsx)("div", {
                        className: "payments",
                        children: (0, h.jsx)("ul", {
                            children: t.map((function(e, t) {
                                return (0, h.jsx)("li", {
                                    className: o()({
                                        "is-black": "applePay" === e,
                                        "is-amex": "americanExpress" === e
                                    }),
                                    children: (0, h.jsx)(E.Z, {
                                        name: e
                                    })
                                }, t)
                            }))
                        })
                    })
                },
                F = i(991),
                O = function() {
                    var e = [{
                        type: "FOLLOWERS",
                        buttonText: (0, h.jsx)(n.cC, {
                            id: "Buy Instagram Followers"
                        }),
                        buttonUrl: "/buy-instagram-followers"
                    }, {
                        type: "LIKES",
                        buttonText: (0, h.jsx)(n.cC, {
                            id: "Buy Instagram Likes"
                        }),
                        buttonUrl: "/buy-instagram-likes"
                    }, {
                        type: "VIEWS",
                        buttonText: (0, h.jsx)(n.cC, {
                            id: "Buy Instagram Views"
                        }),
                        buttonUrl: "/buy-instagram-views"
                    }];
                    return (0, h.jsx)("div", {
                        className: "list-offers text-center text-xsm",
                        children: (0, h.jsx)("ul", {
                            children: e.map((function(e, t) {
                                return (0, h.jsx)("li", {
                                    children: (0, h.jsx)(F.Z, {
                                        offer: e
                                    })
                                }, t)
                            }))
                        })
                    })
                },
                R = function(e) {
                    var t = e.onClick;
                    return (0, h.jsx)("button", {
                        type: "button",
                        className: "btn-circle",
                        onClick: t,
                        children: (0, h.jsx)("svg", {
                            width: "16",
                            height: "11",
                            viewBox: "0 0 16 11",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, h.jsx)("path", {
                                d: "M1.39062 9.50018L8.06079 2.65234L14.731 9.50018",
                                stroke: "currentColor",
                                strokeWidth: "2.5"
                            })
                        })
                    })
                },
                P = function(e) {
                    var t = e.className,
                        i = e.children,
                        s = (0, a.useContext)(I),
                        n = s.expanded,
                        r = s.setExpanded;
                    return (0, h.jsxs)("div", {
                        className: t,
                        onClick: function() {
                            r(!n)
                        },
                        children: [i, (0, h.jsx)("span", {
                            className: "icon-chevron"
                        })]
                    })
                },
                B = function(e) {
                    var t = e.className,
                        i = e.children,
                        s = e.isActive,
                        n = o()(t, {
                            active: s
                        });
                    return (0, h.jsx)("div", {
                        className: n,
                        children: i
                    })
                },
                I = (0, a.createContext)({
                    expanded: !1,
                    setExpanded: function() {}
                }),
                q = function(e) {
                    var t, i = e.items,
                        n = e.className,
                        r = (0, a.useState)(!1),
                        l = r[0],
                        C = r[1],
                        d = (0, c.useRouter)(),
                        u = d.pathname,
                        p = d.query,
                        L = d.locale,
                        m = null !== (t = (0, a.useMemo)((function() {
                            return i.find((function(e) {
                                return e.id === L
                            }))
                        }), [i, L])) && void 0 !== t ? t : i[0],
                        g = o()("dropdown", (0, s.Z)({
                            expanded: l
                        }, n, n)),
                        x = function() {
                            l && C(!1)
                        };
                    (0, a.useEffect)((function() {
                        return window.addEventListener("click", x),
                            function() {
                                return window.removeEventListener("click", x)
                            }
                    }));
                    return (0, h.jsx)(I.Provider, {
                        value: {
                            expanded: l,
                            setExpanded: C
                        },
                        children: (0, h.jsxs)("div", {
                            className: g,
                            children: [(0, h.jsxs)(P, {
                                className: "dropdown__button",
                                children: [(0, h.jsx)(E.Z, {
                                    name: "globe"
                                }), (0, h.jsx)("span", {
                                    className: "label",
                                    children: m.name
                                })]
                            }), (0, h.jsx)("div", {
                                className: "dropdown__list",
                                children: i.map((function(e) {
                                    return (0, h.jsx)(B, {
                                        isActive: L === e.id,
                                        className: "dropdown__item",
                                        children: (0, h.jsx)(w(), {
                                            href: {
                                                pathname: u,
                                                query: p
                                            },
                                            locale: e.id,
                                            children: (0, h.jsxs)("a", {
                                                children: [e.icon && (0, h.jsx)(E.Z, {
                                                    name: e.icon
                                                }), e.name]
                                            })
                                        })
                                    }, e.id)
                                }))
                            })]
                        })
                    })
                },
                D = JSON.parse('[{"id":"en","name":"English","icon":"enGlobe"},{"id":"ar","name":"Arabic","icon":"arGlobe"},{"id":"da","name":"Danish","icon":"daGlobe"},{"id":"uk","name":"Ukrainian","icon":"ukGlobe"},{"id":"id","name":"Indonesian","icon":"idGlobe"},{"id":"it","name":"Italian","icon":"itGlobe"},{"id":"ko","name":"Korean","icon":"koGlobe"},{"id":"no","name":"Norwegian","icon":"noGlobe"},{"id":"es","name":"Spanish","icon":"esGlobe"},{"id":"tl","name":"Tagalog","icon":"tlGlobe"},{"id":"tr","name":"Turkish","icon":"trGlobe"},{"id":"de","name":"Deutsch","icon":"deGlobe"},{"id":"fr","name":"Fran\xe7ais","icon":"frGlobe"},{"id":"nl","name":"Dutch","icon":"nlGlobe"},{"id":"ru","name":"Russian","icon":"rGlobe"},{"id":"pt","name":"Portugais","icon":"ptGlobe"}]'),
                S = function(e) {
                    var t = e.data,
                        i = t.navigation,
                        s = t.bottomNavigation,
                        n = t.copyright,
                        r = t.payments;
                    return (0, h.jsx)("div", {
                        className: "footer text-xsm",
                        children: (0, h.jsxs)(d.Z, {
                            children: [(0, h.jsxs)("div", {
                                className: "footer__body",
                                children: [(0, h.jsxs)("div", {
                                    className: "footer__cols",
                                    children: [(0, h.jsx)("div", {
                                        className: "footer__col footer__col-1",
                                        children: (0, h.jsx)(p, {})
                                    }), (0, h.jsx)("div", {
                                        className: "footer__col footer__col-2",
                                        children: (0, h.jsx)("nav", {
                                            className: "footer__nav",
                                            children: (0, h.jsx)("ul", {
                                                children: i.map((function(e, t) {
                                                    return (0, h.jsx)("li", {
                                                        children: (0, h.jsx)(M, {
                                                            href: e.url,
                                                            label: e.label,
                                                            activeClassName: "is-active"
                                                        })
                                                    }, t)
                                                }))
                                            })
                                        })
                                    }), (0, h.jsx)("div", {
                                        className: "footer__col footer__col-3",
                                        children: (0, h.jsx)(O, {})
                                    }), (0, h.jsxs)("div", {
                                        className: "footer__col footer__col-4",
                                        children: [D && (0, h.jsx)(q, {
                                            items: D,
                                            className: "footer__dropdown"
                                        }), (0, h.jsx)("div", {
                                            className: "footer__copyright",
                                            children: n
                                        })]
                                    })]
                                }), (0, h.jsx)(R, {
                                    onClick: function(e) {
                                        e.preventDefault(), window.scrollTo({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth"
                                        })
                                    }
                                })]
                            }), (0, h.jsxs)("div", {
                                className: "footer__bar",
                                children: [(0, h.jsx)("ul", {
                                    children: s.map((function(e, t) {
                                        return (0, h.jsx)("li", {
                                            children: (0, h.jsx)(M, {
                                                label: e.label,
                                                href: e.url
                                            })
                                        }, t)
                                    }))
                                }), (0, h.jsx)(N, {
                                    payments: r
                                })]
                            })]
                        })
                    })
                },
                T = function(e) {
                    var t = e.children,
                        i = e.className,
                        C = {
                            navigation: [{
                                label: (0, h.jsx)(n.cC, {
                                    id: "Home"
                                }),
                                url: "/",
                                hideOnMobile: !1
                            }, {
                                label: (0, h.jsx)(n.cC, {
                                    id: "Buy Instagram Likes"
                                }),
                                url: "/buy-instagram-likes",
                                hideOnMobile: !1
                            }, {
                                label: (0, h.jsx)(n.cC, {
                                    id: "Buy Instagram Followers"
                                }),
                                url: "/buy-instagram-followers",
                                hideOnMobile: !1
                            }, {
                                label: (0, h.jsx)(n.cC, {
                                    id: "Buy Instagram Views"
                                }),
                                url: "/buy-instagram-views",
                                hideOnMobile: !1
                            }, {
                                label: (0, h.jsx)(n.cC, {
                                    id: "Contact Us"
                                }),
                                url: "/contact",
                                hideOnMobile: !0
                            }],
                            footer: {
                                navigation: [{
                                    label: (0, h.jsx)(n.cC, {
                                        id: "Home"
                                    }),
                                    url: "/"
                                }, {
                                    label: (0, h.jsx)(n.cC, {
                                        id: "Contact"
                                    }),
                                    url: "/contact"
                                }, {
                                    label: (0, h.jsx)(n.cC, {
                                        id: "Blog"
                                    }),
                                    url: "/blog"
                                }, {
                                    label: (0, h.jsx)(n.cC, {
                                        id: "Reviews"
                                    }),
                                    url: "/reviews"
                                }],
                                bottomNavigation: [{
                                    label: (0, h.jsx)(n.cC, {
                                        id: "Terms of Service"
                                    }),
                                    url: "/terms"
                                }, {
                                    label: (0, h.jsx)(n.cC, {
                                        id: "Contact Us"
                                    }),
                                    url: "/contact"
                                }],
                                copyright: r.ag._("{0} Twicsy \u2014 All Rights Reserved", {
                                    0: (new Date).getFullYear()
                                }),
                                payments: ["symantec", "applePay", "visa", "mastercard", "americanExpress", "dc"]
                            }
                        };
                    return (0, h.jsxs)(a.Fragment, {
                        children: [(0, h.jsx)(l.default, {
                            children: (0, h.jsx)("link", {
                                rel: "icon",
                                href: "/favicon.ico"
                            })
                        }), (0, h.jsx)(k, {
                            links: C.navigation
                        }), (0, h.jsx)("div", {
                            className: o()("main", (0, s.Z)({}, "main--".concat(i), i)),
                            children: t
                        }), (0, h.jsx)(S, {
                            data: C.footer
                        })]
                    })
                }
        }
    }
]);