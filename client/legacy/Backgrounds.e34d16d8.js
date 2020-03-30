import { _ as _inherits, a as _classCallCheck, i as init, s as safe_not_equal, b as _assertThisInitialized, d as dispatch_dev, l as _createClass, S as SvelteComponentDev, v as validate_slots, c as _getPrototypeOf, e as _possibleConstructorReturn, p as element, D as space, r as claim_element, u as children, f as detach_dev, E as claim_space, w as attr_dev, x as add_location, y as insert_dev, z as append_dev, A as set_input_value, B as listen_dev, C as _slicedToArray, n as noop } from './client.ea09e1e2.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Backgrounds.svelte";

function create_fragment(ctx) {
  var div0;
  var t;
  var div1;
  var textarea;
  var dispose;
  var block = {
    c: function create() {
      div0 = element("div");
      t = space();
      div1 = element("div");
      textarea = element("textarea");
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", {
        class: true,
        style: true
      });
      children(div0).forEach(detach_dev);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      textarea = claim_element(div1_nodes, "TEXTAREA", {
        class: true,
        rows: true
      });
      children(textarea).forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "bg");
      attr_dev(div0, "style",
      /*style*/
      ctx[1]);
      add_location(div0, file, 33, 0, 1252);
      attr_dev(textarea, "class", "block svelte-1oq615h");
      attr_dev(textarea, "rows", "5");
      add_location(textarea, file, 36, 2, 1303);
      attr_dev(div1, "class", "border svelte-1oq615h");
      add_location(div1, file, 35, 0, 1280);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, div0, anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, textarea);
      set_input_value(textarea,
      /*bgStyle*/
      ctx[0]);
      if (remount) dispose();
      dispose = listen_dev(textarea, "input",
      /*textarea_input_handler*/
      ctx[2]);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*style*/
      2) {
        attr_dev(div0, "style",
        /*style*/
        ctx[1]);
      }

      if (dirty &
      /*bgStyle*/
      1) {
        set_input_value(textarea,
        /*bgStyle*/
        ctx[0]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div0);
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div1);
      dispose();
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
  var _$$props$bgStyle = $$props.bgStyle,
      bgStyle = _$$props$bgStyle === void 0 ? "" : _$$props$bgStyle;
  var style = "\n    height: 100vh;\n    width: 100%;\n    position: fixed;\n    z-index: -1;\n";
  var writable_props = ["bgStyle"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Backgrounds> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Backgrounds", $$slots, []);

  function textarea_input_handler() {
    bgStyle = this.value;
    $$invalidate(0, bgStyle);
  }

  $$self.$set = function ($$props) {
    if ("bgStyle" in $$props) $$invalidate(0, bgStyle = $$props.bgStyle);
  };

  $$self.$capture_state = function () {
    return {
      bgStyle: bgStyle,
      style: style
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("bgStyle" in $$props) $$invalidate(0, bgStyle = $$props.bgStyle);
    if ("style" in $$props) $$invalidate(1, style = $$props.style);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*style, bgStyle*/
    3) {
       $$invalidate(1, style = style + bgStyle);
    }
  };

  return [bgStyle, style, textarea_input_handler];
}

var Backgrounds = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Backgrounds, _SvelteComponentDev);

  var _super = _createSuper(Backgrounds);

  function Backgrounds(options) {
    var _this;

    _classCallCheck(this, Backgrounds);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      bgStyle: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Backgrounds",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Backgrounds, [{
    key: "bgStyle",
    get: function get() {
      throw new Error("<Backgrounds>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Backgrounds>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Backgrounds;
}(SvelteComponentDev);

export { Backgrounds as B };
