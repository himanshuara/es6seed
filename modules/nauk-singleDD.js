import { objectPath } from "../src/services/globalScope"

// pushDownCont class extends HTMLElement class to inherit property of it.
class singleDD extends HTMLElement {
    /**
     * [createdCallback: an instance of the element is createdCallback]
     */
    createdCallback() {
        var _t = this;
        var relAttribute;
        if (_t.getAttribute('rel')) {
            relAttribute = `rel="${_t.getAttribute("rel")}"`;
        } else if (_t.getAttribute('altrel')) {
            relAttribute = `altrel="${_t.getAttribute("altrel")}"`;
        }
        /**
         * [innerHTML set innerHTML of push-down element]
         * @type {[HTML String]}
         */
        _t.innerHTML = `<div class="singleDD" id="${_t.getAttribute('id')}">
                              <div class="dWrap">
                                  <span class="smArw"></span>
                                  <input class="sdTxt" type="text" readonly autocomplete="off" ${relAttribute} placeholder='${_t.getAttribute("placeholder")}'/>
                              </div>
                          </div>`;
    }

    /**
     * [attachedCallback: an instance was inserted into the document]
     */
    attachedCallback() {
        var _t =this;
        try {

            _t.removeAttribute('id');

            $(_t).children().singleDD({
                data: objectPath(_t.getAttribute('data')),
                maxHeight: parseInt(_t.getAttribute('max-height')),
                sortPrefix: _t.getAttribute('sortPrefix'),
                callBack: objectPath(_t.getAttribute('callback')),
                prefillData: _t.getAttribute('prefillData')
            });
        } catch (e) {
            console.warn(e);
        }
    }
}

/**
 *  Registering new elements: push-down 
 */
document.registerElement('nauk-singleDD', singleDD);
export { singleDD};