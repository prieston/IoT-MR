(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    100: function(e, t, n) {},
    102: function(e, t, n) {},
    118: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        o = n.n(i),
        a = n(8),
        r = n.n(a),
        d = (n(100), n(101), n(9)),
        c = (n(102), n(146)),
        l = n(12),
        s = n(34),
        m = n(11),
        u = n(33),
        p = n(1),
        w = n(70),
        g = n(71),
        f = n(62),
        b = n(60),
        h = function(e, t, n, i) {
          return {
            Xb: e + n * Math.sin(i / 63.6619772367581),
            Yb: t + n * Math.cos(i / 63.6619772367581),
          };
        },
        v = function(e, t, n, i) {
          var o,
            a = Math.abs(n - e),
            r = Math.abs(i - t),
            d = Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2)),
            c = n - e,
            l = i - t,
            s = 63.6619772367581 * Math.atan(a / r);
          return (
            c > 0 && l > 0
              ? (o = s)
              : c > 0 && l < 0
              ? (o = 200 - s)
              : c < 0 && l < 0
              ? (o = 200 + s)
              : c < 0 && l > 0
              ? (o = 400 - s)
              : 0 === c && l > 0
              ? (o = 0)
              : 0 === c && l < 0
              ? (o = 200)
              : c > 0 && 0 === l
              ? (o = 100)
              : c < 0 && 0 === l
              ? (o = 300)
              : 0 === c && 0 === l && (o = 0),
            { Gab: Number(o.toFixed(4)), Sab: Number(d.toFixed(4)) }
          );
        },
        y = new p.Ib(),
        x = new p.Ib(0, -1, 0),
        E = new p.rb(),
        _ = function(e, t) {
          var n,
            i,
            o = Number(t.object.position.x.toFixed(4)),
            a = Number(t.object.position.z.toFixed(4)),
            r =
              (null === (n = window.iotmr.selected.object) || void 0 === n
                ? void 0
                : n.uuid) == t.id
                ? t.actions.onSelect
                : t.actions.onLoad,
            d =
              (null === (i = window.iotmr.selected.object) || void 0 === i
                ? void 0
                : i.uuid) == t.id
                ? t.selectedRuntimeInfo
                : t.runtimeInfo;
          if (t.actions.onSelect === r) {
            var c = Number(
                v(
                  t.object.position.x,
                  t.object.position.z,
                  window.iotmr.camera.position.x,
                  window.iotmr.camera.position.z
                ).Gab
              ),
              l = c ? c / 63.661977236758 : 0;
            t.object.rotation.set(
              t.rotation[0],
              t.rotation[1] + l,
              t.rotation[2]
            );
          }
          var s = r.animations[d.animationIndex];
          if (((d.duration += e), (d.lastUpdate += e), s.duration)) {
            if (d.duration >= s.duration / 1e3)
              if (
                ((d.duration = 0),
                (d.lastUpdate = 0),
                r.animations.length - 1 > d.animationIndex)
              ) {
                d.animationIndex++, (d.pathIndex = 0);
                var u = d.mixer;
                u.stopAllAction(),
                  u
                    .clipAction(
                      t.object.children[0].animations.filter(function(e) {
                        return e.name == r.animations[d.animationIndex].name;
                      })[0]
                    )
                    .setDuration((s.singleLoopDuration || 1e3) / 1e3)
                    .play();
              } else {
                (d.animationIndex = 0), (d.pathIndex = 0);
                var p = d.mixer;
                p.stopAllAction(),
                  p
                    .clipAction(
                      t.object.children[0].animations.filter(function(e) {
                        return e.name == r.animations[d.animationIndex].name;
                      })[0]
                    )
                    .setDuration((s.singleLoopDuration || 1e3) / 1e3)
                    .play();
              }
            return !1;
          }
          var w = s.path[d.pathIndex],
            g = Number((w[0] - window.iotmr.center[0]).toFixed(4)),
            f = Number((w[2] - window.iotmr.center[2]).toFixed(4)),
            b = ((e * s.speed) / 60 / 60) * 1e3,
            _ = s.path[d.pathIndex - 1]
              ? s.path[d.pathIndex - 1]
              : s.path[d.pathIndex],
            j = v(
              _[0] - window.iotmr.center[0],
              _[2] - window.iotmr.center[2],
              g,
              f
            ),
            I = j.Gab,
            O = j.Sab;
          if (
            (I <= 100 && o >= g && a >= f) ||
            (I > 100 && I <= 200 && o >= g && a <= f) ||
            (I > 200 && I <= 300 && o <= g && a <= f) ||
            (I > 300 && o <= g && a >= f)
          ) {
            if (s.path.length - 1 > d.pathIndex)
              d.pathIndex++, (d.duration = 0), (d.lastUpdate = 0);
            else if (r.animations.length - 1 > d.animationIndex) {
              d.animationIndex++,
                (d.pathIndex = 0),
                (d.duration = 0),
                (d.lastUpdate = 0);
              var S = d.mixer;
              S.stopAllAction(),
                S.clipAction(
                  t.object.children[0].animations.filter(function(e) {
                    return e.name == r.animations[d.animationIndex].name;
                  })[0]
                )
                  .setDuration((s.singleLoopDuration || 1e3) / 1e3)
                  .play();
            } else {
              (d.animationIndex = 0),
                (d.pathIndex = 0),
                (d.duration = 0),
                (d.lastUpdate = 0);
              var L = d.mixer;
              L.stopAllAction(),
                L.clipAction(
                  t.object.children[0].animations.filter(function(e) {
                    return e.name == r.animations[d.animationIndex].name;
                  })[0]
                )
                  .setDuration((s.singleLoopDuration || 1e3) / 1e3)
                  .play();
            }
            return {
              position: (r.animations[d.animationIndex].path[d.pathIndex - 1]
                ? r.animations[d.animationIndex].path[d.pathIndex - 1]
                : r.animations[d.animationIndex].path[d.pathIndex]
              ).reduce(function(e, t, n) {
                return [].concat(Object(m.a)(e), [t - window.iotmr.center[n]]);
              }, []),
            };
          }
          var k,
            D,
            N,
            A,
            M = h(o, a, b, I);
          if (s.dynamicHeight)
            (d.lastUpdate = 0),
              (D = { x: M.Xb, z: M.Yb, y: t.object.position.y }),
              (N = window.iotmr.world[window.iotmr.currentWorldId].filter(
                function(e) {
                  return 1 == e.ground;
                }
              )[0].object),
              (A = 3),
              y.set(D.x, D.y + A, D.z),
              E.set(y, x),
              (k =
                ((E.intersectObjects(N.children, !0)[0] || {}).point || {}).y ||
                0);
          else {
            var T = s.path[d.pathIndex][1] - _[1],
              C =
                v(
                  _[0] - window.iotmr.center[0],
                  _[2] - window.iotmr.center[2],
                  t.object.position.x,
                  t.object.position.z
                ).Sab / O;
            k = _[1] - window.iotmr.center[1] + T * C;
          }
          var W = I ? I / 63.661977236758 : 0;
          return {
            position: [M.Xb, k, M.Yb],
            rotation: [t.rotation[0], t.rotation[1] + W, t.rotation[2]],
          };
        },
        j = n(55),
        I = function(e, t, n, i, o) {
          function a() {
            (t.style.textDecoration = "line-through "),
              (t.style.pointerEvents = "none"),
              (t.onclick = null),
              (t.style.textDecoration = "line-through"),
              (t.style.pointerEvents = "none");
          }
          if ("xr" in navigator)
            return (
              navigator.xr.isSessionSupported("immersive-vr").then(function(r) {
                r
                  ? (function() {
                      var a = null;
                      function r(t) {
                        (window.session = t),
                          t.addEventListener("end", d),
                          e.xr.setSession(t);
                        var n = i.position.x,
                          r = i.position.z;
                        i.position.set(0, 0, 0),
                          o.rotation.set(0, 0, 0),
                          (i.rotation.y = -3.14),
                          i.position.set(n, 0, r),
                          (a = t);
                      }
                      function d() {
                        window.iotmr.realities.virtual(),
                          a.removeEventListener("end", d),
                          (t.textContent = "ENTER VR");
                        var e = i.position.x,
                          n = i.position.z;
                        i.position.set(e, -1.7, n),
                          o.position.set(0, 0, 0),
                          o.rotation.set(0, 0, 0),
                          (i.rotation.y = 0),
                          (i.position.y = -1.7),
                          (a = null);
                      }
                      t.onclick = function() {
                        if (null === a) {
                          navigator.xr
                            .requestSession(n, {
                              optionalFeatures: [
                                "local-floor",
                                "bounded-floor",
                              ],
                            })
                            .then(r);
                        } else a.end();
                      };
                    })()
                  : a();
              }),
              t
            );
          var r = document.createElement("a");
          return (
            (r.href = "https://immersiveweb.dev/"),
            !1 === window.isSecureContext
              ? (r.innerHTML = "WEBXR NEEDS HTTPS")
              : (r.innerHTML = "WEBXR NOT AVAILABLE"),
            (r.style.left = "calc(50% - 90px)"),
            (r.style.width = "180px"),
            (r.style.textDecoration = "none"),
            r
          );
        },
        O =
          (Math.PI,
          function() {
            var e,
              t = !1;
            return (
              (e = navigator.userAgent || navigator.vendor || window.opera),
              (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                e
              ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                  e.substr(0, 4)
                )) &&
                (t = !0),
              t
            );
          });
      O();
      function S(e, t, n, i, o, a, r, d, c, l) {
        (r.FBXLoader = f.a), (r.GLTFLoader = b.a);
        var s = new p.l(),
          h = document.getElementById("three-map");
        (n = new p.tb()),
          ((i = new p.Mb()).xr.enabled = !0),
          (i.physicallyCorrectLights = !0),
          (i.gammaOutput = !0),
          i.setPixelRatio(window.devicePixelRatio),
          i.setSize(h.clientWidth, h.clientHeight),
          (i.sortObjects = !1),
          h.appendChild(i.domElement),
          ((e = new p.ib(
            45,
            h.clientWidth / h.clientHeight,
            0.01,
            1e3
          )).setFocalLength = 26),
          (window.iotmr.realities = {
            virtual: function() {
              i.setClearColor("#4285f4", 1), (n.background = void 0);
            },
            augmented: function() {
              i.setClearColor(0, 0);
            },
            mixed: function() {
              var e = document.getElementsByTagName("video")[0],
                t = new p.Lb(e);
              (t.minFilter = p.J),
                (t.magFilter = p.J),
                (t.format = p.qb),
                (n.background = t),
                i.setClearColor("#4285f4", 1);
            },
            mixedMRH: function() {
              i.setClearColor(0, 0);
            },
          }),
          window.iotmr.realities.virtual(),
          ((t = O()
            ? new g.a(e)
            : new w.a(e, i.domElement)).enableDamping = !1),
          (t.dampingFactor = 0.05),
          (t.screenSpacePanning = !1),
          (t.minDistance = 1),
          (t.maxDistance = 1e6),
          (t.rotateSpeed = 0.8),
          (t.panSpeed = 0.8),
          (t.zoomSpeed = 0.8);
        var v = new p.jb(100, 100, 99, 99);
        !(function(e) {
          for (
            var t = e.getAttribute("position"), n = t.array, i = 2, o = 0;
            i < n.length;
            i += 3, o++
          )
            n[i] = 0;
          (t.needsUpdate = !0), e.computeVertexNormals();
        })(v);
        var y = new p.X({ wireframe: !0, color: "#222", side: p.p });
        y.flatShading = !0;
        var x = new p.U(v, y);
        x.position.set(0, 0, 0),
          (x.castShadow = !1),
          (x.receiveShadow = !1),
          x.geometry.rotateX(Math.PI / 2);
        new p.w(1e3, 100);
        var E = new p.b(16777215, 1);
        (E.channel = 123), n.add(E);
        var S = new p.o(16777215, 1);
        (window.dirLight = S),
          S.position.set(20, 10, 20),
          (S.name = "dirlight"),
          (S.shadowCameraVisible = !0),
          n.add(S);
        var L = new p.o(16777215, 1);
        (window.dirLight1 = L),
          L.position.set(-17, 10, -31),
          (L.name = "dirlight1"),
          (L.shadowCameraVisible = !0),
          n.add(L),
          (o = new p.U(new p.xb(0.5, 32, 32), new p.V({ color: "red" })));
        var k = new p.U(
          new p.xb(150, 32, 32),
          new p.V({ opacity: 0, transparent: !0, alphaTest: 0.05, side: p.p })
        );
        n.add(k);
        var D = new p.rb(),
          N = new p.Hb(),
          A = function e(t) {
            return (
              !(!t || !window.iotmr.world[window.iotmr.currentWorldId]) &&
              (-1 !==
              window.iotmr.world[window.iotmr.currentWorldId]
                .map(function(e) {
                  return e.id;
                })
                .indexOf(t.uuid)
                ? t
                : e(t.parent))
            );
          };
        function M() {
          (e.aspect = h.clientWidth / h.clientHeight),
            e.updateProjectionMatrix(),
            i.setSize(h.clientWidth, h.clientHeight);
        }
        return (
          i.setAnimationLoop(function() {
            t.update(),
              (function() {
                if (
                  (j.a.update(),
                  i.render(n, e),
                  !window.iotmr.world[window.iotmr.currentWorldId])
                )
                  return !0;
                var t = s.getDelta();
                window.iotmr.world[window.iotmr.currentWorldId].forEach(
                  function(e) {
                    if (e.actions) {
                      var n,
                        i =
                          (null === (n = window.iotmr.selected.object) ||
                          void 0 === n
                            ? void 0
                            : n.uuid) == e.id
                            ? e.selectedRuntimeInfo
                            : e.runtimeInfo;
                      i && i.mixer.update(t);
                    }
                  }
                ),
                  window.iotmr.world[window.iotmr.currentWorldId].forEach(
                    function(e) {
                      var n, i;
                      if (
                        e.runtimeInfo &&
                        (null === (n = e.actions) ||
                        void 0 === n ||
                        null === (i = n.onLoad) ||
                        void 0 === i
                          ? void 0
                          : i.animations) &&
                        e.object
                      ) {
                        var o,
                          a,
                          r = _(t, e);
                        if (r)
                          r.position &&
                            (o = e.object.position).set.apply(
                              o,
                              Object(m.a)(r.position)
                            ),
                            r.rotation &&
                              (Math.abs(r.rotation[1] - e.object.rotation.y) >
                                Math.PI / 2 || 0 == e.smoothRotation
                                ? (a = e.object.rotation).set.apply(
                                    a,
                                    Object(m.a)(r.rotation)
                                  )
                                : new j.a.Tween(e.object.rotation)
                                    .to(
                                      {
                                        x: r.rotation[0],
                                        y: r.rotation[1],
                                        z: r.rotation[2],
                                      },
                                      100
                                    )
                                    .easing(j.a.Easing.Quadratic.InOut)
                                    .start());
                      }
                    }
                  ),
                  window.iotmr.selected.object &&
                    window.iotmr.selected.objectHelper.update();
              })();
          }),
          window.addEventListener("resize", M, !1),
          document
            .getElementById("three-map")
            .addEventListener("click", function(t) {
              try {
                var o = (function() {
                  if (window.iotmr.listeners.mouseMoved) return { v: !0 };
                  window.iotmr.selected.object &&
                    (n.remove(window.iotmr.selected.objectHelper),
                    (window.iotmr.selected.object = null),
                    (window.iotmr.selected.material = null));
                  var o = i.domElement.getBoundingClientRect();
                  (N.x =
                    (((t.clientX || t.changedTouches[0].clientX) - o.left) /
                      o.width) *
                      2 -
                    1),
                    (N.y =
                      (-((t.clientY || t.changedTouches[0].clientY) - o.top) /
                        o.height) *
                        2 +
                      1),
                    D.setFromCamera(N, e);
                  var a,
                    r,
                    d = D.intersectObjects(n.children, !0),
                    c = Object(u.a)(d);
                  try {
                    for (c.s(); !(r = c.n()).done; ) {
                      var s = r.value;
                      if (
                        (a = A(null === s || void 0 === s ? void 0 : s.object))
                      )
                        if (
                          !1 !==
                          window.iotmr.world[
                            window.iotmr.currentWorldId
                          ].filter(function(e) {
                            return e.id == a.uuid;
                          })[0].selectable
                        )
                          break;
                    }
                  } catch (f) {
                    c.e(f);
                  } finally {
                    c.f();
                  }
                  if (!a) return l(null), { v: !1 };
                  new p.X({ color: "#b34f0b", side: p.p });
                  (window.iotmr.selected.object = a),
                    (window.iotmr.selected.objectHelper = new p.g(a)),
                    window.iotmr.selected.objectHelper.material.color.set(
                      16777215
                    ),
                    n.add(window.iotmr.selected.objectHelper),
                    n.add(window.iotmr.selected.objectHelper);
                  var m = window.iotmr.world[
                      window.iotmr.currentWorldId
                    ].filter(function(e) {
                      return e.id == a.uuid;
                    })[0],
                    w = m.selectedRuntimeInfo;
                  if (w) {
                    (w.animationIndex = 0), (w.pathIndex = 0), (w.duration = 0);
                    var g = new p.d(a);
                    g
                      .clipAction(
                        a.animations.filter(function(e) {
                          return (
                            e.name ==
                            m.actions.onSelect.animations[
                              m.selectedRuntimeInfo.animationIndex
                            ].name
                          );
                        })[0]
                      )
                      .setDuration(
                        (m.actions.onSelect.animations[
                          m.selectedRuntimeInfo.animationIndex
                        ].singleLoopDuration || 1e3) / 1e3
                      )
                      .play(),
                      (w.mixer = g);
                  }
                  l(a.uuid);
                })();
                if ("object" === typeof o) return o.v;
              } catch (a) {
                console.error(a);
              }
            }),
          I(i, window.vrh, "immersive-vr", n, e),
          I(i, window.mrh, "immersive-ar", n, e),
          {
            plane: x,
            camera: e,
            controls: t,
            scene: n,
            renderer: i,
            pointer: o,
            partials: a,
            loaders: r,
            onWindowResize: M,
          }
        );
      }
      (b.a.prototype.load2 = function(e, t) {
        var n = this,
          i = e[0],
          o = new FileReader();
        (o.onload = function(e) {
          (2 !== e.target.readyState && 0 !== e.target.status) ||
            n.parse(e.target.result || e.target.responseText, "", t);
        }),
          o.readAsArrayBuffer(i);
      }),
        (f.a.prototype.load2 = function(e, t) {
          var n = this,
            i = e[0],
            o = new FileReader();
          (o.onload = function(e) {
            if (2 === e.target.readyState || 0 === e.target.status) {
              var i = n.parse(e.target.result || e.target.responseText);
              t && t(i);
            }
          }),
            o.readAsArrayBuffer(i);
        });
      var L = Object(s.b)(
          function(e) {
            return { api: e.api };
          },
          function(e) {
            return {
              setDescriptiveData: function(t) {
                return e({ type: "SET_DESCRIPTIVE_DATA", descriptiveData: t });
              },
            };
          }
        )(function(e) {
          return (
            Object(i.useEffect)(
              function() {
                var t = document.getElementById("video");
                if (e.renderVideo) {
                  var n = document.getElementById("video");
                  navigator.mediaDevices
                    .getUserMedia({
                      video: {
                        width: 1280,
                        height: 720,
                        facingMode: "environment",
                      },
                    })
                    .then(function(e) {
                      (n.srcObject = e), n.play();
                    });
                } else
                  t &&
                    (function(e) {
                      var t = e.srcObject;
                      t &&
                        (t.getTracks().forEach(function(e) {
                          e.stop();
                        }),
                        (e.srcObject = null));
                    })(t);
              },
              [e.renderVideo]
            ),
            Object(i.useEffect)(function() {
              var t;
              if (
                !(null === (t = navigator.mediaDevices) || void 0 === t
                  ? void 0
                  : t.getUserMedia)
              )
                return !1;
              var n = window.iotmr,
                i = (n.mixers, n.camera),
                o = n.controls,
                a = n.scene,
                r = n.renderer,
                d = n.pointer,
                c = n.partials,
                s = n.loaders,
                m =
                  (document.getElementById("three-map"),
                  S(i, o, a, r, d, c, s, 0, 0, function(t) {
                    var n = t
                      ? window.iotmr.world[window.iotmr.currentWorldId].filter(
                          function(e) {
                            return e.id == t;
                          }
                        )[0].description
                      : null;
                    window["descriptive-data-container"].classList.add(
                      "transition"
                    ),
                      (window["descriptive-data-container"].style.height = n
                        ? "33%"
                        : "0%"),
                      setTimeout(function() {
                        window["descriptive-data-container"].classList.remove(
                          "transition"
                        );
                      }, 1e3),
                      e.setDescriptiveData(n);
                  }));
              window.iotmr = Object(l.a)(Object(l.a)({}, window.iotmr), m);
            }, []),
            o.a.createElement(
              "div",
              { id: "world" },
              o.a.createElement("video", {
                key: "video",
                id: "video",
                style: { display: "none" },
                autoPlay: !0,
                playsInline: !0,
              }),
              o.a.createElement("div", {
                id: "three-map",
                style: { position: "absolute", width: "100%", height: "100%" },
              })
            )
          );
        }),
        k = function(e, t, n) {
          return function(i) {
            t.current.style.height = "100%";
            var o = function(n) {
              e.current.classList.add("transition"),
                0.33 == (e.current.offsetHeight / window.innerHeight).toFixed(2)
                  ? (e.current.style.height = "0%")
                  : (e.current.style.height = "33%"),
                window.removeEventListener("mousemove", a),
                window.removeEventListener("touchmove", a),
                window.removeEventListener("mouseup", r),
                window.removeEventListener("touchend", r),
                setTimeout(function() {
                  e.current.classList.remove("transition"),
                    (t.current.style.height = "48px");
                }, 500);
            };
            n.current = {
              height: null,
              movementY: null,
              previousTouchY: null,
              previousHeight: e.current.offsetHeight,
            };
            var a = function(t) {
              (n.current.moved = !0),
                "undefined" === typeof t.movementY
                  ? ((n.current.movementY =
                      t.touches[0].pageY -
                      (n.current.previousTouchY || t.touches[0].pageY)),
                    (n.current.previousTouchY = t.touches[0].pageY))
                  : (n.current.movementY = t.movementY),
                (n.current.height =
                  e.current.offsetHeight - n.current.movementY),
                (e.current.style.height = "".concat(n.current.height, "px"));
            };
            window.addEventListener("mousemove", a),
              window.addEventListener("touchmove", a);
            var r = function i() {
              if (!n.current.moved) return o();
              e.current.classList.add("transition");
              var r = n.current.previousHeight - e.current.offsetHeight,
                d = (e.current.offsetHeight / window.innerHeight).toFixed(2);
              Number(d) <= 0.33
                ? (n.current.height = r >= 0 ? "0%" : "33%")
                : (n.current.height = r >= 0 ? "33%" : "100%"),
                (e.current.style.height = "".concat(n.current.height)),
                setTimeout(function() {
                  e.current.classList.remove("transition"),
                    (t.current.style.height = "48px");
                }, 500),
                window.removeEventListener("mousemove", a),
                window.removeEventListener("touchmove", a),
                window.removeEventListener("mouseup", i),
                window.removeEventListener("touchend", i);
            };
            window.addEventListener("mouseup", r),
              window.addEventListener("touchend", r);
          };
        },
        D = n(42),
        N = n(4),
        A = n(141),
        M = n(152),
        T = n(150),
        C = n(149),
        W = n(151),
        R = function(e) {
          var t = Object(A.a)(function(e) {
              return {
                root: Object(N.a)(
                  {
                    pointerEvents: "none",
                    height: 380,
                    transform: "translateZ(0px)",
                    flexGrow: 1,
                    flex: 1,
                    zIndex: 10,
                    width: "100%",
                  },
                  "height",
                  "100%"
                ),
                speedDial: {
                  position: "absolute",
                  bottom: e.spacing(2),
                  right: e.spacing(2),
                  "& .MuiSpeedDialAction-staticTooltip .MuiSpeedDialAction-staticTooltipLabel": {
                    whiteSpace: "nowrap",
                  },
                  "& .MuiButtonBase-root.MuiFab-root.MuiSpeedDial-fab.MuiFab-primary": {
                    width: 48,
                    height: 48,
                    "& .MuiFab-label": { display: "initial" },
                    "&:focus": { outline: "none" },
                  },
                },
              };
            })(),
            n = o.a.useState(!1),
            i = Object(d.a)(n, 2),
            a = i[0],
            r = i[1],
            c = function() {
              r(!1);
            };
          return o.a.createElement(
            "div",
            { className: t.root },
            o.a.createElement(M.a, { open: a }),
            o.a.createElement(
              T.a,
              {
                ariaLabel: "Action Tooltip",
                className: t.speedDial,
                icon: o.a.createElement(W.a, null),
                onClose: c,
                onOpen: function() {
                  r(!0);
                },
                open: a,
              },
              e.actions.map(function(e) {
                return o.a.createElement(C.a, {
                  key: e.name,
                  icon: e.icon,
                  tooltipTitle: e.name,
                  tooltipOpen: !0,
                  onClick: c,
                });
              })
            )
          );
        },
        z = n(148),
        F = Object(A.a)(function(e) {
          return {
            paper: {
              position: "absolute",
              fontFamily: "Ubuntu",
              width: "98%",
              height: "98%",
              backgroundColor: e.palette.background.paper,
              border: "2px solid #000",
              boxShadow: e.shadows[5],
              padding: e.spacing(2, 4, 3),
              borderRadius: 20,
              display: "flex",
              flexFlow: "column",
            },
          };
        }),
        B = function(e) {
          var t = F(),
            n = o.a.useState(!1),
            i = Object(d.a)(n, 2),
            a =
              (i[0],
              i[1],
              o.a.createElement("div", { className: t.paper }, e.data));
          return o.a.createElement(
            z.a,
            {
              open: !0,
              onClose: e.onClose,
              "aria-labelledby": "simple-modal-title",
              "aria-describedby": "simple-modal-description",
            },
            a
          );
        },
        H = n(16),
        P = n.n(H),
        V = n(23),
        U = n(76),
        Y = n(61),
        X = function(e, t, n) {
          var i = t.position,
            o = t.rotation,
            a = t.scale,
            r = t.scaleDifferenceXY,
            d = t.scaleDifferenceZ,
            c = (t.blending, e[0].url),
            l = window.iotmr,
            s = (l.scene, new l.loaders.GLTFLoader()),
            u = new U.a();
          return (
            s.setDRACOLoader(u),
            new Promise(function(e, l) {
              s.load(
                c,
                function(c) {
                  c.scene.animations = c.animations;
                  var l = new p.x();
                  if (
                    (c.scene.traverse(function(e) {
                      e.isMesh &&
                        ((e.material.side = p.p),
                        (e.material.needsUpdate = !0),
                        (e.frustumCulled = !1));
                    }),
                    i[0] instanceof Array)
                  ) {
                    for (
                      var s = new Y.a(c.scene, i.length), u = 0;
                      u < i.length - 1;
                      u++
                    ) {
                      var w,
                        g = new p.gb();
                      g.frustumCulled = !1;
                      var f = {};
                      (f.x = Number(o[0])),
                        (f.y = Number(o[1])),
                        (f.z = Number(o[2]));
                      var b = new p.Ib(1, 0, 0),
                        h = new p.Ib(0, 1, 0),
                        v = new p.Ib(0, 0, 1);
                      g.rotateOnWorldAxis(b, f.x),
                        g.rotateOnWorldAxis(v, f.z),
                        g.rotateOnWorldAxis(h, 2 * Math.random() * Math.PI);
                      var y = Math.random() * r,
                        x = Math.random() * r + Math.random() * d,
                        E = {};
                      (E.x = Number(a[0]) + y),
                        (E.y = Number(a[1]) + y),
                        (E.z = Number(a[2]) + x),
                        g.scale.set(E.x, E.y, E.z),
                        (w = g.position).set.apply(
                          w,
                          Object(m.a)(
                            i[u].reduce(function(e, t, n) {
                              return [].concat(Object(m.a)(e), [
                                t - window.iotmr.center[n],
                              ]);
                            }, [])
                          )
                        ),
                        g.updateMatrix(),
                        s.setMatrixAt(u, g.matrix);
                    }
                    l.add(s);
                  } else {
                    var _, j, I;
                    l.add(c.scene),
                      (_ = l.position).set.apply(
                        _,
                        Object(m.a)(
                          i.reduce(function(e, t, n) {
                            return [].concat(Object(m.a)(e), [
                              t - window.iotmr.center[n],
                            ]);
                          }, [])
                        )
                      ),
                      (j = l.scale).set.apply(j, Object(m.a)(a)),
                      (I = l.rotation).set.apply(I, Object(m.a)(o));
                  }
                  "mapped" == t.type && (l.renderOrder = 999),
                    e({ referenceIndex: n, uuid: c.scene.uuid, object: l });
                },
                function() {},
                function(e) {
                  l(e);
                }
              );
            })
          );
        },
        q = {
          gltf: X,
          glb: X,
          fbx: function(e, t, n) {
            var i = t.position,
              o = t.rotation,
              a = t.scale,
              r = t.scaleDifferenceXY,
              d = t.scaleDifferenceZ,
              c = (t.blending, e[0].url),
              l = window.iotmr,
              s = (l.scene, new l.loaders.FBXLoader());
            return new Promise(function(e, l) {
              s.load(
                c,
                function(c) {
                  var l = new p.x();
                  if (
                    (c.scene.traverse(function(e) {
                      e.isMesh &&
                        ((e.material.side = p.p),
                        (e.material.needsUpdate = !0),
                        (e.frustumCulled = !1));
                    }),
                    i[0] instanceof Array)
                  ) {
                    for (
                      var s = new Y.a(c, i.length), u = 0;
                      u < i.length - 1;
                      u++
                    ) {
                      var w,
                        g = new p.gb();
                      g.frustumCulled = !1;
                      var f = {};
                      (f.x = Number(o[0])),
                        (f.y = Number(o[1])),
                        (f.z = Number(o[2]));
                      var b = new p.Ib(1, 0, 0),
                        h = new p.Ib(0, 1, 0),
                        v = new p.Ib(0, 0, 1);
                      g.rotateOnWorldAxis(b, f.x),
                        g.rotateOnWorldAxis(v, f.z),
                        g.rotateOnWorldAxis(h, 2 * Math.random() * Math.PI);
                      var y = Math.random() * r,
                        x = Math.random() * r + Math.random() * d,
                        E = {};
                      (E.x = Number(a[0]) + y),
                        (E.y = Number(a[1]) + y),
                        (E.z = Number(a[2]) + x),
                        g.scale.set(E.x, E.y, E.z),
                        (w = g.position).set.apply(
                          w,
                          Object(m.a)(
                            i[u].reduce(function(e, t, n) {
                              return [].concat(Object(m.a)(e), [
                                t - window.iotmr.center[n],
                              ]);
                            }, [])
                          )
                        ),
                        g.updateMatrix(),
                        s.setMatrixAt(u, g.matrix);
                    }
                    l.add(s);
                  } else {
                    var _, j, I;
                    l.add(c),
                      (_ = l.position).set.apply(
                        _,
                        Object(m.a)(
                          i.reduce(function(e, t, n) {
                            return [].concat(Object(m.a)(e), [
                              t - window.iotmr.center[n],
                            ]);
                          }, [])
                        )
                      ),
                      (j = l.scale).set.apply(j, Object(m.a)(a)),
                      (I = l.rotation).set.apply(I, Object(m.a)(o));
                  }
                  "mapped" == t.type && (l.renderOrder = 1),
                    e({ referenceIndex: n, uuid: l.uuid, object: l });
                },
                function() {},
                function(e) {
                  l(e);
                }
              );
            });
          },
        },
        G = (function() {
          var e = Object(V.a)(
            P.a.mark(function e(t) {
              var n;
              return P.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = function(e) {
                        return e
                          .split(/[#?]/)[0]
                          .split(".")
                          .pop()
                          .trim();
                      }),
                        Object(D.a)([40.626374, 22.948324, 15.25]),
                        (function(e) {
                          window.iotmr.center = e.meta.coordinates;
                          var t = e.content,
                            i = window.iotmr,
                            o = (i.renderer, i.scene, i.camera, []);
                          if (window.iotmr.world[e.id]) return !0;
                          window.iotmr.world[e.id] = [];
                          var a,
                            r = Object(u.a)(t.entries());
                          try {
                            for (r.s(); !(a = r.n()).done; ) {
                              var c = Object(d.a)(a.value, 2),
                                l = c[0],
                                s = c[1];
                              -1 !== ["virtual", "mapped"].indexOf(s.type) &&
                                (o.push(q[n(s.url)]([{ url: s.url }], s, l)),
                                window.iotmr.world[e.id].push(s));
                            }
                          } catch (m) {
                            r.e(m);
                          } finally {
                            r.f();
                          }
                          return Promise.all(o)
                            .then(function(e) {
                              e.forEach(function(e) {
                                (window.iotmr.world[
                                  window.iotmr.currentWorldId
                                ][e.referenceIndex].id = e.uuid),
                                  (window.iotmr.world[
                                    window.iotmr.currentWorldId
                                  ][e.referenceIndex].object = e.object),
                                  window.iotmr.scene.add(e.object),
                                  e.object.traverse(function(t) {
                                    t.isMesh &&
                                      (!1 ===
                                        window.iotmr.world[
                                          window.iotmr.currentWorldId
                                        ][e.referenceIndex].visible &&
                                        ((t.material.opacity = 0),
                                        (t.material.transparent = !0)),
                                      (t.material.flatShading = !1),
                                      t.geometry.computeVertexNormals());
                                  });
                                var t =
                                  window.iotmr.world[
                                    window.iotmr.currentWorldId
                                  ][e.referenceIndex].actions || {};
                                if ((t.onLoad || {}).animations) {
                                  var n = t.onLoad.animations[0],
                                    i = n.startAt || 0,
                                    o = new p.d(e.object),
                                    a = window.iotmr.world[
                                      window.iotmr.currentWorldId
                                    ][
                                      e.referenceIndex
                                    ].object.children[0].animations.filter(
                                      function(e) {
                                        return e.name === n.name;
                                      }
                                    )[0];
                                  setTimeout(function() {
                                    o.clipAction(a)
                                      .setDuration(
                                        (n.singleLoopDuration || 1e3) / 1e3
                                      )
                                      .play();
                                  }, i),
                                    (window.iotmr.world[
                                      window.iotmr.currentWorldId
                                    ][e.referenceIndex].runtimeInfo = {
                                      animationIndex: 0,
                                      pathIndex: 0,
                                      duration: 0,
                                      lastUpdate: 0,
                                      mixer: o,
                                    });
                                }
                                if ((t.onSelect || {}).animations) {
                                  var r = new p.d(e.object),
                                    d = window.iotmr.world[
                                      window.iotmr.currentWorldId
                                    ][
                                      e.referenceIndex
                                    ].object.children[0].animations.filter(
                                      function(e) {
                                        return (
                                          e.name ===
                                          t.onSelect.animations[0].name
                                        );
                                      }
                                    )[0];
                                  r
                                    .clipAction(d)
                                    .setDuration(
                                      (t.onSelect.animations[0]
                                        .singleLoopDuration || 1e3) / 1e3
                                    )
                                    .play(),
                                    (window.iotmr.world[
                                      window.iotmr.currentWorldId
                                    ][e.referenceIndex].selectedRuntimeInfo = {
                                      animationIndex: 0,
                                      pathIndex: 0,
                                      duration: 0,
                                      lastUpdate: 0,
                                      mixer: r,
                                    });
                                }
                              });
                            })
                            .catch(function(e) {
                              console.error(e);
                            });
                        })(
                          window.iotmr.worlds.filter(function(e) {
                            return e.id === t;
                          })[0]
                        );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      function J(e) {
        var t = o.a.useState({ selectedId: null }),
          n = Object(d.a)(t, 2),
          i = n[0],
          a = n[1];
        return o.a.createElement(
          o.a.Fragment,
          null,
          e.item.map(function(e) {
            return 0 == e.id
              ? o.a.createElement(o.a.Fragment, { key: e.id })
              : o.a.createElement(
                  "div",
                  {
                    key: e.id,
                    className: "world-item",
                    style: {
                      border:
                        e.id === i.selectedId
                          ? "1px solid #b34f0b"
                          : "1px solid #fff",
                    },
                    onClick: function() {
                      a({ selectedId: e.id }),
                        window.iotmr.currentWorldId &&
                          e.id !== window.iotmr.currentWorldId &&
                          window.iotmr.world[window.iotmr.currentWorldId].map(
                            function(e) {
                              e.object && (e.object.visible = !1);
                            }
                          ),
                        (window.iotmr.currentWorldId = e.id),
                        (window.iotmr.center = e.meta.coordinates),
                        window.iotmr.world.hasOwnProperty(e.id)
                          ? window.iotmr.world[window.iotmr.currentWorldId].map(
                              function(e) {
                                e.object && (e.object.visible = !0);
                              }
                            )
                          : Object(V.a)(
                              P.a.mark(function t() {
                                return P.a.wrap(function(t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), G(e.id);
                                      case 2:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            )();
                    },
                  },
                  e.meta.thumbnail &&
                    o.a.createElement("img", {
                      src: e.meta.thumbnail,
                      sty: { objectFit: "contain" },
                    }),
                  o.a.createElement("label", null, e.name),
                  o.a.createElement("p", null, e.description)
                );
          })
        );
      }
      var K = n(82),
        Q = n.n(K),
        Z = n(81),
        $ = n.n(Z),
        ee = n(145),
        te = n(77),
        ne = n.n(te);
      function ie(e) {
        var t = o.a.useState(!0),
          n = Object(d.a)(t, 2),
          i = n[0],
          a = n[1],
          r = function(t) {
            if (t) {
              var n = JSON.parse(t),
                i = window.iotmr.worlds.filter(function(e) {
                  return e.id == n.id;
                })[0];
              if (i) {
                window.iotmr.currentWorldId &&
                  i.id !== window.iotmr.currentWorldId &&
                  window.iotmr.world[window.iotmr.currentWorldId].map(function(
                    e
                  ) {
                    e.object && (e.object.visible = !1);
                  }),
                  (window.iotmr.currentWorldId = i.id),
                  (window.iotmr.center = i.meta.coordinates),
                  window.iotmr.world.hasOwnProperty(i.id)
                    ? window.iotmr.world[window.iotmr.currentWorldId].map(
                        function(e) {
                          e.object && (e.object.visible = !0);
                        }
                      )
                    : Object(V.a)(
                        P.a.mark(function e() {
                          return P.a.wrap(function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), G(i.id);
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )(),
                  window.iotmr.scene.position.set(
                    window.iotmr.center[0] - n.position.x,
                    window.iotmr.center[1] - n.position.z,
                    window.iotmr.center[2] - n.position.y
                  );
                var o = new p.Ib(),
                  a = new p.yb();
                window.iotmr.camera.getWorldDirection(o), a.setFromVector3(o);
                var r = (360 - p.Q.radToDeg(a.theta) - 180).toFixed(0);
                360 == r && (r = 0),
                  r != n.heading &&
                    "undefined" !== typeof window.iotmr.controls.alphaOffset &&
                    (window.iotmr.controls.alphaOffset -= Number(
                      (((n.heading - r) * Math.PI) / 180).toFixed(4)
                    )),
                  window.iotmr.controls.update(),
                  e.onClose();
              }
            }
          };
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 25,
              },
            },
            o.a.createElement("i", {
              style: { fontSize: 70 },
              className: "fas fa-qrcode",
            }),
            o.a.createElement(
              "h2",
              {
                style: {
                  marginLeft: 24,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#606059",
                  letterSpacing: 5,
                },
                id: "simple-modal-title",
              },
              "QR Code Scanner"
            )
          ),
          o.a.createElement(
            "p",
            { id: "simple-modal-description", style: { flex: 1 } },
            o.a.createElement(
              "div",
              { style: { height: "calc(100% - 110px)", position: "relative" } },
              o.a.createElement(
                "div",
                { className: "scan-tip" },
                o.a.createElement(ne.a, {
                  delay: 300,
                  onError: function(e) {},
                  onScan: r,
                  style: { width: "100%" },
                })
              )
            ),
            o.a.createElement(
              "div",
              { style: { textAlign: "center" } },
              o.a.createElement(
                "p",
                null,
                "or type the id of the observation point"
              ),
              o.a.createElement("input", {
                onChange: function(e) {
                  return a(
                    Object(l.a)(
                      Object(l.a)({}, i),
                      {},
                      { observationId: e.target.value }
                    )
                  );
                },
              }),
              o.a.createElement(
                "div",
                { style: { textAlign: "center" } },
                o.a.createElement(
                  ee.a,
                  {
                    style: {
                      fontSize: "18px",
                      color: "#313129",
                      fontWeight: 600,
                    },
                    onClick: function() {
                      var e,
                        t = i.observationId,
                        n = ((null === (e = window.iotmr.worlds) || void 0 === e
                          ? void 0
                          : e.filter(function(e) {
                              return e.id == window.iotmr.currentWorldId;
                            })) || [])[0].meta.observationPoints.filter(
                          function(e) {
                            return e.pointId == t;
                          }
                        );
                      r(JSON.stringify(n[0]));
                    },
                  },
                  "Submit"
                )
              )
            ),
            o.a.createElement(
              "div",
              { style: { textAlign: "center" } },
              o.a.createElement(
                ee.a,
                {
                  style: {
                    fontSize: "18px",
                    color: "#313129",
                    fontWeight: 600,
                  },
                  onClick: e.onClose,
                },
                "Close"
              )
            )
          )
        );
      }
      var oe = n(147),
        ae = n(80),
        re = n.n(ae),
        de = n(79),
        ce = new p.Ib(),
        le = Object(s.b)(
          function(e) {
            return { descriptiveData: e.api.descriptiveData };
          },
          function(e) {
            return {};
          }
        )(function(e) {
          var t,
            n = Object(i.useRef)(),
            a = Object(i.useRef)(),
            r = Object(i.useState)({ geolocation: !1, calibration: !1 }),
            c = Object(d.a)(r, 2),
            s = c[0],
            m = c[1],
            u = Object(i.useState)(null),
            w = Object(d.a)(u, 2),
            g = w[0],
            f = w[1],
            b = Object(i.useState)({
              position: { x: 0, y: 0, z: 0 },
              heading: [0],
            }),
            h = Object(d.a)(b, 2),
            v = h[0],
            y = h[1],
            x = Object(i.useRef)({
              height: null,
              movementY: null,
              previousTouchY: null,
              moved: !1,
            }),
            E = Object(i.useState)(!0),
            _ = Object(d.a)(E, 2),
            j = _[0],
            I = _[1],
            O =
              0 !== window.iotmr.currentWorldId &&
              (null ===
                (t = window.iotmr.worlds.filter(function(e) {
                  return window.iotmr.currentWorldId === e.id;
                })[0]) || void 0 === t
                ? void 0
                : t.actions);
          o.a.useEffect(
            function() {
              if (s.geolocation) {
                var e, t;
                ({ latitude: 0, longitude: 0 },
                  (t = { enableHighAccuracy: !1, timeout: 5e3, maximumAge: 0 }),
                  (e = navigator.geolocation.watchPosition(
                    function(t) {
                      if (!window.iotmr.camera.position) return !1;
                      var n = t.coords.latitude,
                        i = t.coords.longitude,
                        o = Object(D.a)([n, i, 0]),
                        a = Number((o[0] - window.iotmr.center[0]).toFixed(4)),
                        r = Number(window.iotmr.camera.position.y.toFixed(4)),
                        d = Number((o[1] - window.iotmr.center[2]).toFixed(4));
                      if (Math.abs(a) > 1e3 || Math.abs(d) > 1e3) {
                        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(d, 2));
                        return (
                          alert(
                            "Your location is to far from the virtual world. You are ".concat(
                              c.toFixed(2),
                              " meter far away."
                            )
                          ),
                          m(
                            Object(l.a)(
                              Object(l.a)({}, s),
                              {},
                              { geolocation: !1 }
                            )
                          ),
                          navigator.geolocation.clearWatch(e),
                          !0
                        );
                      }
                      window.iotmr.camera.position.set(a, r, d);
                    },
                    function(e) {
                      console.warn("ERROR(" + e.code + "): " + e.message);
                    },
                    t
                  )));
              }
            },
            [s.geolocation]
          ),
            o.a.useEffect(function() {
              setInterval(function() {
                if (!window.iotmr.camera.position) return !1;
                var e = window.iotmr.camera.position,
                  t = e.x,
                  n = e.y,
                  i = e.z,
                  o = new p.Ib(),
                  a = new p.yb();
                window.iotmr.camera.getWorldDirection(o), a.setFromVector3(o);
                var r = (360 - p.Q.radToDeg(a.theta) - 180).toFixed(0);
                360 == r && (r = 0);
                var c = Object(d.a)(window.iotmr.center, 3),
                  l = c[0],
                  s = c[1],
                  m = c[2];
                y({
                  position: {
                    x: (l + t).toFixed(2) + "m",
                    y: (m + i).toFixed(2) + "m",
                    z: (s + n).toFixed(2) + "m",
                  },
                  heading: r + "deg",
                });
              }, 1e3);
            }, []);
          var S = Object(i.useState)("Adjust"),
            L = Object(d.a)(S, 2),
            N = L[0],
            A = L[1],
            M = Object(i.useRef)(),
            T = Object(i.useRef)();
          function C(e) {
            window.iotmr.camera.getWorldDirection(ce),
              window.iotmr.camera.position.addScaledVector(ce, e);
          }
          return o.a.createElement(
            "div",
            { id: "controls" },
            o.a.createElement("img", {
              id: "logo",
              width: 120,
              height: 87.9375,
              src: "/logo-transparent.png",
            }),
            o.a.createElement(
              "div",
              { id: "actions-menu" },
              o.a.createElement(R, {
                actions: [
                  {
                    icon: o.a.createElement(
                      "div",
                      {
                        style: e.renderVideo ? {} : { pointerEvents: "none" },
                        onClick: function() {
                          return f(
                            o.a.createElement(ie, {
                              onClose: function(e) {
                                f(null);
                              },
                            })
                          );
                        },
                      },
                      o.a.createElement("i", {
                        style: { fontSize: 18 },
                        className: "fas fa-qrcode",
                      })
                    ),
                    name: "QR Scan",
                    disabled: !e.renderVideo,
                  },
                  {
                    icon: o.a.createElement(
                      "span",
                      {
                        onClick: function() {
                          m(
                            Object(l.a)(
                              Object(l.a)({}, s),
                              {},
                              { calibration: !s.calibration }
                            )
                          );
                        },
                        id: "calibration",
                      },
                      o.a.createElement(re.a, null)
                    ),
                    name: "Calibrate",
                  },
                  {
                    icon: o.a.createElement($.a, {
                      onClick: function() {
                        document.fullscreenElement
                          ? document.exitFullscreen()
                          : window.document.body
                              .requestFullscreen()
                              .catch(function(e) {
                                alert(
                                  "Error attempting to enable full-screen mode: "
                                    .concat(e.message, " (")
                                    .concat(e.name, ")")
                                );
                              });
                      },
                    }),
                    name: "Full Screen",
                  },
                  {
                    icon: o.a.createElement(
                      "span",
                      {
                        onClick: function() {
                          e.setRenderVideo(!1),
                            window.iotmr.realities.virtual();
                        },
                      },
                      "VR"
                    ),
                    name: "Virtual Reality",
                  },
                  {
                    icon: o.a.createElement(
                      "span",
                      {
                        onClick: function() {
                          e.setRenderVideo(!0), window.iotmr.realities.mixed();
                        },
                      },
                      "MR"
                    ),
                    name: "Mixed Reality",
                  },
                  {
                    icon: o.a.createElement(
                      "span",
                      {
                        onClick: function() {
                          e.setRenderVideo(!1),
                            window.iotmr.realities.virtual();
                        },
                        id: "vrh",
                      },
                      "VRH"
                    ),
                    name: "VR Headset",
                  },
                  {
                    icon: o.a.createElement(
                      "span",
                      {
                        style: e.renderVideo
                          ? {
                              pointerEvents: "none",
                              textDecoration: "line-through",
                            }
                          : {},
                        onClick: function() {
                          e.setRenderVideo(!1),
                            window.iotmr.realities.mixedMRH();
                        },
                        id: "mrh",
                      },
                      "MRH"
                    ),
                    name: "MR Headset",
                    disabled: e.renderVideo,
                  },
                  {
                    icon: o.a.createElement(
                      "span",
                      {
                        onClick: function() {
                          I(!j);
                        },
                        id: "shi",
                      },
                      o.a.createElement("i", {
                        className: "fas fa-info-circle",
                      })
                    ),
                    name: "Show/Hide Info",
                  },
                  {
                    icon: o.a.createElement(
                      "span",
                      {
                        onClick: function() {
                          m(
                            Object(l.a)(
                              Object(l.a)({}, s),
                              {},
                              { geolocation: !s.geolocation }
                            )
                          );
                        },
                        id: "geolocation",
                      },
                      o.a.createElement(Q.a, null)
                    ),
                    name: "Geolocate",
                  },
                ],
              }),
              s.calibration &&
                o.a.createElement(
                  oe.a,
                  {
                    style: {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: "0px",
                      left: "0px",
                      zIndex: 100,
                      background: "rgba(0,0,0,0.4)",
                      display: "flex",
                      gap: "12px",
                      pointerEvents: "auto",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      padding: "50px",
                    },
                  },
                  o.a.createElement(
                    oe.a,
                    {
                      style: {
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      },
                      onClick: function() {
                        return A("Adjust" === N ? "Move" : "Adjust");
                      },
                    },
                    N
                  ),
                  o.a.createElement(de.Joystick, {
                    size: 100,
                    baseColor: "#323229",
                    stickColor: "#b64f0c",
                    move: function(e) {
                      "Adjust" == N
                        ? (window.iotmr.controls.alphaOffset -=
                            (0.001 * e.x) / 50)
                        : ("FORWARDS" !== M.current &&
                            e.y > 0 &&
                            ((M.current = "FORWARDS"),
                            clearInterval(T.current),
                            (T.current = setInterval(function() {
                              C(0.1);
                            }, 60))),
                          "BACKWARDS" !== M.current &&
                            e.y < 0 &&
                            ((M.current = "BACKWARDS"),
                            clearInterval(T.current),
                            (T.current = setInterval(function() {
                              C(-0.1);
                            }, 60))));
                    },
                    stop: function() {
                      clearInterval(T.current);
                    },
                  }),
                  o.a.createElement(
                    oe.a,
                    {
                      style: {
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      },
                      onClick: function() {
                        return m(
                          Object(l.a)(
                            Object(l.a)({}, s),
                            {},
                            { calibration: !1 }
                          )
                        );
                      },
                    },
                    "Close"
                  )
                ),
              j &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    "div",
                    { id: "info-panel" },
                    o.a.createElement(
                      "div",
                      { className: "info-group" },
                      o.a.createElement("label", null, "Position"),
                      o.a.createElement(
                        "div",
                        null,
                        ""
                          .concat(v.position.x, ",")
                          .concat(v.position.y, ",")
                          .concat(v.position.z)
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: "info-group" },
                      o.a.createElement("label", null, "Heading"),
                      o.a.createElement("div", null, v.heading)
                    )
                  ),
                  o.a.createElement(
                    "div",
                    { id: "available-worlds" },
                    o.a.createElement(J, { item: window.iotmr.worlds })
                  )
                ),
              o.a.createElement(
                "div",
                {
                  id: "descriptive-data-container",
                  ref: function(e) {
                    return (a.current = e);
                  },
                },
                o.a.createElement(ee.a, {
                  id: "slider-helper",
                  onMouseDown: k(a, n, x),
                  onTouchStart: k(a, n, x),
                  ref: function(e) {
                    return (n.current = e);
                  },
                }),
                o.a.createElement("div", { id: "slider" }),
                O &&
                  o.a.createElement(
                    "div",
                    { className: "world-actions" },
                    O.map(function(e) {
                      return o.a.createElement(
                        "div",
                        {
                          key: e.name,
                          className: "world-action",
                          onClick: e.run,
                        },
                        e.name
                      );
                    })
                  ),
                e.descriptiveData
                  ? o.a.createElement("div", {
                      id: "descriptive-data",
                      dangerouslySetInnerHTML: { __html: e.descriptiveData },
                    })
                  : o.a.createElement(
                      "div",
                      { id: "descriptive-data", style: { overflowY: "auto" } },
                      o.a.createElement("i", {
                        className: "mm-icons far fa-comment-dots",
                      }),
                      o.a.createElement(
                        "p",
                        null,
                        "Please select an object to reveal descriptive data"
                      )
                    )
              ),
              g &&
                o.a.createElement(B, {
                  data: g,
                  onClose: function() {
                    f(null);
                  },
                })
            )
          );
        }),
        se = n(84),
        me = Object(se.a)({
          palette: {
            primary: { main: "#b34f0b" },
            secondary: { main: "#323228" },
          },
        });
      var ue = function() {
        var e = o.a.useState(!1),
          t = Object(d.a)(e, 2),
          n = t[0],
          i = t[1];
        return o.a.createElement(
          c.a,
          { theme: me },
          o.a.createElement(
            "div",
            { className: "App" },
            o.a.createElement(L, { renderVideo: n }),
            o.a.createElement(le, {
              renderVideo: n,
              setRenderVideo: function(e) {
                return i(e);
              },
            })
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var pe,
        we = n(32),
        ge = n(83),
        fe = (n(117), { currentAction: "immerse", descriptiveData: null }),
        be = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : fe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "SET_DESCRIPTIVE_DATA":
              var n = t.descriptiveData;
              return Object.assign({}, e, { descriptiveData: n });
            default:
              return e;
          }
        },
        he = {
          id: "006cb9aE-S32A",
          name: "Test World",
          description: "",
          content: [
            {
              type: "virtual",
              ground: !0,
              selectable: !1,
              url: "/grafeio.glb",
              position: [-2.5, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
            },
          ],
          meta: {
            authors: [
              { firstName: "Konstantinos", lastName: "Evanggelidis" },
              { firstName: "Theofilos", lastName: "Papadopoulos" },
            ],
            thumbnail: "".concat("", "/worldThree-Thumbnail.png"),
            coordinates: [0, 0, 0],
            observationPoints: [
              {
                id: "006cb9aE-S32A",
                pointId: 1,
                position: { x: 5, y: -2.5, z: 1.7 },
                heading: 230,
              },
            ],
          },
        },
        ve = {
          id: "006cb9aE-F316",
          name: "White Tower Of Thessaloniki",
          description:
            "A simple overview of the area near the tower of thessaloniki.",
          actions: [
            {
              name: "Show/Hide Virtual",
              run: function() {
                window.iotmr.world[window.iotmr.currentWorldId].map(function(
                  e
                ) {
                  "virtual" === e.type &&
                    (e.object.visible = !e.object.visible);
                });
              },
            },
            {
              name: "Show/Hide Mapped Textured",
              run: function() {
                window.iotmr.world[window.iotmr.currentWorldId].map(function(
                  e
                ) {
                  "mapped" === e.type &&
                    ((e.object.visible = !e.object.visible),
                    e.object.traverse(function(e) {
                      e.isMesh &&
                        ((e.material.blending = p.eb),
                        (e.material.color = new p.m("#fff")),
                        (e.material.wireframe = !1),
                        (e.material.needsUpdate = !0));
                    }));
                });
              },
            },
            {
              name: "Show/Hide Mapped Black",
              run: function() {
                window.iotmr.world[window.iotmr.currentWorldId].map(function(
                  e
                ) {
                  "mapped" === e.type &&
                    ((e.object.visible = !e.object.visible),
                    (e.object.renderOrder = 999),
                    e.object.traverse(function(e) {
                      e.isMesh &&
                        ((e.material.wireframe = !1),
                        (e.material.blending = p.eb),
                        (e.material.color = new p.m("#000")),
                        (e.material.needsUpdate = !0));
                    }));
                });
              },
            },
            {
              name: "Show/Hide Mixed Objects Semi Transparent",
              run: function() {
                window.iotmr.world[window.iotmr.currentWorldId].map(function(
                  e
                ) {
                  "mapped" === e.type &&
                    ((e.object.visible = !e.object.visible),
                    (e.object.renderOrder = 999),
                    e.object.traverse(function(e) {
                      e.isMesh &&
                        ((e.material.wireframe = !1),
                        (e.material.blending = p.a),
                        (e.material.color = new p.m("#fff")),
                        (e.material.needsUpdate = !0));
                    }));
                });
              },
            },
            {
              name: "Show/Hide Mixed Objects Transparent",
              run: function() {
                window.iotmr.world[window.iotmr.currentWorldId].map(function(
                  e
                ) {
                  "mapped" === e.type &&
                    ((e.object.visible = !e.object.visible),
                    (e.object.renderOrder = 999),
                    e.object.traverse(function(e) {
                      e.isMesh &&
                        ((e.material.wireframe = !1),
                        (e.material.blending = p.a),
                        (e.material.color = new p.m("#000")),
                        (e.material.needsUpdate = !0));
                    }));
                });
              },
            },
            {
              name: "Change FoV",
              run: function() {
                (window.iotmr.camera.fov += 5),
                  window.iotmr.camera.fov > 130 &&
                    (window.iotmr.camera.fov = 50),
                  window.iotmr.camera.updateProjectionMatrix();
              },
            },
          ],
          content: [
            {
              refId: "white_tower",
              type: "virtual",
              url: "/white-tower.gltf",
              position: [4522513.2664, 15.25, 2625771.4946],
              rotation: [0, 0, 0],
              scale: [1.1, 1.1, 1.1],
              selectable: !0,
              actions: [],
              description: '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/white-tower.html"></iframe>'
              ),
            },
            {
              type: "mapped",
              ground: !0,
              selectable: !1,
              url: "/white-tower-area.glb",
              position: [4522507.2664, 15.25, 2625770.4946],
              rotation: [0, -Math.PI / 2, 0],
              scale: [1, 1, 1],
              description: "",
            },
            {
              type: "virtual",
              url: "/helicopter.glb",
              position: [4522532.38, 40, 2625794],
              rotation: [0, Math.PI / 2, 0],
              scale: [1.1, 1.1, 1.1],
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "CINEMA_4D_Main",
                      singleLoopDuration: 1e3,
                      path: [
                        [4522532.38, 40, 2625794],
                        [4522542.11, 40, 2625783.32],
                        [4522545.73, 40, 2625767.83],
                        [4522544.29, 40, 2625755.49],
                        [4522533.2, 40, 2625739.59],
                        [4522517.22, 40, 2625728.5],
                        [4522490.18, 40, 2625722.84],
                        [4522469.34, 40, 2625740.86],
                        [4522461.2, 40, 2625769.94],
                        [4522476.58, 40, 2625796.28],
                        [4522503.64, 40, 2625804.17],
                        [4522532.38, 40, 2625794],
                      ],
                      speed: 45,
                      speedUnit: "km/h",
                    },
                  ],
                },
              },
              description: '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/soldier.html"></iframe>'
              ),
            },
            ((pe = {
              type: "virtual",
              url: "/man.glb",
              selectable: !1,
              position: [4522519.65, 15.58, 2625805.5],
              rotation: [0, 0, 0],
              scale: [2, 2, 2],
              smoothRotation: !1,
            }),
            Object(N.a)(pe, "selectable", !0),
            Object(N.a)(pe, "actions", {
              onLoad: {
                animations: [
                  {
                    name: "Take 001",
                    singleLoopDuration: 1e3,
                    path: [
                      [4522519.65, 15.58, 2625805.5],
                      [4522524.24, 15.7, 2625800.43],
                      [4522530.28, 16.05, 2625794.24],
                      [4522534.54, 16.24, 2625790.12],
                      [4522540.35, 16.26, 2625784.5],
                      [4522542.02, 16.46, 2625778.88],
                      [4522539.23, 16.56, 2625769.28],
                      [4522537.11, 16.58, 2625763.71],
                      [4522533.94, 16.73, 2625759.93],
                      [4522531.36, 16.61, 2625757.23],
                      [4522530.56, 16.62, 2625755.17],
                      [4522528.4, 16.64, 2625752.29],
                      [4522523.42, 16.64, 2625748.53],
                      [4522517.18, 16.59, 2625744],
                      [4522511.25, 16.61, 2625740.3],
                      [4522506.57, 16.48, 2625737.46],
                      [4522503.06, 16.46, 2625737.66],
                      [4522498.91, 16.3, 2625739.57],
                      [4522493.38, 15.89, 2625740.6],
                      [4522486.96, 15.57, 2625743.43],
                      [4522479.19, 15.23, 2625749.28],
                      [4522478.52, 15.13, 2625752.2],
                      [4522474.53, 15, 2625758.14],
                      [4522474.4, 14.93, 2625767.36],
                      [4522477.27, 15.25, 2625774.56],
                      [4522477.27, 15.25, 2625781.59],
                      [4522480.91, 14.73, 2625793.36],
                      [4522489.27, 14.88, 2625796.78],
                      [4522501.6, 15.05, 2625802.34],
                      [4522514.55, 15.29, 2625811.76],
                      [4522519.65, 15.58, 2625805.5],
                    ],
                    speed: 8,
                    speedUnit: "km/h",
                  },
                ],
              },
            }),
            Object(N.a)(
              pe,
              "description",
              '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/soldier.html"></iframe>'
              )
            ),
            pe),
            {
              type: "virtual",
              url: "/man.glb",
              selectable: !1,
              position: [4522476.11, 15.03, 2625758.52],
              rotation: [0, 0, 0],
              scale: [2, 2, 2],
              smoothRotation: !1,
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "Take 001",
                      singleLoopDuration: 1200,
                      path: [
                        [4522476.11, 15.03, 2625758.52],
                        [4522482.1, 14.77, 2625793.26],
                        [4522476.11, 15.03, 2625758.52],
                      ],
                      speed: 6,
                      speedUnit: "km/h",
                    },
                  ],
                },
              },
            },
            {
              type: "virtual",
              url: "/man.glb",
              selectable: !1,
              position: [4522513.55, 15.18, 2625816.88],
              rotation: [0, 0, 0],
              scale: [2, 2, 2],
              smoothRotation: !1,
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "Take 001",
                      singleLoopDuration: 1400,
                      path: [
                        [4522513.55, 15.18, 2625816.88],
                        [4522529.4, 16.04, 2625795.93],
                        [4522513.55, 15.18, 2625816.88],
                      ],
                      speed: 4,
                      speedUnit: "km/h",
                    },
                  ],
                },
              },
              description: '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/soldier.html"></iframe>'
              ),
            },
            {
              type: "virtual",
              url: "/man.glb",
              selectable: !1,
              position: [4522512.53, 15.27, 2625812.8],
              rotation: [0, 0, 0],
              scale: [2, 2, 2],
              smoothRotation: !1,
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "Take 001",
                      singleLoopDuration: 1e3,
                      path: [
                        [4522512.53, 15.27, 2625812.8],
                        [4522525.04, 15.8, 2625798.98],
                        [4522512.53, 15.27, 2625812.8],
                      ],
                      speed: 8,
                      speedUnit: "km/h",
                    },
                  ],
                },
              },
              description: '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/soldier.html"></iframe>'
              ),
            },
            {
              type: "virtual",
              url: "/Soldier.glb",
              position: [4522519.65, 15.58, 2625805.5],
              rotation: [0, Math.PI, 0],
              scale: [1.5, 1.5, 1.5],
              smoothRotation: !1,
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "Run",
                      path: [
                        [4522519.65, 15.58, 2625805.5],
                        [4522524.24, 15.7, 2625800.43],
                        [4522530.28, 16.05, 2625794.24],
                        [4522534.54, 16.24, 2625790.12],
                        [4522540.35, 16.26, 2625784.5],
                        [4522542.02, 16.46, 2625778.88],
                        [4522539.23, 16.56, 2625769.28],
                        [4522537.11, 16.58, 2625763.71],
                        [4522533.94, 16.73, 2625759.93],
                        [4522531.36, 16.61, 2625757.23],
                        [4522530.56, 16.62, 2625755.17],
                        [4522528.4, 16.64, 2625752.29],
                        [4522523.42, 16.64, 2625748.53],
                        [4522517.18, 16.59, 2625744],
                        [4522511.25, 16.61, 2625740.3],
                        [4522506.57, 16.48, 2625737.46],
                        [4522503.06, 16.46, 2625737.66],
                        [4522498.91, 16.3, 2625739.57],
                        [4522493.38, 15.89, 2625740.6],
                        [4522486.96, 15.57, 2625743.43],
                        [4522479.19, 15.23, 2625749.28],
                        [4522478.52, 15.13, 2625752.2],
                        [4522474.53, 15, 2625758.14],
                        [4522474.4, 14.93, 2625767.36],
                        [4522477.27, 15.25, 2625774.56],
                        [4522477.27, 15.25, 2625781.59],
                        [4522480.91, 14.73, 2625793.36],
                        [4522489.27, 14.88, 2625796.78],
                        [4522501.6, 15.05, 2625802.34],
                        [4522514.55, 15.29, 2625811.76],
                      ],
                      speed: 13,
                      speedUnit: "km/h",
                    },
                  ],
                },
                onSelect: {
                  animations: [
                    {
                      name: "Idle",
                      duration: 1 / 0,
                      path: [[30, 0, 30]],
                      lookAt: "camera",
                    },
                  ],
                },
              },
              description: '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/soldier.html"></iframe>'
              ),
            },
            {
              type: "virtual",
              url: "/man.glb",
              selectable: !1,
              position: [4522524.93, 16.66, 2625749.88],
              rotation: [0, 0, 0],
              scale: [2, 2, 2],
              smoothRotation: !1,
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "Take 001",
                      singleLoopDuration: 1400,
                      path: [
                        [4522524.93, 16.66, 2625749.88],
                        [4522503, 16.45, 2625736.87],
                        [4522524.93, 16.66, 2625749.88],
                      ],
                      speed: 4,
                      speedUnit: "km/h",
                    },
                  ],
                },
              },
              description: '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/soldier.html"></iframe>'
              ),
            },
          ],
          meta: {
            authors: [
              { firstName: "Konstantinos", lastName: "Evanggelidis" },
              { firstName: "Theofilos", lastName: "Papadopoulos" },
            ],
            thumbnail: "".concat("", "/worldOne-Thumbnail.png"),
            coordinates: [4522507.2664, 15.25, 2625770.4946],
            observationPoints: [
              {
                id: "006cb9aE-F316",
                pointId: 1,
                position: { x: 4522473.81, y: 2625774.06, z: 16.7 },
                heading: 85,
              },
              {
                id: "006cb9aE-F316",
                pointId: 2,
                position: { x: 4522516.39, y: 2625740.93, z: 18.6 },
                heading: 190,
              },
              {
                id: "006cb9aE-F316",
                pointId: 3,
                position: { x: 4522523.05, y: 2625809.84, z: 17.5 },
                heading: 348,
              },
            ],
          },
        },
        ye = {
          id: "006cb9aE-S322",
          name: "14th Century Great Wall",
          description:
            "A simple overview of the area near the tower of thessaloniki.",
          content: [
            {
              type: "mapped",
              url: "/14th_century_great_wall.glb",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              ground: !0,
              actions: [],
              description: '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/white-tower.html"></iframe>'
              ),
            },
            {
              type: "virtual",
              url: "/animated_dragon.glb",
              position: [1.5, 13, 3],
              rotation: [0, 0, 0],
              scale: [20, 20, 20],
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "idle",
                      duration: 1 / 0,
                      singleLoopDuration: 5e3,
                      path: [[1.5, 13, 3]],
                    },
                  ],
                },
                onSelect: {
                  animations: [
                    {
                      name: "flying",
                      duration: 1 / 0,
                      singleLoopDuration: 6e3,
                      path: [[1.5, 15, 3]],
                      lookAt: "camera",
                    },
                  ],
                },
              },
              description: '<iframe\n          style="\n            width: 100%;\n            height: 100%;\n            border:none;"\n          src="'.concat(
                "",
                '/templates/soldier.html"></iframe>'
              ),
            },
          ],
          meta: {
            authors: [
              { firstName: "Konstantinos", lastName: "Evanggelidis" },
              { firstName: "Theofilos", lastName: "Papadopoulos" },
            ],
            thumbnail: "".concat("", "/worldTwo-Thumbnail.png"),
            coordinates: [0, 0, 0],
          },
        },
        xe = {
          id: "006cb9aE-S324",
          name: "Apollonia Bath",
          description: "Simulation of the Otoman Bath in Apollonia.",
          content: [
            {
              type: "virtual",
              ground: !0,
              selectable: !1,
              url: "/testworld/ground.glb",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
            },
            {
              type: "virtual",
              selectable: !1,
              opacity: 0.2,
              url: "/testworld/hamam.glb",
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
            },
            {
              type: "virtual",
              url: "/testworld/SCENE 3/3D GLOVE.glb",
              selectable: !1,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
              actions: {
                onLoad: {
                  animations: [
                    {
                      startAt: 0,
                      name: "Bip04 GLOVE|Take 001|BaseLayer",
                      duration: 83e3,
                      singleLoopDuration: 83e3,
                      path: [[0, 0, 0]],
                    },
                  ],
                },
              },
            },
            {
              type: "virtual",
              url: "/testworld/SCENE 3/3D ANC MAN 1 S3.glb",
              selectable: !1,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
              actions: {
                onLoad: {
                  animations: [
                    {
                      startAt: 0,
                      name: "Bip01|Take 001|BaseLayer.001",
                      duration: 83e3,
                      singleLoopDuration: 83e3,
                      path: [[0, 0, 0]],
                    },
                  ],
                },
              },
            },
            {
              type: "virtual",
              url: "/testworld/SCENE 3/3D ANC MAN 4 S3.glb",
              selectable: !1,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
              actions: {
                onLoad: {
                  animations: [
                    {
                      startAt: 0,
                      name: "Bip04|Take 001|BaseLayer.004",
                      duration: 83e3,
                      singleLoopDuration: 83e3,
                      path: [[0, 0, 0]],
                    },
                  ],
                },
              },
            },
            {
              type: "virtual",
              url: "/testworld/SCENE 3/3D COPPER BOWL.glb",
              selectable: !1,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "3D COPPER BOWL|Take 001|BaseLayer",
                      duration: 83e3,
                      singleLoopDuration: 83e3,
                      path: [[0, 0, 0]],
                    },
                  ],
                },
              },
            },
            {
              type: "virtual",
              url: "/testworld/SCENE 2/taksidiotisS2.glb",
              selectable: !1,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "Bip01|Take 001|BaseLayer.002",
                      duration: 33e3,
                      singleLoopDuration: 33e3,
                      path: [[0, 0, 0]],
                    },
                  ],
                },
              },
            },
            {
              type: "virtual",
              url: "/testworld/SCENE 1/taksidiotis.glb",
              selectable: !1,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "Bip MAN 1|Take 001|BaseLayer",
                      duration: 33e3,
                      singleLoopDuration: 33e3,
                      path: [[0, 0, 0]],
                    },
                  ],
                },
              },
            },
            {
              type: "virtual",
              url: "/testworld/SCENE 1/loutraris.glb",
              selectable: !1,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "Bip MAN L|Take 001|BaseLayer.001",
                      duration: 33e3,
                      singleLoopDuration: 33e3,
                      path: [[0, 0, 0]],
                    },
                  ],
                },
              },
            },
            {
              type: "virtual",
              url: "/testworld/SCENE 1/petseta.glb",
              selectable: !1,
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
              description: "",
              actions: {
                onLoad: {
                  animations: [
                    {
                      name: "3D PESHTEMAL|Take 001|BaseLayer",
                      duration: 33e3,
                      singleLoopDuration: 33e3,
                      path: [[0, 0, 0]],
                    },
                  ],
                },
              },
            },
          ],
          meta: {
            authors: [
              { firstName: "Konstantinos", lastName: "Evanggelidis" },
              { firstName: "Theofilos", lastName: "Papadopoulos" },
            ],
            thumbnail: "".concat("", "/worldThree-Thumbnail.png"),
            coordinates: [0, 0, 0],
            observationPoints: [
              {
                id: "006cb9aE-S324",
                pointId: 1,
                position: { x: -1.03, y: 43.05, z: 1.7 },
                heading: 9,
              },
              {
                id: "006cb9aE-S324",
                pointId: 2,
                position: { x: 6.33, y: 7.77, z: 1.7 },
                heading: 323,
              },
              {
                id: "006cb9aE-S324",
                pointId: 3,
                position: { x: 0.22, y: -1.36, z: 1.7 },
                heading: 89,
              },
              {
                id: "006cb9aE-S324",
                pointId: 4,
                position: { x: 8.36, y: -4.61, z: 1.7 },
                heading: 286,
              },
              {
                id: "006cb9aE-S324",
                pointId: 5,
                position: { x: 44.77, y: 35.64, z: 1.7 },
                heading: 318,
              },
            ],
          },
        };
      window.iotmr = {
        modelLayer: [],
        vectors: [],
        plane: {},
        sky: {},
        mixers: [],
        camera: {},
        controls: {},
        scene: {},
        renderer: {},
        pointer: {},
        partials: {},
        loaders: {},
        selected: { object: null, material: null },
        listeners: { mouseMoved: !1 },
        center: [0, 0, 0],
        onWindowResize: function() {},
        world: {},
        currentWorldId: 0,
        worlds: [
          {
            id: "0",
            name: "Start World",
            description: "Start World",
            content: [],
            meta: {
              authors: [
                { firstName: "Konstantinos", lastName: "Evanggelidis" },
                { firstName: "Theofilos", lastName: "Papadopoulos" },
              ],
              coordinates: [0, 0, 0],
            },
          },
          ve,
          ye,
          xe,
          he,
        ],
      };
      var Ee = Object(we.b)({ api: be }),
        _e = document.getElementById("root"),
        je =
          (Object(ge.createLogger)({}),
          Object(we.c)(
            Ee,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
          ));
      r.a.render(
        o.a.createElement(s.a, { store: je }, o.a.createElement(ue, null)),
        _e
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function(e) {
              e.unregister();
            })
            .catch(function(e) {
              console.error(e.message);
            });
    },
    95: function(e, t, n) {
      e.exports = n(118);
    },
  },
  [[95, 1, 2]],
]);
//# sourceMappingURL=main.699bc536.chunk.js.map
