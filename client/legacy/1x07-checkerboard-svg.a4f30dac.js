import { _ as _inherits, a as _classCallCheck, i as init, s as safe_not_equal, b as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, v as validate_slots, c as _getPrototypeOf, e as _possibleConstructorReturn, g as create_component, h as claim_component, m as mount_component, n as noop, t as transition_in, j as transition_out, k as destroy_component } from './client.8b67df15.js';
import { B as Backgrounds } from './Backgrounds.864550a0.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var current;
  var backgrounds = new Backgrounds({
    props: {
      bgStyle:
      /*bgStyle*/
      ctx[0]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(backgrounds.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(backgrounds.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(backgrounds, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(backgrounds.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(backgrounds.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(backgrounds, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var bgStyle = "\nbackground: hsla(0, 0%, 100%, .5) url('data:image/svg+xml,            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" fill-opacity=\".25\" >            <rect x=\"50\" width=\"50\" height=\"50\" />            <rect y=\"50\" width=\"50\" height=\"50\" />            </svg>');\nbackground-size: 50px 50px;\n  ";
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<_1x07_checkerboard_svg> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("_1x07_checkerboard_svg", $$slots, []);

  $$self.$capture_state = function () {
    return {
      Backgrounds: Backgrounds,
      bgStyle: bgStyle
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("bgStyle" in $$props) $$invalidate(0, bgStyle = $$props.bgStyle);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [bgStyle];
}

var _1x07_checkerboard_svg = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(_1x07_checkerboard_svg, _SvelteComponentDev);

  var _super = _createSuper(_1x07_checkerboard_svg);

  function _1x07_checkerboard_svg(options) {
    var _this;

    _classCallCheck(this, _1x07_checkerboard_svg);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "_1x07_checkerboard_svg",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return _1x07_checkerboard_svg;
}(SvelteComponentDev);

export default _1x07_checkerboard_svg;
