(window.webpackJsonp = window.webpackJsonp || []).push([
    [14],
    {
        "0w4E": function (e, t, i) {
            "use strict";
            var a = i("q1tI"),
                n = i.n(a);
            t.a = (e) => {
                let { element: t, toggle: i, setToggle: o, children: r } = e;
                return (
                    Object(a.useEffect)(() => {
                        const e = new IntersectionObserver(
                            (t) => {
                                t.forEach((t) => {
                                    t.intersectionRatio > 0 && (o(!0), e.unobserve(t.target));
                                });
                            },
                            { threshold: [0, 0.25, 0.5, 0.75, 1] }
                        );
                        t && e.observe(t);
                    }, [t, o, i]),
                    n.a.createElement(n.a.Fragment, null, r)
                );
            };
        },
        "8qrK": function (e, t, i) {
            "use strict";
            function a(e, t) {
                return (
                    '\n  position: relative;\n  \n  &::before {\n    display: block;\n    content: "";\n    width: 100%;\n    padding-top: ' +
                    (t / e) * 100 +
                    "%;\n  }\n  > * {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    object-fit: cover;\n  }\n  "
                );
            }
            i.d(t, "a", function () {
                return a;
            });
        },
        L8eV: function (e, t, i) {
            "use strict";
            i("PF2M"), i("IZzc");
            var a = i("q1tI"),
                n = i.n(a),
                o = i("vOnD"),
                r = i("wEEd"),
                m = i("kSMX"),
                s = i("9eSz"),
                d = i.n(s);
            function l(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            }
            const c = [2500, 1406],
                p = n.a.createRef();
            t.a = (e) => {
                let { desktop: t, mobile: i } = e;
                const { 0: o, 1: s } = Object(a.useState)(null),
                    { 0: d, 1: u } = Object(a.useState)(!1),
                    { 0: w, 1: x } = Object(a.useState)(!1),
                    { 0: b, 1: y } = Object(a.useState)(!1),
                    { 0: v, 1: I } = Object(a.useState)(!1),
                    { 0: O, 1: k } = Object(a.useState)(!1),
                    { 0: j, 1: E } = Object(a.useState)(!1),
                    { 0: F, 1: C } = Object(a.useState)(!1);
                Object(a.useEffect)(() => {
                    "undefined" != typeof window &&
                        (u("/services" === window.location.pathname || "/services/" === window.location.pathname),
                        x("/studio" === window.location.pathname || "/studio/" === window.location.pathname),
                        y("/agency" === window.location.pathname || "/agency/" === window.location.pathname),
                        I("/work" === window.location.pathname || "/work/" === window.location.pathname),
                        k("/blog" === window.location.pathname || "/blog/" === window.location.pathname),
                        E("/careers" === window.location.pathname || "/careers/" === window.location.pathname),
                        C("/join-us" === window.location.pathname || "/join-us/" === window.location.pathname));
                }, [d, w, v]);
                const N = n.a.useRef(),
                    z = n.a.useRef();
                Object(a.useEffect)(() => {
                    "undefined" != typeof window && s(window.innerWidth > 1024);
                }, []);
                const S = Object(a.useCallback)(() => {
                    if ("undefined" != typeof window) {
                        const i = new m.Renderer({ dpr: 2, alpha: !0 }),
                            { gl: a } = i;
                        p.current.appendChild(a.canvas), a.clearColor(0.1, 0.1, 0.1, 1);
                        let n = 1;
                        const o = new m.Vec2(-1),
                            r = new m.Vec2();
                        function e() {
                            let e, t;
                            const a = c[1] / c[0];
                            window.innerHeight / window.innerWidth < a ? ((e = 1), (t = window.innerHeight / window.innerWidth / a)) : ((e = (window.innerWidth / window.innerHeight) * a), (t = 1)),
                                (b.program.uniforms.res.value = new m.Vec4(window.innerWidth, window.innerHeight, e, t)),
                                i.setSize(window.innerWidth, window.innerHeight),
                                (n = window.innerWidth / window.innerHeight);
                        }
                        const s = new m.Flowmap(a, { falloff: 1, alpha: 0.3, dissipation: 0.94 }),
                            d = new m.Geometry(a, { position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) }, uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) } }),
                            h = new m.Texture(a, { minFilter: a.LINEAR, magFilter: a.LINEAR });
                        a.clear(a.COLOR_BUFFER_BIT);
                        const g = new Image();
                        let f, u;
                        (g.onload = () => {
                            (h.image = g), (x.uniforms.alpha.value = 1);
                        }),
                            (g.crossOrigin = "Anonymous"),
                            (g.src = "" + t);
                        const w = c[1] / c[0];
                        window.innerHeight / window.innerWidth < w ? ((f = 1), (u = window.innerHeight / window.innerWidth / w)) : ((f = (window.innerWidth / window.innerHeight) * w), (u = 1));
                        const x = new m.Program(a, {
                                vertex: "\nattribute vec2 uv;\nattribute vec2 position;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 0, 1);\n}",
                                fragment:
                                    "\nprecision highp float;\nprecision highp int;\nuniform sampler2D tWater;\nuniform sampler2D tFlow;\nuniform float uTime;\nvarying vec2 vUv;\nuniform float alpha;\nuniform vec4 res;\nvoid main() {\n  vec3 flow = texture2D(tFlow, vUv).rgb;\n  vec2 uv = .5 * gl_FragCoord.xy / res.xy ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n  myUV -= flow.xy * (0.15 * 0.7);\n  vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);\n  myUV2 -= flow.xy * (0.125 * 0.7);\n  vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);\n  myUV3 -= flow.xy * (0.10 * 0.7);\n  vec3 tex = texture2D(tWater, myUV).rgb;\n  vec3 tex2 = texture2D(tWater, myUV2).rgb;\n  vec3 tex3 = texture2D(tWater, myUV3).rgb;\n  gl_FragColor = vec4(tex.r, tex2.g, tex3.b, alpha);\n}",
                                uniforms: { uTime: { value: 0 }, tWater: { value: h }, res: { value: new m.Vec4(window.innerWidth, window.innerHeight, f, u) }, img: { value: new m.Vec2(c[0], c[1]) }, tFlow: s.uniform, alpha: { value: 0 } },
                            }),
                            b = new m.Mesh(a, { geometry: d, program: x });
                        let y;
                        window.addEventListener("resize", e, !1),
                            e(),
                            window.addEventListener(
                                "mousemove",
                                function (e) {
                                    e.changedTouches && e.changedTouches.length && ((e.x = e.changedTouches[0].pageX), (e.y = e.changedTouches[0].pageY));
                                    void 0 === e.x && ((e.x = e.pageX), (e.y = e.pageY));
                                    o.set(e.x / a.renderer.width, 1 - e.y / a.renderer.height), y || ((y = performance.now()), v.set(e.x, e.y));
                                    const t = e.x - v.x,
                                        i = e.y - v.y;
                                    v.set(e.x, e.y);
                                    const n = performance.now(),
                                        m = Math.max(35.4, n - y);
                                    (y = n), (r.x = (t / m) * 1.55), (r.y = (i / m) * 1.55), (r.needsUpdate = !0);
                                },
                                !1
                            );
                        const v = new m.Vec2();
                        z.current = requestAnimationFrame(function () {
                            r.needsUpdate || (o.set(0.15, 0.5), r.set(l(-250, 250), l(-140, 140)));
                            (r.needsUpdate = !0), s.velocity.lerp(r, r.len ? 0.15 : 0.1), s.update(), (x.uniforms.uTime.value = 1), i.render({ scene: b });
                        });
                        const I = (e) => {
                            (N.current = requestAnimationFrame(I)),
                                r.needsUpdate || (o.set(-1), r.set(0)),
                                (r.needsUpdate = !1),
                                (s.aspect = n),
                                s.mouse.copy(o),
                                s.velocity.lerp(r, r.len ? 0.15 : 0.1),
                                s.update(),
                                (x.uniforms.uTime.value = 0.01 * e),
                                i.render({ scene: b });
                        };
                        I();
                    }
                }, [t]);
                function T() {
                    s(window.innerWidth > 1024);
                }
                Object(a.useLayoutEffect)(
                    () => (
                        window.addEventListener("resize", T),
                        o && S(),
                        () => {
                            window.removeEventListener("resize", T), cancelAnimationFrame(N.current), cancelAnimationFrame(z.current);
                        }
                    ),
                    [S, o]
                );
                const P = Object(r.d)({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500, config: { mass: 5, tension: 500, friction: 100 } }),
                    W = Object(r.d)({ from: { opacity: 0, transform: "translate3d(0px,50px,0px)" }, to: { opacity: 1, transform: "translate3d(0px,0px,0px)" }, delay: 400, config: { mass: 5, tension: 500, friction: 100 } });
                return n.a.createElement(
                    h,
                    { className: o ? "desktop" : "no-desktop" },
                    o && n.a.createElement(g, { style: P, ref: p }),
                    !o && n.a.createElement(f, { style: W, loading: "eager", className: d ? "services" : w || b ? "studio" : v ? "work" : O ? "blog" : j || F ? "careers" : "", fluid: i })
                );
            };
            const h = o.d.section.withConfig({ displayName: "Outer", componentId: "sc-zqz4pp-0" })([
                    "position:relative;height:100vh;@media (max-width:1024px){height:90vh;}@media (max-width:1024px){height:auto;}&.no-desktop{display:flex;justify-content:center;align-items:flex-start;}",
                ]),
                g = Object(o.d)(r.a.div).withConfig({ displayName: "WrapCanvas", componentId: "sc-zqz4pp-1" })(["position:absolute;top:0;left:0;"]),
                f = Object(o.d)(Object(r.a)(d.a)).withConfig({ displayName: "MobileImage", componentId: "sc-zqz4pp-2" })([
                    "width:66%;margin:20rem auto 0 auto;@media (max-width:1024px){margin:20vh auto 0 auto;width:45%;}@media (max-width:650px){margin:16vh auto 0 auto;width:66%;}@media (max-width:650px) and (min-height:800px){margin:25vh auto 0 auto;}&.services{@media (max-width:1024px){margin:25vh auto 0 auto;width:75%;}@media (max-width:650px){margin:20vh auto 0 auto;width:80%;}}&.studio{@media (max-width:1024px){margin:20vh auto 0 auto;width:65%;}@media (max-width:650px){margin:20vh auto 0 auto;width:80%;}}&.work{@media (max-width:1024px){margin:20vh auto 0 auto;width:45%;}@media (max-width:650px){margin:20vh auto 0 auto;width:55%;}}&.blog{@media (max-width:650px){margin:20vh auto 0 auto;width:55%;}}",
                ]);
        },
        Oz93: function (e, t, i) {
            "use strict";
            var a = i("q1tI"),
                n = i.n(a),
                o = i("wEEd"),
                r = i("vOnD"),
                m = i("ciIH"),
                s = i.n(m),
                d = i("0Tit"),
                l = i.n(d),
                c = i("0w4E");
            t.a = (e) => {
                let { fluid: t, hover: i } = e;
                const { 0: r, 1: m } = Object(a.useState)(!1),
                    s = Object(a.useRef)(),
                    d = Object(o.d)({
                        from: { transform: "translate3d(0, 101%, 0)" },
                        to: { transform: r ? "translate3d(0, 0%, 0)" : "translate3d(0, 101%, 0)" },
                        config: { duration: 750, easing: r ? l()(0.1, 0.305, 0.24, 1) : l()(0.76, 0, 0.9, 0.69) },
                        delay: r ? 0 : 500,
                    }),
                    u = Object(o.d)({
                        from: { transform: "translate3d(0, -101%, 0)" },
                        to: { transform: r ? "translate3d(0, 0%, 0)" : "translate3d(0, -101%, 0)" },
                        config: { duration: 750, easing: r ? l()(0.1, 0.305, 0.24, 1) : l()(0.76, 0, 0.9, 0.69) },
                        delay: r ? 0 : 500,
                    });
                return n.a.createElement(
                    c.a,
                    { element: s.current, toggle: r, setToggle: m },
                    n.a.createElement(p, { ref: s }, n.a.createElement(h, { style: d }, n.a.createElement(g, { style: u, hover: i }, n.a.createElement(f, { fluid: t, decoding: "sync" }))))
                );
            };
            const p = Object(r.d)(o.a.div).withConfig({ displayName: "ImageContainer", componentId: "sc-1je450x-0" })(["width:100%;height:100%;overflow:hidden;will-change:transform;"]),
                h = Object(r.d)(o.a.div).withConfig({ displayName: "ImageWrapper", componentId: "sc-1je450x-1" })(["position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform;"]),
                g = Object(r.d)(o.a.div).withConfig({ displayName: "ImageInner", componentId: "sc-1je450x-2" })(
                    [
                        "position:absolute;top:0;left:0;width:100%;height:100%;will-change:transform;&:after{content:'';position:absolute;z-index:5;top:0;left:0;width:100%;height:100%;background-color:",
                        ";mix-blend-mode:screen;opacity:0;transition:opacity 0.25s ease-in-out;}&:hover:after{opacity:",
                        ";}",
                    ],
                    (e) => e.theme.colours.pink,
                    (e) => (e.hover ? 0.7 : 0)
                ),
                f = Object(r.d)(s.a).withConfig({ displayName: "ImageEl", componentId: "sc-1je450x-3" })(["position:absolute;height:100%;z-index:1;img{object-position:50% top !important;}"]);
        },
        i38J: function (e, t, i) {
            "use strict";
            i.r(t);
            var a = i("q1tI"),
                n = i.n(a),
                o = i("TJpk"),
                r = i.n(o),
                m = i("Bl7J"),
                s = i("Wbzz"),
                d = i("vOnD"),
                l = i("wEEd"),
                c = i("ciIH"),
                p = i.n(c),
                h = i("2b8/"),
                g = i("Dygr"),
                f = i("L8eV");
            var u = (e) => {
                let { hero: t, logos: i } = e;
                const o = Object(a.useRef)(),
                    { 0: r, 1: m } = Object(a.useState)(null),
                    { 0: s, 1: d } = Object(a.useContext)(h.a);
                Object(a.useEffect)(() => {
                    "undefined" != typeof window && m(window.innerWidth > 1024);
                }, []);
                const c = Object(l.d)({ from: { opacity: 0, transform: "translate3d(0px,50px,0px)" }, to: { opacity: 1, transform: "translate3d(0px,0px,0px)" }, delay: 1e3, config: { mass: 5, tension: 500, friction: 100 } }),
                    p = Object(l.d)({ from: { opacity: 0, transform: "translate3d(0px,50px,0px)" }, to: { opacity: 1, transform: "translate3d(0px,0px,0px)" }, delay: 1e3, config: { mass: 5, tension: 500, friction: 100 } });
                return n.a.createElement(
                    w,
                    null,
                    !r && n.a.createElement(g.a, { element: o.current, setToggle: d, location: "hero" }, n.a.createElement(x, { ref: o })),
                    n.a.createElement(
                        b,
                        null,
                        n.a.createElement(f.a, { mobile: t.imageMobile.imageFile.childImageSharp.fluid, desktop: t.image.imageFile.publicURL }),
                        n.a.createElement(y, null, n.a.createElement(l.a.h1, { style: c }, t.title), n.a.createElement(l.a.h2, { style: p, dangerouslySetInnerHTML: { __html: t.subtitle } }))
                    ),
                    n.a.createElement(
                        v,
                        null,
                        i.map((e, t) => n.a.createElement(I, { key: t }, n.a.createElement(O, { fluid: e.image.imageFile.childImageSharp.fluid })))
                    )
                );
            };
            const w = d.d.section.withConfig({ displayName: "Outer", componentId: "sc-nlnsui-0" })(["position:relative;min-height:100vh;height:auto;overflow:hidden;@media (max-width:1024px){height:auto;min-height:100vh;}"]),
                x = d.d.div.withConfig({ displayName: "TriggerButton", componentId: "sc-nlnsui-1" })(["position:absolute;top:20%;width:100%;height:1px;background-color:transparent;"]),
                b = d.d.div.withConfig({ displayName: "WrapHero", componentId: "sc-nlnsui-2" })(["position:relative;height:100%;"]),
                y = d.d.div.withConfig({ displayName: "WrapText", componentId: "sc-nlnsui-3" })(
                    [
                        "position:absolute;width:calc(50% - 12rem);height:auto;top:50%;right:12rem;transform:translateY(-50%);@media (max-width:1024px){position:relative;top:unset;left:0;width:80%;margin:5rem auto;transform:translateY(0);text-align:center;max-width:450px;}@media (max-width:650px){margin:5rem auto;width:90%;}h1{color:",
                        ";font-family:",
                        ";font-size:8rem;line-height:0.95;letter-spacing:-0.075rem;max-width:14ch;margin-bottom:25px;@media (max-width:650px){max-width:20ch;font-size:7.15rem;line-height:1.15;}}h2{p{color:",
                        ";font-family:",
                        ";font-weight:300;font-size:2.2rem;line-height:1.5;max-width:35ch;@media (max-width:650px){font-size:2.5rem;}strong{color:",
                        ";font-weight:300;}}}",
                    ],
                    (e) => e.theme.colours.darkGrey,
                    (e) => e.theme.fonts.sofia,
                    (e) => e.theme.colours.darkGrey,
                    (e) => e.theme.fonts.circular,
                    (e) => e.theme.colours.pink
                ),
                v = d.d.div.withConfig({ displayName: "WrapImageList", componentId: "sc-nlnsui-4" })([
                    "display:flex;align-items:center;position:absolute;left:5rem;bottom:5rem;width:575px;@media (max-width:1024px){display:none;}@media (max-width:650px){justify-content:space-between;}",
                ]),
                I = d.d.div.withConfig({ displayName: "ImageListWrap", componentId: "sc-nlnsui-5" })([
                    "width:150px;height:40px;margin-right:2.5rem;@media (max-width:650px){width:70px;}&:nth-child(2){height:45px !important;}&:nth-child(3){height:19px !important;}&:last-child{margin-right:0;}",
                ]),
                O = Object(d.d)(p.a).withConfig({ displayName: "ImageListItem", componentId: "sc-nlnsui-6" })(["width:100%;height:100%;& img{object-fit:contain !important;}"]);
            var k = i("Oz93"),
                j = i("iPCU"),
                E = i("8qrK"),
                F = i("6o+1"),
                C = i("0w4E");
            const N = d.d.section.withConfig({ displayName: "Outer", componentId: "sc-w607vw-0" })(["position:relative;margin:0 auto;@media (max-width:1260px){}@media (max-width:650px){}"]),
                z = d.d.div.withConfig({ displayName: "IntroductionBlock", componentId: "sc-w607vw-1" })([
                    "width:100%;margin-bottom:25rem;display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;@media (max-width:767px){width:100%;margin-bottom:8rem;}",
                ]),
                S = d.d.div.withConfig({ displayName: "Left", componentId: "sc-w607vw-2" })(
                    [
                        "position:relative;width:50%;",
                        " @media (max-width:769px){",
                        " width:100%;margin-bottom:8rem;}@media (max-width:650px){",
                        " height:50%;margin-bottom:8.5rem;}&::after{content:'';display:block;opacity:0;}> *{position:absolute;}",
                    ],
                    Object(E.a)(200, 200),
                    Object(E.a)(16, 11),
                    Object(E.a)(428, 389)
                ),
                T = d.d.div.withConfig({ displayName: "Right", componentId: "sc-w607vw-3" })([
                    "width:40%;margin-left:5%;@media (min-width:2000px){width:35%;max-width:850px;margin-left:5rem;}@media (max-width:769px){width:75%;margin-left:5rem;}@media (max-width:650px){width:100%;margin-left:0;}",
                ]),
                P = Object(d.d)(l.a.h2).withConfig({ displayName: "Title", componentId: "sc-w607vw-4" })(
                    [
                        "color:",
                        ";font-family:",
                        ";font-size:5.5rem;letter-spacing:-0.075rem;margin-left:2.5rem;max-width:14ch;@media (max-width:1024px){font-size:5.5rem;}@media (max-width:650px){font-size:5rem;margin:0 3rem;margin-bottom:4.5rem;}",
                    ],
                    (e) => e.theme.colours.darkGrey,
                    (e) => e.theme.fonts.sofia
                ),
                W = Object(d.d)(l.a.p).withConfig({ displayName: "MainContent", componentId: "sc-w607vw-5" })(
                    [
                        "color:",
                        ";font-family:",
                        ";font-weight:300;font-size:1.6rem;line-height:1.75;display:inline-block;margin-top:1rem;margin-left:2.5rem;@media (max-width:1024px){margin-top:1.5rem;font-size:1.85rem;line-height:1.9;}@media (max-width:650px){margin:0 3rem;font-size:2.25rem;line-height:1.9;}",
                    ],
                    (e) => e.theme.colours.darkGrey,
                    (e) => e.theme.fonts.circular
                );
            var L = (e) => {
                let { introduction: t } = e;
                const { 0: i, 1: o } = Object(a.useContext)(F.a),
                    { 0: r, 1: m } = Object(a.useState)(!1),
                    { 0: s, 1: d } = Object(a.useState)(!1),
                    { 0: c, 1: p } = Object(a.useState)(null),
                    h = Object(a.useRef)(),
                    g = Object(a.useRef)();
                Object(a.useEffect)(() => {
                    "undefined" != typeof window && p(window.innerWidth > 1024);
                }, []);
                const f = Object(l.d)({ opacity: r ? 1 : 0, config: { mass: 5, tension: 500, friction: 100 } }),
                    u = Object(l.d)({ opacity: s ? 1 : 0, config: { mass: 5, tension: 500, friction: 100 } });
                return n.a.createElement(
                    N,
                    null,
                    n.a.createElement(
                        z,
                        null,
                        n.a.createElement(
                            S,
                            null,
                            !t.video.mediaItemUrl || (!c && n.a.createElement(k.a, { fluid: t.image.imageFile.childImageSharp.fluid })),
                            t.video.mediaItemUrl && c && n.a.createElement(j.a, { video: t.video.mediaItemUrl })
                        ),
                        n.a.createElement(
                            T,
                            null,
                            n.a.createElement(C.a, { element: h.current, toggle: r, setToggle: m }, n.a.createElement(P, { style: f, ref: h }, t.title)),
                            n.a.createElement(C.a, { element: g.current, toggle: s, setToggle: d }, n.a.createElement(W, { style: u, ref: g }, t.text))
                        )
                    )
                );
            };
            function V() {
                return (V =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = arguments[t];
                            for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function D(e, t) {
                return (D =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            var R = new Map(),
                U = new WeakMap(),
                B = 0,
                _ = void 0;
            function M(e) {
                return Object.keys(e)
                    .sort()
                    .filter(function (t) {
                        return void 0 !== e[t];
                    })
                    .map(function (t) {
                        return t + "_" + ("root" === t ? ((i = e.root) ? (U.has(i) || ((B += 1), U.set(i, B.toString())), U.get(i)) : "0") : e[t]);
                        var i;
                    })
                    .toString();
            }
            function A(e, t, i, a) {
                if ((void 0 === i && (i = {}), void 0 === a && (a = _), void 0 === window.IntersectionObserver && void 0 !== a)) {
                    var n = e.getBoundingClientRect();
                    return t(a, { isIntersecting: a, target: e, intersectionRatio: "number" == typeof i.threshold ? i.threshold : 0, time: 0, boundingClientRect: n, intersectionRect: n, rootBounds: n }), function () {};
                }
                var o = (function (e) {
                        var t = M(e),
                            i = R.get(t);
                        if (!i) {
                            var a,
                                n = new Map(),
                                o = new IntersectionObserver(function (t) {
                                    t.forEach(function (t) {
                                        var i,
                                            o =
                                                t.isIntersecting &&
                                                a.some(function (e) {
                                                    return t.intersectionRatio >= e;
                                                });
                                        e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o),
                                            null == (i = n.get(t.target)) ||
                                                i.forEach(function (e) {
                                                    e(o, t);
                                                });
                                    });
                                }, e);
                            (a = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])), (i = { id: t, observer: o, elements: n }), R.set(t, i);
                        }
                        return i;
                    })(i),
                    r = o.id,
                    m = o.observer,
                    s = o.elements,
                    d = s.get(e) || [];
                return (
                    s.has(e) || s.set(e, d),
                    d.push(t),
                    m.observe(e),
                    function () {
                        d.splice(d.indexOf(t), 1), 0 === d.length && (s.delete(e), m.unobserve(e)), 0 === s.size && (m.disconnect(), R.delete(r));
                    }
                );
            }
            var H = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];
            function q(e) {
                return "function" != typeof e.children;
            }
            var G = (function (e) {
                var t, i;
                function n(t) {
                    var i;
                    return (
                        ((i = e.call(this, t) || this).node = null),
                        (i._unobserveCb = null),
                        (i.handleNode = function (e) {
                            i.node && (i.unobserve(), e || i.props.triggerOnce || i.props.skip || i.setState({ inView: !!i.props.initialInView, entry: void 0 })), (i.node = e || null), i.observeNode();
                        }),
                        (i.handleChange = function (e, t) {
                            e && i.props.triggerOnce && i.unobserve(), q(i.props) || i.setState({ inView: e, entry: t }), i.props.onChange && i.props.onChange(e, t);
                        }),
                        (i.state = { inView: !!t.initialInView, entry: void 0 }),
                        i
                    );
                }
                (i = e), ((t = n).prototype = Object.create(i.prototype)), (t.prototype.constructor = t), D(t, i);
                var o = n.prototype;
                return (
                    (o.componentDidUpdate = function (e) {
                        (e.rootMargin === this.props.rootMargin &&
                            e.root === this.props.root &&
                            e.threshold === this.props.threshold &&
                            e.skip === this.props.skip &&
                            e.trackVisibility === this.props.trackVisibility &&
                            e.delay === this.props.delay) ||
                            (this.unobserve(), this.observeNode());
                    }),
                    (o.componentWillUnmount = function () {
                        this.unobserve(), (this.node = null);
                    }),
                    (o.observeNode = function () {
                        if (this.node && !this.props.skip) {
                            var e = this.props,
                                t = e.threshold,
                                i = e.root,
                                a = e.rootMargin,
                                n = e.trackVisibility,
                                o = e.delay,
                                r = e.fallbackInView;
                            this._unobserveCb = A(this.node, this.handleChange, { threshold: t, root: i, rootMargin: a, trackVisibility: n, delay: o }, r);
                        }
                    }),
                    (o.unobserve = function () {
                        this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
                    }),
                    (o.render = function () {
                        if (!q(this.props)) {
                            var e = this.state,
                                t = e.inView,
                                i = e.entry;
                            return this.props.children({ inView: t, entry: i, ref: this.handleNode });
                        }
                        var n = this.props,
                            o = n.children,
                            r = n.as,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var i,
                                    a,
                                    n = {},
                                    o = Object.keys(e);
                                for (a = 0; a < o.length; a++) (i = o[a]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                                return n;
                            })(n, H);
                        return a.createElement(r || "div", V({ ref: this.handleNode }, m), o);
                    }),
                    n
                );
            })(a.Component);
            (G.displayName = "InView"), (G.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
            var Y = i("JQj0");
            const J = d.d.section.withConfig({ displayName: "Outer", componentId: "sc-bxmu61-0" })([""]),
                K = d.d.div.withConfig({ displayName: "StatementsBlock", componentId: "sc-bxmu61-1" })([
                    "width:100%;max-width:80%;margin:0 auto 15rem auto;display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;@media (max-width:767px){width:calc(100% - 6rem);max-width:calc(100% - 50px);margin:0 25px 10rem 25px;}",
                ]),
                X = Object(d.d)(l.a.div).withConfig({ displayName: "Statement", componentId: "sc-bxmu61-2" })(
                    [
                        "display:inline-block;margin-top:1rem;margin-bottom:16rem;@media (max-width:1024px){margin-top:1.5rem;}@media (max-width:650px){margin:0;}p{font-family:",
                        ";font-size:5.5rem;line-height:1.1;color:#373737;max-width:28ch;@media (max-width:1024px){font-size:3.85rem;line-height:1.25;}@media (max-width:650px){font-size:5rem;}strong{color:",
                        ";font-weight:300;}}",
                    ],
                    (e) => e.theme.fonts.sofia,
                    (e) => e.theme.colours.pink
                ),
                Q = Object(d.d)(l.a.div).withConfig({ displayName: "StatementList", componentId: "sc-bxmu61-3" })(["display:flex;flex-wrap:wrap;width:100%;height:100%;"]),
                Z = d.d.span.withConfig({ displayName: "StatementNumber", componentId: "sc-bxmu61-4" })(
                    ["position:absolute;top:1.2rem;left:-3rem;font-family:", ";letter-spacing:0.2rem;color:", ";font-size:1.4rem;@media (max-width:650px){left:-2.5rem;}"],
                    (e) => e.theme.fonts.circular,
                    (e) => e.theme.colours.pink
                ),
                $ = d.d.h4.withConfig({ displayName: "StatementTitle", componentId: "sc-bxmu61-5" })(["position:relative;font-family:", ";font-size:5.5rem;@media (max-width:650px){margin-bottom:2rem;}"], (e) => e.theme.fonts.sofia),
                ee = d.d.p.withConfig({ displayName: "StatementText", componentId: "sc-bxmu61-6" })(
                    ["font-family:", ";color:", ";font-size:2.2rem;@media (max-width:650px){font-size:2.58rem;margin-bottom:2.5rem;}"],
                    (e) => e.theme.fonts.circular,
                    (e) => e.theme.colours.darkGrey
                ),
                te = d.d.div.withConfig({ displayName: "Left", componentId: "sc-bxmu61-7" })(["width:35%;@media (max-width:1024px){width:100%;}"]),
                ie = Object(d.d)(l.a.div).withConfig({ displayName: "Right", componentId: "sc-bxmu61-8" })([
                    "position:absolute;width:45%;height:100vh;margin:0 auto;max-width:1366px;top:0;left:45%;z-index:-1;will-change:top;transform:translate(0%,0%);display:flex;align-items:center;img{width:100%;height:100%;border-radius:20px;}",
                ]),
                ae = Object(d.d)(l.a.div).withConfig({ displayName: "WrapText", componentId: "sc-bxmu61-9" })([
                    "position:relative;margin:5rem 0;padding:15rem 0;@media (max-width:1024px){margin:10rem 0;padding:0;div:first-of-type{display:flex;flex-direction:column;}p{max-width:50ch;}}@media (max-width:650px){margin:10rem 0;padding:0;}",
                ]),
                ne = Object(d.d)(l.a.div).withConfig({ displayName: "WrapImage", componentId: "sc-bxmu61-10" })(
                    [
                        "position:relative;width:100%;",
                        " border-radius:20px;box-shadow:0 33px 35px rgba(0,0,0,0.16);@media (max-width:1024px){",
                        " width:90%;margin-bottom:8rem;}@media (max-width:769px){",
                        " width:100%;margin-bottom:8rem;}&::after{content:'';display:block;}> *{position:absolute;width:100%;height:100%;top:0;left:0;}",
                    ],
                    Object(E.a)(572, 358),
                    Object(E.a)(354, 222),
                    Object(E.a)(354, 222)
                ),
                oe = d.d.div.withConfig({ displayName: "ImgWrap", componentId: "sc-bxmu61-11" })(["opacity:0;transition:opacity 0.35s ease-in-out;&.active{opacity:1;}"]),
                re = d.d.div.withConfig({ displayName: "WrapImageMobile", componentId: "sc-bxmu61-12" })(
                    [
                        "position:relative;width:100%;",
                        " display:none;@media (max-width:1024px){",
                        " width:100%;margin-bottom:8rem;border-radius:10px;filter:drop-shadow(0 10px 5px rgba(0,0,0,0.15));display:block;}&::after{content:'';display:block;}> *{position:absolute;border-radius:10px;}",
                    ],
                    Object(E.a)(572, 358),
                    Object(E.a)(354, 222)
                );
            var me = (e) => {
                let { statements: t } = e;
                const { 0: i, 1: o } = Object(a.useContext)(F.a),
                    { 0: r, 1: m } = Object(a.useState)(!1),
                    { 0: s, 1: d } = Object(a.useState)(0),
                    { 0: c, 1: p } = Object(a.useState)(!1),
                    { 0: h, 1: g } = Object(a.useState)(!1),
                    { 0: f } = Object(a.useContext)(Y.a),
                    { 0: u, 1: w } = Object(a.useState)(null),
                    x = Object(a.useRef)(),
                    b = Object(a.useRef)();
                Object(a.useEffect)(() => {
                    "undefined" != typeof window && w(window.innerWidth > 1024);
                }, []),
                    Object(a.useEffect)(() => {
                        const e = (e) => {
                            let { offset: t = 0 } = e;
                            b.current && (b.current.style.transform = "translateY(" + t.y + "px)");
                        };
                        return (
                            f && f.addListener((t) => e(t)),
                            function () {
                                f && f.removeListener((t) => e(t));
                            }
                        );
                    }, [f]);
                const y = Object(l.d)({ opacity: r ? 1 : 0, config: { mass: 5, tension: 500, friction: 100 } }),
                    v = Object(l.d)({ opacity: h ? 1 : 0, from: { opacity: 0 }, config: { mass: 3, tension: 500, friction: 50 } });
                Object(l.d)({ opacity: c ? 1 : 0, from: { opacity: 0 }, config: { mass: 3, tension: 500, friction: 50 } });
                return n.a.createElement(
                    J,
                    null,
                    n.a.createElement(
                        K,
                        null,
                        n.a.createElement(C.a, { element: x.current, toggle: r, setToggle: m }, n.a.createElement(X, { style: y, ref: x, dangerouslySetInnerHTML: { __html: t.statement } })),
                        n.a.createElement(
                            Q,
                            null,
                            n.a.createElement(
                                G,
                                {
                                    as: "div",
                                    threshold: 0.35,
                                    onChange: (e, t) => {
                                        g(!!e);
                                    },
                                },
                                n.a.createElement(
                                    te,
                                    null,
                                    t.statementList.map((e, t) =>
                                        n.a.createElement(
                                            ae,
                                            null,
                                            n.a.createElement(
                                                G,
                                                {
                                                    as: "div",
                                                    threshold: 1,
                                                    onChange: (e, i) => {
                                                        e &&
                                                            (p(!1),
                                                            setTimeout(() => {
                                                                d(t), p(!0);
                                                            }, 150));
                                                    },
                                                },
                                                n.a.createElement($, null, n.a.createElement(Z, null, "0" + (t + 1)), e.title),
                                                n.a.createElement(ee, null, e.text),
                                                n.a.createElement(re, null, n.a.createElement(k.a, { fluid: e.image.imageFile.childImageSharp.fluid }))
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    u &&
                        n.a.createElement(
                            ie,
                            { style: v, ref: b },
                            n.a.createElement(
                                ne,
                                null,
                                t.statementList.map((e, t) => n.a.createElement(oe, { className: s === t ? "active" : "" }, n.a.createElement(k.a, { fluid: e.image.imageFile.childImageSharp.fluid })))
                            )
                        )
                );
            };
            const se = d.d.section.withConfig({ displayName: "Outer", componentId: "sc-1au5pu1-0" })(["position:relative;margin:0 auto;"]),
                de = d.d.div.withConfig({ displayName: "ServicesBlock", componentId: "sc-1au5pu1-1" })([
                    "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;@media (max-width:767px){width:100%;height:auto;margin-bottom:10rem;}",
                ]),
                le = d.d.h4.withConfig({ displayName: "SmallTitle", componentId: "sc-1au5pu1-2" })(
                    [
                        "color:",
                        ";font-family:",
                        ";font-weight:700;font-size:1.2rem;letter-spacing:0.22rem;text-transform:uppercase;margin-bottom:4rem;@media (max-width:1024px){font-size:1.5rem;}@media (max-width:650px){margin-top:0;font-size:1.7rem;}",
                    ],
                    (e) => e.theme.colours.white,
                    (e) => e.theme.fonts.circular
                ),
                ce = d.d.div.withConfig({ displayName: "Left", componentId: "sc-1au5pu1-3" })(["width:40%;@media (max-width:769px){width:100%;}"]),
                pe = d.d.div.withConfig({ displayName: "Right", componentId: "sc-1au5pu1-4" })(["position:relative;width:55%;@media (max-width:769px){width:100%;height:auto;}"]),
                he = Object(d.d)(l.a.div).withConfig({ displayName: "ServicesList", componentId: "sc-1au5pu1-5" })([
                    "position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;width:100%;max-width:80%;height:100%;@media (max-width:769px){justify-content:center;display:block;}",
                ]),
                ge = Object(d.d)(l.a.h3).withConfig({ displayName: "ServiceTitle", componentId: "sc-1au5pu1-6" })(
                    [
                        "position:relative;color:",
                        ";font-family:",
                        ";font-size:5.5rem;font-weight:700;letter-spacing:-0.2rem;margin-bottom:3rem;cursor:pointer;opacity:0.2;transition:opacity 0.3s ease,color 0.3s ease;&.active{color:",
                        ";opacity:1;}",
                    ],
                    (e) => e.theme.colours.black,
                    (e) => e.theme.fonts.sofia,
                    (e) => e.theme.colours.white
                ),
                fe = Object(d.d)(l.a.div).withConfig({ displayName: "ServiceItem", componentId: "sc-1au5pu1-7" })(
                    [
                        "position:absolute;top:50%;right:0;transform:translateY(-50%);opacity:0;transition:opacity 0.3s ease,color 0.3s ease;&.active{color:",
                        ";opacity:1;@media (max-width:769px){display:block;}}@media (max-width:769px){position:relative;top:0;transform:translateY(0);transition:none;display:none;}",
                    ],
                    (e) => e.theme.colours.white
                ),
                ue = d.d.div.withConfig({ displayName: "WrapImage", componentId: "sc-1au5pu1-8" })(
                    [
                        "position:relative;width:100%;",
                        " &:before{padding-top:0 !important;}img{position:absolute;top:0;left:0;width:100%;height:100%;}@media (max-width:769px){margin-top:5rem;width:100%;&:before{padding-top:0 !important;}img{position:absolute;top:0;left:0;width:100%;height:100%;}}> *{position:absolute;}",
                    ],
                    Object(E.a)(572, 371)
                ),
                we = d.d.h5.withConfig({ displayName: "ServiceText", componentId: "sc-1au5pu1-9" })(
                    ["font-family:", ";font-weight:300;font-size:1.8rem;line-height:1.75;margin-top:5rem;@media (max-width:769px){margin-top:2.5rem;font-size:2.2rem;}"],
                    (e) => e.theme.fonts.circular
                ),
                xe = d.d.div.withConfig({ displayName: "WrapImageBg", componentId: "sc-1au5pu1-10" })(
                    ["width:100%;height:100%;", " z-index:-1;@media (max-width:769px){", " width:100%;}&::after{content:'';display:block;}"],
                    Object(E.a)(572, 360),
                    Object(E.a)(428, 950)
                ),
                be = Object(d.d)(Object(l.a)(s.Link)).withConfig({ displayName: "ServicesButton", componentId: "sc-1au5pu1-11" })(
                    [
                        "background:transparent;border:0.2rem solid ",
                        ";padding:1.8rem 3.25rem;color:",
                        ";font-family:",
                        ";font-size:1.2rem;font-weight:700;text-transform:uppercase;text-decoration:none;letter-spacing:0.1rem;border-radius:3rem;margin-top:2.5rem;min-width:20rem;text-align:center;display:inline-block;transition:background-color 0.25s ease,color 0.25s ease;@media (max-width:769px){display:none;}&:hover{background-color:",
                        ";color:",
                        ";}",
                    ],
                    (e) => e.theme.colours.white,
                    (e) => e.theme.colours.white,
                    (e) => e.theme.fonts.circular,
                    (e) => e.theme.colours.white,
                    (e) => e.theme.colours.pink
                ),
                ye = Object(d.d)(Object(l.a)(s.Link)).withConfig({ displayName: "ServicesButtonMobile", componentId: "sc-1au5pu1-12" })(
                    [
                        "background:transparent;border:0.2rem solid ",
                        ";padding:1.8rem 3.25rem;color:",
                        ";font-family:",
                        ";font-size:1.2rem;font-weight:700;text-transform:uppercase;text-decoration:none;letter-spacing:0.1rem;border-radius:3rem;margin-top:2.5rem;min-width:20rem;text-align:center;display:none;transition:background-color 0.25s ease,color 0.25s ease;@media (max-width:769px){display:inline-block;font-size:1.7rem;border-radius:5rem;margin-top:2.5rem;padding:2.5rem 6rem;}&:hover{background-color:",
                        ";color:",
                        ";}",
                    ],
                    (e) => e.theme.colours.white,
                    (e) => e.theme.colours.white,
                    (e) => e.theme.fonts.circular,
                    (e) => e.theme.colours.white,
                    (e) => e.theme.colours.pink
                );
            var ve = (e) => {
                let { services: t } = e;
                const { 0: i, 1: o } = Object(a.useContext)(F.a),
                    { 0: r, 1: m } = Object(a.useState)(!0),
                    { 0: d, 1: c } = Object(a.useState)(0),
                    { 0: h, 1: g } = Object(a.useState)(null);
                Object(a.useEffect)(() => {
                    "undefined" != typeof window && g(window.innerWidth > 1024);
                }, []);
                Object(l.d)({ opacity: r ? 1 : 0, config: { mass: 5, tension: 500, friction: 80 } });
                const f = Object(l.d)({ from: { opacity: 0, transform: "translate(0px,50px)" }, to: { opacity: 1, transform: "translate(0px,0px)" }, delay: 1100, config: { mass: 5, tension: 500, friction: 100 } });
                return n.a.createElement(
                    se,
                    null,
                    n.a.createElement(
                        de,
                        null,
                        n.a.createElement(
                            he,
                            null,
                            n.a.createElement(
                                ce,
                                null,
                                n.a.createElement(le, null, t.smallTitle),
                                t.serviceList.map((e, t) =>
                                    n.a.createElement(
                                        ge,
                                        {
                                            onClick: () => {
                                                m(!1),
                                                    setTimeout(() => {
                                                        m(!0), c(t);
                                                    }, 200);
                                            },
                                            className: " " + (t === d ? "active" : ""),
                                        },
                                        e.title
                                    )
                                ),
                                n.a.createElement(
                                    be,
                                    {
                                        style: f,
                                        to: t.buttonLink,
                                        onClick: (e) => {
                                            e.preventDefault(),
                                                o(!0),
                                                setTimeout(() => {
                                                    Object(s.navigate)(t.buttonLink), o(!1);
                                                }, 500);
                                        },
                                    },
                                    t.buttonText
                                )
                            ),
                            n.a.createElement(
                                pe,
                                null,
                                t.serviceList.map((e, t) =>
                                    n.a.createElement(
                                        fe,
                                        { className: " " + (t === d ? "active" : ""), key: e.title },
                                        n.a.createElement(ue, null, n.a.createElement(p.a, { fluid: e.image.imageFile.childImageSharp.fluid })),
                                        n.a.createElement(we, null, e.text)
                                    )
                                )
                            ),
                            n.a.createElement(
                                ye,
                                {
                                    style: f,
                                    to: t.buttonLink,
                                    onClick: (e) => {
                                        e.preventDefault(),
                                            o(!0),
                                            setTimeout(() => {
                                                Object(s.navigate)(t.buttonLink), o(!1);
                                            }, 500);
                                    },
                                },
                                t.buttonText
                            )
                        )
                    ),
                    n.a.createElement(xe, null, n.a.createElement(k.a, { fluid: t.background.imageFile.childImageSharp.fluid }))
                );
            };
            const Ie = d.d.section.withConfig({ displayName: "Outer", componentId: "sc-79f8bw-0" })(["position:relative;margin:0 auto;background-color:#242424;transition:background-color 0.35s ease-in-out;"]),
                Oe = d.d.div.withConfig({ displayName: "WorkBlock", componentId: "sc-79f8bw-1" })(["width:100%;height:100%;"]),
                ke = d.d.div.withConfig({ displayName: "IntroWork", componentId: "sc-79f8bw-2" })(
                    [
                        "display:block;width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;padding-top:15rem;margin:0 auto 10rem auto;max-width:",
                        ";@media (max-width:650px){max-width:calc(100% - 50px);margin:0 auto;padding-top:12rem;}",
                    ],
                    (e) => e.theme.sizes.maxWidth
                ),
                je = Object(d.d)(l.a.div).withConfig({ displayName: "WrapImg", componentId: "sc-79f8bw-3" })([
                    "width:41%;margin-bottom:2.5rem;@media (min-width:1800px){margin-bottom:0;}@media (max-width:650px){width:100%;display:flex;justify-content:center;margin-bottom:5rem;}img{width:80%;margin-right:0;float:right;@media (max-width:1024px){width:90%;}@media (max-width:650px){width:80%;}}",
                ]),
                Ee = d.d.div.withConfig({ displayName: "WrapText", componentId: "sc-79f8bw-4" })([
                    "margin-bottom:-20%;width:45%;@media (min-width:2100px){width:40%;max-width:850px;}@media (min-width:1800px){margin-bottom:-20rem;}@media (max-width:1260px){margin-bottom:-10rem;}@media (max-width:1024px){width:48%;}@media (max-width:650px){width:100%;margin-bottom:0;}",
                ]),
                Fe = d.d.section.withConfig({ displayName: "WorkFeatured", componentId: "sc-79f8bw-5" })(
                    [
                        "display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;margin:0 auto;max-width:",
                        ";padding-bottom:10rem;padding-top:1rem;@media (max-width:650px){max-width:calc(100% - 50px);margin:5rem auto;padding-bottom:5rem;}",
                    ],
                    (e) => e.theme.sizes.maxWidth
                ),
                Ce = d.d.div.withConfig({ displayName: "WrapWorkImage", componentId: "sc-79f8bw-6" })(["position:relative;", "{top:0;left:0;}"], p.a),
                Ne = Object(d.d)(s.Link).withConfig({ displayName: "WorkItem", componentId: "sc-79f8bw-7" })(
                    [
                        "width:calc(49% - 2rem);@media (max-width:769px){width:47%;}&:hover h2{color:",
                        ";}",
                        "{",
                        "}@media (max-width:650px){width:100%;padding:0;margin-bottom:5rem;&:nth-child(odd){width:100%;",
                        "{width:100%;padding:0;",
                        "}}&:nth-child(even){width:100%;",
                        "{",
                        " width:100%;padding:0;}}}@media (min-width:650px){&:nth-child(4n + 1){width:42%;padding:0 1rem;margin-bottom:5rem;@media (max-width:650px){width:100%;margin-bottom:5rem;}",
                        "{",
                        "}}&:nth-child(4n){width:42%;padding:0 1rem;margin-bottom:5rem;@media (max-width:650px){width:100%;margin-bottom:5rem;}",
                        "{",
                        "}}}@media (min-width:700px){&:nth-child(4n + 1){width:47%;padding:0 1rem;margin-bottom:5rem;@media (max-width:769px){width:47%;margin-bottom:5rem;}",
                        "{",
                        "}}&:nth-child(4n){width:47%;padding:0 1rem;margin-bottom:5rem;@media (max-width:769px){width:47%;margin-bottom:5rem;}",
                        "{",
                        "}}}",
                    ],
                    (e) => e.theme.colours.pink,
                    Ce,
                    Object(E.a)(537, 469),
                    Ce,
                    Object(E.a)(537, 469),
                    Ce,
                    Object(E.a)(537, 469),
                    Ce,
                    Object(E.a)(474, 658),
                    Ce,
                    Object(E.a)(474, 658),
                    Ce,
                    Object(E.a)(474, 658),
                    Ce,
                    Object(E.a)(474, 658)
                ),
                ze = d.d.div.withConfig({ displayName: "ItemDesc", componentId: "sc-79f8bw-8" })(
                    [
                        "margin-top:2.5rem;span{color:",
                        ";font-family:",
                        ";font-weight:700;font-size:1.2rem;letter-spacing:0.22rem;text-transform:uppercase;margin-right:1.5rem;display:inline-block;line-height:1.75;@media (max-width:1024px){font-size:1.5rem;}@media (max-width:650px){margin-left:0;font-size:1.75rem;}}h2{color:#fff;font-family:",
                        ";font-size:4.5rem;letter-spacing:-0.075rem;transition:color 0.25s ease;margin-top:1rem;@media (max-width:650px){margin-top:2rem;font-size:5rem;}}p{color:#fff;font-family:",
                        ";font-weight:300;font-size:1.6rem;@media (max-width:1024px){font-size:2rem;}@media (max-width:650px){margin-left:0;font-size:2.2rem;}}",
                    ],
                    (e) => e.theme.colours.pink,
                    (e) => e.theme.fonts.circular,
                    (e) => e.theme.fonts.sofia,
                    (e) => e.theme.fonts.circular
                ),
                Se = Object(d.d)(l.a.h2).withConfig({ displayName: "Title", componentId: "sc-79f8bw-9" })(
                    [
                        "color:#fff;font-family:",
                        ";font-size:8rem;letter-spacing:-0.075rem;margin-left:2.5rem;margin-top:2.5rem;margin-bottom:3rem;@media (max-width:1024px){line-height:1.25;}@media (max-width:650px){margin-left:0;font-size:7rem;text-align:center;}",
                    ],
                    (e) => e.theme.fonts.sofia
                );
            var Te = (e) => {
                let { work: t } = e;
                const { 0: i, 1: o } = Object(a.useContext)(F.a),
                    { 0: r, 1: m } = Object(a.useState)(!1),
                    { 0: d, 1: c } = Object(a.useState)(!1),
                    { 0: p, 1: h } = Object(a.useState)(),
                    g = Object(a.useRef)();
                Object(a.useEffect)(() => {
                    "undefined" != typeof window && h(window.innerWidth > 1024);
                }, []);
                const f = Object(l.d)({ opacity: r ? 1 : 0, config: { mass: 5, tension: 500, friction: 100 } }),
                    u = Object(l.d)({ opacity: d ? 1 : 0, config: { mass: 5, tension: 500, friction: 100 } });
                return n.a.createElement(
                    Ie,
                    null,
                    n.a.createElement(
                        Oe,
                        null,
                        n.a.createElement(
                            ke,
                            null,
                            n.a.createElement(C.a, { element: g.current, toggle: r, setToggle: m }, n.a.createElement(je, { style: f, ref: g }, n.a.createElement("img", { src: t.image.sourceUrl, alt: t.image.altText }))),
                            n.a.createElement(Ee, null, n.a.createElement(C.a, { element: g.current, toggle: d, setToggle: c }, n.a.createElement(Se, { style: u }, " ", t.title, " ")))
                        ),
                        n.a.createElement(
                            Fe,
                            null,
                            t.featuredWork.map((e, t) =>
                                n.a.createElement(
                                    Ne,
                                    {
                                        key: e.slug,
                                        to: "/work/" + e.slug,
                                        onClick: (t) => {
                                            t.preventDefault(),
                                                o(!0),
                                                setTimeout(() => {
                                                    Object(s.navigate)("/work/" + e.slug), o(!1);
                                                }, 500);
                                        },
                                    },
                                    n.a.createElement(
                                        Ce,
                                        null,
                                        "image" === e.workFields.featuredInfos.imageOrVideo &&
                                            n.a.createElement(
                                                n.a.Fragment,
                                                null,
                                                !0 === p &&
                                                    n.a.createElement(k.a, {
                                                        style: { position: "absolute" },
                                                        fluid:
                                                            (0 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (3 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (4 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (7 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (8 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (11 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (12 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (15 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (16 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (19 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (20 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (223 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (24 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (27 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (28 === t && e.workFields.featuredInfos.imagePortrait) ||
                                                            (31 === t && e.workFields.featuredInfos.imagePortrait)
                                                                ? e.workFields.featuredInfos.imagePortrait.imageFile.childImageSharp.fluid
                                                                : e.workFields.featuredInfos.image.imageFile.childImageSharp.fluid,
                                                        alt: e.workFields.featuredInfos.image.altText,
                                                        hover: "true",
                                                    }),
                                                !0 == !p &&
                                                    n.a.createElement(k.a, {
                                                        style: { position: "absolute" },
                                                        fluid: e.workFields.featuredInfos.image.imageFile.childImageSharp.fluid,
                                                        alt: e.workFields.featuredInfos.image.altText,
                                                        hover: "true",
                                                    })
                                            ),
                                        "video" === e.workFields.featuredInfos.imageOrVideo &&
                                            n.a.createElement(
                                                n.a.Fragment,
                                                null,
                                                !0 === p &&
                                                    n.a.createElement(j.a, {
                                                        video:
                                                            (0 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (3 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (4 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (7 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (8 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (11 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (12 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (15 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (16 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (19 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (20 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (223 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (24 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (27 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (28 === t && e.workFields.featuredInfos.videoPortrait) ||
                                                            (31 === t && e.workFields.featuredInfos.videoPortrait)
                                                                ? e.workFields.featuredInfos.videoPortrait.mediaItemUrl
                                                                : e.workFields.featuredInfos.videoSquare.mediaItemUrl,
                                                        alt: e.workFields.featuredInfos.image.altText,
                                                        hover: "true",
                                                    }),
                                                !0 == !p &&
                                                    n.a.createElement(k.a, {
                                                        style: { position: "absolute" },
                                                        fluid: e.workFields.featuredInfos.videoImageFallback.imageFile.childImageSharp.fluid,
                                                        alt: e.workFields.featuredInfos.image.altText,
                                                        hover: "true",
                                                    })
                                            )
                                    ),
                                    n.a.createElement(
                                        ze,
                                        null,
                                        e.categories.nodes.map((e, t) => n.a.createElement("span", { key: t }, e.name, " ")),
                                        n.a.createElement("h2", null, e.workFields.featuredInfos.title),
                                        n.a.createElement("p", null, e.workFields.featuredInfos.subtitle)
                                    )
                                )
                            )
                        )
                    )
                );
            };
            const Pe = d.d.section.withConfig({ displayName: "Outer", componentId: "sc-ewgira-0" })(["position:relative;margin:0 auto;"]),
                We = d.d.div.withConfig({ displayName: "ClientBlock", componentId: "sc-ewgira-1" })([
                    "width:100%;margin-bottom:2.5rem;padding:25rem 0 12.5rem 0;@media (max-width:1024px){width:80%;margin:0 auto;padding:5rem 0;}@media (max-width:650px){width:100%;padding:5rem 0;}",
                ]),
                Le = d.d.div.withConfig({ displayName: "IntroClient", componentId: "sc-ewgira-2" })(
                    ["display:block;width:100%;max-width:", ";margin:0 auto;@media (max-width:1024px){margin:5rem auto;max-width:100%;}@media (max-width:767px){margin:5rem auto;}"],
                    (e) => e.theme.sizes.maxWidth
                ),
                Ve = Object(d.d)(l.a.h2).withConfig({ displayName: "Title", componentId: "sc-ewgira-3" })(
                    [
                        "color:var(--darkgrey);font-family:",
                        ";font-size:5.5rem;letter-spacing:-0.075rem;margin-bottom:8rem;text-align:center;@media (max-width:1024px){font-size:5.5rem;margin-left:0;margin-bottom:4rem;}@media (max-width:650px){font-size:7rem;margin-left:3.5rem;margin-bottom:5rem;text-align:left;}",
                    ],
                    (e) => e.theme.fonts.sofia
                ),
                De = d.d.div.withConfig({ displayName: "ClientFeatured", componentId: "sc-ewgira-4" })([
                    "display:flex;flex-wrap:wrap;justify-content:center;width:100%;max-width:125rem;margin:0 auto;@media (max-width:1024px){justify-content:space-between;}@media (max-width:650px){justify-content:space-around;width:calc(100% - 7rem);padding:0;}",
                ]),
                Re = Object(d.d)(l.a.div).withConfig({ displayName: "ClientItem", componentId: "sc-ewgira-5" })([
                    "width:14.5%;margin:2rem 2rem 4rem 2rem;height:60px;display:flex;justify-content:center;align-items:center;@media (max-width:1024px){width:11%;}@media (max-width:650px){width:20%;}img{max-height:100%;max-width:70%;margin-bottom:0;@media (max-width:650px){max-width:100%;}}",
                ]);
            var Ue = (e) => {
                let { clients: t, intro: i } = e;
                const { 0: o, 1: r } = Object(a.useState)(!1),
                    { 0: m, 1: s } = Object(a.useState)(!1),
                    { 0: d, 1: c } = Object(a.useState)(),
                    p = Object(a.useRef)(),
                    h = Object(a.useRef)();
                Object(a.useEffect)(() => {
                    "undefined" != typeof window && c(window.innerWidth > 1024);
                }, []);
                const g = Object(l.d)({ opacity: o ? 1 : 0, config: { mass: 5, tension: 500, friction: 100 } }),
                    f = Object(l.f)(t.edges.length, { opacity: m ? 1 : 0, from: { opacity: 0 }, config: { mass: 1, tension: 2500, friction: 175 }, delay: m ? 300 : 50 });
                return n.a.createElement(
                    Pe,
                    null,
                    n.a.createElement(
                        We,
                        null,
                        n.a.createElement(Le, null, n.a.createElement(C.a, { element: p.current, toggle: o, setToggle: r }, n.a.createElement(Ve, { style: g, ref: p }, i.title))),
                        n.a.createElement(
                            C.a,
                            { element: h.current, toggle: m, setToggle: s },
                            n.a.createElement(
                                De,
                                { ref: h },
                                f.map((e, i) => {
                                    let { ...a } = e;
                                    const o = t.edges[i];
                                    return n.a.createElement(Re, { style: { ...a }, key: i }, n.a.createElement("img", { src: o.node.clientFields.featuredInfos.logo.imageFile.publicURL, alt: "" }));
                                })
                            )
                        )
                    )
                );
            };
            const Be = d.d.section.withConfig({ displayName: "Outer", componentId: "sc-dgaymv-0" })(["position:relative;margin:0 auto;"]),
                _e = d.d.div.withConfig({ displayName: "RelatedBlock", componentId: "sc-dgaymv-1" })([
                    "width:100%;margin-bottom:2.5rem;padding:12.5rem 0;@media (max-width:1024px){width:80%;margin:0 auto;padding:1rem 0 10rem 0;}@media (max-width:650px){width:100%;padding:1rem 0 5rem 0;}",
                ]),
                Me = d.d.div.withConfig({ displayName: "IntroRelated", componentId: "sc-dgaymv-2" })(
                    ["display:block;width:100%;max-width:", ";margin:0 auto;@media (max-width:1024px){margin:5rem auto;max-width:100%;}@media (max-width:767px){margin:5rem auto;}"],
                    (e) => e.theme.sizes.maxWidth
                ),
                Ae = Object(d.d)(l.a.h2).withConfig({ displayName: "Title", componentId: "sc-dgaymv-3" })(
                    [
                        "color:",
                        ";font-family:",
                        ";font-size:5.5rem;letter-spacing:-0.075rem;margin-bottom:4rem;@media (max-width:1024px){font-size:5.5rem;margin-left:0;margin-bottom:4rem;}@media (max-width:650px){font-size:7rem;margin-left:3.5rem;margin-bottom:5rem;}",
                    ],
                    (e) => e.theme.colours.darkGrey,
                    (e) => e.theme.fonts.sofia
                ),
                He = d.d.div.withConfig({ displayName: "BlogFeatured", componentId: "sc-dgaymv-4" })([
                    "display:flex;flex-wrap:wrap;justify-content:flex-start;margin:0 auto;max-width:80%;width:100%;@media (max-width:1024px){max-width:100%;}@media (max-width:650px){max-width:calc(100% - 50px);}",
                ]),
                qe = d.d.div.withConfig({ displayName: "WrapItem", componentId: "sc-dgaymv-5" })(["width:100%;&:hover h2{color:", ";}"], (e) => e.theme.colours.pink),
                Ge = d.d.div.withConfig({ displayName: "WrapBlogImage", componentId: "sc-dgaymv-6" })(["position:relative;"]),
                Ye = d.d.div.withConfig({ displayName: "ItemDesc", componentId: "sc-dgaymv-7" })(
                    [
                        "padding:2.5rem;span{color:",
                        ";font-family:",
                        ";font-weight:700;letter-spacing:0.15rem;font-size:1rem;text-transform:uppercase;margin-bottom:0.5rem;margin-right:1.5rem;line-height:1.75;@media (max-width:650px){margin-left:0;font-size:1.75rem;}&:last-child(){margin-right:0;}}h2{color:",
                        ";font-family:",
                        ";font-size:2.5rem;line-height:1.33;letter-spacing:-0.075rem;margin-top:1.2rem;margin-bottom:0;transition:color 0.25s ease;@media (max-width:650px){font-size:3.15rem;margin-top:2rem;}}",
                    ],
                    (e) => e.theme.colours.pink,
                    (e) => e.theme.fonts.circular,
                    (e) => e.theme.colours.grey,
                    (e) => e.theme.fonts.sofia
                ),
                Je = Object(d.d)(Object(l.a)(s.Link)).withConfig({ displayName: "BlogItem", componentId: "sc-dgaymv-8" })(
                    [
                        "width:30%;margin-bottom:6rem;border:1px solid ",
                        ";margin-right:5%;transition:background-color 0.5s ease;&:nth-child(3n){margin-right:0;}",
                        "{",
                        "}@media (max-width:1024px){width:47.5%;margin-right:2.5%;margin-bottom:2.5rem;&:nth-child(2n){margin-right:0;}&:nth-child(3n){margin-right:2.5%;}}@media (max-width:750px){width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}}img{transition:transform 0.5s ease !important;}&:hover{background-color:",
                        ";& ",
                        " span{color:",
                        ";}& ",
                        " h2{color:",
                        ";}img{transform:scale(1.1);}}",
                    ],
                    (e) => e.theme.colours.lightGrey,
                    Ge,
                    Object(E.a)(344, 195),
                    (e) => e.theme.colours.pink,
                    Ye,
                    (e) => e.theme.colours.darkGrey,
                    Ye,
                    (e) => e.theme.colours.white
                ),
                Ke = d.d.div.withConfig({ displayName: "WrapButtonAll", componentId: "sc-dgaymv-9" })(["width:100%;display:flex;justify-content:center;align-item:center;"]),
                Xe = Object(d.d)(Object(l.a)(s.Link)).withConfig({ displayName: "AllArticlesButton", componentId: "sc-dgaymv-10" })(
                    [
                        "background:transparent;border:0.2rem solid ",
                        ";padding:1.8rem 3.25rem;color:",
                        ";font-family:",
                        ";font-size:1.2rem;font-weight:700;text-transform:uppercase;text-decoration:none;letter-spacing:0.1rem;border-radius:3rem;margin-top:3.5rem;display:inline-block;min-width:20rem;text-align:center;transition:background-color 0.25s ease,color 0.25s ease;backface-visibility:hidden;@media (max-width:1024px){margin-top:3rem;font-size:1.5rem;border-radius:5rem;padding:2.5rem 6rem;}@media (max-width:650px){margin-top:4.5rem;margin-left:0;font-size:1.7rem;border-radius:5rem;padding:2.5rem 6rem;}&:hover{background-color:",
                        ";color:",
                        ";}",
                    ],
                    (e) => e.theme.colours.pink,
                    (e) => e.theme.colours.pink,
                    (e) => e.theme.fonts.circular,
                    (e) => e.theme.colours.pink,
                    (e) => e.theme.colours.white
                );
            var Qe = (e) => {
                    let { articles: t } = e;
                    const { 0: i, 1: o } = Object(a.useState)(!1),
                        { 0: r, 1: m } = Object(a.useState)(!1),
                        { 0: d, 1: c } = Object(a.useState)(!1),
                        { 0: h, 1: g } = Object(a.useContext)(F.a),
                        { 0: f, 1: u } = Object(a.useState)(),
                        w = Object(a.useRef)(),
                        x = Object(a.useRef)(),
                        b = Object(a.useRef)();
                    Object(a.useEffect)(() => {
                        "undefined" != typeof window && u(window.innerWidth > 1024);
                    }, []);
                    const y = Object(l.d)({ transform: i ? "translate3d(0px,0px,0px)" : "translate3d(0,50px,0)", opacity: i ? 1 : 0, config: { mass: 5, tension: 500, friction: 100 } }),
                        v = Object(l.f)(t.list.length, { opacity: r ? 1 : 0, x: r ? 0 : 20, from: { opacity: 0, x: 20 }, config: { mass: 8, tension: 2500, friction: 400 }, delay: r ? 100 : 50 }),
                        I = Object(l.d)({ from: { opacity: 0, transform: "translate3d(0,20px,0)" }, opacity: d ? 1 : 0, transform: d ? "translate3d(0px,0px,0px)" : "translate3d(0,20px,0)", config: { mass: 5, tension: 300, friction: 50 } });
                    return n.a.createElement(
                        Be,
                        null,
                        n.a.createElement(
                            _e,
                            null,
                            n.a.createElement(Me, null, n.a.createElement(C.a, { element: w.current, toggle: i, setToggle: o }, n.a.createElement(Ae, { style: y, ref: w }, t.title))),
                            n.a.createElement(
                                C.a,
                                { element: b.current, toggle: r, setToggle: m },
                                n.a.createElement(
                                    He,
                                    { ref: b },
                                    v.map((e, i) => {
                                        let { x: a, ...o } = e;
                                        return n.a.createElement(
                                            Je,
                                            {
                                                key: i,
                                                to: "/blog/" + t.list[i].slug,
                                                onClick: (e) => {
                                                    e.preventDefault(),
                                                        g(!0),
                                                        setTimeout(() => {
                                                            Object(s.navigate)("/blog/" + t.list[i].slug), g(!1);
                                                        }, 500);
                                                },
                                                style: { ...o, transform: a.interpolate((e) => "translate3d(0," + e + "px,0)") },
                                            },
                                            n.a.createElement(
                                                qe,
                                                null,
                                                n.a.createElement(
                                                    Ge,
                                                    null,
                                                    n.a.createElement(p.a, {
                                                        style: { position: "absolute" },
                                                        fluid: t.list[i].blogFields.featuredInfos.image.imageFile.childImageSharp.fluid,
                                                        alt: t.list[i].blogFields.featuredInfos.image.altText,
                                                    })
                                                ),
                                                n.a.createElement(
                                                    Ye,
                                                    null,
                                                    t.list[i].blogFilters.edges.map((e, t) => n.a.createElement("span", { key: t }, e.node.name, " ")),
                                                    n.a.createElement("h2", null, " ", t.list[i].title, " ")
                                                )
                                            )
                                        );
                                    })
                                )
                            ),
                            n.a.createElement(
                                C.a,
                                { element: x.current, toggle: d, setToggle: c },
                                n.a.createElement(
                                    Ke,
                                    null,
                                    n.a.createElement(
                                        Xe,
                                        {
                                            ref: x,
                                            style: I,
                                            to: "/blog",
                                            onClick: (e) => {
                                                e.preventDefault(),
                                                    g(!0),
                                                    setTimeout(() => {
                                                        Object(s.navigate)("/blog"), g(!1);
                                                    }, 500);
                                            },
                                        },
                                        "Whatsapp us on"
                                    )
                                )
                            )
                        )
                    );
                },
                Ze = i("ktc5"),
                $e = i.n(Ze);
            var et = function (e) {
                let { pageTitle: t, title: i, metaDesc: a, opengraphTitle: o, opengraphDescription: m, opengraphImage: d, twitterTitle: l, twitterDescription: c, twitterImage: p } = e;
                const { wordPress: h } = Object(s.useStaticQuery)("3673484446"),
                    g = i || t + " | KOTA",
                    f = a || "",
                    u = o || i || t + " | KOTA",
                    w = m || a || "",
                    x = d ? d.imageFile.childImageSharp.fixed.src : h.globalOptions.optionFields.seo.defaultSocialImage.imageFile.childImageSharp.fixed.src,
                    b = l || i || t + " | KOTA",
                    y = c || a || "",
                    v = p ? p.imageFile.childImageSharp.fixed.src : h.globalOptions.optionFields.seo.defaultSocialImage.imageFile.childImageSharp.fixed.src;
                return n.a.createElement(
                    r.a,
                    null,
                    n.a.createElement("html", { lang: "en" }),
                    n.a.createElement("title", null, $e.a.decode(g)),
                    n.a.createElement("meta", { name: "description", content: f }),
                    n.a.createElement("meta", { property: "og:locale", content: "en_US" }),
                    n.a.createElement("meta", { property: "og:type", content: "website" }),
                    n.a.createElement("meta", { property: "og:title", content: $e.a.decode(u) }),
                    n.a.createElement("meta", { property: "og:description", content: w }),
                    n.a.createElement("meta", { property: "og:site_name", content: "KOTA" }),
                    n.a.createElement("meta", { property: "og:image", content: "https://kota.co.uk" + x }),
                    n.a.createElement("meta", { property: "og:image:width", content: "1200" }),
                    n.a.createElement("meta", { property: "og:image:height", content: "630" }),
                    n.a.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
                    n.a.createElement("meta", { name: "twitter:site", content: "kotacreative" }),
                    n.a.createElement("meta", { name: "twitter:creator", content: "kotacreative" }),
                    n.a.createElement("meta", { name: "twitter:description", content: y }),
                    n.a.createElement("meta", { name: "twitter:title", content: $e.a.decode(b) }),
                    n.a.createElement("meta", { name: "twitter:image", content: "https://kota.co.uk" + v }),
                    n.a.createElement("meta", { name: "format-detection", content: "telephone=no" }),
                    n.a.createElement(
                        "script",
                        { type: "application/ld+json" },
                        '\n        {\n          "@context": "http://www.schema.org",\n          "@type": "ProfessionalService",\n          "name": "' +
                            h.globalOptions.optionFields.structuredData.organisation.name +
                            '",\n          "url": "' +
                            h.globalOptions.optionFields.structuredData.organisation.url +
                            '",\n          "sameAs": [\n            "' +
                            h.globalOptions.optionFields.contactInfos.facebookLink +
                            '",\n            "' +
                            h.globalOptions.optionFields.contactInfos.instagramLink +
                            '",\n            "' +
                            h.globalOptions.optionFields.contactInfos.linkedinLink +
                            '",\n            "' +
                            h.globalOptions.optionFields.contactInfos.twitterLink +
                            '"\n          ],\n          "logo": "' +
                            h.globalOptions.optionFields.structuredData.organisation.url +
                            h.globalOptions.optionFields.structuredData.organisation.logo.imageFile.childImageSharp.fixed.src +
                            '",\n          "image": "' +
                            h.globalOptions.optionFields.structuredData.organisation.url +
                            h.globalOptions.optionFields.structuredData.organisation.mainImage.imageFile.childImageSharp.fixed.src +
                            '",\n          "description": "' +
                            h.globalOptions.optionFields.structuredData.organisation.description +
                            '",\n          "address": {\n            "@type": "PostalAddress",\n            "streetAddress": "' +
                            h.globalOptions.optionFields.structuredData.organisation.address +
                            '",\n            "addressLocality": "' +
                            h.globalOptions.optionFields.structuredData.organisation.city +
                            '",\n            "addressRegion": "' +
                            h.globalOptions.optionFields.structuredData.organisation.county +
                            '",\n            "postalCode": "' +
                            h.globalOptions.optionFields.structuredData.organisation.postcode +
                            '",\n            "addressCountry": "' +
                            h.globalOptions.optionFields.structuredData.organisation.country +
                            '"\n          },\n          "geo": {\n            "@type": "GeoCoordinates",\n            "latitude": "' +
                            h.globalOptions.optionFields.structuredData.organisation.latitude +
                            '",\n            "longitude": "' +
                            h.globalOptions.optionFields.structuredData.organisation.longitude +
                            '"\n          },\n          "hasMap": "' +
                            h.globalOptions.optionFields.contactInfos.directionLink +
                            '",\n          "telephone": "' +
                            h.globalOptions.optionFields.contactInfos.phone +
                            '"\n        }\n      '
                    ),
                    n.a.createElement(
                        "script",
                        { type: "application/ld+json" },
                        '\n        {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": "' +
                            $e.a.decode(g) +
                            '",\n          "description": "' +
                            f +
                            '",\n          "publisher": {\n              "@type": "ProfilePage",\n              "name": "' +
                            h.globalOptions.optionFields.structuredData.organisation.name +
                            '"\n          }\n        }\n      '
                    )
                );
            };
            t.default = (e) => {
                let { data: t, pageContext: i } = e;
                return n.a.createElement(
                    m.a,
                    null,
                    n.a.createElement(r.a, null, n.a.createElement("meta", { name: "facebook-domain-verification", content: "74xev5astxyr1cl7h1gchh6ohx7cgw" })),
                    n.a.createElement(et, Object.assign({ pageTitle: i.title }, t.wordPress.pageBy.seo)),
                    n.a.createElement(u, { hero: t.wordPress.pageBy.homeFields.hero, logos: t.wordPress.globalOptions.optionFields.footer.logoListGrey }),
                    n.a.createElement(L, { introduction: t.wordPress.pageBy.homeFields.introduction }),
                    n.a.createElement(me, { statements: t.wordPress.pageBy.homeFields.statements }),
                    n.a.createElement(ve, { services: t.wordPress.pageBy.homeFields.services }),
                    n.a.createElement(Te, { work: t.wordPress.pageBy.homeFields.work }),
                    n.a.createElement(Ue, { clients: t.wordPress.clients, intro: t.wordPress.pageBy.homeFields.client }),
                    n.a.createElement(Qe, { articles: t.wordPress.pageBy.homeFields.articles })
                );
            };
        },
        iPCU: function (e, t, i) {
            "use strict";
            var a = i("q1tI"),
                n = i.n(a),
                o = i("wEEd"),
                r = i("vOnD"),
                m = i("0Tit"),
                s = i.n(m);
            t.a = (e) => {
                let { video: t, hover: i } = e;
                const { 0: r, 1: m } = Object(a.useState)(!1),
                    h = Object(a.useRef)(),
                    g = Object(a.useRef)(),
                    f = Object(o.d)({ transform: r ? "translate3d(0px,0px,0px)" : "translate3d(0,25px,0)", config: o.b.slow }),
                    u = Object(o.d)({
                        from: { transform: "translate3d(0, 101%, 0)" },
                        to: { transform: r ? "translate3d(0, 0%, 0)" : "translate3d(0, 101%, 0)" },
                        config: { duration: 750, easing: r ? s()(0.1, 0.305, 0.24, 1) : s()(0.76, 0, 0.9, 0.69) },
                        delay: r ? 0 : 500,
                    }),
                    w = Object(o.d)({
                        from: { transform: "translate3d(0, -101%, 0)" },
                        to: { transform: r ? "translate3d(0, 0%, 0)" : "translate3d(0, -101%, 0)" },
                        config: { duration: 750, easing: r ? s()(0.1, 0.305, 0.24, 1) : s()(0.76, 0, 0.9, 0.69) },
                        delay: r ? 0 : 500,
                    });
                return (
                    Object(a.useEffect)(() => {
                        const e = new IntersectionObserver(
                            (e) => {
                                e.forEach((e) => {
                                    e.intersectionRatio > 0 ? (m(!0), g.current && g.current.play()) : g.current && g.current.pause();
                                });
                            },
                            { threshold: [0, 0.25, 0.5, 0.75, 1] }
                        );
                        g && e.observe(h.current);
                    }, []),
                    n.a.createElement(
                        n.a.Fragment,
                        null,
                        n.a.createElement(
                            d,
                            { style: f, ref: h },
                            n.a.createElement(l, { style: u }, n.a.createElement(c, { style: w, hover: i }, n.a.createElement(p, { muted: !0, playsInline: !0, loop: !0, ref: g }, n.a.createElement("source", { src: t, type: "video/mp4" }))))
                        )
                    )
                );
            };
            const d = Object(r.d)(o.a.div).withConfig({ displayName: "VideoContainer", componentId: "sc-8czb5z-0" })(["width:100%;height:100%;overflow:hidden;will-change:transform;"]),
                l = Object(r.d)(o.a.div).withConfig({ displayName: "VideoWrapper", componentId: "sc-8czb5z-1" })(["position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform;"]),
                c = Object(r.d)(o.a.div).withConfig({ displayName: "VideoInner", componentId: "sc-8czb5z-2" })(
                    [
                        "position:absolute;top:0;left:0;width:100%;height:100%;will-change:transform;&:after{content:'';position:absolute;z-index:5;top:0;left:0;width:100%;height:100%;background-color:",
                        ";mix-blend-mode:screen;opacity:0;transition:opacity 0.25s ease-in-out;}&:hover:after{opacity:",
                        ";}",
                    ],
                    (e) => e.theme.colours.pink,
                    (e) => (e.hover ? 0.7 : 0)
                ),
                p = r.d.video.withConfig({ displayName: "Video", componentId: "sc-8czb5z-3" })(["object-fit:cover;width:100%;height:100%;z-index:1;"]);
        },
    },
]);
//# sourceMappingURL=component---src-templates-home-js-4e348c53af8f55255752.js.map
