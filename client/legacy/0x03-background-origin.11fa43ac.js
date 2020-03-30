import { _ as _inherits, a as _classCallCheck, i as init, s as safe_not_equal, b as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, v as validate_slots, c as _getPrototypeOf, e as _possibleConstructorReturn, g as create_component, h as claim_component, m as mount_component, n as noop, t as transition_in, j as transition_out, k as destroy_component } from './client.8b67df15.js';
import { B as Border } from './Borders.eed18f5b.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var current;
  var border = new Border({
    props: {
      style:
      /*BORDER_STYLE*/
      ctx[0]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(border.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(border.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(border, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(border.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(border.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(border, detaching);
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
  var BORDER_STYLE = ["background: url(code-pirate.svg) no-repeat bottom right #58a;", "background-origin: content-box;", "padding: 10px;"].join("");
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<_0x03_background_origin> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("_0x03_background_origin", $$slots, []);

  $$self.$capture_state = function () {
    return {
      Border: Border,
      BORDER_STYLE: BORDER_STYLE
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("BORDER_STYLE" in $$props) $$invalidate(0, BORDER_STYLE = $$props.BORDER_STYLE);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [BORDER_STYLE];
}

var _0x03_background_origin = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(_0x03_background_origin, _SvelteComponentDev);

  var _super = _createSuper(_0x03_background_origin);

  function _0x03_background_origin(options) {
    var _this;

    _classCallCheck(this, _0x03_background_origin);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "_0x03_background_origin",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return _0x03_background_origin;
}(SvelteComponentDev);

export default _0x03_background_origin;
