(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15], {
        8350: function(s, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return j
                }
            });
            var n = i(9499),
                t = i(4184),
                c = i.n(t),
                l = i(1798),
                a = i(5675),
                r = i(4377),
                o = i(1142),
                d = i(5893),
                _ = function() {
                    return (0, d.jsx)("div", {
                        className: "phone",
                        children: (0, d.jsxs)("div", {
                            className: "phone__inner",
                            children: [(0, d.jsxs)("div", {
                                className: "phone__display",
                                children: [(0, d.jsx)("div", {
                                    className: "phone__battery",
                                    children: (0, d.jsx)("img", {
                                        className: "phone__confetti-1",
                                        src: "/images/phone-battery.png"
                                    })
                                }), (0, d.jsxs)("div", {
                                    className: "phone__avatar",
                                    children: [(0, d.jsxs)("div", {
                                        className: "phone__confetti",
                                        children: [(0, d.jsx)("img", {
                                            className: "phone__confetti-1",
                                            src: "/images/confetti-img-1.svg"
                                        }), (0, d.jsx)("img", {
                                            className: "phone__confetti-2",
                                            src: "/images/confetti-img-2.svg"
                                        }), (0, d.jsx)("img", {
                                            className: "phone__confetti-3",
                                            src: "/images/confetti-img-3.svg"
                                        }), (0, d.jsx)("img", {
                                            className: "phone__confetti-4",
                                            src: "/images/confetti-img-4.svg"
                                        }), (0, d.jsx)("img", {
                                            className: "phone__confetti-5",
                                            src: "/images/confetti-img-5.svg"
                                        }), (0, d.jsx)("img", {
                                            className: "phone__confetti-6",
                                            src: "/images/confetti-img-6.svg"
                                        }), (0, d.jsx)("img", {
                                            className: "phone__confetti-7",
                                            src: "/images/confetti-img-7.svg"
                                        })]
                                    }), (0, d.jsx)("div", {
                                        className: "phone__avatar-image",
                                        children: (0, d.jsx)("figure", {
                                            children: (0, d.jsx)(a.default, {
                                                src: "/images/phone-avatar.png",
                                                layout: "fill"
                                            })
                                        })
                                    }), (0, d.jsxs)("ul", {
                                        className: "phone__avatar-messages",
                                        children: [(0, d.jsx)("li", {}), (0, d.jsx)("li", {})]
                                    })]
                                }), (0, d.jsx)("ul", {
                                    className: "phone__messages",
                                    children: [{
                                        icon: "/images/100-emoji.png",
                                        text: "Best IG Followers"
                                    }, {
                                        icon: "/images/cowboy-emoji.png",
                                        text: "Go viral with IG Views"
                                    }, {
                                        icon: "/images/100-emoji.png",
                                        text: "IG Likes in Seconds"
                                    }].map((function(s, e) {
                                        return (0, d.jsx)("li", {
                                            style: {
                                                transitionDelay: .4 * e + "s"
                                            },
                                            children: (0, d.jsxs)("div", {
                                                className: "phone__message",
                                                children: [(0, d.jsx)("figure", {
                                                    children: (0, d.jsx)(a.default, {
                                                        src: s.icon,
                                                        width: 24,
                                                        height: 24
                                                    })
                                                }), s.text]
                                            })
                                        }, e)
                                    }))
                                }), (0, d.jsx)("div", {
                                    className: "phone__heart phone__heart--left",
                                    children: (0, d.jsx)(r.Z, {
                                        name: "heart"
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "phone__heart phone__heart--right",
                                    children: (0, d.jsx)(r.Z, {
                                        name: "heart"
                                    })
                                })]
                            }), (0, d.jsx)(o.Z, {})]
                        })
                    })
                },
                u = i(5242),
                h = function(s) {
                    var e = s.children;
                    return (0, d.jsx)("div", {
                        className: "hero__text",
                        children: e
                    })
                },
                x = function(s) {
                    var e = s.children;
                    return (0, d.jsx)("div", {
                        className: "hero__actions",
                        children: e
                    })
                },
                v = i(5356),
                m = function(s) {
                    var e, i = s.reverse,
                        t = s.children,
                        a = s.modifier;
                    return (0, d.jsx)("div", {
                        className: c()("hero", (e = {}, (0, n.Z)(e, "hero--".concat(a), a), (0, n.Z)(e, "is-reverse", i), e)),
                        children: (0, d.jsx)(l.Z, {
                            children: (0, d.jsxs)("div", {
                                className: "hero__inner",
                                children: [(0, d.jsxs)("div", {
                                    className: "hero__aside",
                                    children: [(0, d.jsx)(u.Z, {
                                        children: (0, d.jsx)(_, {})
                                    }), "plans-alt" === a && (0, d.jsx)(v.Z, {
                                        className: "hidden-xs"
                                    })]
                                }), (0, d.jsx)("div", {
                                    className: "hero__content",
                                    children: t
                                })]
                            })
                        })
                    })
                };
            m.Text = h, m.Actions = x;
            var j = m
        },
        6193: function(s, e, i) {
            "use strict";
            var n = i(9499),
                t = i(4184),
                c = i.n(t),
                l = (i(7294), i(5893));
            e.Z = function(s) {
                var e, i = s.active,
                    t = s.onClick,
                    a = s.className,
                    r = s.children;
                return (0, l.jsxs)("button", {
                    type: "button",
                    className: c()("btn-more", (e = {}, (0, n.Z)(e, a, a), (0, n.Z)(e, "is-active", i), e)),
                    onClick: t,
                    children: [(0, l.jsx)("span", {}), r]
                })
            }
        },
        2298: function(s, e, i) {
            "use strict";
            var n = i(9499),
                t = i(4184),
                c = i.n(t),
                l = (i(7294), i(9255)),
                a = i(5893);
            e.Z = function(s) {
                var e, i = s.small,
                    t = s.image,
                    r = s.color,
                    o = s.medium,
                    d = s.children;
                return (0, a.jsxs)("div", {
                    className: c()("callout", (e = {}, (0, n.Z)(e, "callout--".concat(r), r), (0, n.Z)(e, "callout--small", i), (0, n.Z)(e, "callout--medium", o), e)),
                    children: [t && (0, a.jsx)("div", {
                        className: "callout__image",
                        children: (0, a.jsx)(l.Z, {
                            name: t,
                            color: r
                        })
                    }), (0, a.jsx)("div", {
                        className: "callout__content",
                        children: d
                    })]
                })
            }
        },
        9711: function(s, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return o
                }
            });
            i(7294);
            var n = i(9499),
                t = i(4184),
                c = i.n(t),
                l = i(9071),
                a = i(5893),
                r = function(s) {
                    var e = s.card,
                        i = e.image,
                        t = e.color,
                        r = e.title,
                        o = e.text;
                    return (0, a.jsxs)("div", {
                        className: c()("card text-xsm", (0, n.Z)({}, "card--".concat(t), t)),
                        children: [(0, a.jsx)("div", {
                            className: "card__image",
                            children: (0, a.jsx)(l.Z, {
                                name: i
                            })
                        }), (0, a.jsxs)("div", {
                            className: "card__inner",
                            children: [(0, a.jsx)("h5", {
                                children: r
                            }), (0, a.jsx)("p", {
                                children: o
                            })]
                        })]
                    })
                },
                o = function(s) {
                    var e = s.cards;
                    return (0, a.jsx)("div", {
                        className: "cards",
                        children: (0, a.jsx)("ul", {
                            children: e.map((function(s, e) {
                                return (0, a.jsx)("li", {
                                    children: (0, a.jsx)(r, {
                                        card: s
                                    })
                                }, e)
                            }))
                        })
                    })
                }
        },
        5121: function(s, e, i) {
            "use strict";
            var n = i(9499),
                t = (i(7294), i(5675)),
                c = i(4184),
                l = i.n(c),
                a = i(5893);
            e.Z = function(s) {
                var e = s.logos,
                    i = s.center,
                    c = s.className;
                return (0, a.jsx)("div", {
                    className: l()("list-logos", (0, n.Z)({
                        "list-logos--center": i
                    }, c, c)),
                    children: (0, a.jsx)("ul", {
                        children: e.map((function(s, e) {
                            return (0, a.jsx)("li", {
                                children: (0, a.jsx)("div", {
                                    className: "list__image",
                                    children: (0, a.jsx)(t.default, {
                                        src: s.src,
                                        alt: s.alt,
                                        width: s.width,
                                        height: s.height,
                                        layout: "intrinsic"
                                    })
                                })
                            }, e)
                        }))
                    })
                })
            }
        },
        7322: function(s, e, i) {
            "use strict";
            var n = i(9501),
                t = i(1307),
                c = i(5893);
            e.Z = function(s) {
                var e = s.price,
                    i = s.discount;
                return (0, c.jsxs)("div", {
                    className: "price",
                    children: [(0, c.jsxs)("div", {
                        className: "price__top",
                        children: [(0, c.jsxs)("strong", {
                            children: [(0, c.jsx)("sup", {
                                children: "$"
                            }), (0, t.Z)(e - i)]
                        }), (0, c.jsxs)("strike", {
                            children: ["$", (0, t.Z)(e)]
                        })]
                    }), (0, c.jsxs)("div", {
                        className: "price__bottom",
                        children: [(0, c.jsx)("i", {}), (0, c.jsx)(n.cC, {
                            id: "You Saved"
                        }), " ", (0, c.jsxs)("span", {
                            children: ["$", (0, t.Z)(i)]
                        })]
                    })]
                })
            }
        },
        1855: function(s, e, i) {
            "use strict";
            var n = i(9501),
                t = i(7294),
                c = i(4184),
                l = i.n(c),
                a = i(6193),
                r = i(4377),
                o = i(5893);
            e.Z = function(s) {
                var e = s.title,
                    i = s.children,
                    c = (0, t.useState)(!0),
                    d = c[0],
                    _ = c[1];
                return (0, o.jsxs)("div", {
                    className: l()("question", {
                        "is-expanded": d
                    }),
                    onClick: function() {
                        return _(!d)
                    },
                    children: [(0, o.jsx)(r.Z, {
                        name: "boxQuestion"
                    }), (0, o.jsxs)("div", {
                        className: "question__inner",
                        children: [(0, o.jsx)("h3", {
                            className: "question__title",
                            children: e
                        }), (0, o.jsx)("div", {
                            className: "question__entry",
                            children: i
                        }), (0, o.jsx)(a.Z, {
                            active: d,
                            className: "question__btn",
                            children: d ? (0, o.jsx)(n.cC, {
                                id: "Less"
                            }) : (0, o.jsx)(n.cC, {
                                id: "More"
                            })
                        })]
                    })]
                })
            }
        },
        3139: function(s, e, i) {
            "use strict";
            var n = i(7294),
                t = i(1142),
                c = i(5893);
            e.Z = function(s) {
                var e = s.children;
                return (0, c.jsxs)("div", {
                    className: "questions",
                    children: [(0, c.jsx)(t.Z, {
                        color: "cyan"
                    }), (0, c.jsx)("ul", {
                        children: n.Children.map(e, (function(s) {
                            return (0, c.jsx)("li", {
                                children: (0, n.cloneElement)(s)
                            })
                        }))
                    })]
                })
            }
        },
        5356: function(s, e, i) {
            "use strict";
            var n = i(9499),
                t = i(7294),
                c = i(4184),
                l = i.n(c),
                a = i(4377),
                r = i(9071),
                o = i(5893);
            e.Z = function(s) {
                var e = s.className,
                    i = (0, t.useMemo)((function() {
                        return [{
                            isActive: !0
                        }, {
                            isActive: !0
                        }, {
                            isActive: !0
                        }, {
                            isActive: !0
                        }, {
                            isActive: !0
                        }]
                    }), []);
                return (0, o.jsxs)("div", {
                    className: l()("reviews-trustpilot", (0, n.Z)({}, e, e)),
                    children: [(0, o.jsx)("div", {
                        className: "reviews__logo",
                        children: (0, o.jsx)(r.Z, {
                            name: "trustpilot"
                        })
                    }), (0, o.jsx)("ul", {
                        className: "reviews__stars",
                        children: i.map((function(s, e) {
                            return (0, o.jsx)("li", {
                                className: l()({
                                    "is-active": s.isActive
                                }),
                                children: (0, o.jsx)(a.Z, {
                                    name: "TrustpilotStar",
                                    color: "currentColor"
                                })
                            }, e)
                        }))
                    }), (0, o.jsx)("p", {
                        children: "TrustScore | 365 reviews"
                    })]
                })
            }
        },
        7368: function(s, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return y
                }
            });
            var n = i(9499),
                t = i(9501),
                c = i(6061),
                l = i(7294),
                a = i(4184),
                r = i.n(a),
                o = i(5325),
                d = i.n(o),
                _ = i(9698),
                u = i(3062),
                h = i(1307),
                x = i(5989),
                v = i(6743),
                m = i(1614),
                j = i(6845);
            var p = i(5893);

            function f(s, e) {
                var i = Object.keys(s);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(s);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function g(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(i), !0).forEach((function(e) {
                        (0, n.Z)(s, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach((function(e) {
                        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return s
            }
            var y = function(s) {
                    var e, i = s.type,
                        a = s.premiumDefault,
                        o = void 0 !== a && a,
                        h = s.showRating,
                        f = void 0 !== h && h,
                        y = s.withPlus,
                        P = void 0 !== y && y,
                        C = (0, c.Z)(i),
                        w = C.navigation,
                        Z = C.plans,
                        O = (0, l.useState)(Z[0].id),
                        L = O[0],
                        S = O[1],
                        E = (0, m.P)(i.toLowerCase()).stats;
                    (0, l.useEffect)((function() {
                        o && S(Z[Z.length - 1].id)
                    }), []);
                    var A = (0, l.useMemo)((function() {
                            return Z.find((function(s) {
                                return s.id === L
                            }))
                        }), [Z, L]),
                        M = (0, l.useState)({
                            packId: A.data[0].id,
                            index: 0
                        }),
                        F = M[0],
                        D = M[1],
                        B = (0, l.useMemo)((function() {
                            return A.data.find((function(s) {
                                return s.id === F.packId
                            }))
                        }), [Z, F.packId, L]),
                        q = A.data.length - 1,
                        T = function(s) {
                            D(g(g({}, F), {}, {
                                packId: A.data[s].id,
                                index: s
                            }))
                        };
                    (0, l.useEffect)((function() {
                        D(g(g({}, F), {}, {
                            packId: A.data[0].id,
                            index: 0
                        }))
                    }), [L, A]);
                    var I = (0, l.useState)(0),
                        R = I[0],
                        U = I[1];
                    (0, l.useEffect)((function() {
                        U(window.innerWidth);
                        var s = function() {
                            U(window.innerWidth)
                        };
                        return window.addEventListener("resize", s),
                            function() {
                                return window.removeEventListener("resize", s)
                            }
                    }), []);
                    var G = function() {
                            var s = (0, l.useState)(null),
                                e = s[0],
                                i = s[1],
                                n = (0, l.useState)(0),
                                t = n[0],
                                c = n[1],
                                a = (0, l.useState)(0),
                                r = a[0],
                                o = a[1];
                            return (0, l.useEffect)((function() {
                                c(window.scrollY), o(document.body.scrollHeight - window.innerHeight);
                                var s = function() {
                                    var s = window.scrollY,
                                        n = s > t ? "down" : "up";
                                    s <= 100 ? i(!1) : n !== e && (s - t > 10 || s - t < -10) && i(n), c(s > 0 ? s : 0)
                                };
                                return window.addEventListener("scroll", s),
                                    function() {
                                        window.removeEventListener("scroll", s)
                                    }
                            }), [t, e]), {
                                lastScrollY: t,
                                maxScroll: r,
                                scrollDirection: e
                            }
                        }(),
                        V = G.lastScrollY,
                        W = G.maxScroll,
                        Y = G.scrollDirection,
                        $ = 100 * (F.index + 1) / A.data.length,
                        Q = r()(d().stickyPlans, (e = {}, (0, n.Z)(e, d().stickyPlansSlideDown, Y && "down" === Y && V > 500 && V < W), (0, n.Z)(e, d().stickyPlansSlideUp, Y && "up" === Y || V <= 500 || V >= W), e));
                    return (0, p.jsx)(p.Fragment, {
                        children: R < 640 && (0, p.jsx)("div", {
                            className: Q,
                            children: (0, p.jsxs)(_.Z, {
                                className: d().stickyPlans__container,
                                children: [(0, p.jsx)(_.Z.Col, {
                                    className: d().stickyPlans__tabsCol,
                                    children: w.map((function(s) {
                                        return (0, p.jsx)(k, {
                                            title: s.label,
                                            onClick: function() {
                                                return S(s.id)
                                            },
                                            isActive: L === s.id
                                        }, s.id)
                                    }))
                                }), (0, p.jsx)(_.Z.Col, {
                                    className: d().stickyPlans__priceCol,
                                    children: (0, p.jsx)(b, {
                                        price_reg: null === B || void 0 === B ? void 0 : B.price,
                                        price_disc: null === B || void 0 === B ? void 0 : B.price_discounted
                                    })
                                }), (0, p.jsx)(x.Z, {
                                    children: (0, p.jsx)(v.Z, {
                                        timeout: 200,
                                        classNames: {
                                            enter: d().stickyPlans__transitionEnter,
                                            enterActive: d().stickyPlans__transitionEnterActive,
                                            exit: d().stickyPlans__transitionExit,
                                            exitActive: d().stickyPlans__transitionExitActive
                                        },
                                        children: (0, p.jsx)(_.Z.Col, {
                                            className: d().stickyPlans__toggleCol,
                                            children: (0, p.jsx)(N, {
                                                fill: $,
                                                quantity: null === B || void 0 === B ? void 0 : B.quantity,
                                                label: null === B || void 0 === B ? void 0 : B.item.toLowerCase(),
                                                onClickPrev: function() {
                                                    F.index - 1 >= 0 ? T(F.index - 1) : T(q)
                                                },
                                                onClickNext: function() {
                                                    F.index + 1 <= q ? T(F.index + 1) : T(0)
                                                },
                                                withPlus: P
                                            })
                                        })
                                    }, L)
                                }, "toggle"), (0, p.jsx)(_.Z.Col, {
                                    xs: !0,
                                    className: d().stickyPlans__buttonCol,
                                    children: (0, p.jsx)(u.Z, {
                                        href: null === B || void 0 === B ? void 0 : B._link,
                                        className: d().stickyPlans__button,
                                        children: (0, p.jsx)(t.cC, {
                                            id: "Buy now"
                                        })
                                    })
                                }), f && E && (0, p.jsx)(_.Z.Col, {
                                    className: d().stickyPlans__ratingCol,
                                    children: (0, p.jsxs)(j.Z, {
                                        rating: 5,
                                        children: [(0, p.jsxs)("span", {
                                            className: d().ratingValue,
                                            children: [E.average, " / 5"]
                                        }), (0, p.jsx)("span", {
                                            className: d().ratingCount,
                                            children: (0, p.jsx)(t.cC, {
                                                id: "Based on 100+ reviews"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                k = function(s) {
                    var e = s.title,
                        i = s.onClick,
                        t = s.isActive,
                        c = r()(d().stickyPlans__radio, (0, n.Z)({}, d().active, t));
                    return (0, p.jsxs)("div", {
                        onClick: i,
                        className: c,
                        children: [(0, p.jsx)("div", {
                            className: "".concat(d().stickyPlans__radioCheckbox),
                            children: (0, p.jsx)("span", {})
                        }), (0, p.jsx)("div", {
                            className: d().stickyPlans__radioTitle,
                            children: e
                        })]
                    })
                },
                b = function(s) {
                    var e = s.price_reg,
                        i = s.price_disc;
                    return (0, p.jsxs)("div", {
                        className: "".concat(d().stickyPlans__radioPrice, " mt-1 text-right"),
                        children: [(0, p.jsxs)("span", {
                            className: d().disc,
                            children: ["$", (0, h.Z)(i || e)]
                        }), i && (0, p.jsx)("span", {
                            className: d().reg,
                            children: (0, p.jsxs)("del", {
                                children: ["$", (0, h.Z)(e)]
                            })
                        })]
                    })
                },
                N = function(s) {
                    var e = s.quantity,
                        i = s.label,
                        t = s.onClickPrev,
                        c = s.onClickNext,
                        l = s.fill,
                        a = s.className,
                        o = s.withPlus,
                        _ = r()(d().stickyPlans__toggle, "flex-row-wrap items-center justify-between relative", (0, n.Z)({}, a, a));
                    return (0, p.jsxs)("div", {
                        className: _,
                        style: {
                            "--background-fill": "".concat(l, "%")
                        },
                        children: [(0, p.jsx)("div", {
                            className: d().stickyPlans__toggleSwitch,
                            onClick: t,
                            children: (0, p.jsx)("span", {
                                children: "\u2013"
                            })
                        }), (0, p.jsxs)("div", {
                            className: d().stickyPlans__togglePlan,
                            children: [(0, p.jsxs)("div", {
                                className: d().quantity,
                                children: [o && "+", e]
                            }), (0, p.jsx)("div", {
                                className: d().label,
                                children: i
                            })]
                        }), (0, p.jsx)("div", {
                            className: d().stickyPlans__toggleSwitch,
                            onClick: c,
                            children: (0, p.jsx)("span", {
                                children: "+"
                            })
                        })]
                    })
                }
        },
        1142: function(s, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return o
                }
            });
            i(7294);
            var n = i(5893),
                t = function() {
                    return (0, n.jsx)("div", {
                        className: "blob blob--left",
                        children: (0, n.jsxs)("svg", {
                            width: "274",
                            height: "238",
                            viewBox: "0 0 274 238",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, n.jsx)("path", {
                                className: "blob__body",
                                d: "M143.663 232.92C121.673 233.098 100.832 223.313 87.1516 206.389L18.114 120.983C-6.45971 90.5833 -1.31022 46.3171 29.6158 22.1119C60.5418 -2.09334 105.533 2.92843 130.107 33.3283L142.312 48.4274L234.899 160.655L199.78 205.48C186.349 222.623 165.654 232.743 143.663 232.92Z",
                                fill: "#FFB6AB"
                            }), (0, n.jsx)("path", {
                                className: "blob__face",
                                d: "M41.3622 63.1121C50.1713 68.102 58.0068 60.72 56.272 52.8938M63.4911 47.3046C72.3002 52.2945 80.1356 44.9125 78.4008 37.0863M37.5951 78.3983C65.9042 85.4868 95.6536 65.5285 93.7198 39.3447",
                                stroke: "#FF553C",
                                strokeWidth: "4.92264",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    })
                },
                c = function() {
                    return (0, n.jsx)("div", {
                        className: "blob blob--middle",
                        children: (0, n.jsxs)("svg", {
                            width: "349",
                            height: "340",
                            viewBox: "0 0 349 340",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, n.jsx)("path", {
                                className: "blob__body",
                                d: "M105.043 246.657C87.2405 232.715 77.1338 229.278 76.529 207.517L73.7357 104.671C72.6492 65.5833 104.002 34.8709 143.764 36.0731C183.526 37.2753 216.64 69.9369 217.726 109.025L218.007 121.47L222.873 249.546L166.265 240.452C144.921 245.024 122.846 260.599 105.043 246.657Z",
                                fill: "#FFB6AB"
                            }), (0, n.jsx)("path", {
                                className: "blob__face",
                                d: "M125.413 62.6623C128.746 69.987 137.234 68.9011 139.775 63.0579M147.029 62.8369C150.362 70.1616 158.85 69.0758 161.391 63.2326M111.251 68.8341C126.143 86.6195 165.657 85.5081 176.648 67.7673",
                                stroke: "#FF553C",
                                strokeWidth: "3.91287",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    })
                },
                l = function() {
                    return (0, n.jsx)("div", {
                        className: "blob blob--right",
                        children: (0, n.jsxs)("svg", {
                            width: "267",
                            height: "234",
                            viewBox: "0 0 267 234",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, n.jsx)("path", {
                                className: "blob__body",
                                d: "M133.391 229.998C154.784 228.858 174.464 217.94 186.755 200.392L248.779 111.841C270.856 80.3216 263.202 36.8729 231.682 14.7958C200.163 -7.28138 156.714 0.373153 134.637 31.8927L123.671 47.5478L40.3528 164.021L77.1828 206.229C91.2684 222.372 111.997 231.137 133.391 229.998Z",
                                fill: "#FFB6AB"
                            }), (0, n.jsx)("path", {
                                className: "blob__face",
                                d: "M193.676 33.154C191.962 43.1321 201.56 48.0065 208.337 43.7251M216.04 48.6263C214.326 58.6044 223.925 63.4787 230.702 59.1974M179.498 44.6049C182.41 73.6423 202.78 82.5942 226.764 71.9121",
                                stroke: "#FF553C",
                                strokeWidth: "4.92264",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    })
                },
                a = function() {
                    return (0, n.jsx)("div", {
                        className: "blobs__arrow",
                        children: (0, n.jsxs)("svg", {
                            width: "201",
                            height: "223",
                            viewBox: "0 0 201 223",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M115.745 4.20756C107.382 -0.390078 97.2256 -0.284367 88.9609 4.48632L13.6544 47.9557C0.604693 55.4885 -3.86772 72.1739 3.66503 85.2236C11.1978 98.2734 27.8832 102.746 40.9329 95.213L76.8 74.5093L76.8 206.435C76.8 215.197 88.2784 222.3 102.438 222.3C116.597 222.3 128.075 215.197 128.075 206.435L128.075 73.2558L160.413 91.0352C173.617 98.2947 190.205 93.476 197.465 80.2723C204.724 67.0686 199.906 50.4799 186.702 43.2204L115.745 4.20756Z",
                                fill: "url(#paint0_linear_36_932)"
                            }), (0, n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M115.745 4.20756C107.382 -0.390078 97.2256 -0.284367 88.9609 4.48632L13.6544 47.9557C0.604693 55.4885 -3.86772 72.1739 3.66503 85.2236C11.1978 98.2734 27.8832 102.746 40.9329 95.213L76.8 74.5093L76.8 206.435C76.8 215.197 88.2784 222.3 102.438 222.3C116.597 222.3 128.075 215.197 128.075 206.435L128.075 73.2558L160.413 91.0352C173.617 98.2947 190.205 93.476 197.465 80.2723C204.724 67.0686 199.906 50.4799 186.702 43.2204L115.745 4.20756Z",
                                fill: "white"
                            }), (0, n.jsx)("defs", {
                                children: (0, n.jsxs)("linearGradient", {
                                    id: "paint0_linear_36_932",
                                    x1: "188.471",
                                    y1: "270.615",
                                    x2: "-2.11774",
                                    y2: "132.631",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, n.jsx)("stop", {
                                        stopColor: "white"
                                    }), (0, n.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#FFE8F6"
                                    })]
                                })
                            })]
                        })
                    })
                },
                r = function(s) {
                    var e = s.color;
                    return (0, n.jsx)("div", {
                        className: "blobs blobs--".concat(e),
                        children: (0, n.jsxs)("div", {
                            className: "blobs__holder",
                            children: [(0, n.jsx)(t, {}), (0, n.jsx)(c, {}), (0, n.jsx)(l, {}), (0, n.jsx)(a, {})]
                        })
                    })
                };
            r.defaultProps = {
                color: "red"
            };
            var o = r
        },
        835: function(s, e, i) {
            "use strict";
            var n = i(9499),
                t = i(3935),
                c = i(4184),
                l = i.n(c),
                a = i(7294),
                r = i(3538),
                o = i(4377),
                d = i(5893);

            function _(s, e) {
                var i = Object.keys(s);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(s);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function u(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(i), !0).forEach((function(e) {
                        (0, n.Z)(s, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : _(Object(i)).forEach((function(e) {
                        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return s
            }
            var h = function(s) {
                var e = s.tooltipText,
                    i = void 0 === e ? "" : e,
                    n = s.trigger,
                    c = s.children,
                    _ = s.placement,
                    h = (0, a.useState)(!1),
                    x = h[0],
                    v = h[1],
                    m = (0, r.O)({
                        trigger: n,
                        placement: _,
                        offset: [0, 3],
                        closeOnOutsideClick: !0,
                        visible: x,
                        onVisibleChange: v
                    }),
                    j = m.getTooltipProps,
                    p = m.setTooltipRef,
                    f = m.setTriggerRef,
                    g = m.visible;
                return (0, d.jsxs)("div", {
                    className: l()("tooltip", {
                        "is-visible": g
                    }),
                    children: [i ? (0, d.jsx)("a", {
                        ref: f,
                        children: i
                    }) : (0, d.jsx)("button", {
                        className: "tooltip__btn",
                        type: "button",
                        ref: f,
                        children: (0, d.jsx)(o.Z, {
                            name: "question",
                            color: "currentColor"
                        })
                    }), g && (0, t.createPortal)((0, d.jsx)("div", u(u({
                        ref: p
                    }, j({
                        className: l()("tooltip-container", {
                            "is-visible": g
                        })
                    })), {}, {
                        children: (0, d.jsx)("div", {
                            className: "tooltip-container__inner",
                            children: c
                        })
                    })), document.body)]
                })
            };
            h.defaultProps = {
                placement: "auto",
                trigger: "click"
            }, e.Z = h
        },
        1307: function(s, e) {
            "use strict";
            e.Z = function(s) {
                return s && !Number.isNaN(s) ? Number(s).toFixed(2) : null
            }
        },
        5325: function(s) {
            s.exports = {
                stickyPlans: "sticky-plans_stickyPlans__tuTyo",
                stickyPlans__container: "sticky-plans_stickyPlans__container__6iAa1",
                stickyPlans__tabsCol: "sticky-plans_stickyPlans__tabsCol__YIEe7",
                stickyPlans__priceCol: "sticky-plans_stickyPlans__priceCol__8w6QU",
                stickyPlans__toggleCol: "sticky-plans_stickyPlans__toggleCol__jNdkL",
                stickyPlans__buttonCol: "sticky-plans_stickyPlans__buttonCol__uMh09",
                stickyPlans__ratingCol: "sticky-plans_stickyPlans__ratingCol__1QXks",
                ratingValue: "sticky-plans_ratingValue__vrDgE",
                ratingCount: "sticky-plans_ratingCount__JDlre",
                stickyPlans__radio: "sticky-plans_stickyPlans__radio__di_6d",
                active: "sticky-plans_active__RPoTo",
                stickyPlans__radioCheckbox: "sticky-plans_stickyPlans__radioCheckbox__A2hS3",
                stickyPlans__radioTitle: "sticky-plans_stickyPlans__radioTitle__coOwG",
                stickyPlans__radioPrice: "sticky-plans_stickyPlans__radioPrice__09B_0",
                disc: "sticky-plans_disc__Vy1Zi",
                reg: "sticky-plans_reg__ouIx0",
                stickyPlans__toggle: "sticky-plans_stickyPlans__toggle__HP0oe",
                stickyPlans__toggleSwitch: "sticky-plans_stickyPlans__toggleSwitch___XAV4",
                stickyPlans__togglePlan: "sticky-plans_stickyPlans__togglePlan__oSQfW",
                quantity: "sticky-plans_quantity__4frAs",
                label: "sticky-plans_label__9UrNS",
                stickyPlans__button: "sticky-plans_stickyPlans__button__OnB_S",
                stickyPlans__transitionEnter: "sticky-plans_stickyPlans__transitionEnter__psOUC",
                stickyPlans__transitionEnterActive: "sticky-plans_stickyPlans__transitionEnterActive__jKgSS",
                stickyPlans__transitionExit: "sticky-plans_stickyPlans__transitionExit__oG7nc",
                stickyPlans__transitionExitActive: "sticky-plans_stickyPlans__transitionExitActive__ImfTY",
                stickyPlansSlideUp: "sticky-plans_stickyPlansSlideUp__5Asas",
                stickyPlansSlideDown: "sticky-plans_stickyPlansSlideDown__WJz3u"
            }
        }
    }
]);