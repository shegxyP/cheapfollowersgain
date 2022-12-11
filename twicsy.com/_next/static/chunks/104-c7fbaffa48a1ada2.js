"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [104], {
        953: function(e, t, r) {
            var n = r(9499),
                i = r(29),
                a = r(7794),
                s = r.n(a),
                o = r(9501),
                l = r(6077),
                c = r(4184),
                u = r.n(c),
                d = r(7294),
                p = r(7536),
                m = r(7533),
                h = r(4231),
                g = r(9698),
                f = r(6318),
                y = r(3062),
                v = r(3321),
                b = r(4377),
                w = r(5893);

            function j(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.Z = function(e) {
                var t = e.closeFn,
                    r = (0, d.useState)({
                        loading: !1,
                        success: !1,
                        message: null,
                        error: !1,
                        errors: null
                    }),
                    n = r[0],
                    a = r[1],
                    c = h.Ry({
                        email: h.Z_().email("Invalid email").required("Please enter your email"),
                        review: h.Z_().required("Please enter your name"),
                        rating: h.Rx().min(1).max(5).required()
                    }).required(),
                    j = (0, p.cI)({
                        mode: "onSubmit",
                        reValidateMode: "onChange",
                        resolver: (0, m.X)(c),
                        defaultValues: {
                            name: "",
                            email: "",
                            review: "",
                            rating: 5
                        }
                    }),
                    O = function() {
                        var e = (0, i.Z)(s().mark((function e(t) {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a({
                                            loading: !0,
                                            success: !1,
                                            error: !1,
                                            message: null,
                                            errors: null
                                        }), setTimeout((function() {
                                            a(x(x({}, n), {}, {
                                                loading: !1,
                                                success: !0
                                            }))
                                        }), 5e3), j.reset();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, w.jsx)(p.RV, x(x({}, j), {}, {
                    children: (0, w.jsxs)("form", {
                        className: u()("form form--reviews", {
                            "is-loading": n.loading
                        }),
                        onSubmit: j.handleSubmit(O),
                        children: [(0, w.jsx)("button", {
                            className: "form__close-btn",
                            onClick: function(e) {
                                return t(e)
                            },
                            children: (0, w.jsx)(b.Z, {
                                name: "close"
                            })
                        }), n.loading && (0, w.jsx)(v.Z, {}), (0, w.jsxs)("div", {
                            className: "form__inner",
                            children: [n.error && (0, w.jsx)("p", {
                                className: "form__status error",
                                children: (0, w.jsx)(o.cC, {
                                    id: "Something went wrong. Please try again."
                                })
                            }), n.success && (0, w.jsx)("p", {
                                className: "form__status success",
                                children: (0, w.jsx)(o.cC, {
                                    id: "Thank you! Your review has been delivered."
                                })
                            }), (0, w.jsxs)(g.Z, {
                                options: [{
                                    size: "lg",
                                    cols: 2
                                }, {
                                    size: "md",
                                    cols: 2
                                }, {
                                    size: "sm",
                                    cols: 2
                                }, {
                                    size: "xs",
                                    cols: 1
                                }],
                                children: [(0, w.jsxs)(g.Z.Col, {
                                    children: [(0, w.jsx)(f.Z, {
                                        id: "name",
                                        name: "name",
                                        label: (0, w.jsx)(o.cC, {
                                            id: "Your name"
                                        }),
                                        placeholder: l.ag._("Your name")
                                    }), (0, w.jsx)(f.Z, {
                                        id: "email",
                                        name: "email",
                                        label: (0, w.jsx)(o.cC, {
                                            id: "Your e-mail"
                                        }),
                                        placeholder: "example@example.com"
                                    }), (0, w.jsx)(f.Z, {
                                        vertical: !0,
                                        type: "stars",
                                        id: "rating",
                                        name: "rating",
                                        label: (0, w.jsx)(o.cC, {
                                            id: "Rating"
                                        })
                                    })]
                                }), (0, w.jsxs)(g.Z.Col, {
                                    children: [(0, w.jsx)(f.Z, {
                                        type: "textarea",
                                        id: "message",
                                        name: "review",
                                        label: (0, w.jsx)(o.cC, {
                                            id: "Review"
                                        }),
                                        placeholder: l.ag._("Your Review")
                                    }), (0, w.jsx)("div", {
                                        className: "form__actions",
                                        children: (0, w.jsx)(y.Z, {
                                            block: !0,
                                            type: "submit",
                                            children: (0, w.jsx)(o.cC, {
                                                id: "Submit Review"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }))
            }
        },
        947: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return c
                }
            });
            var n = r(7294),
                i = JSON.parse('{"l7":[{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5","worstRating":"3"},"author":{"@type":"Person","name":"Joshua Perry"}}],"Pb":[{"@type":"Review","name":"Absolutely amazing!","reviewBody":"I love Instagram, great platform to share photos, videos, etc., can\'t live a day without it \ud83d\ude42 I guess I\'m not the only one crazy about this social network. It wasn\'t easy to attract followers, so I decided to try this service. Thank you very much, twicsy.com, for the stunning result, number of my subscribers has increased significantly.","datePublished":"2021-11-17T14:35:46+0000","author":{"@type":"Person","name":"Matt V"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"An easy way","reviewBody":"This service is the best when you want to make your Instagram account more popular!\\nThe price is nice. You get followers and likes almost instantly. If something is wrong, the support will explain everything. They will fix it so you won\'t lose your money.\\nI managed to increase the number of subscribers from 5000 to 11000 in a day! A great result. And no need to waste time doing it yourself \ud83d\ude42","datePublished":"2021-11-16T14:35:46+0000","author":{"@type":"Person","name":"F S"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Good service!","reviewBody":"I used to think that on Instagram you could only gain subscribers with quality content that was frequently updated. But now, with the good help of this site, I am constantly building up my followers. I can also increase my views and likes here. And this is very important for my account because with its help I conduct an educational project that helps many people.","datePublished":"2021-11-15T14:35:46+0000","author":{"@type":"Person","name":"Sally Thomson"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Love this app!","reviewBody":"Love this app!","datePublished":"2021-01-10T18:31:22+0000","author":{"@type":"Person","name":"Ellie"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","author":{"@type":"Person","name":"andre"},"datePublished":"2021-01-08T04:12:00+0000","name":"better than all other we...","reviewBody":"better than all other websites and this one actually works!","reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Great service and like t...","reviewBody":"Great service and like that you\'re given a trial before paying!","datePublished":"2021-01-05T14:35:46+0000","author":{"@type":"Person","name":"Kay"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}}],"qV":[{"@type":"Review","name":"It actually works and al...","reviewBody":"It actually works and all of them were legit !!","datePublished":"2021-01-03T20:17:33+0000","author":{"@type":"Person","name":"Jason"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Really quick and easy","reviewBody":"Really quick and easy","datePublished":"2020-12-24T19:20:37+0000","author":{"@type":"Person","name":"Bailey"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}},{"@type":"Review","name":"Amazing, so helpful and ...","reviewBody":"Amazing, so helpful and has helped me improve my page and earn more followers with the positive engagement increase.","datePublished":"2020-12-24T08:58:38+0000","author":{"@type":"Person","name":"Matt Cromer"},"reviewRating":{"@type":"Rating","ratingValue":5,"bestRating":5,"worstRating":1}}]}'),
                a = r(1225),
                s = a.qCK(a.nnj(a.csF), a.tEA([a.Smz, a.kE]));

            function o(e) {
                var t = (0, n.useMemo)((function() {
                        return {
                            followers: [{
                                "@context": "http://schema.org",
                                "@type": "Product",
                                name: "Instagram Followers",
                                image: "https://twicsy.com/images/buy-instagram-followers.png",
                                description: "Twicsy Company - Buy Instagram Followers - 100 Followers - Only $1.99 - Low Prices 24/7 - Support!",
                                sku: "IF-1",
                                brand: {
                                    "@type": "Brand",
                                    name: "Instagram"
                                },
                                mpn: "IF-1",
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: "4",
                                    reviewCount: "90"
                                },
                                review: i.l7,
                                offers: {
                                    "@type": "Offer",
                                    price: "1.99",
                                    priceValidUntil: "2022-09-10T15:32:00",
                                    priceCurrency: "USD",
                                    itemCondition: "http://schema.org/NewCondition",
                                    availability: "http://schema.org/InStock",
                                    url: "https://twicsy.com/buy-instagram-followers"
                                }
                            }],
                            likes: [{
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                name: "Twicsy IG Likes",
                                image: "https://twicsy.com/images/buy-instagram-likes.png",
                                url: "https://twicsy.com/buy-instagram-likes",
                                description: "The Twicsy Likes boost packages",
                                sku: "twicsy-instagram-likes",
                                mpn: "twicsy-instagram-likes",
                                brand: {
                                    "@type": "Brand",
                                    name: "Twicsy.com"
                                },
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: 5,
                                    ratingCount: i.Pb.length,
                                    bestRating: 5,
                                    worstRating: 1
                                },
                                offers: {
                                    "@type": "Offer",
                                    url: "https://twicsy.com/buy-instagram-likes",
                                    priceCurrency: "USD",
                                    price: "2.97",
                                    priceValidUntil: "2024-12-01",
                                    availability: "https://schema.org/InStock",
                                    seller: {
                                        "@type": "Organization",
                                        name: "Twicsy"
                                    }
                                },
                                review: i.Pb
                            }],
                            views: [{
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                name: "Twicsy IG Views",
                                image: "https://twicsy.com/images/buy-instagram-views.png",
                                url: "https://twicsy.com/buy-instagram-views",
                                description: "The Twicsy Views boost packages",
                                sku: "twicsy-instagram-views",
                                mpn: "twicsy-instagram-views",
                                brand: {
                                    "@type": "Brand",
                                    name: "Twicsy.com"
                                },
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: 5,
                                    ratingCount: i.qV.length,
                                    bestRating: 5,
                                    worstRating: 1
                                },
                                offers: {
                                    "@type": "Offer",
                                    url: "https://twicsy.com/buy-instagram-views",
                                    priceCurrency: "USD",
                                    price: "1.99",
                                    priceValidUntil: "2024-12-01",
                                    availability: "https://schema.org/InStock",
                                    seller: {
                                        "@type": "Organization",
                                        name: "Twicsy"
                                    }
                                },
                                review: i.qV
                            }]
                        }
                    }), []),
                    r = (0, n.useMemo)((function() {
                        return t[e]
                    }), [t, e]),
                    o = (0, n.useMemo)((function() {
                        return r[0].review
                    }), [r]),
                    l = function(e) {
                        var t = (0, n.useMemo)((function() {
                            return null === e || void 0 === e ? void 0 : e.map((function(e) {
                                return e.reviewRating.ratingValue
                            }))
                        }), [e]);
                        return {
                            count: a.kE(e),
                            average: parseFloat(t ? s(t).toFixed(2) : 0)
                        }
                    }(o);
                return {
                    schema: r,
                    reviews: o,
                    stats: l
                }
            }
            var l = r(5893),
                c = function(e) {
                    var t = o(e.schemaType).schema;
                    return (0, l.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(t[0])
                        }
                    })
                }
        },
        4030: function(e, t, r) {
            r(7812);
            var n = r(6864),
                i = r(7294),
                a = r(9322),
                s = r(1798),
                o = r(9698),
                l = r(3062),
                c = r(5540),
                u = r(953),
                d = r(8830),
                p = r(947),
                m = r(5437),
                h = r(1614),
                g = r(5893),
                f = (0, i.forwardRef)((function(e, t) {
                    var r = (0, n.Z)({}, e),
                        f = r.title,
                        y = r.subtitle,
                        v = r.buttonText,
                        b = r.schemaType,
                        w = r.hideSchema,
                        j = (0, i.useState)(!1),
                        x = j[0],
                        O = j[1],
                        C = (0, h.P)(b),
                        P = C.testimonials,
                        _ = C.stats,
                        k = _.average,
                        Z = _.totalReviews,
                        R = function(e) {
                            e.preventDefault(), O(!x)
                        };
                    return (0, g.jsxs)(a.Z, {
                        ref: t,
                        noShell: !0,
                        gray: !0,
                        className: "section--testimonials",
                        children: [!w && (0, g.jsx)(p.Z, {
                            schemaType: b
                        }), (0, g.jsx)(s.Z, {
                            children: (f || y) && (0, g.jsxs)(a.Z.Head, {
                                children: [f && (0, g.jsx)("h6", {
                                    children: f
                                }), y && (0, g.jsx)("h2", {
                                    children: y
                                })]
                            })
                        }), (0, g.jsx)(m.Z, {}), (0, g.jsx)(s.Z, {
                            children: (0, g.jsxs)(o.Z, {
                                options: [{
                                    size: "lg",
                                    modifiers: ["justify-between"]
                                }, {
                                    size: "md",
                                    modifiers: ["justify-between"]
                                }, {
                                    size: "sm",
                                    modifiers: ["justify-between"]
                                }],
                                children: [(0, g.jsx)(c.Z, {
                                    rating: k,
                                    totalReviews: Z
                                }), (0, g.jsx)(l.Z, {
                                    className: "hidden-xs",
                                    secondary: !0,
                                    onClick: function(e) {
                                        return R(e)
                                    },
                                    children: v
                                })]
                            })
                        }), (0, g.jsxs)("div", {
                            className: "section__inner",
                            children: [(0, g.jsxs)(s.Z, {
                                children: [(0, g.jsx)(a.Z.Footer, {
                                    children: (0, g.jsx)(l.Z, {
                                        secondary: !0,
                                        className: "visible-xs",
                                        onClick: function(e) {
                                            return R(e)
                                        },
                                        children: v
                                    })
                                }), x && (0, g.jsx)(u.Z, {
                                    closeFn: R
                                })]
                            }), (0, g.jsx)(d.Z, {
                                testimonials: P
                            })]
                        })]
                    })
                }));
            t.Z = f
        },
        5437: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return g
                }
            });
            var n = r(9501),
                i = r(7294),
                a = r(2043),
                s = r(9499),
                o = r(4184),
                l = r.n(o),
                c = r(131),
                u = r(5893),
                d = function(e) {
                    var t = e.video,
                        r = (0, i.useRef)(null),
                        n = (0, i.useRef)(null),
                        a = (0, i.useState)(!1),
                        s = a[0],
                        o = a[1];
                    return (0, u.jsx)(c.df, {
                        as: "div",
                        triggerOnce: !0,
                        ref: r,
                        className: "video-holder",
                        onChange: function(e) {
                            return function(e) {
                                o(e), e && (n.current.onloadeddata = function() {
                                    r.current.node.classList.add("is-animated")
                                })
                            }(e)
                        },
                        children: (0, u.jsx)("video", {
                            ref: n,
                            src: s ? t : "",
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0
                        })
                    })
                },
                p = r(4377),
                m = r(9255),
                h = function(e) {
                    var t = e.data,
                        r = t.text,
                        n = t.color,
                        i = t.video,
                        a = t.blob;
                    return (0, u.jsxs)("div", {
                        className: l()("testimonial-with-video", (0, s.Z)({}, "testimonial-with-video--".concat(n), n)),
                        children: [(0, u.jsxs)("p", {
                            children: ["\u201c", r, "\u201d"]
                        }), (0, u.jsxs)("div", {
                            className: "testimonial__video",
                            children: [(0, u.jsx)(p.Z, {
                                name: "testimonialCheck"
                            }), (0, u.jsx)(d, {
                                video: i
                            })]
                        }), (0, u.jsx)(m.Z, {
                            color: n,
                            name: a,
                            className: "testimonial__blob"
                        })]
                    })
                },
                g = function() {
                    var e = (0, i.useMemo)((function() {
                        return [{
                            text: (0, u.jsx)(n.cC, {
                                id: "I use Twicsy every single day and I love it. It's a great tool for my Instagram account."
                            }),
                            color: "yellow",
                            video: "/videos/get-followers-video-1.mp4",
                            blob: "BlobSmiling"
                        }, {
                            text: (0, u.jsx)(n.cC, {
                                id: "I've been using Twicsy for a few months now and it's really great. Best decision I've ever made."
                            }),
                            color: "cyan",
                            video: "/videos/get-followers-video-2.mp4",
                            blob: "BlobSmiling"
                        }, {
                            text: (0, u.jsx)(n.cC, {
                                id: "Not only is it easy to use, but it's also very powerful. I've been consistently hitting the explore page for the past few weeks."
                            }),
                            color: "purple",
                            video: "/videos/get-followers-video-3.mp4",
                            blob: "BlobSmilingAlt"
                        }, {
                            text: (0, u.jsx)(n.cC, {
                                id: "Our company has been skyrocketed by using Twicsy. I wish we knew about it sooner."
                            }),
                            color: "yellow",
                            video: "/videos/get-followers-video-1.mp4",
                            blob: "BlobSmiling"
                        }, {
                            text: (0, u.jsx)(n.cC, {
                                id: "Sometimes things might be too good to be true. But with Twicsy, that's not the case."
                            }),
                            color: "cyan",
                            video: "/videos/get-followers-video-2.mp4",
                            blob: "BlobSmiling"
                        }, {
                            text: (0, u.jsx)(n.cC, {
                                id: "Really love the simplicity of the interface and amazing customer support."
                            }),
                            color: "purple",
                            video: "/videos/get-followers-video-3.mp4",
                            blob: "BlobSmilingAlt"
                        }]
                    }), []);
                    return (0, u.jsx)(a.Z, {
                        alt: !0,
                        dots: !0,
                        arrows: !0,
                        className: "slider-testimonial-with-video",
                        options: {
                            loop: !0,
                            align: "center",
                            skipSnaps: !0,
                            slidesToScroll: 1,
                            containScroll: "trimSnaps"
                        },
                        children: e.map((function(e, t) {
                            return (0, u.jsx)(h, {
                                data: e
                            }, t)
                        }))
                    })
                }
        },
        8830: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            r(7294);
            var n = r(6845),
                i = r(4377),
                a = r(5893),
                s = function(e) {
                    var t = e.rating,
                        r = e.text,
                        s = e.author;
                    return (0, a.jsxs)("div", {
                        className: "testimonial text-sm",
                        children: [(0, a.jsx)("div", {
                            className: "testimonial__quotes",
                            children: (0, a.jsx)(i.Z, {
                                name: "quotes"
                            })
                        }), (0, a.jsx)(n.Z, {
                            rating: t
                        }), (0, a.jsxs)("blockquote", {
                            children: [" ", r, " "]
                        }), (0, a.jsxs)("cite", {
                            children: ["\u2014 ", s]
                        })]
                    })
                },
                o = r(2043),
                l = function(e) {
                    var t = e.testimonials;
                    return (0, a.jsx)(o.Z, {
                        arrows: !0,
                        className: "slider-testimonials",
                        options: {
                            loop: !0,
                            align: "center",
                            skipSnaps: !1,
                            startIndex: 3,
                            slidesToScroll: 1
                        },
                        children: t.map((function(e, t) {
                            return (0, a.jsx)(s, {
                                author: e.author.name,
                                text: e.reviewBody,
                                rating: e.reviewRating.ratingValue
                            }, t)
                        }))
                    })
                }
        },
        5242: function(e, t, r) {
            var n = r(7294),
                i = r(131),
                a = r(5893),
                s = function(e) {
                    var t = e.delay,
                        r = e.triggerOnce,
                        s = e.threshold,
                        o = e.children,
                        l = e.duration,
                        c = e.animation,
                        u = (0, n.useRef)(null),
                        d = (0, n.useState)(!1),
                        p = d[0],
                        m = d[1];
                    return (0, a.jsx)(i.df, {
                        as: "div",
                        ref: u,
                        triggerOnce: r,
                        threshold: s,
                        className: "animate ".concat(p ? "in-view" : ""),
                        "data-delay": t,
                        "data-duration": l,
                        "data-animation": c,
                        onChange: function(e, t) {
                            return function(e, t) {
                                m(e), e ? setTimeout((function() {
                                    t.target.classList.add("is-animated")
                                }), l) : t.target.classList.remove("is-animated")
                            }(e, t)
                        },
                        children: o
                    })
                };
            s.defaultProps = {
                delay: 0,
                duration: 400,
                threshold: 0,
                animation: "fade-up",
                triggerOnce: !0
            }, t.Z = s
        },
        9698: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return p
                }
            });
            var n = r(9499),
                i = r(4730),
                a = r(4184),
                s = r.n(a),
                o = r(5893),
                l = ["children", "options", "className", "modifier"];

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                var t = e.children,
                    r = e.options,
                    a = e.className,
                    c = e.modifier,
                    d = (0, i.Z)(e, l);
                return (0, o.jsx)("div", u(u({
                    className: s()(a, "flex-row", function() {
                        var e = "";
                        return null === r || void 0 === r || r.map((function(t) {
                            var r, n = t.size,
                                i = t.cols;
                            i && (e += " " + "".concat(n, "-cols-").concat(i)), null === (r = t.modifiers) || void 0 === r || r.forEach((function(t) {
                                return e += " " + "".concat(n, "-").concat(t)
                            }))
                        })), e.trim()
                    }(), (0, n.Z)({}, "flex-row--".concat(c), c))
                }, d), {}, {
                    children: t
                }))
            };
            d.Col = function(e) {
                var t = e.children,
                    r = e.className;
                return (0, o.jsx)("div", {
                    className: s()("flex-col", [r]),
                    children: t
                })
            };
            var p = d
        },
        6318: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return L
                }
            });
            var n = r(9499),
                i = r(4730),
                a = r(7294),
                s = r(4184),
                o = r.n(s),
                l = r(7536),
                c = r(4377),
                u = r(5893),
                d = ["name", "value", "onChange", "validations"];

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var h = function(e) {
                    var t = e.name,
                        r = (e.value, e.onChange),
                        n = (e.validations, (0, i.Z)(e, d)),
                        a = (0, l.Gc)().register;
                    return (0, u.jsx)("input", m(m({
                        type: "text"
                    }, a(t, {
                        onChange: r
                    })), n))
                },
                g = ["name", "value", "onChange", "validations"];

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var v = function(e) {
                    var t = e.name,
                        r = (e.value, e.onChange),
                        n = (e.validations, (0, i.Z)(e, g)),
                        a = (0, l.Gc)().register;
                    return (0, u.jsx)("textarea", y(y({}, a(t, {
                        onChange: r
                    })), n))
                },
                b = ["name", "options", "onChange", "placeholder"];

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var x = function(e) {
                    var t = e.name,
                        r = e.options,
                        n = e.onChange,
                        a = e.placeholder,
                        s = (0, i.Z)(e, b),
                        o = (0, l.Gc)().register;
                    return (0, u.jsxs)("select", j(j(j({}, o(t, {
                        onChange: n
                    })), s), {}, {
                        children: [(0, u.jsx)("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: a
                        }), null === r || void 0 === r ? void 0 : r.map((function(e) {
                            return (0, u.jsx)("option", {
                                value: e.value,
                                children: e.label
                            }, e.value)
                        }))]
                    }))
                },
                O = ["id", "name", "onChange", "validations"];

            function C(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var _ = function(e) {
                    var t = e.id,
                        r = e.name,
                        n = (e.onChange, e.validations, (0, i.Z)(e, O)),
                        s = (0, l.Gc)(),
                        d = s.register,
                        p = s.getValues,
                        m = (0, a.useState)(p(r)),
                        h = m[0],
                        g = m[1],
                        f = [1, 2, 3, 4, 5],
                        y = function(e) {
                            g(+e.target.value)
                        };
                    return (0, u.jsxs)(a.Fragment, {
                        children: [(0, u.jsx)("div", {
                            className: "field__stars",
                            children: f.map((function(e) {
                                return (0, u.jsxs)("div", {
                                    className: o()("field__star", {
                                        "is-active": h >= e
                                    }),
                                    children: [(0, u.jsx)("label", {
                                        htmlFor: "".concat(t, "-").concat(e),
                                        className: "field__star-label",
                                        children: (0, u.jsx)(c.Z, {
                                            name: "star"
                                        })
                                    }), (0, u.jsx)("input", P(P({
                                        type: "radio",
                                        value: e,
                                        id: "".concat(t, "-").concat(e),
                                        name: r
                                    }, n), d(r, {
                                        onChange: y
                                    })))]
                                }, e)
                            }))
                        }), (0, u.jsxs)("span", {
                            className: "field__box",
                            children: [h, " / ", f.length]
                        })]
                    })
                },
                k = ["id", "name", "type", "label", "vertical", "validations", "placeholder"];

            function Z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var S = function(e) {
                var t = e.id,
                    r = e.name,
                    n = e.type,
                    s = e.label,
                    d = e.vertical,
                    p = (e.validations, e.placeholder),
                    m = (0, i.Z)(e, k),
                    g = {
                        default: h,
                        textarea: v,
                        dropdown: x,
                        stars: _
                    },
                    f = (0, l.Gc)(),
                    y = f.formState,
                    b = f.getValues,
                    w = (0, a.useMemo)((function() {
                        return g[n]
                    }), [n]),
                    j = !!y.errors[r];
                return (0, u.jsxs)("div", {
                    className: o()("field", {
                        "field--textarea": "textarea" === n,
                        "field--dropdown": "dropdown" === n,
                        "field--stars": "stars" === n,
                        "field--vertical": d,
                        "is-invalid": j
                    }),
                    children: [s && (0, u.jsx)("label", {
                        htmlFor: t,
                        className: "field__label",
                        children: s
                    }), (0, u.jsxs)("div", {
                        className: "field__control",
                        children: [(0, u.jsx)(w, R({
                            className: "field__input",
                            placeholder: p,
                            id: t,
                            name: r,
                            defaultValue: b(r)
                        }, m)), j && "default" === n && (0, u.jsx)("div", {
                            className: "field__warning",
                            children: (0, u.jsx)(c.Z, {
                                name: "warning"
                            })
                        })]
                    })]
                })
            };
            S.defaultProps = {
                type: "default"
            };
            var L = S
        },
        5540: function(e, t, r) {
            var n = r(9501),
                i = (r(7294), r(6845)),
                a = r(5893);
            t.Z = function(e) {
                var t = e.rating,
                    r = e.totalReviews;
                return (0, a.jsxs)("div", {
                    className: "rating",
                    children: [(0, a.jsxs)("div", {
                        className: "rating__circle",
                        children: [(0, a.jsx)("span", {
                            className: "text-orange",
                            children: t
                        }), (0, a.jsxs)("i", {
                            children: [(0, a.jsx)(n.cC, {
                                id: "of"
                            }), " 5"]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "rating__content",
                        children: [(0, a.jsxs)("h6", {
                            children: [(0, a.jsx)(n.cC, {
                                id: "Customers rate us<0>Superb</0>",
                                components: {
                                    0: (0, a.jsx)("strong", {
                                        className: "text-orange"
                                    })
                                }
                            }), (0, a.jsx)(i.Z, {
                                rating: t
                            })]
                        }), (0, a.jsxs)("p", {
                            className: "text-sm",
                            children: [(0, a.jsxs)("strong", {
                                className: "text-orange",
                                children: [t, " / 5"]
                            }), " \u2014 ", (0, a.jsx)(n.cC, {
                                id: "based on {totalReviews} reviews",
                                values: {
                                    totalReviews: r
                                }
                            })]
                        })]
                    })]
                })
            }
        },
        2043: function(e, t, r) {
            var n = r(9499),
                i = r(6835),
                a = r(4730),
                s = r(7294),
                o = r(5585),
                l = r(9635),
                c = r(4184),
                u = r.n(c),
                d = r(5893),
                p = ["alt", "dots", "arrows", "options", "children", "className"];
            t.Z = function(e) {
                var t = e.alt,
                    r = e.dots,
                    c = e.arrows,
                    m = e.options,
                    h = e.children,
                    g = e.className,
                    f = (0, a.Z)(e, p),
                    y = (0, o.Z)(m, [(0, l.Z)()]),
                    v = (0, i.Z)(y, 2),
                    b = v[0],
                    w = v[1],
                    j = (0, s.useState)(!1),
                    x = j[0],
                    O = j[1],
                    C = (0, s.useState)(!1),
                    P = C[0],
                    _ = C[1],
                    k = (0, s.useState)(0),
                    Z = k[0],
                    R = k[1],
                    S = (0, s.useState)([]),
                    L = S[0],
                    N = S[1],
                    T = (0, s.useCallback)((function() {
                        return w && w.scrollPrev()
                    }), [w]),
                    I = (0, s.useCallback)((function() {
                        return w && w.scrollNext()
                    }), [w]),
                    D = (0, s.useCallback)((function(e) {
                        return w && w.scrollTo(e)
                    }), [w]),
                    M = (0, s.useCallback)((function() {
                        w && (R(w.selectedScrollSnap()), O(w.canScrollPrev()), _(w.canScrollNext()))
                    }), [w, R]),
                    B = (0, s.useCallback)((function(e) {
                        w && w.clickAllowed() && e && e()
                    }), [w]);
                return (0, s.useEffect)((function() {
                    w && (M(), N(w.scrollSnapList()), w.on("select", M))
                }), [w, N, M]), (0, s.useEffect)((function() {
                    w && (w.reInit(m), R(w.selectedScrollSnap()), O(w.canScrollPrev()), _(w.canScrollNext()))
                }), [f.watch]), (0, d.jsxs)("div", {
                    className: u()("embla", (0, n.Z)({
                        "embla--alt": t
                    }, g, g)),
                    dir: "ltr",
                    children: [(0, d.jsx)("div", {
                        className: "slider__container embla__container",
                        ref: b,
                        children: (0, d.jsx)("div", {
                            className: "slider__slides embla__slides",
                            children: s.Children.map(h, (function(e, t) {
                                return (0, d.jsx)("div", {
                                    className: u()("slider__slide embla__slide", {
                                        "is-current-slide": t === Z,
                                        "is-prev-slide": t === Z - 1,
                                        "is-next-slide": t === Z + 1
                                    }),
                                    onClick: function() {
                                        return B(e.props.onClick)
                                    },
                                    children: (0, s.cloneElement)(e)
                                })
                            }))
                        })
                    }), c && (0, d.jsxs)("div", {
                        className: "slider__cta embla__cta",
                        children: [(0, d.jsx)("button", {
                            className: u()("slider__button slider__button--prev embla__button embla__prev", {
                                "is-disabled": !x
                            }),
                            onClick: T
                        }), (0, d.jsx)("button", {
                            className: u()("slider__button slider__button--next embla__button embla__next", {
                                "is-disabled": !P
                            }),
                            onClick: I
                        })]
                    }), r && (0, d.jsx)("div", {
                        className: "slider__dots embla__dots",
                        children: L.map((function(e, t) {
                            return (0, d.jsx)("button", {
                                className: u()("embla__dot", {
                                    "is-active": t === Z
                                }),
                                onClick: function() {
                                    return D(t)
                                }
                            }, t)
                        }))
                    })]
                })
            }
        },
        3321: function(e, t, r) {
            var n = r(5893);
            t.Z = function() {
                return (0, n.jsxs)("span", {
                    className: "spinner",
                    children: [(0, n.jsx)("i", {}), (0, n.jsx)("i", {}), (0, n.jsx)("i", {}), (0, n.jsx)("i", {}), (0, n.jsx)("i", {}), (0, n.jsx)("i", {})]
                })
            }
        },
        9255: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return h
                }
            });
            var n = r(9499),
                i = r(4730),
                a = r(4184),
                s = r.n(a),
                o = (r(7294), r(5893)),
                l = ["name", "color", "className"];

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = {
                    blobWaving: function(e) {
                        var t = e.color,
                            r = t.body,
                            n = t.smile;
                        return (0, o.jsxs)("svg", {
                            width: "168",
                            height: "165",
                            viewBox: "0 0 168 165",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, o.jsx)("path", {
                                d: "M116.451 126.972C124.574 120.375 129.212 110.409 129.026 99.9458L128.088 47.1471C127.754 28.3535 112.248 13.3891 93.4542 13.723C74.6606 14.057 59.6962 29.563 60.0301 48.3565L60.196 57.6909L60.7438 127.637L87.4186 133.73C97.6203 136.06 108.327 133.568 116.451 126.972Z",
                                fill: "url(#paint0_linear_36_989)"
                            }), (0, o.jsx)("path", {
                                d: "M116.451 126.972C124.574 120.375 129.212 110.409 129.026 99.9458L128.088 47.1471C127.754 28.3535 112.248 13.3891 93.4542 13.723C74.6606 14.057 59.6962 29.563 60.0301 48.3565L60.196 57.6909L60.7438 127.637L87.4186 133.73C97.6203 136.06 108.327 133.568 116.451 126.972Z",
                                fill: r
                            }), (0, o.jsx)("path", {
                                d: "M83.6981 31.897C85.8877 36.3309 91.0796 35.499 92.5268 31.8607M96.9776 31.584C99.1672 36.0179 104.359 35.1859 105.806 31.5477M81.3871 40.4934C90.8794 51.1275 101.498 48.8117 107.903 37.7018",
                                stroke: n,
                                strokeWidth: "1.85102",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, o.jsx)("rect", {
                                x: "141.999",
                                y: "31.8115",
                                width: "19.9449",
                                height: "54.9314",
                                rx: "9.97243",
                                transform: "rotate(39.4683 141.999 31.8115)",
                                fill: r
                            }), (0, o.jsx)("rect", {
                                width: "19.9449",
                                height: "54.9314",
                                rx: "9.97243",
                                transform: "matrix(-0.771976 0.635651 0.635651 0.771976 44.9761 31.8115)",
                                fill: r
                            })]
                        })
                    },
                    blobCrown: function(e) {
                        var t = e.color,
                            r = t.body,
                            n = t.smile;
                        return (0, o.jsxs)("svg", {
                            width: "183",
                            height: "198",
                            viewBox: "0 0 183 198",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, o.jsx)("path", {
                                d: "M121.632 8.47342C121.632 7.20394 122.627 6.17374 123.851 6.17374C125.078 6.17374 126.07 7.20393 126.07 8.47379C126.07 9.74327 125.077 10.7735 123.851 10.7735C123.717 10.7735 123.585 10.7593 123.458 10.7352L116.669 32.0172C105.276 28.7114 99.3442 29.0452 89.2248 32.0168L82.4357 10.7348C82.3077 10.7586 82.1769 10.7731 82.0421 10.7731C80.8173 10.7731 79.8234 9.74328 79.8234 8.47342C79.8234 7.20394 80.8174 6.17374 82.0429 6.17374C83.2677 6.17374 84.2616 7.20356 84.2616 8.47342C84.2616 9.39557 83.7361 10.1883 82.9809 10.5554C85.2176 13.0129 90.8895 18.9211 93.7168 18.9211C98.702 18.9211 101.478 9.09237 102.495 4.55142C101.486 4.33476 100.727 3.409 100.727 2.29967C100.727 1.03019 101.722 0 102.947 0C104.173 0 105.166 1.02981 105.166 2.29967C105.166 3.40938 104.408 4.3352 103.399 4.55142C104.415 9.09275 107.192 18.9211 112.176 18.9211C115.004 18.9211 120.677 13.0129 122.913 10.5554C122.157 10.1883 121.632 9.3955 121.632 8.47342Z",
                                fill: r
                            }), (0, o.jsx)("path", {
                                d: "M126.782 156.023C135.626 148.842 140.675 137.991 140.472 126.6L139.451 69.1171C139.087 48.6562 122.206 32.3642 101.745 32.7278C81.2842 33.0915 64.9921 49.973 65.3558 70.4338L65.5364 80.5963L66.1327 156.748L95.174 163.381C106.281 165.918 117.937 163.205 126.782 156.023Z",
                                fill: "url(#paint0_linear_441_3801)"
                            }), (0, o.jsx)("path", {
                                d: "M126.782 156.023C135.626 148.842 140.675 137.991 140.472 126.6L139.451 69.1171C139.087 48.6562 122.206 32.3642 101.745 32.7278C81.2842 33.0915 64.9921 49.973 65.3558 70.4338L65.5364 80.5963L66.1327 156.748L95.174 163.381C106.281 165.918 117.937 163.205 126.782 156.023Z",
                                fill: r
                            }), (0, o.jsx)("path", {
                                d: "M91.1235 52.5144C93.5073 57.3417 99.1599 56.4359 100.735 52.4749M105.581 52.1736C107.965 57.0009 113.618 56.0951 115.193 52.1342M88.6075 61.8735C98.9419 73.451 110.502 70.9298 117.476 58.8342",
                                stroke: n,
                                strokeWidth: "2.01524",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    },
                    blobPhone: function(e) {
                        var t = e.color,
                            r = t.body,
                            n = t.smile;
                        return (0, o.jsxs)("svg", {
                            width: "103",
                            height: "101",
                            viewBox: "0 0 103 101",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, o.jsx)("path", {
                                d: "M71.3998 77.7153C76.3721 73.6779 79.2107 67.5775 79.0969 61.1735L78.5226 28.8568C78.3182 17.3537 68.8274 8.1944 57.3243 8.39882C45.8213 8.60325 36.662 18.094 36.8664 29.5971L36.9679 35.3104L37.3032 78.1227L53.6301 81.852C59.8743 83.2783 66.4275 81.7527 71.3998 77.7153Z",
                                fill: "url(#paint0_linear_47_1771)"
                            }), (0, o.jsx)("path", {
                                d: "M71.3998 77.7153C76.3721 73.6779 79.2107 67.5775 79.0969 61.1735L78.5226 28.8568C78.3182 17.3537 68.8274 8.1944 57.3243 8.39882C45.8213 8.60325 36.662 18.094 36.8664 29.5971L36.9679 35.3104L37.3032 78.1227L53.6301 81.852C59.8743 83.2783 66.4275 81.7527 71.3998 77.7153Z",
                                fill: r
                            }), (0, o.jsx)("path", {
                                d: "M51.353 19.5227C52.6932 22.2366 55.871 21.7274 56.7568 19.5005M59.4811 19.3311C60.8213 22.045 63.9991 21.5358 64.8849 19.309M49.9385 24.7844C55.7485 31.2932 62.2478 29.8758 66.1684 23.0757",
                                stroke: n,
                                strokeWidth: "1.13296",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, o.jsx)("rect", {
                                x: "70.6993",
                                y: "19.1041",
                                width: "11.6769",
                                height: "20.7",
                                rx: "3.4811",
                                transform: "rotate(16.165 70.6993 19.1041)",
                                fill: n
                            }), (0, o.jsx)("rect", {
                                opacity: "0.4",
                                x: "67.1367",
                                y: "46.0889",
                                width: "12.2077",
                                height: "29.5156",
                                rx: "6.10386",
                                transform: "rotate(-8.3767 67.1367 46.0889)",
                                fill: n
                            }), (0, o.jsx)("rect", {
                                x: "69.2581",
                                y: "38.6539",
                                width: "12.2077",
                                height: "29.5156",
                                rx: "6.10386",
                                transform: "rotate(-8.3767 69.2581 38.6539)",
                                fill: r
                            })]
                        })
                    },
                    BlobSmiling: function(e) {
                        var t = e.color,
                            r = t.body,
                            n = t.smile;
                        return (0, o.jsxs)("svg", {
                            width: "227",
                            height: "252",
                            viewBox: "0 0 227 252",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, o.jsx)("path", {
                                d: "M30.8171 236.433C11.2663 220.138 0.0139014 215.924 0.0793455 191.422L0.462322 75.6222C0.579858 31.6101 36.9051 -1.86746 81.5971 0.848022C126.289 3.56352 162.424 41.4438 162.306 85.456L162.195 99.4671L163.279 243.722L99.9058 231.551C75.736 235.963 50.3678 252.728 30.8171 236.433Z",
                                fill: "url(#paint0_linear_0_1)"
                            }), (0, o.jsx)("path", {
                                d: "M30.8171 236.433C11.2663 220.138 0.0139014 215.924 0.0793455 191.422L0.462322 75.6222C0.579858 31.6101 36.9051 -1.86746 81.5971 0.848022C126.289 3.56352 162.424 41.4438 162.306 85.456L162.195 99.4671L163.279 243.722L99.9058 231.551C75.736 235.963 50.3678 252.728 30.8171 236.433Z",
                                fill: r
                            }), (0, o.jsx)("path", {
                                opacity: "0.6",
                                d: "M60.0242 30.1465C63.523 38.5012 73.1092 37.5705 76.1684 31.084M84.3365 31.084C87.8353 39.4387 97.4214 38.508 100.481 32.0214M43.8801 36.6044C60.0242 57.124 104.517 57.2282 117.49 37.6461",
                                stroke: n,
                                strokeWidth: "3.90705",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    },
                    BlobSmilingAlt: function(e) {
                        var t = e.color,
                            r = t.body,
                            n = t.smile;
                        return (0, o.jsxs)("svg", {
                            width: "280",
                            height: "370",
                            viewBox: "0 0 280 370",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, o.jsxs)("g", {
                                opacity: "0.4",
                                children: [(0, o.jsx)("path", {
                                    d: "M109.817 268.433C90.2663 252.138 79.0139 247.924 79.0793 223.422L79.4623 107.622C79.5799 63.61 115.905 30.1325 160.597 32.848C205.289 35.5635 241.424 73.4438 241.306 117.456L241.195 131.467L242.279 275.722L178.906 263.551C154.736 267.963 129.368 284.728 109.817 268.433Z",
                                    fill: "url(#paint0_linear_497_3813)"
                                }), (0, o.jsx)("path", {
                                    d: "M109.817 268.433C90.2663 252.138 79.0139 247.924 79.0793 223.422L79.4623 107.622C79.5799 63.61 115.905 30.1325 160.597 32.848C205.289 35.5635 241.424 73.4438 241.306 117.456L241.195 131.467L242.279 275.722L178.906 263.551C154.736 267.963 129.368 284.728 109.817 268.433Z",
                                    fill: r
                                })]
                            }), (0, o.jsx)("path", {
                                d: "M136.505 63.5987C140.439 72.9941 151.219 71.9474 154.66 64.6529M163.845 64.6529C167.78 74.0483 178.56 73.0016 182 65.7071",
                                stroke: n,
                                strokeWidth: "4.39369",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, o.jsx)("path", {
                                d: "M144.349 81.4268C150.442 95.4399 167.136 93.8789 172.463 82.9992",
                                stroke: n,
                                strokeWidth: "4.39369",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    }
                },
                p = {
                    gray: {
                        body: "#D1DAE1",
                        smile: "#5F5F5F"
                    },
                    red: {
                        body: "#FFB6AB",
                        smile: "#FF553C"
                    },
                    cyan: {
                        body: "#91EAF0",
                        smile: "#0C7C84"
                    },
                    purple: {
                        body: "#D5B5FF",
                        smile: "#6635A6"
                    },
                    yellow: {
                        body: "#FFCE54",
                        smile: "#A87800"
                    }
                },
                m = function(e) {
                    var t = e.name,
                        r = e.color,
                        a = e.className,
                        c = (0, i.Z)(e, l);
                    if (!d[t]) throw new Error("Blob with name ".concat(t, " was not found!"));
                    var m = d[t];
                    return (0, o.jsx)("i", {
                        className: s()("svg-blob svg-blob--".concat(t), (0, n.Z)({}, "".concat(a), a)),
                        children: (0, o.jsx)(m, u({
                            color: p[r]
                        }, c))
                    })
                };
            m.defaultProps = {
                color: "red"
            };
            var h = m
        }
    }
]);