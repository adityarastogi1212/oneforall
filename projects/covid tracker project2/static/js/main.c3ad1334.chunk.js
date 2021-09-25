(this["webpackJsonpcovid-19-tracker-react"] = this["webpackJsonpcovid-19-tracker-react"] || []).push([
    [0], {
        127: function(e, t, a) {
            e.exports = {
                container: "Chart_container__2cLo1",
                image: "Chart_image__2miuP"
            }
        },
        128: function(e, t, a) {
            e.exports = {
                formControl: "CountryPicker_formControl__1rVBs"
            }
        },
        129: function(e, t, a) {
            e.exports = a.p + "covid tracker project2/static/media/image.d7265326.png"
        },
        134: function(e, t, a) {
            e.exports = a(255)
        },
        255: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(116),
                c = a.n(o),
                l = a(25),
                i = a.n(l),
                s = a(39),
                u = a(117),
                m = a(118),
                f = a(131),
                d = a(130),
                p = a(272),
                v = a(276),
                b = a(273),
                h = a(274),
                g = a(50),
                y = a.n(g),
                x = a(119),
                E = a.n(x),
                C = a(120),
                k = a.n(C),
                O = function(e) {
                    var t = e.data,
                        a = t.confirmed,
                        n = t.recovered,
                        o = t.deaths,
                        c = t.lastUpdate,
                        l = e.country;
                    if (!a) return "Loading...";
                    var i = a.value - n.value - o.value,
                        s = [{
                            style: y.a.infected,
                            text: "Infected",
                            value: a.value,
                            bottomText: "Number of active cases of COVID-19"
                        }, {
                            style: y.a.recovered,
                            text: "Recovered",
                            value: n.value,
                            bottomText: "Number of recoveries from COVID-19"
                        }, {
                            style: y.a.deaths,
                            text: "Deaths",
                            value: o.value,
                            bottomText: "Number of deaths caused by COVID-19"
                        }, {
                            style: y.a.active,
                            text: "Active",
                            value: i,
                            bottomText: "Number of Active Cases of COVID-19"
                        }];
                    return r.a.createElement("div", {
                        className: y.a.container
                    }, r.a.createElement(p.a, {
                        container: !0,
                        spacing: 3,
                        justify: "center"
                    }, s.map((function(e, t) {
                        return r.a.createElement(p.a, {
                            item: !0,
                            component: v.a,
                            xs: 12,
                            md: 2,
                            className: k()(y.a.Card, e.style),
                            key: t,
                            style: {
                                margin: "0px 23.675px",
                                padding: "12px"
                            }
                        }, r.a.createElement(b.a, null, r.a.createElement(h.a, {
                            color: "textPrimary",
                            gutterBottom: !0
                        }, r.a.createElement("b", null, e.text)), r.a.createElement(h.a, {
                            variant: "h5"
                        }, r.a.createElement(E.a, {
                            start: 0,
                            end: e.value,
                            duration: 2,
                            separator: ","
                        })), r.a.createElement(h.a, {
                            color: "textPrimary"
                        }, "Last Updated at : "), r.a.createElement(h.a, {
                            color: "textSecondary",
                            variant: "body2"
                        }, new Date(c).toDateString()), r.a.createElement(h.a, {
                            color: "textSecondary",
                            variant: "body2"
                        }, new Date(c).toLocaleTimeString()), r.a.createElement(h.a, {
                            variant: "body2"
                        }, e.bottomText), r.a.createElement(h.a, {
                            color: "textPrimary"
                        }, " ", l, " ")))
                    }))))
                },
                w = a(75),
                _ = a(76),
                N = a.n(_),
                S = "https://covid19.mathdro.id/api",
                M = function() {
                    var e = Object(s.a)(i.a.mark((function e(t) {
                        var a, n, r, o, c, l, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = S, t && (a = "".concat(S, "/countries/").concat(t)), e.prev = 2, e.next = 5, N.a.get(a);
                                case 5:
                                    return n = e.sent, r = n.data, o = r.confirmed, c = r.recovered, l = r.deaths, s = r.lastUpdate, e.abrupt("return", {
                                        confirmed: o,
                                        recovered: c,
                                        deaths: l,
                                        lastUpdate: s
                                    });
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(2), console.log(e.t0);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 14]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var e = Object(s.a)(i.a.mark((function e() {
                        var t, a, n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, N.a.get("".concat(S, "/daily"));
                                case 3:
                                    return t = e.sent, a = t.data, n = a.map((function(e) {
                                        return {
                                            confirmed: e.confirmed.total,
                                            deaths: e.deaths.total,
                                            date: e.reportDate
                                        }
                                    })), e.abrupt("return", n);
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = Object(s.a)(i.a.mark((function e() {
                        var t, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, N.a.get("".concat(S, "/countries"));
                                case 3:
                                    return t = e.sent, a = t.data.countries, e.abrupt("return", a.map((function(e) {
                                        return e.name
                                    })));
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                j = a(87),
                D = a(127),
                P = a.n(D),
                L = function(e) {
                    var t = e.data,
                        a = t.confirmed,
                        o = t.recovered,
                        c = t.deaths,
                        l = e.country,
                        u = Object(n.useState)([]),
                        m = Object(w.a)(u, 2),
                        f = m[0],
                        d = m[1];
                    Object(n.useEffect)((function() {
                        (function() {
                            var e = Object(s.a)(i.a.mark((function e() {
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = d, e.next = 3, I();
                                        case 3:
                                            e.t1 = e.sent, (0, e.t0)(e.t1);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), []);
                    var p = f.length ? r.a.createElement(j.b, {
                            data: {
                                labels: f.map((function(e) {
                                    return e.date
                                })),
                                datasets: [{
                                    data: f.map((function(e) {
                                        return e.confirmed
                                    })),
                                    label: "Infected",
                                    borderColor: "#3333ff",
                                    fill: !0
                                }, {
                                    data: f.map((function(e) {
                                        return e.deaths
                                    })),
                                    label: "Deaths",
                                    borderColor: "red",
                                    backgroundColor: "rgba(255,0,0,0.5)",
                                    fill: !0
                                }]
                            }
                        }) : null,
                        v = a ? r.a.createElement(j.a, {
                            data: {
                                labels: ["Infected", "Recovered", "Deaths", "Active"],
                                datasets: [{
                                    label: "People",
                                    backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)", "rgba(242, 234, 0, 0.5)"],
                                    hoverBackgroundColor: ["rgba(0, 77, 153)", "rgba(30, 102, 49)", "rgba(255, 51, 51)", "rgba(204, 153, 0)"],
                                    data: [a.value, o.value, c.value, a.value - (o.value + c.value)]
                                }]
                            },
                            options: {
                                legend: {
                                    display: !1
                                },
                                title: {
                                    display: !0,
                                    text: "Current state in ".concat(l)
                                }
                            }
                        }) : null;
                    return r.a.createElement("div", {
                        className: P.a.container
                    }, l ? v : p)
                },
                T = a(277),
                F = a(275),
                B = a(128),
                V = a.n(B),
                U = function(e) {
                    var t = e.handleCountryChange,
                        a = Object(n.useState)([]),
                        o = Object(w.a)(a, 2),
                        c = o[0],
                        l = o[1];
                    return Object(n.useEffect)((function() {
                        (function() {
                            var e = Object(s.a)(i.a.mark((function e() {
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = l, e.next = 3, A();
                                        case 3:
                                            e.t1 = e.sent, (0, e.t0)(e.t1);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [l]), r.a.createElement(T.a, {
                        className: V.a.formControl
                    }, r.a.createElement(F.a, {
                        defaultValue: "",
                        onChange: function(e) {
                            return t(e.target.value)
                        }
                    }, r.a.createElement("option", {
                        value: ""
                    }, "Global"), c.map((function(e, t) {
                        return r.a.createElement("option", {
                            key: t,
                            value: e
                        }, e)
                    }))))
                },
                G = a(89),
                R = a.n(G),
                z = a(129),
                W = a.n(z),
                Z = a(77),
                H = a.n(Z),
                J = function() {
                    var e = function(e) {
                        e.target.style.color = "#cccccc"
                    };
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: H.a.container
                    }, r.a.createElement("h6", {
                        style: {
                            display: "block",
                            marginBottom: "0px",
                            fontSize: 30,
                            marginTop: "40px",
                            textAlign: "center"
                        }
                    }, "Created with care by", " ", r.a.createElement("a", {
                       
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: "rgba(0,0,255,0.6)",
                            textDecoration: "none"
                        }
                    }, "ADITYA RASTOGI"))), r.a.createElement("div", {
                        className: H.a.container
                    }, r.a.createElement("br", null), r.a.createElement("ul", {
                        className: "list",
                        style: {
                            listStyleType: "none"
                        }
                    }, [{
                        SocialMediaName: "LinkedIn",
                        ProfileLink: "https://www.linkedin.com/in/aditya-rastogi-06971516b",
                        fontAwesomeIconName: "fab fa-linkedin",
                        OnMouseOverColor: "#4875B4"
                    }, {
                        SocialMediaName: "Github",
                        ProfileLink: "https://github.com/adityarastogi1212",
                        fontAwesomeIconName: "fab fa-github",
                        OnMouseOverColor: "#211F1F"
                    }, {
                        SocialMediaName: "Gmail",
                        ProfileLink: "mailto:adityarastogi1212@gmail.com",
                        fontAwesomeIconName: "far fa-envelope",
                        OnMouseOverColor: "#D44638",
                        _comment: "OnMouseOverColor for yahoo mail: #720e9e"
                    }, {
                        SocialMediaName: "WhatsApp",
                        ProfileLink: "https://wa.me/qr/5QO5ZT4ETXZIA1",
                        fontAwesomeIconName: "fab fa-whatsapp",
                        OnMouseOverColor: "#25d366"
                    }, {
                        SocialMediaName: "Instagram",
                        ProfileLink: "https://www.instagram.com/adityar1212?r=nametag",
                        fontAwesomeIconName: "fab fa-instagram",
                        OnMouseOverColor: "#bc2a8d"
                    }, {
                        SocialMediaName: "Twitter",
                        ProfileLink: "https://twitter.com/AdityaR05678214?s=08",
                        fontAwesomeIconName: "fab fa-twitter",
                        OnMouseOverColor: "#1da1f2"
                    }, {
                        SocialMediaName: "Telegram",
                        ProfileLink: "https://t.me/contact_adityarastogi",
                        fontAwesomeIconName: "fab fa-telegram",
                        OnMouseOverColor: "#1da1f2"
                    }, {
                        SocialMediaName: "Facebook",
                        ProfileLink: "https://www.facebook.com/aditya.rastogi.777158",
                        fontAwesomeIconName: "fab fa-facebook-f",
                        OnMouseOverColor: "#1877f2"
                    }].map((function(t, a) {
                        return r.a.createElement("li", {
                            key: a,
                            style: {
                                display: "inline-block",
                                marginRight: "17px"
                            }
                        }, r.a.createElement("a", {
                            onMouseOver: function(e) {
                                e.target.style.color = "".concat(t.OnMouseOverColor)
                            },
                            onMouseOut: e,
                            href: t.ProfileLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                color: "#cccccc",
                                fontSize: "40px"
                            }
                        }, r.a.createElement("i", {
                            className: "".concat(t.fontAwesomeIconName)
                        })))
                    })))), r.a.createElement("div", {
                        className: H.a.container
                    }, r.a.createElement("h6", {
                        style: {
                            display: "block",
                            marginBottom: "0px",
                            fontSize: 16,
                            marginTop: "20px",
                            textAlign: "center"
                        }
                    }, "Data provided \ud83d\udc96 by", " ", r.a.createElement("a", {
                        href: "https://github.com/mathdroid/covid-19-api",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: "rgba(0,0,255,0.6)",
                            textDecoration: "none"
                        }
                    }, "Mathdroid"))))
                },
                K = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(d.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            data: {},
                            country: ""
                        }, e.handleCountryChange = function() {
                            var t = Object(s.a)(i.a.mark((function t(a) {
                                var n;
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, M(a);
                                        case 2:
                                            n = t.sent, e.setState({
                                                data: n,
                                                country: a
                                            });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(s.a)(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, M();
                                        case 2:
                                            t = e.sent, this.setState({
                                                data: t
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.data,
                                a = e.country;
                            return r.a.createElement("div", {
                                className: R.a.container
                            }, r.a.createElement("img", {
                                className: R.a.image,
                                src: W.a,
                                alt: "COVID-19"
                            }), r.a.createElement("br", null), r.a.createElement("text", null, r.a.createElement("b", null, "Global and Country Wise Cases of Corona Virus")), r.a.createElement("br", null), r.a.createElement("text", null, r.a.createElement("i", null, "(For a Particlar select a Country from below)")), r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement(O, {
                                data: t,
                                country: a
                            }), r.a.createElement(U, {
                                handleCountryChange: this.handleCountryChange
                            }), r.a.createElement(L, {
                                data: t,
                                country: a
                            }), r.a.createElement(J, null))
                        }
                    }]), a
                }(r.a.Component);
            c.a.render(r.a.createElement(K, null), document.getElementById("root"))
        },
        50: function(e, t, a) {
            e.exports = {
                container: "Cards_container__k56OZ",
                card: "Cards_card__KQcWL",
                infected: "Cards_infected__2ZkyH",
                recovered: "Cards_recovered__268s8",
                deaths: "Cards_deaths__abASg",
                active: "Cards_active__19BsR"
            }
        },
        77: function(e, t, a) {
            e.exports = {
                container: "Footer_container__2FUI5",
                list: "Footer_list__1Ekms"
            }
        },
        89: function(e, t, a) {
            e.exports = {
                container: "App_container__2xdui",
                image: "App_image__Z728r"
            }
        }
    },
    [
        [134, 1, 2]
    ]
]);
//# sourceMappingURL=main.c3ad1334.chunk.js.map