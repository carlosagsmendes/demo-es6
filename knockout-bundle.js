'bundle true;"
System.registerDynamic("github:knockout/knockout@3.3.0/dist/knockout.debug.js", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, "ko", null);
  (function() {
    "format global";
    "exports ko";
    (function() {
      var DEBUG = true;
      (function(undefined) {
        var window = this || (0, eval)('this'),
            document = window['document'],
            navigator = window['navigator'],
            jQueryInstance = window["jQuery"],
            JSON = window["JSON"];
        (function(factory) {
          if (typeof define === 'function' && define['amd']) {
            define(['exports', 'require'], factory);
          } else if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
            factory(module['exports'] || exports);
          } else {
            factory(window['ko'] = {});
          }
        }(function(koExports, amdRequire) {
          var ko = typeof koExports !== 'undefined' ? koExports : {};
          ko.exportSymbol = function(koPath, object) {
            var tokens = koPath.split(".");
            var target = ko;
            for (var i = 0; i < tokens.length - 1; i++)
              target = target[tokens[i]];
            target[tokens[tokens.length - 1]] = object;
          };
          ko.exportProperty = function(owner, publicName, object) {
            owner[publicName] = object;
          };
          ko.version = "3.3.0";
          ko.exportSymbol('version', ko.version);
          ko.utils = (function() {
            function objectForEach(obj, action) {
              for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                  action(prop, obj[prop]);
                }
              }
            }
            function extend(target, source) {
              if (source) {
                for (var prop in source) {
                  if (source.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                  }
                }
              }
              return target;
            }
            function setPrototypeOf(obj, proto) {
              obj.__proto__ = proto;
              return obj;
            }
            var canSetPrototype = ({__proto__: []} instanceof Array);
            var knownEvents = {},
                knownEventTypesByEventName = {};
            var keyEventTypeName = (navigator && /Firefox\/2/i.test(navigator.userAgent)) ? 'KeyboardEvent' : 'UIEvents';
            knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
            knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
            objectForEach(knownEvents, function(eventType, knownEventsForType) {
              if (knownEventsForType.length) {
                for (var i = 0,
                    j = knownEventsForType.length; i < j; i++)
                  knownEventTypesByEventName[knownEventsForType[i]] = eventType;
              }
            });
            var eventsThatMustBeRegisteredUsingAttachEvent = {'propertychange': true};
            var ieVersion = document && (function() {
              var version = 3,
                  div = document.createElement('div'),
                  iElems = div.getElementsByTagName('i');
              while (div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->', iElems[0]) {}
              return version > 4 ? version : undefined;
            }());
            var isIe6 = ieVersion === 6,
                isIe7 = ieVersion === 7;
            function isClickOnCheckableElement(element, eventType) {
              if ((ko.utils.tagNameLower(element) !== "input") || !element.type)
                return false;
              if (eventType.toLowerCase() != "click")
                return false;
              var inputType = element.type;
              return (inputType == "checkbox") || (inputType == "radio");
            }
            var cssClassNameRegex = /\S+/g;
            function toggleDomNodeCssClass(node, classNames, shouldHaveClass) {
              var addOrRemoveFn;
              if (classNames) {
                if (typeof node.classList === 'object') {
                  addOrRemoveFn = node.classList[shouldHaveClass ? 'add' : 'remove'];
                  ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                    addOrRemoveFn.call(node.classList, className);
                  });
                } else if (typeof node.className['baseVal'] === 'string') {
                  toggleObjectClassPropertyString(node.className, 'baseVal', classNames, shouldHaveClass);
                } else {
                  toggleObjectClassPropertyString(node, 'className', classNames, shouldHaveClass);
                }
              }
            }
            function toggleObjectClassPropertyString(obj, prop, classNames, shouldHaveClass) {
              var currentClassNames = obj[prop].match(cssClassNameRegex) || [];
              ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
              });
              obj[prop] = currentClassNames.join(" ");
            }
            return {
              fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],
              arrayForEach: function(array, action) {
                for (var i = 0,
                    j = array.length; i < j; i++)
                  action(array[i], i);
              },
              arrayIndexOf: function(array, item) {
                if (typeof Array.prototype.indexOf == "function")
                  return Array.prototype.indexOf.call(array, item);
                for (var i = 0,
                    j = array.length; i < j; i++)
                  if (array[i] === item)
                    return i;
                return -1;
              },
              arrayFirst: function(array, predicate, predicateOwner) {
                for (var i = 0,
                    j = array.length; i < j; i++)
                  if (predicate.call(predicateOwner, array[i], i))
                    return array[i];
                return null;
              },
              arrayRemoveItem: function(array, itemToRemove) {
                var index = ko.utils.arrayIndexOf(array, itemToRemove);
                if (index > 0) {
                  array.splice(index, 1);
                } else if (index === 0) {
                  array.shift();
                }
              },
              arrayGetDistinctValues: function(array) {
                array = array || [];
                var result = [];
                for (var i = 0,
                    j = array.length; i < j; i++) {
                  if (ko.utils.arrayIndexOf(result, array[i]) < 0)
                    result.push(array[i]);
                }
                return result;
              },
              arrayMap: function(array, mapping) {
                array = array || [];
                var result = [];
                for (var i = 0,
                    j = array.length; i < j; i++)
                  result.push(mapping(array[i], i));
                return result;
              },
              arrayFilter: function(array, predicate) {
                array = array || [];
                var result = [];
                for (var i = 0,
                    j = array.length; i < j; i++)
                  if (predicate(array[i], i))
                    result.push(array[i]);
                return result;
              },
              arrayPushAll: function(array, valuesToPush) {
                if (valuesToPush instanceof Array)
                  array.push.apply(array, valuesToPush);
                else
                  for (var i = 0,
                      j = valuesToPush.length; i < j; i++)
                    array.push(valuesToPush[i]);
                return array;
              },
              addOrRemoveItem: function(array, value, included) {
                var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);
                if (existingEntryIndex < 0) {
                  if (included)
                    array.push(value);
                } else {
                  if (!included)
                    array.splice(existingEntryIndex, 1);
                }
              },
              canSetPrototype: canSetPrototype,
              extend: extend,
              setPrototypeOf: setPrototypeOf,
              setPrototypeOfOrExtend: canSetPrototype ? setPrototypeOf : extend,
              objectForEach: objectForEach,
              objectMap: function(source, mapping) {
                if (!source)
                  return source;
                var target = {};
                for (var prop in source) {
                  if (source.hasOwnProperty(prop)) {
                    target[prop] = mapping(source[prop], prop, source);
                  }
                }
                return target;
              },
              emptyDomNode: function(domNode) {
                while (domNode.firstChild) {
                  ko.removeNode(domNode.firstChild);
                }
              },
              moveCleanedNodesToContainerElement: function(nodes) {
                var nodesArray = ko.utils.makeArray(nodes);
                var templateDocument = (nodesArray[0] && nodesArray[0].ownerDocument) || document;
                var container = templateDocument.createElement('div');
                for (var i = 0,
                    j = nodesArray.length; i < j; i++) {
                  container.appendChild(ko.cleanNode(nodesArray[i]));
                }
                return container;
              },
              cloneNodes: function(nodesArray, shouldCleanNodes) {
                for (var i = 0,
                    j = nodesArray.length,
                    newNodesArray = []; i < j; i++) {
                  var clonedNode = nodesArray[i].cloneNode(true);
                  newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
                }
                return newNodesArray;
              },
              setDomNodeChildren: function(domNode, childNodes) {
                ko.utils.emptyDomNode(domNode);
                if (childNodes) {
                  for (var i = 0,
                      j = childNodes.length; i < j; i++)
                    domNode.appendChild(childNodes[i]);
                }
              },
              replaceDomNodes: function(nodeToReplaceOrNodeArray, newNodesArray) {
                var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
                if (nodesToReplaceArray.length > 0) {
                  var insertionPoint = nodesToReplaceArray[0];
                  var parent = insertionPoint.parentNode;
                  for (var i = 0,
                      j = newNodesArray.length; i < j; i++)
                    parent.insertBefore(newNodesArray[i], insertionPoint);
                  for (var i = 0,
                      j = nodesToReplaceArray.length; i < j; i++) {
                    ko.removeNode(nodesToReplaceArray[i]);
                  }
                }
              },
              fixUpContinuousNodeArray: function(continuousNodeArray, parentNode) {
                if (continuousNodeArray.length) {
                  parentNode = (parentNode.nodeType === 8 && parentNode.parentNode) || parentNode;
                  while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode)
                    continuousNodeArray.splice(0, 1);
                  if (continuousNodeArray.length > 1) {
                    var current = continuousNodeArray[0],
                        last = continuousNodeArray[continuousNodeArray.length - 1];
                    continuousNodeArray.length = 0;
                    while (current !== last) {
                      continuousNodeArray.push(current);
                      current = current.nextSibling;
                      if (!current)
                        return;
                    }
                    continuousNodeArray.push(last);
                  }
                }
                return continuousNodeArray;
              },
              setOptionNodeSelectionState: function(optionNode, isSelected) {
                if (ieVersion < 7)
                  optionNode.setAttribute("selected", isSelected);
                else
                  optionNode.selected = isSelected;
              },
              stringTrim: function(string) {
                return string === null || string === undefined ? '' : string.trim ? string.trim() : string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
              },
              stringStartsWith: function(string, startsWith) {
                string = string || "";
                if (startsWith.length > string.length)
                  return false;
                return string.substring(0, startsWith.length) === startsWith;
              },
              domNodeIsContainedBy: function(node, containedByNode) {
                if (node === containedByNode)
                  return true;
                if (node.nodeType === 11)
                  return false;
                if (containedByNode.contains)
                  return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
                if (containedByNode.compareDocumentPosition)
                  return (containedByNode.compareDocumentPosition(node) & 16) == 16;
                while (node && node != containedByNode) {
                  node = node.parentNode;
                }
                return !!node;
              },
              domNodeIsAttachedToDocument: function(node) {
                return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
              },
              anyDomNodeIsAttachedToDocument: function(nodes) {
                return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
              },
              tagNameLower: function(element) {
                return element && element.tagName && element.tagName.toLowerCase();
              },
              registerEventHandler: function(element, eventType, handler) {
                var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
                if (!mustUseAttachEvent && jQueryInstance) {
                  jQueryInstance(element)['bind'](eventType, handler);
                } else if (!mustUseAttachEvent && typeof element.addEventListener == "function")
                  element.addEventListener(eventType, handler, false);
                else if (typeof element.attachEvent != "undefined") {
                  var attachEventHandler = function(event) {
                    handler.call(element, event);
                  },
                      attachEventName = "on" + eventType;
                  element.attachEvent(attachEventName, attachEventHandler);
                  ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    element.detachEvent(attachEventName, attachEventHandler);
                  });
                } else
                  throw new Error("Browser doesn't support addEventListener or attachEvent");
              },
              triggerEvent: function(element, eventType) {
                if (!(element && element.nodeType))
                  throw new Error("element must be a DOM node when calling triggerEvent");
                var useClickWorkaround = isClickOnCheckableElement(element, eventType);
                if (jQueryInstance && !useClickWorkaround) {
                  jQueryInstance(element)['trigger'](eventType);
                } else if (typeof document.createEvent == "function") {
                  if (typeof element.dispatchEvent == "function") {
                    var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                    var event = document.createEvent(eventCategory);
                    event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                    element.dispatchEvent(event);
                  } else
                    throw new Error("The supplied element doesn't support dispatchEvent");
                } else if (useClickWorkaround && element.click) {
                  element.click();
                } else if (typeof element.fireEvent != "undefined") {
                  element.fireEvent("on" + eventType);
                } else {
                  throw new Error("Browser doesn't support triggering events");
                }
              },
              unwrapObservable: function(value) {
                return ko.isObservable(value) ? value() : value;
              },
              peekObservable: function(value) {
                return ko.isObservable(value) ? value.peek() : value;
              },
              toggleDomNodeCssClass: toggleDomNodeCssClass,
              setTextContent: function(element, textContent) {
                var value = ko.utils.unwrapObservable(textContent);
                if ((value === null) || (value === undefined))
                  value = "";
                var innerTextNode = ko.virtualElements.firstChild(element);
                if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                  ko.virtualElements.setDomNodeChildren(element, [element.ownerDocument.createTextNode(value)]);
                } else {
                  innerTextNode.data = value;
                }
                ko.utils.forceRefresh(element);
              },
              setElementName: function(element, name) {
                element.name = name;
                if (ieVersion <= 7) {
                  try {
                    element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                  } catch (e) {}
                }
              },
              forceRefresh: function(node) {
                if (ieVersion >= 9) {
                  var elem = node.nodeType == 1 ? node : node.parentNode;
                  if (elem.style)
                    elem.style.zoom = elem.style.zoom;
                }
              },
              ensureSelectElementIsRenderedCorrectly: function(selectElement) {
                if (ieVersion) {
                  var originalWidth = selectElement.style.width;
                  selectElement.style.width = 0;
                  selectElement.style.width = originalWidth;
                }
              },
              range: function(min, max) {
                min = ko.utils.unwrapObservable(min);
                max = ko.utils.unwrapObservable(max);
                var result = [];
                for (var i = min; i <= max; i++)
                  result.push(i);
                return result;
              },
              makeArray: function(arrayLikeObject) {
                var result = [];
                for (var i = 0,
                    j = arrayLikeObject.length; i < j; i++) {
                  result.push(arrayLikeObject[i]);
                }
                ;
                return result;
              },
              isIe6: isIe6,
              isIe7: isIe7,
              ieVersion: ieVersion,
              getFormFields: function(form, fieldName) {
                var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
                var isMatchingField = (typeof fieldName == 'string') ? function(field) {
                  return field.name === fieldName;
                } : function(field) {
                  return fieldName.test(field.name);
                };
                var matches = [];
                for (var i = fields.length - 1; i >= 0; i--) {
                  if (isMatchingField(fields[i]))
                    matches.push(fields[i]);
                }
                ;
                return matches;
              },
              parseJson: function(jsonString) {
                if (typeof jsonString == "string") {
                  jsonString = ko.utils.stringTrim(jsonString);
                  if (jsonString) {
                    if (JSON && JSON.parse)
                      return JSON.parse(jsonString);
                    return (new Function("return " + jsonString))();
                  }
                }
                return null;
              },
              stringifyJson: function(data, replacer, space) {
                if (!JSON || !JSON.stringify)
                  throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
              },
              postJson: function(urlOrForm, data, options) {
                options = options || {};
                var params = options['params'] || {};
                var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
                var url = urlOrForm;
                if ((typeof urlOrForm == 'object') && (ko.utils.tagNameLower(urlOrForm) === "form")) {
                  var originalForm = urlOrForm;
                  url = originalForm.action;
                  for (var i = includeFields.length - 1; i >= 0; i--) {
                    var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                    for (var j = fields.length - 1; j >= 0; j--)
                      params[fields[j].name] = fields[j].value;
                  }
                }
                data = ko.utils.unwrapObservable(data);
                var form = document.createElement("form");
                form.style.display = "none";
                form.action = url;
                form.method = "post";
                for (var key in data) {
                  var input = document.createElement("input");
                  input.type = "hidden";
                  input.name = key;
                  input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                  form.appendChild(input);
                }
                objectForEach(params, function(key, value) {
                  var input = document.createElement("input");
                  input.type = "hidden";
                  input.name = key;
                  input.value = value;
                  form.appendChild(input);
                });
                document.body.appendChild(form);
                options['submitter'] ? options['submitter'](form) : form.submit();
                setTimeout(function() {
                  form.parentNode.removeChild(form);
                }, 0);
              }
            };
          }());
          ko.exportSymbol('utils', ko.utils);
          ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
          ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
          ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
          ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
          ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
          ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
          ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
          ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
          ko.exportSymbol('utils.extend', ko.utils.extend);
          ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
          ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
          ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
          ko.exportSymbol('utils.postJson', ko.utils.postJson);
          ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
          ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
          ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
          ko.exportSymbol('utils.range', ko.utils.range);
          ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
          ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
          ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
          ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
          ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
          ko.exportSymbol('utils.setTextContent', ko.utils.setTextContent);
          ko.exportSymbol('unwrap', ko.utils.unwrapObservable);
          if (!Function.prototype['bind']) {
            Function.prototype['bind'] = function(object) {
              var originalFunction = this;
              if (arguments.length === 1) {
                return function() {
                  return originalFunction.apply(object, arguments);
                };
              } else {
                var partialArgs = Array.prototype.slice.call(arguments, 1);
                return function() {
                  var args = partialArgs.slice(0);
                  args.push.apply(args, arguments);
                  return originalFunction.apply(object, args);
                };
              }
            };
          }
          ko.utils.domData = new (function() {
            var uniqueId = 0;
            var dataStoreKeyExpandoPropertyName = "__ko__" + (new Date).getTime();
            var dataStore = {};
            function getAll(node, createIfNotFound) {
              var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
              var hasExistingDataStore = dataStoreKey && (dataStoreKey !== "null") && dataStore[dataStoreKey];
              if (!hasExistingDataStore) {
                if (!createIfNotFound)
                  return undefined;
                dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
                dataStore[dataStoreKey] = {};
              }
              return dataStore[dataStoreKey];
            }
            return {
              get: function(node, key) {
                var allDataForNode = getAll(node, false);
                return allDataForNode === undefined ? undefined : allDataForNode[key];
              },
              set: function(node, key, value) {
                if (value === undefined) {
                  if (getAll(node, false) === undefined)
                    return;
                }
                var allDataForNode = getAll(node, true);
                allDataForNode[key] = value;
              },
              clear: function(node) {
                var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
                if (dataStoreKey) {
                  delete dataStore[dataStoreKey];
                  node[dataStoreKeyExpandoPropertyName] = null;
                  return true;
                }
                return false;
              },
              nextKey: function() {
                return (uniqueId++) + dataStoreKeyExpandoPropertyName;
              }
            };
          })();
          ko.exportSymbol('utils.domData', ko.utils.domData);
          ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear);
          ko.utils.domNodeDisposal = new (function() {
            var domDataKey = ko.utils.domData.nextKey();
            var cleanableNodeTypes = {
              1: true,
              8: true,
              9: true
            };
            var cleanableNodeTypesWithDescendants = {
              1: true,
              9: true
            };
            function getDisposeCallbacksCollection(node, createIfNotFound) {
              var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
              if ((allDisposeCallbacks === undefined) && createIfNotFound) {
                allDisposeCallbacks = [];
                ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
              }
              return allDisposeCallbacks;
            }
            function destroyCallbacksCollection(node) {
              ko.utils.domData.set(node, domDataKey, undefined);
            }
            function cleanSingleNode(node) {
              var callbacks = getDisposeCallbacksCollection(node, false);
              if (callbacks) {
                callbacks = callbacks.slice(0);
                for (var i = 0; i < callbacks.length; i++)
                  callbacks[i](node);
              }
              ko.utils.domData.clear(node);
              ko.utils.domNodeDisposal["cleanExternalData"](node);
              if (cleanableNodeTypesWithDescendants[node.nodeType])
                cleanImmediateCommentTypeChildren(node);
            }
            function cleanImmediateCommentTypeChildren(nodeWithChildren) {
              var child,
                  nextChild = nodeWithChildren.firstChild;
              while (child = nextChild) {
                nextChild = child.nextSibling;
                if (child.nodeType === 8)
                  cleanSingleNode(child);
              }
            }
            return {
              addDisposeCallback: function(node, callback) {
                if (typeof callback != "function")
                  throw new Error("Callback must be a function");
                getDisposeCallbacksCollection(node, true).push(callback);
              },
              removeDisposeCallback: function(node, callback) {
                var callbacksCollection = getDisposeCallbacksCollection(node, false);
                if (callbacksCollection) {
                  ko.utils.arrayRemoveItem(callbacksCollection, callback);
                  if (callbacksCollection.length == 0)
                    destroyCallbacksCollection(node);
                }
              },
              cleanNode: function(node) {
                if (cleanableNodeTypes[node.nodeType]) {
                  cleanSingleNode(node);
                  if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                    var descendants = [];
                    ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                    for (var i = 0,
                        j = descendants.length; i < j; i++)
                      cleanSingleNode(descendants[i]);
                  }
                }
                return node;
              },
              removeNode: function(node) {
                ko.cleanNode(node);
                if (node.parentNode)
                  node.parentNode.removeChild(node);
              },
              "cleanExternalData": function(node) {
                if (jQueryInstance && (typeof jQueryInstance['cleanData'] == "function"))
                  jQueryInstance['cleanData']([node]);
              }
            };
          })();
          ko.cleanNode = ko.utils.domNodeDisposal.cleanNode;
          ko.removeNode = ko.utils.domNodeDisposal.removeNode;
          ko.exportSymbol('cleanNode', ko.cleanNode);
          ko.exportSymbol('removeNode', ko.removeNode);
          ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
          ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
          ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
          (function() {
            var leadingCommentRegex = /^(\s*)<!--(.*?)-->/;
            function simpleHtmlParse(html, documentContext) {
              documentContext || (documentContext = document);
              var windowContext = documentContext['parentWindow'] || documentContext['defaultView'] || window;
              var tags = ko.utils.stringTrim(html).toLowerCase(),
                  div = documentContext.createElement("div");
              var wrap = tags.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !tags.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!tags.indexOf("<td") || !tags.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
              var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
              if (typeof windowContext['innerShiv'] == "function") {
                div.appendChild(windowContext['innerShiv'](markup));
              } else {
                div.innerHTML = markup;
              }
              while (wrap[0]--)
                div = div.lastChild;
              return ko.utils.makeArray(div.lastChild.childNodes);
            }
            function jQueryHtmlParse(html, documentContext) {
              if (jQueryInstance['parseHTML']) {
                return jQueryInstance['parseHTML'](html, documentContext) || [];
              } else {
                var elems = jQueryInstance['clean']([html], documentContext);
                if (elems && elems[0]) {
                  var elem = elems[0];
                  while (elem.parentNode && elem.parentNode.nodeType !== 11)
                    elem = elem.parentNode;
                  if (elem.parentNode)
                    elem.parentNode.removeChild(elem);
                }
                return elems;
              }
            }
            ko.utils.parseHtmlFragment = function(html, documentContext) {
              return jQueryInstance ? jQueryHtmlParse(html, documentContext) : simpleHtmlParse(html, documentContext);
            };
            ko.utils.setHtml = function(node, html) {
              ko.utils.emptyDomNode(node);
              html = ko.utils.unwrapObservable(html);
              if ((html !== null) && (html !== undefined)) {
                if (typeof html != 'string')
                  html = html.toString();
                if (jQueryInstance) {
                  jQueryInstance(node)['html'](html);
                } else {
                  var parsedNodes = ko.utils.parseHtmlFragment(html, node.ownerDocument);
                  for (var i = 0; i < parsedNodes.length; i++)
                    node.appendChild(parsedNodes[i]);
                }
              }
            };
          })();
          ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
          ko.exportSymbol('utils.setHtml', ko.utils.setHtml);
          ko.memoization = (function() {
            var memos = {};
            function randomMax8HexChars() {
              return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
            }
            function generateRandomId() {
              return randomMax8HexChars() + randomMax8HexChars();
            }
            function findMemoNodes(rootNode, appendToArray) {
              if (!rootNode)
                return;
              if (rootNode.nodeType == 8) {
                var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
                if (memoId != null)
                  appendToArray.push({
                    domNode: rootNode,
                    memoId: memoId
                  });
              } else if (rootNode.nodeType == 1) {
                for (var i = 0,
                    childNodes = rootNode.childNodes,
                    j = childNodes.length; i < j; i++)
                  findMemoNodes(childNodes[i], appendToArray);
              }
            }
            return {
              memoize: function(callback) {
                if (typeof callback != "function")
                  throw new Error("You can only pass a function to ko.memoization.memoize()");
                var memoId = generateRandomId();
                memos[memoId] = callback;
                return "<!--[ko_memo:" + memoId + "]-->";
              },
              unmemoize: function(memoId, callbackParams) {
                var callback = memos[memoId];
                if (callback === undefined)
                  throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
                try {
                  callback.apply(null, callbackParams || []);
                  return true;
                } finally {
                  delete memos[memoId];
                }
              },
              unmemoizeDomNodeAndDescendants: function(domNode, extraCallbackParamsArray) {
                var memos = [];
                findMemoNodes(domNode, memos);
                for (var i = 0,
                    j = memos.length; i < j; i++) {
                  var node = memos[i].domNode;
                  var combinedParams = [node];
                  if (extraCallbackParamsArray)
                    ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                  ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                  node.nodeValue = "";
                  if (node.parentNode)
                    node.parentNode.removeChild(node);
                }
              },
              parseMemoText: function(memoText) {
                var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
                return match ? match[1] : null;
              }
            };
          })();
          ko.exportSymbol('memoization', ko.memoization);
          ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
          ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
          ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
          ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
          ko.extenders = {
            'throttle': function(target, timeout) {
              target['throttleEvaluation'] = timeout;
              var writeTimeoutInstance = null;
              return ko.dependentObservable({
                'read': target,
                'write': function(value) {
                  clearTimeout(writeTimeoutInstance);
                  writeTimeoutInstance = setTimeout(function() {
                    target(value);
                  }, timeout);
                }
              });
            },
            'rateLimit': function(target, options) {
              var timeout,
                  method,
                  limitFunction;
              if (typeof options == 'number') {
                timeout = options;
              } else {
                timeout = options['timeout'];
                method = options['method'];
              }
              limitFunction = method == 'notifyWhenChangesStop' ? debounce : throttle;
              target.limit(function(callback) {
                return limitFunction(callback, timeout);
              });
            },
            'notify': function(target, notifyWhen) {
              target["equalityComparer"] = notifyWhen == "always" ? null : valuesArePrimitiveAndEqual;
            }
          };
          var primitiveTypes = {
            'undefined': 1,
            'boolean': 1,
            'number': 1,
            'string': 1
          };
          function valuesArePrimitiveAndEqual(a, b) {
            var oldValueIsPrimitive = (a === null) || (typeof(a) in primitiveTypes);
            return oldValueIsPrimitive ? (a === b) : false;
          }
          function throttle(callback, timeout) {
            var timeoutInstance;
            return function() {
              if (!timeoutInstance) {
                timeoutInstance = setTimeout(function() {
                  timeoutInstance = undefined;
                  callback();
                }, timeout);
              }
            };
          }
          function debounce(callback, timeout) {
            var timeoutInstance;
            return function() {
              clearTimeout(timeoutInstance);
              timeoutInstance = setTimeout(callback, timeout);
            };
          }
          function applyExtenders(requestedExtenders) {
            var target = this;
            if (requestedExtenders) {
              ko.utils.objectForEach(requestedExtenders, function(key, value) {
                var extenderHandler = ko.extenders[key];
                if (typeof extenderHandler == 'function') {
                  target = extenderHandler(target, value) || target;
                }
              });
            }
            return target;
          }
          ko.exportSymbol('extenders', ko.extenders);
          ko.subscription = function(target, callback, disposeCallback) {
            this._target = target;
            this.callback = callback;
            this.disposeCallback = disposeCallback;
            this.isDisposed = false;
            ko.exportProperty(this, 'dispose', this.dispose);
          };
          ko.subscription.prototype.dispose = function() {
            this.isDisposed = true;
            this.disposeCallback();
          };
          ko.subscribable = function() {
            ko.utils.setPrototypeOfOrExtend(this, ko.subscribable['fn']);
            this._subscriptions = {};
            this._versionNumber = 1;
          };
          var defaultEvent = "change";
          var ko_subscribable_fn = {
            subscribe: function(callback, callbackTarget, event) {
              var self = this;
              event = event || defaultEvent;
              var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;
              var subscription = new ko.subscription(self, boundCallback, function() {
                ko.utils.arrayRemoveItem(self._subscriptions[event], subscription);
                if (self.afterSubscriptionRemove)
                  self.afterSubscriptionRemove(event);
              });
              if (self.beforeSubscriptionAdd)
                self.beforeSubscriptionAdd(event);
              if (!self._subscriptions[event])
                self._subscriptions[event] = [];
              self._subscriptions[event].push(subscription);
              return subscription;
            },
            "notifySubscribers": function(valueToNotify, event) {
              event = event || defaultEvent;
              if (event === defaultEvent) {
                this.updateVersion();
              }
              if (this.hasSubscriptionsForEvent(event)) {
                try {
                  ko.dependencyDetection.begin();
                  for (var a = this._subscriptions[event].slice(0),
                      i = 0,
                      subscription; subscription = a[i]; ++i) {
                    if (!subscription.isDisposed)
                      subscription.callback(valueToNotify);
                  }
                } finally {
                  ko.dependencyDetection.end();
                }
              }
            },
            getVersion: function() {
              return this._versionNumber;
            },
            hasChanged: function(versionToCheck) {
              return this.getVersion() !== versionToCheck;
            },
            updateVersion: function() {
              ++this._versionNumber;
            },
            limit: function(limitFunction) {
              var self = this,
                  selfIsObservable = ko.isObservable(self),
                  isPending,
                  previousValue,
                  pendingValue,
                  beforeChange = 'beforeChange';
              if (!self._origNotifySubscribers) {
                self._origNotifySubscribers = self["notifySubscribers"];
                self["notifySubscribers"] = function(value, event) {
                  if (!event || event === defaultEvent) {
                    self._rateLimitedChange(value);
                  } else if (event === beforeChange) {
                    self._rateLimitedBeforeChange(value);
                  } else {
                    self._origNotifySubscribers(value, event);
                  }
                };
              }
              var finish = limitFunction(function() {
                if (selfIsObservable && pendingValue === self) {
                  pendingValue = self();
                }
                isPending = false;
                if (self.isDifferent(previousValue, pendingValue)) {
                  self._origNotifySubscribers(previousValue = pendingValue);
                }
              });
              self._rateLimitedChange = function(value) {
                isPending = true;
                pendingValue = value;
                finish();
              };
              self._rateLimitedBeforeChange = function(value) {
                if (!isPending) {
                  previousValue = value;
                  self._origNotifySubscribers(value, beforeChange);
                }
              };
            },
            hasSubscriptionsForEvent: function(event) {
              return this._subscriptions[event] && this._subscriptions[event].length;
            },
            getSubscriptionsCount: function(event) {
              if (event) {
                return this._subscriptions[event] && this._subscriptions[event].length || 0;
              } else {
                var total = 0;
                ko.utils.objectForEach(this._subscriptions, function(eventName, subscriptions) {
                  total += subscriptions.length;
                });
                return total;
              }
            },
            isDifferent: function(oldValue, newValue) {
              return !this['equalityComparer'] || !this['equalityComparer'](oldValue, newValue);
            },
            extend: applyExtenders
          };
          ko.exportProperty(ko_subscribable_fn, 'subscribe', ko_subscribable_fn.subscribe);
          ko.exportProperty(ko_subscribable_fn, 'extend', ko_subscribable_fn.extend);
          ko.exportProperty(ko_subscribable_fn, 'getSubscriptionsCount', ko_subscribable_fn.getSubscriptionsCount);
          if (ko.utils.canSetPrototype) {
            ko.utils.setPrototypeOf(ko_subscribable_fn, Function.prototype);
          }
          ko.subscribable['fn'] = ko_subscribable_fn;
          ko.isSubscribable = function(instance) {
            return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
          };
          ko.exportSymbol('subscribable', ko.subscribable);
          ko.exportSymbol('isSubscribable', ko.isSubscribable);
          ko.computedContext = ko.dependencyDetection = (function() {
            var outerFrames = [],
                currentFrame,
                lastId = 0;
            function getId() {
              return ++lastId;
            }
            function begin(options) {
              outerFrames.push(currentFrame);
              currentFrame = options;
            }
            function end() {
              currentFrame = outerFrames.pop();
            }
            return {
              begin: begin,
              end: end,
              registerDependency: function(subscribable) {
                if (currentFrame) {
                  if (!ko.isSubscribable(subscribable))
                    throw new Error("Only subscribable things can act as dependencies");
                  currentFrame.callback(subscribable, subscribable._id || (subscribable._id = getId()));
                }
              },
              ignore: function(callback, callbackTarget, callbackArgs) {
                try {
                  begin();
                  return callback.apply(callbackTarget, callbackArgs || []);
                } finally {
                  end();
                }
              },
              getDependenciesCount: function() {
                if (currentFrame)
                  return currentFrame.computed.getDependenciesCount();
              },
              isInitial: function() {
                if (currentFrame)
                  return currentFrame.isInitial;
              }
            };
          })();
          ko.exportSymbol('computedContext', ko.computedContext);
          ko.exportSymbol('computedContext.getDependenciesCount', ko.computedContext.getDependenciesCount);
          ko.exportSymbol('computedContext.isInitial', ko.computedContext.isInitial);
          ko.exportSymbol('computedContext.isSleeping', ko.computedContext.isSleeping);
          ko.exportSymbol('ignoreDependencies', ko.ignoreDependencies = ko.dependencyDetection.ignore);
          ko.observable = function(initialValue) {
            var _latestValue = initialValue;
            function observable() {
              if (arguments.length > 0) {
                if (observable.isDifferent(_latestValue, arguments[0])) {
                  observable.valueWillMutate();
                  _latestValue = arguments[0];
                  if (DEBUG)
                    observable._latestValue = _latestValue;
                  observable.valueHasMutated();
                }
                return this;
              } else {
                ko.dependencyDetection.registerDependency(observable);
                return _latestValue;
              }
            }
            ko.subscribable.call(observable);
            ko.utils.setPrototypeOfOrExtend(observable, ko.observable['fn']);
            if (DEBUG)
              observable._latestValue = _latestValue;
            observable.peek = function() {
              return _latestValue;
            };
            observable.valueHasMutated = function() {
              observable["notifySubscribers"](_latestValue);
            };
            observable.valueWillMutate = function() {
              observable["notifySubscribers"](_latestValue, "beforeChange");
            };
            ko.exportProperty(observable, 'peek', observable.peek);
            ko.exportProperty(observable, "valueHasMutated", observable.valueHasMutated);
            ko.exportProperty(observable, "valueWillMutate", observable.valueWillMutate);
            return observable;
          };
          ko.observable['fn'] = {"equalityComparer": valuesArePrimitiveAndEqual};
          var protoProperty = ko.observable.protoProperty = "__ko_proto__";
          ko.observable['fn'][protoProperty] = ko.observable;
          if (ko.utils.canSetPrototype) {
            ko.utils.setPrototypeOf(ko.observable['fn'], ko.subscribable['fn']);
          }
          ko.hasPrototype = function(instance, prototype) {
            if ((instance === null) || (instance === undefined) || (instance[protoProperty] === undefined))
              return false;
            if (instance[protoProperty] === prototype)
              return true;
            return ko.hasPrototype(instance[protoProperty], prototype);
          };
          ko.isObservable = function(instance) {
            return ko.hasPrototype(instance, ko.observable);
          };
          ko.isWriteableObservable = function(instance) {
            if ((typeof instance == "function") && instance[protoProperty] === ko.observable)
              return true;
            if ((typeof instance == "function") && (instance[protoProperty] === ko.dependentObservable) && (instance.hasWriteFunction))
              return true;
            return false;
          };
          ko.exportSymbol('observable', ko.observable);
          ko.exportSymbol('isObservable', ko.isObservable);
          ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
          ko.exportSymbol('isWritableObservable', ko.isWriteableObservable);
          ko.observableArray = function(initialValues) {
            initialValues = initialValues || [];
            if (typeof initialValues != 'object' || !('length' in initialValues))
              throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
            var result = ko.observable(initialValues);
            ko.utils.setPrototypeOfOrExtend(result, ko.observableArray['fn']);
            return result.extend({'trackArrayChanges': true});
          };
          ko.observableArray['fn'] = {
            'remove': function(valueOrPredicate) {
              var underlyingArray = this.peek();
              var removedValues = [];
              var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function(value) {
                return value === valueOrPredicate;
              };
              for (var i = 0; i < underlyingArray.length; i++) {
                var value = underlyingArray[i];
                if (predicate(value)) {
                  if (removedValues.length === 0) {
                    this.valueWillMutate();
                  }
                  removedValues.push(value);
                  underlyingArray.splice(i, 1);
                  i--;
                }
              }
              if (removedValues.length) {
                this.valueHasMutated();
              }
              return removedValues;
            },
            'removeAll': function(arrayOfValues) {
              if (arrayOfValues === undefined) {
                var underlyingArray = this.peek();
                var allValues = underlyingArray.slice(0);
                this.valueWillMutate();
                underlyingArray.splice(0, underlyingArray.length);
                this.valueHasMutated();
                return allValues;
              }
              if (!arrayOfValues)
                return [];
              return this['remove'](function(value) {
                return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
              });
            },
            'destroy': function(valueOrPredicate) {
              var underlyingArray = this.peek();
              var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function(value) {
                return value === valueOrPredicate;
              };
              this.valueWillMutate();
              for (var i = underlyingArray.length - 1; i >= 0; i--) {
                var value = underlyingArray[i];
                if (predicate(value))
                  underlyingArray[i]["_destroy"] = true;
              }
              this.valueHasMutated();
            },
            'destroyAll': function(arrayOfValues) {
              if (arrayOfValues === undefined)
                return this['destroy'](function() {
                  return true;
                });
              if (!arrayOfValues)
                return [];
              return this['destroy'](function(value) {
                return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
              });
            },
            'indexOf': function(item) {
              var underlyingArray = this();
              return ko.utils.arrayIndexOf(underlyingArray, item);
            },
            'replace': function(oldItem, newItem) {
              var index = this['indexOf'](oldItem);
              if (index >= 0) {
                this.valueWillMutate();
                this.peek()[index] = newItem;
                this.valueHasMutated();
              }
            }
          };
          ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(methodName) {
            ko.observableArray['fn'][methodName] = function() {
              var underlyingArray = this.peek();
              this.valueWillMutate();
              this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
              var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
              this.valueHasMutated();
              return methodCallResult;
            };
          });
          ko.utils.arrayForEach(["slice"], function(methodName) {
            ko.observableArray['fn'][methodName] = function() {
              var underlyingArray = this();
              return underlyingArray[methodName].apply(underlyingArray, arguments);
            };
          });
          if (ko.utils.canSetPrototype) {
            ko.utils.setPrototypeOf(ko.observableArray['fn'], ko.observable['fn']);
          }
          ko.exportSymbol('observableArray', ko.observableArray);
          var arrayChangeEventName = 'arrayChange';
          ko.extenders['trackArrayChanges'] = function(target) {
            if (target.cacheDiffForKnownOperation) {
              return;
            }
            var trackingChanges = false,
                cachedDiff = null,
                arrayChangeSubscription,
                pendingNotifications = 0,
                underlyingBeforeSubscriptionAddFunction = target.beforeSubscriptionAdd,
                underlyingAfterSubscriptionRemoveFunction = target.afterSubscriptionRemove;
            target.beforeSubscriptionAdd = function(event) {
              if (underlyingBeforeSubscriptionAddFunction)
                underlyingBeforeSubscriptionAddFunction.call(target, event);
              if (event === arrayChangeEventName) {
                trackChanges();
              }
            };
            target.afterSubscriptionRemove = function(event) {
              if (underlyingAfterSubscriptionRemoveFunction)
                underlyingAfterSubscriptionRemoveFunction.call(target, event);
              if (event === arrayChangeEventName && !target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                arrayChangeSubscription.dispose();
                trackingChanges = false;
              }
            };
            function trackChanges() {
              if (trackingChanges) {
                return;
              }
              trackingChanges = true;
              var underlyingNotifySubscribersFunction = target['notifySubscribers'];
              target['notifySubscribers'] = function(valueToNotify, event) {
                if (!event || event === defaultEvent) {
                  ++pendingNotifications;
                }
                return underlyingNotifySubscribersFunction.apply(this, arguments);
              };
              var previousContents = [].concat(target.peek() || []);
              cachedDiff = null;
              arrayChangeSubscription = target.subscribe(function(currentContents) {
                currentContents = [].concat(currentContents || []);
                if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                  var changes = getChanges(previousContents, currentContents);
                }
                previousContents = currentContents;
                cachedDiff = null;
                pendingNotifications = 0;
                if (changes && changes.length) {
                  target['notifySubscribers'](changes, arrayChangeEventName);
                }
              });
            }
            function getChanges(previousContents, currentContents) {
              if (!cachedDiff || pendingNotifications > 1) {
                cachedDiff = ko.utils.compareArrays(previousContents, currentContents, {'sparse': true});
              }
              return cachedDiff;
            }
            target.cacheDiffForKnownOperation = function(rawArray, operationName, args) {
              if (!trackingChanges || pendingNotifications) {
                return;
              }
              var diff = [],
                  arrayLength = rawArray.length,
                  argsLength = args.length,
                  offset = 0;
              function pushDiff(status, value, index) {
                return diff[diff.length] = {
                  'status': status,
                  'value': value,
                  'index': index
                };
              }
              switch (operationName) {
                case 'push':
                  offset = arrayLength;
                case 'unshift':
                  for (var index = 0; index < argsLength; index++) {
                    pushDiff('added', args[index], offset + index);
                  }
                  break;
                case 'pop':
                  offset = arrayLength - 1;
                case 'shift':
                  if (arrayLength) {
                    pushDiff('deleted', rawArray[offset], offset);
                  }
                  break;
                case 'splice':
                  var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
                      endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
                      endAddIndex = startIndex + argsLength - 2,
                      endIndex = Math.max(endDeleteIndex, endAddIndex),
                      additions = [],
                      deletions = [];
                  for (var index = startIndex,
                      argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
                    if (index < endDeleteIndex)
                      deletions.push(pushDiff('deleted', rawArray[index], index));
                    if (index < endAddIndex)
                      additions.push(pushDiff('added', args[argsIndex], index));
                  }
                  ko.utils.findMovesInArrayComparison(deletions, additions);
                  break;
                default:
                  return;
              }
              cachedDiff = diff;
            };
          };
          ko.computed = ko.dependentObservable = function(evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
            var _latestValue,
                _needsEvaluation = true,
                _isBeingEvaluated = false,
                _suppressDisposalUntilDisposeWhenReturnsFalse = false,
                _isDisposed = false,
                readFunction = evaluatorFunctionOrOptions,
                pure = false,
                isSleeping = false;
            if (readFunction && typeof readFunction == "object") {
              options = readFunction;
              readFunction = options["read"];
            } else {
              options = options || {};
              if (!readFunction)
                readFunction = options["read"];
            }
            if (typeof readFunction != "function")
              throw new Error("Pass a function that returns the value of the ko.computed");
            function addDependencyTracking(id, target, trackingObj) {
              if (pure && target === dependentObservable) {
                throw Error("A 'pure' computed must not be called recursively");
              }
              dependencyTracking[id] = trackingObj;
              trackingObj._order = _dependenciesCount++;
              trackingObj._version = target.getVersion();
            }
            function haveDependenciesChanged() {
              var id,
                  dependency;
              for (id in dependencyTracking) {
                if (dependencyTracking.hasOwnProperty(id)) {
                  dependency = dependencyTracking[id];
                  if (dependency._target.hasChanged(dependency._version)) {
                    return true;
                  }
                }
              }
            }
            function disposeComputed() {
              if (!isSleeping && dependencyTracking) {
                ko.utils.objectForEach(dependencyTracking, function(id, dependency) {
                  if (dependency.dispose)
                    dependency.dispose();
                });
              }
              dependencyTracking = null;
              _dependenciesCount = 0;
              _isDisposed = true;
              _needsEvaluation = false;
              isSleeping = false;
            }
            function evaluatePossiblyAsync() {
              var throttleEvaluationTimeout = dependentObservable['throttleEvaluation'];
              if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
                clearTimeout(evaluationTimeoutInstance);
                evaluationTimeoutInstance = setTimeout(function() {
                  evaluateImmediate(true);
                }, throttleEvaluationTimeout);
              } else if (dependentObservable._evalRateLimited) {
                dependentObservable._evalRateLimited();
              } else {
                evaluateImmediate(true);
              }
            }
            function evaluateImmediate(notifyChange) {
              if (_isBeingEvaluated) {
                return;
              }
              if (_isDisposed) {
                return;
              }
              if (disposeWhen && disposeWhen()) {
                if (!_suppressDisposalUntilDisposeWhenReturnsFalse) {
                  dispose();
                  return;
                }
              } else {
                _suppressDisposalUntilDisposeWhenReturnsFalse = false;
              }
              _isBeingEvaluated = true;
              try {
                var disposalCandidates = dependencyTracking,
                    disposalCount = _dependenciesCount,
                    isInitial = pure ? undefined : !_dependenciesCount;
                ko.dependencyDetection.begin({
                  callback: function(subscribable, id) {
                    if (!_isDisposed) {
                      if (disposalCount && disposalCandidates[id]) {
                        addDependencyTracking(id, subscribable, disposalCandidates[id]);
                        delete disposalCandidates[id];
                        --disposalCount;
                      } else if (!dependencyTracking[id]) {
                        addDependencyTracking(id, subscribable, isSleeping ? {_target: subscribable} : subscribable.subscribe(evaluatePossiblyAsync));
                      }
                    }
                  },
                  computed: dependentObservable,
                  isInitial: isInitial
                });
                dependencyTracking = {};
                _dependenciesCount = 0;
                try {
                  var newValue = evaluatorFunctionTarget ? readFunction.call(evaluatorFunctionTarget) : readFunction();
                } finally {
                  ko.dependencyDetection.end();
                  if (disposalCount && !isSleeping) {
                    ko.utils.objectForEach(disposalCandidates, function(id, toDispose) {
                      if (toDispose.dispose)
                        toDispose.dispose();
                    });
                  }
                  _needsEvaluation = false;
                }
                if (dependentObservable.isDifferent(_latestValue, newValue)) {
                  if (!isSleeping) {
                    notify(_latestValue, "beforeChange");
                  }
                  _latestValue = newValue;
                  if (DEBUG)
                    dependentObservable._latestValue = _latestValue;
                  if (isSleeping) {
                    dependentObservable.updateVersion();
                  } else if (notifyChange) {
                    notify(_latestValue);
                  }
                }
                if (isInitial) {
                  notify(_latestValue, "awake");
                }
              } finally {
                _isBeingEvaluated = false;
              }
              if (!_dependenciesCount)
                dispose();
            }
            function dependentObservable() {
              if (arguments.length > 0) {
                if (typeof writeFunction === "function") {
                  writeFunction.apply(evaluatorFunctionTarget, arguments);
                } else {
                  throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                }
                return this;
              } else {
                ko.dependencyDetection.registerDependency(dependentObservable);
                if (_needsEvaluation || (isSleeping && haveDependenciesChanged())) {
                  evaluateImmediate();
                }
                return _latestValue;
              }
            }
            function peek() {
              if ((_needsEvaluation && !_dependenciesCount) || (isSleeping && haveDependenciesChanged())) {
                evaluateImmediate();
              }
              return _latestValue;
            }
            function isActive() {
              return _needsEvaluation || _dependenciesCount > 0;
            }
            function notify(value, event) {
              dependentObservable["notifySubscribers"](value, event);
            }
            var writeFunction = options["write"],
                disposeWhenNodeIsRemoved = options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
                disposeWhenOption = options["disposeWhen"] || options.disposeWhen,
                disposeWhen = disposeWhenOption,
                dispose = disposeComputed,
                dependencyTracking = {},
                _dependenciesCount = 0,
                evaluationTimeoutInstance = null;
            if (!evaluatorFunctionTarget)
              evaluatorFunctionTarget = options["owner"];
            ko.subscribable.call(dependentObservable);
            ko.utils.setPrototypeOfOrExtend(dependentObservable, ko.dependentObservable['fn']);
            dependentObservable.peek = peek;
            dependentObservable.getDependenciesCount = function() {
              return _dependenciesCount;
            };
            dependentObservable.hasWriteFunction = typeof writeFunction === "function";
            dependentObservable.dispose = function() {
              dispose();
            };
            dependentObservable.isActive = isActive;
            var originalLimit = dependentObservable.limit;
            dependentObservable.limit = function(limitFunction) {
              originalLimit.call(dependentObservable, limitFunction);
              dependentObservable._evalRateLimited = function() {
                dependentObservable._rateLimitedBeforeChange(_latestValue);
                _needsEvaluation = true;
                dependentObservable._rateLimitedChange(dependentObservable);
              };
            };
            if (options['pure']) {
              pure = true;
              isSleeping = true;
              dependentObservable.beforeSubscriptionAdd = function(event) {
                if (!_isDisposed && isSleeping && event == 'change') {
                  isSleeping = false;
                  if (_needsEvaluation || haveDependenciesChanged()) {
                    dependencyTracking = null;
                    _dependenciesCount = 0;
                    _needsEvaluation = true;
                    evaluateImmediate();
                  } else {
                    var dependeciesOrder = [];
                    ko.utils.objectForEach(dependencyTracking, function(id, dependency) {
                      dependeciesOrder[dependency._order] = id;
                    });
                    ko.utils.arrayForEach(dependeciesOrder, function(id, order) {
                      var dependency = dependencyTracking[id],
                          subscription = dependency._target.subscribe(evaluatePossiblyAsync);
                      subscription._order = order;
                      subscription._version = dependency._version;
                      dependencyTracking[id] = subscription;
                    });
                  }
                  if (!_isDisposed) {
                    notify(_latestValue, "awake");
                  }
                }
              };
              dependentObservable.afterSubscriptionRemove = function(event) {
                if (!_isDisposed && event == 'change' && !dependentObservable.hasSubscriptionsForEvent('change')) {
                  ko.utils.objectForEach(dependencyTracking, function(id, dependency) {
                    if (dependency.dispose) {
                      dependencyTracking[id] = {
                        _target: dependency._target,
                        _order: dependency._order,
                        _version: dependency._version
                      };
                      dependency.dispose();
                    }
                  });
                  isSleeping = true;
                  notify(undefined, "asleep");
                }
              };
              dependentObservable._originalGetVersion = dependentObservable.getVersion;
              dependentObservable.getVersion = function() {
                if (isSleeping && (_needsEvaluation || haveDependenciesChanged())) {
                  evaluateImmediate();
                }
                return dependentObservable._originalGetVersion();
              };
            } else if (options['deferEvaluation']) {
              dependentObservable.beforeSubscriptionAdd = function(event) {
                if (event == 'change' || event == 'beforeChange') {
                  peek();
                }
              };
            }
            ko.exportProperty(dependentObservable, 'peek', dependentObservable.peek);
            ko.exportProperty(dependentObservable, 'dispose', dependentObservable.dispose);
            ko.exportProperty(dependentObservable, 'isActive', dependentObservable.isActive);
            ko.exportProperty(dependentObservable, 'getDependenciesCount', dependentObservable.getDependenciesCount);
            if (disposeWhenNodeIsRemoved) {
              _suppressDisposalUntilDisposeWhenReturnsFalse = true;
              if (disposeWhenNodeIsRemoved.nodeType) {
                disposeWhen = function() {
                  return !ko.utils.domNodeIsAttachedToDocument(disposeWhenNodeIsRemoved) || (disposeWhenOption && disposeWhenOption());
                };
              }
            }
            if (!isSleeping && !options['deferEvaluation'])
              evaluateImmediate();
            if (disposeWhenNodeIsRemoved && isActive() && disposeWhenNodeIsRemoved.nodeType) {
              dispose = function() {
                ko.utils.domNodeDisposal.removeDisposeCallback(disposeWhenNodeIsRemoved, dispose);
                disposeComputed();
              };
              ko.utils.domNodeDisposal.addDisposeCallback(disposeWhenNodeIsRemoved, dispose);
            }
            return dependentObservable;
          };
          ko.isComputed = function(instance) {
            return ko.hasPrototype(instance, ko.dependentObservable);
          };
          var protoProp = ko.observable.protoProperty;
          ko.dependentObservable[protoProp] = ko.observable;
          ko.dependentObservable['fn'] = {"equalityComparer": valuesArePrimitiveAndEqual};
          ko.dependentObservable['fn'][protoProp] = ko.dependentObservable;
          if (ko.utils.canSetPrototype) {
            ko.utils.setPrototypeOf(ko.dependentObservable['fn'], ko.subscribable['fn']);
          }
          ko.exportSymbol('dependentObservable', ko.dependentObservable);
          ko.exportSymbol('computed', ko.dependentObservable);
          ko.exportSymbol('isComputed', ko.isComputed);
          ko.pureComputed = function(evaluatorFunctionOrOptions, evaluatorFunctionTarget) {
            if (typeof evaluatorFunctionOrOptions === 'function') {
              return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget, {'pure': true});
            } else {
              evaluatorFunctionOrOptions = ko.utils.extend({}, evaluatorFunctionOrOptions);
              evaluatorFunctionOrOptions['pure'] = true;
              return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget);
            }
          };
          ko.exportSymbol('pureComputed', ko.pureComputed);
          (function() {
            var maxNestedObservableDepth = 10;
            ko.toJS = function(rootObject) {
              if (arguments.length == 0)
                throw new Error("When calling ko.toJS, pass the object you want to convert.");
              return mapJsObjectGraph(rootObject, function(valueToMap) {
                for (var i = 0; ko.isObservable(valueToMap) && (i < maxNestedObservableDepth); i++)
                  valueToMap = valueToMap();
                return valueToMap;
              });
            };
            ko.toJSON = function(rootObject, replacer, space) {
              var plainJavaScriptObject = ko.toJS(rootObject);
              return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
            };
            function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
              visitedObjects = visitedObjects || new objectLookup();
              rootObject = mapInputCallback(rootObject);
              var canHaveProperties = (typeof rootObject == "object") && (rootObject !== null) && (rootObject !== undefined) && (!(rootObject instanceof Date)) && (!(rootObject instanceof String)) && (!(rootObject instanceof Number)) && (!(rootObject instanceof Boolean));
              if (!canHaveProperties)
                return rootObject;
              var outputProperties = rootObject instanceof Array ? [] : {};
              visitedObjects.save(rootObject, outputProperties);
              visitPropertiesOrArrayEntries(rootObject, function(indexer) {
                var propertyValue = mapInputCallback(rootObject[indexer]);
                switch (typeof propertyValue) {
                  case "boolean":
                  case "number":
                  case "string":
                  case "function":
                    outputProperties[indexer] = propertyValue;
                    break;
                  case "object":
                  case "undefined":
                    var previouslyMappedValue = visitedObjects.get(propertyValue);
                    outputProperties[indexer] = (previouslyMappedValue !== undefined) ? previouslyMappedValue : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                    break;
                }
              });
              return outputProperties;
            }
            function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
              if (rootObject instanceof Array) {
                for (var i = 0; i < rootObject.length; i++)
                  visitorCallback(i);
                if (typeof rootObject['toJSON'] == 'function')
                  visitorCallback('toJSON');
              } else {
                for (var propertyName in rootObject) {
                  visitorCallback(propertyName);
                }
              }
            }
            ;
            function objectLookup() {
              this.keys = [];
              this.values = [];
            }
            ;
            objectLookup.prototype = {
              constructor: objectLookup,
              save: function(key, value) {
                var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
                if (existingIndex >= 0)
                  this.values[existingIndex] = value;
                else {
                  this.keys.push(key);
                  this.values.push(value);
                }
              },
              get: function(key) {
                var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
                return (existingIndex >= 0) ? this.values[existingIndex] : undefined;
              }
            };
          })();
          ko.exportSymbol('toJS', ko.toJS);
          ko.exportSymbol('toJSON', ko.toJSON);
          (function() {
            var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';
            ko.selectExtensions = {
              readValue: function(element) {
                switch (ko.utils.tagNameLower(element)) {
                  case 'option':
                    if (element[hasDomDataExpandoProperty] === true)
                      return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                    return ko.utils.ieVersion <= 7 ? (element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text) : element.value;
                  case 'select':
                    return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                  default:
                    return element.value;
                }
              },
              writeValue: function(element, value, allowUnset) {
                switch (ko.utils.tagNameLower(element)) {
                  case 'option':
                    switch (typeof value) {
                      case "string":
                        ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                        if (hasDomDataExpandoProperty in element) {
                          delete element[hasDomDataExpandoProperty];
                        }
                        element.value = value;
                        break;
                      default:
                        ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                        element[hasDomDataExpandoProperty] = true;
                        element.value = typeof value === "number" ? value : "";
                        break;
                    }
                    break;
                  case 'select':
                    if (value === "" || value === null)
                      value = undefined;
                    var selection = -1;
                    for (var i = 0,
                        n = element.options.length,
                        optionValue; i < n; ++i) {
                      optionValue = ko.selectExtensions.readValue(element.options[i]);
                      if (optionValue == value || (optionValue == "" && value === undefined)) {
                        selection = i;
                        break;
                      }
                    }
                    if (allowUnset || selection >= 0 || (value === undefined && element.size > 1)) {
                      element.selectedIndex = selection;
                    }
                    break;
                  default:
                    if ((value === null) || (value === undefined))
                      value = "";
                    element.value = value;
                    break;
                }
              }
            };
          })();
          ko.exportSymbol('selectExtensions', ko.selectExtensions);
          ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
          ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
          ko.expressionRewriting = (function() {
            var javaScriptReservedWords = ["true", "false", "null", "undefined"];
            var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;
            function getWriteableValue(expression) {
              if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0)
                return false;
              var match = expression.match(javaScriptAssignmentTarget);
              return match === null ? false : match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
            }
            var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
                stringSingle = "'(?:[^'\\\\]|\\\\.)*'",
                stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',
                specials = ',"\'{}()/:[\\]',
                everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',
                oneNotSpace = '[^\\s]',
                bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),
                divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
                keywordRegexLookBehind = {
                  'in': 1,
                  'return': 1,
                  'typeof': 1
                };
            function parseObjectLiteral(objectLiteralString) {
              var str = ko.utils.stringTrim(objectLiteralString);
              if (str.charCodeAt(0) === 123)
                str = str.slice(1, -1);
              var result = [],
                  toks = str.match(bindingToken),
                  key,
                  values = [],
                  depth = 0;
              if (toks) {
                toks.push(',');
                for (var i = 0,
                    tok; tok = toks[i]; ++i) {
                  var c = tok.charCodeAt(0);
                  if (c === 44) {
                    if (depth <= 0) {
                      result.push((key && values.length) ? {
                        key: key,
                        value: values.join('')
                      } : {'unknown': key || values.join('')});
                      key = depth = 0;
                      values = [];
                      continue;
                    }
                  } else if (c === 58) {
                    if (!depth && !key && values.length === 1) {
                      key = values.pop();
                      continue;
                    }
                  } else if (c === 47 && i && tok.length > 1) {
                    var match = toks[i - 1].match(divisionLookBehind);
                    if (match && !keywordRegexLookBehind[match[0]]) {
                      str = str.substr(str.indexOf(tok) + 1);
                      toks = str.match(bindingToken);
                      toks.push(',');
                      i = -1;
                      tok = '/';
                    }
                  } else if (c === 40 || c === 123 || c === 91) {
                    ++depth;
                  } else if (c === 41 || c === 125 || c === 93) {
                    --depth;
                  } else if (!key && !values.length && (c === 34 || c === 39)) {
                    tok = tok.slice(1, -1);
                  }
                  values.push(tok);
                }
              }
              return result;
            }
            var twoWayBindings = {};
            function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
              bindingOptions = bindingOptions || {};
              function processKeyValue(key, val) {
                var writableVal;
                function callPreprocessHook(obj) {
                  return (obj && obj['preprocess']) ? (val = obj['preprocess'](val, key, processKeyValue)) : true;
                }
                if (!bindingParams) {
                  if (!callPreprocessHook(ko['getBindingHandler'](key)))
                    return;
                  if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
                    propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
                  }
                }
                if (makeValueAccessors) {
                  val = 'function(){return ' + val + ' }';
                }
                resultStrings.push("'" + key + "':" + val);
              }
              var resultStrings = [],
                  propertyAccessorResultStrings = [],
                  makeValueAccessors = bindingOptions['valueAccessors'],
                  bindingParams = bindingOptions['bindingParams'],
                  keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ? parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;
              ko.utils.arrayForEach(keyValueArray, function(keyValue) {
                processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
              });
              if (propertyAccessorResultStrings.length)
                processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + " }");
              return resultStrings.join(",");
            }
            return {
              bindingRewriteValidators: [],
              twoWayBindings: twoWayBindings,
              parseObjectLiteral: parseObjectLiteral,
              preProcessBindings: preProcessBindings,
              keyValueArrayContainsKey: function(keyValueArray, key) {
                for (var i = 0; i < keyValueArray.length; i++)
                  if (keyValueArray[i]['key'] == key)
                    return true;
                return false;
              },
              writeValueToProperty: function(property, allBindings, key, value, checkIfDifferent) {
                if (!property || !ko.isObservable(property)) {
                  var propWriters = allBindings.get('_ko_property_writers');
                  if (propWriters && propWriters[key])
                    propWriters[key](value);
                } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
                  property(value);
                }
              }
            };
          })();
          ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
          ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
          ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
          ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);
          ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings);
          ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
          ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);
          (function() {
            var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";
            var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
            var endCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
            var htmlTagsWithOptionallyClosingChildren = {
              'ul': true,
              'ol': true
            };
            function isStartComment(node) {
              return (node.nodeType == 8) && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
            }
            function isEndComment(node) {
              return (node.nodeType == 8) && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
            }
            function getVirtualChildren(startComment, allowUnbalanced) {
              var currentNode = startComment;
              var depth = 1;
              var children = [];
              while (currentNode = currentNode.nextSibling) {
                if (isEndComment(currentNode)) {
                  depth--;
                  if (depth === 0)
                    return children;
                }
                children.push(currentNode);
                if (isStartComment(currentNode))
                  depth++;
              }
              if (!allowUnbalanced)
                throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
              return null;
            }
            function getMatchingEndComment(startComment, allowUnbalanced) {
              var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
              if (allVirtualChildren) {
                if (allVirtualChildren.length > 0)
                  return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
                return startComment.nextSibling;
              } else
                return null;
            }
            function getUnbalancedChildTags(node) {
              var childNode = node.firstChild,
                  captureRemaining = null;
              if (childNode) {
                do {
                  if (captureRemaining)
                    captureRemaining.push(childNode);
                  else if (isStartComment(childNode)) {
                    var matchingEndComment = getMatchingEndComment(childNode, true);
                    if (matchingEndComment)
                      childNode = matchingEndComment;
                    else
                      captureRemaining = [childNode];
                  } else if (isEndComment(childNode)) {
                    captureRemaining = [childNode];
                  }
                } while (childNode = childNode.nextSibling);
              }
              return captureRemaining;
            }
            ko.virtualElements = {
              allowedBindings: {},
              childNodes: function(node) {
                return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
              },
              emptyNode: function(node) {
                if (!isStartComment(node))
                  ko.utils.emptyDomNode(node);
                else {
                  var virtualChildren = ko.virtualElements.childNodes(node);
                  for (var i = 0,
                      j = virtualChildren.length; i < j; i++)
                    ko.removeNode(virtualChildren[i]);
                }
              },
              setDomNodeChildren: function(node, childNodes) {
                if (!isStartComment(node))
                  ko.utils.setDomNodeChildren(node, childNodes);
                else {
                  ko.virtualElements.emptyNode(node);
                  var endCommentNode = node.nextSibling;
                  for (var i = 0,
                      j = childNodes.length; i < j; i++)
                    endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
                }
              },
              prepend: function(containerNode, nodeToPrepend) {
                if (!isStartComment(containerNode)) {
                  if (containerNode.firstChild)
                    containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);
                  else
                    containerNode.appendChild(nodeToPrepend);
                } else {
                  containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
                }
              },
              insertAfter: function(containerNode, nodeToInsert, insertAfterNode) {
                if (!insertAfterNode) {
                  ko.virtualElements.prepend(containerNode, nodeToInsert);
                } else if (!isStartComment(containerNode)) {
                  if (insertAfterNode.nextSibling)
                    containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                  else
                    containerNode.appendChild(nodeToInsert);
                } else {
                  containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                }
              },
              firstChild: function(node) {
                if (!isStartComment(node))
                  return node.firstChild;
                if (!node.nextSibling || isEndComment(node.nextSibling))
                  return null;
                return node.nextSibling;
              },
              nextSibling: function(node) {
                if (isStartComment(node))
                  node = getMatchingEndComment(node);
                if (node.nextSibling && isEndComment(node.nextSibling))
                  return null;
                return node.nextSibling;
              },
              hasBindingValue: isStartComment,
              virtualNodeBindingValue: function(node) {
                var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
                return regexMatch ? regexMatch[1] : null;
              },
              normaliseVirtualElementDomStructure: function(elementVerified) {
                if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])
                  return;
                var childNode = elementVerified.firstChild;
                if (childNode) {
                  do {
                    if (childNode.nodeType === 1) {
                      var unbalancedTags = getUnbalancedChildTags(childNode);
                      if (unbalancedTags) {
                        var nodeToInsertBefore = childNode.nextSibling;
                        for (var i = 0; i < unbalancedTags.length; i++) {
                          if (nodeToInsertBefore)
                            elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);
                          else
                            elementVerified.appendChild(unbalancedTags[i]);
                        }
                      }
                    }
                  } while (childNode = childNode.nextSibling);
                }
              }
            };
          })();
          ko.exportSymbol('virtualElements', ko.virtualElements);
          ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
          ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
          ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
          ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
          ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
          (function() {
            var defaultBindingAttributeName = "data-bind";
            ko.bindingProvider = function() {
              this.bindingCache = {};
            };
            ko.utils.extend(ko.bindingProvider.prototype, {
              'nodeHasBindings': function(node) {
                switch (node.nodeType) {
                  case 1:
                    return node.getAttribute(defaultBindingAttributeName) != null || ko.components['getComponentNameForNode'](node);
                  case 8:
                    return ko.virtualElements.hasBindingValue(node);
                  default:
                    return false;
                }
              },
              'getBindings': function(node, bindingContext) {
                var bindingsString = this['getBindingsString'](node, bindingContext),
                    parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
                return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, false);
              },
              'getBindingAccessors': function(node, bindingContext) {
                var bindingsString = this['getBindingsString'](node, bindingContext),
                    parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, {'valueAccessors': true}) : null;
                return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, true);
              },
              'getBindingsString': function(node, bindingContext) {
                switch (node.nodeType) {
                  case 1:
                    return node.getAttribute(defaultBindingAttributeName);
                  case 8:
                    return ko.virtualElements.virtualNodeBindingValue(node);
                  default:
                    return null;
                }
              },
              'parseBindingsString': function(bindingsString, bindingContext, node, options) {
                try {
                  var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
                  return bindingFunction(bindingContext, node);
                } catch (ex) {
                  ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
                  throw ex;
                }
              }
            });
            ko.bindingProvider['instance'] = new ko.bindingProvider();
            function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
              var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
              return cache[cacheKey] || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
            }
            function createBindingsStringEvaluator(bindingsString, options) {
              var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
                  functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
              return new Function("$context", "$element", functionBody);
            }
          })();
          ko.exportSymbol('bindingProvider', ko.bindingProvider);
          (function() {
            ko.bindingHandlers = {};
            var bindingDoesNotRecurseIntoElementTypes = {
              'script': true,
              'textarea': true
            };
            ko['getBindingHandler'] = function(bindingKey) {
              return ko.bindingHandlers[bindingKey];
            };
            ko.bindingContext = function(dataItemOrAccessor, parentContext, dataItemAlias, extendCallback) {
              function updateContext() {
                var dataItemOrObservable = isFunc ? dataItemOrAccessor() : dataItemOrAccessor,
                    dataItem = ko.utils.unwrapObservable(dataItemOrObservable);
                if (parentContext) {
                  if (parentContext._subscribable)
                    parentContext._subscribable();
                  ko.utils.extend(self, parentContext);
                  if (subscribable) {
                    self._subscribable = subscribable;
                  }
                } else {
                  self['$parents'] = [];
                  self['$root'] = dataItem;
                  self['ko'] = ko;
                }
                self['$rawData'] = dataItemOrObservable;
                self['$data'] = dataItem;
                if (dataItemAlias)
                  self[dataItemAlias] = dataItem;
                if (extendCallback)
                  extendCallback(self, parentContext, dataItem);
                return self['$data'];
              }
              function disposeWhen() {
                return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
              }
              var self = this,
                  isFunc = typeof(dataItemOrAccessor) == "function" && !ko.isObservable(dataItemOrAccessor),
                  nodes,
                  subscribable = ko.dependentObservable(updateContext, null, {
                    disposeWhen: disposeWhen,
                    disposeWhenNodeIsRemoved: true
                  });
              if (subscribable.isActive()) {
                self._subscribable = subscribable;
                subscribable['equalityComparer'] = null;
                nodes = [];
                subscribable._addNode = function(node) {
                  nodes.push(node);
                  ko.utils.domNodeDisposal.addDisposeCallback(node, function(node) {
                    ko.utils.arrayRemoveItem(nodes, node);
                    if (!nodes.length) {
                      subscribable.dispose();
                      self._subscribable = subscribable = undefined;
                    }
                  });
                };
              }
            };
            ko.bindingContext.prototype['createChildContext'] = function(dataItemOrAccessor, dataItemAlias, extendCallback) {
              return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function(self, parentContext) {
                self['$parentContext'] = parentContext;
                self['$parent'] = parentContext['$data'];
                self['$parents'] = (parentContext['$parents'] || []).slice(0);
                self['$parents'].unshift(self['$parent']);
                if (extendCallback)
                  extendCallback(self);
              });
            };
            ko.bindingContext.prototype['extend'] = function(properties) {
              return new ko.bindingContext(this._subscribable || this['$data'], this, null, function(self, parentContext) {
                self['$rawData'] = parentContext['$rawData'];
                ko.utils.extend(self, typeof(properties) == "function" ? properties() : properties);
              });
            };
            function makeValueAccessor(value) {
              return function() {
                return value;
              };
            }
            function evaluateValueAccessor(valueAccessor) {
              return valueAccessor();
            }
            function makeAccessorsFromFunction(callback) {
              return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function(value, key) {
                return function() {
                  return callback()[key];
                };
              });
            }
            function makeBindingAccessors(bindings, context, node) {
              if (typeof bindings === 'function') {
                return makeAccessorsFromFunction(bindings.bind(null, context, node));
              } else {
                return ko.utils.objectMap(bindings, makeValueAccessor);
              }
            }
            function getBindingsAndMakeAccessors(node, context) {
              return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
            }
            function validateThatBindingIsAllowedForVirtualElements(bindingName) {
              var validator = ko.virtualElements.allowedBindings[bindingName];
              if (!validator)
                throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements");
            }
            function applyBindingsToDescendantsInternal(bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
              var currentChild,
                  nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
                  provider = ko.bindingProvider['instance'],
                  preprocessNode = provider['preprocessNode'];
              if (preprocessNode) {
                while (currentChild = nextInQueue) {
                  nextInQueue = ko.virtualElements.nextSibling(currentChild);
                  preprocessNode.call(provider, currentChild);
                }
                nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
              }
              while (currentChild = nextInQueue) {
                nextInQueue = ko.virtualElements.nextSibling(currentChild);
                applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
              }
            }
            function applyBindingsToNodeAndDescendantsInternal(bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
              var shouldBindDescendants = true;
              var isElement = (nodeVerified.nodeType === 1);
              if (isElement)
                ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);
              var shouldApplyBindings = (isElement && bindingContextMayDifferFromDomParentElement) || ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);
              if (shouldApplyBindings)
                shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];
              if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
                applyBindingsToDescendantsInternal(bindingContext, nodeVerified, !isElement);
              }
            }
            var boundElementDomDataKey = ko.utils.domData.nextKey();
            function topologicalSortBindings(bindings) {
              var result = [],
                  bindingsConsidered = {},
                  cyclicDependencyStack = [];
              ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
                if (!bindingsConsidered[bindingKey]) {
                  var binding = ko['getBindingHandler'](bindingKey);
                  if (binding) {
                    if (binding['after']) {
                      cyclicDependencyStack.push(bindingKey);
                      ko.utils.arrayForEach(binding['after'], function(bindingDependencyKey) {
                        if (bindings[bindingDependencyKey]) {
                          if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
                            throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
                          } else {
                            pushBinding(bindingDependencyKey);
                          }
                        }
                      });
                      cyclicDependencyStack.length--;
                    }
                    result.push({
                      key: bindingKey,
                      handler: binding
                    });
                  }
                  bindingsConsidered[bindingKey] = true;
                }
              });
              return result;
            }
            function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
              var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
              if (!sourceBindings) {
                if (alreadyBound) {
                  throw Error("You cannot apply bindings multiple times to the same element.");
                }
                ko.utils.domData.set(node, boundElementDomDataKey, true);
              }
              if (!alreadyBound && bindingContextMayDifferFromDomParentElement)
                ko.storedBindingContextForNode(node, bindingContext);
              var bindings;
              if (sourceBindings && typeof sourceBindings !== 'function') {
                bindings = sourceBindings;
              } else {
                var provider = ko.bindingProvider['instance'],
                    getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;
                var bindingsUpdater = ko.dependentObservable(function() {
                  bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext);
                  if (bindings && bindingContext._subscribable)
                    bindingContext._subscribable();
                  return bindings;
                }, null, {disposeWhenNodeIsRemoved: node});
                if (!bindings || !bindingsUpdater.isActive())
                  bindingsUpdater = null;
              }
              var bindingHandlerThatControlsDescendantBindings;
              if (bindings) {
                var getValueAccessor = bindingsUpdater ? function(bindingKey) {
                  return function() {
                    return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
                  };
                } : function(bindingKey) {
                  return bindings[bindingKey];
                };
                function allBindings() {
                  return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
                }
                allBindings['get'] = function(key) {
                  return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
                };
                allBindings['has'] = function(key) {
                  return key in bindings;
                };
                var orderedBindings = topologicalSortBindings(bindings);
                ko.utils.arrayForEach(orderedBindings, function(bindingKeyAndHandler) {
                  var handlerInitFn = bindingKeyAndHandler.handler["init"],
                      handlerUpdateFn = bindingKeyAndHandler.handler["update"],
                      bindingKey = bindingKeyAndHandler.key;
                  if (node.nodeType === 8) {
                    validateThatBindingIsAllowedForVirtualElements(bindingKey);
                  }
                  try {
                    if (typeof handlerInitFn == "function") {
                      ko.dependencyDetection.ignore(function() {
                        var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                        if (initResult && initResult['controlsDescendantBindings']) {
                          if (bindingHandlerThatControlsDescendantBindings !== undefined)
                            throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                          bindingHandlerThatControlsDescendantBindings = bindingKey;
                        }
                      });
                    }
                    if (typeof handlerUpdateFn == "function") {
                      ko.dependentObservable(function() {
                        handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                      }, null, {disposeWhenNodeIsRemoved: node});
                    }
                  } catch (ex) {
                    ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
                    throw ex;
                  }
                });
              }
              return {'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined};
            }
            ;
            var storedBindingContextDomDataKey = ko.utils.domData.nextKey();
            ko.storedBindingContextForNode = function(node, bindingContext) {
              if (arguments.length == 2) {
                ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
                if (bindingContext._subscribable)
                  bindingContext._subscribable._addNode(node);
              } else {
                return ko.utils.domData.get(node, storedBindingContextDomDataKey);
              }
            };
            function getBindingContext(viewModelOrBindingContext) {
              return viewModelOrBindingContext && (viewModelOrBindingContext instanceof ko.bindingContext) ? viewModelOrBindingContext : new ko.bindingContext(viewModelOrBindingContext);
            }
            ko.applyBindingAccessorsToNode = function(node, bindings, viewModelOrBindingContext) {
              if (node.nodeType === 1)
                ko.virtualElements.normaliseVirtualElementDomStructure(node);
              return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
            };
            ko.applyBindingsToNode = function(node, bindings, viewModelOrBindingContext) {
              var context = getBindingContext(viewModelOrBindingContext);
              return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
            };
            ko.applyBindingsToDescendants = function(viewModelOrBindingContext, rootNode) {
              if (rootNode.nodeType === 1 || rootNode.nodeType === 8)
                applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
            };
            ko.applyBindings = function(viewModelOrBindingContext, rootNode) {
              if (!jQueryInstance && window['jQuery']) {
                jQueryInstance = window['jQuery'];
              }
              if (rootNode && (rootNode.nodeType !== 1) && (rootNode.nodeType !== 8))
                throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
              rootNode = rootNode || window.document.body;
              applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
            };
            ko.contextFor = function(node) {
              switch (node.nodeType) {
                case 1:
                case 8:
                  var context = ko.storedBindingContextForNode(node);
                  if (context)
                    return context;
                  if (node.parentNode)
                    return ko.contextFor(node.parentNode);
                  break;
              }
              return undefined;
            };
            ko.dataFor = function(node) {
              var context = ko.contextFor(node);
              return context ? context['$data'] : undefined;
            };
            ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
            ko.exportSymbol('applyBindings', ko.applyBindings);
            ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
            ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
            ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
            ko.exportSymbol('contextFor', ko.contextFor);
            ko.exportSymbol('dataFor', ko.dataFor);
          })();
          (function(undefined) {
            var loadingSubscribablesCache = {},
                loadedDefinitionsCache = {};
            ko.components = {
              get: function(componentName, callback) {
                var cachedDefinition = getObjectOwnProperty(loadedDefinitionsCache, componentName);
                if (cachedDefinition) {
                  if (cachedDefinition.isSynchronousComponent) {
                    ko.dependencyDetection.ignore(function() {
                      callback(cachedDefinition.definition);
                    });
                  } else {
                    setTimeout(function() {
                      callback(cachedDefinition.definition);
                    }, 0);
                  }
                } else {
                  loadComponentAndNotify(componentName, callback);
                }
              },
              clearCachedDefinition: function(componentName) {
                delete loadedDefinitionsCache[componentName];
              },
              _getFirstResultFromLoaders: getFirstResultFromLoaders
            };
            function getObjectOwnProperty(obj, propName) {
              return obj.hasOwnProperty(propName) ? obj[propName] : undefined;
            }
            function loadComponentAndNotify(componentName, callback) {
              var subscribable = getObjectOwnProperty(loadingSubscribablesCache, componentName),
                  completedAsync;
              if (!subscribable) {
                subscribable = loadingSubscribablesCache[componentName] = new ko.subscribable();
                subscribable.subscribe(callback);
                beginLoadingComponent(componentName, function(definition, config) {
                  var isSynchronousComponent = !!(config && config['synchronous']);
                  loadedDefinitionsCache[componentName] = {
                    definition: definition,
                    isSynchronousComponent: isSynchronousComponent
                  };
                  delete loadingSubscribablesCache[componentName];
                  if (completedAsync || isSynchronousComponent) {
                    subscribable['notifySubscribers'](definition);
                  } else {
                    setTimeout(function() {
                      subscribable['notifySubscribers'](definition);
                    }, 0);
                  }
                });
                completedAsync = true;
              } else {
                subscribable.subscribe(callback);
              }
            }
            function beginLoadingComponent(componentName, callback) {
              getFirstResultFromLoaders('getConfig', [componentName], function(config) {
                if (config) {
                  getFirstResultFromLoaders('loadComponent', [componentName, config], function(definition) {
                    callback(definition, config);
                  });
                } else {
                  callback(null, null);
                }
              });
            }
            function getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders) {
              if (!candidateLoaders) {
                candidateLoaders = ko.components['loaders'].slice(0);
              }
              var currentCandidateLoader = candidateLoaders.shift();
              if (currentCandidateLoader) {
                var methodInstance = currentCandidateLoader[methodName];
                if (methodInstance) {
                  var wasAborted = false,
                      synchronousReturnValue = methodInstance.apply(currentCandidateLoader, argsExceptCallback.concat(function(result) {
                        if (wasAborted) {
                          callback(null);
                        } else if (result !== null) {
                          callback(result);
                        } else {
                          getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                        }
                      }));
                  if (synchronousReturnValue !== undefined) {
                    wasAborted = true;
                    if (!currentCandidateLoader['suppressLoaderExceptions']) {
                      throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');
                    }
                  }
                } else {
                  getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                }
              } else {
                callback(null);
              }
            }
            ko.components['loaders'] = [];
            ko.exportSymbol('components', ko.components);
            ko.exportSymbol('components.get', ko.components.get);
            ko.exportSymbol('components.clearCachedDefinition', ko.components.clearCachedDefinition);
          })();
          (function(undefined) {
            var defaultConfigRegistry = {};
            ko.components.register = function(componentName, config) {
              if (!config) {
                throw new Error('Invalid configuration for ' + componentName);
              }
              if (ko.components.isRegistered(componentName)) {
                throw new Error('Component ' + componentName + ' is already registered');
              }
              defaultConfigRegistry[componentName] = config;
            };
            ko.components.isRegistered = function(componentName) {
              return componentName in defaultConfigRegistry;
            };
            ko.components.unregister = function(componentName) {
              delete defaultConfigRegistry[componentName];
              ko.components.clearCachedDefinition(componentName);
            };
            ko.components.defaultLoader = {
              'getConfig': function(componentName, callback) {
                var result = defaultConfigRegistry.hasOwnProperty(componentName) ? defaultConfigRegistry[componentName] : null;
                callback(result);
              },
              'loadComponent': function(componentName, config, callback) {
                var errorCallback = makeErrorCallback(componentName);
                possiblyGetConfigFromAmd(errorCallback, config, function(loadedConfig) {
                  resolveConfig(componentName, errorCallback, loadedConfig, callback);
                });
              },
              'loadTemplate': function(componentName, templateConfig, callback) {
                resolveTemplate(makeErrorCallback(componentName), templateConfig, callback);
              },
              'loadViewModel': function(componentName, viewModelConfig, callback) {
                resolveViewModel(makeErrorCallback(componentName), viewModelConfig, callback);
              }
            };
            var createViewModelKey = 'createViewModel';
            function resolveConfig(componentName, errorCallback, config, callback) {
              var result = {},
                  makeCallBackWhenZero = 2,
                  tryIssueCallback = function() {
                    if (--makeCallBackWhenZero === 0) {
                      callback(result);
                    }
                  },
                  templateConfig = config['template'],
                  viewModelConfig = config['viewModel'];
              if (templateConfig) {
                possiblyGetConfigFromAmd(errorCallback, templateConfig, function(loadedConfig) {
                  ko.components._getFirstResultFromLoaders('loadTemplate', [componentName, loadedConfig], function(resolvedTemplate) {
                    result['template'] = resolvedTemplate;
                    tryIssueCallback();
                  });
                });
              } else {
                tryIssueCallback();
              }
              if (viewModelConfig) {
                possiblyGetConfigFromAmd(errorCallback, viewModelConfig, function(loadedConfig) {
                  ko.components._getFirstResultFromLoaders('loadViewModel', [componentName, loadedConfig], function(resolvedViewModel) {
                    result[createViewModelKey] = resolvedViewModel;
                    tryIssueCallback();
                  });
                });
              } else {
                tryIssueCallback();
              }
            }
            function resolveTemplate(errorCallback, templateConfig, callback) {
              if (typeof templateConfig === 'string') {
                callback(ko.utils.parseHtmlFragment(templateConfig));
              } else if (templateConfig instanceof Array) {
                callback(templateConfig);
              } else if (isDocumentFragment(templateConfig)) {
                callback(ko.utils.makeArray(templateConfig.childNodes));
              } else if (templateConfig['element']) {
                var element = templateConfig['element'];
                if (isDomElement(element)) {
                  callback(cloneNodesFromTemplateSourceElement(element));
                } else if (typeof element === 'string') {
                  var elemInstance = document.getElementById(element);
                  if (elemInstance) {
                    callback(cloneNodesFromTemplateSourceElement(elemInstance));
                  } else {
                    errorCallback('Cannot find element with ID ' + element);
                  }
                } else {
                  errorCallback('Unknown element type: ' + element);
                }
              } else {
                errorCallback('Unknown template value: ' + templateConfig);
              }
            }
            function resolveViewModel(errorCallback, viewModelConfig, callback) {
              if (typeof viewModelConfig === 'function') {
                callback(function(params) {
                  return new viewModelConfig(params);
                });
              } else if (typeof viewModelConfig[createViewModelKey] === 'function') {
                callback(viewModelConfig[createViewModelKey]);
              } else if ('instance' in viewModelConfig) {
                var fixedInstance = viewModelConfig['instance'];
                callback(function(params, componentInfo) {
                  return fixedInstance;
                });
              } else if ('viewModel' in viewModelConfig) {
                resolveViewModel(errorCallback, viewModelConfig['viewModel'], callback);
              } else {
                errorCallback('Unknown viewModel value: ' + viewModelConfig);
              }
            }
            function cloneNodesFromTemplateSourceElement(elemInstance) {
              switch (ko.utils.tagNameLower(elemInstance)) {
                case 'script':
                  return ko.utils.parseHtmlFragment(elemInstance.text);
                case 'textarea':
                  return ko.utils.parseHtmlFragment(elemInstance.value);
                case 'template':
                  if (isDocumentFragment(elemInstance.content)) {
                    return ko.utils.cloneNodes(elemInstance.content.childNodes);
                  }
              }
              return ko.utils.cloneNodes(elemInstance.childNodes);
            }
            function isDomElement(obj) {
              if (window['HTMLElement']) {
                return obj instanceof HTMLElement;
              } else {
                return obj && obj.tagName && obj.nodeType === 1;
              }
            }
            function isDocumentFragment(obj) {
              if (window['DocumentFragment']) {
                return obj instanceof DocumentFragment;
              } else {
                return obj && obj.nodeType === 11;
              }
            }
            function possiblyGetConfigFromAmd(errorCallback, config, callback) {
              if (typeof config['require'] === 'string') {
                if (amdRequire || window['require']) {
                  (amdRequire || window['require'])([config['require']], callback);
                } else {
                  errorCallback('Uses require, but no AMD loader is present');
                }
              } else {
                callback(config);
              }
            }
            function makeErrorCallback(componentName) {
              return function(message) {
                throw new Error('Component \'' + componentName + '\': ' + message);
              };
            }
            ko.exportSymbol('components.register', ko.components.register);
            ko.exportSymbol('components.isRegistered', ko.components.isRegistered);
            ko.exportSymbol('components.unregister', ko.components.unregister);
            ko.exportSymbol('components.defaultLoader', ko.components.defaultLoader);
            ko.components['loaders'].push(ko.components.defaultLoader);
            ko.components._allRegisteredComponents = defaultConfigRegistry;
          })();
          (function(undefined) {
            ko.components['getComponentNameForNode'] = function(node) {
              var tagNameLower = ko.utils.tagNameLower(node);
              return ko.components.isRegistered(tagNameLower) && tagNameLower;
            };
            ko.components.addBindingsForCustomElement = function(allBindings, node, bindingContext, valueAccessors) {
              if (node.nodeType === 1) {
                var componentName = ko.components['getComponentNameForNode'](node);
                if (componentName) {
                  allBindings = allBindings || {};
                  if (allBindings['component']) {
                    throw new Error('Cannot use the "component" binding on a custom element matching a component');
                  }
                  var componentBindingValue = {
                    'name': componentName,
                    'params': getComponentParamsFromCustomElement(node, bindingContext)
                  };
                  allBindings['component'] = valueAccessors ? function() {
                    return componentBindingValue;
                  } : componentBindingValue;
                }
              }
              return allBindings;
            };
            var nativeBindingProviderInstance = new ko.bindingProvider();
            function getComponentParamsFromCustomElement(elem, bindingContext) {
              var paramsAttribute = elem.getAttribute('params');
              if (paramsAttribute) {
                var params = nativeBindingProviderInstance['parseBindingsString'](paramsAttribute, bindingContext, elem, {
                  'valueAccessors': true,
                  'bindingParams': true
                }),
                    rawParamComputedValues = ko.utils.objectMap(params, function(paramValue, paramName) {
                      return ko.computed(paramValue, null, {disposeWhenNodeIsRemoved: elem});
                    }),
                    result = ko.utils.objectMap(rawParamComputedValues, function(paramValueComputed, paramName) {
                      var paramValue = paramValueComputed.peek();
                      if (!paramValueComputed.isActive()) {
                        return paramValue;
                      } else {
                        return ko.computed({
                          'read': function() {
                            return ko.utils.unwrapObservable(paramValueComputed());
                          },
                          'write': ko.isWriteableObservable(paramValue) && function(value) {
                            paramValueComputed()(value);
                          },
                          disposeWhenNodeIsRemoved: elem
                        });
                      }
                    });
                if (!result.hasOwnProperty('$raw')) {
                  result['$raw'] = rawParamComputedValues;
                }
                return result;
              } else {
                return {'$raw': {}};
              }
            }
            if (ko.utils.ieVersion < 9) {
              ko.components['register'] = (function(originalFunction) {
                return function(componentName) {
                  document.createElement(componentName);
                  return originalFunction.apply(this, arguments);
                };
              })(ko.components['register']);
              document.createDocumentFragment = (function(originalFunction) {
                return function() {
                  var newDocFrag = originalFunction(),
                      allComponents = ko.components._allRegisteredComponents;
                  for (var componentName in allComponents) {
                    if (allComponents.hasOwnProperty(componentName)) {
                      newDocFrag.createElement(componentName);
                    }
                  }
                  return newDocFrag;
                };
              })(document.createDocumentFragment);
            }
          })();
          (function(undefined) {
            var componentLoadingOperationUniqueId = 0;
            ko.bindingHandlers['component'] = {'init': function(element, valueAccessor, ignored1, ignored2, bindingContext) {
                var currentViewModel,
                    currentLoadingOperationId,
                    disposeAssociatedComponentViewModel = function() {
                      var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
                      if (typeof currentViewModelDispose === 'function') {
                        currentViewModelDispose.call(currentViewModel);
                      }
                      currentLoadingOperationId = null;
                    },
                    originalChildNodes = ko.utils.makeArray(ko.virtualElements.childNodes(element));
                ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);
                ko.computed(function() {
                  var value = ko.utils.unwrapObservable(valueAccessor()),
                      componentName,
                      componentParams;
                  if (typeof value === 'string') {
                    componentName = value;
                  } else {
                    componentName = ko.utils.unwrapObservable(value['name']);
                    componentParams = ko.utils.unwrapObservable(value['params']);
                  }
                  if (!componentName) {
                    throw new Error('No component name specified');
                  }
                  var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
                  ko.components.get(componentName, function(componentDefinition) {
                    if (currentLoadingOperationId !== loadingOperationId) {
                      return;
                    }
                    disposeAssociatedComponentViewModel();
                    if (!componentDefinition) {
                      throw new Error('Unknown component \'' + componentName + '\'');
                    }
                    cloneTemplateIntoElement(componentName, componentDefinition, element);
                    var componentViewModel = createViewModel(componentDefinition, element, originalChildNodes, componentParams),
                        childBindingContext = bindingContext['createChildContext'](componentViewModel, undefined, function(ctx) {
                          ctx['$component'] = componentViewModel;
                          ctx['$componentTemplateNodes'] = originalChildNodes;
                        });
                    currentViewModel = componentViewModel;
                    ko.applyBindingsToDescendants(childBindingContext, element);
                  });
                }, null, {disposeWhenNodeIsRemoved: element});
                return {'controlsDescendantBindings': true};
              }};
            ko.virtualElements.allowedBindings['component'] = true;
            function cloneTemplateIntoElement(componentName, componentDefinition, element) {
              var template = componentDefinition['template'];
              if (!template) {
                throw new Error('Component \'' + componentName + '\' has no template');
              }
              var clonedNodesArray = ko.utils.cloneNodes(template);
              ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
            }
            function createViewModel(componentDefinition, element, originalChildNodes, componentParams) {
              var componentViewModelFactory = componentDefinition['createViewModel'];
              return componentViewModelFactory ? componentViewModelFactory.call(componentDefinition, componentParams, {
                'element': element,
                'templateNodes': originalChildNodes
              }) : componentParams;
            }
          })();
          var attrHtmlToJavascriptMap = {
            'class': 'className',
            'for': 'htmlFor'
          };
          ko.bindingHandlers['attr'] = {'update': function(element, valueAccessor, allBindings) {
              var value = ko.utils.unwrapObservable(valueAccessor()) || {};
              ko.utils.objectForEach(value, function(attrName, attrValue) {
                attrValue = ko.utils.unwrapObservable(attrValue);
                var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
                if (toRemove)
                  element.removeAttribute(attrName);
                if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                  attrName = attrHtmlToJavascriptMap[attrName];
                  if (toRemove)
                    element.removeAttribute(attrName);
                  else
                    element[attrName] = attrValue;
                } else if (!toRemove) {
                  element.setAttribute(attrName, attrValue.toString());
                }
                if (attrName === "name") {
                  ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
                }
              });
            }};
          (function() {
            ko.bindingHandlers['checked'] = {
              'after': ['value', 'attr'],
              'init': function(element, valueAccessor, allBindings) {
                var checkedValue = ko.pureComputed(function() {
                  if (allBindings['has']('checkedValue')) {
                    return ko.utils.unwrapObservable(allBindings.get('checkedValue'));
                  } else if (allBindings['has']('value')) {
                    return ko.utils.unwrapObservable(allBindings.get('value'));
                  }
                  return element.value;
                });
                function updateModel() {
                  var isChecked = element.checked,
                      elemValue = useCheckedValue ? checkedValue() : isChecked;
                  if (ko.computedContext.isInitial()) {
                    return;
                  }
                  if (isRadio && !isChecked) {
                    return;
                  }
                  var modelValue = ko.dependencyDetection.ignore(valueAccessor);
                  if (isValueArray) {
                    if (oldElemValue !== elemValue) {
                      if (isChecked) {
                        ko.utils.addOrRemoveItem(modelValue, elemValue, true);
                        ko.utils.addOrRemoveItem(modelValue, oldElemValue, false);
                      }
                      oldElemValue = elemValue;
                    } else {
                      ko.utils.addOrRemoveItem(modelValue, elemValue, isChecked);
                    }
                  } else {
                    ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
                  }
                }
                ;
                function updateView() {
                  var modelValue = ko.utils.unwrapObservable(valueAccessor());
                  if (isValueArray) {
                    element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
                  } else if (isCheckbox) {
                    element.checked = modelValue;
                  } else {
                    element.checked = (checkedValue() === modelValue);
                  }
                }
                ;
                var isCheckbox = element.type == "checkbox",
                    isRadio = element.type == "radio";
                if (!isCheckbox && !isRadio) {
                  return;
                }
                var isValueArray = isCheckbox && (ko.utils.unwrapObservable(valueAccessor()) instanceof Array),
                    oldElemValue = isValueArray ? checkedValue() : undefined,
                    useCheckedValue = isRadio || isValueArray;
                if (isRadio && !element.name)
                  ko.bindingHandlers['uniqueName']['init'](element, function() {
                    return true;
                  });
                ko.computed(updateModel, null, {disposeWhenNodeIsRemoved: element});
                ko.utils.registerEventHandler(element, "click", updateModel);
                ko.computed(updateView, null, {disposeWhenNodeIsRemoved: element});
              }
            };
            ko.expressionRewriting.twoWayBindings['checked'] = true;
            ko.bindingHandlers['checkedValue'] = {'update': function(element, valueAccessor) {
                element.value = ko.utils.unwrapObservable(valueAccessor());
              }};
          })();
          var classesWrittenByBindingKey = '__ko__cssValue';
          ko.bindingHandlers['css'] = {'update': function(element, valueAccessor) {
              var value = ko.utils.unwrapObservable(valueAccessor());
              if (value !== null && typeof value == "object") {
                ko.utils.objectForEach(value, function(className, shouldHaveClass) {
                  shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
                  ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
                });
              } else {
                value = String(value || '');
                ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
                element[classesWrittenByBindingKey] = value;
                ko.utils.toggleDomNodeCssClass(element, value, true);
              }
            }};
          ko.bindingHandlers['enable'] = {'update': function(element, valueAccessor) {
              var value = ko.utils.unwrapObservable(valueAccessor());
              if (value && element.disabled)
                element.removeAttribute("disabled");
              else if ((!value) && (!element.disabled))
                element.disabled = true;
            }};
          ko.bindingHandlers['disable'] = {'update': function(element, valueAccessor) {
              ko.bindingHandlers['enable']['update'](element, function() {
                return !ko.utils.unwrapObservable(valueAccessor());
              });
            }};
          function makeEventHandlerShortcut(eventName) {
            ko.bindingHandlers[eventName] = {'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var newValueAccessor = function() {
                  var result = {};
                  result[eventName] = valueAccessor();
                  return result;
                };
                return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
              }};
          }
          ko.bindingHandlers['event'] = {'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
              var eventsToHandle = valueAccessor() || {};
              ko.utils.objectForEach(eventsToHandle, function(eventName) {
                if (typeof eventName == "string") {
                  ko.utils.registerEventHandler(element, eventName, function(event) {
                    var handlerReturnValue;
                    var handlerFunction = valueAccessor()[eventName];
                    if (!handlerFunction)
                      return;
                    try {
                      var argsForHandler = ko.utils.makeArray(arguments);
                      viewModel = bindingContext['$data'];
                      argsForHandler.unshift(viewModel);
                      handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                    } finally {
                      if (handlerReturnValue !== true) {
                        if (event.preventDefault)
                          event.preventDefault();
                        else
                          event.returnValue = false;
                      }
                    }
                    var bubble = allBindings.get(eventName + 'Bubble') !== false;
                    if (!bubble) {
                      event.cancelBubble = true;
                      if (event.stopPropagation)
                        event.stopPropagation();
                    }
                  });
                }
              });
            }};
          ko.bindingHandlers['foreach'] = {
            makeTemplateValueAccessor: function(valueAccessor) {
              return function() {
                var modelValue = valueAccessor(),
                    unwrappedValue = ko.utils.peekObservable(modelValue);
                if ((!unwrappedValue) || typeof unwrappedValue.length == "number")
                  return {
                    'foreach': modelValue,
                    'templateEngine': ko.nativeTemplateEngine.instance
                  };
                ko.utils.unwrapObservable(modelValue);
                return {
                  'foreach': unwrappedValue['data'],
                  'as': unwrappedValue['as'],
                  'includeDestroyed': unwrappedValue['includeDestroyed'],
                  'afterAdd': unwrappedValue['afterAdd'],
                  'beforeRemove': unwrappedValue['beforeRemove'],
                  'afterRender': unwrappedValue['afterRender'],
                  'beforeMove': unwrappedValue['beforeMove'],
                  'afterMove': unwrappedValue['afterMove'],
                  'templateEngine': ko.nativeTemplateEngine.instance
                };
              };
            },
            'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
              return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
            },
            'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
              return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
            }
          };
          ko.expressionRewriting.bindingRewriteValidators['foreach'] = false;
          ko.virtualElements.allowedBindings['foreach'] = true;
          var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
          var hasfocusLastValue = '__ko_hasfocusLastValue';
          ko.bindingHandlers['hasfocus'] = {
            'init': function(element, valueAccessor, allBindings) {
              var handleElementFocusChange = function(isFocused) {
                element[hasfocusUpdatingProperty] = true;
                var ownerDoc = element.ownerDocument;
                if ("activeElement" in ownerDoc) {
                  var active;
                  try {
                    active = ownerDoc.activeElement;
                  } catch (e) {
                    active = ownerDoc.body;
                  }
                  isFocused = (active === element);
                }
                var modelValue = valueAccessor();
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true);
                element[hasfocusLastValue] = isFocused;
                element[hasfocusUpdatingProperty] = false;
              };
              var handleElementFocusIn = handleElementFocusChange.bind(null, true);
              var handleElementFocusOut = handleElementFocusChange.bind(null, false);
              ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
              ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn);
              ko.utils.registerEventHandler(element, "blur", handleElementFocusOut);
              ko.utils.registerEventHandler(element, "focusout", handleElementFocusOut);
            },
            'update': function(element, valueAccessor) {
              var value = !!ko.utils.unwrapObservable(valueAccessor());
              if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
                value ? element.focus() : element.blur();
                ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]);
              }
            }
          };
          ko.expressionRewriting.twoWayBindings['hasfocus'] = true;
          ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus'];
          ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
          ko.bindingHandlers['html'] = {
            'init': function() {
              return {'controlsDescendantBindings': true};
            },
            'update': function(element, valueAccessor) {
              ko.utils.setHtml(element, valueAccessor());
            }
          };
          function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
            ko.bindingHandlers[bindingKey] = {'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var didDisplayOnLastUpdate,
                    savedNodes;
                ko.computed(function() {
                  var dataValue = ko.utils.unwrapObservable(valueAccessor()),
                      shouldDisplay = !isNot !== !dataValue,
                      isFirstRender = !savedNodes,
                      needsRefresh = isFirstRender || isWith || (shouldDisplay !== didDisplayOnLastUpdate);
                  if (needsRefresh) {
                    if (isFirstRender && ko.computedContext.getDependenciesCount()) {
                      savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true);
                    }
                    if (shouldDisplay) {
                      if (!isFirstRender) {
                        ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(savedNodes));
                      }
                      ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, dataValue) : bindingContext, element);
                    } else {
                      ko.virtualElements.emptyNode(element);
                    }
                    didDisplayOnLastUpdate = shouldDisplay;
                  }
                }, null, {disposeWhenNodeIsRemoved: element});
                return {'controlsDescendantBindings': true};
              }};
            ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false;
            ko.virtualElements.allowedBindings[bindingKey] = true;
          }
          makeWithIfBinding('if');
          makeWithIfBinding('ifnot', false, true);
          makeWithIfBinding('with', true, false, function(bindingContext, dataValue) {
            return bindingContext['createChildContext'](dataValue);
          });
          var captionPlaceholder = {};
          ko.bindingHandlers['options'] = {
            'init': function(element) {
              if (ko.utils.tagNameLower(element) !== "select")
                throw new Error("options binding applies only to SELECT elements");
              while (element.length > 0) {
                element.remove(0);
              }
              return {'controlsDescendantBindings': true};
            },
            'update': function(element, valueAccessor, allBindings) {
              function selectedOptions() {
                return ko.utils.arrayFilter(element.options, function(node) {
                  return node.selected;
                });
              }
              var selectWasPreviouslyEmpty = element.length == 0,
                  multiple = element.multiple,
                  previousScrollTop = (!selectWasPreviouslyEmpty && multiple) ? element.scrollTop : null,
                  unwrappedArray = ko.utils.unwrapObservable(valueAccessor()),
                  valueAllowUnset = allBindings.get('valueAllowUnset') && allBindings['has']('value'),
                  includeDestroyed = allBindings.get('optionsIncludeDestroyed'),
                  arrayToDomNodeChildrenOptions = {},
                  captionValue,
                  filteredArray,
                  previousSelectedValues = [];
              if (!valueAllowUnset) {
                if (multiple) {
                  previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
                } else if (element.selectedIndex >= 0) {
                  previousSelectedValues.push(ko.selectExtensions.readValue(element.options[element.selectedIndex]));
                }
              }
              if (unwrappedArray) {
                if (typeof unwrappedArray.length == "undefined")
                  unwrappedArray = [unwrappedArray];
                filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                  return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
                });
                if (allBindings['has']('optionsCaption')) {
                  captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption'));
                  if (captionValue !== null && captionValue !== undefined) {
                    filteredArray.unshift(captionPlaceholder);
                  }
                }
              } else {}
              function applyToObject(object, predicate, defaultValue) {
                var predicateType = typeof predicate;
                if (predicateType == "function")
                  return predicate(object);
                else if (predicateType == "string")
                  return object[predicate];
                else
                  return defaultValue;
              }
              var itemUpdate = false;
              function optionForArrayItem(arrayEntry, index, oldOptions) {
                if (oldOptions.length) {
                  previousSelectedValues = !valueAllowUnset && oldOptions[0].selected ? [ko.selectExtensions.readValue(oldOptions[0])] : [];
                  itemUpdate = true;
                }
                var option = element.ownerDocument.createElement("option");
                if (arrayEntry === captionPlaceholder) {
                  ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
                  ko.selectExtensions.writeValue(option, undefined);
                } else {
                  var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
                  ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));
                  var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
                  ko.utils.setTextContent(option, optionText);
                }
                return [option];
              }
              arrayToDomNodeChildrenOptions['beforeRemove'] = function(option) {
                element.removeChild(option);
              };
              function setSelectionCallback(arrayEntry, newOptions) {
                if (itemUpdate && valueAllowUnset) {
                  ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true);
                } else if (previousSelectedValues.length) {
                  var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
                  ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);
                  if (itemUpdate && !isSelected) {
                    ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                  }
                }
              }
              var callback = setSelectionCallback;
              if (allBindings['has']('optionsAfterRender') && typeof allBindings.get('optionsAfterRender') == "function") {
                callback = function(arrayEntry, newOptions) {
                  setSelectionCallback(arrayEntry, newOptions);
                  ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
                };
              }
              ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, arrayToDomNodeChildrenOptions, callback);
              ko.dependencyDetection.ignore(function() {
                if (valueAllowUnset) {
                  ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true);
                } else {
                  var selectionChanged;
                  if (multiple) {
                    selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
                  } else {
                    selectionChanged = (previousSelectedValues.length && element.selectedIndex >= 0) ? (ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0]) : (previousSelectedValues.length || element.selectedIndex >= 0);
                  }
                  if (selectionChanged) {
                    ko.utils.triggerEvent(element, "change");
                  }
                }
              });
              ko.utils.ensureSelectElementIsRenderedCorrectly(element);
              if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20)
                element.scrollTop = previousScrollTop;
            }
          };
          ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
          ko.bindingHandlers['selectedOptions'] = {
            'after': ['options', 'foreach'],
            'init': function(element, valueAccessor, allBindings) {
              ko.utils.registerEventHandler(element, "change", function() {
                var value = valueAccessor(),
                    valueToWrite = [];
                ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                  if (node.selected)
                    valueToWrite.push(ko.selectExtensions.readValue(node));
                });
                ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
              });
            },
            'update': function(element, valueAccessor) {
              if (ko.utils.tagNameLower(element) != "select")
                throw new Error("values binding applies only to SELECT elements");
              var newValue = ko.utils.unwrapObservable(valueAccessor());
              if (newValue && typeof newValue.length == "number") {
                ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                  var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                  ko.utils.setOptionNodeSelectionState(node, isSelected);
                });
              }
            }
          };
          ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
          ko.bindingHandlers['style'] = {'update': function(element, valueAccessor) {
              var value = ko.utils.unwrapObservable(valueAccessor() || {});
              ko.utils.objectForEach(value, function(styleName, styleValue) {
                styleValue = ko.utils.unwrapObservable(styleValue);
                if (styleValue === null || styleValue === undefined || styleValue === false) {
                  styleValue = "";
                }
                element.style[styleName] = styleValue;
              });
            }};
          ko.bindingHandlers['submit'] = {'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
              if (typeof valueAccessor() != "function")
                throw new Error("The value for a submit binding must be a function");
              ko.utils.registerEventHandler(element, "submit", function(event) {
                var handlerReturnValue;
                var value = valueAccessor();
                try {
                  handlerReturnValue = value.call(bindingContext['$data'], element);
                } finally {
                  if (handlerReturnValue !== true) {
                    if (event.preventDefault)
                      event.preventDefault();
                    else
                      event.returnValue = false;
                  }
                }
              });
            }};
          ko.bindingHandlers['text'] = {
            'init': function() {
              return {'controlsDescendantBindings': true};
            },
            'update': function(element, valueAccessor) {
              ko.utils.setTextContent(element, valueAccessor());
            }
          };
          ko.virtualElements.allowedBindings['text'] = true;
          (function() {
            if (window && window.navigator) {
              var parseVersion = function(matches) {
                if (matches) {
                  return parseFloat(matches[1]);
                }
              };
              var operaVersion = window.opera && window.opera.version && parseInt(window.opera.version()),
                  userAgent = window.navigator.userAgent,
                  safariVersion = parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                  firefoxVersion = parseVersion(userAgent.match(/Firefox\/([^ ]*)/));
            }
            if (ko.utils.ieVersion < 10) {
              var selectionChangeRegisteredName = ko.utils.domData.nextKey(),
                  selectionChangeHandlerName = ko.utils.domData.nextKey();
              var selectionChangeHandler = function(event) {
                var target = this.activeElement,
                    handler = target && ko.utils.domData.get(target, selectionChangeHandlerName);
                if (handler) {
                  handler(event);
                }
              };
              var registerForSelectionChangeEvent = function(element, handler) {
                var ownerDoc = element.ownerDocument;
                if (!ko.utils.domData.get(ownerDoc, selectionChangeRegisteredName)) {
                  ko.utils.domData.set(ownerDoc, selectionChangeRegisteredName, true);
                  ko.utils.registerEventHandler(ownerDoc, 'selectionchange', selectionChangeHandler);
                }
                ko.utils.domData.set(element, selectionChangeHandlerName, handler);
              };
            }
            ko.bindingHandlers['textInput'] = {'init': function(element, valueAccessor, allBindings) {
                var previousElementValue = element.value,
                    timeoutHandle,
                    elementValueBeforeEvent;
                var updateModel = function(event) {
                  clearTimeout(timeoutHandle);
                  elementValueBeforeEvent = timeoutHandle = undefined;
                  var elementValue = element.value;
                  if (previousElementValue !== elementValue) {
                    if (DEBUG && event)
                      element['_ko_textInputProcessedEvent'] = event.type;
                    previousElementValue = elementValue;
                    ko.expressionRewriting.writeValueToProperty(valueAccessor(), allBindings, 'textInput', elementValue);
                  }
                };
                var deferUpdateModel = function(event) {
                  if (!timeoutHandle) {
                    elementValueBeforeEvent = element.value;
                    var handler = DEBUG ? updateModel.bind(element, {type: event.type}) : updateModel;
                    timeoutHandle = setTimeout(handler, 4);
                  }
                };
                var updateView = function() {
                  var modelValue = ko.utils.unwrapObservable(valueAccessor());
                  if (modelValue === null || modelValue === undefined) {
                    modelValue = '';
                  }
                  if (elementValueBeforeEvent !== undefined && modelValue === elementValueBeforeEvent) {
                    setTimeout(updateView, 4);
                    return;
                  }
                  if (element.value !== modelValue) {
                    previousElementValue = modelValue;
                    element.value = modelValue;
                  }
                };
                var onEvent = function(event, handler) {
                  ko.utils.registerEventHandler(element, event, handler);
                };
                if (DEBUG && ko.bindingHandlers['textInput']['_forceUpdateOn']) {
                  ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'], function(eventName) {
                    if (eventName.slice(0, 5) == 'after') {
                      onEvent(eventName.slice(5), deferUpdateModel);
                    } else {
                      onEvent(eventName, updateModel);
                    }
                  });
                } else {
                  if (ko.utils.ieVersion < 10) {
                    onEvent('propertychange', function(event) {
                      if (event.propertyName === 'value') {
                        updateModel(event);
                      }
                    });
                    if (ko.utils.ieVersion == 8) {
                      onEvent('keyup', updateModel);
                      onEvent('keydown', updateModel);
                    }
                    if (ko.utils.ieVersion >= 8) {
                      registerForSelectionChangeEvent(element, updateModel);
                      onEvent('dragend', deferUpdateModel);
                    }
                  } else {
                    onEvent('input', updateModel);
                    if (safariVersion < 5 && ko.utils.tagNameLower(element) === "textarea") {
                      onEvent('keydown', deferUpdateModel);
                      onEvent('paste', deferUpdateModel);
                      onEvent('cut', deferUpdateModel);
                    } else if (operaVersion < 11) {
                      onEvent('keydown', deferUpdateModel);
                    } else if (firefoxVersion < 4.0) {
                      onEvent('DOMAutoComplete', updateModel);
                      onEvent('dragdrop', updateModel);
                      onEvent('drop', updateModel);
                    }
                  }
                }
                onEvent('change', updateModel);
                ko.computed(updateView, null, {disposeWhenNodeIsRemoved: element});
              }};
            ko.expressionRewriting.twoWayBindings['textInput'] = true;
            ko.bindingHandlers['textinput'] = {'preprocess': function(value, name, addBinding) {
                addBinding('textInput', value);
              }};
          })();
          ko.bindingHandlers['uniqueName'] = {'init': function(element, valueAccessor) {
              if (valueAccessor()) {
                var name = "ko_unique_" + (++ko.bindingHandlers['uniqueName'].currentIndex);
                ko.utils.setElementName(element, name);
              }
            }};
          ko.bindingHandlers['uniqueName'].currentIndex = 0;
          ko.bindingHandlers['value'] = {
            'after': ['options', 'foreach'],
            'init': function(element, valueAccessor, allBindings) {
              if (element.tagName.toLowerCase() == "input" && (element.type == "checkbox" || element.type == "radio")) {
                ko.applyBindingAccessorsToNode(element, {'checkedValue': valueAccessor});
                return;
              }
              var eventsToCatch = ["change"];
              var requestedEventsToCatch = allBindings.get("valueUpdate");
              var propertyChangedFired = false;
              var elementValueBeforeEvent = null;
              if (requestedEventsToCatch) {
                if (typeof requestedEventsToCatch == "string")
                  requestedEventsToCatch = [requestedEventsToCatch];
                ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
                eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
              }
              var valueUpdateHandler = function() {
                elementValueBeforeEvent = null;
                propertyChangedFired = false;
                var modelValue = valueAccessor();
                var elementValue = ko.selectExtensions.readValue(element);
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
              };
              var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text" && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
              if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
                ko.utils.registerEventHandler(element, "propertychange", function() {
                  propertyChangedFired = true;
                });
                ko.utils.registerEventHandler(element, "focus", function() {
                  propertyChangedFired = false;
                });
                ko.utils.registerEventHandler(element, "blur", function() {
                  if (propertyChangedFired) {
                    valueUpdateHandler();
                  }
                });
              }
              ko.utils.arrayForEach(eventsToCatch, function(eventName) {
                var handler = valueUpdateHandler;
                if (ko.utils.stringStartsWith(eventName, "after")) {
                  handler = function() {
                    elementValueBeforeEvent = ko.selectExtensions.readValue(element);
                    setTimeout(valueUpdateHandler, 0);
                  };
                  eventName = eventName.substring("after".length);
                }
                ko.utils.registerEventHandler(element, eventName, handler);
              });
              var updateFromModel = function() {
                var newValue = ko.utils.unwrapObservable(valueAccessor());
                var elementValue = ko.selectExtensions.readValue(element);
                if (elementValueBeforeEvent !== null && newValue === elementValueBeforeEvent) {
                  setTimeout(updateFromModel, 0);
                  return;
                }
                var valueHasChanged = (newValue !== elementValue);
                if (valueHasChanged) {
                  if (ko.utils.tagNameLower(element) === "select") {
                    var allowUnset = allBindings.get('valueAllowUnset');
                    var applyValueAction = function() {
                      ko.selectExtensions.writeValue(element, newValue, allowUnset);
                    };
                    applyValueAction();
                    if (!allowUnset && newValue !== ko.selectExtensions.readValue(element)) {
                      ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                    } else {
                      setTimeout(applyValueAction, 0);
                    }
                  } else {
                    ko.selectExtensions.writeValue(element, newValue);
                  }
                }
              };
              ko.computed(updateFromModel, null, {disposeWhenNodeIsRemoved: element});
            },
            'update': function() {}
          };
          ko.expressionRewriting.twoWayBindings['value'] = true;
          ko.bindingHandlers['visible'] = {'update': function(element, valueAccessor) {
              var value = ko.utils.unwrapObservable(valueAccessor());
              var isCurrentlyVisible = !(element.style.display == "none");
              if (value && !isCurrentlyVisible)
                element.style.display = "";
              else if ((!value) && isCurrentlyVisible)
                element.style.display = "none";
            }};
          makeEventHandlerShortcut('click');
          ko.templateEngine = function() {};
          ko.templateEngine.prototype['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
            throw new Error("Override renderTemplateSource");
          };
          ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function(script) {
            throw new Error("Override createJavaScriptEvaluatorBlock");
          };
          ko.templateEngine.prototype['makeTemplateSource'] = function(template, templateDocument) {
            if (typeof template == "string") {
              templateDocument = templateDocument || document;
              var elem = templateDocument.getElementById(template);
              if (!elem)
                throw new Error("Cannot find template with ID " + template);
              return new ko.templateSources.domElement(elem);
            } else if ((template.nodeType == 1) || (template.nodeType == 8)) {
              return new ko.templateSources.anonymousTemplate(template);
            } else
              throw new Error("Unknown template type: " + template);
          };
          ko.templateEngine.prototype['renderTemplate'] = function(template, bindingContext, options, templateDocument) {
            var templateSource = this['makeTemplateSource'](template, templateDocument);
            return this['renderTemplateSource'](templateSource, bindingContext, options, templateDocument);
          };
          ko.templateEngine.prototype['isTemplateRewritten'] = function(template, templateDocument) {
            if (this['allowTemplateRewriting'] === false)
              return true;
            return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
          };
          ko.templateEngine.prototype['rewriteTemplate'] = function(template, rewriterCallback, templateDocument) {
            var templateSource = this['makeTemplateSource'](template, templateDocument);
            var rewritten = rewriterCallback(templateSource['text']());
            templateSource['text'](rewritten);
            templateSource['data']("isRewritten", true);
          };
          ko.exportSymbol('templateEngine', ko.templateEngine);
          ko.templateRewriting = (function() {
            var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
            var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;
            function validateDataBindValuesForRewriting(keyValueArray) {
              var allValidators = ko.expressionRewriting.bindingRewriteValidators;
              for (var i = 0; i < keyValueArray.length; i++) {
                var key = keyValueArray[i]['key'];
                if (allValidators.hasOwnProperty(key)) {
                  var validator = allValidators[key];
                  if (typeof validator === "function") {
                    var possibleErrorMessage = validator(keyValueArray[i]['value']);
                    if (possibleErrorMessage)
                      throw new Error(possibleErrorMessage);
                  } else if (!validator) {
                    throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                  }
                }
              }
            }
            function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
              var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
              validateDataBindValuesForRewriting(dataBindKeyValueArray);
              var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, {'valueAccessors': true});
              var applyBindingsToNextSiblingScript = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
              return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
            }
            return {
              ensureTemplateIsRewritten: function(template, templateEngine, templateDocument) {
                if (!templateEngine['isTemplateRewritten'](template, templateDocument))
                  templateEngine['rewriteTemplate'](template, function(htmlString) {
                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                  }, templateDocument);
              },
              memoizeBindingAttributeSyntax: function(htmlString, templateEngine) {
                return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function() {
                  return constructMemoizedTagReplacement(arguments[4], arguments[1], arguments[2], templateEngine);
                }).replace(memoizeVirtualContainerBindingSyntaxRegex, function() {
                  return constructMemoizedTagReplacement(arguments[1], "<!-- ko -->", "#comment", templateEngine);
                });
              },
              applyMemoizedBindingsToNextSibling: function(bindings, nodeName) {
                return ko.memoization.memoize(function(domNode, bindingContext) {
                  var nodeToBind = domNode.nextSibling;
                  if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                    ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
                  }
                });
              }
            };
          })();
          ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
          (function() {
            ko.templateSources = {};
            ko.templateSources.domElement = function(element) {
              this.domElement = element;
            };
            ko.templateSources.domElement.prototype['text'] = function() {
              var tagNameLower = ko.utils.tagNameLower(this.domElement),
                  elemContentsProperty = tagNameLower === "script" ? "text" : tagNameLower === "textarea" ? "value" : "innerHTML";
              if (arguments.length == 0) {
                return this.domElement[elemContentsProperty];
              } else {
                var valueToWrite = arguments[0];
                if (elemContentsProperty === "innerHTML")
                  ko.utils.setHtml(this.domElement, valueToWrite);
                else
                  this.domElement[elemContentsProperty] = valueToWrite;
              }
            };
            var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";
            ko.templateSources.domElement.prototype['data'] = function(key) {
              if (arguments.length === 1) {
                return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
              } else {
                ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
              }
            };
            var anonymousTemplatesDomDataKey = ko.utils.domData.nextKey();
            ko.templateSources.anonymousTemplate = function(element) {
              this.domElement = element;
            };
            ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
            ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
            ko.templateSources.anonymousTemplate.prototype['text'] = function() {
              if (arguments.length == 0) {
                var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
                if (templateData.textData === undefined && templateData.containerData)
                  templateData.textData = templateData.containerData.innerHTML;
                return templateData.textData;
              } else {
                var valueToWrite = arguments[0];
                ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {textData: valueToWrite});
              }
            };
            ko.templateSources.domElement.prototype['nodes'] = function() {
              if (arguments.length == 0) {
                var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
                return templateData.containerData;
              } else {
                var valueToWrite = arguments[0];
                ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {containerData: valueToWrite});
              }
            };
            ko.exportSymbol('templateSources', ko.templateSources);
            ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
            ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
          })();
          (function() {
            var _templateEngine;
            ko.setTemplateEngine = function(templateEngine) {
              if ((templateEngine != undefined) && !(templateEngine instanceof ko.templateEngine))
                throw new Error("templateEngine must inherit from ko.templateEngine");
              _templateEngine = templateEngine;
            };
            function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
              var node,
                  nextInQueue = firstNode,
                  firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
              while (nextInQueue && ((node = nextInQueue) !== firstOutOfRangeNode)) {
                nextInQueue = ko.virtualElements.nextSibling(node);
                action(node, nextInQueue);
              }
            }
            function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
              if (continuousNodeArray.length) {
                var firstNode = continuousNodeArray[0],
                    lastNode = continuousNodeArray[continuousNodeArray.length - 1],
                    parentNode = firstNode.parentNode,
                    provider = ko.bindingProvider['instance'],
                    preprocessNode = provider['preprocessNode'];
                if (preprocessNode) {
                  invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node, nextNodeInRange) {
                    var nodePreviousSibling = node.previousSibling;
                    var newNodes = preprocessNode.call(provider, node);
                    if (newNodes) {
                      if (node === firstNode)
                        firstNode = newNodes[0] || nextNodeInRange;
                      if (node === lastNode)
                        lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
                    }
                  });
                  continuousNodeArray.length = 0;
                  if (!firstNode) {
                    return;
                  }
                  if (firstNode === lastNode) {
                    continuousNodeArray.push(firstNode);
                  } else {
                    continuousNodeArray.push(firstNode, lastNode);
                    ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                  }
                }
                invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                  if (node.nodeType === 1 || node.nodeType === 8)
                    ko.applyBindings(bindingContext, node);
                });
                invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                  if (node.nodeType === 1 || node.nodeType === 8)
                    ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
                });
                ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
              }
            }
            function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
              return nodeOrNodeArray.nodeType ? nodeOrNodeArray : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0] : null;
            }
            function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
              options = options || {};
              var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
              var templateDocument = (firstTargetNode || template || {}).ownerDocument;
              var templateEngineToUse = (options['templateEngine'] || _templateEngine);
              ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
              var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);
              if ((typeof renderedNodesArray.length != "number") || (renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number"))
                throw new Error("Template engine must return an array of DOM nodes");
              var haveAddedNodesToParent = false;
              switch (renderMode) {
                case "replaceChildren":
                  ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                  haveAddedNodesToParent = true;
                  break;
                case "replaceNode":
                  ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                  haveAddedNodesToParent = true;
                  break;
                case "ignoreTargetNode":
                  break;
                default:
                  throw new Error("Unknown renderMode: " + renderMode);
              }
              if (haveAddedNodesToParent) {
                activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
                if (options['afterRender'])
                  ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
              }
              return renderedNodesArray;
            }
            function resolveTemplateName(template, data, context) {
              if (ko.isObservable(template)) {
                return template();
              } else if (typeof template === 'function') {
                return template(data, context);
              } else {
                return template;
              }
            }
            ko.renderTemplate = function(template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
              options = options || {};
              if ((options['templateEngine'] || _templateEngine) == undefined)
                throw new Error("Set a template engine before calling renderTemplate");
              renderMode = renderMode || "replaceChildren";
              if (targetNodeOrNodeArray) {
                var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                var whenToDispose = function() {
                  return (!firstTargetNode) || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode);
                };
                var activelyDisposeWhenNodeIsRemoved = (firstTargetNode && renderMode == "replaceNode") ? firstTargetNode.parentNode : firstTargetNode;
                return ko.dependentObservable(function() {
                  var bindingContext = (dataOrBindingContext && (dataOrBindingContext instanceof ko.bindingContext)) ? dataOrBindingContext : new ko.bindingContext(ko.utils.unwrapObservable(dataOrBindingContext));
                  var templateName = resolveTemplateName(template, bindingContext['$data'], bindingContext),
                      renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);
                  if (renderMode == "replaceNode") {
                    targetNodeOrNodeArray = renderedNodesArray;
                    firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                  }
                }, null, {
                  disposeWhen: whenToDispose,
                  disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved
                });
              } else {
                return ko.memoization.memoize(function(domNode) {
                  ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
                });
              }
            };
            ko.renderTemplateForEach = function(template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
              var arrayItemContext;
              var executeTemplateForArrayItem = function(arrayValue, index) {
                arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function(context) {
                  context['$index'] = index;
                });
                var templateName = resolveTemplateName(template, arrayValue, arrayItemContext);
                return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
              };
              var activateBindingsCallback = function(arrayValue, addedNodesArray, index) {
                activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
                if (options['afterRender'])
                  options['afterRender'](addedNodesArray, arrayValue);
                arrayItemContext = null;
              };
              return ko.dependentObservable(function() {
                var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
                if (typeof unwrappedArray.length == "undefined")
                  unwrappedArray = [unwrappedArray];
                var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                  return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
                });
                ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);
              }, null, {disposeWhenNodeIsRemoved: targetNode});
            };
            var templateComputedDomDataKey = ko.utils.domData.nextKey();
            function disposeOldComputedAndStoreNewOne(element, newComputed) {
              var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
              if (oldComputed && (typeof(oldComputed.dispose) == 'function'))
                oldComputed.dispose();
              ko.utils.domData.set(element, templateComputedDomDataKey, (newComputed && newComputed.isActive()) ? newComputed : undefined);
            }
            ko.bindingHandlers['template'] = {
              'init': function(element, valueAccessor) {
                var bindingValue = ko.utils.unwrapObservable(valueAccessor());
                if (typeof bindingValue == "string" || bindingValue['name']) {
                  ko.virtualElements.emptyNode(element);
                } else if ('nodes' in bindingValue) {
                  var nodes = bindingValue['nodes'] || [];
                  if (ko.isObservable(nodes)) {
                    throw new Error('The "nodes" option must be a plain, non-observable array.');
                  }
                  var container = ko.utils.moveCleanedNodesToContainerElement(nodes);
                  new ko.templateSources.anonymousTemplate(element)['nodes'](container);
                } else {
                  var templateNodes = ko.virtualElements.childNodes(element),
                      container = ko.utils.moveCleanedNodesToContainerElement(templateNodes);
                  new ko.templateSources.anonymousTemplate(element)['nodes'](container);
                }
                return {'controlsDescendantBindings': true};
              },
              'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var value = valueAccessor(),
                    dataValue,
                    options = ko.utils.unwrapObservable(value),
                    shouldDisplay = true,
                    templateComputed = null,
                    templateName;
                if (typeof options == "string") {
                  templateName = value;
                  options = {};
                } else {
                  templateName = options['name'];
                  if ('if' in options)
                    shouldDisplay = ko.utils.unwrapObservable(options['if']);
                  if (shouldDisplay && 'ifnot' in options)
                    shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);
                  dataValue = ko.utils.unwrapObservable(options['data']);
                }
                if ('foreach' in options) {
                  var dataArray = (shouldDisplay && options['foreach']) || [];
                  templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
                } else if (!shouldDisplay) {
                  ko.virtualElements.emptyNode(element);
                } else {
                  var innerBindingContext = ('data' in options) ? bindingContext['createChildContext'](dataValue, options['as']) : bindingContext;
                  templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
                }
                disposeOldComputedAndStoreNewOne(element, templateComputed);
              }
            };
            ko.expressionRewriting.bindingRewriteValidators['template'] = function(bindingValue) {
              var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);
              if ((parsedBindingValue.length == 1) && parsedBindingValue[0]['unknown'])
                return null;
              if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name"))
                return null;
              return "This template engine does not support anonymous templates nested within its templates";
            };
            ko.virtualElements.allowedBindings['template'] = true;
          })();
          ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
          ko.exportSymbol('renderTemplate', ko.renderTemplate);
          ko.utils.findMovesInArrayComparison = function(left, right, limitFailedCompares) {
            if (left.length && right.length) {
              var failedCompares,
                  l,
                  r,
                  leftItem,
                  rightItem;
              for (failedCompares = l = 0; (!limitFailedCompares || failedCompares < limitFailedCompares) && (leftItem = left[l]); ++l) {
                for (r = 0; rightItem = right[r]; ++r) {
                  if (leftItem['value'] === rightItem['value']) {
                    leftItem['moved'] = rightItem['index'];
                    rightItem['moved'] = leftItem['index'];
                    right.splice(r, 1);
                    failedCompares = r = 0;
                    break;
                  }
                }
                failedCompares += r;
              }
            }
          };
          ko.utils.compareArrays = (function() {
            var statusNotInOld = 'added',
                statusNotInNew = 'deleted';
            function compareArrays(oldArray, newArray, options) {
              options = (typeof options === 'boolean') ? {'dontLimitMoves': options} : (options || {});
              oldArray = oldArray || [];
              newArray = newArray || [];
              if (oldArray.length <= newArray.length)
                return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);
              else
                return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
            }
            function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
              var myMin = Math.min,
                  myMax = Math.max,
                  editDistanceMatrix = [],
                  smlIndex,
                  smlIndexMax = smlArray.length,
                  bigIndex,
                  bigIndexMax = bigArray.length,
                  compareRange = (bigIndexMax - smlIndexMax) || 1,
                  maxDistance = smlIndexMax + bigIndexMax + 1,
                  thisRow,
                  lastRow,
                  bigIndexMaxForRow,
                  bigIndexMinForRow;
              for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
                lastRow = thisRow;
                editDistanceMatrix.push(thisRow = []);
                bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
                bigIndexMinForRow = myMax(0, smlIndex - 1);
                for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                  if (!bigIndex)
                    thisRow[bigIndex] = smlIndex + 1;
                  else if (!smlIndex)
                    thisRow[bigIndex] = bigIndex + 1;
                  else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1])
                    thisRow[bigIndex] = lastRow[bigIndex - 1];
                  else {
                    var northDistance = lastRow[bigIndex] || maxDistance;
                    var westDistance = thisRow[bigIndex - 1] || maxDistance;
                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                  }
                }
              }
              var editScript = [],
                  meMinusOne,
                  notInSml = [],
                  notInBig = [];
              for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex; ) {
                meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
                if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex - 1]) {
                  notInSml.push(editScript[editScript.length] = {
                    'status': statusNotInSml,
                    'value': bigArray[--bigIndex],
                    'index': bigIndex
                  });
                } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                  notInBig.push(editScript[editScript.length] = {
                    'status': statusNotInBig,
                    'value': smlArray[--smlIndex],
                    'index': smlIndex
                  });
                } else {
                  --bigIndex;
                  --smlIndex;
                  if (!options['sparse']) {
                    editScript.push({
                      'status': "retained",
                      'value': bigArray[bigIndex]
                    });
                  }
                }
              }
              ko.utils.findMovesInArrayComparison(notInSml, notInBig, smlIndexMax * 10);
              return editScript.reverse();
            }
            return compareArrays;
          })();
          ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);
          (function() {
            function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
              var mappedNodes = [];
              var dependentObservable = ko.dependentObservable(function() {
                var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || [];
                if (mappedNodes.length > 0) {
                  ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
                  if (callbackAfterAddingNodes)
                    ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
                }
                mappedNodes.length = 0;
                ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
              }, null, {
                disposeWhenNodeIsRemoved: containerNode,
                disposeWhen: function() {
                  return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes);
                }
              });
              return {
                mappedNodes: mappedNodes,
                dependentObservable: (dependentObservable.isActive() ? dependentObservable : undefined)
              };
            }
            var lastMappingResultDomDataKey = ko.utils.domData.nextKey();
            ko.utils.setDomNodeChildrenFromArrayMapping = function(domNode, array, mapping, options, callbackAfterAddingNodes) {
              array = array || [];
              options = options || {};
              var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
              var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
              var lastArray = ko.utils.arrayMap(lastMappingResult, function(x) {
                return x.arrayEntry;
              });
              var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);
              var newMappingResult = [];
              var lastMappingResultIndex = 0;
              var newMappingResultIndex = 0;
              var nodesToDelete = [];
              var itemsToProcess = [];
              var itemsForBeforeRemoveCallbacks = [];
              var itemsForMoveCallbacks = [];
              var itemsForAfterAddCallbacks = [];
              var mapData;
              function itemMovedOrRetained(editScriptIndex, oldPosition) {
                mapData = lastMappingResult[oldPosition];
                if (newMappingResultIndex !== oldPosition)
                  itemsForMoveCallbacks[editScriptIndex] = mapData;
                mapData.indexObservable(newMappingResultIndex++);
                ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
                newMappingResult.push(mapData);
                itemsToProcess.push(mapData);
              }
              function callCallback(callback, items) {
                if (callback) {
                  for (var i = 0,
                      n = items.length; i < n; i++) {
                    if (items[i]) {
                      ko.utils.arrayForEach(items[i].mappedNodes, function(node) {
                        callback(node, i, items[i].arrayEntry);
                      });
                    }
                  }
                }
              }
              for (var i = 0,
                  editScriptItem,
                  movedIndex; editScriptItem = editScript[i]; i++) {
                movedIndex = editScriptItem['moved'];
                switch (editScriptItem['status']) {
                  case "deleted":
                    if (movedIndex === undefined) {
                      mapData = lastMappingResult[lastMappingResultIndex];
                      if (mapData.dependentObservable)
                        mapData.dependentObservable.dispose();
                      nodesToDelete.push.apply(nodesToDelete, ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode));
                      if (options['beforeRemove']) {
                        itemsForBeforeRemoveCallbacks[i] = mapData;
                        itemsToProcess.push(mapData);
                      }
                    }
                    lastMappingResultIndex++;
                    break;
                  case "retained":
                    itemMovedOrRetained(i, lastMappingResultIndex++);
                    break;
                  case "added":
                    if (movedIndex !== undefined) {
                      itemMovedOrRetained(i, movedIndex);
                    } else {
                      mapData = {
                        arrayEntry: editScriptItem['value'],
                        indexObservable: ko.observable(newMappingResultIndex++)
                      };
                      newMappingResult.push(mapData);
                      itemsToProcess.push(mapData);
                      if (!isFirstExecution)
                        itemsForAfterAddCallbacks[i] = mapData;
                    }
                    break;
                }
              }
              callCallback(options['beforeMove'], itemsForMoveCallbacks);
              ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);
              for (var i = 0,
                  nextNode = ko.virtualElements.firstChild(domNode),
                  lastNode,
                  node; mapData = itemsToProcess[i]; i++) {
                if (!mapData.mappedNodes)
                  ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));
                for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                  if (node !== nextNode)
                    ko.virtualElements.insertAfter(domNode, node, lastNode);
                }
                if (!mapData.initialized && callbackAfterAddingNodes) {
                  callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                  mapData.initialized = true;
                }
              }
              callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);
              callCallback(options['afterMove'], itemsForMoveCallbacks);
              callCallback(options['afterAdd'], itemsForAfterAddCallbacks);
              ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);
            };
          })();
          ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
          ko.nativeTemplateEngine = function() {
            this['allowTemplateRewriting'] = false;
          };
          ko.nativeTemplateEngine.prototype = new ko.templateEngine();
          ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
          ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
            var useNodesIfAvailable = !(ko.utils.ieVersion < 9),
                templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
                templateNodes = templateNodesFunc ? templateSource['nodes']() : null;
            if (templateNodes) {
              return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
            } else {
              var templateText = templateSource['text']();
              return ko.utils.parseHtmlFragment(templateText, templateDocument);
            }
          };
          ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
          ko.setTemplateEngine(ko.nativeTemplateEngine.instance);
          ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
          (function() {
            ko.jqueryTmplTemplateEngine = function() {
              var jQueryTmplVersion = this.jQueryTmplVersion = (function() {
                if (!jQueryInstance || !(jQueryInstance['tmpl']))
                  return 0;
                try {
                  if (jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                    return 2;
                  }
                } catch (ex) {}
                return 1;
              })();
              function ensureHasReferencedJQueryTemplates() {
                if (jQueryTmplVersion < 2)
                  throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
              }
              function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
                return jQueryInstance['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
              }
              this['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
                templateDocument = templateDocument || document;
                options = options || {};
                ensureHasReferencedJQueryTemplates();
                var precompiled = templateSource['data']('precompiled');
                if (!precompiled) {
                  var templateText = templateSource['text']() || "";
                  templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";
                  precompiled = jQueryInstance['template'](null, templateText);
                  templateSource['data']('precompiled', precompiled);
                }
                var data = [bindingContext['$data']];
                var jQueryTemplateOptions = jQueryInstance['extend']({'koBindingContext': bindingContext}, options['templateOptions']);
                var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
                resultNodes['appendTo'](templateDocument.createElement("div"));
                jQueryInstance['fragments'] = {};
                return resultNodes;
              };
              this['createJavaScriptEvaluatorBlock'] = function(script) {
                return "{{ko_code ((function() { return " + script + " })()) }}";
              };
              this['addTemplate'] = function(templateName, templateMarkup) {
                document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
              };
              if (jQueryTmplVersion > 0) {
                jQueryInstance['tmpl']['tag']['ko_code'] = {open: "__.push($1 || '');"};
                jQueryInstance['tmpl']['tag']['ko_with'] = {
                  open: "with($1) {",
                  close: "} "
                };
              }
            };
            ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
            ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;
            var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
            if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0)
              ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);
            ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
          })();
        }));
      }());
    })();
  })();
  return _retrieveGlobal();
});

System.registerDynamic("github:knockout/knockout@3.3.0.js", ["github:knockout/knockout@3.3.0/dist/knockout.debug.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:knockout/knockout@3.3.0/dist/knockout.debug.js");
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=knockout-bundle.js.map