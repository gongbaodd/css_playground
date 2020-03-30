import { _ as _inherits, a as _classCallCheck, i as init, s as safe_not_equal, b as _assertThisInitialized, d as dispatch_dev, l as _createClass, S as SvelteComponentDev, o as onMount, v as validate_slots, c as _getPrototypeOf, e as _possibleConstructorReturn, p as element, r as claim_element, u as children, f as detach_dev, w as attr_dev, x as add_location, y as insert_dev, z as append_dev, A as set_input_value, B as listen_dev, C as _slicedToArray, n as noop } from './client.8b67df15.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Borders.svelte";

function create_fragment(ctx) {
  var div;
  var textarea;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      textarea = element("textarea");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      textarea = claim_element(div_nodes, "TEXTAREA", {
        class: true,
        style: true,
        rows: true
      });
      children(textarea).forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(textarea, "class", "block svelte-1wuoern");
      attr_dev(textarea, "style",
      /*stylecontent*/
      ctx[0]);
      attr_dev(textarea, "rows", "5");
      add_location(textarea, file, 33, 2, 1315);
      attr_dev(div, "class", "border svelte-1wuoern");
      add_location(div, file, 32, 0, 1292);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, div, anchor);
      append_dev(div, textarea);
      set_input_value(textarea,
      /*stylecontent*/
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
      /*stylecontent*/
      1) {
        attr_dev(textarea, "style",
        /*stylecontent*/
        ctx[0]);
      }

      if (dirty &
      /*stylecontent*/
      1) {
        set_input_value(textarea,
        /*stylecontent*/
        ctx[0]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
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
  var style = $$props.style;
  var stylecontent;
  onMount(function () {
    $$invalidate(0, stylecontent = style);
  });
  var writable_props = ["style"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Borders> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Borders", $$slots, []);

  function textarea_input_handler() {
    stylecontent = this.value;
    $$invalidate(0, stylecontent);
  }

  $$self.$set = function ($$props) {
    if ("style" in $$props) $$invalidate(1, style = $$props.style);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      style: style,
      stylecontent: stylecontent
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("style" in $$props) $$invalidate(1, style = $$props.style);
    if ("stylecontent" in $$props) $$invalidate(0, stylecontent = $$props.stylecontent);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [stylecontent, style, textarea_input_handler];
}

var Borders = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Borders, _SvelteComponentDev);

  var _super = _createSuper(Borders);

  function Borders(options) {
    var _this;

    _classCallCheck(this, Borders);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      style: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Borders",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*style*/
    ctx[1] === undefined && !("style" in props)) {
      console.warn("<Borders> was created without expected prop 'style'");
    }

    return _this;
  }

  _createClass(Borders, [{
    key: "style",
    get: function get() {
      throw new Error("<Borders>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Borders>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Borders;
}(SvelteComponentDev);

export { Borders as B };
