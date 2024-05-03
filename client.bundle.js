(self["webpackChunktech_overlay"] = self["webpackChunktech_overlay"] || []).push([["client"],{

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.crypto) {
	        crypto = __webpack_require__.g.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ "?9157");
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/enc-base64.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/enc-base64.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/IronstrikeSemiBold.otf */ "./src/assets/fonts/IronstrikeSemiBold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/ingame_diplomacy-menu_bg_full.png */ "./src/assets/images/ingame_diplomacy-menu_bg_full.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./components/civ-tech-overlay/images/paper.png */ "./src/components/civ-tech-overlay/images/paper.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./components/civ-images/misc/veto.png */ "./src/components/civ-images/misc/veto.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Memb-Font";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
html {
  font-family: Memb-Font;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
}

.admin-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
}
.client-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
}

.body-content {
  width: 100%;
}

.my-header {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20%;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px;
  border-color: black;
  border-style: solid;
  padding-top: 2rem;
}
.my-footer {
  color: blanchedalmond;
  text-shadow: none;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.my-footer a {
  background-color: beige;
}

.admin-page {
  display: flex;
  flex-direction: column;
}
.websocket-controls {
  display: inline-flex;
  justify-content: space-evenly;
  width: 50%;
  align-self: center;
  align-items: center;
}
.websocket-setting-button {
  border-radius: 1rem;
  color: white;
  padding: 1rem 3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-left: 2rem;
}
.websocket-input {
  height: 1.5rem;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-number {
  width: 3rem;
}

.tech-header {
  font-size: x-large;
  width: 100%;
  text-align: center;
  margin: 0.25rem;
}
.tech-settings {
  display: inline-flex;
  flex-direction: column;
}

.tech-civ-list {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 0.5rem;
}

.setting-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.action-buttons {
  display: inline-flex;
  width: 100%;
  justify-content: space-evenly;
}
.action-settings {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
.setting-button {
  border-radius: 1rem;
  color: white;
  padding: 1rem 16rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: xx-large;
  cursor: pointer;
}

.admin-civ-icon {
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px 1px black;
}
.admin-civ-icon:hover {
  background-color: bisque;
}
.admin-civ-icon span {
  pointer-events: none;
}
.admin-civ-icon img {
  width: 5rem;
  height: 5rem;
  pointer-events: none;
}

.client-page {
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
}

.civ-tech-overlay-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: round;
  height: 100%;
  padding-top: 1.5rem;
  width: 25%;
}
.civ-tech-overlay-container .civ-name-container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
}
.civ-tech-overlay-container .civ-name {
  display: inline-flex;
  align-items: center;
  font-size: xx-large;
  margin-left: 1rem;
  margin-right: 1rem;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
.civ-tech-overlay-container .civ-icon {
  height: 5rem;
  border-radius: 1rem;
  filter: drop-shadow(0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5));
}
.civ-tech-overlay-container .civ-unique-unit-icon {
  height: 5rem;
  border-radius: 1rem;
  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);
  border: silver solid 1px;
}
.civ-tech-overlay-container .civ-description {
  text-align: center;
  padding-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: x-large;
  text-shadow: -1px 0 khaki, 0 1px khaki, 1px 0 khaki, 0 -1px khaki;
  z-index: 2;
}
.civ-tech-overlay-container .civ-emblem {
  opacity: 0.7;
  flex-grow: 1;
  position: absolute;
  z-index: 0;
  top: 45%;
}

.civ-upgrade-overlay-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding-bottom: 2.5rem;
  z-index: 2;
}
.civ-upgrade-overlay-container .civ-upgrade-container {
  display: inline-flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-evenly;
  padding-bottom: 0.75rem;
}
.civ-upgrade-overlay-container .civ-upgrade-container .upgrade-icon-container {
  display: inline-flex;
  position: relative;
  flex-direction: column;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container {
  width: inherit;
  height: 25%;
  display: inline-flex;
  flex-direction: row;
  background-color: black;
  border-radius: 0.3rem;
  justify-content: space-evenly;
  margin-top: 0.1rem;
  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .enabled-1 {
  background-color: green;
  height: 0.75rem;
  width: 85%;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .disabled-1 {
  background-color: red;
  height: 0.75rem;
  width: 85%;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .enabled-3 {
  background-color: green;
  height: 0.75rem;
  width: 1.2rem;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .disabled-3 {
  background-color: red;
  height: 0.75rem;
  width: 1.2rem;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon {
  border-radius: 1rem;
  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);
  border: yellow solid 1px;
  height: 5rem;
}
.civ-upgrade-overlay-container .disable-icon-meso {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 5rem;
}
.civ-upgrade-overlay-container .civ-eco-upgrade-container {
  display: inline-flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-evenly;
  padding: 0.75rem;
}
.civ-upgrade-overlay-container .civ-eco-upgrade-container .upgrade-icon-container {
  display: inline-flex;
  position: relative;
  flex-direction: column;
}

.button-blue {
  background-color: #008cba;
}
.button-red {
  background-color: red;
}

.switch {
  display: inline-block;
  position: relative;
  height: 2.1rem;
  width: 4rem;
}
.switch input {
  display: none;
}
.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}
.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}
input:checked + .slider {
  background-color: #66bb6a;
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 1rem;
}
.slider.round:before {
  border-radius: 50%;
}

.mask-img-vertical {
  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  -webkit-mask-size: 100% 300%;
  -webkit-mask-position: 0 200%;
  -webkit-mask-repeat: no-repeat;

  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  mask-size: 100% 300%;
  mask-position: 0 200%;
  mask-repeat: no-repeat;
}

.civ-tech-animation-enter-active {
  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  -webkit-mask-size: 100% 300%;
  -webkit-mask-position: 0 200%;
  -webkit-mask-repeat: no-repeat;

  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  mask-size: 100% 300%;
  mask-position: 0 200%;
  mask-repeat: no-repeat;
  animation: mask-move-in 2s ease-in forwards;
}
.civ-tech-animation-leave-active {
  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  -webkit-mask-size: 100% 300%;
  -webkit-mask-position: 0 200%;
  -webkit-mask-repeat: no-repeat;

  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  mask-size: 100% 300%;
  mask-position: 0 200%;
  mask-repeat: no-repeat;
  animation: mask-move-out 2s ease-out forwards;
}

@keyframes mask-move-in {
  from {
    -webkit-mask-position: 0 100%;
    mask-position: 0 100%;
  }
  to {
    -webkit-mask-position: 0 0%;
    mask-position: 0 0%;
  }
}

@keyframes mask-move-out {
  from {
    -webkit-mask-position: 0 0%;
    mask-position: 0 0%;
  }
  to {
    -webkit-mask-position: 0 100%;
    mask-position: 0 100%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: \"Memb-Font\";\r\n  src: url(\"./assets/fonts/IronstrikeSemiBold.otf\");\r\n}\r\nhtml {\r\n  font-family: Memb-Font;\r\n  height: 100%;\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n}\r\n\r\n.admin-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  background-image: url(\"./assets/images/ingame_diplomacy-menu_bg_full.png\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  align-items: center;\r\n}\r\n.client-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  align-items: center;\r\n}\r\n\r\n.body-content {\r\n  width: 100%;\r\n}\r\n\r\n.my-header {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20%;\r\n  border-top: 0px;\r\n  border-left: 0px;\r\n  border-right: 0px;\r\n  border-bottom: 1px;\r\n  border-color: black;\r\n  border-style: solid;\r\n  padding-top: 2rem;\r\n}\r\n.my-footer {\r\n  color: blanchedalmond;\r\n  text-shadow: none;\r\n  text-align: center;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-shrink: 0;\r\n}\r\n.my-footer a {\r\n  background-color: beige;\r\n}\r\n\r\n.admin-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.websocket-controls {\r\n  display: inline-flex;\r\n  justify-content: space-evenly;\r\n  width: 50%;\r\n  align-self: center;\r\n  align-items: center;\r\n}\r\n.websocket-setting-button {\r\n  border-radius: 1rem;\r\n  color: white;\r\n  padding: 1rem 3rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  margin-left: 2rem;\r\n}\r\n.websocket-input {\r\n  height: 1.5rem;\r\n}\r\n\r\n.left-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.input-number {\r\n  width: 3rem;\r\n}\r\n\r\n.tech-header {\r\n  font-size: x-large;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 0.25rem;\r\n}\r\n.tech-settings {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tech-civ-list {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.setting-container {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.action-buttons {\r\n  display: inline-flex;\r\n  width: 100%;\r\n  justify-content: space-evenly;\r\n}\r\n.action-settings {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  justify-content: center;\r\n}\r\n.setting-button {\r\n  border-radius: 1rem;\r\n  color: white;\r\n  padding: 1rem 16rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: xx-large;\r\n  cursor: pointer;\r\n}\r\n\r\n.admin-civ-icon {\r\n  border-radius: 1rem;\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: 1px 1px 5px 1px black;\r\n}\r\n.admin-civ-icon:hover {\r\n  background-color: bisque;\r\n}\r\n.admin-civ-icon span {\r\n  pointer-events: none;\r\n}\r\n.admin-civ-icon img {\r\n  width: 5rem;\r\n  height: 5rem;\r\n  pointer-events: none;\r\n}\r\n\r\n.client-page {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.civ-tech-overlay-container {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-image: url(\"./components/civ-tech-overlay/images/paper.png\");\r\n  background-repeat: round;\r\n  height: 100%;\r\n  padding-top: 1.5rem;\r\n  width: 25%;\r\n}\r\n.civ-tech-overlay-container .civ-name-container {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n.civ-tech-overlay-container .civ-name {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  font-size: xx-large;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\r\n}\r\n.civ-tech-overlay-container .civ-icon {\r\n  height: 5rem;\r\n  border-radius: 1rem;\r\n  filter: drop-shadow(0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5));\r\n}\r\n.civ-tech-overlay-container .civ-unique-unit-icon {\r\n  height: 5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);\r\n  border: silver solid 1px;\r\n}\r\n.civ-tech-overlay-container .civ-description {\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n  font-size: x-large;\r\n  text-shadow: -1px 0 khaki, 0 1px khaki, 1px 0 khaki, 0 -1px khaki;\r\n  z-index: 2;\r\n}\r\n.civ-tech-overlay-container .civ-emblem {\r\n  opacity: 0.7;\r\n  flex-grow: 1;\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: 45%;\r\n}\r\n\r\n.civ-upgrade-overlay-container {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: end;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-bottom: 2.5rem;\r\n  z-index: 2;\r\n}\r\n.civ-upgrade-overlay-container .civ-upgrade-container {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  width: 95%;\r\n  justify-content: space-evenly;\r\n  padding-bottom: 0.75rem;\r\n}\r\n.civ-upgrade-overlay-container .civ-upgrade-container .upgrade-icon-container {\r\n  display: inline-flex;\r\n  position: relative;\r\n  flex-direction: column;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container {\r\n  width: inherit;\r\n  height: 25%;\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  background-color: black;\r\n  border-radius: 0.3rem;\r\n  justify-content: space-evenly;\r\n  margin-top: 0.1rem;\r\n  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .enabled-1 {\r\n  background-color: green;\r\n  height: 0.75rem;\r\n  width: 85%;\r\n  border-radius: 0.2rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.2rem;\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .disabled-1 {\r\n  background-color: red;\r\n  height: 0.75rem;\r\n  width: 85%;\r\n  border-radius: 0.2rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.2rem;\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .enabled-3 {\r\n  background-color: green;\r\n  height: 0.75rem;\r\n  width: 1.2rem;\r\n  border-radius: 0.2rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.2rem;\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .disabled-3 {\r\n  background-color: red;\r\n  height: 0.75rem;\r\n  width: 1.2rem;\r\n  border-radius: 0.2rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.2rem;\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon {\r\n  border-radius: 1rem;\r\n  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);\r\n  border: yellow solid 1px;\r\n  height: 5rem;\r\n}\r\n.civ-upgrade-overlay-container .disable-icon-meso {\r\n  background-image: url(\"./components/civ-images/misc/veto.png\");\r\n  background-size: cover;\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 5rem;\r\n}\r\n.civ-upgrade-overlay-container .civ-eco-upgrade-container {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  width: 95%;\r\n  justify-content: space-evenly;\r\n  padding: 0.75rem;\r\n}\r\n.civ-upgrade-overlay-container .civ-eco-upgrade-container .upgrade-icon-container {\r\n  display: inline-flex;\r\n  position: relative;\r\n  flex-direction: column;\r\n}\r\n\r\n.button-blue {\r\n  background-color: #008cba;\r\n}\r\n.button-red {\r\n  background-color: red;\r\n}\r\n\r\n.switch {\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 2.1rem;\r\n  width: 4rem;\r\n}\r\n.switch input {\r\n  display: none;\r\n}\r\n.slider {\r\n  background-color: #ccc;\r\n  bottom: 0;\r\n  cursor: pointer;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  transition: 0.4s;\r\n}\r\n.slider:before {\r\n  background-color: #fff;\r\n  bottom: 4px;\r\n  content: \"\";\r\n  height: 26px;\r\n  left: 4px;\r\n  position: absolute;\r\n  transition: 0.4s;\r\n  width: 26px;\r\n}\r\ninput:checked + .slider {\r\n  background-color: #66bb6a;\r\n}\r\ninput:checked + .slider:before {\r\n  transform: translateX(26px);\r\n}\r\n.slider.round {\r\n  border-radius: 1rem;\r\n}\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.mask-img-vertical {\r\n  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  -webkit-mask-size: 100% 300%;\r\n  -webkit-mask-position: 0 200%;\r\n  -webkit-mask-repeat: no-repeat;\r\n\r\n  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  mask-size: 100% 300%;\r\n  mask-position: 0 200%;\r\n  mask-repeat: no-repeat;\r\n}\r\n\r\n.civ-tech-animation-enter-active {\r\n  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  -webkit-mask-size: 100% 300%;\r\n  -webkit-mask-position: 0 200%;\r\n  -webkit-mask-repeat: no-repeat;\r\n\r\n  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  mask-size: 100% 300%;\r\n  mask-position: 0 200%;\r\n  mask-repeat: no-repeat;\r\n  animation: mask-move-in 2s ease-in forwards;\r\n}\r\n.civ-tech-animation-leave-active {\r\n  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  -webkit-mask-size: 100% 300%;\r\n  -webkit-mask-position: 0 200%;\r\n  -webkit-mask-repeat: no-repeat;\r\n\r\n  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  mask-size: 100% 300%;\r\n  mask-position: 0 200%;\r\n  mask-repeat: no-repeat;\r\n  animation: mask-move-out 2s ease-out forwards;\r\n}\r\n\r\n@keyframes mask-move-in {\r\n  from {\r\n    -webkit-mask-position: 0 100%;\r\n    mask-position: 0 100%;\r\n  }\r\n  to {\r\n    -webkit-mask-position: 0 0%;\r\n    mask-position: 0 0%;\r\n  }\r\n}\r\n\r\n@keyframes mask-move-out {\r\n  from {\r\n    -webkit-mask-position: 0 0%;\r\n    mask-position: 0 0%;\r\n  }\r\n  to {\r\n    -webkit-mask-position: 0 100%;\r\n    mask-position: 0 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/isomorphic-ws/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/isomorphic-ws/browser.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

var ws = null

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket
} else if (typeof __webpack_require__.g !== 'undefined') {
  ws = __webpack_require__.g.WebSocket || __webpack_require__.g.MozWebSocket
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ws);


/***/ }),

/***/ "./node_modules/obs-websocket-js/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/obs-websocket-js/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/obs-websocket-js/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "./node_modules/obs-websocket-js/node_modules/debug/src/common.js":
/*!************************************************************************!*\
  !*** ./node_modules/obs-websocket-js/node_modules/debug/src/common.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/obs-websocket-js/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/obs-websocket-js/node_modules/eventemitter3/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/obs-websocket-js/node_modules/eventemitter3/index.js ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/obs-websocket-js/node_modules/ms/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/obs-websocket-js/node_modules/ms/index.js ***!
  \****************************************************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/common-data.js":
/*!****************************!*\
  !*** ./src/common-data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocketEnums: () => (/* binding */ SocketEnums)
/* harmony export */ });
const SocketEnums = {
  ClientRegister: "ClientRegister",
  ClientUnRegister: "ClientUnRegister",
  PING: "PING",
  TEST: "TEST",
  AGEOVERLAYPUSH: "AGEOVERLAYPUSH",
};




/***/ }),

/***/ "./src/components/civ-images/civ-data/data-helper.js":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-data/data-helper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterLowestUpgradesFromCategories: () => (/* binding */ filterLowestUpgradesFromCategories),
/* harmony export */   getAgeTierLevel: () => (/* binding */ getAgeTierLevel),
/* harmony export */   getCivNames: () => (/* binding */ getCivNames),
/* harmony export */   getCivTechnologyDescription: () => (/* binding */ getCivTechnologyDescription),
/* harmony export */   getCivTechnologyUpgrades: () => (/* binding */ getCivTechnologyUpgrades)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/components/civ-images/civ-data/data.json");
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings.json */ "./src/components/civ-images/civ-data/strings.json");



const techRelationshipMapping = {
  blacksmith: [
    {
      isChainUpgrade: true,
      data: ["Forging", "Iron Casting", "Blast Furnace"],
    },
    {
      isChainUpgrade: true,
      data: ["Scale Mail Armor", "Chain Mail Armor", "Plate Mail Armor"],
    },
    {
      isChainUpgrade: true,
      data: ["Scale Barding Armor", "Chain Barding Armor", "Plate Barding Armor"],
    },
    {
      isChainUpgrade: true,
      data: ["Fletching", "Bodkin Arrow", "Bracer"],
    },
    {
      isChainUpgrade: true,
      data: ["Padded Archer Armor", "Leather Archer Armor", "Ring Archer Armor"],
    },
  ],
  "lumber camp": [{ isChainUpgrade: true, data: ["Double-Bit Axe", "Bow Saw", "Two-Man Saw"] }],
  mill: [{ isChainUpgrade: true, data: ["Horse Collar", "Heavy Plow", "Crop Rotation"] }],
  // towncenter: ["Wheelbarrow", "Hand Cart"],
  university: [{ isChainUpgrade: false, data: ["Ballistics", "Siege Engineers"] }],
  stable: [{ isChainUpgrade: false, data: ["Bloodlines", "Husbandry"] }],
  "archery range": [{ isChainUpgrade: false, data: ["Thumb Ring"] }],
  monastery: [{ isChainUpgrade: false, data: ["Redemption", "Atonement", "Herbal Medicine", "Heresy", "Sanctity", "Fervor", "Faith", "Illumination", "Block Printing", "Theocracy"] }],
};

function formatRawCivNameToKey(civName) {
  if (civName === undefined) return "";
  civName = `${civName.substring(0, 1).toUpperCase()}${civName.slice(1)}`;
  return civName;
}
function getCivNames() {
  return Object.keys(_data_json__WEBPACK_IMPORTED_MODULE_0__.civ_names);
}
function getCivTechnologyDescription(civName) {
  civName = formatRawCivNameToKey(civName);

  const helpTextKey = _data_json__WEBPACK_IMPORTED_MODULE_0__.civ_helptexts[civName];
  const civDescription = _strings_json__WEBPACK_IMPORTED_MODULE_1__[helpTextKey];

  return civDescription;
}
function getCivTechnologyUpgrades(civName) {
  civName = formatRawCivNameToKey(civName);

  const civTechsAll = _data_json__WEBPACK_IMPORTED_MODULE_0__.techtrees[civName];
  const upgradeNames = [];
  civTechsAll.techs.forEach((techId) => {
    const upgrade = _data_json__WEBPACK_IMPORTED_MODULE_0__.data.techs[techId];
    // civStringData[upgrade.LanguageHelpId]; // for description
    const payload = {
      id: techId,
      rawName: _strings_json__WEBPACK_IMPORTED_MODULE_1__[upgrade.LanguageNameId],
    };
    upgradeNames.push(payload);
  });
  return upgradeNames;
}
function getAgeTierLevel(upgradeName) {
  let foundIndex = -1;
  for (let key in techRelationshipMapping) {
    if (foundIndex > -1) break; // short circuit found results
    if (!techRelationshipMapping.hasOwnProperty(key)) {
      // ignored keys
      continue;
    }
    // look at everything and return the index of array (loose representation of age level)
    techRelationshipMapping[key].forEach((upgrade) => {
      if (foundIndex > -1) return; // short circuit found results
      if (upgrade.isChainUpgrade) {
        foundIndex = upgrade.data.indexOf(upgradeName);
      } else {
        foundIndex = -1;
      }
    });
  }
  return foundIndex;
}
function filterLowestUpgradesFromCategories(upgradeCategories, upgradeList) {
  const modifiedUpgradeList = [];
  upgradeCategories.forEach((upgradeCategory) => {
    const upgradeArrayMap = techRelationshipMapping[upgradeCategory];
    upgradeArrayMap.forEach((upgradeArray) => {
      if (upgradeArray.isChainUpgrade) {
        // this upgrade array is in the age chain, determine what is the highest tech available
        let foundHigherTier = false;
        for (let i = upgradeArray.data.length - 1; i > -1; i--) {
          // find the highest indexed value in upgradeList
          const upgrade = upgradeList.find((upgrade) => {
            return upgrade.rawName === upgradeArray.data[i];
          });
          if (upgrade !== undefined && !foundHigherTier) {
            foundHigherTier = true;
            modifiedUpgradeList.push(upgrade);
          }
          // this is for civs that dont have the upgrade
          if (i === 0 && !foundHigherTier) {
            modifiedUpgradeList.push({ rawName: upgradeArray.data[i], id: -1 });
          }
        }
      } else {
        upgradeArray.data.forEach((upgradeArr) => {
          const foundTech = upgradeList.find((upgrade) => {
            return upgrade.rawName === upgradeArr;
          });
          if (foundTech) {
            modifiedUpgradeList.push({ rawName: upgradeArr, id: 0 });
          } else {
            modifiedUpgradeList.push({ rawName: upgradeArr, id: -1 });
          }
        });
      }
    });
  });
  return modifiedUpgradeList;
}



/***/ }),

/***/ "./src/components/civ-images/civ-emblems sync recursive \\.(png)$":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/ sync \.(png)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aztecs.png": "./src/components/civ-images/civ-emblems/aztecs.png",
	"./bengalis.png": "./src/components/civ-images/civ-emblems/bengalis.png",
	"./berbers.png": "./src/components/civ-images/civ-emblems/berbers.png",
	"./bohemians.png": "./src/components/civ-images/civ-emblems/bohemians.png",
	"./britons.png": "./src/components/civ-images/civ-emblems/britons.png",
	"./bulgarians.png": "./src/components/civ-images/civ-emblems/bulgarians.png",
	"./burgundians.png": "./src/components/civ-images/civ-emblems/burgundians.png",
	"./burmese.png": "./src/components/civ-images/civ-emblems/burmese.png",
	"./byzantines.png": "./src/components/civ-images/civ-emblems/byzantines.png",
	"./celts.png": "./src/components/civ-images/civ-emblems/celts.png",
	"./chinese.png": "./src/components/civ-images/civ-emblems/chinese.png",
	"./cumans.png": "./src/components/civ-images/civ-emblems/cumans.png",
	"./dravidians.png": "./src/components/civ-images/civ-emblems/dravidians.png",
	"./ethiopians.png": "./src/components/civ-images/civ-emblems/ethiopians.png",
	"./franks.png": "./src/components/civ-images/civ-emblems/franks.png",
	"./goths.png": "./src/components/civ-images/civ-emblems/goths.png",
	"./gurjaras.png": "./src/components/civ-images/civ-emblems/gurjaras.png",
	"./hindustanis.png": "./src/components/civ-images/civ-emblems/hindustanis.png",
	"./huns.png": "./src/components/civ-images/civ-emblems/huns.png",
	"./incas.png": "./src/components/civ-images/civ-emblems/incas.png",
	"./italians.png": "./src/components/civ-images/civ-emblems/italians.png",
	"./japanese.png": "./src/components/civ-images/civ-emblems/japanese.png",
	"./khmer.png": "./src/components/civ-images/civ-emblems/khmer.png",
	"./koreans.png": "./src/components/civ-images/civ-emblems/koreans.png",
	"./lithuanians.png": "./src/components/civ-images/civ-emblems/lithuanians.png",
	"./magyars.png": "./src/components/civ-images/civ-emblems/magyars.png",
	"./malay.png": "./src/components/civ-images/civ-emblems/malay.png",
	"./malians.png": "./src/components/civ-images/civ-emblems/malians.png",
	"./mayans.png": "./src/components/civ-images/civ-emblems/mayans.png",
	"./mongols.png": "./src/components/civ-images/civ-emblems/mongols.png",
	"./persians.png": "./src/components/civ-images/civ-emblems/persians.png",
	"./poles.png": "./src/components/civ-images/civ-emblems/poles.png",
	"./portuguese.png": "./src/components/civ-images/civ-emblems/portuguese.png",
	"./romans.png": "./src/components/civ-images/civ-emblems/romans.png",
	"./saracens.png": "./src/components/civ-images/civ-emblems/saracens.png",
	"./sicilians.png": "./src/components/civ-images/civ-emblems/sicilians.png",
	"./slavs.png": "./src/components/civ-images/civ-emblems/slavs.png",
	"./spanish.png": "./src/components/civ-images/civ-emblems/spanish.png",
	"./tatars.png": "./src/components/civ-images/civ-emblems/tatars.png",
	"./teutons.png": "./src/components/civ-images/civ-emblems/teutons.png",
	"./turks.png": "./src/components/civ-images/civ-emblems/turks.png",
	"./vietnamese.png": "./src/components/civ-images/civ-emblems/vietnamese.png",
	"./vikings.png": "./src/components/civ-images/civ-emblems/vikings.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-images/civ-emblems sync recursive \\.(png)$";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units sync recursive \\.(png)$":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/ sync \.(png)$ ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aztecs.png": "./src/components/civ-images/civ-unique-units/aztecs.png",
	"./aztecs.tp.png": "./src/components/civ-images/civ-unique-units/aztecs.tp.png",
	"./bengalis.png": "./src/components/civ-images/civ-unique-units/bengalis.png",
	"./bengalis.tp.png": "./src/components/civ-images/civ-unique-units/bengalis.tp.png",
	"./berbers.png": "./src/components/civ-images/civ-unique-units/berbers.png",
	"./berbers.tp.png": "./src/components/civ-images/civ-unique-units/berbers.tp.png",
	"./bohemians.png": "./src/components/civ-images/civ-unique-units/bohemians.png",
	"./bohemians.tp.png": "./src/components/civ-images/civ-unique-units/bohemians.tp.png",
	"./britons.png": "./src/components/civ-images/civ-unique-units/britons.png",
	"./britons.tp.png": "./src/components/civ-images/civ-unique-units/britons.tp.png",
	"./bulgarians.png": "./src/components/civ-images/civ-unique-units/bulgarians.png",
	"./bulgarians.tp.png": "./src/components/civ-images/civ-unique-units/bulgarians.tp.png",
	"./burgundians.png": "./src/components/civ-images/civ-unique-units/burgundians.png",
	"./burgundians.tp.png": "./src/components/civ-images/civ-unique-units/burgundians.tp.png",
	"./burmese.png": "./src/components/civ-images/civ-unique-units/burmese.png",
	"./burmese.tp.png": "./src/components/civ-images/civ-unique-units/burmese.tp.png",
	"./byzantines.png": "./src/components/civ-images/civ-unique-units/byzantines.png",
	"./byzantines.tp.png": "./src/components/civ-images/civ-unique-units/byzantines.tp.png",
	"./celts.png": "./src/components/civ-images/civ-unique-units/celts.png",
	"./celts.tp.png": "./src/components/civ-images/civ-unique-units/celts.tp.png",
	"./chinese.png": "./src/components/civ-images/civ-unique-units/chinese.png",
	"./chinese.tp.png": "./src/components/civ-images/civ-unique-units/chinese.tp.png",
	"./cumans.png": "./src/components/civ-images/civ-unique-units/cumans.png",
	"./cumans.tp.png": "./src/components/civ-images/civ-unique-units/cumans.tp.png",
	"./dravidians.png": "./src/components/civ-images/civ-unique-units/dravidians.png",
	"./dravidians.tp.png": "./src/components/civ-images/civ-unique-units/dravidians.tp.png",
	"./ethiopians.png": "./src/components/civ-images/civ-unique-units/ethiopians.png",
	"./ethiopians.tp.png": "./src/components/civ-images/civ-unique-units/ethiopians.tp.png",
	"./franks.png": "./src/components/civ-images/civ-unique-units/franks.png",
	"./franks.tp.png": "./src/components/civ-images/civ-unique-units/franks.tp.png",
	"./goths.png": "./src/components/civ-images/civ-unique-units/goths.png",
	"./goths.tp.png": "./src/components/civ-images/civ-unique-units/goths.tp.png",
	"./gurjaras.png": "./src/components/civ-images/civ-unique-units/gurjaras.png",
	"./gurjaras.tp.png": "./src/components/civ-images/civ-unique-units/gurjaras.tp.png",
	"./hindustanis.png": "./src/components/civ-images/civ-unique-units/hindustanis.png",
	"./hindustanis.tp.png": "./src/components/civ-images/civ-unique-units/hindustanis.tp.png",
	"./huns.png": "./src/components/civ-images/civ-unique-units/huns.png",
	"./huns.tp.png": "./src/components/civ-images/civ-unique-units/huns.tp.png",
	"./incas.png": "./src/components/civ-images/civ-unique-units/incas.png",
	"./incas.tp.png": "./src/components/civ-images/civ-unique-units/incas.tp.png",
	"./indians.png": "./src/components/civ-images/civ-unique-units/indians.png",
	"./indians.tp.png": "./src/components/civ-images/civ-unique-units/indians.tp.png",
	"./italians.png": "./src/components/civ-images/civ-unique-units/italians.png",
	"./italians.tp.png": "./src/components/civ-images/civ-unique-units/italians.tp.png",
	"./japanese.png": "./src/components/civ-images/civ-unique-units/japanese.png",
	"./japanese.tp.png": "./src/components/civ-images/civ-unique-units/japanese.tp.png",
	"./khmer.png": "./src/components/civ-images/civ-unique-units/khmer.png",
	"./khmer.tp.png": "./src/components/civ-images/civ-unique-units/khmer.tp.png",
	"./koreans.png": "./src/components/civ-images/civ-unique-units/koreans.png",
	"./koreans.tp.png": "./src/components/civ-images/civ-unique-units/koreans.tp.png",
	"./lithuanians.png": "./src/components/civ-images/civ-unique-units/lithuanians.png",
	"./lithuanians.tp.png": "./src/components/civ-images/civ-unique-units/lithuanians.tp.png",
	"./magyars.png": "./src/components/civ-images/civ-unique-units/magyars.png",
	"./magyars.tp.png": "./src/components/civ-images/civ-unique-units/magyars.tp.png",
	"./malay.png": "./src/components/civ-images/civ-unique-units/malay.png",
	"./malay.tp.png": "./src/components/civ-images/civ-unique-units/malay.tp.png",
	"./malians.png": "./src/components/civ-images/civ-unique-units/malians.png",
	"./malians.tp.png": "./src/components/civ-images/civ-unique-units/malians.tp.png",
	"./mayans.png": "./src/components/civ-images/civ-unique-units/mayans.png",
	"./mayans.tp.png": "./src/components/civ-images/civ-unique-units/mayans.tp.png",
	"./mongols.png": "./src/components/civ-images/civ-unique-units/mongols.png",
	"./mongols.tp.png": "./src/components/civ-images/civ-unique-units/mongols.tp.png",
	"./persians.png": "./src/components/civ-images/civ-unique-units/persians.png",
	"./persians.tp.png": "./src/components/civ-images/civ-unique-units/persians.tp.png",
	"./poles.png": "./src/components/civ-images/civ-unique-units/poles.png",
	"./poles.tp.png": "./src/components/civ-images/civ-unique-units/poles.tp.png",
	"./portuguese.png": "./src/components/civ-images/civ-unique-units/portuguese.png",
	"./portuguese.tp.png": "./src/components/civ-images/civ-unique-units/portuguese.tp.png",
	"./romans.png": "./src/components/civ-images/civ-unique-units/romans.png",
	"./romans.tp.png": "./src/components/civ-images/civ-unique-units/romans.tp.png",
	"./saracens.png": "./src/components/civ-images/civ-unique-units/saracens.png",
	"./saracens.tp.png": "./src/components/civ-images/civ-unique-units/saracens.tp.png",
	"./sicilians.png": "./src/components/civ-images/civ-unique-units/sicilians.png",
	"./sicilians.tp.png": "./src/components/civ-images/civ-unique-units/sicilians.tp.png",
	"./slavs.png": "./src/components/civ-images/civ-unique-units/slavs.png",
	"./slavs.tp.png": "./src/components/civ-images/civ-unique-units/slavs.tp.png",
	"./spanish.png": "./src/components/civ-images/civ-unique-units/spanish.png",
	"./spanish.tp.png": "./src/components/civ-images/civ-unique-units/spanish.tp.png",
	"./tatars.png": "./src/components/civ-images/civ-unique-units/tatars.png",
	"./tatars.tp.png": "./src/components/civ-images/civ-unique-units/tatars.tp.png",
	"./teutons.png": "./src/components/civ-images/civ-unique-units/teutons.png",
	"./teutons.tp.png": "./src/components/civ-images/civ-unique-units/teutons.tp.png",
	"./turks.png": "./src/components/civ-images/civ-unique-units/turks.png",
	"./turks.tp.png": "./src/components/civ-images/civ-unique-units/turks.tp.png",
	"./vietnamese.png": "./src/components/civ-images/civ-unique-units/vietnamese.png",
	"./vietnamese.tp.png": "./src/components/civ-images/civ-unique-units/vietnamese.tp.png",
	"./vikings.png": "./src/components/civ-images/civ-unique-units/vikings.png",
	"./vikings.tp.png": "./src/components/civ-images/civ-unique-units/vikings.tp.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-images/civ-unique-units sync recursive \\.(png)$";

/***/ }),

/***/ "./src/components/civ-images/icons sync recursive \\.(png)$":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/ sync \.(png)$ ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aztecs.png": "./src/components/civ-images/icons/aztecs.png",
	"./bengalis.png": "./src/components/civ-images/icons/bengalis.png",
	"./berbers.png": "./src/components/civ-images/icons/berbers.png",
	"./bohemians.png": "./src/components/civ-images/icons/bohemians.png",
	"./britons.png": "./src/components/civ-images/icons/britons.png",
	"./bulgarians.png": "./src/components/civ-images/icons/bulgarians.png",
	"./burgundians.png": "./src/components/civ-images/icons/burgundians.png",
	"./burmese.png": "./src/components/civ-images/icons/burmese.png",
	"./byzantines.png": "./src/components/civ-images/icons/byzantines.png",
	"./celts.png": "./src/components/civ-images/icons/celts.png",
	"./chinese.png": "./src/components/civ-images/icons/chinese.png",
	"./cumans.png": "./src/components/civ-images/icons/cumans.png",
	"./dravidians.png": "./src/components/civ-images/icons/dravidians.png",
	"./ethiopians.png": "./src/components/civ-images/icons/ethiopians.png",
	"./franks.png": "./src/components/civ-images/icons/franks.png",
	"./goths.png": "./src/components/civ-images/icons/goths.png",
	"./gurjaras.png": "./src/components/civ-images/icons/gurjaras.png",
	"./hindustanis.png": "./src/components/civ-images/icons/hindustanis.png",
	"./huns.png": "./src/components/civ-images/icons/huns.png",
	"./incas.png": "./src/components/civ-images/icons/incas.png",
	"./italians.png": "./src/components/civ-images/icons/italians.png",
	"./japanese.png": "./src/components/civ-images/icons/japanese.png",
	"./khmer.png": "./src/components/civ-images/icons/khmer.png",
	"./koreans.png": "./src/components/civ-images/icons/koreans.png",
	"./lithuanians.png": "./src/components/civ-images/icons/lithuanians.png",
	"./magyars.png": "./src/components/civ-images/icons/magyars.png",
	"./malay.png": "./src/components/civ-images/icons/malay.png",
	"./malians.png": "./src/components/civ-images/icons/malians.png",
	"./mayans.png": "./src/components/civ-images/icons/mayans.png",
	"./mongols.png": "./src/components/civ-images/icons/mongols.png",
	"./persians.png": "./src/components/civ-images/icons/persians.png",
	"./poles.png": "./src/components/civ-images/icons/poles.png",
	"./portuguese.png": "./src/components/civ-images/icons/portuguese.png",
	"./romans.png": "./src/components/civ-images/icons/romans.png",
	"./saracens.png": "./src/components/civ-images/icons/saracens.png",
	"./sicilians.png": "./src/components/civ-images/icons/sicilians.png",
	"./slavs.png": "./src/components/civ-images/icons/slavs.png",
	"./spanish.png": "./src/components/civ-images/icons/spanish.png",
	"./tatars.png": "./src/components/civ-images/icons/tatars.png",
	"./teutons.png": "./src/components/civ-images/icons/teutons.png",
	"./turks.png": "./src/components/civ-images/icons/turks.png",
	"./vietnamese.png": "./src/components/civ-images/icons/vietnamese.png",
	"./vikings.png": "./src/components/civ-images/icons/vikings.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-images/icons sync recursive \\.(png)$";

/***/ }),

/***/ "./src/components/civ-images/image-helper.js":
/*!***************************************************!*\
  !*** ./src/components/civ-images/image-helper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   civEmblemImageMap: () => (/* binding */ civEmblemImageMap),
/* harmony export */   civIconsMap: () => (/* binding */ civIconsMap),
/* harmony export */   civUniqueUnitIconsMap: () => (/* binding */ civUniqueUnitIconsMap),
/* harmony export */   civUpgradeIconMap: () => (/* binding */ civUpgradeIconMap)
/* harmony export */ });
function importAll(r) {
  return r.keys().map(r);
}
function importAllIntoMap(r, relativeImagePath) {
  const myMap = new Map();
  r.keys()
    .map(r)
    .forEach((relativeUrl) => {
      const civKey = relativeUrl.replace(relativeImagePath, "").replace(".png", "").split(".")[0];
      if (myMap.has(civKey)) {
        const civKeyParts = relativeUrl.replace(relativeImagePath, "").replace(".png", "").split(".");
        const civKey2 = `${civKeyParts[0]}.${civKeyParts[1]}`;
        myMap.set(civKey2, relativeUrl);
      } else {
        myMap.set(civKey, relativeUrl);
      }
    });
  return myMap;
}
const civIconsMap = importAllIntoMap(__webpack_require__("./src/components/civ-images/icons sync recursive \\.(png)$"), "components/civ-images/icons/");
const civUniqueUnitIconsMap = importAllIntoMap(__webpack_require__("./src/components/civ-images/civ-unique-units sync recursive \\.(png)$"), "components/civ-images/civ-unique-units/");
const civEmblemImageMap = importAllIntoMap(__webpack_require__("./src/components/civ-images/civ-emblems sync recursive \\.(png)$"), "components/civ-images/civ-emblems/");
const civUpgradeIconMap = importAllIntoMap(__webpack_require__("./src/components/civ-images/upgrade-icons sync recursive \\.(png)$"), "components/civ-images/upgrade-icons/");




/***/ }),

/***/ "./src/components/civ-images/upgrade-icons sync recursive \\.(png)$":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/ sync \.(png)$ ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arbalester.png": "./src/components/civ-images/upgrade-icons/arbalester.png",
	"./architecture.png": "./src/components/civ-images/upgrade-icons/architecture.png",
	"./arrowslits.png": "./src/components/civ-images/upgrade-icons/arrowslits.png",
	"./arson.png": "./src/components/civ-images/upgrade-icons/arson.png",
	"./atonement.png": "./src/components/civ-images/upgrade-icons/atonement.png",
	"./ballistics.png": "./src/components/civ-images/upgrade-icons/ballistics.png",
	"./blast furnace.png": "./src/components/civ-images/upgrade-icons/blast furnace.png",
	"./block printing.png": "./src/components/civ-images/upgrade-icons/block printing.png",
	"./bloodlines.png": "./src/components/civ-images/upgrade-icons/bloodlines.png",
	"./bodkin arrow.png": "./src/components/civ-images/upgrade-icons/bodkin arrow.png",
	"./bombard tower.png": "./src/components/civ-images/upgrade-icons/bombard tower.png",
	"./bow saw.png": "./src/components/civ-images/upgrade-icons/bow saw.png",
	"./bracer.png": "./src/components/civ-images/upgrade-icons/bracer.png",
	"./cannon galleon.png": "./src/components/civ-images/upgrade-icons/cannon galleon.png",
	"./capped ram.png": "./src/components/civ-images/upgrade-icons/capped ram.png",
	"./careening.png": "./src/components/civ-images/upgrade-icons/careening.png",
	"./castle.png": "./src/components/civ-images/upgrade-icons/castle.png",
	"./castle.tp.png": "./src/components/civ-images/upgrade-icons/castle.tp.png",
	"./cavalier.png": "./src/components/civ-images/upgrade-icons/cavalier.png",
	"./chain barding armor.png": "./src/components/civ-images/upgrade-icons/chain barding armor.png",
	"./chain mail armor.png": "./src/components/civ-images/upgrade-icons/chain mail armor.png",
	"./champion.png": "./src/components/civ-images/upgrade-icons/champion.png",
	"./chemistry.png": "./src/components/civ-images/upgrade-icons/chemistry.png",
	"./crop rotation.png": "./src/components/civ-images/upgrade-icons/crop rotation.png",
	"./crossbowman.png": "./src/components/civ-images/upgrade-icons/crossbowman.png",
	"./dark.png": "./src/components/civ-images/upgrade-icons/dark.png",
	"./dark.tp.png": "./src/components/civ-images/upgrade-icons/dark.tp.png",
	"./double-bit axe.png": "./src/components/civ-images/upgrade-icons/double-bit axe.png",
	"./dry dock.png": "./src/components/civ-images/upgrade-icons/dry dock.png",
	"./eagle warrior.png": "./src/components/civ-images/upgrade-icons/eagle warrior.png",
	"./elite battle elephant.png": "./src/components/civ-images/upgrade-icons/elite battle elephant.png",
	"./elite cannon galleon.png": "./src/components/civ-images/upgrade-icons/elite cannon galleon.png",
	"./elite eagle warrior.png": "./src/components/civ-images/upgrade-icons/elite eagle warrior.png",
	"./elite skirmisher.png": "./src/components/civ-images/upgrade-icons/elite skirmisher.png",
	"./elite steppe lancer.png": "./src/components/civ-images/upgrade-icons/elite steppe lancer.png",
	"./elite unique unit.png": "./src/components/civ-images/upgrade-icons/elite unique unit.png",
	"./faith.png": "./src/components/civ-images/upgrade-icons/faith.png",
	"./fast fire ship.png": "./src/components/civ-images/upgrade-icons/fast fire ship.png",
	"./fervor.png": "./src/components/civ-images/upgrade-icons/fervor.png",
	"./feudal.png": "./src/components/civ-images/upgrade-icons/feudal.png",
	"./feudal.tp.png": "./src/components/civ-images/upgrade-icons/feudal.tp.png",
	"./fletching.png": "./src/components/civ-images/upgrade-icons/fletching.png",
	"./forging.png": "./src/components/civ-images/upgrade-icons/forging.png",
	"./fortified wall.png": "./src/components/civ-images/upgrade-icons/fortified wall.png",
	"./galleon.png": "./src/components/civ-images/upgrade-icons/galleon.png",
	"./gillnets.png": "./src/components/civ-images/upgrade-icons/gillnets.png",
	"./gold mining.png": "./src/components/civ-images/upgrade-icons/gold mining.png",
	"./gold shaft mining.png": "./src/components/civ-images/upgrade-icons/gold shaft mining.png",
	"./guard tower.png": "./src/components/civ-images/upgrade-icons/guard tower.png",
	"./halberdier.png": "./src/components/civ-images/upgrade-icons/halberdier.png",
	"./hand cart.png": "./src/components/civ-images/upgrade-icons/hand cart.png",
	"./heated shot.png": "./src/components/civ-images/upgrade-icons/heated shot.png",
	"./heavy camel.png": "./src/components/civ-images/upgrade-icons/heavy camel.png",
	"./heavy cav archer.png": "./src/components/civ-images/upgrade-icons/heavy cav archer.png",
	"./heavy demo ship.png": "./src/components/civ-images/upgrade-icons/heavy demo ship.png",
	"./heavy plow.png": "./src/components/civ-images/upgrade-icons/heavy plow.png",
	"./heavy scorpion.png": "./src/components/civ-images/upgrade-icons/heavy scorpion.png",
	"./herbal medicine.png": "./src/components/civ-images/upgrade-icons/herbal medicine.png",
	"./heresy.png": "./src/components/civ-images/upgrade-icons/heresy.png",
	"./horse collar.png": "./src/components/civ-images/upgrade-icons/horse collar.png",
	"./husbandry.png": "./src/components/civ-images/upgrade-icons/husbandry.png",
	"./hussar.png": "./src/components/civ-images/upgrade-icons/hussar.png",
	"./illumination.png": "./src/components/civ-images/upgrade-icons/illumination.png",
	"./imperial camel.png": "./src/components/civ-images/upgrade-icons/imperial camel.png",
	"./imperial skirmisher.png": "./src/components/civ-images/upgrade-icons/imperial skirmisher.png",
	"./imperial.png": "./src/components/civ-images/upgrade-icons/imperial.png",
	"./imperial.tp.png": "./src/components/civ-images/upgrade-icons/imperial.tp.png",
	"./iron casting.png": "./src/components/civ-images/upgrade-icons/iron casting.png",
	"./keep.png": "./src/components/civ-images/upgrade-icons/keep.png",
	"./leather archer armor.png": "./src/components/civ-images/upgrade-icons/leather archer armor.png",
	"./light cavalry.png": "./src/components/civ-images/upgrade-icons/light cavalry.png",
	"./long swordsman.png": "./src/components/civ-images/upgrade-icons/long swordsman.png",
	"./man-at-arms.png": "./src/components/civ-images/upgrade-icons/man-at-arms.png",
	"./masonry.png": "./src/components/civ-images/upgrade-icons/masonry.png",
	"./murder holes.png": "./src/components/civ-images/upgrade-icons/murder holes.png",
	"./onager.png": "./src/components/civ-images/upgrade-icons/onager.png",
	"./padded archer armor.png": "./src/components/civ-images/upgrade-icons/padded archer armor.png",
	"./paladin.png": "./src/components/civ-images/upgrade-icons/paladin.png",
	"./parthian tactics.png": "./src/components/civ-images/upgrade-icons/parthian tactics.png",
	"./pikeman.png": "./src/components/civ-images/upgrade-icons/pikeman.png",
	"./plate barding armor.png": "./src/components/civ-images/upgrade-icons/plate barding armor.png",
	"./plate mail armor.png": "./src/components/civ-images/upgrade-icons/plate mail armor.png",
	"./redemption.png": "./src/components/civ-images/upgrade-icons/redemption.png",
	"./ring archer armor.png": "./src/components/civ-images/upgrade-icons/ring archer armor.png",
	"./sanctity.png": "./src/components/civ-images/upgrade-icons/sanctity.png",
	"./scale barding armor.png": "./src/components/civ-images/upgrade-icons/scale barding armor.png",
	"./scale mail armor.png": "./src/components/civ-images/upgrade-icons/scale mail armor.png",
	"./shipwright.png": "./src/components/civ-images/upgrade-icons/shipwright.png",
	"./siege engineers.png": "./src/components/civ-images/upgrade-icons/siege engineers.png",
	"./siege onager.png": "./src/components/civ-images/upgrade-icons/siege onager.png",
	"./siege ram.png": "./src/components/civ-images/upgrade-icons/siege ram.png",
	"./squires.png": "./src/components/civ-images/upgrade-icons/squires.png",
	"./stone mining.png": "./src/components/civ-images/upgrade-icons/stone mining.png",
	"./stone shaft mining.png": "./src/components/civ-images/upgrade-icons/stone shaft mining.png",
	"./supplies.png": "./src/components/civ-images/upgrade-icons/supplies.png",
	"./theocracy.png": "./src/components/civ-images/upgrade-icons/theocracy.png",
	"./thumb ring.png": "./src/components/civ-images/upgrade-icons/thumb ring.png",
	"./tracking.png": "./src/components/civ-images/upgrade-icons/tracking.png",
	"./treadmill crane.png": "./src/components/civ-images/upgrade-icons/treadmill crane.png",
	"./two-handed swordsman.png": "./src/components/civ-images/upgrade-icons/two-handed swordsman.png",
	"./two-man saw.png": "./src/components/civ-images/upgrade-icons/two-man saw.png",
	"./unique tech castle.png": "./src/components/civ-images/upgrade-icons/unique tech castle.png",
	"./unique tech imperial.png": "./src/components/civ-images/upgrade-icons/unique tech imperial.png",
	"./war galley.png": "./src/components/civ-images/upgrade-icons/war galley.png",
	"./wheelbarrow.png": "./src/components/civ-images/upgrade-icons/wheelbarrow.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-images/upgrade-icons sync recursive \\.(png)$";

/***/ }),

/***/ "./src/components/civ-sounds/sound-helper.js":
/*!***************************************************!*\
  !*** ./src/components/civ-sounds/sound-helper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildAudioElement: () => (/* binding */ buildAudioElement),
/* harmony export */   getAudioSource: () => (/* binding */ getAudioSource)
/* harmony export */ });
function importAllIntoMap(r, relativeImagePath) {
  const myMap = new Map();
  r.keys()
    .map(r)
    .forEach((relativeUrl) => {
      const civKey = relativeUrl.replace(relativeImagePath, "").replace(".mp3", "").split(".")[0];
      if (myMap.has(civKey)) {
        const civKeyParts = relativeUrl.replace(relativeImagePath, "").replace(".mp3", "").split(".");
        const civKey2 = `${civKeyParts[0]}.${civKeyParts[1]}`;
        myMap.set(civKey2, relativeUrl);
      } else {
        myMap.set(civKey, relativeUrl);
      }
    });
  return myMap;
}

const civSoundMap = importAllIntoMap(__webpack_require__("./src/components/civ-sounds/sounds sync recursive \\.(mp3)$"), "components/civ-sounds/sounds/");

function buildAudioElement(civName) {
  const audioElement = new Audio(`./${civSoundMap.get(civName.toLowerCase())}`);
  return audioElement;
}
function getAudioSource(civName) {
  return civSoundMap.get(civName.toLowerCase());
}




/***/ }),

/***/ "./src/components/civ-sounds/sounds sync recursive \\.(mp3)$":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/ sync \.(mp3)$ ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aztecs.mp3": "./src/components/civ-sounds/sounds/aztecs.mp3",
	"./bengalis.mp3": "./src/components/civ-sounds/sounds/bengalis.mp3",
	"./berbers.mp3": "./src/components/civ-sounds/sounds/berbers.mp3",
	"./bohemians.mp3": "./src/components/civ-sounds/sounds/bohemians.mp3",
	"./britons.mp3": "./src/components/civ-sounds/sounds/britons.mp3",
	"./bulgarians.mp3": "./src/components/civ-sounds/sounds/bulgarians.mp3",
	"./burgundians.mp3": "./src/components/civ-sounds/sounds/burgundians.mp3",
	"./burmese.mp3": "./src/components/civ-sounds/sounds/burmese.mp3",
	"./byzantines.mp3": "./src/components/civ-sounds/sounds/byzantines.mp3",
	"./celts.mp3": "./src/components/civ-sounds/sounds/celts.mp3",
	"./chinese.mp3": "./src/components/civ-sounds/sounds/chinese.mp3",
	"./cumans.mp3": "./src/components/civ-sounds/sounds/cumans.mp3",
	"./dravidians.mp3": "./src/components/civ-sounds/sounds/dravidians.mp3",
	"./ethiopians.mp3": "./src/components/civ-sounds/sounds/ethiopians.mp3",
	"./franks.mp3": "./src/components/civ-sounds/sounds/franks.mp3",
	"./goths.mp3": "./src/components/civ-sounds/sounds/goths.mp3",
	"./gurjaras.mp3": "./src/components/civ-sounds/sounds/gurjaras.mp3",
	"./hindustanis.mp3": "./src/components/civ-sounds/sounds/hindustanis.mp3",
	"./huns.mp3": "./src/components/civ-sounds/sounds/huns.mp3",
	"./incas.mp3": "./src/components/civ-sounds/sounds/incas.mp3",
	"./italians.mp3": "./src/components/civ-sounds/sounds/italians.mp3",
	"./japanese.mp3": "./src/components/civ-sounds/sounds/japanese.mp3",
	"./khmer.mp3": "./src/components/civ-sounds/sounds/khmer.mp3",
	"./koreans.mp3": "./src/components/civ-sounds/sounds/koreans.mp3",
	"./lithuanians.mp3": "./src/components/civ-sounds/sounds/lithuanians.mp3",
	"./magyars.mp3": "./src/components/civ-sounds/sounds/magyars.mp3",
	"./malay.mp3": "./src/components/civ-sounds/sounds/malay.mp3",
	"./malians.mp3": "./src/components/civ-sounds/sounds/malians.mp3",
	"./mayans.mp3": "./src/components/civ-sounds/sounds/mayans.mp3",
	"./mongols.mp3": "./src/components/civ-sounds/sounds/mongols.mp3",
	"./persians.mp3": "./src/components/civ-sounds/sounds/persians.mp3",
	"./poles.mp3": "./src/components/civ-sounds/sounds/poles.mp3",
	"./portuguese.mp3": "./src/components/civ-sounds/sounds/portuguese.mp3",
	"./romans.mp3": "./src/components/civ-sounds/sounds/romans.mp3",
	"./saracens.mp3": "./src/components/civ-sounds/sounds/saracens.mp3",
	"./sicilians.mp3": "./src/components/civ-sounds/sounds/sicilians.mp3",
	"./slavs.mp3": "./src/components/civ-sounds/sounds/slavs.mp3",
	"./spanish.mp3": "./src/components/civ-sounds/sounds/spanish.mp3",
	"./tatars.mp3": "./src/components/civ-sounds/sounds/tatars.mp3",
	"./teutons.mp3": "./src/components/civ-sounds/sounds/teutons.mp3",
	"./turks.mp3": "./src/components/civ-sounds/sounds/turks.mp3",
	"./vietnamese.mp3": "./src/components/civ-sounds/sounds/vietnamese.mp3",
	"./vikings.mp3": "./src/components/civ-sounds/sounds/vikings.mp3"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-sounds/sounds sync recursive \\.(mp3)$";

/***/ }),

/***/ "./src/components/civ-tech-overlay/civ-tech-overlay.js":
/*!*************************************************************!*\
  !*** ./src/components/civ-tech-overlay/civ-tech-overlay.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CivTechOverlay: () => (/* binding */ CivTechOverlay)
/* harmony export */ });
/* harmony import */ var _civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../civ-images/image-helper */ "./src/components/civ-images/image-helper.js");
/* harmony import */ var _civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../civ-images/civ-data/data-helper */ "./src/components/civ-images/civ-data/data-helper.js");
/* harmony import */ var _civ_sounds_sound_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../civ-sounds/sound-helper */ "./src/components/civ-sounds/sound-helper.js");
/* harmony import */ var _civ_upgrade_overlay_civ_upgrade_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../civ-upgrade-overlay/civ-upgrade-overlay */ "./src/components/civ-upgrade-overlay/civ-upgrade-overlay.js");






class CivTechOverlay {
  _soundsToPlay;
  _soundIndex;
  constructor() {
    this._soundIndex = 0;
    this._soundsToPlay = [];
  }
  buildElement(civName, techOptions, autoHideDelay) {
    this._soundsToPlay.push(civName.toLowerCase());
    const mainDiv = this.buildMainDivContainer(autoHideDelay);

    const nameContainerDiv = document.createElement("div");
    nameContainerDiv.classList.add("civ-name-container");
    nameContainerDiv.appendChild(this.buildCivIconElement(civName));
    nameContainerDiv.appendChild(this.buildNameElement(civName));
    nameContainerDiv.appendChild(this.buildCivUniqueUnit(civName));
    mainDiv.appendChild(nameContainerDiv);
    mainDiv.appendChild(this.buildCivDescription(civName));

    const civUpgrades = new _civ_upgrade_overlay_civ_upgrade_overlay__WEBPACK_IMPORTED_MODULE_3__.CivUpgradeOverlay();
    mainDiv.appendChild(civUpgrades.buildElement(civName, techOptions));

    mainDiv.appendChild(this.buildCivEmblem(civName));
    return mainDiv;
  }
  buildSounds() {
    const soundElement = (0,_civ_sounds_sound_helper__WEBPACK_IMPORTED_MODULE_2__.buildAudioElement)(this._soundsToPlay[this._soundIndex].toLowerCase());
    soundElement.onended = () => {
      this._soundIndex++;
      if (typeof this._soundsToPlay[this._soundIndex] !== "undefined") {
        // play next sound
        soundElement.src = (0,_civ_sounds_sound_helper__WEBPACK_IMPORTED_MODULE_2__.getAudioSource)(this._soundsToPlay[this._soundIndex]);
        soundElement.play();
      }
    };
    return soundElement;
  }
  buildMainDivContainer(autoHideDelay) {
    const divContainer = document.createElement("div");

    divContainer.classList.add("civ-tech-overlay-container");
    divContainer.classList.add("mask-img-vertical");
    setTimeout(() => {
      divContainer.classList.remove("civ-tech-animation-leave-active");
      divContainer.classList.add("civ-tech-animation-enter-active");
      if (autoHideDelay > -1) {
        setTimeout(() => {
          divContainer.classList.remove("civ-tech-animation-enter-active");
          divContainer.classList.add("civ-tech-animation-leave-active");
        }, autoHideDelay);
      }
    }, 1000);
    return divContainer;
  }
  buildNameElement(civName) {
    const nameElementDiv = document.createElement("div");
    nameElementDiv.classList.add("civ-name");

    const civNameText = `${civName.substring(0, 1).toUpperCase()}${civName.slice(1)}`;
    nameElementDiv.innerText = civNameText;
    return nameElementDiv;
  }
  buildCivIconElement(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-icon");
    civIcon.src = `./${_civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__.civIconsMap.get(civName)}`;
    return civIcon;
  }
  buildCivDescription(civName) {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("civ-description");
    descriptionDiv.innerHTML = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.getCivTechnologyDescription)(civName);
    return descriptionDiv;
  }
  buildCivUniqueUnit(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-unique-unit-icon");
    civIcon.src = `./${_civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__.civUniqueUnitIconsMap.get(civName)}`;
    return civIcon;
  }
  buildCivEmblem(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-emblem");
    civIcon.src = `./${_civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__.civEmblemImageMap.get(civName)}`;
    return civIcon;
  }
  clearCivDivs() {
    Array.from(document.getElementsByClassName("civ-tech-overlay-container")).forEach((element) => {
      element.remove();
    });
  }
}




/***/ }),

/***/ "./src/components/civ-upgrade-overlay/civ-upgrade-overlay.js":
/*!*******************************************************************!*\
  !*** ./src/components/civ-upgrade-overlay/civ-upgrade-overlay.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CivUpgradeOverlay: () => (/* binding */ CivUpgradeOverlay)
/* harmony export */ });
/* harmony import */ var _civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../civ-images/image-helper */ "./src/components/civ-images/image-helper.js");
/* harmony import */ var _civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../civ-images/civ-data/data-helper */ "./src/components/civ-images/civ-data/data-helper.js");


class CivUpgradeOverlay {
  constructor() {}
  _techOptions;
  buildElement(civName, techOptions) {
    this._techOptions = techOptions;
    const mainDiv = this.buildUpgradeContainer(civName);
    return mainDiv;
  }
  buildUpgradeContainer(civName) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("civ-upgrade-overlay-container");

    const allTechs = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.getCivTechnologyUpgrades)(civName);
    // console.log("tech options: ", this._techOptions);
    if (this._techOptions._showBlacksmithTech) {
      const reducedBsTechs = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.filterLowestUpgradesFromCategories)(["blacksmith", "archery range"], allTechs);
      mainDiv.appendChild(this.buildIconContainer(reducedBsTechs));
    }
    if (this._techOptions._showMonastaryTech) {
      const reducedEcoTechs = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.filterLowestUpgradesFromCategories)(["lumber camp", "mill", "university", "stable"], allTechs);
      mainDiv.appendChild(this.buildIconContainer(reducedEcoTechs));
    }
    if (this._techOptions._showUniversityTech) {
      const reducedMonkTechs = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.filterLowestUpgradesFromCategories)(["monastery"], allTechs);
      mainDiv.appendChild(this.buildIconContainer(reducedMonkTechs.slice(0, 5)));
      mainDiv.appendChild(this.buildIconContainer(reducedMonkTechs.slice(5, reducedMonkTechs.length)));
    }
    return mainDiv;
  }
  buildIconContainer(arrayOfUpgrades) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-upgrade-container");

    arrayOfUpgrades.forEach((upgrade) => {
      const imagePath = `./${_civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__.civUpgradeIconMap.get(upgrade.rawName.toLowerCase())}`;
      const iconElement = this.buildIcon(imagePath, upgrade.id === -1);

      const numTiers = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.getAgeTierLevel)(upgrade.rawName);
      const tierContainer = this.buildTierContainer(numTiers, upgrade.id === -1);
      iconElement.appendChild(tierContainer);

      divContainer.appendChild(iconElement);
    });
    return divContainer;
  }
  buildIcon(imagePath, disableIcon) {
    const upgradeIconContainer = document.createElement("div");
    upgradeIconContainer.classList.add("upgrade-icon-container");

    const upgradeIcon = new Image();
    upgradeIcon.src = imagePath;
    upgradeIcon.classList.add("upgrade-icon");
    upgradeIconContainer.appendChild(upgradeIcon);

    if (disableIcon) {
      const mesoDisable = document.createElement("div");
      mesoDisable.classList.add("disable-icon-meso");
      upgradeIconContainer.appendChild(mesoDisable);
      upgradeIconContainer.appendChild(upgradeIcon);
    }
    return upgradeIconContainer;
  }
  buildTierContainer(tierLevels, fullDisabled) {
    const tierContainer = document.createElement("div");
    tierContainer.classList.add("upgrade-tier-container");

    const tier = document.createElement("div");
    if (fullDisabled) {
      tier.classList.add(`disabled-1`);
      tierContainer.appendChild(tier);
    } else if (tierLevels === -1 && !fullDisabled) {
      tier.classList.add(`enabled-1`);
      tierContainer.appendChild(tier);
    } else if (tierLevels > -1) {
      //+1 for 0 offset
      const offsetTiers = tierLevels + 1;
      for (let i = 0; i < offsetTiers; i++) {
        const multiTier = document.createElement("div");
        multiTier.classList.add(`enabled-3`);
        tierContainer.appendChild(multiTier);
      }
      if (tierLevels === 0) {
        const disableTier = document.createElement("div");
        disableTier.classList.add(`disabled-3`);
        const disableTier1 = document.createElement("div");
        disableTier1.classList.add(`disabled-3`);
        tierContainer.appendChild(disableTier);
        tierContainer.appendChild(disableTier1);
      }
      if (tierLevels === 1) {
        const disableTier = document.createElement("div");
        disableTier.classList.add(`disabled-3`);
        tierContainer.appendChild(disableTier);
      }
    }
    return tierContainer;
  }
}




/***/ }),

/***/ "./src/datastore.js":
/*!**************************!*\
  !*** ./src/datastore.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalSavedData: () => (/* binding */ LocalSavedData)
/* harmony export */ });
class TechnologyOverlayStore {
  _useSound = false;
  _autoHide = true;
  _showTechOverlay = true;
  _showBlacksmithTech = false;
  _showUniversityTech = false;
  _showMonastaryTech = false;
  _showDockTech = false;
  _showBarracksTech = false;
  _showArcheryTech = false;
  _showStableTech = false;
  _showSiegeWorkshopTech = false;
  _autoHideDelay = 12;
  _numCivsPerRow = 7;
  _numPlayersInMatch = 2;
  _label_userId = "";
}
class UISettingsOverlayStore {
  _fontSize = 22;
  _techBackgroundOpacity = 0.8;
}
class SensitiveDataStore {
  _websocket_ip = "";
  _websocket_password = "";
  _websocket_port = 4455;
}

class LocalSavedData {
  _techOverlayStore;
  _uiSettingsOverlayStore;
  _sensitiveDataStore;

  constructor() {
    this._techOverlayStore = new TechnologyOverlayStore();
    this._uiSettingsOverlayStore = new UISettingsOverlayStore();
    this._sensitiveDataStore = new SensitiveDataStore();
  }

  saveData() {
    // console.log(`Saving ${this._techOverlayStore}`);
    localStorage.setItem("techOverlayStore", JSON.stringify(this._techOverlayStore));
    // console.log(`Saving ${this._uiSettingsOverlayStore}`);
    localStorage.setItem("uiSettingsOverlayStore", JSON.stringify(this._uiSettingsOverlayStore));
    // console.log("Saving", this._sensitiveDataStore);
    localStorage.setItem("sensitiveDataStore", JSON.stringify(this._sensitiveDataStore));
  }

  loadData() {
    const techData = JSON.parse(localStorage.getItem("techOverlayStore"));
    if (techData) {
      Object.assign(this._techOverlayStore, techData);
      // console.log(this._techOverlayStore._label_userId);
      if (!this._techOverlayStore._label_userId) {
        // this._techOverlayStore._label_userId = crypto.randomUUID();
        this._techOverlayStore._label_userId = crypto.randomUUID();
      }
      // this._techOverlayStore = techData;
    }
    const uiData = JSON.parse(localStorage.getItem("uiSettingsOverlayStore"));
    if (uiData) {
      Object.assign(this._uiSettingsOverlayStore, uiData);
      // this._uiSettingsOverlayStore = uiData;
    }
    const sensitiveData = JSON.parse(localStorage.getItem("sensitiveDataStore"));
    if (sensitiveData) {
      Object.assign(this._sensitiveDataStore, sensitiveData);
      //   console.log("Loaded", this._sensitiveDataStore);
      // this._sensitiveDataStore = sensitiveData;
    }
  }

  deleteData(key) {
    localStorage.removeItem(key);
  }
}




/***/ }),

/***/ "./src/html-pages/client-page.js":
/*!***************************************!*\
  !*** ./src/html-pages/client-page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientPage: () => (/* binding */ ClientPage)
/* harmony export */ });
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-data */ "./src/common-data.js");
/* harmony import */ var _components_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/civ-images/civ-data/data-helper */ "./src/components/civ-images/civ-data/data-helper.js");
/* harmony import */ var _components_civ_tech_overlay_civ_tech_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/civ-tech-overlay/civ-tech-overlay */ "./src/components/civ-tech-overlay/civ-tech-overlay.js");



class ClientPage {
  _dataStore;
  _clientWebsocket;
  _techOverlay;
  constructor(dataStore, clientWebsocket) {
    this._dataStore = dataStore;
    this._clientWebsocket = clientWebsocket;
    this._techOverlay = new _components_civ_tech_overlay_civ_tech_overlay__WEBPACK_IMPORTED_MODULE_2__.CivTechOverlay();
    document.addEventListener("obs-websocket-overlay-push-event", this.digestWebsocketMessage.bind(this));
  }
  buildHtml() {
    const bodyContent = document.getElementById("dynamic-content");

    const clientPageDOM = document.createElement("div");
    clientPageDOM.classList.add("client-page");
    clientPageDOM.id = "client-page";
    bodyContent.appendChild(clientPageDOM);
  }

  digestWebsocketMessage(event) {
    if (event) {
      const rawData = JSON.parse(event.detail.data);
      console.log(rawData);
      if (rawData.type === _common_data__WEBPACK_IMPORTED_MODULE_0__.SocketEnums.AGEOVERLAYPUSH) {
        const clientPage = document.getElementById("client-page");
        this._techOverlay.clearCivDivs();
        if (rawData.data.showOverlay) {
          const additionalOptions = (({ _showBlacksmithTech, _showUniversityTech, _showMonastaryTech }) => ({ _showBlacksmithTech, _showUniversityTech, _showMonastaryTech }))(rawData.data);
          rawData.data.pickedCivs.forEach((pickedCiv) => {
            if (rawData.data._autoHide) {
              clientPage.appendChild(this._techOverlay.buildElement(pickedCiv.toLowerCase(), additionalOptions, parseInt(rawData.data._autoHideDelay) * 1000));
            } else {
              clientPage.appendChild(this._techOverlay.buildElement(pickedCiv.toLowerCase(), additionalOptions, -1));
            }
          });

          if (rawData.data.pickedCivs.length > 0) {
            if (rawData.data._useSound) {
              const soundElement = this._techOverlay.buildSounds();
              clientPage.appendChild(soundElement);
              setTimeout(() => {
                soundElement.play();
              }, 1000);
            }
          }
        }
      }
    }
  }
  getRandomCiv() {
    const civNames = (0,_components_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.getCivNames)();
    return civNames[this.randomIntFromInterval(0, civNames.length - 1)].toLowerCase();
  }
  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}




/***/ }),

/***/ "./src/index-client.js":
/*!*****************************!*\
  !*** ./src/index-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datastore */ "./src/datastore.js");
/* harmony import */ var _html_pages_client_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-pages/client-page.js */ "./src/html-pages/client-page.js");
/* harmony import */ var obs_websocket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! obs-websocket-js */ "./node_modules/obs-websocket-js/dist/json.modern.js");






const savedData = new _datastore__WEBPACK_IMPORTED_MODULE_1__.LocalSavedData();
savedData.loadData();
savedData.saveData();

const obs = new obs_websocket_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

// https://treee.github.io/tech-overlay/client#guid:password
const url = window.location.href;
const urlParts = url.split("#");
const importantParts = urlParts[1].split(":");
// await obs.connect(`ws://${savedData._sensitiveDataStore._websocket_ip}:${savedData._sensitiveDataStore._websocket_port}`, savedData._sensitiveDataStore._websocket_password);
await obs.connect(`ws://127.0.0.1:4455`, importantParts[1], {
  eventSubscriptions: obs_websocket_js__WEBPACK_IMPORTED_MODULE_3__.EventSubscription.All,
  rpcVersion: 1,
});

window.addEventListener("obsSceneChanged", function (event) {
  var t = document.createTextNode(event.detail.name);
  document.body.appendChild(t);
  console.log("testetst========================================");
});

console.log(`ws://127.0.0.1:4455 pw:${importantParts[1]}`);

obs.on("ConnectionOpened", () => {
  console.log("CLIENT CONNECTED TO OBS WEBSOCKET");
});
obs.on("VendorEvent", ({ vendorName, eventType, eventData }) => {
  console.log({ vendorName, eventType, eventData });
});
obs.on("CustomEvent", (eventData) => {
  console.log("custom event");
  const body = document.getElementById("dynamic-content");

  const childDiv = document.createElement("div");
  childDiv.innerText = eventData;
  //   childDiv.classList.add("");
  body.appendChild(childDiv);

  console.log(eventData);
});

obs.on("obs-websocket-overlay-push-event", (event) => {
  console.log(event);
});
window.addEventListener("emit_event", function (event) {
  //   var t = document.createTextNode(event.detail);
  //   t.classList.add("settings-button");
  //   document.body.appendChild(t);

  const body = document.getElementById("dynamic-content");

  const childDiv = document.createElement("div");
  childDiv.innerText = event.detail;
  //   childDiv.classList.add("");
  body.appendChild(childDiv);

  console.log(event.detail);
});
document.addEventListener("emit_event", function (event) {
  //   var t = document.createTextNode(event.detail);
  //   t.classList.add("settings-button");
  //   document.body.appendChild(t);

  const body = document.getElementById("dynamic-content");

  const childDiv = document.createElement("div");
  childDiv.innerText = event.detail;
  //   childDiv.classList.add("");
  body.appendChild(childDiv);

  console.log(event.detail);
});

const dynamicContentDiv = document.createElement("div");
dynamicContentDiv.id = "dynamic-content";
dynamicContentDiv.classList.add("body-content");
document.body.appendChild(dynamicContentDiv);

new _html_pages_client_page_js__WEBPACK_IMPORTED_MODULE_2__.ClientPage(savedData, obs).buildHtml();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/assets/fonts/IronstrikeSemiBold.otf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/IronstrikeSemiBold.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/IronstrikeSemiBold.f4eb33b653a191dd07a5.otf";

/***/ }),

/***/ "./src/assets/images/ingame_diplomacy-menu_bg_full.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/ingame_diplomacy-menu_bg_full.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/ingame_diplomacy-menu_bg_full.35e71a34d7b98dff78d0.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/aztecs.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/aztecs.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/aztecs.9732764efc6759e33254.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/bengalis.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/bengalis.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/bengalis.66beb8fe864e59a47525.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/berbers.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/berbers.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/berbers.bd9b97f5c9b200911533.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/bohemians.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/bohemians.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/bohemians.68eb99994902782c0c2b.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/britons.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/britons.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/britons.3601134221cd6bb9a7e3.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/bulgarians.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/bulgarians.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/bulgarians.8fe37efbd99da12e6b20.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/burgundians.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/burgundians.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/burgundians.f250e51294a2adde3102.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/burmese.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/burmese.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/burmese.86faaf6dfab47a71844f.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/byzantines.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/byzantines.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/byzantines.02cd01ab405bee58df03.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/celts.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/celts.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/celts.cf88e4a0e218c0037494.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/chinese.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/chinese.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/chinese.795488409501fa75360a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/cumans.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/cumans.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/cumans.d68c263efc2de9475917.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/dravidians.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/dravidians.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/dravidians.166328558b581b328ed4.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/ethiopians.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/ethiopians.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/ethiopians.0bc7cf88ce949d2332a8.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/franks.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/franks.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/franks.d121064c25917a6a1426.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/goths.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/goths.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/goths.82ac29aa9c374c8c6ba1.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/gurjaras.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/gurjaras.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/gurjaras.18b565578abb5f967511.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/hindustanis.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/hindustanis.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/hindustanis.599b3cffc5d928cff8ec.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/huns.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/huns.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/huns.5415c7e969d50d2193ee.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/incas.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/incas.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/incas.b8fc1c289a670a42f16c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/italians.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/italians.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/italians.125f3556916a51dd121e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/japanese.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/japanese.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/japanese.f1d7a512a7ba5d6644cf.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/khmer.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/khmer.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/khmer.a383038ef14a6d9eb83a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/koreans.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/koreans.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/koreans.1a1c490e85eb37ee31eb.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/lithuanians.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/lithuanians.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/lithuanians.25866767f1c30256f0fb.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/magyars.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/magyars.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/magyars.7f03c45a1db51b0415fc.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/malay.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/malay.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/malay.1a46470f0cbe09bd2f4d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/malians.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/malians.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/malians.138594a51045038d98f5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/mayans.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/mayans.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/mayans.131666549e9fa72aa517.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/mongols.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/mongols.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/mongols.acc36d2714e43f823714.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/persians.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/persians.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/persians.315c6c87f6d0fed2cd56.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/poles.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/poles.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/poles.a9c1d483698fd976896c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/portuguese.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/portuguese.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/portuguese.4c74a0859100b943ab65.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/romans.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/romans.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/romans.7e1cb3c3eff2e448943d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/saracens.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/saracens.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/saracens.9c69cb64f64b06dde481.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/sicilians.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/sicilians.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/sicilians.bd496568cc1ec1fb6812.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/slavs.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/slavs.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/slavs.3bd9ae0cffc819427378.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/spanish.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/spanish.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/spanish.9787df2a20b41ffe5f60.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/tatars.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/tatars.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/tatars.b6224d14b56bd7bdb4d7.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/teutons.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/teutons.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/teutons.01115c8e02967246b5aa.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/turks.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/turks.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/turks.5f23f032e81c22c850a1.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/vietnamese.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/vietnamese.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/vietnamese.c9b5c620046b35554f88.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/vikings.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/vikings.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/vikings.35758fdeb744d7f8095e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/aztecs.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/aztecs.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/aztecs.4dfeb8b4670df00539cf.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/aztecs.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/aztecs.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/aztecs.tp.03ac8826c9d1528be13b.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bengalis.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bengalis.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bengalis.c3a407af0174cad10551.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bengalis.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bengalis.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bengalis.tp.3255b30d1dc98a9e0318.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/berbers.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/berbers.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/berbers.019fed284e8ec9fc49ca.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/berbers.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/berbers.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/berbers.tp.e9d75540030cd757d547.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bohemians.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bohemians.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bohemians.2b6661a0573dc5668c58.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bohemians.tp.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bohemians.tp.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bohemians.tp.3ec06d0f4fc063ee51f5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/britons.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/britons.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/britons.87ba17a8c8dd8aa49e17.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/britons.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/britons.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/britons.tp.dc6ecf7a6feadc920339.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bulgarians.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bulgarians.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bulgarians.3e71677121597b7a3d69.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bulgarians.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bulgarians.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bulgarians.tp.0aca1fc0434cba89a64f.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/burgundians.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/burgundians.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/burgundians.e04e5455e16b3d2c3bb5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/burgundians.tp.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/burgundians.tp.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/burgundians.tp.0397f7294a76834a730e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/burmese.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/burmese.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/burmese.f82d50396e5c47cfabf0.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/burmese.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/burmese.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/burmese.tp.e8a48f30b7cdb11a8dff.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/byzantines.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/byzantines.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/byzantines.7ee2f1b41525b99be4e0.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/byzantines.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/byzantines.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/byzantines.tp.55d7968a9874065b7e27.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/celts.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/celts.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/celts.c253d13d70271703ec0d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/celts.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/celts.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/celts.tp.4e8fa4f331c94e11890d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/chinese.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/chinese.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/chinese.2d2f00061b040c2de09c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/chinese.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/chinese.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/chinese.tp.84501b1499c45c32f416.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/cumans.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/cumans.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/cumans.54d0aa80000e1ac0d406.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/cumans.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/cumans.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/cumans.tp.f7f2a96507d58665a960.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/dravidians.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/dravidians.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/dravidians.0325136986c7ff6fa9c8.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/dravidians.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/dravidians.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/dravidians.tp.b4e6b9f1beb3dbe3a604.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/ethiopians.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/ethiopians.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/ethiopians.604e09200e529873cca9.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/ethiopians.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/ethiopians.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/ethiopians.tp.ed81ad17b308c59af207.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/franks.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/franks.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/franks.90291a47b830373e6821.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/franks.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/franks.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/franks.tp.05a513362c3cca542ab5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/goths.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/goths.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/goths.91470ea50f72e184ac53.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/goths.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/goths.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/goths.tp.9097b9db07579e874b19.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/gurjaras.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/gurjaras.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/gurjaras.3ea61497d6585c277a8c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/gurjaras.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/gurjaras.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/gurjaras.tp.bff7e4f38f55b55bd850.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/hindustanis.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/hindustanis.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/hindustanis.01db84d9e9300394e18c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/hindustanis.tp.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/hindustanis.tp.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/hindustanis.tp.a74d5c37aa19c06717cf.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/huns.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/huns.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/huns.2d1011adfa486bbf6df3.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/huns.tp.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/huns.tp.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/huns.tp.1fda850f925f25d852ce.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/incas.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/incas.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/incas.a38e13016ac65147d895.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/incas.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/incas.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/incas.tp.20bff38a6f3c48ec9b1a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/indians.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/indians.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/indians.5dc534ba5696e7d09860.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/indians.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/indians.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/indians.tp.e02619d82ed7abed914c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/italians.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/italians.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/italians.3c7413f16a17fa1ed358.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/italians.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/italians.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/italians.tp.c7d711d4363cf01d8dc6.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/japanese.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/japanese.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/japanese.c469c6a292eb93a37c8e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/japanese.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/japanese.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/japanese.tp.bdadf124b677d9e84123.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/khmer.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/khmer.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/khmer.73be83026f0c0af56a04.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/khmer.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/khmer.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/khmer.tp.72a6f784a8cb13268167.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/koreans.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/koreans.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/koreans.f3dbd9fd2c6070e45ab7.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/koreans.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/koreans.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/koreans.tp.b913364a71edc64a43f5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/lithuanians.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/lithuanians.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/lithuanians.354d9e5266ba93b30980.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/lithuanians.tp.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/lithuanians.tp.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/lithuanians.tp.2a897b497e4fe355de41.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/magyars.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/magyars.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/magyars.dc4583004faa77cf1e8c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/magyars.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/magyars.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/magyars.tp.6d0a433ecce4210defc7.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/malay.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/malay.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/malay.c80aa06560fe47fe6b2d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/malay.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/malay.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/malay.tp.94254d5590249e21b40d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/malians.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/malians.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/malians.c928e7c143bfaae607b8.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/malians.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/malians.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/malians.tp.71cb8fa04107ceaf83e5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/mayans.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/mayans.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/mayans.1f52f6bdd129dc88ea95.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/mayans.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/mayans.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/mayans.tp.63edee04e30531f729f6.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/mongols.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/mongols.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/mongols.47520fcd60a3af3db974.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/mongols.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/mongols.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/mongols.tp.a49cc408d24ce906e983.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/persians.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/persians.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/persians.1b6f0ac263d6f87852b2.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/persians.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/persians.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/persians.tp.a3cf9b711cd8d789a681.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/poles.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/poles.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/poles.f202da4b4d9f2b0b0e14.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/poles.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/poles.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/poles.tp.a10da2a07fdf14f5acb6.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/portuguese.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/portuguese.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/portuguese.278226df426c2ac48dce.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/portuguese.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/portuguese.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/portuguese.tp.db3f5ac56b445f6dabe4.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/romans.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/romans.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/romans.565cc16f8d2f505b4455.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/romans.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/romans.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/romans.tp.ce19a75475db88a8102e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/saracens.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/saracens.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/saracens.3b5391330965d9a36c08.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/saracens.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/saracens.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/saracens.tp.281574744222893b614e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/sicilians.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/sicilians.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/sicilians.05479eb5f88bb3d3fe07.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/sicilians.tp.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/sicilians.tp.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/sicilians.tp.cb87ee247b81f9f4952a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/slavs.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/slavs.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/slavs.36be54f28c4bff15a8fe.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/slavs.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/slavs.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/slavs.tp.a3e8463cec4de61e4836.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/spanish.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/spanish.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/spanish.86ed4328c15269f1ab73.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/spanish.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/spanish.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/spanish.tp.814d47c42faed4a4514e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/tatars.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/tatars.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/tatars.d46a9529e03cdc0c4f5a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/tatars.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/tatars.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/tatars.tp.25529e47647046b5dea5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/teutons.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/teutons.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/teutons.bc9963c5eb4de61a0c46.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/teutons.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/teutons.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/teutons.tp.59ac683eb819b24c58f5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/turks.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/turks.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/turks.4b2694e655b7ca1a90f3.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/turks.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/turks.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/turks.tp.0245f589b0e309093278.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/vietnamese.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/vietnamese.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/vietnamese.7174e205fb8b8783ee2b.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/vietnamese.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/vietnamese.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/vietnamese.tp.b92f46c65d7f54c67d85.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/vikings.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/vikings.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/vikings.fe83a5c1655e701da45e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/vikings.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/vikings.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/vikings.tp.1634a6554348ebb6e26c.png";

/***/ }),

/***/ "./src/components/civ-images/icons/aztecs.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/aztecs.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/aztecs.260fe25c924f8d9b9ca1.png";

/***/ }),

/***/ "./src/components/civ-images/icons/bengalis.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/bengalis.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/bengalis.f0e8b9eb93b6e74a7eb6.png";

/***/ }),

/***/ "./src/components/civ-images/icons/berbers.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/berbers.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/berbers.e3660465328a6670b06b.png";

/***/ }),

/***/ "./src/components/civ-images/icons/bohemians.png":
/*!*******************************************************!*\
  !*** ./src/components/civ-images/icons/bohemians.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/bohemians.8e0ec595b57db00e9ad5.png";

/***/ }),

/***/ "./src/components/civ-images/icons/britons.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/britons.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/britons.493a8372f974df940629.png";

/***/ }),

/***/ "./src/components/civ-images/icons/bulgarians.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/bulgarians.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/bulgarians.26c485acecdf84f358ea.png";

/***/ }),

/***/ "./src/components/civ-images/icons/burgundians.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/icons/burgundians.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/burgundians.499f624fc5530752f602.png";

/***/ }),

/***/ "./src/components/civ-images/icons/burmese.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/burmese.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/burmese.9dc8ae6d6306a365ed07.png";

/***/ }),

/***/ "./src/components/civ-images/icons/byzantines.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/byzantines.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/byzantines.77661876a69f2e9d8be5.png";

/***/ }),

/***/ "./src/components/civ-images/icons/celts.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/celts.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/celts.7c3dba45dfe659a39381.png";

/***/ }),

/***/ "./src/components/civ-images/icons/chinese.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/chinese.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/chinese.feaee73a189404920a17.png";

/***/ }),

/***/ "./src/components/civ-images/icons/cumans.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/cumans.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/cumans.1535bafe9d078d3ba5f0.png";

/***/ }),

/***/ "./src/components/civ-images/icons/dravidians.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/dravidians.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/dravidians.2f12158e2d797638d8ce.png";

/***/ }),

/***/ "./src/components/civ-images/icons/ethiopians.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/ethiopians.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/ethiopians.1f191d5c9e29e23ca1d7.png";

/***/ }),

/***/ "./src/components/civ-images/icons/franks.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/franks.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/franks.36557b7b31d51e01af00.png";

/***/ }),

/***/ "./src/components/civ-images/icons/goths.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/goths.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/goths.dfaa7b8cab48e90c7874.png";

/***/ }),

/***/ "./src/components/civ-images/icons/gurjaras.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/gurjaras.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/gurjaras.68a45f5fbbcd689c5586.png";

/***/ }),

/***/ "./src/components/civ-images/icons/hindustanis.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/icons/hindustanis.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/hindustanis.5d5779d3bcb4c51cc5ec.png";

/***/ }),

/***/ "./src/components/civ-images/icons/huns.png":
/*!**************************************************!*\
  !*** ./src/components/civ-images/icons/huns.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/huns.a0d30162979372cffc42.png";

/***/ }),

/***/ "./src/components/civ-images/icons/incas.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/incas.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/incas.a4cba3247a7824ae28c9.png";

/***/ }),

/***/ "./src/components/civ-images/icons/italians.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/italians.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/italians.cfabbdff777972c931fa.png";

/***/ }),

/***/ "./src/components/civ-images/icons/japanese.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/japanese.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/japanese.ae860f727bc0b01fcc0b.png";

/***/ }),

/***/ "./src/components/civ-images/icons/khmer.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/khmer.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/khmer.124dde1af3eae7d9ec37.png";

/***/ }),

/***/ "./src/components/civ-images/icons/koreans.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/koreans.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/koreans.ab0bf2760e21dd1e42a1.png";

/***/ }),

/***/ "./src/components/civ-images/icons/lithuanians.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/icons/lithuanians.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/lithuanians.adabee2b25f1578dafe3.png";

/***/ }),

/***/ "./src/components/civ-images/icons/magyars.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/magyars.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/magyars.ded7dc5bb0eedbe6749e.png";

/***/ }),

/***/ "./src/components/civ-images/icons/malay.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/malay.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/malay.e27b42ba26f6ad53c0ba.png";

/***/ }),

/***/ "./src/components/civ-images/icons/malians.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/malians.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/malians.f95dff6e1da180e8eedc.png";

/***/ }),

/***/ "./src/components/civ-images/icons/mayans.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/mayans.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/mayans.7ef56629fc2d27cee7a5.png";

/***/ }),

/***/ "./src/components/civ-images/icons/mongols.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/mongols.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/mongols.0db40b5bb3e62369ab25.png";

/***/ }),

/***/ "./src/components/civ-images/icons/persians.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/persians.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/persians.0dd804e5be1c4502d8f5.png";

/***/ }),

/***/ "./src/components/civ-images/icons/poles.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/poles.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/poles.4299de69666d2151b385.png";

/***/ }),

/***/ "./src/components/civ-images/icons/portuguese.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/portuguese.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/portuguese.c9605ca0aede4443bafd.png";

/***/ }),

/***/ "./src/components/civ-images/icons/romans.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/romans.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/romans.d36c52464b5009b7b121.png";

/***/ }),

/***/ "./src/components/civ-images/icons/saracens.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/saracens.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/saracens.011c595876226133f87b.png";

/***/ }),

/***/ "./src/components/civ-images/icons/sicilians.png":
/*!*******************************************************!*\
  !*** ./src/components/civ-images/icons/sicilians.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/sicilians.0cea8a2c133c16c2a897.png";

/***/ }),

/***/ "./src/components/civ-images/icons/slavs.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/slavs.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/slavs.9d071d0d219d131e43a9.png";

/***/ }),

/***/ "./src/components/civ-images/icons/spanish.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/spanish.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/spanish.3a71e399a83bc8e48f93.png";

/***/ }),

/***/ "./src/components/civ-images/icons/tatars.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/tatars.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/tatars.0f0dfe10175791135efc.png";

/***/ }),

/***/ "./src/components/civ-images/icons/teutons.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/teutons.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/teutons.7796320dc217c93f7f11.png";

/***/ }),

/***/ "./src/components/civ-images/icons/turks.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/turks.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/turks.5580b3d06ebce613167c.png";

/***/ }),

/***/ "./src/components/civ-images/icons/vietnamese.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/vietnamese.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/vietnamese.6f981cc2e0d03491ad8d.png";

/***/ }),

/***/ "./src/components/civ-images/icons/vikings.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/vikings.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/vikings.b04825623a2ec73552a7.png";

/***/ }),

/***/ "./src/components/civ-images/misc/veto.png":
/*!*************************************************!*\
  !*** ./src/components/civ-images/misc/veto.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/misc/veto.c781290f5c22243ff027.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/arbalester.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/arbalester.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/arbalester.88b7299e05a27698d944.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/architecture.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/architecture.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/architecture.0bf65e88d4826ff90bda.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/arrowslits.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/arrowslits.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/arrowslits.dbe3eb14e55d43b8751d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/arson.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/arson.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/arson.be97f5d5f162129ea733.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/atonement.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/atonement.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/atonement.4423a48124c2ba66a9e7.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/ballistics.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/ballistics.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/ballistics.a8b9547e078b04ebf12b.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/blast furnace.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/blast furnace.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/blast furnace.240fba3f710e7bd8a6ad.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/block printing.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/block printing.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/block printing.134f4f03e2e1c2ba1cfb.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bloodlines.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bloodlines.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bloodlines.1aedcf05b25ce758e4cf.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bodkin arrow.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bodkin arrow.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bodkin arrow.814b45805a1851544599.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bombard tower.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bombard tower.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bombard tower.5bd7b24afcbc5e145c18.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bow saw.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bow saw.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bow saw.820f19703b6cc2578a2e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bracer.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bracer.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bracer.135e545aa6e429b1411d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/cannon galleon.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/cannon galleon.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/cannon galleon.b9f339198d6ceb91205c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/capped ram.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/capped ram.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/capped ram.72e362b809570a16b491.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/careening.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/careening.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/careening.dc9ddd1075527ad106fb.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/castle.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/castle.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/castle.ad050d2bb4d29bfc33b9.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/castle.tp.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/castle.tp.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/castle.tp.fc6588af10fd6d44bfcb.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/cavalier.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/cavalier.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/cavalier.0c90f42af1b625a59158.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/chain barding armor.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/chain barding armor.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/chain barding armor.b2f69bac849df2c20663.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/chain mail armor.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/chain mail armor.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/chain mail armor.f48ac5990e39cfad1258.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/champion.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/champion.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/champion.cc29c7d78ac1b0235052.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/chemistry.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/chemistry.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/chemistry.b59b4564a9e12f059e96.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/crop rotation.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/crop rotation.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/crop rotation.9dbd271799c4ea4c09b2.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/crossbowman.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/crossbowman.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/crossbowman.a1d2502c9396f207d20d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/dark.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/dark.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/dark.0f2de22c32a171ea3846.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/dark.tp.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/dark.tp.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/dark.tp.f0eb19d38e1b57f51934.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/double-bit axe.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/double-bit axe.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/double-bit axe.3e0d774d7521ad6dae8f.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/dry dock.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/dry dock.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/dry dock.45ad4edc4ff3c17b3a54.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/eagle warrior.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/eagle warrior.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/eagle warrior.41ca167028502b1731b8.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite battle elephant.png":
/*!***************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite battle elephant.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite battle elephant.73efd5d3c4853209b454.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite cannon galleon.png":
/*!**************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite cannon galleon.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite cannon galleon.9e319c0d4d8893335818.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite eagle warrior.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite eagle warrior.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite eagle warrior.cb0767c5a9edce499afe.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite skirmisher.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite skirmisher.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite skirmisher.87431f28e149a81bae79.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite steppe lancer.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite steppe lancer.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite steppe lancer.bedf1b6035a81fd5185b.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite unique unit.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite unique unit.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite unique unit.70fd78b945770f48b2aa.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/faith.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/faith.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/faith.20e77f223c4316757c7e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/fast fire ship.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/fast fire ship.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/fast fire ship.0c643d43f500d4a6a9b8.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/fervor.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/fervor.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/fervor.d1eb7a23b61a58bcb36d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/feudal.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/feudal.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/feudal.c204290755f60e8863a9.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/feudal.tp.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/feudal.tp.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/feudal.tp.45a4f0a4784969fa0171.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/fletching.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/fletching.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/fletching.b7df2abc285c55f5222c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/forging.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/forging.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/forging.65a1cda14f4aa43f1a19.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/fortified wall.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/fortified wall.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/fortified wall.119c26558dfe9ff25129.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/galleon.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/galleon.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/galleon.85589cf340c21597e162.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/gillnets.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/gillnets.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/gillnets.1ac2fea01de3922972d3.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/gold mining.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/gold mining.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/gold mining.7143053ba5e39c24426e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/gold shaft mining.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/gold shaft mining.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/gold shaft mining.b5a8839253603300536c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/guard tower.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/guard tower.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/guard tower.08c476d41917cb43b7ac.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/halberdier.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/halberdier.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/halberdier.d19e5771fa0f12e55b8a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/hand cart.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/hand cart.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/hand cart.14149a4497982b35dc0d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heated shot.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heated shot.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heated shot.8ddb539c866c20fdb888.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy camel.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy camel.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy camel.0cceca8375641a65fc2e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy cav archer.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy cav archer.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy cav archer.b1dcc50c5e8815789cae.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy demo ship.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy demo ship.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy demo ship.db26f3381e44d25afc36.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy plow.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy plow.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy plow.d0cbcc697e74fe000ad4.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy scorpion.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy scorpion.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy scorpion.a94f15029dd90e7d96bd.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/herbal medicine.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/herbal medicine.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/herbal medicine.6f96326b66ac91ee7ab7.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heresy.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heresy.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heresy.241d6082cac00c643ad0.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/horse collar.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/horse collar.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/horse collar.2f0368f51b3290050187.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/husbandry.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/husbandry.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/husbandry.47637489becfc46b92dc.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/hussar.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/hussar.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/hussar.aab497f859c325cf709f.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/illumination.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/illumination.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/illumination.0e931b6f2d166a1553fd.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/imperial camel.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/imperial camel.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/imperial camel.4256e020086104f09891.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/imperial skirmisher.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/imperial skirmisher.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/imperial skirmisher.4f601c6ce9b48869761b.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/imperial.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/imperial.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/imperial.b21a5c3d35215d9602ad.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/imperial.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/imperial.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/imperial.tp.06ffc7098ea741ea4fd9.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/iron casting.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/iron casting.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/iron casting.056d1eeda94409ab37a5.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/keep.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/keep.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/keep.9e115c8320cef284ef06.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/leather archer armor.png":
/*!**************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/leather archer armor.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/leather archer armor.99f642630150911a442a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/light cavalry.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/light cavalry.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/light cavalry.a12aebaf7675be6c968b.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/long swordsman.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/long swordsman.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/long swordsman.941f450f86d42a893200.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/man-at-arms.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/man-at-arms.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/man-at-arms.bb2a888f78d10643d16e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/masonry.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/masonry.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/masonry.a0298bf40b76771a3736.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/murder holes.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/murder holes.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/murder holes.88ac499d0643d1452113.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/onager.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/onager.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/onager.3d1d0295d4552b7b508c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/padded archer armor.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/padded archer armor.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/padded archer armor.41882387356356c0ae9d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/paladin.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/paladin.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/paladin.df13458c6a09ee6d262d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/parthian tactics.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/parthian tactics.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/parthian tactics.47ba986ba007d0482ed5.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/pikeman.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/pikeman.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/pikeman.dd8c3549234a236d1f30.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/plate barding armor.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/plate barding armor.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/plate barding armor.af72c75df01ce86f3866.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/plate mail armor.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/plate mail armor.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/plate mail armor.3c9b873b2f3cc8b2caf4.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/redemption.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/redemption.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/redemption.a1c09cf514a0610ad50f.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/ring archer armor.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/ring archer armor.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/ring archer armor.646c55e9e8cb52c970a1.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/sanctity.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/sanctity.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/sanctity.894f4f2873c51c8f7bfa.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/scale barding armor.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/scale barding armor.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/scale barding armor.7f643a78cc43718a67b1.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/scale mail armor.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/scale mail armor.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/scale mail armor.61a8afd506b1d620ff81.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/shipwright.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/shipwright.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/shipwright.2b39ba1da4aeab2cc947.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/siege engineers.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/siege engineers.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/siege engineers.24b2b76a83de849191e1.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/siege onager.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/siege onager.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/siege onager.daaab0da05a74fa6ef8c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/siege ram.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/siege ram.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/siege ram.aa42c4186f13802234ba.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/squires.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/squires.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/squires.f617a1816da8b67b011a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/stone mining.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/stone mining.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/stone mining.3358e148963630543917.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/stone shaft mining.png":
/*!************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/stone shaft mining.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/stone shaft mining.8b3fc3334d7ba457c116.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/supplies.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/supplies.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/supplies.42ed09618a27cfdf8c3c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/theocracy.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/theocracy.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/theocracy.8b817750371c09f75ba2.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/thumb ring.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/thumb ring.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/thumb ring.2eb23ad1e360a4bf18f2.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/tracking.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/tracking.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/tracking.088abf33aa5a4216510c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/treadmill crane.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/treadmill crane.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/treadmill crane.1168d1e26d151c7f225a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/two-handed swordsman.png":
/*!**************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/two-handed swordsman.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/two-handed swordsman.d1ab1b2d9b6e600217ef.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/two-man saw.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/two-man saw.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/two-man saw.03fb02f29eda0b4481c6.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/unique tech castle.png":
/*!************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/unique tech castle.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/unique tech castle.cbf113e02d17ad98688a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/unique tech imperial.png":
/*!**************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/unique tech imperial.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/unique tech imperial.333c2d75dd5cf637bdd7.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/war galley.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/war galley.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/war galley.33f94ca2a7f3585b52b8.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/wheelbarrow.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/wheelbarrow.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/wheelbarrow.0e7f4de3c9eb543cf5c4.png";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/aztecs.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/aztecs.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/aztecs.82e5d549dc2a8d2664f8.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/bengalis.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/bengalis.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/bengalis.aee4981e1446c4d03096.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/berbers.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/berbers.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/berbers.67b264a2cf6659622f40.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/bohemians.mp3":
/*!********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/bohemians.mp3 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/bohemians.769efca6cf46a420a829.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/britons.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/britons.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/britons.a0d8b197fff993f95854.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/bulgarians.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/bulgarians.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/bulgarians.d08915e33dafec4d2d51.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/burgundians.mp3":
/*!**********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/burgundians.mp3 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/burgundians.f4b14ac244d9aadb3a86.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/burmese.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/burmese.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/burmese.ce52fe0701777425840e.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/byzantines.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/byzantines.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/byzantines.419d6cc495af2529aabe.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/celts.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/celts.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/celts.30bb68b11fbb5b268d16.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/chinese.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/chinese.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/chinese.4b1a0d7bb803d0286618.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/cumans.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/cumans.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/cumans.26bfde7ec9f7d757f217.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/dravidians.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/dravidians.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/dravidians.433473dcc214750a3e06.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/ethiopians.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/ethiopians.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/ethiopians.8b75bfd1d0eeef60c431.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/franks.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/franks.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/franks.3ad1bee4ef2c028dba4d.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/goths.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/goths.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/goths.0f6e10c68c7286bae6a7.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/gurjaras.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/gurjaras.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/gurjaras.e52ee58df9ef08a4c94c.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/hindustanis.mp3":
/*!**********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/hindustanis.mp3 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/hindustanis.e4f92498343d57bae000.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/huns.mp3":
/*!***************************************************!*\
  !*** ./src/components/civ-sounds/sounds/huns.mp3 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/huns.83137caa970fdae37870.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/incas.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/incas.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/incas.291d95a991c618214904.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/italians.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/italians.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/italians.3bc94b864a63b1ae5ab3.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/japanese.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/japanese.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/japanese.1e380310bac2376a1a49.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/khmer.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/khmer.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/khmer.a7ca56d013803596992a.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/koreans.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/koreans.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/koreans.a094d5f51e7707090aa6.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/lithuanians.mp3":
/*!**********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/lithuanians.mp3 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/lithuanians.d0318c0c912ea22bd8c7.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/magyars.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/magyars.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/magyars.f340a5fb315bbe5feb0a.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/malay.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/malay.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/malay.b492bdd02fd6ec614a56.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/malians.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/malians.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/malians.bba8eed47db2883bc50f.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/mayans.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/mayans.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/mayans.5cbaef8ed50beb5a01ed.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/mongols.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/mongols.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/mongols.fe42dcdd14359fa3906e.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/persians.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/persians.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/persians.ec053310db4d968d8b2f.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/poles.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/poles.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/poles.deef6055dd382097aaa1.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/portuguese.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/portuguese.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/portuguese.d8f81ad93b20f7dc0708.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/romans.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/romans.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/romans.02558870fbc69bb0120e.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/saracens.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/saracens.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/saracens.d3001b6b4ecc1f79a938.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/sicilians.mp3":
/*!********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/sicilians.mp3 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/sicilians.89581727e3d7c7ebf18c.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/slavs.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/slavs.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/slavs.67b374302ea9b2b05d22.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/spanish.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/spanish.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/spanish.7ab22c2773324d128a07.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/tatars.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/tatars.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/tatars.32e8be53ca4d2898f1f2.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/teutons.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/teutons.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/teutons.dda96f414a66634a429b.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/turks.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/turks.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/turks.41143215027b4921bc70.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/vietnamese.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/vietnamese.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/vietnamese.dd993a08d24f7a8f4113.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/vikings.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/vikings.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/vikings.9b746d7dbd61392adae8.mp3";

/***/ }),

/***/ "./src/components/civ-tech-overlay/images/paper.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-tech-overlay/images/paper.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-tech-overlay/images/paper.d06046c4b206e0d17be3.png";

/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/obs-websocket-js/dist/json.modern.js":
/*!***********************************************************!*\
  !*** ./node_modules/obs-websocket-js/dist/json.modern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventSubscription: () => (/* binding */ EventSubscription),
/* harmony export */   OBSWebSocketError: () => (/* binding */ OBSWebSocketError),
/* harmony export */   RequestBatchExecutionType: () => (/* binding */ RequestBatchExecutionType),
/* harmony export */   WebSocketOpCode: () => (/* binding */ WebSocketOpCode),
/* harmony export */   "default": () => (/* binding */ OBSWebSocket)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/obs-websocket-js/node_modules/debug/src/browser.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/obs-websocket-js/node_modules/eventemitter3/index.mjs");
/* harmony import */ var isomorphic_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-ws */ "./node_modules/isomorphic-ws/browser.js");
/* harmony import */ var crypto_js_sha256_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js/sha256.js */ "./node_modules/crypto-js/sha256.js");
/* harmony import */ var crypto_js_enc_base64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js/enc-base64.js */ "./node_modules/crypto-js/enc-base64.js");






function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var WebSocketOpCode;
(function (WebSocketOpCode) {
  /**
   * The initial message sent by obs-websocket to newly connected clients.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["Hello"] = 0] = "Hello";
  /**
   * The message sent by a newly connected client to obs-websocket in response to a `Hello`.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["Identify"] = 1] = "Identify";
  /**
   * The response sent by obs-websocket to a client after it has successfully identified with obs-websocket.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["Identified"] = 2] = "Identified";
  /**
   * The message sent by an already-identified client to update identification parameters.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["Reidentify"] = 3] = "Reidentify";
  /**
   * The message sent by obs-websocket containing an event payload.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["Event"] = 5] = "Event";
  /**
   * The message sent by a client to obs-websocket to perform a request.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["Request"] = 6] = "Request";
  /**
   * The message sent by obs-websocket in response to a particular request from a client.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["RequestResponse"] = 7] = "RequestResponse";
  /**
   * The message sent by a client to obs-websocket to perform a batch of requests.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["RequestBatch"] = 8] = "RequestBatch";
  /**
   * The message sent by obs-websocket in response to a particular batch of requests from a client.
   *
   * Initial OBS Version: 5.0.0
   */
  WebSocketOpCode[WebSocketOpCode["RequestBatchResponse"] = 9] = "RequestBatchResponse";
})(WebSocketOpCode || (WebSocketOpCode = {}));
/* eslint-disable no-bitwise, @typescript-eslint/prefer-literal-enum-member */
var EventSubscription;
(function (EventSubscription) {
  /**
   * Subcription value used to disable all events.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["None"] = 0] = "None";
  /**
   * Subscription value to receive events in the `General` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["General"] = 1] = "General";
  /**
   * Subscription value to receive events in the `Config` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["Config"] = 2] = "Config";
  /**
   * Subscription value to receive events in the `Scenes` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["Scenes"] = 4] = "Scenes";
  /**
   * Subscription value to receive events in the `Inputs` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["Inputs"] = 8] = "Inputs";
  /**
   * Subscription value to receive events in the `Transitions` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["Transitions"] = 16] = "Transitions";
  /**
   * Subscription value to receive events in the `Filters` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["Filters"] = 32] = "Filters";
  /**
   * Subscription value to receive events in the `Outputs` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["Outputs"] = 64] = "Outputs";
  /**
   * Subscription value to receive events in the `SceneItems` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["SceneItems"] = 128] = "SceneItems";
  /**
   * Subscription value to receive events in the `MediaInputs` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["MediaInputs"] = 256] = "MediaInputs";
  /**
   * Subscription value to receive the `VendorEvent` event.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["Vendors"] = 512] = "Vendors";
  /**
   * Subscription value to receive events in the `Ui` category.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["Ui"] = 1024] = "Ui";
  /**
   * Helper to receive all non-high-volume events.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["All"] = 2047] = "All";
  /**
   * Subscription value to receive the `InputVolumeMeters` high-volume event.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["InputVolumeMeters"] = 65536] = "InputVolumeMeters";
  /**
   * Subscription value to receive the `InputActiveStateChanged` high-volume event.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["InputActiveStateChanged"] = 131072] = "InputActiveStateChanged";
  /**
   * Subscription value to receive the `InputShowStateChanged` high-volume event.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["InputShowStateChanged"] = 262144] = "InputShowStateChanged";
  /**
   * Subscription value to receive the `SceneItemTransformChanged` high-volume event.
   *
   * Initial OBS Version: 5.0.0
   */
  EventSubscription[EventSubscription["SceneItemTransformChanged"] = 524288] = "SceneItemTransformChanged";
})(EventSubscription || (EventSubscription = {}));
/* eslint-enable no-bitwise, @typescript-eslint/prefer-literal-enum-member */
var RequestBatchExecutionType;
(function (RequestBatchExecutionType) {
  /**
   * Not a request batch.
   *
   * Initial OBS Version: 5.0.0
   */
  RequestBatchExecutionType[RequestBatchExecutionType["None"] = -1] = "None";
  /**
   * A request batch which processes all requests serially, as fast as possible.
   *
   * Note: To introduce artificial delay, use the `Sleep` request and the `sleepMillis` request field.
   *
   * Initial OBS Version: 5.0.0
   */
  RequestBatchExecutionType[RequestBatchExecutionType["SerialRealtime"] = 0] = "SerialRealtime";
  /**
   * A request batch type which processes all requests serially, in sync with the graphics thread. Designed to provide high accuracy for animations.
   *
   * Note: To introduce artificial delay, use the `Sleep` request and the `sleepFrames` request field.
   *
   * Initial OBS Version: 5.0.0
   */
  RequestBatchExecutionType[RequestBatchExecutionType["SerialFrame"] = 1] = "SerialFrame";
  /**
   * A request batch type which processes all requests using all available threads in the thread pool.
   *
   * Note: This is mainly experimental, and only really shows its colors during requests which require lots of
   * active processing, like `GetSourceScreenshot`.
   *
   * Initial OBS Version: 5.0.0
   */
  RequestBatchExecutionType[RequestBatchExecutionType["Parallel"] = 2] = "Parallel";
})(RequestBatchExecutionType || (RequestBatchExecutionType = {}));

/**
 * SHA256 Hashing.
 * @param  {string} [salt=''] salt.
 * @param  {string} [challenge=''] challenge.
 * @param  {string} msg Message to encode.
 * @returns {string} sha256 encoded string.
 */
function authenticationHashing (salt, challenge, msg) {
  const hash = crypto_js_enc_base64_js__WEBPACK_IMPORTED_MODULE_4__.stringify(crypto_js_sha256_js__WEBPACK_IMPORTED_MODULE_3__(msg + salt));
  return crypto_js_enc_base64_js__WEBPACK_IMPORTED_MODULE_4__.stringify(crypto_js_sha256_js__WEBPACK_IMPORTED_MODULE_3__(hash + challenge));
}

const _excluded = ["authentication", "rpcVersion"];
const debug = debug__WEBPACK_IMPORTED_MODULE_0__('obs-websocket-js');
class OBSWebSocketError extends Error {
  constructor(code, message) {
    super(message);
    this.code = void 0;
    this.code = code;
  }
}
class BaseOBSWebSocket extends eventemitter3__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
  constructor(...args) {
    super(...args);
    this._identified = false;
    this.internalListeners = new eventemitter3__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.socket = void 0;
  }
  static generateMessageId() {
    return String(BaseOBSWebSocket.requestCounter++);
  }
  get identified() {
    return this._identified;
  }
  /**
   * Connect to an obs-websocket server
   * @param url Websocket server to connect to (including ws:// or wss:// protocol)
   * @param password Password
   * @param identificationParams Data for Identify event
   * @returns Hello & Identified messages data (combined)
   */
  async connect(url = 'ws://127.0.0.1:4455', password, identificationParams = {}) {
    var _this = this;
    if (this.socket) {
      await this.disconnect();
    }
    try {
      const connectionClosedPromise = this.internalEventPromise('ConnectionClosed');
      const connectionErrorPromise = this.internalEventPromise('ConnectionError');
      return await Promise.race([async function () {
        const hello = await _this.createConnection(url);
        _this.emit('Hello', hello);
        return _this.identify(hello, password, identificationParams);
      }(),
      // Choose the best promise for connection error/close
      // In browser connection close has close code + reason,
      // while in node error event has these
      new Promise((resolve, reject) => {
        void connectionErrorPromise.then(e => {
          if (e.message) {
            reject(e);
          }
        });
        void connectionClosedPromise.then(e => {
          reject(e);
        });
      })]);
    } catch (error) {
      await this.disconnect();
      throw error;
    }
  }
  /**
   * Disconnect from obs-websocket server
   */
  async disconnect() {
    if (!this.socket || this.socket.readyState === isomorphic_ws__WEBPACK_IMPORTED_MODULE_2__["default"].CLOSED) {
      return;
    }
    const connectionClosedPromise = this.internalEventPromise('ConnectionClosed');
    this.socket.close();
    await connectionClosedPromise;
  }
  /**
   * Update session parameters
   * @param data Reidentify data
   * @returns Identified message data
   */
  async reidentify(data) {
    const identifiedPromise = this.internalEventPromise(`op:${WebSocketOpCode.Identified}`);
    await this.message(WebSocketOpCode.Reidentify, data);
    return identifiedPromise;
  }
  /**
   * Send a request to obs-websocket
   * @param requestType Request name
   * @param requestData Request data
   * @returns Request response
   */
  async call(requestType, requestData) {
    const requestId = BaseOBSWebSocket.generateMessageId();
    const responsePromise = this.internalEventPromise(`res:${requestId}`);
    await this.message(WebSocketOpCode.Request, {
      requestId,
      requestType,
      requestData
    });
    const {
      requestStatus,
      responseData
    } = await responsePromise;
    if (!requestStatus.result) {
      throw new OBSWebSocketError(requestStatus.code, requestStatus.comment);
    }
    return responseData;
  }
  /**
   * Send a batch request to obs-websocket
   * @param requests Array of Request objects (type and data)
   * @param options A set of options for how the batch will be executed
   * @param options.executionType The mode of execution obs-websocket will run the batch in
   * @param options.haltOnFailure Whether obs-websocket should stop executing the batch if one request fails
   * @returns RequestBatch response
   */
  async callBatch(requests, options = {}) {
    const requestId = BaseOBSWebSocket.generateMessageId();
    const responsePromise = this.internalEventPromise(`res:${requestId}`);
    await this.message(WebSocketOpCode.RequestBatch, _extends({
      requestId,
      requests
    }, options));
    const {
      results
    } = await responsePromise;
    return results;
  }
  /**
   * Cleanup from socket disconnection
   */
  cleanup() {
    if (!this.socket) {
      return;
    }
    this.socket.onopen = null;
    this.socket.onmessage = null;
    this.socket.onerror = null;
    this.socket.onclose = null;
    this.socket = undefined;
    this._identified = false;
    // Cleanup leftovers
    this.internalListeners.removeAllListeners();
  }
  /**
   * Create connection to specified obs-websocket server
   *
   * @private
   * @param url Websocket address
   * @returns Promise for hello data
   */
  async createConnection(url) {
    var _this$socket;
    const connectionOpenedPromise = this.internalEventPromise('ConnectionOpened');
    const helloPromise = this.internalEventPromise(`op:${WebSocketOpCode.Hello}`);
    this.socket = new isomorphic_ws__WEBPACK_IMPORTED_MODULE_2__["default"](url, this.protocol);
    this.socket.onopen = this.onOpen.bind(this);
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onerror = this.onError.bind(this);
    this.socket.onclose = this.onClose.bind(this);
    await connectionOpenedPromise;
    const protocol = (_this$socket = this.socket) == null ? void 0 : _this$socket.protocol;
    // Browsers don't autoclose on missing/wrong protocol
    if (!protocol) {
      throw new OBSWebSocketError(-1, 'Server sent no subprotocol');
    }
    if (protocol !== this.protocol) {
      throw new OBSWebSocketError(-1, 'Server sent an invalid subprotocol');
    }
    return helloPromise;
  }
  /**
   * Send identify message
   *
   * @private
   * @param hello Hello message data
   * @param password Password
   * @param identificationParams Identification params
   * @returns Hello & Identified messages data (combined)
   */
  async identify(_ref, password, identificationParams = {}) {
    let {
        authentication,
        rpcVersion
      } = _ref,
      helloRest = _objectWithoutPropertiesLoose(_ref, _excluded);
    // Set rpcVersion if unset
    const data = _extends({
      rpcVersion
    }, identificationParams);
    if (authentication && password) {
      data.authentication = authenticationHashing(authentication.salt, authentication.challenge, password);
    }
    const identifiedPromise = this.internalEventPromise(`op:${WebSocketOpCode.Identified}`);
    await this.message(WebSocketOpCode.Identify, data);
    const identified = await identifiedPromise;
    this._identified = true;
    this.emit('Identified', identified);
    return _extends({
      rpcVersion
    }, helloRest, identified);
  }
  /**
   * Send message to obs-websocket
   *
   * @private
   * @param op WebSocketOpCode
   * @param d Message data
   */
  async message(op, d) {
    if (!this.socket) {
      throw new Error('Not connected');
    }
    if (!this.identified && op !== 1) {
      throw new Error('Socket not identified');
    }
    const encoded = await this.encodeMessage({
      op,
      d
    });
    this.socket.send(encoded);
  }
  /**
   * Create a promise to listen for an event on internal listener
   * (will be cleaned up on disconnect)
   *
   * @private
   * @param event Event to listen to
   * @returns Event data
   */
  async internalEventPromise(event) {
    return new Promise(resolve => {
      this.internalListeners.once(event, resolve);
    });
  }
  /**
   * Websocket open event listener
   *
   * @private
   * @param e Event
   */
  onOpen(e) {
    debug('socket.open');
    this.emit('ConnectionOpened');
    this.internalListeners.emit('ConnectionOpened', e);
  }
  /**
   * Websocket message event listener
   *
   * @private
   * @param e Event
   */
  async onMessage(e) {
    try {
      const {
        op,
        d
      } = await this.decodeMessage(e.data);
      debug('socket.message: %d %j', op, d);
      if (op === undefined || d === undefined) {
        return;
      }
      switch (op) {
        case WebSocketOpCode.Event:
          {
            const {
              eventType,
              eventData
            } = d;
            // @ts-expect-error Typescript just doesn't understand it
            this.emit(eventType, eventData);
            return;
          }
        case WebSocketOpCode.RequestResponse:
        case WebSocketOpCode.RequestBatchResponse:
          {
            const {
              requestId
            } = d;
            this.internalListeners.emit(`res:${requestId}`, d);
            return;
          }
        default:
          this.internalListeners.emit(`op:${op}`, d);
      }
    } catch (error) {
      debug('error handling message: %o', error);
    }
  }
  /**
   * Websocket error event listener
   *
   * @private
   * @param e ErrorEvent
   */
  onError(e) {
    debug('socket.error: %o', e);
    const error = new OBSWebSocketError(-1, e.message);
    this.emit('ConnectionError', error);
    this.internalListeners.emit('ConnectionError', error);
  }
  /**
   * Websocket close event listener
   *
   * @private
   * @param e Event
   */
  onClose(e) {
    debug('socket.close: %s (%d)', e.reason, e.code);
    const error = new OBSWebSocketError(e.code, e.reason);
    this.emit('ConnectionClosed', error);
    this.internalListeners.emit('ConnectionClosed', error);
    this.cleanup();
  }
}
BaseOBSWebSocket.requestCounter = 1;
// https://github.com/developit/microbundle/issues/531#issuecomment-575473024
// Not using ESM export due to it also being detected and breaking rollup based bundlers (vite)
if (typeof exports !== 'undefined') {
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
}

class OBSWebSocket extends BaseOBSWebSocket {
  constructor(...args) {
    super(...args);
    this.protocol = 'obswebsocket.json';
  }
  async encodeMessage(data) {
    return JSON.stringify(data);
  }
  async decodeMessage(data) {
    return JSON.parse(data);
  }
}


//# sourceMappingURL=json.modern.js.map


/***/ }),

/***/ "./node_modules/obs-websocket-js/node_modules/eventemitter3/index.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/obs-websocket-js/node_modules/eventemitter3/index.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventEmitter: () => (/* reexport default export from named module */ _index_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/obs-websocket-js/node_modules/eventemitter3/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/civ-images/civ-data/data.json":
/*!******************************************************!*\
  !*** ./src/components/civ-images/civ-data/data.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"age_names":{"Castle Age":"4203","Dark Age":"4201","Feudal Age":"4202","Imperial Age":"4204"},"civ_helptexts":{"Aztecs":"120164","Bengalis":"120190","Berbers":"120176","Bohemians":"120188","Britons":"120150","Bulgarians":"120181","Burgundians":"120185","Burmese":"120179","Byzantines":"120156","Celts":"120162","Chinese":"120155","Cumans":"120183","Dravidians":"120189","Ethiopians":"120174","Franks":"120151","Goths":"120152","Gurjaras":"120191","Hindustanis":"120169","Huns":"120166","Incas":"120170","Italians":"120168","Japanese":"120154","Khmer":"120177","Koreans":"120167","Lithuanians":"120184","Magyars":"120171","Malay":"120178","Malians":"120175","Mayans":"120165","Mongols":"120161","Persians":"120157","Poles":"120187","Portuguese":"120173","Romans":"120192","Saracens":"120158","Sicilians":"120186","Slavs":"120172","Spanish":"120163","Tatars":"120182","Teutons":"120153","Turks":"120159","Vietnamese":"120180","Vikings":"120160"},"civ_names":{"Aztecs":"10285","Bengalis":"10311","Berbers":"10297","Bohemians":"10309","Britons":"10271","Bulgarians":"10302","Burgundians":"10306","Burmese":"10300","Byzantines":"10277","Celts":"10283","Chinese":"10276","Cumans":"10304","Dravidians":"10310","Ethiopians":"10295","Franks":"10272","Goths":"10273","Gurjaras":"10312","Hindustanis":"10290","Huns":"10287","Incas":"10291","Italians":"10289","Japanese":"10275","Khmer":"10298","Koreans":"10288","Lithuanians":"10305","Magyars":"10292","Malay":"10299","Malians":"10296","Mayans":"10286","Mongols":"10282","Persians":"10278","Poles":"10308","Portuguese":"10294","Romans":"10313","Saracens":"10279","Sicilians":"10307","Slavs":"10293","Spanish":"10284","Tatars":"10303","Teutons":"10274","Turks":"10280","Vietnamese":"10301","Vikings":"10281"},"data":{"buildings":{"12":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":1200,"ID":12,"LanguageHelpId":26135,"LanguageNameId":5135,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":50,"internal_name":"Barracks Age1"},"45":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":150},"GarrisonCapacity":10,"HP":1800,"ID":45,"LanguageHelpId":26144,"LanguageNameId":5144,"LineOfSight":6,"MeleeArmor":0,"MinRange":2,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":35,"internal_name":"DOCK"},"49":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":8,"Class":3},{"Amount":1,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":200},"GarrisonCapacity":10,"HP":1500,"ID":49,"LanguageHelpId":26169,"LanguageNameId":5169,"LineOfSight":6,"MeleeArmor":1,"MinRange":0,"PierceArmor":8,"Range":0,"ReloadTime":0,"TrainTime":40,"internal_name":"SIWS"},"50":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":60},"GarrisonCapacity":0,"HP":480,"ID":50,"LanguageHelpId":26149,"LanguageNameId":5149,"LineOfSight":1,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"ReloadTime":0,"TrainTime":15,"internal_name":"FARM"},"68":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":100},"GarrisonCapacity":0,"HP":600,"ID":68,"LanguageHelpId":26157,"LanguageNameId":5157,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":35,"internal_name":"MILL"},"70":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":-2,"Class":4},{"Amount":7,"Class":3},{"Amount":-2,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":25},"GarrisonCapacity":0,"HP":550,"ID":70,"LanguageHelpId":26344,"LanguageNameId":5344,"LineOfSight":2,"MeleeArmor":-2,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":25,"internal_name":"HOUS"},"71":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":4,"Class":4},{"Amount":6,"Class":3},{"Amount":4,"Class":31}],"Attack":5,"Attacks":[{"Amount":5,"Class":3}],"Cost":{"Stone":100,"Wood":275},"GarrisonCapacity":15,"HP":2400,"ID":71,"LanguageHelpId":26164,"LanguageNameId":5164,"LineOfSight":8,"MeleeArmor":4,"MinRange":0,"PierceArmor":6,"Range":6,"ReloadTime":2,"TrainTime":100,"internal_name":"RTWC2"},"72":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":2,"Class":4},{"Amount":5,"Class":3},{"Amount":0,"Class":22},{"Amount":2,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":3},"GarrisonCapacity":0,"HP":150,"ID":72,"LanguageHelpId":26202,"LanguageNameId":5202,"LineOfSight":2,"MeleeArmor":2,"MinRange":0,"PierceArmor":5,"Range":0,"ReloadTime":0,"TrainTime":7,"internal_name":"WALL"},"79":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":13},{"Amount":1,"Class":31}],"Attack":5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":11},{"Amount":7,"Class":16},{"Amount":5,"Class":3},{"Amount":1,"Class":30},{"Amount":7,"Class":34}],"Cost":{"Stone":125,"Wood":50},"GarrisonCapacity":5,"HP":850,"ID":79,"LanguageHelpId":26178,"LanguageNameId":5178,"LineOfSight":10,"MeleeArmor":1,"MinRange":1,"PierceArmor":7,"Range":8,"ReloadTime":2,"TrainTime":80,"internal_name":"WCTW"},"82":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":26},{"Amount":0,"Class":21},{"Amount":8,"Class":11},{"Amount":8,"Class":4},{"Amount":11,"Class":3},{"Amount":8,"Class":31}],"Attack":11,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":16},{"Amount":11,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":30},{"Amount":0,"Class":34}],"Cost":{"Stone":650,"Wood":0},"GarrisonCapacity":20,"HP":4800,"ID":82,"LanguageHelpId":26142,"LanguageNameId":5142,"LineOfSight":11,"MeleeArmor":8,"MinRange":1,"PierceArmor":11,"Range":8,"ReloadTime":2,"TrainTime":200,"internal_name":"CSTL"},"84":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":8,"Class":3},{"Amount":1,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":1800,"ID":84,"LanguageHelpId":26161,"LanguageNameId":5161,"LineOfSight":6,"MeleeArmor":1,"MinRange":0,"PierceArmor":8,"Range":0,"ReloadTime":2.5,"TrainTime":60,"internal_name":"MRKT"},"87":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":8,"Class":3},{"Amount":1,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":1500,"ID":87,"LanguageHelpId":26128,"LanguageNameId":5128,"LineOfSight":6,"MeleeArmor":1,"MinRange":0,"PierceArmor":8,"Range":0,"ReloadTime":0,"TrainTime":50,"internal_name":"ARRG"},"101":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":8,"Class":3},{"Amount":1,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":1500,"ID":101,"LanguageHelpId":26171,"LanguageNameId":5171,"LineOfSight":6,"MeleeArmor":1,"MinRange":0,"PierceArmor":8,"Range":0,"ReloadTime":0,"TrainTime":50,"internal_name":"STBL"},"103":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":150},"GarrisonCapacity":0,"HP":1800,"ID":103,"LanguageHelpId":26131,"LanguageNameId":5131,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":40,"internal_name":"BLAC"},"104":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":2100,"ID":104,"LanguageHelpId":26138,"LanguageNameId":5138,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":2.5,"TrainTime":40,"internal_name":"CRCH"},"109":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":5,"Class":3},{"Amount":3,"Class":31}],"Attack":5,"Attacks":[{"Amount":5,"Class":3}],"Cost":{"Stone":100,"Wood":275},"GarrisonCapacity":15,"HP":2400,"ID":109,"LanguageHelpId":26164,"LanguageNameId":5164,"LineOfSight":8,"MeleeArmor":3,"MinRange":0,"PierceArmor":5,"Range":6,"ReloadTime":2,"TrainTime":100,"internal_name":"RTWC"},"117":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":16,"Class":11},{"Amount":8,"Class":4},{"Amount":10,"Class":3},{"Amount":0,"Class":13},{"Amount":0,"Class":22},{"Amount":8,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":5},"GarrisonCapacity":0,"HP":1080,"ID":117,"LanguageHelpId":26203,"LanguageNameId":5203,"LineOfSight":2,"MeleeArmor":8,"MinRange":0,"PierceArmor":10,"Range":0,"ReloadTime":0,"TrainTime":10,"internal_name":"WALL2"},"155":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":24,"Class":11},{"Amount":12,"Class":4},{"Amount":12,"Class":3},{"Amount":0,"Class":13},{"Amount":0,"Class":22},{"Amount":12,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":5},"GarrisonCapacity":0,"HP":3000,"ID":155,"LanguageHelpId":26204,"LanguageNameId":5204,"LineOfSight":2,"MeleeArmor":12,"MinRange":0,"PierceArmor":12,"Range":0,"ReloadTime":0,"TrainTime":10,"internal_name":"WALL3"},"199":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":10,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":100},"GarrisonCapacity":0,"HP":50,"ID":199,"LanguageHelpId":26495,"LanguageNameId":5495,"LineOfSight":1,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"ReloadTime":0,"TrainTime":40,"internal_name":"FTRAP"},"209":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":2,"Class":4},{"Amount":9,"Class":3},{"Amount":2,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":200},"GarrisonCapacity":0,"HP":2100,"ID":209,"LanguageHelpId":26176,"LanguageNameId":5176,"LineOfSight":6,"MeleeArmor":2,"MinRange":0,"PierceArmor":9,"Range":0,"ReloadTime":0,"TrainTime":60,"internal_name":"UNIV"},"234":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":2,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":13},{"Amount":2,"Class":31}],"Attack":7,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":11},{"Amount":9,"Class":16},{"Amount":7,"Class":3},{"Amount":1,"Class":30},{"Amount":9,"Class":34}],"Cost":{"Stone":125,"Wood":50},"GarrisonCapacity":5,"HP":1500,"ID":234,"LanguageHelpId":26154,"LanguageNameId":5154,"LineOfSight":10,"MeleeArmor":2,"MinRange":1,"PierceArmor":8,"Range":8,"ReloadTime":2,"TrainTime":80,"internal_name":"WCTW2"},"235":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":9,"Class":3},{"Amount":0,"Class":13},{"Amount":3,"Class":31}],"Attack":8,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":11},{"Amount":10,"Class":16},{"Amount":8,"Class":3},{"Amount":1,"Class":30},{"Amount":10,"Class":34}],"Cost":{"Stone":125,"Wood":50},"GarrisonCapacity":5,"HP":2250,"ID":235,"LanguageHelpId":26155,"LanguageNameId":5155,"LineOfSight":10,"MeleeArmor":3,"MinRange":1,"PierceArmor":9,"Range":8,"ReloadTime":2,"TrainTime":80,"internal_name":"WCTW3"},"236":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":9,"Class":3},{"Amount":0,"Class":13},{"Amount":0,"Class":23},{"Amount":3,"Class":31}],"Attack":120,"Attacks":[{"Amount":40,"Class":16},{"Amount":120,"Class":3},{"Amount":1,"Class":30},{"Amount":40,"Class":34}],"Cost":{"Gold":100,"Stone":125,"Wood":0},"GarrisonCapacity":5,"HP":2220,"ID":236,"LanguageHelpId":26156,"LanguageNameId":5156,"LineOfSight":10,"MeleeArmor":3,"MinRange":1,"PierceArmor":9,"Range":8,"ReloadTime":6,"TrainTime":80,"internal_name":"WCTW4"},"276":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":0},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":10,"Class":3},{"Amount":3,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Gold":1000,"Stone":1000,"Wood":1000},"GarrisonCapacity":0,"HP":4800,"ID":276,"LanguageHelpId":26182,"LanguageNameId":5182,"LineOfSight":8,"MeleeArmor":3,"MinRange":0,"PierceArmor":10,"Range":0,"ReloadTime":0,"TrainTime":3500,"internal_name":"WNDR"},"487":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":20,"Class":11},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":13},{"Amount":0,"Class":22},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":30},"GarrisonCapacity":0,"HP":1650,"ID":487,"LanguageHelpId":26185,"LanguageNameId":5185,"LineOfSight":6,"MeleeArmor":6,"MinRange":0,"PierceArmor":6,"Range":0,"ReloadTime":2.5,"TrainTime":70,"internal_name":"GTAX2"},"562":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":100},"GarrisonCapacity":0,"HP":600,"ID":562,"LanguageHelpId":26464,"LanguageNameId":5464,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":35,"internal_name":"SMIL"},"584":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":100},"GarrisonCapacity":0,"HP":600,"ID":584,"LanguageHelpId":26487,"LanguageNameId":5487,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":35,"internal_name":"MINE"},"598":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":5,"Wood":25},"GarrisonCapacity":0,"HP":500,"ID":598,"LanguageHelpId":26504,"LanguageNameId":5504,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"ReloadTime":2.5,"TrainTime":15,"internal_name":"WCTWX"},"621":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":100,"Wood":275},"GarrisonCapacity":0,"HP":2400,"ID":621,"LanguageHelpId":26164,"LanguageNameId":5164,"LineOfSight":8,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":6,"ReloadTime":2,"TrainTime":150,"internal_name":"RTWC1X"},"792":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":22},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":30},"GarrisonCapacity":0,"HP":240,"ID":792,"LanguageHelpId":26186,"LanguageNameId":5186,"LineOfSight":6,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"ReloadTime":2.5,"TrainTime":30,"internal_name":"PGTAX"},"1021":{"AccuracyPercent":0,"Armours":[{"Amount":10,"Class":3},{"Amount":3,"Class":4},{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Gold":350,"Stone":300},"GarrisonCapacity":0,"HP":2700,"ID":1021,"LanguageHelpId":26159,"LanguageNameId":5159,"LineOfSight":6,"MeleeArmor":3,"MinRange":0,"PierceArmor":10,"Range":0,"ReloadTime":0,"TrainTime":120,"internal_name":"FEITO"},"1189":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":10,"Class":3},{"Amount":0,"Class":13},{"Amount":3,"Class":31}],"Attack":3,"Attacks":[{"Amount":10,"Class":16},{"Amount":3,"Class":3},{"Amount":10,"Class":34}],"Cost":{"Wood":150},"GarrisonCapacity":10,"HP":2000,"ID":1189,"LanguageHelpId":26249,"LanguageNameId":5249,"LineOfSight":10,"MeleeArmor":3,"MinRange":1,"PierceArmor":10,"Range":7,"ReloadTime":3,"TrainTime":35,"internal_name":"HARBOR"},"1251":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":26},{"Amount":0,"Class":21},{"Amount":8,"Class":11},{"Amount":8,"Class":4},{"Amount":11,"Class":3},{"Amount":8,"Class":31}],"Attack":10,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":16},{"Amount":10,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":30},{"Amount":0,"Class":34}],"Cost":{"Stone":350},"GarrisonCapacity":20,"HP":2600,"ID":1251,"LanguageHelpId":26349,"LanguageNameId":5349,"LineOfSight":10,"MeleeArmor":8,"MinRange":1,"PierceArmor":11,"Range":7,"ReloadTime":2,"TrainTime":150,"internal_name":"KREPOST"},"1665":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":13},{"Amount":1,"Class":31}],"Attack":5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":11},{"Amount":7,"Class":16},{"Amount":5,"Class":3},{"Amount":1,"Class":30},{"Amount":7,"Class":34}],"Cost":{"Stone":175,"Wood":75},"GarrisonCapacity":10,"HP":1250,"ID":1665,"LanguageHelpId":26544,"LanguageNameId":5544,"LineOfSight":10,"MeleeArmor":1,"MinRange":1,"PierceArmor":7,"Range":8,"ReloadTime":2,"TrainTime":90,"internal_name":"DONJON"},"1734":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":125},"GarrisonCapacity":0,"HP":1000,"ID":1734,"LanguageHelpId":26581,"LanguageNameId":5581,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":40,"internal_name":"FOLWARK1"},"1754":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":10,"Class":3},{"Amount":3,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":50,"Wood":175},"GarrisonCapacity":0,"HP":2700,"ID":1754,"LanguageHelpId":26440,"LanguageNameId":5440,"LineOfSight":6,"MeleeArmor":3,"MinRange":0,"PierceArmor":10,"Range":0,"ReloadTime":2.5,"TrainTime":60,"internal_name":"CARAVANSERAI"}},"techs":{"3":{"Cost":{"Gold":450,"Wood":750},"ID":3,"LanguageHelpId":28419,"LanguageNameId":7419,"Repeatable":true,"ResearchTime":60,"internal_name":"British Yeoman"},"4":{"Cost":{"Food":750,"Gold":450},"ID":4,"LanguageHelpId":28420,"LanguageNameId":7420,"Repeatable":true,"ResearchTime":70,"internal_name":"Mayan El Dorado"},"5":{"Cost":{"Food":750,"Gold":450},"ID":5,"LanguageHelpId":28421,"LanguageNameId":7421,"Repeatable":true,"ResearchTime":50,"internal_name":"Celtic Furor Celtica"},"6":{"Cost":{"Gold":450,"Wood":500},"ID":6,"LanguageHelpId":28422,"LanguageNameId":7422,"Repeatable":true,"ResearchTime":60,"internal_name":"Mongol Siege Drill"},"7":{"Cost":{"Food":300,"Gold":300},"ID":7,"LanguageHelpId":28423,"LanguageNameId":7423,"Repeatable":true,"ResearchTime":50,"internal_name":"Persian Mahouts"},"8":{"Cost":{"Food":75},"ID":8,"LanguageHelpId":28008,"LanguageNameId":7008,"Repeatable":false,"ResearchTime":25,"internal_name":"Town Watch"},"9":{"Cost":{"Food":400,"Gold":400},"ID":9,"LanguageHelpId":28424,"LanguageNameId":7424,"Repeatable":true,"ResearchTime":50,"internal_name":"Saracen Zealotry"},"10":{"Cost":{"Food":600,"Gold":650},"ID":10,"LanguageHelpId":28425,"LanguageNameId":7425,"Repeatable":true,"ResearchTime":40,"internal_name":"Turkish Artillery"},"11":{"Cost":{"Food":600,"Stone":400},"ID":11,"LanguageHelpId":28426,"LanguageNameId":7426,"Repeatable":true,"ResearchTime":60,"internal_name":"Teuton Crenellations"},"12":{"Cost":{"Food":250,"Wood":250},"ID":12,"LanguageHelpId":28012,"LanguageNameId":7012,"Repeatable":true,"ResearchTime":70,"internal_name":"Crop rotation"},"13":{"Cost":{"Food":125,"Wood":125},"ID":13,"LanguageHelpId":28013,"LanguageNameId":7013,"Repeatable":true,"ResearchTime":40,"internal_name":"Heavy plow"},"14":{"Cost":{"Food":75,"Wood":75},"ID":14,"LanguageHelpId":28014,"LanguageNameId":7014,"Repeatable":true,"ResearchTime":20,"internal_name":"Horse collar"},"15":{"Cost":{"Food":300,"Gold":200},"ID":15,"LanguageHelpId":28015,"LanguageNameId":7015,"Repeatable":false,"ResearchTime":50,"internal_name":"Guilds"},"16":{"Cost":{"Food":450,"Gold":250},"ID":16,"LanguageHelpId":28427,"LanguageNameId":7427,"Repeatable":false,"ResearchTime":40,"internal_name":"Gothic Anarchy"},"17":{"Cost":{"Food":300,"Gold":200},"ID":17,"LanguageHelpId":28017,"LanguageNameId":7017,"Repeatable":false,"ResearchTime":70,"internal_name":"Banking"},"19":{"Cost":{"Food":0,"Gold":0},"ID":19,"LanguageHelpId":28019,"LanguageNameId":7019,"Repeatable":true,"ResearchTime":1,"internal_name":"Cartography"},"21":{"Cost":{"Food":500,"Wood":300},"ID":21,"LanguageHelpId":28428,"LanguageNameId":7428,"Repeatable":true,"ResearchTime":60,"internal_name":"Hun Atheism"},"22":{"Cost":{"Gold":50},"ID":22,"LanguageHelpId":28022,"LanguageNameId":7022,"Repeatable":true,"ResearchTime":25,"internal_name":"Loom"},"23":{"Cost":{"Food":200,"Gold":100},"ID":23,"LanguageHelpId":28023,"LanguageNameId":7023,"Repeatable":false,"ResearchTime":70,"internal_name":"Coinage"},"24":{"Cost":{"Food":450,"Gold":750},"ID":24,"LanguageHelpId":28429,"LanguageNameId":7429,"Repeatable":true,"ResearchTime":60,"internal_name":"Aztec Garland Wars"},"39":{"Cost":{"Food":150},"ID":39,"LanguageHelpId":28039,"LanguageNameId":7039,"Repeatable":true,"ResearchTime":40,"internal_name":"Husbandry"},"45":{"Cost":{"Food":750,"Gold":1000},"ID":45,"LanguageHelpId":28045,"LanguageNameId":7045,"Repeatable":true,"ResearchTime":60,"internal_name":"Faith"},"47":{"Cost":{"Food":300,"Gold":200},"ID":47,"LanguageHelpId":28047,"LanguageNameId":7047,"Repeatable":true,"ResearchTime":100,"internal_name":"Chemistry"},"48":{"Cost":{"Food":200,"Gold":200},"ID":48,"LanguageHelpId":28410,"LanguageNameId":7410,"Repeatable":true,"ResearchTime":40,"internal_name":"Caravan"},"49":{"Cost":{"Food":650,"Gold":500},"ID":49,"LanguageHelpId":28431,"LanguageNameId":7431,"Repeatable":true,"ResearchTime":40,"internal_name":"Bogsveigar"},"50":{"Cost":{"Food":150,"Wood":175},"ID":50,"LanguageHelpId":28050,"LanguageNameId":7050,"Repeatable":true,"ResearchTime":50,"internal_name":"Masonry"},"51":{"Cost":{"Food":300,"Wood":200},"ID":51,"LanguageHelpId":28051,"LanguageNameId":7051,"Repeatable":true,"ResearchTime":70,"internal_name":"Architecture"},"52":{"Cost":{"Gold":750,"Wood":750},"ID":52,"LanguageHelpId":28432,"LanguageNameId":7432,"Repeatable":true,"ResearchTime":60,"internal_name":"Chinese Rocketry"},"54":{"Cost":{"Food":300,"Wood":200},"ID":54,"LanguageHelpId":28054,"LanguageNameId":7054,"Repeatable":true,"ResearchTime":50,"internal_name":"Stone cutting"},"55":{"Cost":{"Food":100,"Wood":75},"ID":55,"LanguageHelpId":28055,"LanguageNameId":7055,"Repeatable":true,"ResearchTime":30,"internal_name":"Gold Mining"},"59":{"Cost":{"Gold":300,"Wood":550},"ID":59,"LanguageHelpId":28059,"LanguageNameId":7059,"Repeatable":true,"ResearchTime":60,"internal_name":"Japanese Kataparuto"},"61":{"Cost":{"Food":800,"Gold":600},"ID":61,"LanguageHelpId":28318,"LanguageNameId":7318,"Repeatable":true,"ResearchTime":50,"internal_name":"Byzantine Logistica"},"63":{"Cost":{"Food":500,"Wood":350},"ID":63,"LanguageHelpId":28063,"LanguageNameId":7063,"Repeatable":true,"ResearchTime":75,"internal_name":"Keep"},"64":{"Cost":{"Food":800,"Wood":400},"ID":64,"LanguageHelpId":28320,"LanguageNameId":7320,"Repeatable":false,"ResearchTime":60,"internal_name":"Bombard Tower"},"65":{"Cost":{"Food":150,"Wood":200},"ID":65,"LanguageHelpId":28314,"LanguageNameId":7314,"Repeatable":true,"ResearchTime":45,"internal_name":"Gillnets"},"67":{"Cost":{"Food":150},"ID":67,"LanguageHelpId":28067,"LanguageNameId":7067,"Repeatable":true,"ResearchTime":50,"internal_name":"Forging"},"68":{"Cost":{"Food":220,"Gold":120},"ID":68,"LanguageHelpId":28068,"LanguageNameId":7068,"Repeatable":true,"ResearchTime":75,"internal_name":"Iron casting"},"74":{"Cost":{"Food":100},"ID":74,"LanguageHelpId":28074,"LanguageNameId":7074,"Repeatable":true,"ResearchTime":40,"internal_name":"Scale Mail Armor"},"75":{"Cost":{"Food":275,"Gold":225},"ID":75,"LanguageHelpId":28075,"LanguageNameId":7075,"Repeatable":true,"ResearchTime":100,"internal_name":"Blast Furnace"},"76":{"Cost":{"Food":200,"Gold":100},"ID":76,"LanguageHelpId":28076,"LanguageNameId":7076,"Repeatable":true,"ResearchTime":55,"internal_name":"Chain Mail Armor"},"77":{"Cost":{"Food":300,"Gold":150},"ID":77,"LanguageHelpId":28077,"LanguageNameId":7077,"Repeatable":true,"ResearchTime":70,"internal_name":"Plate Mail Armor"},"80":{"Cost":{"Food":350,"Gold":200},"ID":80,"LanguageHelpId":28080,"LanguageNameId":7080,"Repeatable":true,"ResearchTime":75,"internal_name":"Plate Barding Armor"},"81":{"Cost":{"Food":150},"ID":81,"LanguageHelpId":28081,"LanguageNameId":7081,"Repeatable":true,"ResearchTime":45,"internal_name":"Scale Barding Armor"},"82":{"Cost":{"Food":250,"Gold":150},"ID":82,"LanguageHelpId":28082,"LanguageNameId":7082,"Repeatable":true,"ResearchTime":60,"internal_name":"Chain Barding Armor"},"83":{"Cost":{"Food":300,"Gold":300},"ID":83,"LanguageHelpId":28324,"LanguageNameId":7324,"Repeatable":true,"ResearchTime":60,"internal_name":"Frankish Bearded Axe"},"90":{"Cost":{},"ID":90,"LanguageHelpId":28090,"LanguageNameId":7090,"Repeatable":true,"ResearchTime":0,"internal_name":"Tracking"},"93":{"Cost":{"Gold":175,"Wood":300},"ID":93,"LanguageHelpId":28093,"LanguageNameId":7093,"Repeatable":false,"ResearchTime":60,"internal_name":"Ballistics"},"101":{"Cost":{"Food":500},"ID":101,"LanguageHelpId":28101,"LanguageNameId":7101,"Repeatable":false,"ResearchTime":130,"internal_name":"Middle Age"},"102":{"Cost":{"Food":800,"Gold":200},"ID":102,"LanguageHelpId":28102,"LanguageNameId":7102,"Repeatable":false,"ResearchTime":160,"internal_name":"Feudal Age"},"103":{"Cost":{"Food":1000,"Gold":800},"ID":103,"LanguageHelpId":28103,"LanguageNameId":7103,"Repeatable":false,"ResearchTime":190,"internal_name":"Imperial Age"},"140":{"Cost":{"Food":100,"Wood":250},"ID":140,"LanguageHelpId":28186,"LanguageNameId":7186,"Repeatable":true,"ResearchTime":30,"internal_name":"Guard Tower"},"182":{"Cost":{"Food":175,"Wood":75},"ID":182,"LanguageHelpId":28180,"LanguageNameId":7180,"Repeatable":true,"ResearchTime":75,"internal_name":"Gold Shaft Mining"},"194":{"Cost":{"Food":200,"Wood":100},"ID":194,"LanguageHelpId":28163,"LanguageNameId":7163,"Repeatable":true,"ResearchTime":50,"internal_name":"Fortified Wall"},"199":{"Cost":{"Food":100,"Gold":50},"ID":199,"LanguageHelpId":28172,"LanguageNameId":7172,"Repeatable":true,"ResearchTime":30,"internal_name":"Fletching"},"200":{"Cost":{"Food":200,"Gold":100},"ID":200,"LanguageHelpId":28150,"LanguageNameId":7150,"Repeatable":true,"ResearchTime":35,"internal_name":"Bodkin Arrow"},"201":{"Cost":{"Food":300,"Gold":200},"ID":201,"LanguageHelpId":28151,"LanguageNameId":7151,"Repeatable":true,"ResearchTime":40,"internal_name":"Bracer"},"202":{"Cost":{"Food":100,"Wood":50},"ID":202,"LanguageHelpId":28189,"LanguageNameId":7189,"Repeatable":true,"ResearchTime":25,"internal_name":"Double Bit Axe"},"203":{"Cost":{"Food":150,"Wood":100},"ID":203,"LanguageHelpId":28190,"LanguageNameId":7190,"Repeatable":true,"ResearchTime":50,"internal_name":"Bow Saw"},"211":{"Cost":{"Food":100},"ID":211,"LanguageHelpId":28208,"LanguageNameId":7208,"Repeatable":true,"ResearchTime":40,"internal_name":"Padded Archer Armor"},"212":{"Cost":{"Food":150,"Gold":150},"ID":212,"LanguageHelpId":28209,"LanguageNameId":7209,"Repeatable":true,"ResearchTime":55,"internal_name":"Leather Archer Armor"},"213":{"Cost":{"Food":175,"Wood":50},"ID":213,"LanguageHelpId":28211,"LanguageNameId":7211,"Repeatable":true,"ResearchTime":75,"internal_name":"Wheel Barrow"},"215":{"Cost":{"Food":100},"ID":215,"LanguageHelpId":28210,"LanguageNameId":7210,"Repeatable":true,"ResearchTime":40,"internal_name":"Squires"},"219":{"Cost":{"Food":250,"Gold":250},"ID":219,"LanguageHelpId":28216,"LanguageNameId":7216,"Repeatable":true,"ResearchTime":70,"internal_name":"Ring Archer Armor"},"221":{"Cost":{"Food":300,"Wood":200},"ID":221,"LanguageHelpId":28231,"LanguageNameId":7231,"Repeatable":true,"ResearchTime":100,"internal_name":"Two Man Saw"},"230":{"Cost":{"Food":0,"Gold":200},"ID":230,"LanguageHelpId":28222,"LanguageNameId":7222,"Repeatable":true,"ResearchTime":55,"internal_name":"Block Printing"},"231":{"Cost":{"Food":0,"Gold":175},"ID":231,"LanguageHelpId":28221,"LanguageNameId":7221,"Repeatable":true,"ResearchTime":60,"internal_name":"Sanctity"},"233":{"Cost":{"Food":0,"Gold":120},"ID":233,"LanguageHelpId":28220,"LanguageNameId":7220,"Repeatable":true,"ResearchTime":65,"internal_name":"Illumination"},"249":{"Cost":{"Food":300,"Wood":200},"ID":249,"LanguageHelpId":28246,"LanguageNameId":7246,"Repeatable":true,"ResearchTime":55,"internal_name":"Hand Cart"},"252":{"Cost":{"Food":0,"Gold":140},"ID":252,"LanguageHelpId":28249,"LanguageNameId":7249,"Repeatable":true,"ResearchTime":50,"internal_name":"Fervor"},"278":{"Cost":{"Food":100,"Wood":75},"ID":278,"LanguageHelpId":28276,"LanguageNameId":7276,"Repeatable":true,"ResearchTime":30,"internal_name":"Stone Mining"},"279":{"Cost":{"Food":175,"Wood":75},"ID":279,"LanguageHelpId":28277,"LanguageNameId":7277,"Repeatable":true,"ResearchTime":75,"internal_name":"Stone Shaft Mining"},"280":{"Cost":{"Food":300,"Gold":100},"ID":280,"LanguageHelpId":28282,"LanguageNameId":7282,"Repeatable":false,"ResearchTime":40,"internal_name":"Town Patrol"},"315":{"Cost":{"Food":150,"Gold":150},"ID":315,"LanguageHelpId":28319,"LanguageNameId":7319,"Repeatable":true,"ResearchTime":60,"internal_name":"Conscription"},"316":{"Cost":{"Food":0,"Gold":475},"ID":316,"LanguageHelpId":28315,"LanguageNameId":7315,"Repeatable":false,"ResearchTime":50,"internal_name":"Redemption"},"319":{"Cost":{"Food":0,"Gold":325},"ID":319,"LanguageHelpId":28316,"LanguageNameId":7316,"Repeatable":false,"ResearchTime":40,"internal_name":"Atonement"},"321":{"Cost":{"Food":400,"Wood":200},"ID":321,"LanguageHelpId":28322,"LanguageNameId":7322,"Repeatable":true,"ResearchTime":10,"internal_name":"Sappers"},"322":{"Cost":{"Food":200,"Stone":100},"ID":322,"LanguageHelpId":28321,"LanguageNameId":7321,"Repeatable":false,"ResearchTime":35,"internal_name":"Murder Holes"},"373":{"Cost":{"Food":1000,"Gold":300},"ID":373,"LanguageHelpId":28377,"LanguageNameId":7377,"Repeatable":true,"ResearchTime":60,"internal_name":"Shipwright"},"374":{"Cost":{"Food":250,"Gold":150},"ID":374,"LanguageHelpId":28372,"LanguageNameId":7372,"Repeatable":true,"ResearchTime":50,"internal_name":"Careening"},"375":{"Cost":{"Food":600,"Gold":400},"ID":375,"LanguageHelpId":28373,"LanguageNameId":7373,"Repeatable":true,"ResearchTime":60,"internal_name":"Dry Dock"},"377":{"Cost":{"Food":500,"Wood":600},"ID":377,"LanguageHelpId":28378,"LanguageNameId":7378,"Repeatable":true,"ResearchTime":45,"internal_name":"Siege Engineers"},"379":{"Cost":{"Food":400,"Wood":400},"ID":379,"LanguageHelpId":28376,"LanguageNameId":7376,"Repeatable":true,"ResearchTime":75,"internal_name":"Hoardings"},"380":{"Cost":{"Food":350,"Gold":100},"ID":380,"LanguageHelpId":28374,"LanguageNameId":7374,"Repeatable":true,"ResearchTime":30,"internal_name":"Heated Shot"},"408":{"Cost":{"Gold":200},"ID":408,"LanguageHelpId":28408,"LanguageNameId":7408,"Repeatable":false,"ResearchTime":1,"internal_name":"Spy Technology"},"435":{"Cost":{"Food":150,"Gold":100},"ID":435,"LanguageHelpId":28409,"LanguageNameId":7409,"Repeatable":true,"ResearchTime":50,"internal_name":"Bloodlines"},"436":{"Cost":{"Food":200,"Gold":250},"ID":436,"LanguageHelpId":28415,"LanguageNameId":7415,"Repeatable":true,"ResearchTime":65,"internal_name":"Parthian Tactics"},"437":{"Cost":{"Food":300,"Wood":250},"ID":437,"LanguageHelpId":28411,"LanguageNameId":7411,"Repeatable":true,"ResearchTime":45,"internal_name":"Thumb Ring"},"438":{"Cost":{"Food":0,"Gold":200},"ID":438,"LanguageHelpId":28416,"LanguageNameId":7416,"Repeatable":false,"ResearchTime":75,"internal_name":"Theocracy"},"439":{"Cost":{"Food":0,"Gold":1000},"ID":439,"LanguageHelpId":28412,"LanguageNameId":7412,"Repeatable":false,"ResearchTime":60,"internal_name":"Heresy"},"440":{"Cost":{"Food":400,"Gold":250},"ID":440,"LanguageHelpId":28325,"LanguageNameId":7325,"Repeatable":true,"ResearchTime":60,"internal_name":"Spanish Supremacy"},"441":{"Cost":{"Food":0,"Gold":200},"ID":441,"LanguageHelpId":28435,"LanguageNameId":7435,"Repeatable":true,"ResearchTime":35,"internal_name":"Herbal Medicine"},"445":{"Cost":{"Gold":500,"Wood":800},"ID":445,"LanguageHelpId":28438,"LanguageNameId":7438,"Repeatable":true,"ResearchTime":60,"internal_name":"Korean catapults"},"454":{"Cost":{"Food":650,"Gold":500},"ID":454,"LanguageHelpId":28447,"LanguageNameId":7447,"Repeatable":true,"ResearchTime":50,"internal_name":"Counterweights"},"455":{"Cost":{"Gold":200,"Wood":400},"ID":455,"LanguageHelpId":28448,"LanguageNameId":7448,"Repeatable":false,"ResearchTime":40,"internal_name":"Detinets"},"457":{"Cost":{"Gold":600,"Wood":400},"ID":457,"LanguageHelpId":28439,"LanguageNameId":7439,"Repeatable":true,"ResearchTime":40,"internal_name":"Gothic Perfusion"},"460":{"Cost":{"Food":400,"Gold":350},"ID":460,"LanguageHelpId":28326,"LanguageNameId":7326,"Repeatable":true,"ResearchTime":40,"internal_name":"Aztec Sacrifice"},"461":{"Cost":{"Gold":400,"Wood":800},"ID":461,"LanguageHelpId":28327,"LanguageNameId":7327,"Repeatable":true,"ResearchTime":40,"internal_name":"Britons City Rights"},"462":{"Cost":{"Stone":200,"Wood":400},"ID":462,"LanguageHelpId":28368,"LanguageNameId":7368,"Repeatable":true,"ResearchTime":40,"internal_name":"Chinese Great Wall"},"463":{"Cost":{"Food":600,"Gold":450},"ID":463,"LanguageHelpId":28312,"LanguageNameId":7312,"Repeatable":true,"ResearchTime":40,"internal_name":"Viking Chieftains"},"464":{"Cost":{"Food":250,"Gold":300},"ID":464,"LanguageHelpId":28313,"LanguageNameId":7313,"Repeatable":true,"ResearchTime":40,"internal_name":"Byzantines Greek Fire"},"482":{"Cost":{"Food":250,"Gold":200},"ID":482,"LanguageHelpId":28369,"LanguageNameId":7369,"Repeatable":true,"ResearchTime":30,"internal_name":"Stronghold"},"483":{"Cost":{"Gold":200,"Wood":300},"ID":483,"LanguageHelpId":28370,"LanguageNameId":7370,"Repeatable":false,"ResearchTime":40,"internal_name":"Huns UT"},"484":{"Cost":{"Food":300,"Wood":300},"ID":484,"LanguageHelpId":28371,"LanguageNameId":7371,"Repeatable":true,"ResearchTime":40,"internal_name":"Japanese UT"},"485":{"Cost":{"Food":300,"Gold":300},"ID":485,"LanguageHelpId":28379,"LanguageNameId":7379,"Repeatable":true,"ResearchTime":40,"internal_name":"Mayans UT"},"486":{"Cost":{"Food":300,"Wood":300},"ID":486,"LanguageHelpId":28380,"LanguageNameId":7380,"Repeatable":true,"ResearchTime":40,"internal_name":"Koreans UT"},"487":{"Cost":{"Gold":150,"Wood":300},"ID":487,"LanguageHelpId":28280,"LanguageNameId":7280,"Repeatable":false,"ResearchTime":40,"internal_name":"Mongols UT"},"488":{"Cost":{"Food":400,"Gold":300},"ID":488,"LanguageHelpId":28281,"LanguageNameId":7281,"Repeatable":false,"ResearchTime":40,"internal_name":"Persians UT"},"489":{"Cost":{"Gold":350,"Wood":400},"ID":489,"LanguageHelpId":28283,"LanguageNameId":7283,"Repeatable":true,"ResearchTime":60,"internal_name":"Teutons UT"},"491":{"Cost":{"Food":350,"Gold":150},"ID":491,"LanguageHelpId":28285,"LanguageNameId":7285,"Repeatable":true,"ResearchTime":60,"internal_name":"Sipahi"},"492":{"Cost":{"Food":100,"Gold":300},"ID":492,"LanguageHelpId":28286,"LanguageNameId":7286,"Repeatable":true,"ResearchTime":40,"internal_name":"Spanish UT"},"493":{"Cost":{"Gold":500,"Wood":600},"ID":493,"LanguageHelpId":28287,"LanguageNameId":7287,"Repeatable":true,"ResearchTime":40,"internal_name":"Franks UT"},"494":{"Cost":{"Gold":150,"Wood":200},"ID":494,"LanguageHelpId":28272,"LanguageNameId":7272,"Repeatable":true,"ResearchTime":40,"internal_name":"Pavise"},"499":{"Cost":{"Food":500,"Gold":250},"ID":499,"LanguageHelpId":28273,"LanguageNameId":7273,"Repeatable":true,"ResearchTime":60,"internal_name":"Silk Route"},"506":{"Cost":{"Food":250,"Wood":200},"ID":506,"LanguageHelpId":28270,"LanguageNameId":7270,"Repeatable":true,"ResearchTime":40,"internal_name":"Indians UT"},"507":{"Cost":{"Food":500,"Gold":300},"ID":507,"LanguageHelpId":28271,"LanguageNameId":7271,"Repeatable":true,"ResearchTime":40,"internal_name":"Indians UT2"},"513":{"Cost":{"Food":900,"Gold":500},"ID":513,"LanguageHelpId":28269,"LanguageNameId":7269,"Repeatable":true,"ResearchTime":40,"internal_name":"Slavs UT"},"514":{"Cost":{"Food":200,"Gold":300},"ID":514,"LanguageHelpId":28275,"LanguageNameId":7275,"Repeatable":false,"ResearchTime":40,"internal_name":"Magyars UT"},"515":{"Cost":{"Gold":400,"Wood":600},"ID":515,"LanguageHelpId":28274,"LanguageNameId":7274,"Repeatable":true,"ResearchTime":40,"internal_name":"Indians UT"},"516":{"Cost":{"Food":200,"Gold":300},"ID":516,"LanguageHelpId":28266,"LanguageNameId":7266,"Repeatable":false,"ResearchTime":40,"internal_name":"Incas UT"},"517":{"Cost":{"Food":600,"Gold":600},"ID":517,"LanguageHelpId":28267,"LanguageNameId":7267,"Repeatable":true,"ResearchTime":40,"internal_name":"Indians UT"},"572":{"Cost":{"Gold":300,"Wood":200},"ID":572,"LanguageHelpId":28250,"LanguageNameId":7250,"Repeatable":true,"ResearchTime":40,"internal_name":"Portuguese UT"},"573":{"Cost":{"Food":700,"Gold":400},"ID":573,"LanguageHelpId":28251,"LanguageNameId":7251,"Repeatable":true,"ResearchTime":40,"internal_name":"Portuguese UT"},"574":{"Cost":{"Food":300,"Gold":300},"ID":574,"LanguageHelpId":28252,"LanguageNameId":7252,"Repeatable":false,"ResearchTime":40,"internal_name":"Ethiopian UT"},"575":{"Cost":{"Food":1000,"Gold":600},"ID":575,"LanguageHelpId":28253,"LanguageNameId":7253,"Repeatable":true,"ResearchTime":40,"internal_name":"Ethiopian UT"},"576":{"Cost":{"Food":200,"Wood":300},"ID":576,"LanguageHelpId":28254,"LanguageNameId":7254,"Repeatable":true,"ResearchTime":40,"internal_name":"Malian UT"},"577":{"Cost":{"Food":650,"Gold":400},"ID":577,"LanguageHelpId":28255,"LanguageNameId":7255,"Repeatable":true,"ResearchTime":40,"internal_name":"Malian UT"},"578":{"Cost":{"Food":250,"Gold":250},"ID":578,"LanguageHelpId":28256,"LanguageNameId":7256,"Repeatable":true,"ResearchTime":40,"internal_name":"Berber UT"},"579":{"Cost":{"Food":700,"Gold":300},"ID":579,"LanguageHelpId":28257,"LanguageNameId":7257,"Repeatable":true,"ResearchTime":40,"internal_name":"Berber UT"},"602":{"Cost":{"Food":150,"Gold":50},"ID":602,"LanguageHelpId":28258,"LanguageNameId":7258,"Repeatable":true,"ResearchTime":25,"internal_name":"Arson"},"608":{"Cost":{"Food":250,"Wood":250},"ID":608,"LanguageHelpId":28278,"LanguageNameId":7278,"Repeatable":true,"ResearchTime":25,"internal_name":"Arrowslits"},"622":{"Cost":{"Gold":450,"Wood":300},"ID":622,"LanguageHelpId":28291,"LanguageNameId":7291,"Repeatable":true,"ResearchTime":40,"internal_name":"Khmer UT"},"623":{"Cost":{"Food":700,"Gold":400},"ID":623,"LanguageHelpId":28292,"LanguageNameId":7292,"Repeatable":true,"ResearchTime":40,"internal_name":"Khmer UT"},"624":{"Cost":{"Food":300,"Gold":300},"ID":624,"LanguageHelpId":28293,"LanguageNameId":7293,"Repeatable":false,"ResearchTime":40,"internal_name":"Malay UT"},"625":{"Cost":{"Food":850,"Gold":500},"ID":625,"LanguageHelpId":28294,"LanguageNameId":7294,"Repeatable":false,"ResearchTime":40,"internal_name":"Malay UT"},"626":{"Cost":{"Food":400,"Wood":300},"ID":626,"LanguageHelpId":28295,"LanguageNameId":7295,"Repeatable":true,"ResearchTime":40,"internal_name":"Burmese UT"},"627":{"Cost":{"Food":300,"Gold":300},"ID":627,"LanguageHelpId":28296,"LanguageNameId":7296,"Repeatable":true,"ResearchTime":40,"internal_name":"Burmese UT"},"628":{"Cost":{"Food":250,"Gold":250},"ID":628,"LanguageHelpId":28297,"LanguageNameId":7297,"Repeatable":true,"ResearchTime":40,"internal_name":"Vietnamese UT"},"629":{"Cost":{"Food":550,"Wood":200},"ID":629,"LanguageHelpId":28298,"LanguageNameId":7298,"Repeatable":true,"ResearchTime":60,"internal_name":"Vietnamese UT"},"685":{"Cost":{"Food":400,"Gold":200},"ID":685,"LanguageHelpId":28307,"LanguageNameId":7307,"Repeatable":true,"ResearchTime":35,"internal_name":"Khmer UT"},"686":{"Cost":{"Food":900,"Gold":450},"ID":686,"LanguageHelpId":28308,"LanguageNameId":7308,"Repeatable":true,"ResearchTime":40,"internal_name":"Khmer UT"},"687":{"Cost":{"Gold":300,"Wood":400},"ID":687,"LanguageHelpId":28309,"LanguageNameId":7309,"Repeatable":true,"ResearchTime":40,"internal_name":"Malay UT"},"688":{"Cost":{"Gold":400,"Wood":500},"ID":688,"LanguageHelpId":28310,"LanguageNameId":7310,"Repeatable":false,"ResearchTime":50,"internal_name":"Malay UT"},"689":{"Cost":{"Food":200,"Wood":300},"ID":689,"LanguageHelpId":28311,"LanguageNameId":7311,"Repeatable":true,"ResearchTime":40,"internal_name":"Burmese UT"},"690":{"Cost":{"Food":650,"Gold":400},"ID":690,"LanguageHelpId":28398,"LanguageNameId":7398,"Repeatable":true,"ResearchTime":40,"internal_name":"Burmese UT"},"691":{"Cost":{"Food":250,"Gold":250},"ID":691,"LanguageHelpId":28399,"LanguageNameId":7399,"Repeatable":true,"ResearchTime":40,"internal_name":"Vietnamese UT"},"692":{"Cost":{"Food":500,"Gold":200},"ID":692,"LanguageHelpId":28400,"LanguageNameId":7400,"Repeatable":true,"ResearchTime":40,"internal_name":"Vietnamese UT"},"716":{"Cost":{"Food":75,"Gold":75},"ID":716,"LanguageHelpId":28403,"LanguageNameId":7403,"Repeatable":false,"ResearchTime":20,"internal_name":"Supplies"},"754":{"Cost":{"Food":400,"Gold":300},"ID":754,"LanguageHelpId":28342,"LanguageNameId":7342,"Repeatable":true,"ResearchTime":45,"internal_name":"Burgundian Vineyards"},"755":{"Cost":{"Food":200,"Gold":150},"ID":755,"LanguageHelpId":28343,"LanguageNameId":7343,"Repeatable":true,"ResearchTime":10,"internal_name":"Flemish Revolution"},"756":{"Cost":{"Food":400,"Gold":300},"ID":756,"LanguageHelpId":28344,"LanguageNameId":7344,"Repeatable":false,"ResearchTime":60,"internal_name":"First Crusade"},"757":{"Cost":{"Food":700,"Gold":600},"ID":757,"LanguageHelpId":28345,"LanguageNameId":7345,"Repeatable":true,"ResearchTime":45,"internal_name":"Hauberk"},"782":{"Cost":{"Food":500,"Gold":300},"ID":782,"LanguageHelpId":28348,"LanguageNameId":7348,"Repeatable":true,"ResearchTime":45,"internal_name":"Szlachta Privileges"},"783":{"Cost":{"Food":750,"Gold":550},"ID":783,"LanguageHelpId":28349,"LanguageNameId":7349,"Repeatable":true,"ResearchTime":60,"internal_name":"Lechitic Legacy"},"784":{"Cost":{"Food":300,"Gold":300},"ID":784,"LanguageHelpId":28350,"LanguageNameId":7350,"Repeatable":true,"ResearchTime":45,"internal_name":"Wagenburg Tactics"},"785":{"Cost":{"Food":500,"Gold":450},"ID":785,"LanguageHelpId":28351,"LanguageNameId":7351,"Repeatable":false,"ResearchTime":45,"internal_name":"Hussite Reforms"},"831":{"Cost":{"Food":300,"Gold":200},"ID":831,"LanguageHelpId":28357,"LanguageNameId":7357,"Repeatable":true,"ResearchTime":45,"internal_name":"Medical Corps"},"832":{"Cost":{"Food":750,"Gold":600},"ID":832,"LanguageHelpId":28358,"LanguageNameId":7358,"Repeatable":true,"ResearchTime":60,"internal_name":"Wootz Steel"},"833":{"Cost":{"Gold":275,"Wood":375},"ID":833,"LanguageHelpId":28359,"LanguageNameId":7359,"Repeatable":true,"ResearchTime":45,"internal_name":"Paiks"},"834":{"Cost":{"Gold":650,"Wood":800},"ID":834,"LanguageHelpId":28360,"LanguageNameId":7360,"Repeatable":true,"ResearchTime":60,"internal_name":"Mahayana"},"835":{"Cost":{"Food":500,"Gold":450},"ID":835,"LanguageHelpId":28361,"LanguageNameId":7361,"Repeatable":true,"ResearchTime":45,"internal_name":"Kshatriyas"},"836":{"Cost":{"Food":800,"Gold":700},"ID":836,"LanguageHelpId":28362,"LanguageNameId":7362,"Repeatable":true,"ResearchTime":60,"internal_name":"Frontier Guards"},"875":{"Cost":{"Food":100,"Gold":100},"ID":875,"LanguageHelpId":28450,"LanguageNameId":7450,"Repeatable":false,"ResearchTime":25,"internal_name":"Gambesons"},"883":{"Cost":{"Gold":300,"Wood":400},"ID":883,"LanguageHelpId":28444,"LanguageNameId":7444,"Repeatable":false,"ResearchTime":45,"internal_name":"Ballistas"},"884":{"Cost":{"Food":700,"Gold":800},"ID":884,"LanguageHelpId":28445,"LanguageNameId":7445,"Repeatable":true,"ResearchTime":60,"internal_name":"Comitatenses"}},"unit_upgrades":{"6":{"Cost":{"Gold":130,"Wood":230},"ID":901,"ResearchTime":50,"internal_name":"Elite Skirmisher"},"21":{"Cost":{"Food":230,"Gold":100},"ID":901,"ResearchTime":50,"internal_name":"War Galley"},"24":{"Cost":{"Food":175,"Gold":125},"ID":901,"ResearchTime":35,"internal_name":"Crossbow"},"75":{"Cost":{"Food":100,"Gold":40},"ID":901,"ResearchTime":40,"internal_name":"Man-At-Arms"},"77":{"Cost":{"Food":150,"Gold":65},"ID":901,"ResearchTime":40,"internal_name":"Long Swordsman"},"207":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":125,"internal_name":"Heavy Camel"},"283":{"Cost":{"Food":300,"Gold":300},"ID":901,"ResearchTime":100,"internal_name":"Cavalier"},"330":{"Cost":{"Food":325,"Gold":360},"ID":901,"ResearchTime":105,"internal_name":"Heavy Camel"},"358":{"Cost":{"Food":160,"Gold":90},"ID":901,"ResearchTime":35,"internal_name":"Pikeman"},"359":{"Cost":{"Food":300,"Gold":600},"ID":901,"ResearchTime":50,"internal_name":"Halberdier"},"420":{"Cost":{},"ID":901,"ResearchTime":0,"internal_name":"Cannon Galleon"},"422":{"Cost":{"Food":300},"ID":901,"ResearchTime":50,"internal_name":"Capped Ram"},"441":{"Cost":{"Food":500,"Gold":600},"ID":901,"ResearchTime":50,"internal_name":"Hussar"},"442":{"Cost":{"Food":400,"Wood":315},"ID":901,"ResearchTime":65,"internal_name":"Galleon"},"473":{"Cost":{"Food":300,"Gold":100},"ID":901,"ResearchTime":60,"internal_name":"Two-Handed Swordsman"},"474":{"Cost":{"Food":900,"Gold":500},"ID":901,"ResearchTime":50,"internal_name":"Heavy Cavalry Archer"},"492":{"Cost":{"Food":450,"Gold":400},"ID":901,"ResearchTime":50,"internal_name":"Arbalest"},"527":{"Cost":{"Food":230,"Gold":100},"ID":901,"ResearchTime":50,"internal_name":"War Galley"},"528":{"Cost":{"Gold":300,"Wood":200},"ID":901,"ResearchTime":50,"internal_name":"Heavy Demolition"},"529":{"Cost":{"Food":230,"Gold":100},"ID":901,"ResearchTime":50,"internal_name":"War Galley"},"530":{"Cost":{"Food":850,"Gold":850},"ID":901,"ResearchTime":60,"internal_name":"Elite Longbow"},"531":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":45,"internal_name":"Elite Throwing Axemen"},"532":{"Cost":{"Gold":250,"Wood":280},"ID":901,"ResearchTime":50,"internal_name":"Fast Fire Ship"},"533":{"Cost":{"Food":750,"Gold":475},"ID":901,"ResearchTime":60,"internal_name":"Unique Heroic Viking LBT"},"534":{"Cost":{"Food":1000,"Gold":800},"ID":901,"ResearchTime":45,"internal_name":"Elite Woad Raider"},"542":{"Cost":{"Food":800,"Wood":900},"ID":901,"ResearchTime":50,"internal_name":"Heavy Scorpion"},"546":{"Cost":{"Food":150,"Gold":50},"ID":901,"ResearchTime":45,"internal_name":"Light Cavalry"},"548":{"Cost":{"Food":1000},"ID":901,"ResearchTime":75,"internal_name":"Siege Ram"},"550":{"Cost":{"Food":800,"Gold":500},"ID":901,"ResearchTime":75,"internal_name":"Onager"},"553":{"Cost":{"Food":1200,"Gold":800},"ID":901,"ResearchTime":50,"internal_name":"Elite Cataphract"},"554":{"Cost":{"Food":950,"Gold":500},"ID":901,"ResearchTime":50,"internal_name":"Elite Teutonic Knight"},"555":{"Cost":{"Food":1200,"Gold":550},"ID":901,"ResearchTime":40,"internal_name":"Elite Huskarl"},"556":{"Cost":{"Food":600,"Gold":500},"ID":901,"ResearchTime":50,"internal_name":"Elite Mameluke"},"557":{"Cost":{"Food":850,"Gold":750},"ID":901,"ResearchTime":55,"internal_name":"Elite Jannisary"},"558":{"Cost":{"Food":1600,"Gold":1200},"ID":901,"ResearchTime":75,"internal_name":"Elite War Elephant"},"559":{"Cost":{"Food":950,"Gold":950},"ID":901,"ResearchTime":50,"internal_name":"Elite Chu Ko Nu"},"560":{"Cost":{"Food":750,"Gold":650},"ID":901,"ResearchTime":60,"internal_name":"Elite Samurai"},"561":{"Cost":{"Food":1100,"Gold":675},"ID":901,"ResearchTime":50,"internal_name":"Elite Mangudai"},"567":{"Cost":{"Food":750,"Gold":350},"ID":901,"ResearchTime":85,"internal_name":"Champion"},"569":{"Cost":{"Food":1300,"Gold":750},"ID":901,"ResearchTime":170,"internal_name":"Paladin"},"588":{"Cost":{"Food":1450,"Gold":1000},"ID":901,"ResearchTime":150,"internal_name":"Siege Onager"},"691":{"Cost":{"Gold":500,"Wood":525},"ID":901,"ResearchTime":30,"internal_name":"Elite Cannon Galley"},"694":{"Cost":{"Food":1075,"Gold":475},"ID":901,"ResearchTime":45,"internal_name":"Elite Berserk"},"726":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Jaguar Man"},"752":{"Cost":{"Food":800,"Gold":500},"ID":901,"ResearchTime":50,"internal_name":"Elite Eagle Warrior"},"753":{"Cost":{"Food":200,"Gold":200},"ID":901,"ResearchTime":50,"internal_name":"Heavy Eagle Warrior"},"757":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Tarkan"},"761":{"Cost":{"Food":1200,"Gold":550},"ID":901,"ResearchTime":40,"internal_name":"Elite Huskarl"},"765":{"Cost":{"Food":700,"Wood":1000},"ID":901,"ResearchTime":45,"internal_name":"Elite Plumed Archer"},"773":{"Cost":{"Food":1200,"Gold":600},"ID":901,"ResearchTime":60,"internal_name":"Elite Conquistador"},"829":{"Cost":{"Gold":800,"Wood":1000},"ID":901,"ResearchTime":75,"internal_name":"Elite War Wagon"},"832":{"Cost":{"Food":1000,"Gold":800},"ID":901,"ResearchTime":65,"internal_name":"Elite Turtle Ship"},"868":{"Cost":{"Food":900,"Gold":750},"ID":901,"ResearchTime":60,"internal_name":"Elite Genoese Bow"},"871":{"Cost":{"Food":800,"Gold":600},"ID":901,"ResearchTime":60,"internal_name":"Elite Magyar Huszar"},"875":{"Cost":{"Food":900,"Gold":500},"ID":901,"ResearchTime":80,"internal_name":"Elite Elephant Archer"},"878":{"Cost":{"Food":1000,"Gold":600},"ID":901,"ResearchTime":60,"internal_name":"Elite Siege Tower"},"881":{"Cost":{"Food":900,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Kamayuk"},"887":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Tarkan"},"1003":{"Cost":{"Food":1200,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Organ Gun"},"1006":{"Cost":{"Food":700,"Gold":525},"ID":901,"ResearchTime":60,"internal_name":"Elite Caravel"},"1009":{"Cost":{"Gold":500,"Wood":1000},"ID":901,"ResearchTime":45,"internal_name":"Elite Camel Archer"},"1012":{"Cost":{"Food":500,"Wood":450},"ID":901,"ResearchTime":60,"internal_name":"Elite Genitour"},"1015":{"Cost":{"Food":900,"Gold":600},"ID":901,"ResearchTime":45,"internal_name":"Elite Mali Unit"},"1018":{"Cost":{"Food":900,"Gold":450},"ID":901,"ResearchTime":45,"internal_name":"Elite Ethiopia Unit"},"1122":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":70,"internal_name":"Elite Ballista Elephant"},"1125":{"Cost":{"Food":900,"Gold":600},"ID":901,"ResearchTime":40,"internal_name":"Elite Karambit Warrior"},"1128":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":65,"internal_name":"Elite Arambai"},"1131":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":45,"internal_name":"Elite Rattan Archer"},"1132":{"Cost":{},"ID":901,"ResearchTime":0,"internal_name":"Battle Elephant (make avail)"},"1134":{"Cost":{"Food":1100,"Gold":700},"ID":901,"ResearchTime":100,"internal_name":"Elite Battle Elephant"},"1155":{"Cost":{"Gold":300,"Wood":300},"ID":901,"ResearchTime":50,"internal_name":"Imperial Skirmisher"},"1227":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":70,"internal_name":"Elite Konnik"},"1230":{"Cost":{"Food":700,"Gold":900},"ID":901,"ResearchTime":40,"internal_name":"Elite Keshik"},"1233":{"Cost":{"Food":1100,"Wood":1000},"ID":901,"ResearchTime":65,"internal_name":"Elite Kipchak"},"1236":{"Cost":{"Food":750,"Gold":750},"ID":901,"ResearchTime":45,"internal_name":"Elite Leitis"},"1255":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":70,"internal_name":"Elite Konnik"},"1372":{"Cost":{"Food":900,"Gold":550},"ID":901,"ResearchTime":55,"internal_name":"Elite Steppe Lancer"},"1657":{"Cost":{"Food":1000,"Gold":800},"ID":901,"ResearchTime":45,"internal_name":"Elite Coustillier"},"1659":{"Cost":{"Food":800,"Gold":675},"ID":901,"ResearchTime":45,"internal_name":"Elite Serjeant"},"1661":{"Cost":{"Food":800,"Gold":675},"ID":901,"ResearchTime":45,"internal_name":"Elite Serjeant"},"1703":{"Cost":{"Food":800,"Gold":600},"ID":901,"ResearchTime":45,"internal_name":"Elite Obuch"},"1706":{"Cost":{"Gold":600,"Wood":800},"ID":901,"ResearchTime":45,"internal_name":"Elite Hussite Wagon"},"1707":{"Cost":{"Food":600,"Gold":800},"ID":901,"ResearchTime":60,"internal_name":"Winged Hussar"},"1709":{"Cost":{"Food":1100,"Gold":800},"ID":901,"ResearchTime":140,"internal_name":"Houfnice"},"1737":{"Cost":{"Food":900,"Gold":450},"ID":901,"ResearchTime":45,"internal_name":"Elite Urumi Swordsman"},"1743":{"Cost":{"Food":1000,"Gold":650},"ID":901,"ResearchTime":45,"internal_name":"Elite Chakram Thrower"},"1746":{"Cost":{"Food":850},"ID":901,"ResearchTime":60,"internal_name":"Elite Armored Elephant"},"1749":{"Cost":{"Food":950,"Gold":575},"ID":901,"ResearchTime":45,"internal_name":"Elite Ghulam"},"1753":{"Cost":{"Food":850,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Shrivamsha Rider"},"1761":{"Cost":{"Food":800,"Wood":800},"ID":901,"ResearchTime":45,"internal_name":"Elite Ratha"},"1787":{"Cost":{"Food":160,"Gold":90},"ID":901,"ResearchTime":35,"internal_name":"Pikeman"},"1788":{"Cost":{"Food":300,"Gold":600},"ID":901,"ResearchTime":50,"internal_name":"Halberdier"},"1792":{"Cost":{"Food":1100,"Gold":900},"ID":901,"ResearchTime":60,"internal_name":"Elite Centurion"},"1793":{"Cost":{"Food":800,"Gold":400},"ID":901,"ResearchTime":100,"internal_name":"Legionary"}},"units":{"4":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0.35,"Attacks":[{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":4,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":13}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":25},"FrameDelay":15,"GarrisonCapacity":0,"HP":30,"ID":4,"LanguageHelpId":26083,"LanguageNameId":5083,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":35,"Trait":0,"TraitPiece":0,"internal_name":"ARCHR"},"5":{"AccuracyPercent":75,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":17,"AttackDelaySeconds":0.35,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":11},{"Amount":10,"Class":1},{"Amount":17,"Class":3},{"Amount":2,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":45,"Gold":50},"FrameDelay":15,"GarrisonCapacity":0,"HP":40,"ID":5,"LanguageHelpId":26086,"LanguageNameId":5086,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":7,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.96,"TrainTime":34,"Trait":0,"TraitPiece":0,"internal_name":"HCANR"},"6":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":4,"Class":3},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":3,"AttackDelaySeconds":0.5066666666666667,"Attacks":[{"Amount":2,"Class":28},{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":4,"Class":15},{"Amount":3,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Wood":35},"FrameDelay":19,"GarrisonCapacity":0,"HP":35,"ID":6,"LanguageHelpId":26087,"LanguageNameId":5087,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":4,"Range":5,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"HXBOW"},"7":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":3,"Class":3},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":2,"AttackDelaySeconds":0.5066666666666667,"Attacks":[{"Amount":0,"Class":28},{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":3,"Class":15},{"Amount":2,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Wood":35},"FrameDelay":19,"GarrisonCapacity":0,"HP":30,"ID":7,"LanguageHelpId":26088,"LanguageNameId":5088,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":3,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"XBOWM"},"8":{"AccuracyPercent":70,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":40,"Wood":35},"FrameDelay":10,"GarrisonCapacity":0,"HP":35,"ID":8,"LanguageHelpId":26107,"LanguageNameId":5107,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"LNGBW"},"11":{"AccuracyPercent":95,"Armours":[{"Amount":0,"Class":28},{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.49833333333333335,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17},{"Amount":3,"Class":20},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":65,"Wood":55},"FrameDelay":23,"GarrisonCapacity":0,"HP":60,"ID":11,"LanguageHelpId":26108,"LanguageNameId":5108,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2.1,"Speed":1.4,"TrainTime":26,"Trait":0,"TraitPiece":0,"internal_name":"MOSUN"},"13":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":34},{"Amount":0,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Wood":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":13,"LanguageHelpId":26090,"LanguageNameId":5090,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":1.26,"TrainTime":40,"Trait":2,"TraitPiece":0,"internal_name":"FSHSP"},"17":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":17,"LanguageHelpId":26089,"LanguageNameId":5089,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":1.32,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"COGXX"},"21":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":9,"Class":16},{"Amount":7,"Class":3},{"Amount":4,"Class":17},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":30,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":135,"ID":21,"LanguageHelpId":26091,"LanguageNameId":5091,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":6,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"GALLY"},"24":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.35,"Attacks":[{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":5,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":13}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":25},"FrameDelay":15,"GarrisonCapacity":0,"HP":35,"ID":24,"LanguageHelpId":26084,"LanguageNameId":5084,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":27,"Trait":0,"TraitPiece":0,"internal_name":"CARCH"},"25":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":7,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":4,"Class":29},{"Amount":4,"Class":21},{"Amount":14,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":85,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":25,"LanguageHelpId":26112,"LanguageNameId":5112,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":7,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.8,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"TKNIT"},"36":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":5,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":40,"AttackDelaySeconds":0.21,"Attacks":[{"Amount":200,"Class":11},{"Amount":40,"Class":16},{"Amount":40,"Class":4},{"Amount":20,"Class":20},{"Amount":40,"Class":13},{"Amount":40,"Class":34},{"Amount":40,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":225,"Wood":225},"FrameDelay":7,"GarrisonCapacity":0,"HP":80,"ID":36,"LanguageHelpId":26093,"LanguageNameId":5093,"LineOfSight":14,"MaxCharge":0,"MeleeArmor":2,"MinRange":5,"PierceArmor":5,"Range":12,"RechargeRate":0,"ReloadTime":6.5,"Speed":0.7,"TrainTime":56,"Trait":0,"TraitPiece":0,"internal_name":"BCANN"},"38":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":38,"LanguageHelpId":26068,"LanguageNameId":5068,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.35,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"KNGHT"},"39":{"AccuracyPercent":50,"Armours":[{"Amount":0,"Class":28},{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.9099999999999999,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":40},"FrameDelay":35,"GarrisonCapacity":0,"HP":50,"ID":39,"LanguageHelpId":26085,"LanguageNameId":5085,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":34,"Trait":0,"TraitPiece":0,"internal_name":"CVRCH"},"40":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":12,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":1},{"Amount":9,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":9,"Class":32},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":110,"ID":40,"LanguageHelpId":26101,"LanguageNameId":5101,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.35,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"CATAP"},"41":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":10,"Class":4},{"Amount":6,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":41,"LanguageHelpId":26104,"LanguageNameId":5104,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.05,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"GBRSK"},"42":{"AccuracyPercent":15,"Armours":[{"Amount":1,"Class":4},{"Amount":150,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":200,"AttackDelaySeconds":0.8800000000000001,"Attacks":[{"Amount":250,"Class":11},{"Amount":200,"Class":3}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":200,"Wood":200},"FrameDelay":24,"GarrisonCapacity":0,"HP":150,"ID":42,"LanguageHelpId":26097,"LanguageNameId":5097,"LineOfSight":19,"MaxCharge":0,"MeleeArmor":1,"MinRange":4,"PierceArmor":150,"Range":16,"RechargeRate":0,"ReloadTime":10,"Speed":0,"TrainTime":50,"Trait":0,"TraitPiece":0,"internal_name":"TREBU"},"46":{"AccuracyPercent":50,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":17,"AttackDelaySeconds":0.4,"Attacks":[{"Amount":0,"Class":11},{"Amount":17,"Class":3},{"Amount":2,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":55},"FrameDelay":12,"GarrisonCapacity":0,"HP":35,"ID":46,"LanguageHelpId":26105,"LanguageNameId":5105,"LineOfSight":10,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":7,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.96,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"JANNI"},"73":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0.22166666666666665,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":8,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":35,"Wood":40},"FrameDelay":19,"GarrisonCapacity":0,"HP":45,"ID":73,"LanguageHelpId":26102,"LanguageNameId":5102,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"CHUKN"},"74":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":29},{"Amount":0,"Class":21},{"Amount":4,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":40,"ID":74,"LanguageHelpId":26079,"LanguageNameId":5079,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"SPRMN"},"75":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":6,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":75,"LanguageHelpId":26080,"LanguageNameId":5080,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"SWDMN"},"77":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":6,"Class":29},{"Amount":3,"Class":21},{"Amount":9,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":77,"LanguageHelpId":26081,"LanguageNameId":5081,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"THSWD"},"83":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":11},{"Amount":3,"Class":4},{"Amount":6,"Class":13},{"Amount":0,"Class":14},{"Amount":0,"Class":17},{"Amount":6,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":25,"ID":83,"LanguageHelpId":26121,"LanguageNameId":5606,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.8,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"VMBAS"},"93":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":15,"Class":5},{"Amount":3,"Class":4},{"Amount":15,"Class":8},{"Amount":9,"Class":16},{"Amount":12,"Class":30},{"Amount":4,"Class":35},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":93,"LanguageHelpId":26078,"LanguageNameId":5078,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"PKEMN"},"125":{"AccuracyPercent":25,"Armours":[{"Amount":0,"Class":25},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":0,"Gold":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":30,"ID":125,"LanguageHelpId":26099,"LanguageNameId":5099,"LineOfSight":11,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":9,"RechargeRate":0,"ReloadTime":1,"Speed":0.7,"TrainTime":51,"Trait":0,"TraitPiece":0,"internal_name":"MONKX"},"128":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":128,"LanguageHelpId":26100,"LanguageNameId":19052,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":1,"TrainTime":51,"Trait":0,"TraitPiece":0,"internal_name":"TCART"},"185":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0.795872,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":4,"Class":3},{"Amount":3,"Class":17},{"Amount":10,"Class":1},{"Amount":10,"Class":32}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":40,"Gold":40},"FrameDelay":14,"GarrisonCapacity":0,"HP":40,"ID":185,"LanguageHelpId":26690,"LanguageNameId":5690,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"SLINGR"},"207":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":4},{"Amount":18,"Class":8},{"Amount":9,"Class":16},{"Amount":0,"Class":11},{"Amount":9,"Class":30},{"Amount":0,"Class":21},{"Amount":7,"Class":35},{"Amount":9,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":60},"FrameDelay":0,"GarrisonCapacity":1,"HP":140,"ID":207,"LanguageHelpId":26419,"LanguageNameId":5419,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"SHCLRY"},"232":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":11,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":232,"LanguageHelpId":26113,"LanguageNameId":5113,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":10,"Trait":0,"TraitPiece":0,"internal_name":"WBRSK"},"239":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":5},{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":15,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":15,"Class":4},{"Amount":7,"Class":13},{"Amount":0,"Class":15},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":170,"Gold":85},"FrameDelay":0,"GarrisonCapacity":0,"HP":450,"ID":239,"LanguageHelpId":26109,"LanguageNameId":5109,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.6,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"MPCAV"},"250":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":9,"Class":16},{"Amount":7,"Class":3},{"Amount":4,"Class":17},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":130,"ID":250,"LanguageHelpId":26106,"LanguageNameId":5106,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":6,"RechargeRate":0,"ReloadTime":3,"Speed":1.54,"TrainTime":25,"Trait":2,"TraitPiece":0,"internal_name":"LNGBT"},"279":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0.21,"Attacks":[{"Amount":2,"Class":11},{"Amount":6,"Class":5},{"Amount":0,"Class":4},{"Amount":12,"Class":3},{"Amount":1,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":75},"FrameDelay":42,"GarrisonCapacity":0,"HP":40,"ID":279,"LanguageHelpId":26096,"LanguageNameId":5096,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":2,"PierceArmor":7,"Range":7,"RechargeRate":0,"ReloadTime":3.6,"Speed":0.65,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"SCBAL"},"280":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":40,"AttackDelaySeconds":0,"Attacks":[{"Amount":35,"Class":11},{"Amount":40,"Class":4},{"Amount":12,"Class":20},{"Amount":40,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":135,"Wood":160},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":280,"LanguageHelpId":26095,"LanguageNameId":5095,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":6,"Range":7,"RechargeRate":0,"ReloadTime":6,"Speed":0.6,"TrainTime":46,"Trait":0,"TraitPiece":0,"internal_name":"MANGO"},"281":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.9955555555555556,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":7,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":25},"FrameDelay":28,"GarrisonCapacity":0,"HP":60,"ID":281,"LanguageHelpId":26111,"LanguageNameId":5111,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":3,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"TAXEM"},"282":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":35},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":8,"AttackDelaySeconds":0.4,"Attacks":[{"Amount":0,"Class":11},{"Amount":8,"Class":4},{"Amount":9,"Class":8},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":85},"FrameDelay":24,"GarrisonCapacity":0,"HP":65,"ID":282,"LanguageHelpId":26103,"LanguageNameId":5103,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":3,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":23,"Trait":0,"TraitPiece":0,"internal_name":"DERVI"},"283":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":283,"LanguageHelpId":26070,"LanguageNameId":5070,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.35,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"PALDN"},"291":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":10,"Class":4},{"Amount":10,"Class":19},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":291,"LanguageHelpId":26110,"LanguageNameId":5110,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1,"TrainTime":9,"Trait":0,"TraitPiece":0,"internal_name":"SMURI"},"329":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":6,"Class":4},{"Amount":9,"Class":8},{"Amount":5,"Class":16},{"Amount":0,"Class":11},{"Amount":5,"Class":30},{"Amount":0,"Class":21},{"Amount":5,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":60},"FrameDelay":0,"GarrisonCapacity":1,"HP":100,"ID":329,"LanguageHelpId":26416,"LanguageNameId":5416,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"CVLRY"},"330":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":4},{"Amount":18,"Class":8},{"Amount":9,"Class":16},{"Amount":0,"Class":11},{"Amount":9,"Class":30},{"Amount":0,"Class":21},{"Amount":7,"Class":35},{"Amount":9,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":60},"FrameDelay":0,"GarrisonCapacity":1,"HP":120,"ID":330,"LanguageHelpId":26417,"LanguageNameId":5417,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"HCLRY"},"331":{"AccuracyPercent":92,"Armours":[{"Amount":2,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":200,"AttackDelaySeconds":0,"Attacks":[{"Amount":250,"Class":11},{"Amount":200,"Class":3}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":200,"Wood":200},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":331,"LanguageHelpId":26381,"LanguageNameId":5097,"LineOfSight":19,"MaxCharge":0,"MeleeArmor":2,"MinRange":4,"PierceArmor":8,"Range":16,"RechargeRate":0,"ReloadTime":10,"Speed":0.8,"TrainTime":50,"Trait":0,"TraitPiece":0,"internal_name":"PTREB"},"358":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":25,"Class":5},{"Amount":4,"Class":4},{"Amount":22,"Class":8},{"Amount":16,"Class":16},{"Amount":18,"Class":30},{"Amount":11,"Class":35},{"Amount":16,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":358,"LanguageHelpId":26408,"LanguageNameId":5408,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"ISPKM"},"359":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":28,"Class":5},{"Amount":6,"Class":4},{"Amount":32,"Class":8},{"Amount":17,"Class":16},{"Amount":26,"Class":30},{"Amount":11,"Class":35},{"Amount":17,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":359,"LanguageHelpId":26409,"LanguageNameId":5409,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"HLBDM"},"420":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":200,"Class":11},{"Amount":50,"Class":4},{"Amount":25,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":150,"Wood":200},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":420,"LanguageHelpId":26287,"LanguageNameId":5287,"LineOfSight":15,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":6,"Range":13,"RechargeRate":0,"ReloadTime":10,"Speed":1.1,"TrainTime":46,"Trait":2,"TraitPiece":0,"internal_name":"CANGA"},"422":{"AccuracyPercent":100,"Armours":[{"Amount":-3,"Class":4},{"Amount":190,"Class":3},{"Amount":1,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":150,"Class":11},{"Amount":3,"Class":4},{"Amount":50,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":160},"FrameDelay":0,"GarrisonCapacity":6,"HP":200,"ID":422,"LanguageHelpId":26289,"LanguageNameId":5289,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":-3,"MinRange":0,"PierceArmor":190,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":0.6,"TrainTime":36,"Trait":1,"TraitPiece":0,"internal_name":"CBATR"},"440":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":25,"AttackDelaySeconds":0,"Attacks":[{"Amount":100,"Class":26},{"Amount":500,"Class":11},{"Amount":25,"Class":4},{"Amount":60,"Class":20},{"Amount":900,"Class":22}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":440,"LanguageHelpId":26660,"LanguageNameId":5660,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":0.8,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"PETARD"},"441":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":25},{"Amount":7,"Class":4},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":15},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80},"FrameDelay":0,"GarrisonCapacity":0,"HP":75,"ID":441,"LanguageHelpId":26661,"LanguageNameId":5661,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.5,"TrainTime":30,"Trait":16,"TraitPiece":0,"internal_name":"HUSSAR"},"442":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":11},{"Amount":11,"Class":16},{"Amount":8,"Class":3},{"Amount":4,"Class":17},{"Amount":11,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":30,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":165,"ID":442,"LanguageHelpId":26309,"LanguageNameId":5309,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":7,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"WARGA"},"448":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":6,"Class":25},{"Amount":3,"Class":4},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":15},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":448,"LanguageHelpId":26326,"LanguageNameId":5326,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":30,"Trait":16,"TraitPiece":0,"internal_name":"SCOUT"},"473":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":29},{"Amount":4,"Class":21},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":473,"LanguageHelpId":26411,"LanguageNameId":5411,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"HTHSW"},"474":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":28},{"Amount":1,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.8969999999999999,"Attacks":[{"Amount":4,"Class":27},{"Amount":0,"Class":21},{"Amount":7,"Class":3},{"Amount":0,"Class":17},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":40},"FrameDelay":46,"GarrisonCapacity":0,"HP":60,"ID":474,"LanguageHelpId":26412,"LanguageNameId":5412,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":27,"Trait":0,"TraitPiece":0,"internal_name":"HCVAR"},"492":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.3422222222222222,"Attacks":[{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":13}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":25},"FrameDelay":20,"GarrisonCapacity":0,"HP":40,"ID":492,"LanguageHelpId":26418,"LanguageNameId":5418,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":27,"Trait":0,"TraitPiece":0,"internal_name":"ACOAR"},"527":{"AccuracyPercent":100,"Armours":[{"Amount":3,"Class":16},{"Amount":0,"Class":4},{"Amount":3,"Class":3},{"Amount":0,"Class":31}],"Attack":110,"AttackDelaySeconds":0,"Attacks":[{"Amount":220,"Class":11},{"Amount":110,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":527,"LanguageHelpId":26424,"LanguageNameId":5424,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":1.6,"TrainTime":31,"Trait":2,"TraitPiece":0,"internal_name":"RMSHP"},"528":{"AccuracyPercent":100,"Armours":[{"Amount":5,"Class":16},{"Amount":0,"Class":4},{"Amount":5,"Class":3},{"Amount":0,"Class":31}],"Attack":140,"AttackDelaySeconds":0,"Attacks":[{"Amount":280,"Class":11},{"Amount":140,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":528,"LanguageHelpId":26425,"LanguageNameId":5425,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":5,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":1.6,"TrainTime":31,"Trait":2,"TraitPiece":0,"internal_name":"CRMSH"},"529":{"AccuracyPercent":0,"Armours":[{"Amount":6,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":2,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":11},{"Amount":3,"Class":16},{"Amount":2,"Class":2},{"Amount":1,"Class":4},{"Amount":2,"Class":3},{"Amount":3,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":529,"LanguageHelpId":26426,"LanguageNameId":5426,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":2.49,"RechargeRate":0,"ReloadTime":0.25,"Speed":1.35,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"FRGAL"},"530":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":7,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":40,"Wood":35},"FrameDelay":10,"GarrisonCapacity":0,"HP":40,"ID":530,"LanguageHelpId":26456,"LanguageNameId":5456,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":6,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"ULGBW"},"531":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0.8177777777777778,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":8,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":25},"FrameDelay":23,"GarrisonCapacity":0,"HP":70,"ID":531,"LanguageHelpId":26461,"LanguageNameId":5461,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"UTAXE"},"532":{"AccuracyPercent":0,"Armours":[{"Amount":9,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":11},{"Amount":4,"Class":16},{"Amount":3,"Class":2},{"Amount":1,"Class":4},{"Amount":3,"Class":3},{"Amount":4,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":140,"ID":532,"LanguageHelpId":26429,"LanguageNameId":5429,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":2.49,"RechargeRate":0,"ReloadTime":0.25,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"HFGAL"},"533":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":10,"Class":16},{"Amount":8,"Class":3},{"Amount":4,"Class":17},{"Amount":10,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":160,"ID":533,"LanguageHelpId":26457,"LanguageNameId":5457,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":7,"RechargeRate":0,"ReloadTime":3,"Speed":1.54,"TrainTime":25,"Trait":2,"TraitPiece":0,"internal_name":"ULNGB"},"534":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":14,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":85,"ID":534,"LanguageHelpId":26463,"LanguageNameId":5463,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":10,"Trait":0,"TraitPiece":0,"internal_name":"UWBRS"},"539":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":6,"Class":11},{"Amount":8,"Class":16},{"Amount":6,"Class":3},{"Amount":3,"Class":17},{"Amount":8,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":30,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":539,"LanguageHelpId":26436,"LanguageNameId":5436,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":5,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":60,"Trait":2,"TraitPiece":0,"internal_name":"SGALY"},"542":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":16,"AttackDelaySeconds":0.20800000000000002,"Attacks":[{"Amount":4,"Class":11},{"Amount":8,"Class":5},{"Amount":0,"Class":4},{"Amount":16,"Class":3},{"Amount":2,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":75},"FrameDelay":26,"GarrisonCapacity":0,"HP":55,"ID":542,"LanguageHelpId":26439,"LanguageNameId":5439,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":2,"PierceArmor":8,"Range":7,"RechargeRate":0,"ReloadTime":3.6,"Speed":0.65,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"HWBAL"},"545":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":16},{"Amount":4,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Wood":125},"FrameDelay":0,"GarrisonCapacity":5,"HP":100,"ID":545,"LanguageHelpId":26443,"LanguageNameId":5443,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":4,"MinRange":0,"PierceArmor":8,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":1.45,"TrainTime":46,"Trait":3,"TraitPiece":0,"internal_name":"XPORT"},"546":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":25},{"Amount":7,"Class":4},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":15},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":546,"LanguageHelpId":26444,"LanguageNameId":5444,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.5,"TrainTime":30,"Trait":16,"TraitPiece":0,"internal_name":"LTCAV"},"548":{"AccuracyPercent":100,"Armours":[{"Amount":-3,"Class":4},{"Amount":195,"Class":3},{"Amount":2,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":200,"Class":11},{"Amount":4,"Class":4},{"Amount":65,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":160},"FrameDelay":0,"GarrisonCapacity":6,"HP":270,"ID":548,"LanguageHelpId":26446,"LanguageNameId":5446,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":-3,"MinRange":0,"PierceArmor":195,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":0.6,"TrainTime":36,"Trait":1,"TraitPiece":0,"internal_name":"SGRAM"},"550":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":45,"Class":11},{"Amount":50,"Class":4},{"Amount":12,"Class":20},{"Amount":50,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":135,"Wood":160},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":550,"LanguageHelpId":26448,"LanguageNameId":5448,"LineOfSight":10,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":7,"Range":8,"RechargeRate":0,"ReloadTime":6,"Speed":0.6,"TrainTime":46,"Trait":0,"TraitPiece":0,"internal_name":"ONAGR"},"553":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":16,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":1},{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":10,"Class":32},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":553,"LanguageHelpId":26451,"LanguageNameId":5451,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.7,"Speed":1.35,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"UCATA"},"554":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":10,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":17,"AttackDelaySeconds":0,"Attacks":[{"Amount":4,"Class":29},{"Amount":4,"Class":21},{"Amount":17,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":85,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":554,"LanguageHelpId":26462,"LanguageNameId":5462,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":10,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.8,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"UTKNI"},"555":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":12,"Class":4},{"Amount":10,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":555,"LanguageHelpId":26454,"LanguageNameId":5454,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.05,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"UGBRS"},"556":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":35},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":10,"AttackDelaySeconds":0.2,"Attacks":[{"Amount":0,"Class":11},{"Amount":10,"Class":4},{"Amount":12,"Class":8},{"Amount":0,"Class":21},{"Amount":1,"Class":35},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":85},"FrameDelay":12,"GarrisonCapacity":0,"HP":80,"ID":556,"LanguageHelpId":26453,"LanguageNameId":5453,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":3,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":23,"Trait":0,"TraitPiece":0,"internal_name":"UDERV"},"557":{"AccuracyPercent":65,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":22,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":11},{"Amount":22,"Class":3},{"Amount":3,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":55},"FrameDelay":0,"GarrisonCapacity":0,"HP":40,"ID":557,"LanguageHelpId":26455,"LanguageNameId":5455,"LineOfSight":10,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":0,"Range":8,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.96,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"UJANI"},"558":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":5},{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":20,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":11},{"Amount":20,"Class":4},{"Amount":10,"Class":13},{"Amount":0,"Class":15},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":170,"Gold":85},"FrameDelay":0,"GarrisonCapacity":0,"HP":600,"ID":558,"LanguageHelpId":26459,"LanguageNameId":5459,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.6,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"UMPCAV"},"559":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0.22166666666666665,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":8,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":35,"Wood":40},"FrameDelay":19,"GarrisonCapacity":0,"HP":50,"ID":559,"LanguageHelpId":26452,"LanguageNameId":5452,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":13,"Trait":0,"TraitPiece":0,"internal_name":"UCHUK"},"560":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":12,"Class":4},{"Amount":12,"Class":19},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":560,"LanguageHelpId":26460,"LanguageNameId":5460,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1,"TrainTime":9,"Trait":0,"TraitPiece":0,"internal_name":"USMUR"},"561":{"AccuracyPercent":95,"Armours":[{"Amount":0,"Class":28},{"Amount":1,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0.49833333333333335,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":8,"Class":3},{"Amount":0,"Class":17},{"Amount":5,"Class":20},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":65,"Wood":55},"FrameDelay":23,"GarrisonCapacity":0,"HP":60,"ID":561,"LanguageHelpId":26458,"LanguageNameId":5458,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2.1,"Speed":1.4,"TrainTime":26,"Trait":0,"TraitPiece":0,"internal_name":"UMOSU"},"567":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":29},{"Amount":4,"Class":21},{"Amount":13,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":567,"LanguageHelpId":26469,"LanguageNameId":5469,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"HEROI"},"569":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":160,"ID":569,"LanguageHelpId":26471,"LanguageNameId":5471,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.35,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"HEROC"},"588":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":75,"AttackDelaySeconds":0,"Attacks":[{"Amount":60,"Class":11},{"Amount":75,"Class":4},{"Amount":12,"Class":20},{"Amount":50,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":135,"Wood":160},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":588,"LanguageHelpId":26493,"LanguageNameId":5493,"LineOfSight":10,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":8,"Range":8,"RechargeRate":0,"ReloadTime":6,"Speed":0.6,"TrainTime":46,"Trait":0,"TraitPiece":0,"internal_name":"SNAGR"},"691":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":60,"AttackDelaySeconds":0,"Attacks":[{"Amount":275,"Class":11},{"Amount":60,"Class":4},{"Amount":25,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":150,"Wood":200},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":691,"LanguageHelpId":26573,"LanguageNameId":5573,"LineOfSight":17,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":8,"Range":15,"RechargeRate":0,"ReloadTime":10,"Speed":1.1,"TrainTime":46,"Trait":2,"TraitPiece":0,"internal_name":"CNGAU"},"692":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":54,"ID":692,"LanguageHelpId":26574,"LanguageNameId":5574,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.05,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"VBRSK"},"694":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":14,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":62,"ID":694,"LanguageHelpId":26576,"LanguageNameId":5576,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.05,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"UVBRK"},"725":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":10,"Class":1},{"Amount":10,"Class":4},{"Amount":0,"Class":8},{"Amount":10,"Class":32},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":65,"ID":725,"LanguageHelpId":26667,"LanguageNameId":5667,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"JAGUAR"},"726":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":11,"Class":1},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":10,"Class":32},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":75,"ID":726,"LanguageHelpId":26669,"LanguageNameId":5669,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"JAGUARX"},"751":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":29},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":25},{"Amount":4,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":20},{"Amount":0,"Class":21},{"Amount":0,"Class":16},{"Amount":0,"Class":30},{"Amount":0,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":751,"LanguageHelpId":26672,"LanguageNameId":5672,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.1,"TrainTime":60,"Trait":16,"TraitPiece":0,"internal_name":"EAGLE"},"752":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":29},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":25},{"Amount":9,"Class":4},{"Amount":4,"Class":8},{"Amount":2,"Class":16},{"Amount":5,"Class":20},{"Amount":0,"Class":21},{"Amount":3,"Class":30},{"Amount":2,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":752,"LanguageHelpId":26673,"LanguageNameId":5673,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":20,"Trait":16,"TraitPiece":0,"internal_name":"EAGLEX"},"753":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":29},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":3,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":25},{"Amount":7,"Class":4},{"Amount":3,"Class":8},{"Amount":3,"Class":20},{"Amount":1,"Class":16},{"Amount":0,"Class":21},{"Amount":2,"Class":30},{"Amount":1,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":753,"LanguageHelpId":26671,"LanguageNameId":5671,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.15,"TrainTime":35,"Trait":16,"TraitPiece":0,"internal_name":"EAGLEH"},"755":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":26},{"Amount":8,"Class":11},{"Amount":8,"Class":4},{"Amount":0,"Class":15},{"Amount":12,"Class":13},{"Amount":8,"Class":22},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":60},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":755,"LanguageHelpId":26675,"LanguageNameId":5675,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2.1,"Speed":1.35,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"TARKAN"},"757":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":26},{"Amount":10,"Class":11},{"Amount":11,"Class":4},{"Amount":0,"Class":15},{"Amount":12,"Class":13},{"Amount":10,"Class":22},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":60},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":757,"LanguageHelpId":26677,"LanguageNameId":5677,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":2.1,"Speed":1.35,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"UTARK"},"763":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":1,"Class":1},{"Amount":5,"Class":3},{"Amount":0,"Class":17},{"Amount":1,"Class":32}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":55,"Wood":55},"FrameDelay":15,"GarrisonCapacity":0,"HP":50,"ID":763,"LanguageHelpId":26683,"LanguageNameId":5683,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.2,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"PLUME"},"765":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":2,"Class":1},{"Amount":5,"Class":3},{"Amount":0,"Class":17},{"Amount":2,"Class":32}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":55,"Wood":55},"FrameDelay":15,"GarrisonCapacity":0,"HP":65,"ID":765,"LanguageHelpId":26685,"LanguageNameId":5685,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":5,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.2,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"UPLUM"},"771":{"AccuracyPercent":65,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":16,"AttackDelaySeconds":0.40444444444444444,"Attacks":[{"Amount":0,"Class":11},{"Amount":16,"Class":3},{"Amount":4,"Class":17},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":13,"GarrisonCapacity":0,"HP":55,"ID":771,"LanguageHelpId":26687,"LanguageNameId":5687,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":6,"RechargeRate":0,"ReloadTime":2.9,"Speed":1.3,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"CONQI"},"773":{"AccuracyPercent":70,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":18,"AttackDelaySeconds":0.40444444444444444,"Attacks":[{"Amount":2,"Class":11},{"Amount":18,"Class":3},{"Amount":6,"Class":17},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":13,"GarrisonCapacity":0,"HP":70,"ID":773,"LanguageHelpId":26689,"LanguageNameId":5689,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":6,"RechargeRate":0,"ReloadTime":2.9,"Speed":1.3,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"UCONQ"},"775":{"AccuracyPercent":25,"Armours":[{"Amount":0,"Class":25},{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":30,"ID":775,"LanguageHelpId":26691,"LanguageNameId":5691,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":7,"RechargeRate":0,"ReloadTime":1,"Speed":1.1,"TrainTime":51,"Trait":0,"TraitPiece":0,"internal_name":"MONKY"},"827":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":-1,"Class":28},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0.9955555555555555,"Attacks":[{"Amount":5,"Class":21},{"Amount":9,"Class":3},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":200},"FrameDelay":32,"GarrisonCapacity":0,"HP":150,"ID":827,"LanguageHelpId":26727,"LanguageNameId":5727,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":4,"RechargeRate":0,"ReloadTime":2.5,"Speed":1.2,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"WAGON"},"829":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":-1,"Class":28},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0.9955555555555555,"Attacks":[{"Amount":5,"Class":21},{"Amount":9,"Class":3},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":200},"FrameDelay":32,"GarrisonCapacity":0,"HP":200,"ID":829,"LanguageHelpId":26729,"LanguageNameId":5729,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":5,"RechargeRate":0,"ReloadTime":2.5,"Speed":1.2,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"UWAGO"},"831":{"AccuracyPercent":100,"Armours":[{"Amount":8,"Class":16},{"Amount":0,"Class":2},{"Amount":6,"Class":4},{"Amount":5,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":50,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":180,"Wood":190},"FrameDelay":0,"GarrisonCapacity":0,"HP":200,"ID":831,"LanguageHelpId":26731,"LanguageNameId":5731,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":6,"MinRange":0,"PierceArmor":5,"Range":6,"RechargeRate":0,"ReloadTime":6,"Speed":0.9,"TrainTime":50,"Trait":2,"TraitPiece":0,"internal_name":"TURTL"},"832":{"AccuracyPercent":100,"Armours":[{"Amount":11,"Class":16},{"Amount":1,"Class":2},{"Amount":8,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":50,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":180,"Wood":190},"FrameDelay":0,"GarrisonCapacity":0,"HP":300,"ID":832,"LanguageHelpId":26732,"LanguageNameId":5732,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":8,"MinRange":0,"PierceArmor":6,"Range":7,"RechargeRate":0,"ReloadTime":6,"Speed":1.035,"TrainTime":50,"Trait":2,"TraitPiece":0,"internal_name":"UTURT"},"866":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":6,"Class":3},{"Amount":5,"Class":8},{"Amount":4,"Class":16},{"Amount":5,"Class":5},{"Amount":0,"Class":21},{"Amount":4,"Class":30},{"Amount":4,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":40,"Wood":45},"FrameDelay":15,"GarrisonCapacity":0,"HP":45,"ID":866,"LanguageHelpId":26723,"LanguageNameId":5723,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"GENOE"},"868":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":6,"Class":3},{"Amount":7,"Class":8},{"Amount":5,"Class":16},{"Amount":7,"Class":5},{"Amount":0,"Class":21},{"Amount":6,"Class":30},{"Amount":5,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":40,"Wood":45},"FrameDelay":15,"GarrisonCapacity":0,"HP":50,"ID":868,"LanguageHelpId":26725,"LanguageNameId":5725,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"GENOE_E"},"869":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":4},{"Amount":1,"Class":17},{"Amount":5,"Class":20},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":10},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":869,"LanguageHelpId":26728,"LanguageNameId":5728,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.5,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"UMAGYX"},"871":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":2,"Class":17},{"Amount":8,"Class":20},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":10},"FrameDelay":0,"GarrisonCapacity":0,"HP":85,"ID":871,"LanguageHelpId":26730,"LanguageNameId":5730,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.5,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"UMAGYX"},"873":{"AccuracyPercent":70,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":5},{"Amount":-4,"Class":28},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.394,"Attacks":[{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":70},"FrameDelay":12,"GarrisonCapacity":0,"HP":230,"ID":873,"LanguageHelpId":26682,"LanguageNameId":5682,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":32,"Trait":0,"TraitPiece":0,"internal_name":"ELEAR"},"875":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":5},{"Amount":-4,"Class":28},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.394,"Attacks":[{"Amount":0,"Class":21},{"Amount":7,"Class":3},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":70},"FrameDelay":24,"GarrisonCapacity":0,"HP":280,"ID":875,"LanguageHelpId":26684,"LanguageNameId":5684,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":32,"Trait":0,"TraitPiece":0,"internal_name":"UELEA"},"876":{"AccuracyPercent":100,"Armours":[{"Amount":4,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":876,"LanguageHelpId":26447,"LanguageNameId":5447,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":4,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.3,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"BOYAR"},"878":{"AccuracyPercent":100,"Armours":[{"Amount":8,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":130,"ID":878,"LanguageHelpId":26449,"LanguageNameId":5449,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":8,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.3,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"EBOYA"},"879":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":4},{"Amount":8,"Class":8},{"Amount":0,"Class":21},{"Amount":6,"Class":30},{"Amount":20,"Class":5}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":879,"LanguageHelpId":26686,"LanguageNameId":5686,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":1,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":10,"Trait":0,"TraitPiece":0,"internal_name":"KAMAY"},"881":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":4},{"Amount":12,"Class":8},{"Amount":0,"Class":21},{"Amount":10,"Class":30},{"Amount":20,"Class":5},{"Amount":1,"Class":35}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":881,"LanguageHelpId":26688,"LanguageNameId":5688,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":1,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":10,"Trait":0,"TraitPiece":0,"internal_name":"EKAMA"},"882":{"AccuracyPercent":100,"Armours":[{"Amount":10,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":0,"Class":32}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":21},{"Amount":10,"Class":4},{"Amount":10,"Class":23},{"Amount":0,"Class":30},{"Amount":0,"Class":8}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":882,"LanguageHelpId":26114,"LanguageNameId":5114,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.2,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"CONDO"},"1001":{"AccuracyPercent":0,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":20},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.6,"Attacks":[{"Amount":1,"Class":1},{"Amount":0,"Class":11},{"Amount":7,"Class":3},{"Amount":1,"Class":17},{"Amount":1,"Class":38}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":70,"Wood":80},"FrameDelay":12,"GarrisonCapacity":0,"HP":60,"ID":1001,"LanguageHelpId":26129,"LanguageNameId":5129,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":2,"MinRange":1,"PierceArmor":4,"Range":7,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.85,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"ORGAN"},"1003":{"AccuracyPercent":0,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":20},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0.6,"Attacks":[{"Amount":1,"Class":1},{"Amount":1,"Class":11},{"Amount":9,"Class":3},{"Amount":1,"Class":17},{"Amount":1,"Class":38}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":70,"Wood":80},"FrameDelay":12,"GarrisonCapacity":0,"HP":70,"ID":1003,"LanguageHelpId":26130,"LanguageNameId":5130,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":2,"MinRange":1,"PierceArmor":6,"Range":7,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.85,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"EORGAN"},"1004":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":11},{"Amount":6,"Class":16},{"Amount":6,"Class":3},{"Amount":4,"Class":17},{"Amount":6,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":43,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":130,"ID":1004,"LanguageHelpId":26132,"LanguageNameId":5132,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":6,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"CARAV"},"1006":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":11},{"Amount":7,"Class":16},{"Amount":8,"Class":3},{"Amount":4,"Class":17},{"Amount":7,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":43,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":1006,"LanguageHelpId":26133,"LanguageNameId":5133,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":7,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"CARAV"},"1007":{"AccuracyPercent":95,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":30},{"Amount":0,"Class":15},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":7,"AttackDelaySeconds":0.625,"Attacks":[{"Amount":0,"Class":21},{"Amount":7,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":1},{"Amount":4,"Class":28},{"Amount":0,"Class":27},{"Amount":0,"Class":11},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":50},"FrameDelay":15,"GarrisonCapacity":0,"HP":55,"ID":1007,"LanguageHelpId":26134,"LanguageNameId":5134,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"CAMAR"},"1009":{"AccuracyPercent":95,"Armours":[{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":30},{"Amount":0,"Class":15},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":8,"AttackDelaySeconds":0.625,"Attacks":[{"Amount":0,"Class":21},{"Amount":8,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":1},{"Amount":6,"Class":28},{"Amount":0,"Class":27},{"Amount":0,"Class":11},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":50},"FrameDelay":15,"GarrisonCapacity":0,"HP":60,"ID":1009,"LanguageHelpId":26136,"LanguageNameId":5136,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"ECAMAR"},"1010":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":4,"Class":3},{"Amount":0,"Class":28},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":3,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":0,"Class":21},{"Amount":3,"Class":3},{"Amount":0,"Class":17},{"Amount":4,"Class":15},{"Amount":0,"Class":28},{"Amount":2,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":40,"Wood":35},"FrameDelay":12,"GarrisonCapacity":0,"HP":50,"ID":1010,"LanguageHelpId":26137,"LanguageNameId":5137,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":4,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":1.35,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"GENITO"},"1012":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":4,"Class":3},{"Amount":1,"Class":28},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":4,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":0,"Class":21},{"Amount":4,"Class":3},{"Amount":0,"Class":17},{"Amount":5,"Class":15},{"Amount":2,"Class":28},{"Amount":2,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":40,"Wood":35},"FrameDelay":12,"GarrisonCapacity":0,"HP":55,"ID":1012,"LanguageHelpId":26139,"LanguageNameId":5139,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":4,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":1.35,"TrainTime":23,"Trait":0,"TraitPiece":0,"internal_name":"EGENITO"},"1013":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":1,"Attacks":[{"Amount":1,"Class":29},{"Amount":0,"Class":21},{"Amount":10,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":40},"FrameDelay":30,"GarrisonCapacity":0,"HP":40,"ID":1013,"LanguageHelpId":26140,"LanguageNameId":5140,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.25,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"GBETO"},"1015":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":1,"Attacks":[{"Amount":1,"Class":29},{"Amount":0,"Class":21},{"Amount":13,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":40},"FrameDelay":30,"GarrisonCapacity":0,"HP":50,"ID":1015,"LanguageHelpId":26141,"LanguageNameId":5141,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":6,"RechargeRate":0,"ReloadTime":2,"Speed":1.25,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"EGBETO"},"1016":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":16,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":0,"Class":21},{"Amount":16,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":1016,"LanguageHelpId":26143,"LanguageNameId":5143,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":8,"Trait":0,"TraitPiece":0,"internal_name":"SHOTEL"},"1018":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":18,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":1,"Class":21},{"Amount":18,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":1018,"LanguageHelpId":26145,"LanguageNameId":5145,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":4,"Trait":0,"TraitPiece":0,"internal_name":"ESHOTEL"},"1103":{"AccuracyPercent":0,"Armours":[{"Amount":6,"Class":16},{"Amount":0,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":31}],"Attack":1,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":11},{"Amount":3,"Class":16},{"Amount":1,"Class":2},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":1,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1103,"LanguageHelpId":26160,"LanguageNameId":5160,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":2.49,"RechargeRate":0,"ReloadTime":0.25,"Speed":1.3,"TrainTime":65,"Trait":2,"TraitPiece":0,"internal_name":"SFRGAL"},"1104":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":16},{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":90,"AttackDelaySeconds":0,"Attacks":[{"Amount":180,"Class":11},{"Amount":90,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":1104,"LanguageHelpId":26162,"LanguageNameId":5162,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":1.5,"TrainTime":45,"Trait":2,"TraitPiece":0,"internal_name":"SDGAL"},"1105":{"AccuracyPercent":0,"Armours":[{"Amount":-2,"Class":4},{"Amount":100,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":160,"Wood":200},"FrameDelay":0,"GarrisonCapacity":10,"HP":220,"ID":1105,"LanguageHelpId":26445,"LanguageNameId":5445,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":-2,"MinRange":0,"PierceArmor":100,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":0.8,"TrainTime":36,"Trait":1,"TraitPiece":0,"internal_name":"SIEGTWR"},"1120":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":5},{"Amount":0,"Class":20},{"Amount":0,"Class":31},{"Amount":20,"Class":37}],"Attack":10,"AttackDelaySeconds":0.394,"Attacks":[{"Amount":3,"Class":21},{"Amount":10,"Class":3},{"Amount":3,"Class":13},{"Amount":0,"Class":27},{"Amount":100,"Class":18},{"Amount":2,"Class":11},{"Amount":8,"Class":16},{"Amount":8,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":100,"Gold":80},"FrameDelay":12,"GarrisonCapacity":0,"HP":250,"ID":1120,"LanguageHelpId":26146,"LanguageNameId":5146,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":5,"RechargeRate":0,"ReloadTime":2.5,"Speed":0.8,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"ELEBALI"},"1122":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":5},{"Amount":0,"Class":20},{"Amount":0,"Class":31},{"Amount":20,"Class":37}],"Attack":11,"AttackDelaySeconds":0.394,"Attacks":[{"Amount":4,"Class":21},{"Amount":11,"Class":3},{"Amount":4,"Class":13},{"Amount":0,"Class":27},{"Amount":100,"Class":18},{"Amount":4,"Class":11},{"Amount":8,"Class":16},{"Amount":8,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":100,"Gold":80},"FrameDelay":12,"GarrisonCapacity":0,"HP":290,"ID":1122,"LanguageHelpId":26147,"LanguageNameId":5147,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":5,"RechargeRate":0,"ReloadTime":2.5,"Speed":0.8,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"EELEBALI"},"1123":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":0,"Class":21},{"Amount":7,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":15},"FrameDelay":0,"GarrisonCapacity":0,"HP":30,"ID":1123,"LanguageHelpId":26148,"LanguageNameId":5148,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":6,"Trait":0,"TraitPiece":0,"internal_name":"KARAM"},"1125":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":1,"Class":21},{"Amount":8,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":15},"FrameDelay":0,"GarrisonCapacity":0,"HP":40,"ID":1125,"LanguageHelpId":26150,"LanguageNameId":5150,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":6,"Trait":0,"TraitPiece":0,"internal_name":"EKARAM"},"1126":{"AccuracyPercent":20,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0.6,"Attacks":[{"Amount":0,"Class":11},{"Amount":12,"Class":3},{"Amount":2,"Class":17},{"Amount":0,"Class":1},{"Amount":0,"Class":27},{"Amount":0,"Class":21},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":75},"FrameDelay":15,"GarrisonCapacity":0,"HP":60,"ID":1126,"LanguageHelpId":26151,"LanguageNameId":5151,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"ARAMBAI"},"1128":{"AccuracyPercent":30,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0.6,"Attacks":[{"Amount":0,"Class":11},{"Amount":14,"Class":3},{"Amount":2,"Class":17},{"Amount":0,"Class":1},{"Amount":0,"Class":27},{"Amount":0,"Class":21},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":75},"FrameDelay":15,"GarrisonCapacity":0,"HP":65,"ID":1128,"LanguageHelpId":26152,"LanguageNameId":5152,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"EARAMBAI"},"1129":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.6900000000000001,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":1}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":50},"FrameDelay":23,"GarrisonCapacity":0,"HP":40,"ID":1129,"LanguageHelpId":26165,"LanguageNameId":5165,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.1,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"RATAN"},"1131":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.6900000000000001,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":0,"Class":1},{"Amount":7,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":50},"FrameDelay":23,"GarrisonCapacity":0,"HP":45,"ID":1131,"LanguageHelpId":26166,"LanguageNameId":5166,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.1,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"ERATAN"},"1132":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":5},{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":4,"Class":11},{"Amount":12,"Class":4},{"Amount":4,"Class":13},{"Amount":0,"Class":15},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":110,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":250,"ID":1132,"LanguageHelpId":26167,"LanguageNameId":5167,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.85,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"BATELE"},"1134":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":5},{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":14,"Class":4},{"Amount":7,"Class":13},{"Amount":0,"Class":15},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":110,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":300,"ID":1134,"LanguageHelpId":26168,"LanguageNameId":5168,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.85,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"EBATELE"},"1155":{"AccuracyPercent":95,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":5,"Class":3},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":4,"AttackDelaySeconds":0.5066666666666667,"Attacks":[{"Amount":3,"Class":28},{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":5,"Class":15},{"Amount":4,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Wood":35},"FrameDelay":19,"GarrisonCapacity":0,"HP":35,"ID":1155,"LanguageHelpId":26190,"LanguageNameId":5190,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":5,"Range":5,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"IHXBOW"},"1225":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1225,"LanguageHelpId":26288,"LanguageNameId":5288,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":1.35,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"KONNIK"},"1227":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":1227,"LanguageHelpId":26290,"LanguageNameId":5290,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":1.35,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"EKONNIK"},"1228":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":110,"ID":1228,"LanguageHelpId":26313,"LanguageNameId":5313,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.4,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"KESHIK"},"1230":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":11,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":140,"ID":1230,"LanguageHelpId":26314,"LanguageNameId":5314,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.4,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"EKESHIK"},"1231":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":28},{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0.49,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":4,"Class":3},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":35,"Wood":60},"FrameDelay":21,"GarrisonCapacity":0,"HP":40,"ID":1231,"LanguageHelpId":26315,"LanguageNameId":5315,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2.2,"Speed":1.4,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"KIPCHAK"},"1233":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":28},{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.49,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":5,"Class":3},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":35,"Wood":60},"FrameDelay":21,"GarrisonCapacity":0,"HP":45,"ID":1233,"LanguageHelpId":26327,"LanguageNameId":5327,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2.2,"Speed":1.4,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"EKIPCHAK"},"1234":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":13,"Class":4},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1234,"LanguageHelpId":26328,"LanguageNameId":5328,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.4,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"LEITIS"},"1236":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":16,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":16,"Class":4},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":130,"ID":1236,"LanguageHelpId":26329,"LanguageNameId":5329,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.4,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"ELEITIS"},"1252":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":29},{"Amount":4,"Class":21},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":0,"Gold":0},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":1252,"LanguageHelpId":42057,"LanguageNameId":21057,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":0.9,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"KONNIK_INF"},"1253":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":29},{"Amount":4,"Class":21},{"Amount":13,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":0,"Gold":0},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":1253,"LanguageHelpId":42058,"LanguageNameId":21058,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":0.9,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"EKONNIK_INF"},"1254":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1254,"LanguageHelpId":26288,"LanguageNameId":5288,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":1.35,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"KONNIK"},"1255":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":1255,"LanguageHelpId":26290,"LanguageNameId":5290,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":1.35,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"EKONNIK"},"1258":{"AccuracyPercent":100,"Armours":[{"Amount":-3,"Class":4},{"Amount":180,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":2,"AttackDelaySeconds":0,"Attacks":[{"Amount":125,"Class":11},{"Amount":2,"Class":4},{"Amount":40,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":160},"FrameDelay":0,"GarrisonCapacity":6,"HP":175,"ID":1258,"LanguageHelpId":26094,"LanguageNameId":5094,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":-3,"MinRange":0,"PierceArmor":180,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":0.6,"TrainTime":36,"Trait":1,"TraitPiece":0,"internal_name":"BTRAM"},"1263":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":20,"AttackDelaySeconds":0,"Attacks":[{"Amount":200,"Class":11},{"Amount":20,"Class":4},{"Amount":50,"Class":8},{"Amount":50,"Class":30},{"Amount":130,"Class":5},{"Amount":25,"Class":20},{"Amount":0,"Class":21}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":75,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":1263,"LanguageHelpId":26375,"LanguageNameId":5375,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":1.3,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"FCAMEL"},"1370":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":4},{"Amount":0,"Class":20},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":1370,"LanguageHelpId":26009,"LanguageNameId":5009,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":1,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"SLANCER"},"1372":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":11,"Class":4},{"Amount":0,"Class":20},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":1372,"LanguageHelpId":26010,"LanguageNameId":5010,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":1,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"ESLANCER"},"1570":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1570,"LanguageHelpId":26040,"LanguageNameId":5040,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.35,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"AZTRAIDER"},"1655":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":8,"Class":4},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":1,"ChargeType":1,"Cost":{"Food":55,"Gold":55},"FrameDelay":0,"GarrisonCapacity":0,"HP":115,"ID":1655,"LanguageHelpId":26534,"LanguageNameId":5534,"LineOfSight":5,"MaxCharge":20,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeDuration":40,"RechargeRate":0.5,"ReloadTime":1.9,"Speed":1.35,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"COUSTILLIER"},"1657":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":11,"Class":4},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":1,"ChargeType":1,"Cost":{"Food":55,"Gold":55},"FrameDelay":0,"GarrisonCapacity":0,"HP":145,"ID":1657,"LanguageHelpId":26536,"LanguageNameId":5536,"LineOfSight":5,"MaxCharge":25,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeDuration":40,"RechargeRate":0.625,"ReloadTime":1.9,"Speed":1.35,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"ECOUSTILLIER"},"1658":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":5,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":1658,"LanguageHelpId":26538,"LanguageNameId":5538,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":4,"TraitPiece":1665,"internal_name":"SERJEANT"},"1659":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":4,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":11,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":85,"ID":1659,"LanguageHelpId":26540,"LanguageNameId":5540,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":4,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":4,"TraitPiece":1665,"internal_name":"ESERJEANT"},"1660":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":5,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":1660,"LanguageHelpId":26538,"LanguageNameId":5538,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":16,"Trait":4,"TraitPiece":1665,"internal_name":"DSERJEANT"},"1661":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":4,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":11,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":85,"ID":1661,"LanguageHelpId":26540,"LanguageNameId":5540,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":4,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":4,"TraitPiece":1665,"internal_name":"EDSERJEANT"},"1699":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":0,"Class":21},{"Amount":11,"Class":4},{"Amount":8,"Class":8},{"Amount":6,"Class":16},{"Amount":6,"Class":30},{"Amount":8,"Class":5},{"Amount":6,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":15},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":1699,"LanguageHelpId":26542,"LanguageNameId":5542,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"FLEMISHPIKEMAN2"},"1701":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":4,"Class":21},{"Amount":8,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":1701,"LanguageHelpId":26558,"LanguageNameId":5558,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"OBUCH"},"1703":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":6,"Class":21},{"Amount":10,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":95,"ID":1703,"LanguageHelpId":26559,"LanguageNameId":5559,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"EOBUCH"},"1704":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":20},{"Amount":7,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31},{"Amount":0,"Class":37}],"Attack":11,"AttackDelaySeconds":0.6222222222222222,"Attacks":[{"Amount":1,"Class":11},{"Amount":11,"Class":3},{"Amount":3,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":70,"Wood":110},"FrameDelay":20,"GarrisonCapacity":0,"HP":180,"ID":1704,"LanguageHelpId":26561,"LanguageNameId":5561,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":6,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.8,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"HUSSITEWAGON"},"1706":{"AccuracyPercent":90,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":20},{"Amount":10,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31},{"Amount":0,"Class":37}],"Attack":13,"AttackDelaySeconds":0.6222222222222222,"Attacks":[{"Amount":2,"Class":11},{"Amount":13,"Class":3},{"Amount":3,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":70,"Wood":110},"FrameDelay":20,"GarrisonCapacity":0,"HP":230,"ID":1706,"LanguageHelpId":26563,"LanguageNameId":5563,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":10,"Range":6,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.8,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"EHUSSITEWAGON"},"1707":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":25},{"Amount":9,"Class":4},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":15},{"Amount":4,"Class":23},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":1707,"LanguageHelpId":26577,"LanguageNameId":5577,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.5,"TrainTime":30,"Trait":16,"TraitPiece":0,"internal_name":"WINGEDHUSSAR"},"1709":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0.21,"Attacks":[{"Amount":250,"Class":11},{"Amount":50,"Class":16},{"Amount":50,"Class":4},{"Amount":20,"Class":20},{"Amount":50,"Class":13},{"Amount":50,"Class":34},{"Amount":50,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":225,"Wood":225},"FrameDelay":7,"GarrisonCapacity":0,"HP":90,"ID":1709,"LanguageHelpId":26579,"LanguageNameId":5579,"LineOfSight":14,"MaxCharge":0,"MeleeArmor":2,"MinRange":5,"PierceArmor":6,"Range":12,"RechargeRate":0,"ReloadTime":6.5,"Speed":0.7,"TrainTime":56,"Trait":0,"TraitPiece":0,"internal_name":"HOUFNICE"},"1735":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":4},{"Amount":2,"Class":29},{"Amount":1,"Class":21},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":1,"ChargeType":3,"Cost":{"Food":65,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":1735,"LanguageHelpId":26403,"LanguageNameId":5403,"LineOfSight":3,"MaxCharge":12,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeDuration":24,"RechargeRate":0.5,"ReloadTime":2,"Speed":1.05,"TrainTime":9,"Trait":0,"TraitPiece":0,"internal_name":"URUMI"},"1737":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":3,"Class":29},{"Amount":2,"Class":21},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":1,"ChargeType":3,"Cost":{"Food":65,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":65,"ID":1737,"LanguageHelpId":26413,"LanguageNameId":5413,"LineOfSight":3,"MaxCharge":15,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeDuration":20,"RechargeRate":0.75,"ReloadTime":2,"Speed":1.05,"TrainTime":9,"Trait":0,"TraitPiece":0,"internal_name":"EURUMI"},"1738":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":27},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":60},"FrameDelay":0,"GarrisonCapacity":0,"HP":105,"ID":1738,"LanguageHelpId":42096,"LanguageNameId":21096,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":8,"TraitPiece":1759,"internal_name":"RATHA"},"1740":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":27},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":60},"FrameDelay":0,"GarrisonCapacity":0,"HP":115,"ID":1740,"LanguageHelpId":42097,"LanguageNameId":21097,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":8,"TraitPiece":1761,"internal_name":"ERATHA"},"1741":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0.8,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":3,"Class":4},{"Amount":0,"Class":1},{"Amount":0,"Class":32},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":30},"FrameDelay":15,"GarrisonCapacity":0,"HP":40,"ID":1741,"LanguageHelpId":26421,"LanguageNameId":5421,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.15,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"CHAKRAM"},"1743":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0.8,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":4,"Class":4},{"Amount":1,"Class":1},{"Amount":1,"Class":32},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":30},"FrameDelay":15,"GarrisonCapacity":0,"HP":50,"ID":1743,"LanguageHelpId":26427,"LanguageNameId":5427,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":6,"RechargeRate":0,"ReloadTime":2,"Speed":1.15,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"ECHAKRAM"},"1744":{"AccuracyPercent":100,"Armours":[{"Amount":17,"Class":5},{"Amount":-2,"Class":4},{"Amount":7,"Class":8},{"Amount":0,"Class":20},{"Amount":0,"Class":17},{"Amount":140,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":75,"Class":11},{"Amount":4,"Class":4},{"Amount":25,"Class":20},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":120,"Gold":95},"FrameDelay":0,"GarrisonCapacity":0,"HP":180,"ID":1744,"LanguageHelpId":26428,"LanguageNameId":5428,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":-2,"MinRange":0,"PierceArmor":140,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":0.6,"TrainTime":36,"Trait":0,"TraitPiece":0,"internal_name":"ARELE"},"1746":{"AccuracyPercent":100,"Armours":[{"Amount":20,"Class":5},{"Amount":-2,"Class":4},{"Amount":10,"Class":8},{"Amount":0,"Class":20},{"Amount":0,"Class":17},{"Amount":150,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":105,"Class":11},{"Amount":4,"Class":4},{"Amount":35,"Class":20},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":120,"Gold":95},"FrameDelay":0,"GarrisonCapacity":0,"HP":220,"ID":1746,"LanguageHelpId":26430,"LanguageNameId":5430,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":-2,"MinRange":0,"PierceArmor":150,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":0.6,"TrainTime":36,"Trait":0,"TraitPiece":0,"internal_name":"EARELE"},"1747":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":4},{"Amount":5,"Class":15},{"Amount":2,"Class":21},{"Amount":2,"Class":29},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":30,"Gold":45},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":1747,"LanguageHelpId":26431,"LanguageNameId":5431,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.15,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"GHULAM"},"1749":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":11,"Class":4},{"Amount":6,"Class":15},{"Amount":2,"Class":21},{"Amount":2,"Class":29},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":30,"Gold":45},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":1749,"LanguageHelpId":26432,"LanguageNameId":5432,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"EGHULAM"},"1750":{"AccuracyPercent":100,"Armours":[{"Amount":8,"Class":16},{"Amount":0,"Class":2},{"Amount":2,"Class":4},{"Amount":10,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":11},{"Amount":9,"Class":16},{"Amount":9,"Class":3},{"Amount":4,"Class":17},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":180},"FrameDelay":0,"GarrisonCapacity":0,"HP":250,"ID":1750,"LanguageHelpId":26435,"LanguageNameId":5435,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":10,"Range":6,"RechargeRate":0,"ReloadTime":3.45,"Speed":1.3,"TrainTime":40,"Trait":2,"TraitPiece":0,"internal_name":"THIRISADAI"},"1751":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":4,"Cost":{"Food":70,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":1751,"LanguageHelpId":26437,"LanguageNameId":5437,"LineOfSight":5,"MaxCharge":5,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeDuration":20,"RechargeRate":0.25,"ReloadTime":2,"Speed":1.6,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"SHRIVAMSHA"},"1753":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":11,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":4,"Cost":{"Food":70,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":1753,"LanguageHelpId":26438,"LanguageNameId":5438,"LineOfSight":6,"MaxCharge":7,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeDuration":20,"RechargeRate":0.35,"ReloadTime":1.9,"Speed":1.6,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"ESHRIVAMSHA"},"1755":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":2,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":16},{"Amount":0,"Class":11},{"Amount":0,"Class":30},{"Amount":0,"Class":21},{"Amount":0,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":60},"FrameDelay":0,"GarrisonCapacity":1,"HP":70,"ID":1755,"LanguageHelpId":26441,"LanguageNameId":5441,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":48,"Trait":0,"TraitPiece":0,"internal_name":"CAMELSC"},"1759":{"AccuracyPercent":80,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.6206666666666667,"Attacks":[{"Amount":5,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":60},"FrameDelay":14,"GarrisonCapacity":0,"HP":105,"ID":1759,"LanguageHelpId":42104,"LanguageNameId":21104,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":8,"TraitPiece":1738,"internal_name":"RATHA2"},"1761":{"AccuracyPercent":90,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.6206666666666667,"Attacks":[{"Amount":6,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":60},"FrameDelay":14,"GarrisonCapacity":0,"HP":115,"ID":1761,"LanguageHelpId":42105,"LanguageNameId":21105,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":8,"TraitPiece":1740,"internal_name":"ERATHA2"},"1786":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":15,"Class":5},{"Amount":3,"Class":4},{"Amount":15,"Class":8},{"Amount":9,"Class":16},{"Amount":12,"Class":30},{"Amount":4,"Class":35},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":1786,"LanguageHelpId":26078,"LanguageNameId":5078,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"DPKEMN"},"1787":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":25,"Class":5},{"Amount":4,"Class":4},{"Amount":22,"Class":8},{"Amount":16,"Class":16},{"Amount":18,"Class":30},{"Amount":11,"Class":35},{"Amount":16,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":1787,"LanguageHelpId":26408,"LanguageNameId":5408,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"DISPKM"},"1788":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":28,"Class":5},{"Amount":6,"Class":4},{"Amount":32,"Class":8},{"Amount":17,"Class":16},{"Amount":26,"Class":30},{"Amount":11,"Class":35},{"Amount":17,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":1788,"LanguageHelpId":26409,"LanguageNameId":5409,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"DHLBDM"},"1790":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":0,"Attacks":[{"Amount":13,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":75,"Gold":85},"FrameDelay":0,"GarrisonCapacity":0,"HP":110,"ID":1790,"LanguageHelpId":26052,"LanguageNameId":5052,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.35,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"CENTURION"},"1792":{"AccuracyPercent":100,"Armours":[{"Amount":3,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":15,"AttackDelaySeconds":0,"Attacks":[{"Amount":15,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":75,"Gold":85},"FrameDelay":0,"GarrisonCapacity":0,"HP":155,"ID":1792,"LanguageHelpId":26053,"LanguageNameId":5053,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":3,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.35,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"ECENTURION"},"1793":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":29},{"Amount":4,"Class":21},{"Amount":4,"Class":1},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30},{"Amount":4,"Class":32}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":75,"ID":1793,"LanguageHelpId":26054,"LanguageNameId":5054,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"LEGIONARY"},"1795":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":1,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":50,"Class":4},{"Amount":135,"Class":11},{"Amount":30,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":150,"Wood":175},"FrameDelay":0,"GarrisonCapacity":0,"HP":125,"ID":1795,"LanguageHelpId":26055,"LanguageNameId":5055,"LineOfSight":14,"MaxCharge":0,"MeleeArmor":1,"MinRange":3,"PierceArmor":6,"Range":12,"RechargeRate":0,"ReloadTime":8,"Speed":1.2,"TrainTime":50,"Trait":2,"TraitPiece":0,"internal_name":"DROMON"}}},"tech_tree_strings":{"Age of Empires II":"1001","Building":"300084","Civilization":"9681","Key":"300081","Technology":"300085","Technology Tree":"9799","Unique Unit":"300082","Unit":"300083","mode":"1"},"techtrees":{"Aztecs":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"meso_","techs":[8,12,13,14,17,22,23,45,47,48,54,55,65,67,68,74,75,76,77,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,230,231,233,249,252,278,279,280,315,316,319,321,322,373,374,375,377,380,408,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":460,"castleAgeUniqueUnit":725,"imperialAgeUniqueTech":24,"imperialAgeUniqueUnit":726},"units":[4,6,7,13,17,21,24,74,75,77,83,93,125,128,279,280,331,358,422,440,473,492,527,529,532,539,545,548,550,567,588,751,752,753,1103,1104,1105,1258,1570]},"Bengalis":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,280,315,316,319,322,373,374,375,377,380,408,435,436,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":833,"castleAgeUniqueUnit":1759,"imperialAgeUniqueTech":834,"imperialAgeUniqueUnit":1761},"units":[4,6,7,13,17,21,24,74,75,77,83,93,125,128,279,280,331,358,359,420,440,442,448,473,492,527,529,532,539,542,545,546,550,567,691,873,875,1103,1104,1105,1132,1134,1744,1746]},"Berbers":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,54,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,233,249,252,278,279,280,315,316,319,322,374,375,377,379,380,408,435,437,438,439,441,602,608,716],"unique":{"castleAgeUniqueTech":578,"castleAgeUniqueUnit":1007,"imperialAgeUniqueTech":579,"imperialAgeUniqueUnit":1009},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,420,422,440,441,442,448,473,474,527,528,529,532,539,542,545,546,550,567,691,1010,1012,1103,1104,1105,1258]},"Bohemians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,321,322,374,377,408,438,439,441,602,608,716],"unique":{"castleAgeUniqueTech":784,"castleAgeUniqueUnit":1704,"imperialAgeUniqueTech":785,"imperialAgeUniqueUnit":1706},"units":[4,5,6,7,13,17,21,24,36,38,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,492,527,529,539,542,545,546,550,567,691,1103,1104,1105,1258,1709]},"Britons":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,280,315,321,322,373,374,375,377,379,380,408,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":3,"castleAgeUniqueUnit":8,"imperialAgeUniqueTech":461,"imperialAgeUniqueUnit":530},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,492,527,528,529,532,539,542,545,546,550,567,1103,1104,1105,1258]},"Bulgarians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,199,209,234,235,276,487,562,584,598,621,792,1251],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,47,48,50,51,55,63,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,199,200,201,202,203,211,212,213,215,233,249,252,278,279,280,315,316,322,374,377,380,408,435,436,437,438,439,441,602,716,875],"unique":{"castleAgeUniqueTech":685,"castleAgeUniqueUnit":1225,"imperialAgeUniqueTech":686,"imperialAgeUniqueUnit":1227},"units":[4,6,7,13,17,21,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,529,539,542,545,546,548,550,588,1103,1104,1105,1254,1255,1258]},"Burgundians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,221,230,231,233,249,252,278,279,280,315,316,319,321,322,374,379,408,441,602,608],"unique":{"castleAgeUniqueTech":754,"castleAgeUniqueUnit":1655,"imperialAgeUniqueTech":755,"imperialAgeUniqueUnit":1657},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,527,529,532,539,545,546,550,567,569,691,1103,1104,1105,1258,1699]},"Burmese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,213,215,221,230,231,233,249,252,278,280,315,316,319,322,374,375,377,380,408,435,436,438,441,602,716,875],"unique":{"castleAgeUniqueTech":627,"castleAgeUniqueUnit":1126,"imperialAgeUniqueTech":626,"imperialAgeUniqueUnit":1128},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,529,539,542,545,546,550,567,691,1103,1104,1105,1132,1134,1258]},"Byzantines":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,54,55,63,64,65,67,68,74,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,322,373,374,375,379,408,437,438,439,602,608,716,875],"unique":{"castleAgeUniqueTech":464,"castleAgeUniqueUnit":40,"imperialAgeUniqueTech":61,"imperialAgeUniqueUnit":553},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,422,440,441,442,448,473,474,492,527,528,529,532,539,545,546,548,550,567,569,1103,1104,1105,1258,1795]},"Celts":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,54,55,63,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,231,249,252,278,279,280,315,321,322,373,374,375,377,379,380,408,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":482,"castleAgeUniqueUnit":232,"imperialAgeUniqueTech":5,"imperialAgeUniqueUnit":534},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,528,529,539,542,545,546,548,550,567,569,588,1103,1104,1105,1258]},"Chinese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,51,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,319,321,322,373,374,375,380,408,435,437,438,441,602,608],"unique":{"castleAgeUniqueTech":462,"castleAgeUniqueUnit":73,"imperialAgeUniqueTech":52,"imperialAgeUniqueUnit":559},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,420,422,440,442,448,473,474,492,527,528,529,539,542,545,546,548,550,567,1103,1104,1105,1258]},"Cumans":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,199,209,276,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,45,47,48,50,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,182,199,200,202,203,211,212,213,215,219,221,231,249,252,278,280,315,319,321,322,374,379,380,408,435,436,437,439,441,602],"unique":{"castleAgeUniqueTech":689,"castleAgeUniqueUnit":1231,"imperialAgeUniqueTech":690,"imperialAgeUniqueUnit":1233},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,329,331,358,359,422,440,441,442,448,473,474,527,529,532,539,545,546,548,550,567,569,588,1103,1104,1105,1258,1370,1372]},"Dravidians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,45,47,48,50,55,63,64,65,67,68,74,75,76,77,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,249,278,280,315,319,322,373,374,375,379,380,408,437,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":831,"castleAgeUniqueUnit":1735,"imperialAgeUniqueTech":832,"imperialAgeUniqueUnit":1737},"units":[4,5,6,7,13,17,21,24,36,74,75,77,83,93,125,128,279,280,331,358,359,420,440,442,448,473,492,527,528,529,532,539,542,545,546,550,567,588,691,873,875,1103,1104,1105,1132,1744,1746,1750]},"Ethiopians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,55,63,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,231,233,249,252,278,279,280,315,319,321,322,373,374,375,377,380,408,437,438,439,441,602,716],"unique":{"castleAgeUniqueTech":574,"castleAgeUniqueUnit":1016,"imperialAgeUniqueTech":575,"imperialAgeUniqueUnit":1018},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,420,422,440,441,442,448,473,474,492,527,529,539,542,545,546,548,550,588,1103,1104,1105,1258]},"Franks":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,45,47,48,50,51,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,215,230,231,233,249,252,278,280,315,322,374,375,377,379,408,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":83,"castleAgeUniqueUnit":281,"imperialAgeUniqueTech":493,"imperialAgeUniqueUnit":531},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,527,528,529,532,539,542,545,546,550,567,569,1103,1104,1105,1258]},"Goths":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,199,209,276,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,55,65,67,68,74,75,76,81,82,93,101,102,103,199,200,201,202,203,211,212,213,215,219,221,231,233,249,252,278,279,280,315,321,322,373,374,380,408,435,438,441],"unique":{"castleAgeUniqueTech":16,"castleAgeUniqueUnit":41,"imperialAgeUniqueTech":457,"imperialAgeUniqueUnit":555},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,422,440,441,442,448,473,474,527,528,529,532,539,542,545,546,550,567,1103,1104,1105,1258,1795]},"Gurjaras":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,47,48,50,51,54,55,63,65,67,68,74,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,231,233,249,252,278,279,280,315,316,319,321,322,373,374,379,380,408,435,437,438,439,441,602,716],"unique":{"castleAgeUniqueTech":835,"castleAgeUniqueUnit":1741,"imperialAgeUniqueTech":836,"imperialAgeUniqueUnit":1743},"units":[4,5,6,7,13,17,21,24,36,74,75,77,83,93,125,128,279,280,329,330,331,420,440,441,442,448,473,527,528,529,539,542,545,546,550,873,875,1103,1104,1105,1744,1746,1751,1753,1755]},"Hindustanis":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792,1754],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,322,374,377,379,408,435,437,438,441,602,716],"unique":{"castleAgeUniqueTech":506,"castleAgeUniqueUnit":1747,"imperialAgeUniqueTech":507,"imperialAgeUniqueUnit":1749},"units":[4,5,6,7,13,17,21,24,36,39,74,75,77,83,93,125,128,207,279,280,329,330,331,358,420,440,441,442,448,473,474,527,529,539,545,546,550,567,691,1103,1104,1105,1744,1746]},"Huns":{"buildings":[12,45,49,50,68,72,79,82,84,87,101,103,104,109,117,199,209,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,80,81,82,93,101,102,103,182,199,200,201,202,203,211,212,213,215,221,231,233,249,252,278,280,315,319,321,322,374,375,408,435,436,437,439,602],"unique":{"castleAgeUniqueTech":483,"castleAgeUniqueUnit":755,"imperialAgeUniqueTech":21,"imperialAgeUniqueUnit":757},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,422,440,441,442,448,473,474,527,528,529,539,545,546,548,569,1103,1104,1105,1258,1795]},"Incas":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"meso_","techs":[8,12,13,14,15,17,22,23,45,47,48,50,54,55,63,65,67,68,74,75,76,77,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,230,231,233,249,278,279,280,315,316,321,322,373,374,375,377,379,380,408,437,438,439,441,602,608],"unique":{"castleAgeUniqueTech":516,"castleAgeUniqueUnit":879,"imperialAgeUniqueTech":517,"imperialAgeUniqueUnit":881},"units":[4,6,7,13,17,21,24,74,75,77,83,93,125,128,185,279,280,331,358,359,422,440,442,473,492,527,529,532,539,542,545,548,550,567,751,752,753,1103,1104,1105,1258,1570]},"Italians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,322,373,374,375,379,380,408,435,437,438,441,602,608,716],"unique":{"castleAgeUniqueTech":494,"castleAgeUniqueUnit":866,"imperialAgeUniqueTech":499,"imperialAgeUniqueUnit":868},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,420,422,440,441,442,448,473,492,527,529,532,539,545,546,550,567,691,882,1103,1104,1105,1258]},"Japanese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,54,55,63,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,280,315,316,319,322,373,374,375,377,379,408,435,436,437,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":484,"castleAgeUniqueUnit":291,"imperialAgeUniqueTech":59,"imperialAgeUniqueUnit":560},"units":[4,5,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,492,527,529,532,539,542,545,546,550,567,691,1103,1104,1105,1258]},"Khmer":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,45,47,48,50,51,55,63,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,219,231,233,249,252,278,279,280,315,316,321,322,374,375,377,379,380,408,435,436,438,441,602],"unique":{"castleAgeUniqueTech":622,"castleAgeUniqueUnit":1120,"imperialAgeUniqueTech":623,"imperialAgeUniqueUnit":1122},"units":[4,5,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,492,527,529,532,539,542,545,546,548,550,691,1103,1104,1105,1132,1134,1258]},"Koreans":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,249,252,278,279,280,315,322,373,374,375,377,380,408,437,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":486,"castleAgeUniqueUnit":827,"imperialAgeUniqueTech":445,"imperialAgeUniqueUnit":829},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,492,529,532,539,545,546,550,567,588,691,831,832,1103,1105,1258]},"Lithuanians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,76,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,322,374,375,379,380,408,435,437,438,439,441,602],"unique":{"castleAgeUniqueTech":691,"castleAgeUniqueUnit":1234,"imperialAgeUniqueTech":692,"imperialAgeUniqueUnit":1236},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,527,529,532,539,545,546,550,567,569,691,1103,1104,1105,1258,1707]},"Magyars":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,47,48,50,54,55,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,199,200,201,202,203,211,212,213,219,221,230,231,233,249,252,278,280,315,321,322,373,374,375,377,379,380,408,435,436,437,438,439,441,602,716],"unique":{"castleAgeUniqueTech":514,"castleAgeUniqueUnit":869,"imperialAgeUniqueTech":515,"imperialAgeUniqueUnit":871},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,492,527,529,532,539,542,545,546,550,567,569,1103,1104,1105,1258]},"Malay":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,199,209,234,235,236,276,487,562,584,598,621,792,1189],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,54,55,63,64,65,67,68,74,75,76,77,81,93,101,102,103,140,182,199,200,201,202,203,211,212,213,215,219,230,231,233,249,278,279,280,315,316,319,321,322,373,374,375,377,380,408,437,439,441,602,716],"unique":{"castleAgeUniqueTech":624,"castleAgeUniqueUnit":1123,"imperialAgeUniqueTech":625,"imperialAgeUniqueUnit":1125},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,492,527,529,532,539,542,545,546,550,691,1103,1104,1105,1132,1134,1258]},"Malians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,65,67,68,74,76,77,80,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,215,219,230,231,249,252,278,279,280,315,316,319,321,322,374,375,379,380,408,435,437,438,439,441,602,716],"unique":{"castleAgeUniqueTech":576,"castleAgeUniqueUnit":1013,"imperialAgeUniqueTech":577,"imperialAgeUniqueUnit":1015},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,420,422,440,448,473,474,492,527,528,529,532,539,545,546,550,567,588,1103,1104,1105,1258]},"Mayans":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"meso_","techs":[8,12,13,14,15,17,22,23,45,47,48,50,51,54,55,63,65,67,68,74,75,76,77,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,249,252,278,279,280,315,319,321,322,373,374,375,379,380,408,437,438,439,441,602],"unique":{"castleAgeUniqueTech":485,"castleAgeUniqueUnit":763,"imperialAgeUniqueTech":4,"imperialAgeUniqueUnit":765},"units":[4,6,7,13,17,21,24,74,75,77,83,93,125,128,279,280,331,358,359,422,440,442,473,492,527,528,529,532,539,542,545,548,550,751,752,753,1103,1104,1105,1258,1570]},"Mongols":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,249,252,278,279,280,315,319,321,322,373,374,377,379,408,435,436,437,439,441,602],"unique":{"castleAgeUniqueTech":487,"castleAgeUniqueUnit":11,"imperialAgeUniqueTech":6,"imperialAgeUniqueUnit":561},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,420,422,440,441,442,448,473,474,492,527,528,529,532,539,542,545,546,548,550,567,588,1103,1104,1105,1258,1370,1372]},"Persians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,199,200,202,203,211,212,213,215,219,221,230,249,252,278,279,280,315,321,322,374,375,379,380,408,435,436,437,438,441,602,716,875],"unique":{"castleAgeUniqueTech":488,"castleAgeUniqueUnit":239,"imperialAgeUniqueTech":7,"imperialAgeUniqueUnit":558},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,420,422,440,441,442,448,474,527,528,529,532,539,542,545,546,548,550,569,691,1103,1104,1105,1258]},"Poles":{"buildings":[12,45,49,50,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792,1734],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,54,55,63,64,65,67,68,74,75,76,77,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,230,231,249,252,278,279,280,315,316,321,322,374,377,379,408,435,437,438,441,602,608,716],"unique":{"castleAgeUniqueTech":782,"castleAgeUniqueUnit":1701,"imperialAgeUniqueTech":783,"imperialAgeUniqueUnit":1703},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,420,422,440,442,448,473,474,492,527,529,532,539,545,546,548,550,567,1103,1104,1105,1258,1707]},"Portuguese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792,1021],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,219,221,230,231,249,252,278,279,280,315,316,319,321,322,374,375,377,380,408,435,437,438,439,441,602,716,875],"unique":{"castleAgeUniqueTech":572,"castleAgeUniqueUnit":1001,"imperialAgeUniqueTech":573,"imperialAgeUniqueUnit":1003},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,492,527,528,529,539,545,546,550,567,691,1004,1006,1103,1104,1105,1258]},"Romans":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,55,63,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,215,219,230,233,249,252,278,280,315,316,319,321,322,373,374,377,408,435,441,602],"unique":{"castleAgeUniqueTech":883,"castleAgeUniqueUnit":1790,"imperialAgeUniqueTech":884,"imperialAgeUniqueUnit":1792},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,422,440,442,448,474,529,532,539,542,545,546,548,550,1103,1105,1258,1793,1795]},"Saracens":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,54,55,63,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,280,315,316,319,322,374,375,377,379,408,435,436,437,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":9,"castleAgeUniqueUnit":282,"imperialAgeUniqueTech":454,"imperialAgeUniqueUnit":556},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,329,330,331,358,420,422,440,441,442,448,473,474,492,527,528,529,539,545,546,548,550,567,588,691,1103,1104,1105,1258]},"Sicilians":{"buildings":[12,45,49,50,68,70,72,82,84,87,101,103,104,109,117,199,209,276,487,562,584,598,621,792,1665],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,182,199,200,201,202,203,211,212,213,215,231,233,249,252,278,279,280,315,321,322,373,374,375,377,379,380,408,435,441,602,608,716,875],"unique":{"castleAgeUniqueTech":756,"castleAgeUniqueUnit":1658,"imperialAgeUniqueTech":757,"imperialAgeUniqueUnit":1659},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,492,527,528,529,532,539,542,545,546,548,550,567,588,1103,1104,1105,1258,1660,1661,1786,1787,1788]},"Slavs":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,215,219,221,230,231,233,249,278,280,315,316,319,321,322,374,375,377,379,408,435,438,441,602,716,875],"unique":{"castleAgeUniqueTech":455,"castleAgeUniqueUnit":876,"imperialAgeUniqueTech":513,"imperialAgeUniqueUnit":878},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,529,532,539,542,545,546,548,550,567,588,1103,1104,1105,1258]},"Spanish":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,321,322,373,374,375,379,408,435,437,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":492,"castleAgeUniqueUnit":771,"imperialAgeUniqueTech":440,"imperialAgeUniqueUnit":773},"units":[4,5,6,7,13,17,21,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,528,529,532,539,545,546,548,550,567,569,691,775,1103,1104,1105,1258]},"Tatars":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,47,48,50,54,55,64,65,67,68,74,75,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,230,233,249,252,278,280,315,319,321,322,374,375,377,380,408,435,436,437,441,602],"unique":{"castleAgeUniqueTech":687,"castleAgeUniqueUnit":1228,"imperialAgeUniqueTech":688,"imperialAgeUniqueUnit":1230},"units":[4,5,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,420,422,440,441,442,448,473,474,527,529,532,539,542,545,546,548,550,691,1103,1104,1105,1258,1263,1370,1372]},"Teutons":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,45,47,48,50,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,194,199,200,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,321,322,374,377,379,380,408,435,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":489,"castleAgeUniqueUnit":25,"imperialAgeUniqueTech":11,"imperialAgeUniqueUnit":554},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,527,528,529,532,539,542,545,550,567,569,588,1103,1104,1105,1258]},"Turks":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,231,249,252,278,280,315,316,319,321,322,373,374,375,379,380,408,435,436,437,438,439,602,608,716],"unique":{"castleAgeUniqueTech":491,"castleAgeUniqueUnit":46,"imperialAgeUniqueTech":10,"imperialAgeUniqueUnit":557},"units":[4,5,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,420,422,440,441,442,448,473,474,527,528,529,539,542,545,546,548,567,691,1103,1104,1105,1258]},"Vietnamese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,54,55,63,64,65,67,68,74,76,77,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,278,279,280,315,319,321,322,374,375,377,379,380,408,435,437,438,441,602,608,716],"unique":{"castleAgeUniqueTech":628,"castleAgeUniqueUnit":1129,"imperialAgeUniqueTech":629,"imperialAgeUniqueUnit":1131},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,492,527,528,529,539,545,546,550,567,691,1103,1104,1105,1132,1134,1155,1258]},"Vikings":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,45,47,48,50,51,54,55,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,249,252,278,280,315,319,321,322,374,375,377,379,380,408,439,602,608,716,875],"unique":{"castleAgeUniqueTech":463,"castleAgeUniqueUnit":692,"imperialAgeUniqueTech":49,"imperialAgeUniqueUnit":694},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,250,279,280,283,331,358,420,422,440,442,448,473,492,527,528,533,539,542,545,546,548,550,567,691,1104,1105,1258]}}}');

/***/ }),

/***/ "./src/components/civ-images/civ-data/strings.json":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-data/strings.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"1":"Return of Rome","1001":"Age of Empires II","4201":"Dark Age","4202":"Feudal Age","4203":"Castle Age","4204":"Imperial Age","5009":"Steppe Lancer","5010":"Elite Steppe Lancer","5040":"Xolotl Warrior","5052":"Centurion","5053":"Elite Centurion","5054":"Legionary","5055":"Dromon","5068":"Knight","5070":"Cavalier","5078":"Spearman","5079":"Militia","5080":"Man-at-Arms","5081":"Long Swordsman","5083":"Archer","5084":"Crossbowman","5085":"Cavalry Archer","5086":"Hand Cannoneer","5087":"Elite Skirmisher","5088":"Skirmisher","5089":"Trade Cog","5090":"Fishing Ship","5091":"War Galley","5093":"Bombard Cannon","5094":"Battering Ram","5095":"Mangonel","5096":"Scorpion","5097":"Trebuchet","5099":"Monk","5101":"Cataphract","5102":"Chu Ko Nu","5103":"Mameluke","5104":"Huskarl","5105":"Janissary","5106":"Longboat","5107":"Longbowman","5108":"Mangudai","5109":"War Elephant","5110":"Samurai","5111":"Throwing Axeman","5112":"Teutonic Knight","5113":"Woad Raider","5114":"Condottiero","5128":"Archery Range","5129":"Organ Gun","5130":"Elite Organ Gun","5131":"Blacksmith","5132":"Caravel","5133":"Elite Caravel","5134":"Camel Archer","5135":"Barracks","5136":"Elite Camel Archer","5137":"Genitour","5138":"Monastery","5139":"Elite Genitour","5140":"Gbeto","5141":"Elite Gbeto","5142":"Castle","5143":"Shotel Warrior","5144":"Dock","5145":"Elite Shotel Warrior","5146":"Ballista Elephant","5147":"Elite Ballista Elephant","5148":"Karambit Warrior","5149":"Farm","5150":"Elite Karambit Warrior","5151":"Arambai","5152":"Elite Arambai","5154":"Guard Tower","5155":"Keep","5156":"Bombard Tower","5157":"Mill","5159":"Feitoria","5160":"Fire Galley","5161":"Market","5162":"Demolition Raft","5164":"Town Center","5165":"Rattan Archer","5166":"Elite Rattan Archer","5167":"Battle Elephant","5168":"Elite Battle Elephant","5169":"Siege Workshop","5171":"Stable","5176":"University","5178":"Watch Tower","5182":"Wonder","5185":"Gate","5186":"Palisade Gate","5190":"Imperial Skirmisher","5202":"Palisade Wall","5203":"Stone Wall","5204":"Fortified Wall","5249":"Harbor","5287":"Cannon Galleon","5288":"Konnik","5289":"Capped Ram","5290":"Elite Konnik","5309":"Galleon","5313":"Keshik","5314":"Elite Keshik","5315":"Kipchak","5326":"Scout Cavalry","5327":"Elite Kipchak","5328":"Leitis","5329":"Elite Leitis","5344":"House","5349":"Krepost","5375":"Flaming Camel","5403":"Urumi Swordsman","5408":"Pikeman","5409":"Halberdier","5411":"Two-Handed Swordsman","5412":"Heavy Cavalry Archer","5413":"Elite Urumi Swordsman","5416":"Camel Rider","5417":"Heavy Camel Rider","5418":"Arbalester","5419":"Imperial Camel Rider","5421":"Chakram Thrower","5424":"Demolition Ship","5425":"Heavy Demolition Ship","5426":"Fire Ship","5427":"Elite Chakram Thrower","5428":"Armored Elephant","5429":"Fast Fire Ship","5430":"Siege Elephant","5431":"Ghulam","5432":"Elite Ghulam","5435":"Thirisadai","5436":"Galley","5437":"Shrivamsha Rider","5438":"Elite Shrivamsha Rider","5439":"Heavy Scorpion","5440":"Caravanserai","5441":"Camel Scout","5443":"Transport Ship","5444":"Light Cavalry","5445":"Siege Tower","5446":"Siege Ram","5447":"Boyar","5448":"Onager","5449":"Elite Boyar","5451":"Elite Cataphract","5452":"Elite Chu Ko Nu","5453":"Elite Mameluke","5454":"Elite Huskarl","5455":"Elite Janissary","5456":"Elite Longbowman","5457":"Elite Longboat","5458":"Elite Mangudai","5459":"Elite War Elephant","5460":"Elite Samurai","5461":"Elite Throwing Axeman","5462":"Elite Teutonic Knight","5463":"Elite Woad Raider","5464":"Lumber Camp","5469":"Champion","5471":"Paladin","5487":"Mining Camp","5493":"Siege Onager","5495":"Fish Trap","5504":"Outpost","5534":"Coustillier","5536":"Elite Coustillier","5538":"Serjeant","5540":"Elite Serjeant","5542":"Flemish Militia","5544":"Donjon","5558":"Obuch","5559":"Elite Obuch","5561":"Hussite Wagon","5563":"Elite Hussite Wagon","5573":"Elite Cannon Galleon","5574":"Berserk","5576":"Elite Berserk","5577":"Winged Hussar","5579":"Houfnice","5581":"Folwark","5606":"Villager","5660":"Petard","5661":"Hussar","5667":"Jaguar Warrior","5669":"Elite Jaguar Warrior","5671":"Eagle Warrior","5672":"Eagle Scout","5673":"Elite Eagle Warrior","5675":"Tarkan","5677":"Elite Tarkan","5682":"Elephant Archer","5683":"Plumed Archer","5684":"Elite Elephant Archer","5685":"Elite Plumed Archer","5686":"Kamayuk","5687":"Conquistador","5688":"Elite Kamayuk","5689":"Elite Conquistador","5690":"Slinger","5691":"Missionary","5723":"Genoese Crossbowman","5725":"Elite Genoese Crossbowman","5727":"War Wagon","5728":"Magyar Huszar","5729":"Elite War Wagon","5730":"Elite Magyar Huszar","5731":"Turtle Ship","5732":"Elite Turtle Ship","7008":"Town Watch","7012":"Crop Rotation","7013":"Heavy Plow","7014":"Horse Collar","7015":"Guilds","7017":"Banking","7019":"Cartography","7022":"Loom","7023":"Coinage","7039":"Husbandry","7045":"Faith","7047":"Chemistry","7050":"Masonry","7051":"Architecture","7054":"Treadmill Crane","7055":"Gold Mining","7059":"Kataparuto","7063":"Keep","7067":"Forging","7068":"Iron Casting","7074":"Scale Mail Armor","7075":"Blast Furnace","7076":"Chain Mail Armor","7077":"Plate Mail Armor","7080":"Plate Barding Armor","7081":"Scale Barding Armor","7082":"Chain Barding Armor","7090":"Tracking","7093":"Ballistics","7101":"Feudal Age","7102":"Castle Age","7103":"Imperial Age","7150":"Bodkin Arrow","7151":"Bracer","7163":"Fortified Wall","7172":"Fletching","7180":"Gold Shaft Mining","7186":"Guard Tower","7189":"Double-Bit Axe","7190":"Bow Saw","7208":"Padded Archer Armor","7209":"Leather Archer Armor","7210":"Squires","7211":"Wheelbarrow","7216":"Ring Archer Armor","7220":"Illumination","7221":"Sanctity","7222":"Block Printing","7231":"Two-Man Saw","7246":"Hand Cart","7249":"Fervor","7250":"Carrack","7251":"Arquebus","7252":"Royal Heirs","7253":"Torsion Engines","7254":"Tigui","7255":"Farimba","7256":"Kasbah","7257":"Maghrebi Camels","7258":"Arson","7266":"Andean Sling","7267":"Fabric Shields","7269":"Druzhina","7270":"Grand Trunk Road","7271":"Shatagni","7272":"Pavise","7273":"Silk Road","7274":"Recurve Bow","7275":"Corvinian Army","7276":"Stone Mining","7277":"Stone Shaft Mining","7278":"Arrowslits","7280":"Nomads","7281":"Kamandaran","7282":"Town Patrol","7283":"Ironclad","7285":"Sipahi","7286":"Inquisition","7287":"Chivalry","7291":"Tusk Swords","7292":"Double Crossbow","7293":"Thalassocracy","7294":"Forced Levy","7295":"Howdah","7296":"Manipur Cavalry","7297":"Chatras","7298":"Paper Money","7307":"Stirrups","7308":"Bagains","7309":"Silk Armor","7310":"Timurid Siegecraft","7311":"Steppe Husbandry","7312":"Chieftains","7313":"Greek Fire","7314":"Gillnets","7315":"Redemption","7316":"Atonement","7318":"Logistica","7319":"Conscription","7320":"Bombard Tower","7321":"Murder Holes","7322":"Sappers","7324":"Bearded Axe","7325":"Supremacy","7326":"Atlatl","7327":"Warwolf","7342":"Burgundian Vineyards","7343":"Flemish Revolution","7344":"First Crusade","7345":"Hauberk","7348":"Szlachta Privileges","7349":"Lechitic Legacy","7350":"Wagenburg Tactics","7351":"Hussite Reforms","7357":"Medical Corps","7358":"Wootz Steel","7359":"Paiks","7360":"Mahayana","7361":"Kshatriyas","7362":"Frontier Guards","7368":"Great Wall","7369":"Stronghold","7370":"Marauders","7371":"Yasama","7372":"Careening","7373":"Dry Dock","7374":"Heated Shot","7376":"Hoardings","7377":"Shipwright","7378":"Siege Engineers","7379":"Hul\'che Javelineers","7380":"Eupseong","7398":"Cuman Mercenaries","7399":"Hill Forts","7400":"Tower Shields","7403":"Supplies","7408":"Spies/Treason","7409":"Bloodlines","7410":"Caravan","7411":"Thumb Ring","7412":"Heresy","7415":"Parthian Tactics","7416":"Theocracy","7419":"Yeomen","7420":"El Dorado","7421":"Furor Celtica","7422":"Drill","7423":"Mahouts","7424":"Zealotry","7425":"Artillery","7426":"Crenellations","7427":"Anarchy","7428":"Atheism","7429":"Garland Wars","7431":"Bogsveigar","7432":"Rocketry","7435":"Herbal Medicine","7438":"Shinkichon","7439":"Perfusion","7444":"Ballistas","7445":"Comitatenses","7447":"Counterweights","7448":"Detinets","7450":"Gambesons","9681":"Civilization","9799":"Technology Tree","10271":"Britons","10272":"Franks","10273":"Goths","10274":"Teutons","10275":"Japanese","10276":"Chinese","10277":"Byzantines","10278":"Persians","10279":"Saracens","10280":"Turks","10281":"Vikings","10282":"Mongols","10283":"Celts","10284":"Spanish","10285":"Aztecs","10286":"Mayans","10287":"Huns","10288":"Koreans","10289":"Italians","10290":"Hindustanis","10291":"Incas","10292":"Magyars","10293":"Slavs","10294":"Portuguese","10295":"Ethiopians","10296":"Malians","10297":"Berbers","10298":"Khmer","10299":"Malay","10300":"Burmese","10301":"Vietnamese","10302":"Bulgarians","10303":"Tatars","10304":"Cumans","10305":"Lithuanians","10306":"Burgundians","10307":"Sicilians","10308":"Poles","10309":"Bohemians","10310":"Dravidians","10311":"Bengalis","10312":"Gurjaras","10313":"Romans","19052":"Trade Cart","21057":"Konnik (Dismounted)","21058":"Elite Konnik (Dismounted)","21096":"Ratha (Melee)","21097":"Elite Ratha (Melee)","21104":"Ratha","21105":"Elite Ratha","26009":"Create <b>Steppe Lancer</b> (‹cost›)<br>\\nLight cavalry unit with increased attack range. Strong in groups. Weak vs. Camel Riders and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Steppe Lancer 900F, 550G (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26010":"Create <b>Elite Steppe Lancer</b> (‹cost›)<br>\\nLight cavalry unit with increased attack range. Strong in groups. Weak vs. Camel Riders and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26040":"Create <b>Xolotl Warrior</b> (‹cost›)<br>\\nMesoamerican cavalry unit. Strong vs. infantry and siege. Weak vs. Pikemen and Camel Riders. <i> Upgrades: attack (Blacksmith); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26052":"Create <b>Centurion</b> (‹cost›)<br>\\nRoman unique cavalry unit. Increases movement and attack speed of nearby Militia-line units. Strong vs. infantry. Weak vs. Pikemen and Camel Riders. <i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Centurion 1100F, 900G (Castle); more resistant to Monks.</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26053":"Create <b>Elite Centurion</b> (‹cost›)<br>\\nRoman unique cavalry unit. Increases movement and attack speed of nearby Militia-line units. Strong vs. infantry. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26054":"Create <b>Legionary</b> (‹cost›)<br>\\nRoman unique infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26055":"Build <b>Dromon</b> (‹cost›)<br>\\nAnti-building siege warship with long range and area of effect attack, but cannot attack enemies at close range. Strong vs. buildings. Weak vs. other units.<i> Upgrades: armor, cost, speed (Dock); attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26068":"Create <b>Knight</b> (‹cost›)<br>\\nPowerful all-purpose cavalry. Strong vs. infantry and archers. Weak vs. Pikemen, Camel Riders, and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Cavalier 300F, 300G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26070":"Create <b>Cavalier</b> (‹cost›)<br>\\nPowerful all-purpose cavalry. Strong vs. infantry and archers. Weak vs. Pikemen, Camel Riders, and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Paladin 1300F, 750G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26078":"Create <b>Spearman</b> (‹cost›)<br>\\nAnti-cavalry infantry unit. Strong vs. mounted units, especially elephants. Weak vs. archers and infantry.<i> Upgrades: attack, armor (Blacksmith); speed, to Pikeman 160F, 90G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26079":"Create <b>Militia</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed, to Man-at-Arms 100F, 40G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26080":"Create <b>Man-at-Arms</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed, to Long Swordsman 150F, 65G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26081":"Create <b>Long Swordsman</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed, to Two-Handed Swordsman 300F, 100G or Legionary 800F, 400G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26083":"Create <b>Archer</b> (‹cost›)<br>\\nRanged unit. Strong vs. units at long range. Weak vs. Skirmishers and units at close range.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Crossbowman 175F, 125G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26084":"Create <b>Crossbowman</b> (‹cost›)<br>\\nRanged unit. Strong vs. units at long range. Weak vs. Elite Skirmishers, Mangonels, and units at close range.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Arbalester 450F, 400G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26085":"Create <b>Cavalry Archer</b> (‹cost›)<br>\\nMounted archer. Strong vs. slow units at long range. Weak vs. Elite Skirmishers and units at close range.<i> Upgrades: speed, hit points (Stable); attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, armor, to Heavy Cavalry Archer 900F, 500G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26086":"Create <b>Hand Cannoneer</b> (‹cost›)<br>\\nGunpowder unit with powerful attack, but inaccurate at long range. Strong vs. infantry. Weak vs. Elite Skirmishers and archers.<i> Upgrades: armor (Blacksmith); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26087":"Create <b>Elite Skirmisher</b> (‹cost›)<br>\\nRanged anti-archer unit that cannot attack at close range. Strong vs. archers. Weak vs. units at close range.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Imperial Skirmisher 300W, 300G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26088":"Create <b>Skirmisher</b> (‹cost›)<br>\\nRanged anti-archer unit that cannot attack at close range. Strong vs. archers. Weak vs. units at close range.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Elite Skirmisher 230W, 130G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26089":"Build <b>Trade Cog</b> (‹cost›)<br>\\nTrade unit used for generating gold at another player\'s Dock. To trade, click the Trade Cog then right-click another player\'s Dock. Will return with gold to your Dock.<i> Upgrades: generate more gold (Market); armor, cost (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26090":"Build <b>Fishing Ship</b> (‹cost›)<br>\\nGathers food from fish and Fish Traps. Builds Fish Traps.<i> Upgrades: armor, cost, speed, efficiency (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26091":"Build <b>War Galley</b> (‹cost›)<br>\\nAll-purpose warship with ranged attack. Weak vs. Fire Ships.<i> Upgrades: armor, cost, speed, to Galleon 400F, 315W (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26093":"Build <b>Bombard Cannon</b> (‹cost›)<br>\\nSiege weapon with long range. Strong vs. buildings and siege weapons. Weak vs. melee units.<i> Upgrades: attack, range (University); to Houfnice 1100F, 800G (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26094":"Build <b>Battering Ram</b> (‹cost›)<br>\\nAnti-building siege weapon. Resistant to most ranged attacks. Garrisoned infantry increase speed and attack.<i> Upgrades: attack (University); to Capped Ram 300F (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26095":"Build <b>Mangonel</b> (‹cost›)<br>\\nRanged siege weapon with area of effect attack, but cannot attack enemies at close range. Strong vs. tight groups of units. Can attack ground.<i> Upgrades: attack, range (University); to Onager 800F, 500G (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26096":"Build <b>Scorpion</b> (‹cost›)<br>\\nAnti-unit siege weapon. Fires bolts that pierce multiple units. Strong vs. large groups of units. Weak vs. cavalry and siege weapons.<i> Upgrades: range, attack (University); to Heavy Scorpion 800F, 900W (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26097":"Build <b>Trebuchet</b> (‹cost›)<br>\\nPowerful anti-building siege weapon with long range. Must be packed to move, unpacked to attack. Cannot attack enemies at close range. Strong vs. buildings. Can attack ground and destroy trees.<i> Upgrades: attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26099":"Create <b>Monk</b> (‹cost›)<br>\\nConverts enemy units to your civilization. Heals friendly units (except ships and siege weapons). Strong vs. slow and non-ranged units. Weak vs. Light Cavalry and ranged units. Can collect Relics and bring them to Monasteries.<i> Upgrades: at Monastery.</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26100":"Build <b>Trade Cart</b> (‹cost›)<br>\\nTrade unit used for generating gold at another player\'s Market. To trade, click the Trade Cart then right-click another player\'s Market. Will return with gold to your Market.<i> Upgrades: generate more gold (Market); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26101":"Create <b>Cataphract</b> (‹cost›)<br>\\nByzantine unique cavalry unit. Strong vs. infantry. Weak vs. archers. <i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Cataphract 1200F, 800G (Castle); more resistant to Monks.</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26102":"Create <b>Chu Ko Nu</b> (‹cost›)<br>\\nChinese unique archer with rapid-fire attack. Strong vs. infantry. Weak vs. archers and siege weapons. <i> Upgrades: attack, range (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed, to Elite Chu Ko Nu 760F, 760G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26103":"Create <b>Mameluke</b> (‹cost›)<br>\\nSaracen unique camel unit with ranged melee attack. Strong vs. cavalry. Weak vs. archers and Pikemen. <i> Upgrades: attack, armor (Blacksmith); speed, hit points  (Stable); creation speed, to Elite Mameluke 600F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26104":"Create <b>Huskarl</b> (‹cost›)<br>\\nGothic unique infantry unit with high pierce armor. Strong vs. archers and buildings. Weak vs. cavalry. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Huskarl 1200F, 550G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26105":"Create <b>Janissary</b> (‹cost›)<br>\\nTurkish unique hand cannoneer with longer range and no minimum range. Strong vs. infantry. Weak vs. archers.<i> Upgrades: armor (Blacksmith); creation speed, to Elite Janissary 850F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26106":"Build <b>Longboat</b> (‹cost›)<br>\\nViking unique ship that fires multiple arrows. Strong vs. War Galleys, land units, and buildings. <i> Upgrades: armor, cost, speed, to Elite Longboat 750F, 475G (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26107":"Create <b>Longbowman</b> (‹cost›)<br>\\nBritish unique archer with very long range. Strong vs. infantry. Weak vs. cavalry and Skirmishers. <i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); creation speed, to Elite Longbowman 850F, 850G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26108":"Create <b>Mangudai</b> (‹cost›)<br>\\nMongol unique cavalry archer with fast-firing attack. Strong vs. siege weapons and infantry. Weak vs. Skirmishers, Pikemen, and Camel Riders. <i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed, to Elite Mangudai 1100F, 675G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26109":"Create <b>War Elephant</b> (‹cost›)<br>\\nPersian unique unit. Slow and powerful cavalry. Strong vs. buildings and units at close range. Weak vs. Monks. <i> Upgrades: attack, armor (Blacksmith); speed, hit points  (Stable); creation speed, to Elite War Elephant 1600F, 1200G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26110":"Create <b>Samurai</b> (‹cost›)<br>\\nJapanese unique infantry unit with fast attack. Strong vs. unique units and infantry. Weak vs. archers. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Samurai 750F, 650G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26111":"Create <b>Throwing Axeman</b> (‹cost›)<br>\\nFrankish unique infantry unit with ranged melee attack. Strong vs. infantry. Weak vs. archers and siege weapons. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Throwing Axeman 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26112":"Create <b>Teutonic Knight</b> (‹cost›)<br>\\nTeutonic unique infantry unit. Slow and powerful. Strong vs. melee units. Weak vs. archers and Scorpions. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Teutonic Knight 950F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26113":"Create <b>Woad Raider</b> (‹cost›)<br>\\nCeltic unique infantry unit. Fast-moving. Strong vs. infantry and siege weapons. Weak vs. archers and cavalry. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Woad Raider 1000F, 800G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26114":"Create <b>Condottiero</b> (‹cost›)<br>\\nFast anti-gunpowder infantry. Strong vs. gunpowder units. Weak vs. cavalry and archers. Trainable by Italians and their allies.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26121":"Create <b>Villager</b> (‹cost›)<br>\\nGathers resources. Builds and repairs buildings. Also repairs ships and siege weapons.<i> Upgrades: hit points, armor, efficiency (Town Center); wood resource-gathering (Lumber Camp); stone, gold resource-gathering (Mining Camp); build speed (University); attack (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26128":"Build <b>Archery Range</b> (‹cost›)<br>\\nUsed to train and upgrade archer units. <i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i> <br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26129":"Create <b>Organ Gun</b> (‹cost›)<br>\\nPortuguese unique siege unit. Fires a volley of bullets. Strong vs. large groups of units. Weak vs. cavalry and Mangonels.<i> Upgrades: attack, range (University); creation speed, to Elite Organ Gun 1200F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26130":"Create <b>Elite Organ Gun</b> (‹cost›)<br>\\nPortuguese unique siege unit. Fires a volley of bullets. Strong vs. large groups of units. Weak vs. cavalry and Mangonels.<i> Upgrades: attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26131":"Build <b>Blacksmith</b> (‹cost›)<br>\\nUsed to research technologies to improve armor and attack of units.<b><i> Required for Siege Workshop.</b></i> <i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i> <br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26132":"Create <b>Caravel</b> (‹cost›)<br>\\nPortuguese unique ship that fires bolts that pierce multiple units. Strong vs. large groups of ships. Weak vs. Fire Ships.<i> Upgrades: armor, cost, speed, to Elite Caravel 700F, 525G (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26133":"Create <b>Elite Caravel</b> (‹cost›)<br>\\nPortuguese unique ship that fires bolts that pierce multiple units. Strong vs. large groups of ships. Weak vs. Fire Ships.<i> Upgrades: armor, speed, cost (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26134":"Create <b>Camel Archer</b> (‹cost›)<br>\\nBerber unique mounted archer. Strong vs. Cavalry Archers and infantry. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed, to Elite Camel Archer 1000W, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26135":"Build <b>Barracks</b> (‹cost›)<br>\\nUsed to train and upgrade infantry units.<b><i> Required for Archery Range, Stable.</b></i> <i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26136":"Create <b>Elite Camel Archer</b> (‹cost›)<br>\\nBerber unique mounted archer. Strong vs. Cavalry Archers and infantry. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26137":"Create <b>Genitour</b> (‹cost›)<br>\\nMounted skirmisher. Strong vs. archers. Weak vs. units at close range. Trainable by Berbers and their allies.<i> Upgrades: speed, hit points (Stable); attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Elite Genitour 500F, 450W (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26138":"Build <b>Monastery</b> (‹cost›)<br>\\nUsed to train and upgrade Monks. Garrison relics to generate gold. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26139":"Create <b>Elite Genitour</b> (‹cost›)<br>\\nMounted skirmisher. Strong vs. archers. Weak vs. units at close range. Trainable by Berbers and their allies.<i> Upgrades: speed, hit points (Stable); attack, range, armor (Blacksmith); attack, accuracy (University); accuracy (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26140":"Create <b>Gbeto</b> (‹cost›)<br>\\nMalian unique infantry unit with ranged melee attack. Fast-moving. Strong vs. infantry. Weak vs. archers and siege weapons.<i> Upgrades: armor (Blacksmith); creation speed, to Elite Gbeto 900F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26141":"Create <b>Elite Gbeto</b> (‹cost›)<br>\\nMalian unique infantry unit with ranged melee attack. Fast-moving. Strong vs. infantry. Weak vs. archers and siege weapons.<i> Upgrades: armor (Blacksmith); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26142":"Build <b>Castle</b> (‹cost›)<br>\\nUsed to train and upgrade your unique unit, build Trebuchets, and research technologies. Automatically attacks enemies within range. Units can garrison inside for protection. Ranged Units and Villagers provide additional projectiles. Provides 20 population. Cannot be converted by enemy Monks.<i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor, accuracy (University); attack, range (Blacksmith); attack, range (Castle).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26143":"Create <b>Shotel Warrior</b> (‹cost›)<br>\\nEthiopian unique infantry with high attack and fast training speed. Fast-moving. Strong vs. infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Shotel Warrior 900F, 450G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26144":"Build <b>Dock</b> (‹cost›)<br>\\nUsed to build and upgrade ships, deposit food from Fishing Ships, and trade with other players by sea.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26145":"Create <b>Elite Shotel Warrior</b> (‹cost›)<br>\\nEthiopian unique infantry with high attack and fast training speed. Fast-moving. Strong vs. infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26146":"Create <b>Ballista Elephant</b> (‹cost›)<br>\\nKhmer unique elephant equipped with a Scorpion. Can destroy trees. Strong vs. infantry and archers. Weak vs. cavalry and siege weapons.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); attack, range (University); creation speed, to Elite Ballista Elephant 1000F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26147":"Create <b>Elite Ballista Elephant</b> (‹cost›)<br>\\nKhmer unique elephant equipped with a Scorpion. Can destroy trees. Strong vs. infantry and archers. Weak vs. cavalry and siege weapons.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26148":"Create <b>Karambit Warrior</b> (‹cost›)<br>\\nMalay unique infantry unit. Cheap and only takes half a population unit. Strong in high numbers. Weak vs. cavalry and archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Karambit Warrior 900F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26149":"Build <b>Farm</b> (‹cost›)<br>\\nRenewable food source. Provides a limited amount of food before it goes fallow and must be rebuilt. Only one Villager may work a Farm at a time. You can farm abandoned enemy Farms. Cannot be converted by enemy Monks.<i> Upgrades: food (Mill); hit points (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26150":"Create <b>Elite Karambit Warrior</b> (‹cost›)<br>\\nMalay unique infantry unit. Cheap and only takes half a population unit. Strong in high numbers. Weak vs. cavalry and archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26151":"Create <b>Arambai</b> (‹cost›)<br>\\nBurmese unique cavalry archer with a powerful but inaccurate dart attack. Strong vs. infantry and cavalry. Weak vs. archers.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); armor (Archery Range); attack, accuracy (University); creation speed, to Elite Arambai 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26152":"Create <b>Elite Arambai</b> (‹cost›)<br>\\nBurmese unique cavalry archer with a powerful but inaccurate dart attack. Strong vs. infantry and cavalry. Weak vs. archers.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); armor (Archery Range); accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26154":"Build <b>Guard Tower</b> (‹cost›)<br>\\nTower with a ranged attack. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles. Strong vs. archers. Weak vs.units at close range, especially Rams.<i> Upgrades: line of sight (Town Center); attack, range (Blacksmith); attack, hit points, armor, ship attack; to Keep 500F, 350W (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26155":"Build <b>Keep</b> (‹cost›)<br>\\nTower with a ranged attack. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles. Strong vs. archers. Weak vs.units at close range, especially Rams.<i> Upgrades: line of sight (Town Center); attack, range (Blacksmith); attack, hit points, armor, ship attack (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26156":"Build <b>Bombard Tower</b> (‹cost›)<br>\\nGunpowder tower with a powerful ranged attack. Units can garrison inside for protection. Strong vs. ships.<i> Upgrades: line of sight (Town Center); attack, range (Blacksmith); hit points, armor, ship attack (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26157":"Build <b>Mill</b> (‹cost›)<br>\\nUsed to deposit food and research farming technologies. Build near forage bushes or other source of food to gather food faster. <b><i> Required for Farm, Market.</b></i> <i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26159":"Build <b>Feitoria</b> (‹cost›)<br>\\nEconomic building. Generates resources without the need for villagers. Unique building of the Portuguese. Requires 20 population.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26160":"Build <b>Fire Galley</b> (‹cost›)<br>\\nWarship that spews fire at close range. Strong vs. Galleys. Weak vs. Demolition Rafts.<i> Upgrades: armor, speed, cost, to Fire Ship 230F, 100G (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26161":"Build <b>Market</b> (‹cost›)<br>\\nUsed to buy and sell resources, trade with other players by land, and research trade technologies. Required to send resources to other players. Enables you to see the line of sight of your allies.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26162":"Build <b>Demolition Raft</b> (‹cost›)<br>\\nDemolition ship armed with explosives. Strong vs. Fire Galleys and buildings. Self-destructs when used.<i> Upgrades: armor, speed, cost, to Demolition Ship 230F, 100G (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26164":"Build <b>Town Center</b> (‹cost›)<br>\\nUsed to train Villagers, deposit resources, advance to the next Age, and research technologies. Units can garrison inside for protection. Ranged Units and Villagers provide additional projectiles. Provides 5 population. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor, accuracy (University); attack (Blacksmith).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26165":"Create <b>Rattan Archer</b> (‹cost›)<br>\\nVietnamese unique archer with high pierce armor. Strong vs. archers and infantry. Weak vs. cavalry and Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); accuracy, armor (Archery Range); attack, accuracy (University); creation speed, to Elite Rattan Archer 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26166":"Create <b>Elite Rattan Archer</b> (‹cost›)<br>\\nVietnamese unique archer with high pierce armor. Strong vs. archers and infantry. Weak vs. cavalry and Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); accuracy, armor (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26167":"Create <b>Battle Elephant</b> (‹cost›)<br>\\nSlow and heavy cavalry. Strong vs. cavalry, infantry, and archers. Weak vs. Monks and Pikemen.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Elite Battle Elephant 1100F, 700G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26168":"Create <b>Elite Battle Elephant</b> (‹cost›)<br>\\nSlow and heavy cavalry. Strong vs. cavalry, infantry, and archers. Weak vs. Monks and Pikemen.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26169":"Build <b>Siege Workshop</b> (‹cost›)<br>\\nUsed to build and upgrade siege weapons.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26171":"Build <b>Stable</b> (‹cost›)<br>\\nUsed to train and upgrade cavalry units.<i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26176":"Build <b>University</b> (‹cost›)<br>\\nUsed to research technologies to improve units and buildings.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26178":"Build <b>Watch Tower</b> (‹cost›)<br>\\nTower with a ranged attack. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles. Strong vs. archers. Weak vs.units at close range, especially Rams.<i> Upgrades: line of sight (Town Center); attack, range (Blacksmith); attack, hit points, armor, ship attack; to Guard Tower 100F, 250W (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26182":"Build <b>Wonder</b> (‹cost›)<br>\\nA Wonder of the World that demonstrates the superiority of your civilization. Constructing a Wonder that stands for a certain period of time is one way to win the game. Cannot be converted by enemy Monks.<br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26185":"Build <b>Gate</b> (‹cost›)<br>\\nCan be built into existing walls to allow movement of friendly units. Can be locked and unlocked. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor. Researching Fortified Wall (University) increases gate hit points.</i><br>\\n‹hp›","26186":"Build <b>Palisade Gate</b> (‹cost›)<br>\\nCan be built into existing walls to allow movement of friendly units. Can be locked and unlocked. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor (university).</i><br>\\n‹hp›","26190":"Create <b>Imperial Skirmisher</b> (‹cost›)<br>\\nRanged anti-archer unit that cannot attack at close range. Strong vs. archers. Weak vs. units at close range. Trainable by Vietnamese and their allies.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26202":"Build <b>Palisade Wall</b> (‹cost›)<br>\\nWooden wall that is cheap and easy to build. Slows down your enemies and warns you of their approach. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26203":"Build <b>Stone Wall</b> (‹cost›)<br>\\nStone wall that is difficult to breach without siege weapons. Slows down your enemies and warns you of their approach. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor, to Fortified Wall 200F, 100W (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26204":"Build <b>Fortified Wall</b> (‹cost›)<br>\\nStone wall that is difficult to breach without siege weapons. Slows down your enemies and warns you of their approach. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26249":"Build <b>Harbor</b> (‹cost›)<br>\\nUsed to build and upgrade ships, deposit food from Fishing Ships, and trade with other players by sea. Unique building of the Malay. Automatically attacks enemies within range.<i> Upgrades: attack, range (Blacksmith); line of sight (Town Center); attack, accuracy, hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26287":"Build <b>Cannon Galleon</b> (‹cost›)<br>\\nAnti-building siege warship with long range, but cannot attack enemies at close range. Strong vs. buildings. Weak vs. other units.<i> Upgrades: armor, cost, speed, to Elite Cannon Galleon 525W, 500G (Dock); attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26288":"Create <b>Konnik</b> (‹cost›)<br>\\nBulgarian unique cavalry unit that fights on as infantry when felled. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Konnik 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26289":"Build <b>Capped Ram</b> (‹cost›)<br>\\nAnti-building siege weapon. Resistant to most ranged attacks. Garrisoned infantry increase speed and attack.<i> Upgrades: attack (University); to Siege Ram 1000F (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26290":"Create <b>Elite Konnik</b> (‹cost›)<br>\\nBulgarian unique cavalry unit that fights on as infantry when felled. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26309":"Build <b>Galleon</b> (‹cost›)<br>\\nAll-purpose warship with ranged attack. Weak vs. Fire Ships.<i> Upgrades: armor, cost, speed (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26313":"Create <b>Keshik</b> (‹cost›)<br>\\nTatar unique cavalry unit that generates gold when fighting other units.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Keshik 700F, 900G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26314":"Create <b>Elite Keshik</b> (‹cost›)<br>\\nTatar unique cavalry unit that generates gold when fighting other units.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26315":"Create <b>Kipchak</b> (‹cost›)<br>\\nCuman unique cavalry archer with rapid-fire attack. Strong vs. infantry. Weak vs. Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed, to Elite Kipchak 1100F, 1000W (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26326":"Create <b>Scout Cavalry</b> (‹cost›)<br>\\nFast cavalry for scouting and raiding. Resistant to conversion. Strong vs. Monks. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Light Cavalry 150F, 50G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26327":"Create <b>Elite Kipchak</b> (‹cost›)<br>\\nCuman unique cavalry archer with rapid-fire attack. Strong vs. infantry. Weak vs. Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26328":"Create <b>Leitis</b> (‹cost›)<br>\\nLithuanian unique cavalry unit with attack that ignores armor. Strong vs. armored units.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Leitis 750F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26329":"Create <b>Elite Leitis</b> (‹cost›)<br>\\nLithuanian unique cavalry unit with attack that ignores armor. Strong vs. armored units.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26344":"Build <b>House</b> (‹cost›)<br>\\nProvides 5 population each. Your current/supportable population is shown at the top of the screen.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26349":"Build <b>Krepost</b> (‹cost›)<br>\\nFortification used to train your unique unit. Unique building of the Bulgarians. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles. Provides 20 population. Cannot be converted by enemy Monks.<i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor, accuracy (University); attack, range (Blacksmith).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26375":"Create <b>Flaming Camel</b> (‹cost›)<br>\\nIncendiary camel loaded with flammable hay and brush. Strong vs. mounted units, especially elephants. Weak vs. archers and infantry. Self-destructs when used.<i> Upgrades: attack (University); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26381":"Build <b>Trebuchet</b> (‹cost›)<br>\\nPowerful anti-building siege weapon with long range. Must be packed to move, unpacked to attack. Cannot attack enemies at close range. Strong vs. buildings. Can attack ground and destroy trees.<i> Upgrades: attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26403":"Create <b>Urumi Swordsman</b> (‹cost›)<br>\\nDravidian unique infantry unit which can charge its attack. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Urumi Swordsman 900F, 450G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26408":"Create <b>Pikeman</b> (‹cost›)<br>\\nAnti-cavalry infantry unit. Strong vs. mounted units, especially elephants. Weak vs. archers and infantry.<i> Upgrades: attack, armor (Blacksmith); speed, to Halberdier 300F, 600G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26409":"Create <b>Halberdier</b> (‹cost›)<br>\\nAnti-cavalry infantry unit. Strong vs. mounted units, especially elephants. Weak vs. archers and infantry.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26411":"Create <b>Two-Handed Swordsman</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed, to Champion 750F, 350G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26412":"Create <b>Heavy Cavalry Archer</b> (‹cost›)<br>\\nMounted archer. Strong vs. slow units at long range. Weak vs. Elite Skirmishers and units at close range.<i> Upgrades: attack, range, armor (Blacksmith); accuracy, armor (Archery Range); attack, accuracy (University); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26413":"Create <b>Elite Urumi Swordsman</b> (‹cost›)<br>\\nDravidian unique infantry unit which can charge its attack. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26416":"Create <b>Camel Rider</b> (‹cost›)<br>\\nFast anti-cavalry unit. Strong vs. cavalry. Weak vs. Spearmen, Monks, and archers.<i> Upgrades: attack, armor (Blacksmith); speed, to Heavy Camel Rider 325F, 360G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26417":"Create <b>Heavy Camel Rider</b> (‹cost›)<br>\\nFast anti-cavalry unit. Strong vs. cavalry. Weak vs. Pikemen, Monks, and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Imperial Camel Rider 1000F, 500G  (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26418":"Create <b>Arbalester</b> (‹cost›)<br>\\nRanged unit. Strong vs. units at long range. Weak vs. Elite Skirmishers, Onagers, and units at close range.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26419":"Create <b>Imperial Camel Rider</b> (‹cost›)<br>\\nHindustani unique anti-cavalry unit. Fast-moving. Strong vs. cavalry. Weak vs. Pikemen, Monks, and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26421":"Create <b>Chakram Thrower</b> (‹cost›)<br>\\nGurjara unique infantry unit with ranged melee attack. Strong vs. infantry. Weak vs. archers and siege weapons. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Chakram Thrower 1000F, 650G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26424":"Build <b>Demolition Ship</b> (‹cost›)<br>\\nDemolition ship armed with explosives. Strong vs. Fire Ships and buildings. Self-destructs when used.<i> Upgrades: armor, speed, cost, to Heavy Demolition Ship 200W, 300G (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26425":"Build <b>Heavy Demolition Ship</b> (‹cost›)<br>\\nDemolition ship armed with explosives. Strong vs. Fire Ships and buildings. Self-destructs when used.<i> Upgrades: armor, speed, cost (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26426":"Build <b>Fire Ship</b> (‹cost›)<br>\\nWarship that spews fire at close range. Strong vs. War Galleys. Weak vs. Demolition Ships.<i> Upgrades: armor, speed, cost, to Fast Fire Ship 280W, 250G (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26427":"Create <b>Elite Chakram Thrower</b> (‹cost›)<br>\\nGurjara unique infantry unit with ranged melee attack. Strong vs. infantry. Weak vs. archers and siege weapons. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26428":"Create <b>Armored Elephant</b> (‹cost›)<br>\\nAnti-building cavalry unit. Resistant to most ranged attacks. Weak vs. melee units. Cannot be converted by enemy Monks from distance.<i> Upgrades: attack, armor (Blacksmith); attack (University); speed, hit points (Stable); to Siege Elephant 850F (Siege Workshop); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26429":"Build <b>Fast Fire Ship</b> (‹cost›)<br>\\nWarship that spews fire at close range. Strong vs. War Galleys. Weak vs. Demolition Ships.<i> Upgrades: armor, speed, cost (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26430":"Create <b>Siege Elephant</b> (‹cost›)<br>\\nAnti-building cavalry unit. Resistant to most ranged attacks. Weak vs. melee units. Cannot be converted by enemy Monks from distance.<i> Upgrades: attack, armor (Blacksmith); attack (University); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26431":"Create <b>Ghulam</b> (‹cost›)<br>\\nHindustani unique infantry unit that thrusts its spear through multiple targets. Strong vs. archers. Weak vs. cavalry. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Ghulam 950F, 575G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26432":"Create <b>Elite Ghulam</b> (‹cost›)<br>\\nHindustani unique infantry unit that thrusts its spear through multiple targets. Strong vs. archers. Weak vs. cavalry. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26435":"Build <b>Thirisadai</b> (‹cost›)<br>\\nDravidian unique warship that fires multiple projectiles. Strong vs. warships.<i> Upgrades: armor, speed, cost (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26436":"Build <b>Galley</b> (‹cost›)<br>\\nAll-purpose warship with ranged attack. Weak vs. Fire Galleys.<i> Upgrades: armor, speed, cost, to War Galley 230F, 100G (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26437":"Create <b>Shrivamsha Rider</b> (‹cost›)<br>\\nGurjara unique light cavalry unit which can dodge projectiles. Strong vs. archers. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Elite Shrivamsha Rider 850F, 500G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26438":"Create <b>Elite Shrivamsha Rider</b> (‹cost›)<br>\\nGurjara unique light cavalry unit which can dodge projectiles. Strong vs. archers. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26439":"Build <b>Heavy Scorpion</b> (‹cost›)<br>\\nAnti-unit siege weapon. Fires bolts that pierce multiple units. Strong vs. large groups of units. Weak vs. cavalry and siege weapons.<i> Upgrades: attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26440":"Build <b>Caravanserai</b> (‹cost›)<br>\\nEconomic building. Heals and increases speed of Trade Carts in a 10 tile radius. Unique building of the Hindustanis.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26441":"Create <b>Camel Scout</b> (‹cost›)<br>\\nGurjara unique scout unit. Strong vs. cavalry. Weak vs. Pikemen, Monks, and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26443":"Build <b>Transport Ship</b> (‹cost›)<br>\\nUsed to move units across water. Select the units you want to transport, then right-click on the Transport Ship to board them. Use the Unload button to unload units on the shore.<i> Upgrades: armor, speed, cost, capacity (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26444":"Create <b>Light Cavalry</b> (‹cost›)<br>\\nFast cavalry for scouting and raiding. Resistant to conversion. Strong vs. Monks. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Hussar 500F, 600G or Winged Hussar 600F, 800G (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26445":"Build <b>Siege Tower</b> (‹cost›)<br>\\nQuick land transport used to unload units over enemy walls. Resistant to archer attack. Cannot be used by mounted units.<i> Upgrades: more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26446":"Build <b>Siege Ram</b> (‹cost›)<br>\\nAnti-building siege weapon. Resistant to most ranged attacks. Garrisoned infantry increase speed and attack.<i> Upgrades: attack (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26447":"Create <b>Boyar</b> (‹cost›)<br>\\nSlavic unique cavalry unit. Resistant to melee attack.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Boyar 1000F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ","26448":"Build <b>Onager</b> (‹cost›)<br>\\nRanged siege weapon with area of effect attack, but cannot attack enemies at close range. Strong vs. tight groups of units. Can attack ground and destroy trees.<i> Upgrades: attack, range (University); to Siege Onager 1450F, 1000G (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26449":"Create <b>Elite Boyar</b> (‹cost›)<br>\\nSlavic unique cavalry unit. Resistant to melee attack.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26451":"Create <b>Elite Cataphract</b> (‹cost›)<br>\\nByzantine unique cavalry unit. Strong vs. infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26452":"Create <b>Elite Chu Ko Nu</b> (‹cost›)<br>\\nChinese unique archer with rapid-fire attack. Strong vs. infantry. Weak vs. archers and siege weapons.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26453":"Create <b>Elite Mameluke</b> (‹cost›)<br>\\nSaracen unique camel unit with ranged melee attack. Strong vs. cavalry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26454":"Create <b>Elite Huskarl</b> (‹cost›)<br>\\nGothic unique infantry unit with high pierce armor. Strong vs. archers and buildings. Weak vs. cavalry.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26455":"Create <b>Elite Janissary</b> (‹cost›)<br>\\nTurkish unique hand cannoneer with longer range and no minimum range. Strong vs. infantry. Weak vs. archers.<i> Upgrades: armor (Blacksmith); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26456":"Create <b>Elite Longbowman</b> (‹cost›)<br>\\nBritish unique archer with very long range. Strong vs. infantry. Weak vs. cavalry and Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26457":"Build <b>Elite Longboat</b> (‹cost›)<br>\\nViking unique ship that fires multiple arrows. Strong vs. War Galleys, land units, and buildings.<i> Upgrades: armor, speed, cost (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26458":"Create <b>Elite Mangudai</b> (‹cost›)<br>\\nMongol unique cavalry archer with fast-firing attack. Strong vs. siege weapons and infantry. Weak vs. Skirmishers, Pikemen, and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26459":"Create <b>Elite War Elephant</b> (‹cost›)<br>\\nPersian unique unit. Slow and powerful cavalry. Strong vs. buildings and units at close range. Weak vs. Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26460":"Create <b>Elite Samurai</b> (‹cost›)<br>\\nJapanese unique infantry unit with fast attack. Strong vs. unique units and infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26461":"Create <b>Elite Throwing Axeman</b> (‹cost›)<br>\\nFrankish unique infantry unit with ranged melee attack. Strong vs. infantry. Weak vs. archers and siege weapons.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26462":"Create <b>Elite Teutonic Knight</b> (‹cost›)<br>\\nTeutonic unique infantry unit. Slow and powerful. Strong vs. melee units. Weak vs. archers and Scorpions.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26463":"Create <b>Elite Woad Raider</b> (‹cost›)<br>\\nCeltic unique infantry unit. Fast-moving. Strong vs. infantry and siege weapons. Weak vs. archers and cavalry.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26464":"Build <b>Lumber Camp</b> (‹cost›)<br>\\nUsed to deposit wood and research wood-gathering technologies. Build near forests to gather wood faster. <i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26469":"Create <b>Champion</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26471":"Create <b>Paladin</b> (‹cost›)<br>\\nPowerful all-purpose cavalry. Strong vs. infantry and archers. Weak vs. Halberdiers, Heavy Camel Riders, and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26487":"Build <b>Mining Camp</b> (‹cost›)<br>\\nUsed to deposit stone and gold and research mining technologies. Build near stone or gold mines to gather these resources faster.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26493":"Build <b>Siege Onager</b> (‹cost›)<br>\\nRanged siege weapon with area of effect attack, but cannot attack enemies at close range. Strong vs. tight groups of units. Can attack ground and destroy trees.<i> Upgrades: attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26495":"Build <b>Fish Trap</b> (‹cost›)<br>\\nRenewable food source, similar to a farm but built by Fishing Ships. Provides a limited amount of food before it collapses and must be rebuilt. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26504":"Build <b>Outpost</b> (‹cost›)<br>\\nWatch tower with great line-of-sight to discover nearby enemy activity. Does not attack and cannot garrison units inside.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26534":"Create <b>Coustillier</b> (‹cost›)<br>\\nBurgundian unique cavalry unit which can charge its attack. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Coustillier 1000F, 800G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26536":"Create <b>Elite Coustillier</b> (‹cost›)<br>\\nBurgundian unique cavalry unit which can charge its attack. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26538":"Create <b>Serjeant</b> (‹cost›)<br>\\nSicilian unique infantry unit which can construct Donjons.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Serjeant 800F, 675G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26540":"Create <b>Elite Serjeant</b> (‹cost›)<br>\\nSicilian unique infantry unit which can construct Donjons.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26542":"Create <b>Flemish Militia</b> (‹cost›)<br>\\nBurgundian unique infantry unit. Strong vs. cavalry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26544":"Build <b>Donjon</b> (‹cost›)<br>\\nFortification used to train your unique unit and Spearman-line. Unique building of the Sicilians. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles.<i> Upgrades: hit points, production speed (Castle); line of sight (Town Center); hit points, armor, accuracy (University); attack, range (Blacksmith).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26558":"Create <b>Obuch</b> (‹cost›)<br>\\nPolish unique infantry unit which can damage the armor of units it is fighting. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Obuch 800F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26559":"Create <b>Elite Obuch</b> (‹cost›)<br>\\nPolish unique infantry unit which can damage the armor of units it is fighting. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26561":"Build <b>Hussite Wagon</b> (‹cost›)<br>\\nBohemian unique siege unit. Units behind it receive 50% less damage from incoming projectiles. Strong vs. archers. Weak vs. siege weapons.<i> Upgrades: attack, range (University); creation speed, to Elite Hussite Wagon 800W, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26563":"Build <b>Elite Hussite Wagon</b> (‹cost›)<br>\\nBohemian unique siege unit. Units behind it receive 50% less damage from incoming projectiles. Strong vs. archers. Weak vs. siege weapons.<i> Upgrades: attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26573":"Build <b>Elite Cannon Galleon</b> (‹cost›)<br>\\nAnti-building siege warship with long range, but cannot attack enemies at close range. Strong vs. buildings. Weak vs. other units.<i> Upgrades: armor, speed, cost (Dock); attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26574":"Create <b>Berserk</b> (‹cost›)<br>\\nViking unique infantry unit that slowly heals itself. Strong vs. infantry and siege weapons. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Berserk 1075F, 475G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26576":"Create <b>Elite Berserk</b> (‹cost›) Viking unique infantry unit that slowly heals itself. Strong vs. infantry and siege weapons. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26577":"Create <b>Winged Hussar</b> (‹cost›)<br>\\nUnique to Poles and Lithuanians. Fast cavalry for scouting and raiding. Resistant to conversion. Strong vs. Monks and gunpowder units. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26579":"Build <b>Houfnice</b> (‹cost›)<br>\\nBohemian unique siege unit. Siege weapon with long range. Strong vs. buildings and siege weapons. Weak vs. melee units.<i> Upgrades: attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26581":"Build <b>Folwark</b> (‹cost›)<br>\\nUnique building of the Poles. Used to deposit food and research farming technologies. Immediately collects 8% of food from nearby newly constructed farms. Provides 5 population. Build near forage bushes or other source of food to gather food faster.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26660":"Create <b>Petard</b> (‹cost›)<br>\\nDemolition siege unit armed with explosives. Strong vs. buildings. Weak vs. other units. Self-destructs when used.<i> Upgrades: attack (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26661":"Create <b>Hussar</b> (‹cost›)<br>\\nFast cavalry for scouting and raiding. Resistant to conversion. Strong vs. Monks. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26667":"Create <b>Jaguar Warrior</b> (‹cost›)<br>\\nAztec unique infantry unit. Strong vs. infantry. Weak vs. cavalry and archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Jaguar Warrior 1000F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26669":"Create <b>Elite Jaguar Warrior</b> (‹cost›)<br>\\nAztec unique infantry unit. Strong vs. infantry. Weak vs. cavalry and archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26671":"Create <b>Eagle Warrior</b> (‹cost›)<br>\\nFast infantry for scouting and raiding. Resistant to conversion. Strong vs. Monks and archers. Weak vs. Long Swordsmen and cavalry.<i> Upgrades: attack, armor (Blacksmith); speed, to Elite Eagle Warrior 800F, 500G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26672":"Create <b>Eagle Scout</b> (‹cost›)<br>\\nFast infantry for scouting and raiding. Resistant to conversion. Strong vs. Monks and archers. Weak vs. Men-at-Arms and cavalry.<i> Upgrades: attack, armor (Blacksmith); speed, to Eagle Warrior 200F, 200G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26673":"Create <b>Elite Eagle Warrior</b> (‹cost›)<br>\\nFast infantry for scouting and raiding. Resistant to conversion. Strong vs. Monks and archers. Weak vs. Long Swordsmen and cavalry.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26675":"Create <b>Tarkan</b> (‹cost›)<br>\\nHunnic unique cavalry unit with attack bonus vs. buildings. Strong vs. buildings and archers. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Tarkan 1000F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26677":"Create <b>Elite Tarkan</b> (‹cost›)<br>\\nHunnic unique cavalry unit with attack bonus vs. buildings. Strong vs. buildings and archers. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26682":"Create <b>Elephant Archer</b> (‹cost›)<br>\\nSlow and heavy mounted archer. Strong vs. archers and infantry. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, to Elite Elephant Archer 900F, 500G (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26683":"Create <b>Plumed Archer</b> (‹cost›)<br>\\nMayan unique fast-moving archer. Strong vs. archers and infantry. Weak vs. cavalry.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed, to Elite Plumed Archer 700F, 1000W (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26684":"Create <b>Elite Elephant Archer</b> (‹cost›)<br>\\nSlow and heavy mounted archer. Strong vs. archers and infantry. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26685":"Create <b>Elite Plumed Archer</b> (‹cost›)<br>\\nMayan unique fast-moving archer. Strong vs. archers and infantry. Weak vs. cavalry.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26686":"Create <b>Kamayuk</b> (‹cost›)<br>\\nInca unique spearman with increased attack range. Strong vs. cavalry and infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Kamayuk 900F, 500G  (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26687":"Create <b>Conquistador</b> (‹cost›)<br>\\nSpanish unique mounted hand cannoneer. Strong vs. infantry. Weak vs. Pikemen, Skirmishers, and Monks.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Conquistador 1200F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26688":"Create <b>Elite Kamayuk</b> (‹cost›)<br>\\nInca unique spearman with increased attack range. Strong vs. cavalry and infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26689":"Create <b>Elite Conquistador</b> (‹cost›)<br>\\nSpanish unique mounted hand cannoneer. Strong vs. infantry. Weak vs. Pikemen, Skirmishers, and Monks.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26690":"Create <b>Slinger</b> (‹cost›)<br>\\nInca unique unit. Ranged anti-infantry unit that cannot attack at close range. Strong vs. infantry. Weak vs. archers and cavalry.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26691":"Create <b>Missionary</b> (‹cost›)<br>\\nSpanish unique mounted monk. Converts enemy units and heals friendly units. Faster than Monk but with less sight and range. Strong vs. slow, non-ranged units. Weak vs. Light Cavalry and ranged units. Cannot collect Relics.<i> Upgrades: at Monastery; speed, hit points (Stable).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26723":"Create <b>Genoese Crossbowman</b> (‹cost›)<br>\\nItalian unique archer. Strong vs. cavalry and infantry. Weak vs. archers and siege weapons.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed, to Elite Genoese Crossbowman 900F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26725":"Create <b>Elite Genoese Crossbowman</b> (‹cost›)<br>\\nItalian unique archer. Strong vs. cavalry and infantry. Weak vs. archers and siege weapons.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26727":"Create <b>War Wagon</b> (‹cost›)<br>\\nKorean unique cavalry archer unit. Strong vs. infantry and archers. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed (Stable); accuracy (Archery Range); attack, accuracy (University); creation speed, to Elite War Wagon 1000W, 800G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26728":"Create <b>Magyar Huszar</b> (‹cost›)<br>\\nMagyar unique light cavalry unit. Strong vs. siege weapons. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Magyar Huszar 800F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26729":"Create <b>Elite War Wagon</b> (‹cost›)<br>\\nKorean unique cavalry archer unit. Strong vs. infantry and archers. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed (Stable); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26730":"Create <b>Elite Magyar Huszar</b> (‹cost›)<br>\\nMagyar unique light cavalry unit. Strong vs. siege weapons. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26731":"Build <b>Turtle Ship</b> (‹cost›)<br>\\nKorean unique ship. Slow and ironclad. Strong vs. warships and buildings.<i> Upgrades: armor, speed, cost, to Elite Turtle Ship 1000F, 800G (Dock); range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26732":"Build <b>Elite Turtle Ship</b> (‹cost›)<br>\\nKorean unique ship. Slow and ironclad. Strong vs. warships and buildings.<i> Upgrades: armor, speed, cost (Dock); range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","28008":"Research <b>Town Watch</b> (‹cost›)<br>\\nIncreases the line of sight of all buildings by +4 so they see enemies from a longer distance.","28012":"Research <b>Crop Rotation</b> (‹cost›)<br>\\nFarms produce +175 food so they last longer before you must rebuild them.","28013":"Research <b>Heavy Plow</b> (‹cost›)<br>\\nFarms produce +125 food so they last longer before you must rebuild them. Farmers carry +1 food each trip.","28014":"Research <b>Horse Collar</b> (‹cost›)<br>\\nFarms produce +75 food so they last longer before you must rebuild them.","28015":"Research <b>Guilds</b> (‹cost›)<br>\\nReduces the commodity trading fee to 15%.","28017":"Research <b>Banking</b> (‹cost›)<br>\\nTributes are free.","28019":"Research <b>Cartography</b> (‹cost›)<br>\\nYou and your allies share the same line of sight (you see what they see).","28022":"Research <b>Loom</b> (‹cost›)<br>\\nMakes your villagers harder to kill by providing +15 hit points and +1 normal/+2 pierce armor.","28023":"Research <b>Coinage</b> (‹cost›)<br>\\nReduces fee for tributes to 20%.","28039":"Research <b>Husbandry</b> (‹cost›)<br>\\nCavalry move 10% faster.","28045":"Research <b>Faith</b> (‹cost›)<br>\\nUnits are 50% harder for enemy Monks to convert.","28047":"Research <b>Chemistry</b> (‹cost›)<br>\\nMissile units (except gunpowder units) have +1 attack strength.<b><i> Required for<br>\\ngunpowder units (Hand Cannoneer, Cannon Galleon, Bombard Cannon,<br>\\nBombard Tower).</b></i>","28050":"Research <b>Masonry</b> (‹cost›)<br>\\nStrengthens all buildings by providing 10% more hit points, +1 normal/+1 pierce armor, and +3 building armor.","28051":"Research <b>Architecture</b> (‹cost›)<br>\\nStrengthens all buildings by providing 10% more hit points, +1 normal/+1 pierce armor, and +3 building armor.","28054":"Research <b>Treadmill Crane</b> (‹cost›)<br>\\nVillagers construct buildings 20% faster.","28055":"Research <b>Gold Mining</b> (‹cost›)<br>\\nVillagers mine gold 15% faster.","28059":"Research <b>Kataparuto</b> (‹cost›)<br>\\nTrebuchets fire 33% faster and pack/unpack 4X faster.","28063":"Upgrade to <b>Keep</b> (‹cost›)<br>\\nUpgrades Guard Towers and lets you build Keeps, which are stronger and have more attack strength.","28067":"Research <b>Forging</b> (‹cost›)<br>\\nInfantry and cavalry have +1 attack.","28068":"Research <b>Iron Casting</b> (‹cost›)<br>\\nInfantry and cavalry have +1 attack.","28074":"Research <b>Scale Mail Armor</b> (‹cost›)<br>\\nInfantry have +1 normal/+1 pierce armor.","28075":"Research <b>Blast Furnace</b> (‹cost›)<br>\\nInfantry and cavalry have +2 attack.","28076":"Research <b>Chain Mail Armor</b> (‹cost›)<br>\\nInfantry have +1 normal/+1 pierce armor.","28077":"Research <b>Plate Mail Armor</b> (‹cost›)<br>\\nInfantry have +1 normal/+2 pierce armor.","28080":"Research <b>Plate Barding Armor</b> (‹cost›)<br>\\nCavalry have +1 normal/+2 pierce armor.","28081":"Research <b>Scale Barding Armor</b> (‹cost›)<br>\\nCavalry have +1 normal/+1 pierce armor.","28082":"Research <b>Chain Barding Armor</b> (‹cost›)<br>\\nCavalry have +1 normal/+1 pierce armor.","28090":"Research <b>Tracking</b> (‹cost›)<br>\\nInfantry have +2 line of sight so they see enemy units from a longer distance.","28093":"Research <b>Ballistics</b> (‹cost›)<br>\\nArchers, Town Centers, Castles, Galleys, Unique Naval Units, and Mounted Archers fire more accurately at moving targets.","28101":"Advance to <b>Feudal Age</b> (‹cost›; two Dark Age buildings)<br>\\nImproves your civilization. Gives you access to different buildings, more powerful military units, and stronger technologies. Before you can advance, you must have any two Dark Age buildings: Lumber Camp, Mining Camp, Mill, Dock, or Barracks.","28102":"Advance to <b>Castle Age</b> (‹cost›; two Feudal Age buildings)<br>\\nImproves your civilization. Gives you access to different buildings, more powerful military units, and stronger technologies. Before you can advance, you must have any two Feudal Age buildings: Archery Range, Stable, Blacksmith, or Market.","28103":"Advance to <b>Imperial Age</b> (‹cost›; two Castle Age buildings or a Castle/Krepost)<br>\\nImproves your civilization. Gives you access to different buildings, more powerful military units, and stronger technologies. Before you can advance, you must have a Castle/Krepost or any two Castle Age buildings: University, Siege Workshop, or Monastery.","28150":"Research <b>Bodkin Arrow</b> (‹cost›)<br>\\nArchers, cavalry archers, galleys, Castles, and towers have +1 attack and +1 range. Town Centers have +1 attack.","28151":"Research <b>Bracer</b> (‹cost›)<br>\\nArchers, cavalry archers, galleys, Castles, and towers have +1 attack and +1 range. Town Centers have +1 attack.","28163":"Upgrade to <b>Fortified Wall</b> (‹cost›)<br>\\nUpgrades your Stone Walls and lets you build Fortified Walls, which are stronger and harder to breach. Also increases the hit points of your Gates, which makes them harder to destroy.","28172":"Research <b>Fletching</b> (‹cost›)<br>\\nArchers, cavalry archers, galleys, Castles, and towers have +1 attack and +1 range. Town Centers have +1 attack.","28180":"Research <b>Gold Shaft Mining</b> (‹cost›)<br>\\nVillagers mine gold 15% faster.","28186":"Upgrade to <b>Guard Tower</b> (‹cost›)<br>\\nUpgrades your Watch Towers and lets you build Guard Towers, which are stronger and have more attack strength.","28189":"Research <b>Double-Bit Axe</b> (‹cost›)<br>\\nVillagers chop wood 20% faster.","28190":"Research <b>Bow Saw</b> (‹cost›)<br>\\nVillagers chop wood 20% faster.","28208":"Research <b>Padded Archer Armor</b> (‹cost›)<br>\\nArchers and cavalry archers have +1 normal/+1 pierce armor.","28209":"Research <b>Leather Archer Armor</b> (‹cost›)<br>\\nArchers and cavalry archers have +1 normal/+1 pierce armor.","28210":"Research <b>Squires</b> (‹cost›)<br>\\nInfantry move 10% faster.","28211":"Research <b>Wheelbarrow</b> (‹cost›)<br>\\nVillagers work more efficiently by moving 10% faster and carrying 25% more resources.","28216":"Research <b>Ring Archer Armor</b> (‹cost›)<br>\\nArchers and cavalry archers have +1 normal/+2 pierce armor.","28220":"Research <b>Illumination</b> (‹cost›)<br>\\nMonks regain their faith 50% faster after a successful conversion.","28221":"Research <b>Sanctity</b> (‹cost›)<br>\\nMonks have +15 hit points so they are harder to kill.","28222":"Research <b>Block Printing</b> (‹cost›)<br>\\nMonks have +3 conversion range.","28231":"Research <b>Two-Man Saw</b> (‹cost›)<br>\\nVillagers chop wood 10% faster.","28246":"Research <b>Hand Cart</b> (‹cost›)<br>\\nVillagers work more efficiently by moving 10% faster and carrying 50% more resources.","28249":"Research <b>Fervor</b> (‹cost›)<br>\\nMonks move 15% faster.","28250":"Research <b>Carrack</b> (‹cost›)<br>\\nShips receive +1 normal/+1 pierce armor.","28251":"Research <b>Arquebus</b> (‹cost›)<br>\\nBallistics for gunpowder units.","28252":"Research <b>Royal Heirs</b> (‹cost›)<br>\\nShotel Warriors and Camel units receive -3 damage from mounted units.","28253":"Research <b>Torsion Engines</b> (‹cost›)<br>\\nSiege workshop units blast radius increased.","28254":"Research <b>Tigui</b> (‹cost›)<br>\\nTown Centers fire arrows.","28255":"Research <b>Farimba</b> (‹cost›)<br>\\nCavalry +5 attack.","28256":"Research <b>Kasbah</b> (‹cost›)<br>\\nTeam castles work 25% faster.","28257":"Research <b>Maghrebi Camels</b> (‹cost›)<br>\\nCamel units regenerate.","28258":"Research <b>Arson</b> (‹cost›)<br>\\nInfantry do more damage vs. buildings.","28266":"Research <b>Andean Sling</b> (‹cost›)<br>\\nUpgrades your skirmishers and slingers by removing their minimum range; Slingers receive +1 attack.","28267":"Research <b>Fabric Shields</b> (‹cost›)<br>\\nKamayuks, Slingers, Eagles have +1 armor/+2 pierce armor.","28269":"Research <b>Druzhina</b> (‹cost›)<br>\\nInfantry damage adjacent units.","28270":"Research <b>Grand Trunk Road</b> (‹cost›)<br>\\nAll gold income 10% faster (Trade, mines, relics); reduces the commodity trading fee to 10%.","28271":"Research <b>Shatagni</b> (‹cost›)<br>\\nHand cannoneers have +2 range.","28272":"Research <b>Pavise</b> (‹cost›)<br>\\nFoot Archers and Condottieri have +1 armor/+1 pierce armor.","28273":"Research <b>Silk Road</b> (‹cost›)<br>\\nTrade units cost -50%.","28274":"Research <b>Recurve Bow</b> (‹cost›)<br>\\nCavalry archers have +1 range, +1 attack.","28275":"Research <b>Corvinian Army</b> (‹cost›)<br>\\nMagyar Huszars cost no gold.","28276":"Research <b>Stone Mining</b> (‹cost›)<br>\\nVillagers mine stone 15% faster.","28277":"Research <b>Stone Shaft Mining</b> (‹cost›)<br>\\nVillagers mine stone 15% faster.","28278":"Research <b>Arrowslits</b> (‹cost›)<br>\\nIncreases the attack of towers and Donjons.","28280":"Research <b>Nomads</b> (‹cost›)<br>\\nHouses don\'t lose their population room when they are destroyed.","28281":"Research <b>Kamandaran</b> (‹cost›)<br>\\nArcher-line gold cost is replaced by additional wood cost.","28282":"Research <b>Town Patrol</b> (‹cost›)<br>\\nIncreases the line of sight of all buildings by +4 so they see enemies from a longer distance.","28283":"Research <b>Ironclad</b> (‹cost›)<br>\\nIncreases the armor of all siege weapons so they\'re more resistant to melee attack.","28285":"Research <b>Sipahi</b> (‹cost›)<br>\\nCavalry archers have +20 hit points.","28286":"Research <b>Inquisition</b> (‹cost›)<br>\\nIncreases monk conversion rate; Missionaries receive +1 range.","28287":"Research <b>Chivalry</b> (‹cost›)<br>\\nIncreases the production speed of stables by +40%.","28291":"Research <b>Tusk Swords</b> (‹cost›)<br>\\nBattle Elephants receive +3 attack","28292":"Research <b>Double Crossbows</b> (‹cost›)<br>\\nBallista Elephants and Scorpions fire two projectiles.","28293":"Research <b>Thalassocracy</b> (‹cost›)<br>\\nUpgrades your Docks to Harbors, which fire arrows.","28294":"Research <b>Forced Levy</b> (‹cost›)<br>\\nMilitia-line gold cost is replaced by additional food cost.","28295":"Research <b>Howdah</b> (‹cost›)<br>\\nBattle Elephants receive +1 normal/+1 pierce armor.","28296":"Research <b>Manipur Cavalry</b> (‹cost›)<br>\\nCavalry deals +4 bonus attack vs. archers.","28297":"Research <b>Chatras</b> (‹cost›)<br>\\nBattle Elephants receive +100 HP.","28298":"Research <b>Paper Money</b> (‹cost›)<br>\\nLumberjacks slowly generate gold in addition to wood.","28307":"Research <b>Stirrups</b> (‹cost›)<br>\\nCavalry attack 33% faster.","28308":"Research <b>Bagains</b> (‹cost›)<br>\\nMilitia-line receives +5 melee armor.","28309":"Research <b>Silk Armor</b> (‹cost›)<br>\\nLight Cavalry, Steppe Lancers and Cavalry Archers receive +1 normal/+1 pierce armor.","28310":"Research <b>Timurid Siegecraft</b> (‹cost›)<br>\\nTrebuchets receive +2 range. Enables Flaming Camels.","28311":"Research <b>Steppe Husbandry</b> (‹cost›)<br>\\nLight Cavalry, Steppe Lancers and Cavalry Archers trained 100% faster.","28312":"Research <b>Chieftains</b> (‹cost›)<br>\\nInfantry get attack bonus vs. cavalry and generate gold when killing villagers (5 gold), trade units (20 gold), and monks (20 gold).","28313":"Research <b>Greek Fire</b> (‹cost›)<br>\\nFire Ships have +1 range; Dromons and Bombard Towers receive extra blast radius.","28314":"Research <b>Gillnets</b> (‹cost›)<br>\\nFishing Ships gather 20% faster.","28315":"Research <b>Redemption</b> (‹cost›)<br>\\nMonks can convert enemy buildings (except Town Centers, Castles, Monasteries, Farms, Fish Traps, walls, Gates, and Wonders) and siege weapons. Monks can convert most enemy units from a distance, but they must stand adjacent to buildings, rams, and Trebuchets to convert them.","28316":"Research <b>Atonement</b> (‹cost›)<br>\\nMonks can convert enemy Monks.","28318":"Research <b>Logistica</b> (‹cost›)<br>\\nCataphracts cause trample damage.","28319":"Research <b>Conscription</b> (‹cost›)<br>\\nMilitary buildings (except Siege Workshops) work 33% faster.","28320":"Research <b>Bombard Tower</b> (‹cost›)<br>\\nLets you build Bombard Towers, which are powerful and have extensive line of sight.","28321":"Research <b>Murder Holes</b> (‹cost›)<br>\\nEliminates the minimum range of all towers, Castles and Harbors so they can fire at enemies attacking their base.","28322":"Research <b>Sappers</b> (‹cost›)<br>\\nVillagers cause +15 damage when attacking buildings and +3 damage when attacking rams.","28324":"Research <b>Bearded Axe</b> (‹cost›)<br>\\nThrowing Axemen have +1 range.","28325":"Research <b>Supremacy</b> (‹cost›)<br>\\nVillagers have exceptional combat abilities.","28326":"Research <b>Atlatl</b> (‹cost›)<br>\\nSkirmishers have +1 attack, +1 range.","28327":"Research <b>Warwolf</b> (‹cost›)<br>\\nImproves your Trebuchets by giving them blast damage.","28342":"Research <b>Burgundian Vineyards</b> (‹cost›)<br>\\nFarmers slowly generate gold in addition to food.","28343":"Research <b>Flemish Revolution</b> (‹cost›)<br>\\nUpgrades all existing Villagers to Flemish Militia and allows Flemish Militia to be created at the Barracks. The total cost is 200F, 150G and +10F, +5G per each villager.","28344":"Research <b>First Crusade</b> (‹cost›)<br>\\nEach Town Center (maximum 5) spawns a one-time batch of 5 Serjeants. Units more resistant to conversion.","28345":"Research <b>Hauberk</b> (‹cost›)<br>\\nKnights receive +1 normal/+2 pierce armor.","28348":"Research <b>Szlachta Privileges</b> (‹cost›)<br>\\nKnights cost -60% gold.","28349":"Research <b>Lechitic Legacy</b> (‹cost›)<br>\\nLight Cavalry deals trample damage.","28350":"Research <b>Wagenburg Tactics</b> (‹cost›)<br>\\nGunpowder units move 15% faster.","28351":"Research <b>Hussite Reforms</b> (‹cost›)<br>\\nMonks and Monastery technologies have their gold cost replaced by food.","28357":"Research <b>Medical Corps</b> (‹cost›)<br>\\nElephant units regenerate 30 HP per minute.","28358":"Research <b>Wootz Steel</b> (‹cost›)<br>\\nInfantry and cavalry attacks ignore armor.","28359":"Research <b>Paiks</b> (‹cost›)<br>\\nRathas and elephant units attack 20% faster.","28360":"Research <b>Mahayana</b> (‹cost›)<br>\\nVillagers and Monks take 10% less population space.","28361":"Research <b>Kshatriyas</b> (‹cost›)<br>\\nMilitary units cost -25% food.","28362":"Research <b>Frontier Guards</b> (‹cost›)<br>\\nCamel Riders and Elephant Archers receive +4 melee armor.","28368":"Research <b>Great Wall</b> (‹cost›)<br>\\nMakes your walls and towers stronger by giving them +30% hit points.","28369":"Research <b>Stronghold</b> (‹cost›)<br>\\nMakes your castles and towers stronger by making them fire 33% faster; Castles heal allied infantry in a 7 tile radius.","28370":"Research <b>Marauders</b> (‹cost›)<br>\\nEnables you to create Tarkans at Stables.","28371":"Research <b>Yasama</b> (‹cost›)<br>\\nMakes your towers stronger by making them shoot extra arrows.","28372":"Research <b>Careening</b> (‹cost›)<br>\\nMakes ships less vulnerable to missile attack with +1 pierce armor. Transport Ships carry +5 units.","28373":"Research <b>Dry Dock</b> (‹cost›)<br>\\nShips move 15% faster. Transport Ships carry +10 units.","28374":"Research <b>Heated Shot</b> (‹cost›)<br>\\nTowers cause 125% more damage to ships; Castles cause 25% more damage to ships.","28376":"Research <b>Hoardings</b> (‹cost›)<br>\\nStrengthens Castles and Donjons by providing +20% hit points.","28377":"Research <b>Shipwright</b> (‹cost›)<br>\\nShips cost 20% less wood; build 35% faster.","28378":"Research <b>Siege Engineers</b> (‹cost›)<br>\\nRanged siege weapons and siege warships have +1 range and cause 20% more damage to buildings (40% more for Petards and Flaming Camels).","28379":"Research <b>Hul\'che Javelineers</b> (‹cost›)<br>\\nImproves your Skirmishers by making them throw a second projectile.","28380":"Research <b>Eupseong</b> (‹cost›)<br>\\nWatch Towers, Guard Towers and Keeps have +2 range.","28398":"Research <b>Cuman Mercenaries</b> (‹cost›)<br>\\nTeam members can create 5 free Elite Kipchaks per Castle.","28399":"Research <b>Hill Forts</b> (‹cost›)<br>\\nTown Centers receive +3 range.","28400":"Research <b>Tower Shields</b> (‹cost›)<br>\\nPikemen and Skirmishers receive +2 pierce armor.","28403":"Research <b>Supplies</b> (‹cost›)<br>\\nMilitia-line costs -15 food.","28408":"Research <b>Spies/Treason</b> (Cost: ‹static_cost=Gold,200› per enemy villager for Spies/‹static_cost=Gold,400› per use for Treason)<br>\\nSpies (Random Map games) reveals all enemy units and buildings by showing you their line of sight. The total cost is 200 gold per each villager from other players; allied villagers are excluded when teams are locked.<br>\\n<br>\\nTreason (Regicide games) reveals the position of all enemy Kings to your team for a few seconds. The Kings appear on the mini-map as a flashing X. Each time you choose Treason, 400 gold is immediately deducted from your stockpile.","28409":"Research <b>Bloodlines</b> (‹cost›)<br>\\nMounted units have +20 hit points.","28410":"Research <b>Caravan</b> (‹cost›)<br>\\nTrade Carts and Trade Cogs move 50% faster (so gold accumulates faster).","28411":"Research <b>Thumb Ring</b> (‹cost›)<br>\\nArchers fire faster and with 100% accuracy.","28412":"Research <b>Heresy</b> (‹cost›)<br>\\nUnits converted by an enemy Monk (or Missionary) die instead of changing to the enemy\'s color.","28415":"Research <b>Parthian Tactics</b> (‹cost›)<br>\\nMounted Archers have +1 normal/+2 pierce armor and +2 attack vs. pikemen.","28416":"Research <b>Theocracy</b> (‹cost›)<br>\\nIf a group of Monks converts an enemy unit, only one of the Monks must rest afterward.","28419":"Research <b>Yeomen</b> (‹cost›)<br>\\nFoot archers have +1 range; towers have +2 attack.","28420":"Research <b>El Dorado</b> (‹cost›)<br>\\nEagle Warriors have +40 hit points.","28421":"Research <b>Furor Celtica</b> (‹cost›)<br>\\nSiege Workshop units have +40% hit points.","28422":"Research <b>Drill</b> (‹cost›)<br>\\nSiege Workshop units move 50% faster.","28423":"Research <b>Mahouts</b> (‹cost›)<br>\\nWar Elephants move 30% faster.","28424":"Research <b>Zealotry</b> (‹cost›)<br>\\nCamel units have +20 hit points.","28425":"Research <b>Artillery</b> (‹cost›)<br>\\nBombard Towers, Bombard Cannons, and Cannon Galleons have +2 range.","28426":"Research <b>Crenellations</b> (‹cost›)<br>\\nCastles have +3 range; garrisoned infantry fire arrows.","28427":"Research <b>Anarchy</b> (‹cost›)<br>\\nAllows Huskarls to be created at the Barracks.","28428":"Research <b>Atheism</b> (‹cost›)<br>\\nRelic and Wonder victories take +100 years to complete; enemy relics generate -50% resources.","28429":"Research <b>Garland Wars</b> (‹cost›)<br>\\nInfantry have +4 attack.","28431":"Research <b>Bogsveigar</b> (‹cost›)<br>\\nArcher-line and Longboats receive +1 attack.","28432":"Research <b>Rocketry</b> (‹cost›)<br>\\nChu Ko Nu have +2 piercing attack; scorpions have +4 piercing attack.","28435":"Research <b>Herbal Medicine</b> (‹cost›)<br>\\nUnits garrisoned in buildings heal 6X faster.","28438":"Research <b>Shinkichon</b> (‹cost›)<br>\\nMangonels, Onagers, and Siege Onagers have +1 range.","28439":"Research <b>Perfusion</b> (‹cost›)<br>\\nBarracks units are created 100% faster.","28444":"Research <b>Ballistas</b> (‹cost›)<br>\\nScorpions fire 33% faster; Galley-line +2 attack.","28445":"Research <b>Comitatenses</b> (‹cost›)<br>\\nMilitia-line, Knight-line, and Centurions train 50% faster and receive a charge attack.","28447":"Research <b>Counterweights</b> (‹cost›)<br>\\nTrebuchets and Mangonel-line +15% attack.","28448":"Research <b>Detinets</b> (‹cost›)<br>\\nReplaces 40% of Castles\' and Towers\' stone cost with wood.","28450":"Research <b>Gambesons</b> (‹cost›)<br>\\nMilitia-line receive +1 pierce armor.","42057":"Create <b>Konnik</b> (‹cost›)<br>\\nBulgarian unique cavalry unit that fights on as infantry when felled. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Konnik 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42058":"Create <b>Elite Konnik</b> (‹cost›)<br>\\nBulgarian unique cavalry unit that fights on as infantry when felled. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42096":"Create <b>Ratha</b> (‹cost›)<br>\\nBengali unique chariot that can switch between melee and ranged attacks. Strong vs. infantry. Weak vs. Skirmishers and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Ratha 800F, 800W (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42097":"Create <b>Elite Ratha</b> (‹cost›)<br>\\nBengali unique chariot that can switch between melee and ranged attacks. Strong vs. infantry. Weak vs. Skirmishers and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42104":"Create <b>Ratha</b> (‹cost›)<br>\\nBengali unique chariot that can switch between melee and ranged attacks. Strong vs. infantry. Weak vs. Skirmishers and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Ratha 800F, 800W (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42105":"Create <b>Elite Ratha</b> (‹cost›)<br>\\nBengali unique chariot that can switch between melee and ranged attacks. Strong vs. infantry. Weak vs. Skirmishers and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","120150":"Foot Archer civilization<br>\\n<br>\\n• Town Centers cost -50% wood starting in the Castle Age<br>\\n• Foot archers (except skirmishers) +1 range in Castle and Imperial Age (+2 total)<br>\\n• Shepherds work 25% faster<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nLongbowman (archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Yeomen (+1 foot archer range<br>\\n+2 tower attack)<br>\\n• Warwolf (Trebuchets do blast damage)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nArchery Ranges work 10% faster","120151":"Cavalry civilization<br>\\n<br>\\n• Castles cost -15% in Castle, -25% in Imperial Age<br>\\n• Cavalry +20% hit points starting in Feudal Age<br>\\n• Mill technologies free<br>\\n• Foragers work 15% faster<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nThrowing Axeman (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Bearded Axe (+1 Throwing Axemen range)<br>\\n• Chivalry (Stables work 40% faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nKnights +2 line of sight","120152":"Infantry civilization<br>\\n<br>\\n• Infantry cost -20% in Dark, -25% in Feudal, -30% in Castle, -35% in Imperial Age<br>\\n• Infantry +1 attack vs. buildings per age (starting from Feudal Age)<br>\\n• Villagers +5 attack vs. wild boar; hunters carry +15 meat; hunt lasts 20% longer<br>\\n• Loom can be researched instantly<br>\\n• +10 population in Imperial Age<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nHuskarl (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Anarchy (create Huskarls at Barracks)<br>\\n• Perfusion (Barracks work 100% faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nBarracks work 20% faster","120153":"Infantry civilization<br>\\n<br>\\n• Monks healing range 2x<br>\\n• Towers garrison 2x units<br>\\n• Murder Holes, Herbal Medicine free<br>\\n• Farms cost -40%<br>\\n• Town Center garrison +10<br>\\n• Barracks and Stable units +1 armor in Castle and Imperial Age (+2 total)<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nTeutonic Knight (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Ironclad (siege weapons extra melee armor)<br>\\n• Crenellations (+3 range Castles<br>\\ngarrisoned infantry fire arrows)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nUnits resist conversion","120154":"Infantry civilization<br>\\n<br>\\n• Fishing Ships 2x hit points; +2P armor; work rate +5% Dark, +10% Feudal, +15% Castle, +20% Imperial Age<br>\\n• Mill, Lumber/Mining Camps cost -50%<br>\\n• Infantry attack 33% faster starting in Feudal Age<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nSamurai (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Yasama (Towers shoot extra arrows)<br>\\n• Kataparuto (Trebuchets fire, pack faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nGalleys +50% line of sight","120155":"Archer civilization<br>\\n<br>\\n• Start with +3 villagers, -50 wood, -200 food<br>\\n• Technologies cost -5% Feudal, <br>\\n-10% Castle, -15% Imperial Age<br>\\n• Town Centers support 10 population and +5 LOS<br>\\n• Demolition ships +50% hit points<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nChu Ko Nu (archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Great Wall (Walls and towers +30% HP)<br>\\n• Rocketry (Chu Ko Nu +2, scorpions +4 attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nFarms +10% food","120156":"Defensive civilization<br>\\n<br>\\n• Buildings +10% HP Dark, +20% Feudal, +30% Castle, +40% Imperial Age<br>\\n• Camel Riders, Skirmishers, Pikemen, Halberdiers cost -25%<br>\\n• Fire Ships and Dromons attack 25% faster<br>\\n• Advance to Imperial Age costs -33%<br>\\n• Town Watch, Town Patrol free<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nCataphract (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Greek Fire (Fire Ships +1 range; Dromon and Bombard Tower blast radius increased)<br>\\n• Logistica (Cataphracts cause trample damage)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nMonks +100% heal speed","120157":"Cavalry civilization<br>\\n<br>\\n• Start with +50 wood, food<br>\\n• Town Center, Dock 2x hit points; work rate +10% Feudal, +15% Castle, +20% Imperial Age<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nWar Elephant (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Kamandaran (Archer-line gold cost is replaced by additional wood cost)<br>\\n• Mahouts (War Elephants 30% faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nKnights +2 attack vs. Archers","120158":"Camel and Naval civilization<br>\\n<br>\\n• Market trade cost only 5%<br>\\n• Markets cost -100 wood<br>\\n• Transport Ships 2x hit points, <br>\\n2x carry capacity<br>\\n• Galleys attack 25% faster<br>\\n• Camel units +10 hit points<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nMameluke (camel rider)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Zealotry (Camel units +20 hit points)<br>\\n• Counterweights (Trebuchets and Mangonel-line +15% attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nFoot archers +2 attack vs. buildings","120159":"Gunpowder civilization<br>\\n<br>\\n• Gunpowder units +25% hit points; researching gunpowder technologies costs -50%; Chemistry free<br>\\n• Gold miners work 20% faster<br>\\n• Scout Cavalry, Light Cavalry, Hussar +1P armor<br>\\n• Light Cavalry and Hussar upgrades free<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nJanissary (hand cannoneer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Sipahi (Cavalry Archers +20 HP)<br>\\n• Artillery (+2 range Bombard Towers, Bombard Cannons, Cannon Galleons)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nGunpowder units created 25% faster","120160":"Infantry and Naval civilization<br>\\n<br>\\n• Warships cost -15% Feudal Age, -15% Castle Age, -20% Imperial Age<br>\\n• Infantry +20% hit points starting in Feudal Age<br>\\n• Wheelbarrow, Hand Cart free<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nBerserk (infantry), Longboat (warship)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Chieftains (infantry deal bonus damage to cavalry, generate gold when killing villagers, trade units, and monks)<br>\\n• Bogsveigar (Archer-line and Longboats +1 attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nDocks cost -15%","120161":"Cavalry Archer civilization<br>\\n<br>\\n• Cavalry archers fire 25% faster<br>\\n• Light Cavalry, Hussars, Steppe Lancers +30% hit points<br>\\n• Hunters work 40% faster<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nMangudai (cavalry archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Nomads (lost houses do not decrease population headroom)<br>\\n• Drill (Siege Workshop units move 50% faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nScout Cavalry, Light Cavalry, Hussar +2 line of sight","120162":"Infantry and Siege civilization<br>\\n<br>\\n• Infantry move 15% faster (starting in the Feudal Age)<br>\\n• Lumberjacks work 15% faster<br>\\n• Siege weapons fire 25% faster<br>\\n• Can steal sheep, and sheep within one Celt unit\'s LoS cannot be stolen<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nWoad Raider (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Stronghold (Castles and towers fire 33% faster; Castles heal allied infantry in a 7 tile radius)<br>\\n• Furor Celtica (Siege Workshop units +40% HP)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nSiege Workshops work 20% faster","120163":"Gunpowder and Monk civilization<br>\\n<br>\\n• Builders work 30% faster<br>\\n• Blacksmith upgrades don\'t cost gold<br>\\n• Cannon Galleons benefit from Ballistics (fire faster, more accurately)<br>\\n• Gunpowder units fire 18% faster<br>\\n• Receive +20 gold for each technology researched<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nConquistador (mounted hand cannoneer), Missionary (mounted Monk)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Inquisition (Monks convert faster; Missionaries +1 range)<br>\\n• Supremacy (Villagers stronger in combat)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nTrade units generate +25% gold","120164":"Infantry and Monk civilization<br>\\n<br>\\n• Villagers carry +3<br>\\n• Military units created 11% faster<br>\\n• +5 Monk hit points for each Monastery technology<br>\\n• Start with +50 gold<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nJaguar Warrior (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Atlatl (Skirmishers +1 attack, +1 range)<br>\\n• Garland Wars (+4 infantry attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nRelics generate +33% gold","120165":"Archer civilization<br>\\n<br>\\n• Start with +1 villager, but -50 food<br>\\n• Resources last 15% longer<br>\\n• Archers cost -10% Feudal, -20% Castle, -30% Imperial Age<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nPlumed Archer (archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Hul\'che Javelineers (Skirmishers throw a second projectile)<br>\\n• El Dorado (Eagle Warriors have +40 hit points)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nWalls cost -50%","120166":"Cavalry civilization<br>\\n<br>\\n• Do not need houses, but start with -100 wood<br>\\n• Cavalry Archers cost -10% Castle, -20% Imperial Age<br>\\n• Trebuchets +30% accuracy<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nTarkan (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Marauders (Create Tarkans at stables)<br>\\n• Atheism (+100 years Relic, Wonder victories; enemy relics generate -50% resources)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nStables work 20% faster","120167":"Defensive and Naval civilization<br>\\n<br>\\n• Villagers +3 line of sight<br>\\n• Stone miners work 20% faster<br>\\n• Archer Armor and Tower upgrades free (Bombard Tower requires Chemistry)<br>\\n• Archers and Infantry cost -50% wood<br>\\n• Warships cost -20% wood<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nWar Wagon (cavalry archer), Turtle Ship (war ship)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Eupseong (Watch Towers, Guard Towers and Keeps +2 range)<br>\\n• Shinkichon (Mangonel-line +1 range)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nMangonel-line minimum range reduced","120168":"Archer and Naval civilization<br>\\n<br>\\n• Advancing to the next age costs -15%<br>\\n• Dock and University technologies cost -33%<br>\\n• Fishing Ships cost -15%<br>\\n• Gunpowder units cost -20%<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nGenoese Crossbowman (archer), Condottiero (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Pavise (foot archers and Condottieri +1 armor/+1 pierce armor)<br>\\n• Silk Road (trade units cost -50%)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nCondottiero available in the Barracks in Imperial Age","120169":"Camel and Gunpowder civilization<br>\\n<br>\\n• Villagers cost -5% Dark, -10% Feudal, -15% Castle, -20% Imperial Age<br>\\n• Camel Riders attack 20% faster<br>\\n• Gunpowder units +1/+1P armor<br>\\n• Can build Caravanserai in Imperial Age<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nGhulam (infantry), Imperial Camel Rider (camel rider)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Grand Trunk Road (All gold income 10% faster; trading fee reduced to 10%)<br>\\n• Shatagni (Hand Cannoneers +2 range)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nCamel and light cavalry units +2 attack vs. buildings","120170":"Infantry civilization<br>\\n<br>\\n• Military units food cost -15% Dark, -20% Feudal, -25% Castle, -30% Imperial Age<br>\\n• Villagers affected by Blacksmith upgrades starting in the Castle Age<br>\\n• Houses support 10 population<br>\\n• Buildings cost -15% stone<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nKamayuk (infantry), Slinger (archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Andean Sling (Skirmishers and Slingers no minimum range; Slingers +1 attack)<br>\\n• Fabric Shields (Kamayuks, Slingers, Eagles +1/+2P armor)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nStart with a free Llama","120171":"Cavalry civilization<br>\\n<br>\\n• Villagers kill wolves with 1 strike<br>\\n• Forging, Iron Casting, Blast Furnace free<br>\\n• Scout Cavalry, Light Cavalry, Hussar cost -15%<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nMagyar Huszar (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Corvinian Army (Magyar Huszars cost no gold)<br>\\n• Recurve Bow (Cavalry archers +1 range, +1 attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nCavalry Archers created 25% faster","120172":"Infantry and Siege civilization<br>\\n<br>\\n• Farmers work 10% faster<br>\\n• Supplies, Gambesons free<br>\\n• Siege Workshop units 15% cheaper<br>\\n• Monks move 20% faster<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nBoyar (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Detinets (Replaces 40% of Castles\' and Towers\' stone cost with wood)<br>\\n• Druzhina (Infantry damage adjacent units)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nMilitary buildings provide +5 population room","120173":"Naval and Gunpowder civilization<br>\\n<br>\\n• All units cost -20% gold<br>\\n• Foragers generate wood in addition to food<br>\\n• Ships +10% HP<br>\\n• Can build Feitoria in Imperial Age<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nOrgan Gun (siege), Caravel (war ship)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Carrack (Ships +1/+1 armor)<br>\\n• Arquebus (gunpowder units more accurate)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nTechnologies researched 25% faster","120174":"Archer civilization<br>\\n<br>\\n• Archers fire 18% faster<br>\\n• Receive +100 gold, +100 food when advancing to the next age<br>\\n• Pikeman upgrade free<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nShotel Warrior (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Royal Heirs (Shotel Warriors and Camel units receive -3 damage from mounted units)<br>\\n• Torsion Engines (increases blast radius of Siege Workshop units)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nOutposts +3 line of sight and cost no stone","120175":"Infantry civilization<br>\\n<br>\\n• Buildings cost -15% wood<br>\\n• Barracks units +1P armor per age (starting from Feudal Age)<br>\\n• Villagers drop off 10% more gold<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nGbeto (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Tigui (Town Centers fire arrows when ungarrisoned)<br>\\n• Farimba (Cavalry +5 attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nUniversities work 80% faster","120176":"Cavalry and Naval civilization<br>\\n<br>\\n• Villagers move 5% faster in Dark Age, 10% starting in Feudal Age<br>\\n• Stable units cost -15% in Castle, -20% in Imperial Age<br>\\n• Ships move 10% faster<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nCamel Archer (cavalry archer), Genitour (mounted skirmisher)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Kasbah (team castles work 25% faster)<br>\\n• Maghrebi Camels (Camel units regenerate)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nGenitour available in the Archery Range starting in the Castle Age","120177":"Siege and Elephant civilization<br>\\n<br>\\n• No buildings required to advance to the next age or to unlock other buildings<br>\\n• Farmers don\'t require Mills/Town Centers to drop off food<br>\\n• Battle Elephants move 10% faster<br>\\n• Villagers can garrison in Houses<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nBallista Elephant (mounted scorpion)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Tusk Swords (Battle Elephants +3 attack)<br>\\n• Double Crossbow (Ballista Elephants and Scorpions fire two projectiles)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nScorpions +1 range","120178":"Naval civilization<br>\\n<br>\\n• Advancing to the next age 66% faster<br>\\n• Fish Traps cost -33% and provide 3X food<br>\\n• Battle Elephants cost -30% in Castle, -40% in Imperial Age<br>\\n• Infantry armor upgrades free<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nKarambit Warrior (infantry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Thalassocracy (upgrades Docks to Harbors, which fire arrows)<br>\\n• Forced Levy (Militia-line gold cost is replaced by additional food cost)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nDocks +100% line of sight","120179":"Monk and Elephant civilization<br>\\n<br>\\n• Lumber Camp technologies free<br>\\n• Infantry +1 attack per age (starting in the Feudal Age)<br>\\n• Battle Elephants +1/+1P armor<br>\\n• Monastery technologies cost -50%<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nArambai (ranged cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Manipur Cavalry (Cavalry +4 attack vs. archers)<br>\\n• Howdah (Battle Elephants +1/+1P armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nRelics visible on the map at the start of the game","120180":"Archer civilization<br>\\n<br>\\n• Enemy positions are revealed at the start of the game<br>\\n• Economic upgrades cost no wood and research 100% faster<br>\\n• Archery Range units +20% HP<br>\\n• Conscription free<br>\\n<br>\\n<b>Unique Units:</b><br>\\nRattan Archer (archer), Imperial Skirmisher (skirmisher)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Chatras (Battle Elephants +100 HP)<br>\\n• Paper Money (Lumberjacks slowly generate gold in addition to wood)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nImperial Skirmisher upgrade available in the Imperial Age","120181":"Infantry and Cavalry civilization<br>\\n<br>\\n• Militia-line upgrades free<br>\\n• Town Centers cost -50% stone<br>\\n• Blacksmith and Siege Workshop technologies cost -50% food<br>\\n• Can build Krepost<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nKonnik (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Stirrups (Cavalry attack 33% faster)<br>\\n• Bagains (Militia-line gains +5 armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nBlacksmiths work 80% faster","120182":"Cavalry Archer civilization<br>\\n<br>\\n• Villagers gather +50% food from herdables<br>\\n• New Town Centers spawn 2 Sheep starting in the Castle Age<br>\\n• Units deal +25% damage when fighting from higher elevation<br>\\n• Thumb Ring, Parthian Tactics free<br>\\n<br>\\n<b>Unique Units:</b><br>\\nKeshik (raiding cavalry), Flaming Camel (petard)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Silk Armor (Light Cavalry, Steppe Lancers and Cavalry Archers receive +1/+1P armor)<br>\\n• Timurid Siegecraft (Trebuchets +2 range, enables Flaming Camels)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nCavalry Archers +2 line of sight","120183":"Cavalry civilization<br>\\n<br>\\n• Additional Town Center can be built in the Feudal Age<br>\\n• Siege Workshop and Battering Ram available in the Feudal Age; Capped Ram upgrade available in Castle Age<br>\\n• Archery Ranges and Stables cost -75 wood<br>\\n• Cavalry 5% faster each age (starting in Feudal Age)<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nKipchak (cavalry archer)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Steppe Husbandry (Light Cavalry, Steppe Lancers and Cavalry Archers trained 100% faster)<br>\\n• Cuman Mercenaries (team members can create 5 free Elite Kipchaks per Castle)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nPalisade Walls +33% HP","120184":"Cavalry and Monk civilization<br>\\n<br>\\n• Each Town Center provides 100 food<br>\\n• Spearman-line and Skirmishers move 10% faster<br>\\n• Each garrisoned relic gives +1 attack to Knights and Leitis (maximum +4)<br>\\n<br>\\n<b>Unique Units:</b><br>\\nLeitis (cavalry), Winged Hussar (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Hill Forts (Town Centers +3 range)<br>\\n• Tower Shields (Spearman-line and Skirmishers +2P armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nMonasteries work 20% faster","120185":"Cavalry civilization<br>\\n<br>\\n• Economic upgrades available one age earlier and cost -33% food<br>\\n• Stable technologies cost -50%<br>\\n• Cavalier upgrade available in Castle Age<br>\\n• Gunpowder units +25% attack<br>\\n<br>\\n<b>Unique Units:</b><br>\\nCoustillier (cavalry), Flemish Militia (infantry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Burgundian Vineyards (Farmers slowly generate gold in addition to food)<br>\\n• Flemish Revolution (Upgrades all existing Villagers to Flemish Militia; create Flemish Militia at Barracks)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nRelics generate both Gold & Food","120186":"Infantry and Cavalry civilization<br>\\n<br>\\n• Start with +100 stone<br>\\n• Castles built 50%, Town Centers built 100% faster<br>\\n• Land military units (except siege weapons) receive 33% less bonus damage<br>\\n• Farm upgrades provide +125% additional food<br>\\n• Donjon replaces Watch Tower-line<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nSerjeant (infantry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• First Crusade (Each Town Center (maximum 5) spawns a one-time batch of 5 Serjeants; units more resistant to conversion)<br>\\n• Hauberk (Knights +1/+2P armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nTransport Ships +5 line of sight and cost -50%","120187":"Cavalry civilization<br>\\n<br>\\n• Villagers regenerate 10 HP per minute in Feudal, 15 in Castle, 20 in Imperial Age<br>\\n• Folwark replaces Mill<br>\\n• Stone Miners generate gold in addition to stone<br>\\n<br>\\n<b>Unique Units:</b><br>\\nObuch (infantry), Winged Hussar (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Szlachta Privileges (Knights cost -60% gold)<br>\\n• Lechitic Legacy (Light Cavalry deals trample damage)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nScout Cavalry, Light Cavalry, Hussar +1 attack vs. Archers","120188":"Gunpowder and Monk civilization<br>\\n<br>\\n• Blacksmiths and Universities cost -100 wood<br>\\n• Chemistry and Hand Cannoneer available in Castle Age<br>\\n• Spearman-line deals +25% bonus damage<br>\\n• Fervor and Sanctity affect Villagers<br>\\n• Mining Camp technologies free<br>\\n<br>\\n<b>Unique Units:</b><br>\\nHussite Wagon (siege weapon), Houfnice (bombard cannon)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Wagenburg Tactics (Gunpowder units move 15% faster)<br>\\n• Hussite Reforms (Monks and Monastery technologies have their gold cost replaced by food)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nMarkets work 80% faster","120189":"Infantry and Naval civilization<br>\\n<br>\\n• Receive +200 wood when advancing to the next age<br>\\n• Fishermen and Fishing Ships carry +15<br>\\n• Barracks technologies cost -50%<br>\\n• Siege weapons cost -33% wood<br>\\n• Skirmishers and Elephant Archers attack 25% faster<br>\\n<br>\\n<b>Unique Units:</b><br>\\nUrumi Swordsman (infantry), Thirisadai (warship)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Medical Corps (Elephant units regenerate 30 HP per minute)<br>\\n• Wootz Steel (Infantry and cavalry attacks ignore armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nDocks provide +5 population room","120190":"Elephant and Naval civilization<br>\\n<br>\\n• Elephant units receive 25% less bonus damage and are more resistant to conversion<br>\\n• Town Centers spawn 2 Villagers when the next Age is reached<br>\\n• Cavalry +2 attack vs. Skirmishers<br>\\n• Ships regenerate 15 HP per minute<br>\\n• Monks +3/+3P armor<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nRatha (cavalry archer/cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Paiks (Rathas and elephant units attack 20% faster)<br>\\n• Mahayana (Villagers and Monks take 10% less population space)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nTrade units yield 10% food in addition to gold","120191":"Cavalry and Camel civilization<br>\\n<br>\\n• Start with 2 Forage Bushes<br>\\n• Can garrison Mills with livestock to produce food<br>\\n• Mounted units deal +20% bonus damage Feudal, +30% Castle, +40% Imperial Age<br>\\n• Can garrison Docks with Fishing Ships<br>\\n<br>\\n<b>Unique Units:</b><br>\\nChakram Thrower (infantry), Shrivamsha Rider (cavalry), Camel Scout (camel rider)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Kshatriyas (Military units cost -25% food)<br>\\n• Frontier Guards (Camel Riders and Elephant Archers +4 melee armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nCamel and elephant units created 25% faster","120192":"Infantry civilization<br>\\n<br>\\n• Villagers gather, build, and repair 5% faster<br>\\n• Galley-line and Dromons +1/+1P armor<br>\\n• Infantry receives double effect from Blacksmith armor upgrades <br>\\n• Scorpions cost -60% gold and benefit from Ballistics research<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nCenturion (cavalry), Legionary (infantry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Ballistas (Scorpions fire 33% faster; Galley-line +2 attack)<br>\\n• Comitatenses (Militia-line, Knight-line, and Centurions train 50% faster and receive a charge attack)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nScorpion-line minimum range reduced","300081":"Key","300082":"Unique Unit","300083":"Unit","300084":"Building","300085":"Technology"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index-client.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLENBQUM7QUFDRCxLQUFLLElBQTJCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFPSjtBQUNGLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIscUJBQU0sb0JBQW9CLHFCQUFNO0FBQzNELGtCQUFrQixxQkFBTTtBQUN4Qjs7QUFFQTtBQUNBLG9CQUFvQixVQUFjO0FBQ2xDO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMscUJBQVE7QUFDdEMsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsWUFBWTtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7O0FBRVY7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7QUFHRjs7QUFFQSxDQUFDOzs7Ozs7Ozs7O0FDdHlCRCxDQUFDO0FBQ0QsS0FBSyxJQUEyQjtBQUNoQztBQUNBLHFDQUFxQyxtQkFBTyxDQUFDLGdEQUFRO0FBQ3JEO0FBQ0EsTUFBTSxFQU9KO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUNBQWlDLHNDQUFzQztBQUN2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0JBQWdCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjs7QUFFQSxDQUFDOzs7Ozs7Ozs7O0FDdklELENBQUM7QUFDRCxLQUFLLElBQTJCO0FBQ2hDO0FBQ0EscUNBQXFDLG1CQUFPLENBQUMsZ0RBQVE7QUFDckQ7QUFDQSxNQUFNLEVBT0o7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEMsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUQ7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0QywrS0FBb0U7QUFDaEgsNENBQTRDLHlLQUFpRTtBQUM3Ryw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZSxHQUFHLGVBQWU7QUFDNUQ7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUNBQXFDLGlGQUE2QztBQUNsRiwrQ0FBK0MsNEZB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QztBQUMxSDtBQUNBLHNCQUFzQiwrREFBaUI7QUFDdkM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNDQUFzQyxrQkFBa0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHlCQUF5QixrQ0FBa0M7QUFDM0QsZ0JBQWdCLGtDQUFrQztBQUNsRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDYTtBQUNIO0FBQ0Q7QUFDSTs7QUFFN0M7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMENBQTBDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4REFBOEQ7O0FBRS9EO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGVBQWUsOERB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUg7QUFDckg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xrQnFDOztBQUVkO0FBQ3ZCLGlFQUFlLHNDQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9jb3JlLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvZW5jLWJhc2U2NC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy13cy9icm93c2VyLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbW1vbi1kYXRhLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWRhdGEvZGF0YS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy8gc3luYyBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzLyBzeW5jIFxcLihwbmcpJCIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zLyBzeW5jIFxcLihwbmcpJCIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ltYWdlLWhlbHBlci5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvIHN5bmMgXFwuKHBuZykkIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmQtaGVscGVyLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzLyBzeW5jIFxcLihtcDMpJCIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtdGVjaC1vdmVybGF5L2Npdi10ZWNoLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LXVwZ3JhZGUtb3ZlcmxheS9jaXYtdXBncmFkZS1vdmVybGF5LmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9kYXRhc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2h0bWwtcGFnZXMvY2xpZW50LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2luZGV4LWNsaWVudC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvaWdub3JlZHxaOlxcd29ya3NwYWNlXFxhZ2Utb2YtZW1waXJlc1xcdGVjaC1vdmVybGF5XFxub2RlX21vZHVsZXNcXGNyeXB0by1qc3xjcnlwdG8iLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL29icy13ZWJzb2NrZXQtanMvZGlzdC9qc29uLm1vZGVybi5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qZ2xvYmFscyB3aW5kb3csIGdsb2JhbCwgcmVxdWlyZSovXG5cblx0LyoqXG5cdCAqIENyeXB0b0pTIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdHZhciBDcnlwdG9KUyA9IENyeXB0b0pTIHx8IChmdW5jdGlvbiAoTWF0aCwgdW5kZWZpbmVkKSB7XG5cblx0ICAgIHZhciBjcnlwdG87XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3aW5kb3cgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW4gd2ViIHdvcmtlciAoQnJvd3Nlcilcblx0ICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBzZWxmLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIHdvcmtlclxuXHQgICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbFRoaXMuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgKGV4cGVyaW1lbnRhbCBJRSAxMSkgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm1zQ3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gd2luZG93Lm1zQ3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gZ2xvYmFsIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gZ2xvYmFsLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBpbXBvcnQgdmlhIHJlcXVpcmUgKE5vZGVKUylcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgfVxuXG5cdCAgICAvKlxuXHQgICAgICogQ3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG5cdCAgICAgKlxuXHQgICAgICogQXMgTWF0aC5yYW5kb20oKSBpcyBjcnlwdG9ncmFwaGljYWxseSBub3Qgc2FmZSB0byB1c2Vcblx0ICAgICAqL1xuXHQgICAgdmFyIGNyeXB0b1NlY3VyZVJhbmRvbUludCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAoY3J5cHRvKSB7XG5cdCAgICAgICAgICAgIC8vIFVzZSBnZXRSYW5kb21WYWx1ZXMgbWV0aG9kIChCcm93c2VyKVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDEpKVswXTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFVzZSByYW5kb21CeXRlcyBtZXRob2QgKE5vZGVKUylcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8ucmFuZG9tQnl0ZXMgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcyg0KS5yZWFkSW50MzJMRSgpO1xuXHQgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYXRpdmUgY3J5cHRvIG1vZHVsZSBjb3VsZCBub3QgYmUgdXNlZCB0byBnZXQgc2VjdXJlIHJhbmRvbSBudW1iZXIuJyk7XG5cdCAgICB9O1xuXG5cdCAgICAvKlxuXHQgICAgICogTG9jYWwgcG9seWZpbGwgb2YgT2JqZWN0LmNyZWF0ZVxuXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gRigpIHt9XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgICAgICB2YXIgc3VidHlwZTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG9iajtcblxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQ3J5cHRvSlMgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExpYnJhcnkgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYiA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2Ugb2JqZWN0IGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2UgPSAoZnVuY3Rpb24gKCkge1xuXG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzIFByb3BlcnRpZXMgdG8gY29weSBpbnRvIHRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGV4dGVuZDogZnVuY3Rpb24gKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3Bhd25cblx0ICAgICAgICAgICAgICAgIHZhciBzdWJ0eXBlID0gY3JlYXRlKHRoaXMpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBBdWdtZW50XG5cdCAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5taXhJbihvdmVycmlkZXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGVmYXVsdCBpbml0aWFsaXplclxuXHQgICAgICAgICAgICAgICAgaWYgKCFzdWJ0eXBlLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgdGhpcy5pbml0ID09PSBzdWJ0eXBlLmluaXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplcidzIHByb3RvdHlwZSBpcyB0aGUgc3VidHlwZSBvYmplY3Rcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdC5wcm90b3R5cGUgPSBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2Ugc3VwZXJ0eXBlXG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlciA9IHRoaXM7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBFeHRlbmRzIHRoaXMgb2JqZWN0IGFuZCBydW5zIHRoZSBpbml0IG1ldGhvZC5cblx0ICAgICAgICAgICAgICogQXJndW1lbnRzIHRvIGNyZWF0ZSgpIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGluc3RhbmNlID0gTXlUeXBlLmNyZWF0ZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmV4dGVuZCgpO1xuXHQgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5pdC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgc29tZSBsb2dpYyB3aGVuIHlvdXIgb2JqZWN0cyBhcmUgY3JlYXRlZC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICAgICAgLy8gLi4uXG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENvcGllcyBwcm9wZXJ0aWVzIGludG8gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIG1peCBpbi5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIE15VHlwZS5taXhJbih7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgbWl4SW46IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSUUgd29uJ3QgY29weSB0b1N0cmluZyB1c2luZyB0aGUgbG9vcCBhYm92ZVxuXHQgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nID0gcHJvcGVydGllcy50b1N0cmluZztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gaW5zdGFuY2UuY2xvbmUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3b3Jkcywgc2lnQnl0ZXMpIHtcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XG5cblx0ICAgICAgICAgICAgaWYgKHNpZ0J5dGVzICE9IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHdvcmRzLmxlbmd0aCAqIDQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyB3b3JkIGFycmF5IHRvIGEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtFbmNvZGVyfSBlbmNvZGVyIChPcHRpb25hbCkgVGhlIGVuY29kaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogQ3J5cHRvSlMuZW5jLkhleFxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheSArICcnO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoZW5jb2Rlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGVuY29kZXIgfHwgSGV4KS5zdHJpbmdpZnkodGhpcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmNhdGVuYXRlcyBhIHdvcmQgYXJyYXkgdG8gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5MS5jb25jYXQod29yZEFycmF5Mik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29uY2F0OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgdGhpc1dvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRXb3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoaXNTaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgdGhpcy5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbmNhdFxuXHQgICAgICAgICAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgYnl0ZSBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSB8PSB0aGF0Qnl0ZSA8PCAoMjQgLSAoKHRoaXNTaWdCeXRlcyArIGkpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIHdvcmQgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoYXRTaWdCeXRlczsgaiArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBqKSA+Pj4gMl0gPSB0aGF0V29yZHNbaiA+Pj4gMl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyArPSB0aGF0U2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmVzIGluc2lnbmlmaWNhbnQgYml0cy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xhbXA6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXBcblx0ICAgICAgICAgICAgd29yZHNbc2lnQnl0ZXMgPj4+IDJdICY9IDB4ZmZmZmZmZmYgPDwgKDMyIC0gKHNpZ0J5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgd29yZHMubGVuZ3RoID0gTWF0aC5jZWlsKHNpZ0J5dGVzIC8gNCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLndvcmRzID0gdGhpcy53b3Jkcy5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSB3b3JkIGFycmF5IGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSByYW5kb20gd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKDE2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByYW5kb206IGZ1bmN0aW9uIChuQnl0ZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaChjcnlwdG9TZWN1cmVSYW5kb21JbnQoKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEVuY29kZXIgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEhleCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEhleCA9IENfZW5jLkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoZXhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuSGV4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgaGV4Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlID4+PiA0KS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSAmIDB4MGYpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gaGV4Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyIFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaGV4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGhleFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGV4U3RyTGVuZ3RoID0gaGV4U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAzXSB8PSBwYXJzZUludChoZXhTdHIuc3Vic3RyKGksIDIpLCAxNikgPDwgKDI0IC0gKGkgJSA4KSAqIDQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgaGV4U3RyTGVuZ3RoIC8gMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMYXRpbjEgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBMYXRpbjEgPSBDX2VuYy5MYXRpbjEgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbGF0aW4xU3RyaW5nID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMUNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgbGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBsYXRpbjFDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBMYXRpbjEgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRpbjFTdHIgVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZShsYXRpbjFTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAobGF0aW4xU3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFTdHJMZW5ndGggPSBsYXRpbjFTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGF0aW4xU3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtOCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGY4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShMYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSkpKTtcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgVVRGLTggZGF0YScpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGY4U3RyIFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodXRmOFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGY4U3RyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBMYXRpbjEucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHV0ZjhTdHIpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogVGhlIHByb3BlcnR5IGJsb2NrU2l6ZSBtdXN0IGJlIGltcGxlbWVudGVkIGluIGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX21pbkJ1ZmZlclNpemUgVGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBzaG91bGQgYmUga2VwdCB1bnByb2Nlc3NlZCBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0OiAwXG5cdCAgICAgKi9cblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBibG9jayBhbGdvcml0aG0ncyBkYXRhIGJ1ZmZlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgV29yZEFycmF5LmluaXQoKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyA9IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhpcyBibG9jayBhbGdvcml0aG0ncyBidWZmZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYXBwZW5kLiBTdHJpbmdzIGFyZSBjb252ZXJ0ZWQgdG8gYSBXb3JkQXJyYXkgdXNpbmcgVVRGLTguXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfYXBwZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBXb3JkQXJyYXksIGVsc2UgYXNzdW1lIFdvcmRBcnJheSBhbHJlYWR5XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIFRoaXMgbWV0aG9kIGludm9rZXMgX2RvUHJvY2Vzc0Jsb2NrKG9mZnNldCksIHdoaWNoIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBkb0ZsdXNoIFdoZXRoZXIgYWxsIGJsb2NrcyBhbmQgcGFydGlhbCBibG9ja3Mgc2hvdWxkIGJlIHByb2Nlc3NlZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX3Byb2Nlc3M6IGZ1bmN0aW9uIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgIHZhciBwcm9jZXNzZWRXb3JkcztcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICBwcm9jZXNzZWRXb3JkcyA9IGRhdGFXb3Jkcy5zcGxpY2UoMCwgbldvcmRzUmVhZHkpO1xuXHQgICAgICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyAtPSBuQnl0ZXNSZWFkeTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5fZGF0YSA9IHRoaXMuX2RhdGEuY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9taW5CdWZmZXJTaXplOiAwXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBoYXNoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGhhc2hlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMTYgKDUxMiBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyID0gQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKCksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoZXIgPSBDcnlwdG9KUy5hbGdvLlNIQTI1Ni5jcmVhdGUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICB0aGlzLmNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtIYXNoZXJ9IFRoaXMgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNoXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIG1lc3NhZ2UgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2RvRmluYWxpemUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA1MTIvMzIsXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGhhc2hlci5pbml0KGNmZykuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgSG1hY1NIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIbWFjSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwga2V5KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFsZ29yaXRobSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ28gPSB7fTtcblxuXHQgICAgcmV0dXJuIEM7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZTY0IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZTY0ID0gQ19lbmMuQmFzZTY0ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIEJhc2U2NCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGJhc2U2NFN0cmluZyA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIG1hcCA9IHRoaXMuX21hcDtcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBiYXNlNjRDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDMpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMSA9ICh3b3Jkc1tpID4+PiAyXSAgICAgICA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAgICAgICAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTIgPSAod29yZHNbKGkgKyAxKSA+Pj4gMl0gPj4+ICgyNCAtICgoaSArIDEpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUzID0gKHdvcmRzWyhpICsgMikgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAyKSAlIDQpICogOCkpICYgMHhmZjtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHRyaXBsZXQgPSAoYnl0ZTEgPDwgMTYpIHwgKGJ5dGUyIDw8IDgpIHwgYnl0ZTM7XG5cblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyAoaiA8IDQpICYmIChpICsgaiAqIDAuNzUgPCBzaWdCeXRlcyk7IGorKykge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NENoYXJzLnB1c2gobWFwLmNoYXJBdCgodHJpcGxldCA+Pj4gKDYgKiAoMyAtIGopKSkgJiAweDNmKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcblx0ICAgICAgICAgICAgaWYgKHBhZGRpbmdDaGFyKSB7XG5cdCAgICAgICAgICAgICAgICB3aGlsZSAoYmFzZTY0Q2hhcnMubGVuZ3RoICUgNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NENoYXJzLnB1c2gocGFkZGluZ0NoYXIpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGJhc2U2NENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIEJhc2U2NCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2U2NFN0ciBUaGUgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnBhcnNlKGJhc2U2NFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChiYXNlNjRTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBiYXNlNjRTdHJMZW5ndGggPSBiYXNlNjRTdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5fbWFwO1xuXHQgICAgICAgICAgICB2YXIgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXA7XG5cblx0ICAgICAgICAgICAgaWYgKCFyZXZlcnNlTWFwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXAgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hcC5sZW5ndGg7IGorKykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwW21hcC5jaGFyQ29kZUF0KGopXSA9IGo7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSWdub3JlIHBhZGRpbmdcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmdDaGFyID0gbWFwLmNoYXJBdCg2NCk7XG5cdCAgICAgICAgICAgIGlmIChwYWRkaW5nQ2hhcikge1xuXHQgICAgICAgICAgICAgICAgdmFyIHBhZGRpbmdJbmRleCA9IGJhc2U2NFN0ci5pbmRleE9mKHBhZGRpbmdDaGFyKTtcblx0ICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nSW5kZXggIT09IC0xKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0U3RyTGVuZ3RoID0gcGFkZGluZ0luZGV4O1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICByZXR1cm4gcGFyc2VMb29wKGJhc2U2NFN0ciwgYmFzZTY0U3RyTGVuZ3RoLCByZXZlcnNlTWFwKTtcblxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWFwOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nXG5cdCAgICB9O1xuXG5cdCAgICBmdW5jdGlvbiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApIHtcblx0ICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgIHZhciBuQnl0ZXMgPSAwO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2U2NFN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoaSAlIDQpIHtcblx0ICAgICAgICAgICAgICB2YXIgYml0czEgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkgLSAxKV0gPDwgKChpICUgNCkgKiAyKTtcblx0ICAgICAgICAgICAgICB2YXIgYml0czIgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkpXSA+Pj4gKDYgLSAoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgdmFyIGJpdHNDb21iaW5lZCA9IGJpdHMxIHwgYml0czI7XG5cdCAgICAgICAgICAgICAgd29yZHNbbkJ5dGVzID4+PiAyXSB8PSBiaXRzQ29tYmluZWQgPDwgKDI0IC0gKG5CeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgbkJ5dGVzKys7XG5cdCAgICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsIG5CeXRlcyk7XG5cdCAgICB9XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuZW5jLkJhc2U2NDtcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcblx0ICAgIHZhciBIID0gW107XG5cdCAgICB2YXIgSyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGNvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBpc1ByaW1lKG4pIHtcblx0ICAgICAgICAgICAgdmFyIHNxcnROID0gTWF0aC5zcXJ0KG4pO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBmYWN0b3IgPSAyOyBmYWN0b3IgPD0gc3FydE47IGZhY3RvcisrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIShuICUgZmFjdG9yKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZ1bmN0aW9uIGdldEZyYWN0aW9uYWxCaXRzKG4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgbiA9IDI7XG5cdCAgICAgICAgdmFyIG5QcmltZSA9IDA7XG5cdCAgICAgICAgd2hpbGUgKG5QcmltZSA8IDY0KSB7XG5cdCAgICAgICAgICAgIGlmIChpc1ByaW1lKG4pKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoblByaW1lIDwgOCkge1xuXHQgICAgICAgICAgICAgICAgICAgIEhbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAyKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBLW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMykpO1xuXG5cdCAgICAgICAgICAgICAgICBuUHJpbWUrKztcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIG4rKztcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTI1NiBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTI1NiA9IENfYWxnby5TSEEyNTYgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgZiA9IEhbNV07XG5cdCAgICAgICAgICAgIHZhciBnID0gSFs2XTtcblx0ICAgICAgICAgICAgdmFyIGggPSBIWzddO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHggPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMCAgPSAoKGdhbW1hMHggPDwgMjUpIHwgKGdhbW1hMHggPj4+IDcpKSAgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWEweCA+Pj4gMyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCA9IFdbaSAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTEgID0gKChnYW1tYTF4IDw8IDE1KSB8IChnYW1tYTF4ID4+PiAxNykpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWExeCA8PCAxMykgfCAoZ2FtbWExeCA+Pj4gMTkpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMXggPj4+IDEwKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIGNoICA9IChlICYgZikgXiAofmUgJiBnKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTAgPSAoKGEgPDwgMzApIHwgKGEgPj4+IDIpKSBeICgoYSA8PCAxOSkgfCAoYSA+Pj4gMTMpKSBeICgoYSA8PCAxMCkgfCAoYSA+Pj4gMjIpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTEgPSAoKGUgPDwgMjYpIHwgKGUgPj4+IDYpKSBeICgoZSA8PCAyMSkgfCAoZSA+Pj4gMTEpKSBeICgoZSA8PCA3KSAgfCAoZSA+Pj4gMjUpKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBzaWdtYTAgKyBtYWo7XG5cblx0ICAgICAgICAgICAgICAgIGggPSBnO1xuXHQgICAgICAgICAgICAgICAgZyA9IGY7XG5cdCAgICAgICAgICAgICAgICBmID0gZTtcblx0ICAgICAgICAgICAgICAgIGUgPSAoZCArIHQxKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSBiO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gKHQxICsgdDIpIHwgMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgICAgICBIWzVdID0gKEhbNV0gKyBmKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNl0gPSAoSFs2XSArIGcpIHwgMDtcblx0ICAgICAgICAgICAgSFs3XSA9IChIWzddICsgaCkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1Nih3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1Nik7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjU2KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTI1NiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTYpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyNTY7XG5cbn0pKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvSXJvbnN0cmlrZVNlbWlCb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9pbmdhbWVfZGlwbG9tYWN5LW1lbnVfYmdfZnVsbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2NvbXBvbmVudHMvY2l2LXRlY2gtb3ZlcmxheS9pbWFnZXMvcGFwZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2Npdi1pbWFnZXMvbWlzYy92ZXRvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWVtYi1Gb250XCI7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IE1lbWItRm9udDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYWRtaW4tYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNsaWVudC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm9keS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm15LWhlYWRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIwJTtcclxuICBib3JkZXItdG9wOiAwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDBweDtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG59XHJcbi5teS1mb290ZXIge1xyXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5teS1mb290ZXIgYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbn1cclxuXHJcbi5hZG1pbi1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLndlYnNvY2tldC1jb250cm9scyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ud2Vic29ja2V0LXNldHRpbmctYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcbi53ZWJzb2NrZXQtaW5wdXQge1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4ubGVmdC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LW51bWJlciB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi50ZWNoLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAuMjVyZW07XHJcbn1cclxuLnRlY2gtc2V0dGluZ3Mge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50ZWNoLWNpdi1saXN0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zZXR0aW5nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmFjdGlvbi1zZXR0aW5ncyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2V0dGluZy1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMTZyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hZG1pbi1jaXYtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGJsYWNrO1xyXG59XHJcbi5hZG1pbi1jaXYtaWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG59XHJcbi5hZG1pbi1jaXYtaWNvbiBzcGFuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYWRtaW4tY2l2LWljb24gaW1nIHtcclxuICB3aWR0aDogNXJlbTtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jbGllbnQtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1uYW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtbmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1pY29uIHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpKTtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi11bmlxdWUtdW5pdC1pY29uIHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IHNpbHZlciBzb2xpZCAxcHg7XHJcbn1cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZGVzY3JpcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwIGtoYWtpLCAwIDFweCBraGFraSwgMXB4IDAga2hha2ksIDAgLTFweCBraGFraTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWVtYmxlbSB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMDtcclxuICB0b3A6IDQ1JTtcclxufVxyXG5cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi11cGdyYWRlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdXBncmFkZS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLXRvcDogMC4xcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmVuYWJsZWQtMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZGlzYWJsZWQtMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMC43NXJlbTtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmVuYWJsZWQtMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZGlzYWJsZWQtMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMC43NXJlbTtcclxuICB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuZGlzYWJsZS1pY29uLW1lc28ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNXJlbTtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi1lY28tdXBncmFkZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZWNvLXVwZ3JhZGUtY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJ1dHRvbi1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Y2JhO1xyXG59XHJcbi5idXR0b24tcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyLjFyZW07XHJcbiAgd2lkdGg6IDRyZW07XHJcbn1cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJvdHRvbTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHdpZHRoOiAyNnB4O1xyXG59XHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xyXG59XHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG59XHJcbi5zbGlkZXIucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm1hc2staW1nLXZlcnRpY2FsIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xyXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xyXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIG1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uY2l2LXRlY2gtYW5pbWF0aW9uLWVudGVyLWFjdGl2ZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XHJcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcclxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICBtYXNrLXNpemU6IDEwMCUgMzAwJTtcclxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XHJcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbmltYXRpb246IG1hc2stbW92ZS1pbiAycyBlYXNlLWluIGZvcndhcmRzO1xyXG59XHJcbi5jaXYtdGVjaC1hbmltYXRpb24tbGVhdmUtYWN0aXZlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xyXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xyXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIG1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGFuaW1hdGlvbjogbWFzay1tb3ZlLW91dCAycyBlYXNlLW91dCBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBtYXNrLW1vdmUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAwJTtcclxuICAgIG1hc2stcG9zaXRpb246IDAgMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hc2stbW92ZS1vdXQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDAlO1xyXG4gICAgbWFzay1wb3NpdGlvbjogMCAwJTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBaUQ7QUFDbkQ7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix5REFBMEU7RUFDMUUsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJB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QkFBMkI7QUFDN0I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUpBQXFKO0VBQ3JKLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCOztFQUU5Qiw2SUFBNkk7RUFDN0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxSkFBcUo7RUFDckosNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7O0VBRTlCLDZJQUE2STtFQUM3SSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLHFKQUFxSjtFQUNySiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDhCQUE4Qjs7RUFFOUIsNklBQTZJO0VBQzdJLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1lbWItRm9udFxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSXJvbnN0cmlrZVNlbWlCb2xkLm90ZlxcXCIpO1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBNZW1iLUZvbnQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRtaW4tYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvaW1hZ2VzL2luZ2FtZV9kaXBsb21hY3ktbWVudV9iZ19mdWxsLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY2xpZW50LWJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2R5LWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5teS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwJTtcXHJcXG4gIGJvcmRlci10b3A6IDBweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwcHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxufVxcclxcbi5teS1mb290ZXIge1xcclxcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcclxcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcbi5teS1mb290ZXIgYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkbWluLXBhZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi53ZWJzb2NrZXQtY29udHJvbHMge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ud2Vic29ja2V0LXNldHRpbmctYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuLndlYnNvY2tldC1pbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29sdW1uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1udW1iZXIge1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi50ZWNoLWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMC4yNXJlbTtcXHJcXG59XFxyXFxuLnRlY2gtc2V0dGluZ3Mge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaC1jaXYtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5hY3Rpb24tYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcbi5hY3Rpb24tc2V0dGluZ3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5zZXR0aW5nLWJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMXJlbSAxNnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZG1pbi1jaXYtaWNvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCBibGFjaztcXHJcXG59XFxyXFxuLmFkbWluLWNpdi1pY29uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG59XFxyXFxuLmFkbWluLWNpdi1pY29uIHNwYW4ge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5hZG1pbi1jaXYtaWNvbiBpbWcge1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWVudC1wYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvY2l2LXRlY2gtb3ZlcmxheS9pbWFnZXMvcGFwZXIucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtbmFtZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LW5hbWUge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCB3aGl0ZSwgMCAxcHggd2hpdGUsIDFweCAwIHdoaXRlLCAwIC0xcHggd2hpdGU7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWljb24ge1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi11bmlxdWUtdW5pdC1pY29uIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJvcmRlcjogc2lsdmVyIHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZGVzY3JpcHRpb24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIGtoYWtpLCAwIDFweCBraGFraSwgMXB4IDAga2hha2ksIDAgLTFweCBraGFraTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWVtYmxlbSB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgdG9wOiA0NSU7XFxyXFxufVxcclxcblxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi11cGdyYWRlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi11cGdyYWRlLWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmVuYWJsZWQtMSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGhlaWdodDogMC43NXJlbTtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZGlzYWJsZWQtMSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBoZWlnaHQ6IDAuNzVyZW07XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmVuYWJsZWQtMyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGhlaWdodDogMC43NXJlbTtcXHJcXG4gIHdpZHRoOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZGlzYWJsZWQtMyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBoZWlnaHQ6IDAuNzVyZW07XFxyXFxuICB3aWR0aDogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuZGlzYWJsZS1pY29uLW1lc28ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvY2l2LWltYWdlcy9taXNjL3ZldG8ucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi1lY28tdXBncmFkZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi1lY28tdXBncmFkZS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWJsdWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGNiYTtcXHJcXG59XFxyXFxuLmJ1dHRvbi1yZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMi4xcmVtO1xcclxcbiAgd2lkdGg6IDRyZW07XFxyXFxufVxcclxcbi5zd2l0Y2ggaW5wdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvdHRvbTogNHB4O1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBoZWlnaHQ6IDI2cHg7XFxyXFxuICBsZWZ0OiA0cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgd2lkdGg6IDI2cHg7XFxyXFxufVxcclxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XFxyXFxufVxcclxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxufVxcclxcbi5zbGlkZXIucm91bmQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFzay1pbWctdmVydGljYWwge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XFxyXFxuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAzMDAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDIwMCU7XFxyXFxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFxyXFxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XFxyXFxuICBtYXNrLXNpemU6IDEwMCUgMzAwJTtcXHJcXG4gIG1hc2stcG9zaXRpb246IDAgMjAwJTtcXHJcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jaXYtdGVjaC1hbmltYXRpb24tZW50ZXItYWN0aXZlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcclxcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XFxyXFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYW5pbWF0aW9uOiBtYXNrLW1vdmUtaW4gMnMgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG59XFxyXFxuLmNpdi10ZWNoLWFuaW1hdGlvbi1sZWF2ZS1hY3RpdmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XFxyXFxuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAzMDAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDIwMCU7XFxyXFxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFxyXFxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XFxyXFxuICBtYXNrLXNpemU6IDEwMCUgMzAwJTtcXHJcXG4gIG1hc2stcG9zaXRpb246IDAgMjAwJTtcXHJcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBhbmltYXRpb246IG1hc2stbW92ZS1vdXQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbWFzay1tb3ZlLWluIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gICAgbWFzay1wb3NpdGlvbjogMCAxMDAlO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMCU7XFxyXFxuICAgIG1hc2stcG9zaXRpb246IDAgMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbWFzay1tb3ZlLW91dCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDAlO1xcclxcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDAlO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gICAgbWFzay1wb3NpdGlvbjogMCAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vbWF4b2dkZW4vd2Vic29ja2V0LXN0cmVhbS9ibG9iLzQ4ZGMzZGRmOTQzZTVhZGE2NjhjMzFjY2Q5NGU5MTg2ZjAyZmFmYmQvd3MtZmFsbGJhY2suanNcblxudmFyIHdzID0gbnVsbFxuXG5pZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd3MgPSBXZWJTb2NrZXRcbn0gZWxzZSBpZiAodHlwZW9mIE1veldlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd3MgPSBNb3pXZWJTb2NrZXRcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd3MgPSBnbG9iYWwuV2ViU29ja2V0IHx8IGdsb2JhbC5Nb3pXZWJTb2NrZXRcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd3MgPSB3aW5kb3cuV2ViU29ja2V0IHx8IHdpbmRvdy5Nb3pXZWJTb2NrZXRcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdzID0gc2VsZi5XZWJTb2NrZXQgfHwgc2VsZi5Nb3pXZWJTb2NrZXRcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3NcbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuZXhwb3J0cy5kZXN0cm95ID0gKCgpID0+IHtcblx0bGV0IHdhcm5lZCA9IGZhbHNlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKCF3YXJuZWQpIHtcblx0XHRcdHdhcm5lZCA9IHRydWU7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0XHR9XG5cdH07XG59KSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUuZGVidWcoKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKiBJZiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGF2YWlsYWJsZSwgZmFsbHMgYmFja1xuICogdG8gYGNvbnNvbGUubG9nYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmxvZyA9IGNvbnNvbGUuZGVidWcgfHwgY29uc29sZS5sb2cgfHwgKCgpID0+IHt9KTtcblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cdFx0bGV0IGVuYWJsZU92ZXJyaWRlID0gbnVsbDtcblx0XHRsZXQgbmFtZXNwYWNlc0NhY2hlO1xuXHRcdGxldCBlbmFibGVkQ2FjaGU7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICclJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBjcmVhdGVEZWJ1Zy5kZXN0cm95OyAvLyBYWFggVGVtcG9yYXJ5LiBXaWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZWJ1ZywgJ2VuYWJsZWQnLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogKCkgPT4ge1xuXHRcdFx0XHRpZiAoZW5hYmxlT3ZlcnJpZGUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gZW5hYmxlT3ZlcnJpZGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5hbWVzcGFjZXNDYWNoZSAhPT0gY3JlYXRlRGVidWcubmFtZXNwYWNlcykge1xuXHRcdFx0XHRcdG5hbWVzcGFjZXNDYWNoZSA9IGNyZWF0ZURlYnVnLm5hbWVzcGFjZXM7XG5cdFx0XHRcdFx0ZW5hYmxlZENhY2hlID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGVuYWJsZWRDYWNoZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IHYgPT4ge1xuXHRcdFx0XHRlbmFibGVPdmVycmlkZSA9IHY7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBFbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cdFx0Y3JlYXRlRGVidWcubmFtZXNwYWNlcyA9IG5hbWVzcGFjZXM7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zbGljZSgxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdC8qKlxuXHQqIFhYWCBETyBOT1QgVVNFLiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHN0dWIgZnVuY3Rpb24uXG5cdCogWFhYIEl0IFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXHQqL1xuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgZW1pdHRlciwgb25jZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdLmZuKSBlbWl0dGVyLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IFtlbWl0dGVyLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICBpZiAoLS1lbWl0dGVyLl9ldmVudHNDb3VudCA9PT0gMCkgZW1pdHRlci5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICBlbHNlIGRlbGV0ZSBlbWl0dGVyLl9ldmVudHNbZXZ0XTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghaGFuZGxlcnMpIHJldHVybiBbXTtcbiAgaWYgKGhhbmRsZXJzLmZuKSByZXR1cm4gW2hhbmRsZXJzLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGhhbmRsZXJzW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWJlciBvZiBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm4gMDtcbiAgaWYgKGxpc3RlbmVycy5mbikgcmV0dXJuIDE7XG4gIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCB0cnVlKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuICYmXG4gICAgICAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpICYmXG4gICAgICAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHxcbiAgICAgICAgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSB8fFxuICAgICAgICAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNvY2tldEVudW1zID0ge1xyXG4gIENsaWVudFJlZ2lzdGVyOiBcIkNsaWVudFJlZ2lzdGVyXCIsXHJcbiAgQ2xpZW50VW5SZWdpc3RlcjogXCJDbGllbnRVblJlZ2lzdGVyXCIsXHJcbiAgUElORzogXCJQSU5HXCIsXHJcbiAgVEVTVDogXCJURVNUXCIsXHJcbiAgQUdFT1ZFUkxBWVBVU0g6IFwiQUdFT1ZFUkxBWVBVU0hcIixcclxufTtcclxuXHJcbmV4cG9ydCB7IFNvY2tldEVudW1zIH07XHJcbiIsImltcG9ydCBjaXZEYXRhUmF3IGZyb20gXCIuL2RhdGEuanNvblwiO1xyXG5pbXBvcnQgY2l2U3RyaW5nRGF0YSBmcm9tIFwiLi9zdHJpbmdzLmpzb25cIjtcclxuXHJcbmNvbnN0IHRlY2hSZWxhdGlvbnNoaXBNYXBwaW5nID0ge1xyXG4gIGJsYWNrc21pdGg6IFtcclxuICAgIHtcclxuICAgICAgaXNDaGFpblVwZ3JhZGU6IHRydWUsXHJcbiAgICAgIGRhdGE6IFtcIkZvcmdpbmdcIiwgXCJJcm9uIENhc3RpbmdcIiwgXCJCbGFzdCBGdXJuYWNlXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaXNDaGFpblVwZ3JhZGU6IHRydWUsXHJcbiAgICAgIGRhdGE6IFtcIlNjYWxlIE1haWwgQXJtb3JcIiwgXCJDaGFpbiBNYWlsIEFybW9yXCIsIFwiUGxhdGUgTWFpbCBBcm1vclwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlzQ2hhaW5VcGdyYWRlOiB0cnVlLFxyXG4gICAgICBkYXRhOiBbXCJTY2FsZSBCYXJkaW5nIEFybW9yXCIsIFwiQ2hhaW4gQmFyZGluZyBBcm1vclwiLCBcIlBsYXRlIEJhcmRpbmcgQXJtb3JcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpc0NoYWluVXBncmFkZTogdHJ1ZSxcclxuICAgICAgZGF0YTogW1wiRmxldGNoaW5nXCIsIFwiQm9ka2luIEFycm93XCIsIFwiQnJhY2VyXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaXNDaGFpblVwZ3JhZGU6IHRydWUsXHJcbiAgICAgIGRhdGE6IFtcIlBhZGRlZCBBcmNoZXIgQXJtb3JcIiwgXCJMZWF0aGVyIEFyY2hlciBBcm1vclwiLCBcIlJpbmcgQXJjaGVyIEFybW9yXCJdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFwibHVtYmVyIGNhbXBcIjogW3sgaXNDaGFpblVwZ3JhZGU6IHRydWUsIGRhdGE6IFtcIkRvdWJsZS1CaXQgQXhlXCIsIFwiQm93IFNhd1wiLCBcIlR3by1NYW4gU2F3XCJdIH1dLFxyXG4gIG1pbGw6IFt7IGlzQ2hhaW5VcGdyYWRlOiB0cnVlLCBkYXRhOiBbXCJIb3JzZSBDb2xsYXJcIiwgXCJIZWF2eSBQbG93XCIsIFwiQ3JvcCBSb3RhdGlvblwiXSB9XSxcclxuICAvLyB0b3duY2VudGVyOiBbXCJXaGVlbGJhcnJvd1wiLCBcIkhhbmQgQ2FydFwiXSxcclxuICB1bml2ZXJzaXR5OiBbeyBpc0NoYWluVXBncmFkZTogZmFsc2UsIGRhdGE6IFtcIkJhbGxpc3RpY3NcIiwgXCJTaWVnZSBFbmdpbmVlcnNcIl0gfV0sXHJcbiAgc3RhYmxlOiBbeyBpc0NoYWluVXBncmFkZTogZmFsc2UsIGRhdGE6IFtcIkJsb29kbGluZXNcIiwgXCJIdXNiYW5kcnlcIl0gfV0sXHJcbiAgXCJhcmNoZXJ5IHJhbmdlXCI6IFt7IGlzQ2hhaW5VcGdyYWRlOiBmYWxzZSwgZGF0YTogW1wiVGh1bWIgUmluZ1wiXSB9XSxcclxuICBtb25hc3Rlcnk6IFt7IGlzQ2hhaW5VcGdyYWRlOiBmYWxzZSwgZGF0YTogW1wiUmVkZW1wdGlvblwiLCBcIkF0b25lbWVudFwiLCBcIkhlcmJhbCBNZWRpY2luZVwiLCBcIkhlcmVzeVwiLCBcIlNhbmN0aXR5XCIsIFwiRmVydm9yXCIsIFwiRmFpdGhcIiwgXCJJbGx1bWluYXRpb25cIiwgXCJCbG9jayBQcmludGluZ1wiLCBcIlRoZW9jcmFjeVwiXSB9XSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFJhd0Npdk5hbWVUb0tleShjaXZOYW1lKSB7XHJcbiAgaWYgKGNpdk5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFwiXCI7XHJcbiAgY2l2TmFtZSA9IGAke2Npdk5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCl9JHtjaXZOYW1lLnNsaWNlKDEpfWA7XHJcbiAgcmV0dXJuIGNpdk5hbWU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0Q2l2TmFtZXMoKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNpdkRhdGFSYXcuY2l2X25hbWVzKTtcclxufVxyXG5mdW5jdGlvbiBnZXRDaXZUZWNobm9sb2d5RGVzY3JpcHRpb24oY2l2TmFtZSkge1xyXG4gIGNpdk5hbWUgPSBmb3JtYXRSYXdDaXZOYW1lVG9LZXkoY2l2TmFtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBUZXh0S2V5ID0gY2l2RGF0YVJhdy5jaXZfaGVscHRleHRzW2Npdk5hbWVdO1xyXG4gIGNvbnN0IGNpdkRlc2NyaXB0aW9uID0gY2l2U3RyaW5nRGF0YVtoZWxwVGV4dEtleV07XHJcblxyXG4gIHJldHVybiBjaXZEZXNjcmlwdGlvbjtcclxufVxyXG5mdW5jdGlvbiBnZXRDaXZUZWNobm9sb2d5VXBncmFkZXMoY2l2TmFtZSkge1xyXG4gIGNpdk5hbWUgPSBmb3JtYXRSYXdDaXZOYW1lVG9LZXkoY2l2TmFtZSk7XHJcblxyXG4gIGNvbnN0IGNpdlRlY2hzQWxsID0gY2l2RGF0YVJhdy50ZWNodHJlZXNbY2l2TmFtZV07XHJcbiAgY29uc3QgdXBncmFkZU5hbWVzID0gW107XHJcbiAgY2l2VGVjaHNBbGwudGVjaHMuZm9yRWFjaCgodGVjaElkKSA9PiB7XHJcbiAgICBjb25zdCB1cGdyYWRlID0gY2l2RGF0YVJhdy5kYXRhLnRlY2hzW3RlY2hJZF07XHJcbiAgICAvLyBjaXZTdHJpbmdEYXRhW3VwZ3JhZGUuTGFuZ3VhZ2VIZWxwSWRdOyAvLyBmb3IgZGVzY3JpcHRpb25cclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIGlkOiB0ZWNoSWQsXHJcbiAgICAgIHJhd05hbWU6IGNpdlN0cmluZ0RhdGFbdXBncmFkZS5MYW5ndWFnZU5hbWVJZF0sXHJcbiAgICB9O1xyXG4gICAgdXBncmFkZU5hbWVzLnB1c2gocGF5bG9hZCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVwZ3JhZGVOYW1lcztcclxufVxyXG5mdW5jdGlvbiBnZXRBZ2VUaWVyTGV2ZWwodXBncmFkZU5hbWUpIHtcclxuICBsZXQgZm91bmRJbmRleCA9IC0xO1xyXG4gIGZvciAobGV0IGtleSBpbiB0ZWNoUmVsYXRpb25zaGlwTWFwcGluZykge1xyXG4gICAgaWYgKGZvdW5kSW5kZXggPiAtMSkgYnJlYWs7IC8vIHNob3J0IGNpcmN1aXQgZm91bmQgcmVzdWx0c1xyXG4gICAgaWYgKCF0ZWNoUmVsYXRpb25zaGlwTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIC8vIGlnbm9yZWQga2V5c1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIC8vIGxvb2sgYXQgZXZlcnl0aGluZyBhbmQgcmV0dXJuIHRoZSBpbmRleCBvZiBhcnJheSAobG9vc2UgcmVwcmVzZW50YXRpb24gb2YgYWdlIGxldmVsKVxyXG4gICAgdGVjaFJlbGF0aW9uc2hpcE1hcHBpbmdba2V5XS5mb3JFYWNoKCh1cGdyYWRlKSA9PiB7XHJcbiAgICAgIGlmIChmb3VuZEluZGV4ID4gLTEpIHJldHVybjsgLy8gc2hvcnQgY2lyY3VpdCBmb3VuZCByZXN1bHRzXHJcbiAgICAgIGlmICh1cGdyYWRlLmlzQ2hhaW5VcGdyYWRlKSB7XHJcbiAgICAgICAgZm91bmRJbmRleCA9IHVwZ3JhZGUuZGF0YS5pbmRleE9mKHVwZ3JhZGVOYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3VuZEluZGV4ID0gLTE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gZm91bmRJbmRleDtcclxufVxyXG5mdW5jdGlvbiBmaWx0ZXJMb3dlc3RVcGdyYWRlc0Zyb21DYXRlZ29yaWVzKHVwZ3JhZGVDYXRlZ29yaWVzLCB1cGdyYWRlTGlzdCkge1xyXG4gIGNvbnN0IG1vZGlmaWVkVXBncmFkZUxpc3QgPSBbXTtcclxuICB1cGdyYWRlQ2F0ZWdvcmllcy5mb3JFYWNoKCh1cGdyYWRlQ2F0ZWdvcnkpID0+IHtcclxuICAgIGNvbnN0IHVwZ3JhZGVBcnJheU1hcCA9IHRlY2hSZWxhdGlvbnNoaXBNYXBwaW5nW3VwZ3JhZGVDYXRlZ29yeV07XHJcbiAgICB1cGdyYWRlQXJyYXlNYXAuZm9yRWFjaCgodXBncmFkZUFycmF5KSA9PiB7XHJcbiAgICAgIGlmICh1cGdyYWRlQXJyYXkuaXNDaGFpblVwZ3JhZGUpIHtcclxuICAgICAgICAvLyB0aGlzIHVwZ3JhZGUgYXJyYXkgaXMgaW4gdGhlIGFnZSBjaGFpbiwgZGV0ZXJtaW5lIHdoYXQgaXMgdGhlIGhpZ2hlc3QgdGVjaCBhdmFpbGFibGVcclxuICAgICAgICBsZXQgZm91bmRIaWdoZXJUaWVyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHVwZ3JhZGVBcnJheS5kYXRhLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGluZGV4ZWQgdmFsdWUgaW4gdXBncmFkZUxpc3RcclxuICAgICAgICAgIGNvbnN0IHVwZ3JhZGUgPSB1cGdyYWRlTGlzdC5maW5kKCh1cGdyYWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGdyYWRlLnJhd05hbWUgPT09IHVwZ3JhZGVBcnJheS5kYXRhW2ldO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAodXBncmFkZSAhPT0gdW5kZWZpbmVkICYmICFmb3VuZEhpZ2hlclRpZXIpIHtcclxuICAgICAgICAgICAgZm91bmRIaWdoZXJUaWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgbW9kaWZpZWRVcGdyYWRlTGlzdC5wdXNoKHVwZ3JhZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gdGhpcyBpcyBmb3IgY2l2cyB0aGF0IGRvbnQgaGF2ZSB0aGUgdXBncmFkZVxyXG4gICAgICAgICAgaWYgKGkgPT09IDAgJiYgIWZvdW5kSGlnaGVyVGllcikge1xyXG4gICAgICAgICAgICBtb2RpZmllZFVwZ3JhZGVMaXN0LnB1c2goeyByYXdOYW1lOiB1cGdyYWRlQXJyYXkuZGF0YVtpXSwgaWQ6IC0xIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cGdyYWRlQXJyYXkuZGF0YS5mb3JFYWNoKCh1cGdyYWRlQXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmb3VuZFRlY2ggPSB1cGdyYWRlTGlzdC5maW5kKCh1cGdyYWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGdyYWRlLnJhd05hbWUgPT09IHVwZ3JhZGVBcnI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChmb3VuZFRlY2gpIHtcclxuICAgICAgICAgICAgbW9kaWZpZWRVcGdyYWRlTGlzdC5wdXNoKHsgcmF3TmFtZTogdXBncmFkZUFyciwgaWQ6IDAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb2RpZmllZFVwZ3JhZGVMaXN0LnB1c2goeyByYXdOYW1lOiB1cGdyYWRlQXJyLCBpZDogLTEgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBtb2RpZmllZFVwZ3JhZGVMaXN0O1xyXG59XHJcbmV4cG9ydCB7IGdldENpdk5hbWVzLCBnZXRDaXZUZWNobm9sb2d5RGVzY3JpcHRpb24sIGdldENpdlRlY2hub2xvZ3lVcGdyYWRlcywgZ2V0QWdlVGllckxldmVsLCBmaWx0ZXJMb3dlc3RVcGdyYWRlc0Zyb21DYXRlZ29yaWVzIH07XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9henRlY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2F6dGVjcy5wbmdcIixcblx0XCIuL2JlbmdhbGlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9iZW5nYWxpcy5wbmdcIixcblx0XCIuL2JlcmJlcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2JlcmJlcnMucG5nXCIsXG5cdFwiLi9ib2hlbWlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2JvaGVtaWFucy5wbmdcIixcblx0XCIuL2JyaXRvbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2JyaXRvbnMucG5nXCIsXG5cdFwiLi9idWxnYXJpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9idWxnYXJpYW5zLnBuZ1wiLFxuXHRcIi4vYnVyZ3VuZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2J1cmd1bmRpYW5zLnBuZ1wiLFxuXHRcIi4vYnVybWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYnVybWVzZS5wbmdcIixcblx0XCIuL2J5emFudGluZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2J5emFudGluZXMucG5nXCIsXG5cdFwiLi9jZWx0cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvY2VsdHMucG5nXCIsXG5cdFwiLi9jaGluZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9jaGluZXNlLnBuZ1wiLFxuXHRcIi4vY3VtYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9jdW1hbnMucG5nXCIsXG5cdFwiLi9kcmF2aWRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9kcmF2aWRpYW5zLnBuZ1wiLFxuXHRcIi4vZXRoaW9waWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvZXRoaW9waWFucy5wbmdcIixcblx0XCIuL2ZyYW5rcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvZnJhbmtzLnBuZ1wiLFxuXHRcIi4vZ290aHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2dvdGhzLnBuZ1wiLFxuXHRcIi4vZ3VyamFyYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2d1cmphcmFzLnBuZ1wiLFxuXHRcIi4vaGluZHVzdGFuaXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2hpbmR1c3RhbmlzLnBuZ1wiLFxuXHRcIi4vaHVucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvaHVucy5wbmdcIixcblx0XCIuL2luY2FzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9pbmNhcy5wbmdcIixcblx0XCIuL2l0YWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9pdGFsaWFucy5wbmdcIixcblx0XCIuL2phcGFuZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9qYXBhbmVzZS5wbmdcIixcblx0XCIuL2tobWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9raG1lci5wbmdcIixcblx0XCIuL2tvcmVhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2tvcmVhbnMucG5nXCIsXG5cdFwiLi9saXRodWFuaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbGl0aHVhbmlhbnMucG5nXCIsXG5cdFwiLi9tYWd5YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9tYWd5YXJzLnBuZ1wiLFxuXHRcIi4vbWFsYXkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL21hbGF5LnBuZ1wiLFxuXHRcIi4vbWFsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbWFsaWFucy5wbmdcIixcblx0XCIuL21heWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbWF5YW5zLnBuZ1wiLFxuXHRcIi4vbW9uZ29scy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbW9uZ29scy5wbmdcIixcblx0XCIuL3BlcnNpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9wZXJzaWFucy5wbmdcIixcblx0XCIuL3BvbGVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9wb2xlcy5wbmdcIixcblx0XCIuL3BvcnR1Z3Vlc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3BvcnR1Z3Vlc2UucG5nXCIsXG5cdFwiLi9yb21hbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3JvbWFucy5wbmdcIixcblx0XCIuL3NhcmFjZW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9zYXJhY2Vucy5wbmdcIixcblx0XCIuL3NpY2lsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvc2ljaWxpYW5zLnBuZ1wiLFxuXHRcIi4vc2xhdnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3NsYXZzLnBuZ1wiLFxuXHRcIi4vc3BhbmlzaC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvc3BhbmlzaC5wbmdcIixcblx0XCIuL3RhdGFycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvdGF0YXJzLnBuZ1wiLFxuXHRcIi4vdGV1dG9ucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvdGV1dG9ucy5wbmdcIixcblx0XCIuL3R1cmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy90dXJrcy5wbmdcIixcblx0XCIuL3ZpZXRuYW1lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3ZpZXRuYW1lc2UucG5nXCIsXG5cdFwiLi92aWtpbmdzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy92aWtpbmdzLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXp0ZWNzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2F6dGVjcy5wbmdcIixcblx0XCIuL2F6dGVjcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9henRlY3MudHAucG5nXCIsXG5cdFwiLi9iZW5nYWxpcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9iZW5nYWxpcy5wbmdcIixcblx0XCIuL2JlbmdhbGlzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JlbmdhbGlzLnRwLnBuZ1wiLFxuXHRcIi4vYmVyYmVycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9iZXJiZXJzLnBuZ1wiLFxuXHRcIi4vYmVyYmVycy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9iZXJiZXJzLnRwLnBuZ1wiLFxuXHRcIi4vYm9oZW1pYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JvaGVtaWFucy5wbmdcIixcblx0XCIuL2JvaGVtaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ib2hlbWlhbnMudHAucG5nXCIsXG5cdFwiLi9icml0b25zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JyaXRvbnMucG5nXCIsXG5cdFwiLi9icml0b25zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JyaXRvbnMudHAucG5nXCIsXG5cdFwiLi9idWxnYXJpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1bGdhcmlhbnMucG5nXCIsXG5cdFwiLi9idWxnYXJpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1bGdhcmlhbnMudHAucG5nXCIsXG5cdFwiLi9idXJndW5kaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idXJndW5kaWFucy5wbmdcIixcblx0XCIuL2J1cmd1bmRpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1cmd1bmRpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vYnVybWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idXJtZXNlLnBuZ1wiLFxuXHRcIi4vYnVybWVzZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idXJtZXNlLnRwLnBuZ1wiLFxuXHRcIi4vYnl6YW50aW5lcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ieXphbnRpbmVzLnBuZ1wiLFxuXHRcIi4vYnl6YW50aW5lcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ieXphbnRpbmVzLnRwLnBuZ1wiLFxuXHRcIi4vY2VsdHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY2VsdHMucG5nXCIsXG5cdFwiLi9jZWx0cy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9jZWx0cy50cC5wbmdcIixcblx0XCIuL2NoaW5lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY2hpbmVzZS5wbmdcIixcblx0XCIuL2NoaW5lc2UudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY2hpbmVzZS50cC5wbmdcIixcblx0XCIuL2N1bWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9jdW1hbnMucG5nXCIsXG5cdFwiLi9jdW1hbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY3VtYW5zLnRwLnBuZ1wiLFxuXHRcIi4vZHJhdmlkaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9kcmF2aWRpYW5zLnBuZ1wiLFxuXHRcIi4vZHJhdmlkaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9kcmF2aWRpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vZXRoaW9waWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ldGhpb3BpYW5zLnBuZ1wiLFxuXHRcIi4vZXRoaW9waWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ldGhpb3BpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vZnJhbmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2ZyYW5rcy5wbmdcIixcblx0XCIuL2ZyYW5rcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9mcmFua3MudHAucG5nXCIsXG5cdFwiLi9nb3Rocy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9nb3Rocy5wbmdcIixcblx0XCIuL2dvdGhzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2dvdGhzLnRwLnBuZ1wiLFxuXHRcIi4vZ3VyamFyYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZ3VyamFyYXMucG5nXCIsXG5cdFwiLi9ndXJqYXJhcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ndXJqYXJhcy50cC5wbmdcIixcblx0XCIuL2hpbmR1c3RhbmlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2hpbmR1c3RhbmlzLnBuZ1wiLFxuXHRcIi4vaGluZHVzdGFuaXMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaGluZHVzdGFuaXMudHAucG5nXCIsXG5cdFwiLi9odW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2h1bnMucG5nXCIsXG5cdFwiLi9odW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2h1bnMudHAucG5nXCIsXG5cdFwiLi9pbmNhcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pbmNhcy5wbmdcIixcblx0XCIuL2luY2FzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2luY2FzLnRwLnBuZ1wiLFxuXHRcIi4vaW5kaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pbmRpYW5zLnBuZ1wiLFxuXHRcIi4vaW5kaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pbmRpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vaXRhbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaXRhbGlhbnMucG5nXCIsXG5cdFwiLi9pdGFsaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pdGFsaWFucy50cC5wbmdcIixcblx0XCIuL2phcGFuZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2phcGFuZXNlLnBuZ1wiLFxuXHRcIi4vamFwYW5lc2UudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvamFwYW5lc2UudHAucG5nXCIsXG5cdFwiLi9raG1lci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9raG1lci5wbmdcIixcblx0XCIuL2tobWVyLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2tobWVyLnRwLnBuZ1wiLFxuXHRcIi4va29yZWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9rb3JlYW5zLnBuZ1wiLFxuXHRcIi4va29yZWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9rb3JlYW5zLnRwLnBuZ1wiLFxuXHRcIi4vbGl0aHVhbmlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbGl0aHVhbmlhbnMucG5nXCIsXG5cdFwiLi9saXRodWFuaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9saXRodWFuaWFucy50cC5wbmdcIixcblx0XCIuL21hZ3lhcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFneWFycy5wbmdcIixcblx0XCIuL21hZ3lhcnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFneWFycy50cC5wbmdcIixcblx0XCIuL21hbGF5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hbGF5LnBuZ1wiLFxuXHRcIi4vbWFsYXkudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFsYXkudHAucG5nXCIsXG5cdFwiLi9tYWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hbGlhbnMucG5nXCIsXG5cdFwiLi9tYWxpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hbGlhbnMudHAucG5nXCIsXG5cdFwiLi9tYXlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWF5YW5zLnBuZ1wiLFxuXHRcIi4vbWF5YW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21heWFucy50cC5wbmdcIixcblx0XCIuL21vbmdvbHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbW9uZ29scy5wbmdcIixcblx0XCIuL21vbmdvbHMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbW9uZ29scy50cC5wbmdcIixcblx0XCIuL3BlcnNpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3BlcnNpYW5zLnBuZ1wiLFxuXHRcIi4vcGVyc2lhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcGVyc2lhbnMudHAucG5nXCIsXG5cdFwiLi9wb2xlcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wb2xlcy5wbmdcIixcblx0XCIuL3BvbGVzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3BvbGVzLnRwLnBuZ1wiLFxuXHRcIi4vcG9ydHVndWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wb3J0dWd1ZXNlLnBuZ1wiLFxuXHRcIi4vcG9ydHVndWVzZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wb3J0dWd1ZXNlLnRwLnBuZ1wiLFxuXHRcIi4vcm9tYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3JvbWFucy5wbmdcIixcblx0XCIuL3JvbWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9yb21hbnMudHAucG5nXCIsXG5cdFwiLi9zYXJhY2Vucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zYXJhY2Vucy5wbmdcIixcblx0XCIuL3NhcmFjZW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NhcmFjZW5zLnRwLnBuZ1wiLFxuXHRcIi4vc2ljaWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NpY2lsaWFucy5wbmdcIixcblx0XCIuL3NpY2lsaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zaWNpbGlhbnMudHAucG5nXCIsXG5cdFwiLi9zbGF2cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zbGF2cy5wbmdcIixcblx0XCIuL3NsYXZzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NsYXZzLnRwLnBuZ1wiLFxuXHRcIi4vc3BhbmlzaC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zcGFuaXNoLnBuZ1wiLFxuXHRcIi4vc3BhbmlzaC50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zcGFuaXNoLnRwLnBuZ1wiLFxuXHRcIi4vdGF0YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3RhdGFycy5wbmdcIixcblx0XCIuL3RhdGFycy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy90YXRhcnMudHAucG5nXCIsXG5cdFwiLi90ZXV0b25zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3RldXRvbnMucG5nXCIsXG5cdFwiLi90ZXV0b25zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3RldXRvbnMudHAucG5nXCIsXG5cdFwiLi90dXJrcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy90dXJrcy5wbmdcIixcblx0XCIuL3R1cmtzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3R1cmtzLnRwLnBuZ1wiLFxuXHRcIi4vdmlldG5hbWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy92aWV0bmFtZXNlLnBuZ1wiLFxuXHRcIi4vdmlldG5hbWVzZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy92aWV0bmFtZXNlLnRwLnBuZ1wiLFxuXHRcIi4vdmlraW5ncy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy92aWtpbmdzLnBuZ1wiLFxuXHRcIi4vdmlraW5ncy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy92aWtpbmdzLnRwLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9henRlY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2F6dGVjcy5wbmdcIixcblx0XCIuL2JlbmdhbGlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9iZW5nYWxpcy5wbmdcIixcblx0XCIuL2JlcmJlcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2JlcmJlcnMucG5nXCIsXG5cdFwiLi9ib2hlbWlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2JvaGVtaWFucy5wbmdcIixcblx0XCIuL2JyaXRvbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2JyaXRvbnMucG5nXCIsXG5cdFwiLi9idWxnYXJpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9idWxnYXJpYW5zLnBuZ1wiLFxuXHRcIi4vYnVyZ3VuZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2J1cmd1bmRpYW5zLnBuZ1wiLFxuXHRcIi4vYnVybWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYnVybWVzZS5wbmdcIixcblx0XCIuL2J5emFudGluZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2J5emFudGluZXMucG5nXCIsXG5cdFwiLi9jZWx0cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvY2VsdHMucG5nXCIsXG5cdFwiLi9jaGluZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9jaGluZXNlLnBuZ1wiLFxuXHRcIi4vY3VtYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9jdW1hbnMucG5nXCIsXG5cdFwiLi9kcmF2aWRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9kcmF2aWRpYW5zLnBuZ1wiLFxuXHRcIi4vZXRoaW9waWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvZXRoaW9waWFucy5wbmdcIixcblx0XCIuL2ZyYW5rcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvZnJhbmtzLnBuZ1wiLFxuXHRcIi4vZ290aHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2dvdGhzLnBuZ1wiLFxuXHRcIi4vZ3VyamFyYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2d1cmphcmFzLnBuZ1wiLFxuXHRcIi4vaGluZHVzdGFuaXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2hpbmR1c3RhbmlzLnBuZ1wiLFxuXHRcIi4vaHVucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvaHVucy5wbmdcIixcblx0XCIuL2luY2FzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9pbmNhcy5wbmdcIixcblx0XCIuL2l0YWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9pdGFsaWFucy5wbmdcIixcblx0XCIuL2phcGFuZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9qYXBhbmVzZS5wbmdcIixcblx0XCIuL2tobWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9raG1lci5wbmdcIixcblx0XCIuL2tvcmVhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2tvcmVhbnMucG5nXCIsXG5cdFwiLi9saXRodWFuaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbGl0aHVhbmlhbnMucG5nXCIsXG5cdFwiLi9tYWd5YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9tYWd5YXJzLnBuZ1wiLFxuXHRcIi4vbWFsYXkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL21hbGF5LnBuZ1wiLFxuXHRcIi4vbWFsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbWFsaWFucy5wbmdcIixcblx0XCIuL21heWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbWF5YW5zLnBuZ1wiLFxuXHRcIi4vbW9uZ29scy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbW9uZ29scy5wbmdcIixcblx0XCIuL3BlcnNpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9wZXJzaWFucy5wbmdcIixcblx0XCIuL3BvbGVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9wb2xlcy5wbmdcIixcblx0XCIuL3BvcnR1Z3Vlc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3BvcnR1Z3Vlc2UucG5nXCIsXG5cdFwiLi9yb21hbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3JvbWFucy5wbmdcIixcblx0XCIuL3NhcmFjZW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9zYXJhY2Vucy5wbmdcIixcblx0XCIuL3NpY2lsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvc2ljaWxpYW5zLnBuZ1wiLFxuXHRcIi4vc2xhdnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3NsYXZzLnBuZ1wiLFxuXHRcIi4vc3BhbmlzaC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvc3BhbmlzaC5wbmdcIixcblx0XCIuL3RhdGFycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvdGF0YXJzLnBuZ1wiLFxuXHRcIi4vdGV1dG9ucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvdGV1dG9ucy5wbmdcIixcblx0XCIuL3R1cmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy90dXJrcy5wbmdcIixcblx0XCIuL3ZpZXRuYW1lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3ZpZXRuYW1lc2UucG5nXCIsXG5cdFwiLi92aWtpbmdzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy92aWtpbmdzLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIHJldHVybiByLmtleXMoKS5tYXAocik7XHJcbn1cclxuZnVuY3Rpb24gaW1wb3J0QWxsSW50b01hcChyLCByZWxhdGl2ZUltYWdlUGF0aCkge1xyXG4gIGNvbnN0IG15TWFwID0gbmV3IE1hcCgpO1xyXG4gIHIua2V5cygpXHJcbiAgICAubWFwKHIpXHJcbiAgICAuZm9yRWFjaCgocmVsYXRpdmVVcmwpID0+IHtcclxuICAgICAgY29uc3QgY2l2S2V5ID0gcmVsYXRpdmVVcmwucmVwbGFjZShyZWxhdGl2ZUltYWdlUGF0aCwgXCJcIikucmVwbGFjZShcIi5wbmdcIiwgXCJcIikuc3BsaXQoXCIuXCIpWzBdO1xyXG4gICAgICBpZiAobXlNYXAuaGFzKGNpdktleSkpIHtcclxuICAgICAgICBjb25zdCBjaXZLZXlQYXJ0cyA9IHJlbGF0aXZlVXJsLnJlcGxhY2UocmVsYXRpdmVJbWFnZVBhdGgsIFwiXCIpLnJlcGxhY2UoXCIucG5nXCIsIFwiXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBjb25zdCBjaXZLZXkyID0gYCR7Y2l2S2V5UGFydHNbMF19LiR7Y2l2S2V5UGFydHNbMV19YDtcclxuICAgICAgICBteU1hcC5zZXQoY2l2S2V5MiwgcmVsYXRpdmVVcmwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG15TWFwLnNldChjaXZLZXksIHJlbGF0aXZlVXJsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIG15TWFwO1xyXG59XHJcbmNvbnN0IGNpdkljb25zTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL2ljb25zL1wiLCB0cnVlLCAvXFwuKHBuZykkLyksIFwiY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL1wiKTtcclxuY29uc3QgY2l2VW5pcXVlVW5pdEljb25zTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL2Npdi11bmlxdWUtdW5pdHMvXCIsIHRydWUsIC9cXC4ocG5nKSQvKSwgXCJjb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9cIik7XHJcbmNvbnN0IGNpdkVtYmxlbUltYWdlTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL2Npdi1lbWJsZW1zL1wiLCB0cnVlLCAvXFwuKHBuZykkLyksIFwiY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL1wiKTtcclxuY29uc3QgY2l2VXBncmFkZUljb25NYXAgPSBpbXBvcnRBbGxJbnRvTWFwKHJlcXVpcmUuY29udGV4dChcIi4vdXBncmFkZS1pY29ucy9cIiwgdHJ1ZSwgL1xcLihwbmcpJC8pLCBcImNvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL1wiKTtcclxuXHJcbmV4cG9ydCB7IGNpdkljb25zTWFwLCBjaXZVbmlxdWVVbml0SWNvbnNNYXAsIGNpdkVtYmxlbUltYWdlTWFwLCBjaXZVcGdyYWRlSWNvbk1hcCB9O1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXJiYWxlc3Rlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9hcmJhbGVzdGVyLnBuZ1wiLFxuXHRcIi4vYXJjaGl0ZWN0dXJlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2FyY2hpdGVjdHVyZS5wbmdcIixcblx0XCIuL2Fycm93c2xpdHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYXJyb3dzbGl0cy5wbmdcIixcblx0XCIuL2Fyc29uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Fyc29uLnBuZ1wiLFxuXHRcIi4vYXRvbmVtZW50LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2F0b25lbWVudC5wbmdcIixcblx0XCIuL2JhbGxpc3RpY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYmFsbGlzdGljcy5wbmdcIixcblx0XCIuL2JsYXN0IGZ1cm5hY2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYmxhc3QgZnVybmFjZS5wbmdcIixcblx0XCIuL2Jsb2NrIHByaW50aW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Jsb2NrIHByaW50aW5nLnBuZ1wiLFxuXHRcIi4vYmxvb2RsaW5lcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ibG9vZGxpbmVzLnBuZ1wiLFxuXHRcIi4vYm9ka2luIGFycm93LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2JvZGtpbiBhcnJvdy5wbmdcIixcblx0XCIuL2JvbWJhcmQgdG93ZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYm9tYmFyZCB0b3dlci5wbmdcIixcblx0XCIuL2JvdyBzYXcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYm93IHNhdy5wbmdcIixcblx0XCIuL2JyYWNlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9icmFjZXIucG5nXCIsXG5cdFwiLi9jYW5ub24gZ2FsbGVvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jYW5ub24gZ2FsbGVvbi5wbmdcIixcblx0XCIuL2NhcHBlZCByYW0ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2FwcGVkIHJhbS5wbmdcIixcblx0XCIuL2NhcmVlbmluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jYXJlZW5pbmcucG5nXCIsXG5cdFwiLi9jYXN0bGUucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2FzdGxlLnBuZ1wiLFxuXHRcIi4vY2FzdGxlLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Nhc3RsZS50cC5wbmdcIixcblx0XCIuL2NhdmFsaWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2NhdmFsaWVyLnBuZ1wiLFxuXHRcIi4vY2hhaW4gYmFyZGluZyBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jaGFpbiBiYXJkaW5nIGFybW9yLnBuZ1wiLFxuXHRcIi4vY2hhaW4gbWFpbCBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jaGFpbiBtYWlsIGFybW9yLnBuZ1wiLFxuXHRcIi4vY2hhbXBpb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2hhbXBpb24ucG5nXCIsXG5cdFwiLi9jaGVtaXN0cnkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2hlbWlzdHJ5LnBuZ1wiLFxuXHRcIi4vY3JvcCByb3RhdGlvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jcm9wIHJvdGF0aW9uLnBuZ1wiLFxuXHRcIi4vY3Jvc3Nib3dtYW4ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY3Jvc3Nib3dtYW4ucG5nXCIsXG5cdFwiLi9kYXJrLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2RhcmsucG5nXCIsXG5cdFwiLi9kYXJrLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2RhcmsudHAucG5nXCIsXG5cdFwiLi9kb3VibGUtYml0IGF4ZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9kb3VibGUtYml0IGF4ZS5wbmdcIixcblx0XCIuL2RyeSBkb2NrLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2RyeSBkb2NrLnBuZ1wiLFxuXHRcIi4vZWFnbGUgd2Fycmlvci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lYWdsZSB3YXJyaW9yLnBuZ1wiLFxuXHRcIi4vZWxpdGUgYmF0dGxlIGVsZXBoYW50LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VsaXRlIGJhdHRsZSBlbGVwaGFudC5wbmdcIixcblx0XCIuL2VsaXRlIGNhbm5vbiBnYWxsZW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VsaXRlIGNhbm5vbiBnYWxsZW9uLnBuZ1wiLFxuXHRcIi4vZWxpdGUgZWFnbGUgd2Fycmlvci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSBlYWdsZSB3YXJyaW9yLnBuZ1wiLFxuXHRcIi4vZWxpdGUgc2tpcm1pc2hlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSBza2lybWlzaGVyLnBuZ1wiLFxuXHRcIi4vZWxpdGUgc3RlcHBlIGxhbmNlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSBzdGVwcGUgbGFuY2VyLnBuZ1wiLFxuXHRcIi4vZWxpdGUgdW5pcXVlIHVuaXQucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZWxpdGUgdW5pcXVlIHVuaXQucG5nXCIsXG5cdFwiLi9mYWl0aC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mYWl0aC5wbmdcIixcblx0XCIuL2Zhc3QgZmlyZSBzaGlwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Zhc3QgZmlyZSBzaGlwLnBuZ1wiLFxuXHRcIi4vZmVydm9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZlcnZvci5wbmdcIixcblx0XCIuL2ZldWRhbC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mZXVkYWwucG5nXCIsXG5cdFwiLi9mZXVkYWwudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZmV1ZGFsLnRwLnBuZ1wiLFxuXHRcIi4vZmxldGNoaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZsZXRjaGluZy5wbmdcIixcblx0XCIuL2ZvcmdpbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZm9yZ2luZy5wbmdcIixcblx0XCIuL2ZvcnRpZmllZCB3YWxsLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZvcnRpZmllZCB3YWxsLnBuZ1wiLFxuXHRcIi4vZ2FsbGVvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9nYWxsZW9uLnBuZ1wiLFxuXHRcIi4vZ2lsbG5ldHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZ2lsbG5ldHMucG5nXCIsXG5cdFwiLi9nb2xkIG1pbmluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9nb2xkIG1pbmluZy5wbmdcIixcblx0XCIuL2dvbGQgc2hhZnQgbWluaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2dvbGQgc2hhZnQgbWluaW5nLnBuZ1wiLFxuXHRcIi4vZ3VhcmQgdG93ZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZ3VhcmQgdG93ZXIucG5nXCIsXG5cdFwiLi9oYWxiZXJkaWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hhbGJlcmRpZXIucG5nXCIsXG5cdFwiLi9oYW5kIGNhcnQucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGFuZCBjYXJ0LnBuZ1wiLFxuXHRcIi4vaGVhdGVkIHNob3QucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVhdGVkIHNob3QucG5nXCIsXG5cdFwiLi9oZWF2eSBjYW1lbC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF2eSBjYW1lbC5wbmdcIixcblx0XCIuL2hlYXZ5IGNhdiBhcmNoZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVhdnkgY2F2IGFyY2hlci5wbmdcIixcblx0XCIuL2hlYXZ5IGRlbW8gc2hpcC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF2eSBkZW1vIHNoaXAucG5nXCIsXG5cdFwiLi9oZWF2eSBwbG93LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlYXZ5IHBsb3cucG5nXCIsXG5cdFwiLi9oZWF2eSBzY29ycGlvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF2eSBzY29ycGlvbi5wbmdcIixcblx0XCIuL2hlcmJhbCBtZWRpY2luZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZXJiYWwgbWVkaWNpbmUucG5nXCIsXG5cdFwiLi9oZXJlc3kucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVyZXN5LnBuZ1wiLFxuXHRcIi4vaG9yc2UgY29sbGFyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hvcnNlIGNvbGxhci5wbmdcIixcblx0XCIuL2h1c2JhbmRyeS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9odXNiYW5kcnkucG5nXCIsXG5cdFwiLi9odXNzYXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaHVzc2FyLnBuZ1wiLFxuXHRcIi4vaWxsdW1pbmF0aW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2lsbHVtaW5hdGlvbi5wbmdcIixcblx0XCIuL2ltcGVyaWFsIGNhbWVsLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ltcGVyaWFsIGNhbWVsLnBuZ1wiLFxuXHRcIi4vaW1wZXJpYWwgc2tpcm1pc2hlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pbXBlcmlhbCBza2lybWlzaGVyLnBuZ1wiLFxuXHRcIi4vaW1wZXJpYWwucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaW1wZXJpYWwucG5nXCIsXG5cdFwiLi9pbXBlcmlhbC50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pbXBlcmlhbC50cC5wbmdcIixcblx0XCIuL2lyb24gY2FzdGluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pcm9uIGNhc3RpbmcucG5nXCIsXG5cdFwiLi9rZWVwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2tlZXAucG5nXCIsXG5cdFwiLi9sZWF0aGVyIGFyY2hlciBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9sZWF0aGVyIGFyY2hlciBhcm1vci5wbmdcIixcblx0XCIuL2xpZ2h0IGNhdmFscnkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbGlnaHQgY2F2YWxyeS5wbmdcIixcblx0XCIuL2xvbmcgc3dvcmRzbWFuLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2xvbmcgc3dvcmRzbWFuLnBuZ1wiLFxuXHRcIi4vbWFuLWF0LWFybXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbWFuLWF0LWFybXMucG5nXCIsXG5cdFwiLi9tYXNvbnJ5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL21hc29ucnkucG5nXCIsXG5cdFwiLi9tdXJkZXIgaG9sZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbXVyZGVyIGhvbGVzLnBuZ1wiLFxuXHRcIi4vb25hZ2VyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL29uYWdlci5wbmdcIixcblx0XCIuL3BhZGRlZCBhcmNoZXIgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGFkZGVkIGFyY2hlciBhcm1vci5wbmdcIixcblx0XCIuL3BhbGFkaW4ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGFsYWRpbi5wbmdcIixcblx0XCIuL3BhcnRoaWFuIHRhY3RpY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGFydGhpYW4gdGFjdGljcy5wbmdcIixcblx0XCIuL3Bpa2VtYW4ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGlrZW1hbi5wbmdcIixcblx0XCIuL3BsYXRlIGJhcmRpbmcgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGxhdGUgYmFyZGluZyBhcm1vci5wbmdcIixcblx0XCIuL3BsYXRlIG1haWwgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGxhdGUgbWFpbCBhcm1vci5wbmdcIixcblx0XCIuL3JlZGVtcHRpb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcmVkZW1wdGlvbi5wbmdcIixcblx0XCIuL3JpbmcgYXJjaGVyIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3JpbmcgYXJjaGVyIGFybW9yLnBuZ1wiLFxuXHRcIi4vc2FuY3RpdHkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2FuY3RpdHkucG5nXCIsXG5cdFwiLi9zY2FsZSBiYXJkaW5nIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NjYWxlIGJhcmRpbmcgYXJtb3IucG5nXCIsXG5cdFwiLi9zY2FsZSBtYWlsIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NjYWxlIG1haWwgYXJtb3IucG5nXCIsXG5cdFwiLi9zaGlwd3JpZ2h0LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NoaXB3cmlnaHQucG5nXCIsXG5cdFwiLi9zaWVnZSBlbmdpbmVlcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2llZ2UgZW5naW5lZXJzLnBuZ1wiLFxuXHRcIi4vc2llZ2Ugb25hZ2VyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NpZWdlIG9uYWdlci5wbmdcIixcblx0XCIuL3NpZWdlIHJhbS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zaWVnZSByYW0ucG5nXCIsXG5cdFwiLi9zcXVpcmVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NxdWlyZXMucG5nXCIsXG5cdFwiLi9zdG9uZSBtaW5pbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc3RvbmUgbWluaW5nLnBuZ1wiLFxuXHRcIi4vc3RvbmUgc2hhZnQgbWluaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3N0b25lIHNoYWZ0IG1pbmluZy5wbmdcIixcblx0XCIuL3N1cHBsaWVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3N1cHBsaWVzLnBuZ1wiLFxuXHRcIi4vdGhlb2NyYWN5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3RoZW9jcmFjeS5wbmdcIixcblx0XCIuL3RodW1iIHJpbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdGh1bWIgcmluZy5wbmdcIixcblx0XCIuL3RyYWNraW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3RyYWNraW5nLnBuZ1wiLFxuXHRcIi4vdHJlYWRtaWxsIGNyYW5lLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3RyZWFkbWlsbCBjcmFuZS5wbmdcIixcblx0XCIuL3R3by1oYW5kZWQgc3dvcmRzbWFuLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3R3by1oYW5kZWQgc3dvcmRzbWFuLnBuZ1wiLFxuXHRcIi4vdHdvLW1hbiBzYXcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdHdvLW1hbiBzYXcucG5nXCIsXG5cdFwiLi91bmlxdWUgdGVjaCBjYXN0bGUucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdW5pcXVlIHRlY2ggY2FzdGxlLnBuZ1wiLFxuXHRcIi4vdW5pcXVlIHRlY2ggaW1wZXJpYWwucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdW5pcXVlIHRlY2ggaW1wZXJpYWwucG5nXCIsXG5cdFwiLi93YXIgZ2FsbGV5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3dhciBnYWxsZXkucG5nXCIsXG5cdFwiLi93aGVlbGJhcnJvdy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy93aGVlbGJhcnJvdy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGxJbnRvTWFwKHIsIHJlbGF0aXZlSW1hZ2VQYXRoKSB7XHJcbiAgY29uc3QgbXlNYXAgPSBuZXcgTWFwKCk7XHJcbiAgci5rZXlzKClcclxuICAgIC5tYXAocilcclxuICAgIC5mb3JFYWNoKChyZWxhdGl2ZVVybCkgPT4ge1xyXG4gICAgICBjb25zdCBjaXZLZXkgPSByZWxhdGl2ZVVybC5yZXBsYWNlKHJlbGF0aXZlSW1hZ2VQYXRoLCBcIlwiKS5yZXBsYWNlKFwiLm1wM1wiLCBcIlwiKS5zcGxpdChcIi5cIilbMF07XHJcbiAgICAgIGlmIChteU1hcC5oYXMoY2l2S2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGNpdktleVBhcnRzID0gcmVsYXRpdmVVcmwucmVwbGFjZShyZWxhdGl2ZUltYWdlUGF0aCwgXCJcIikucmVwbGFjZShcIi5tcDNcIiwgXCJcIikuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IGNpdktleTIgPSBgJHtjaXZLZXlQYXJ0c1swXX0uJHtjaXZLZXlQYXJ0c1sxXX1gO1xyXG4gICAgICAgIG15TWFwLnNldChjaXZLZXkyLCByZWxhdGl2ZVVybCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXlNYXAuc2V0KGNpdktleSwgcmVsYXRpdmVVcmwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICByZXR1cm4gbXlNYXA7XHJcbn1cclxuXHJcbmNvbnN0IGNpdlNvdW5kTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL3NvdW5kcy9cIiwgdHJ1ZSwgL1xcLihtcDMpJC8pLCBcImNvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvXCIpO1xyXG5cclxuZnVuY3Rpb24gYnVpbGRBdWRpb0VsZW1lbnQoY2l2TmFtZSkge1xyXG4gIGNvbnN0IGF1ZGlvRWxlbWVudCA9IG5ldyBBdWRpbyhgLi8ke2NpdlNvdW5kTWFwLmdldChjaXZOYW1lLnRvTG93ZXJDYXNlKCkpfWApO1xyXG4gIHJldHVybiBhdWRpb0VsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QXVkaW9Tb3VyY2UoY2l2TmFtZSkge1xyXG4gIHJldHVybiBjaXZTb3VuZE1hcC5nZXQoY2l2TmFtZS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYnVpbGRBdWRpb0VsZW1lbnQsIGdldEF1ZGlvU291cmNlIH07XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9henRlY3MubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9henRlY3MubXAzXCIsXG5cdFwiLi9iZW5nYWxpcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2JlbmdhbGlzLm1wM1wiLFxuXHRcIi4vYmVyYmVycy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2JlcmJlcnMubXAzXCIsXG5cdFwiLi9ib2hlbWlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9ib2hlbWlhbnMubXAzXCIsXG5cdFwiLi9icml0b25zLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvYnJpdG9ucy5tcDNcIixcblx0XCIuL2J1bGdhcmlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9idWxnYXJpYW5zLm1wM1wiLFxuXHRcIi4vYnVyZ3VuZGlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9idXJndW5kaWFucy5tcDNcIixcblx0XCIuL2J1cm1lc2UubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9idXJtZXNlLm1wM1wiLFxuXHRcIi4vYnl6YW50aW5lcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2J5emFudGluZXMubXAzXCIsXG5cdFwiLi9jZWx0cy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2NlbHRzLm1wM1wiLFxuXHRcIi4vY2hpbmVzZS5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2NoaW5lc2UubXAzXCIsXG5cdFwiLi9jdW1hbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9jdW1hbnMubXAzXCIsXG5cdFwiLi9kcmF2aWRpYW5zLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvZHJhdmlkaWFucy5tcDNcIixcblx0XCIuL2V0aGlvcGlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9ldGhpb3BpYW5zLm1wM1wiLFxuXHRcIi4vZnJhbmtzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvZnJhbmtzLm1wM1wiLFxuXHRcIi4vZ290aHMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9nb3Rocy5tcDNcIixcblx0XCIuL2d1cmphcmFzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvZ3VyamFyYXMubXAzXCIsXG5cdFwiLi9oaW5kdXN0YW5pcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2hpbmR1c3RhbmlzLm1wM1wiLFxuXHRcIi4vaHVucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2h1bnMubXAzXCIsXG5cdFwiLi9pbmNhcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2luY2FzLm1wM1wiLFxuXHRcIi4vaXRhbGlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9pdGFsaWFucy5tcDNcIixcblx0XCIuL2phcGFuZXNlLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvamFwYW5lc2UubXAzXCIsXG5cdFwiLi9raG1lci5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2tobWVyLm1wM1wiLFxuXHRcIi4va29yZWFucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2tvcmVhbnMubXAzXCIsXG5cdFwiLi9saXRodWFuaWFucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2xpdGh1YW5pYW5zLm1wM1wiLFxuXHRcIi4vbWFneWFycy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL21hZ3lhcnMubXAzXCIsXG5cdFwiLi9tYWxheS5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL21hbGF5Lm1wM1wiLFxuXHRcIi4vbWFsaWFucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL21hbGlhbnMubXAzXCIsXG5cdFwiLi9tYXlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9tYXlhbnMubXAzXCIsXG5cdFwiLi9tb25nb2xzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvbW9uZ29scy5tcDNcIixcblx0XCIuL3BlcnNpYW5zLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvcGVyc2lhbnMubXAzXCIsXG5cdFwiLi9wb2xlcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3BvbGVzLm1wM1wiLFxuXHRcIi4vcG9ydHVndWVzZS5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3BvcnR1Z3Vlc2UubXAzXCIsXG5cdFwiLi9yb21hbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9yb21hbnMubXAzXCIsXG5cdFwiLi9zYXJhY2Vucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3NhcmFjZW5zLm1wM1wiLFxuXHRcIi4vc2ljaWxpYW5zLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvc2ljaWxpYW5zLm1wM1wiLFxuXHRcIi4vc2xhdnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9zbGF2cy5tcDNcIixcblx0XCIuL3NwYW5pc2gubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9zcGFuaXNoLm1wM1wiLFxuXHRcIi4vdGF0YXJzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvdGF0YXJzLm1wM1wiLFxuXHRcIi4vdGV1dG9ucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3RldXRvbnMubXAzXCIsXG5cdFwiLi90dXJrcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3R1cmtzLm1wM1wiLFxuXHRcIi4vdmlldG5hbWVzZS5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3ZpZXRuYW1lc2UubXAzXCIsXG5cdFwiLi92aWtpbmdzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvdmlraW5ncy5tcDNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihtcDMpJFwiOyIsImltcG9ydCB7IGNpdkljb25zTWFwLCBjaXZVbmlxdWVVbml0SWNvbnNNYXAsIGNpdkVtYmxlbUltYWdlTWFwIH0gZnJvbSBcIi4uL2Npdi1pbWFnZXMvaW1hZ2UtaGVscGVyXCI7XHJcbmltcG9ydCB7IGdldENpdlRlY2hub2xvZ3lEZXNjcmlwdGlvbiB9IGZyb20gXCIuLi9jaXYtaW1hZ2VzL2Npdi1kYXRhL2RhdGEtaGVscGVyXCI7XHJcbmltcG9ydCB7IGJ1aWxkQXVkaW9FbGVtZW50LCBnZXRBdWRpb1NvdXJjZSB9IGZyb20gXCIuLi9jaXYtc291bmRzL3NvdW5kLWhlbHBlclwiO1xyXG5cclxuaW1wb3J0IHsgQ2l2VXBncmFkZU92ZXJsYXkgfSBmcm9tIFwiLi4vY2l2LXVwZ3JhZGUtb3ZlcmxheS9jaXYtdXBncmFkZS1vdmVybGF5XCI7XHJcblxyXG5jbGFzcyBDaXZUZWNoT3ZlcmxheSB7XHJcbiAgX3NvdW5kc1RvUGxheTtcclxuICBfc291bmRJbmRleDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3NvdW5kSW5kZXggPSAwO1xyXG4gICAgdGhpcy5fc291bmRzVG9QbGF5ID0gW107XHJcbiAgfVxyXG4gIGJ1aWxkRWxlbWVudChjaXZOYW1lLCB0ZWNoT3B0aW9ucywgYXV0b0hpZGVEZWxheSkge1xyXG4gICAgdGhpcy5fc291bmRzVG9QbGF5LnB1c2goY2l2TmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGNvbnN0IG1haW5EaXYgPSB0aGlzLmJ1aWxkTWFpbkRpdkNvbnRhaW5lcihhdXRvSGlkZURlbGF5KTtcclxuXHJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hbWVDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcImNpdi1uYW1lLWNvbnRhaW5lclwiKTtcclxuICAgIG5hbWVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENpdkljb25FbGVtZW50KGNpdk5hbWUpKTtcclxuICAgIG5hbWVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZE5hbWVFbGVtZW50KGNpdk5hbWUpKTtcclxuICAgIG5hbWVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENpdlVuaXF1ZVVuaXQoY2l2TmFtZSkpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyRGl2KTtcclxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENpdkRlc2NyaXB0aW9uKGNpdk5hbWUpKTtcclxuXHJcbiAgICBjb25zdCBjaXZVcGdyYWRlcyA9IG5ldyBDaXZVcGdyYWRlT3ZlcmxheSgpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChjaXZVcGdyYWRlcy5idWlsZEVsZW1lbnQoY2l2TmFtZSwgdGVjaE9wdGlvbnMpKTtcclxuXHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRDaXZFbWJsZW0oY2l2TmFtZSkpO1xyXG4gICAgcmV0dXJuIG1haW5EaXY7XHJcbiAgfVxyXG4gIGJ1aWxkU291bmRzKCkge1xyXG4gICAgY29uc3Qgc291bmRFbGVtZW50ID0gYnVpbGRBdWRpb0VsZW1lbnQodGhpcy5fc291bmRzVG9QbGF5W3RoaXMuX3NvdW5kSW5kZXhdLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgc291bmRFbGVtZW50Lm9uZW5kZWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NvdW5kSW5kZXgrKztcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHNUb1BsYXlbdGhpcy5fc291bmRJbmRleF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAvLyBwbGF5IG5leHQgc291bmRcclxuICAgICAgICBzb3VuZEVsZW1lbnQuc3JjID0gZ2V0QXVkaW9Tb3VyY2UodGhpcy5fc291bmRzVG9QbGF5W3RoaXMuX3NvdW5kSW5kZXhdKTtcclxuICAgICAgICBzb3VuZEVsZW1lbnQucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHNvdW5kRWxlbWVudDtcclxuICB9XHJcbiAgYnVpbGRNYWluRGl2Q29udGFpbmVyKGF1dG9IaWRlRGVsYXkpIHtcclxuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lclwiKTtcclxuICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFzay1pbWctdmVydGljYWxcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXYtdGVjaC1hbmltYXRpb24tbGVhdmUtYWN0aXZlXCIpO1xyXG4gICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNpdi10ZWNoLWFuaW1hdGlvbi1lbnRlci1hY3RpdmVcIik7XHJcbiAgICAgIGlmIChhdXRvSGlkZURlbGF5ID4gLTEpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiY2l2LXRlY2gtYW5pbWF0aW9uLWVudGVyLWFjdGl2ZVwiKTtcclxuICAgICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2l2LXRlY2gtYW5pbWF0aW9uLWxlYXZlLWFjdGl2ZVwiKTtcclxuICAgICAgICB9LCBhdXRvSGlkZURlbGF5KTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xyXG4gIH1cclxuICBidWlsZE5hbWVFbGVtZW50KGNpdk5hbWUpIHtcclxuICAgIGNvbnN0IG5hbWVFbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hbWVFbGVtZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjaXYtbmFtZVwiKTtcclxuXHJcbiAgICBjb25zdCBjaXZOYW1lVGV4dCA9IGAke2Npdk5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCl9JHtjaXZOYW1lLnNsaWNlKDEpfWA7XHJcbiAgICBuYW1lRWxlbWVudERpdi5pbm5lclRleHQgPSBjaXZOYW1lVGV4dDtcclxuICAgIHJldHVybiBuYW1lRWxlbWVudERpdjtcclxuICB9XHJcbiAgYnVpbGRDaXZJY29uRWxlbWVudChjaXZOYW1lKSB7XHJcbiAgICBjb25zdCBjaXZJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjaXZJY29uLmNsYXNzTGlzdC5hZGQoXCJjaXYtaWNvblwiKTtcclxuICAgIGNpdkljb24uc3JjID0gYC4vJHtjaXZJY29uc01hcC5nZXQoY2l2TmFtZSl9YDtcclxuICAgIHJldHVybiBjaXZJY29uO1xyXG4gIH1cclxuICBidWlsZENpdkRlc2NyaXB0aW9uKGNpdk5hbWUpIHtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJjaXYtZGVzY3JpcHRpb25cIik7XHJcbiAgICBkZXNjcmlwdGlvbkRpdi5pbm5lckhUTUwgPSBnZXRDaXZUZWNobm9sb2d5RGVzY3JpcHRpb24oY2l2TmFtZSk7XHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb25EaXY7XHJcbiAgfVxyXG4gIGJ1aWxkQ2l2VW5pcXVlVW5pdChjaXZOYW1lKSB7XHJcbiAgICBjb25zdCBjaXZJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjaXZJY29uLmNsYXNzTGlzdC5hZGQoXCJjaXYtdW5pcXVlLXVuaXQtaWNvblwiKTtcclxuICAgIGNpdkljb24uc3JjID0gYC4vJHtjaXZVbmlxdWVVbml0SWNvbnNNYXAuZ2V0KGNpdk5hbWUpfWA7XHJcbiAgICByZXR1cm4gY2l2SWNvbjtcclxuICB9XHJcbiAgYnVpbGRDaXZFbWJsZW0oY2l2TmFtZSkge1xyXG4gICAgY29uc3QgY2l2SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2l2SWNvbi5jbGFzc0xpc3QuYWRkKFwiY2l2LWVtYmxlbVwiKTtcclxuICAgIGNpdkljb24uc3JjID0gYC4vJHtjaXZFbWJsZW1JbWFnZU1hcC5nZXQoY2l2TmFtZSl9YDtcclxuICAgIHJldHVybiBjaXZJY29uO1xyXG4gIH1cclxuICBjbGVhckNpdkRpdnMoKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lclwiKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDaXZUZWNoT3ZlcmxheSB9O1xyXG4iLCJpbXBvcnQgeyBjaXZVcGdyYWRlSWNvbk1hcCB9IGZyb20gXCIuLi9jaXYtaW1hZ2VzL2ltYWdlLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRDaXZUZWNobm9sb2d5VXBncmFkZXMsIGdldEFnZVRpZXJMZXZlbCwgZmlsdGVyTG93ZXN0VXBncmFkZXNGcm9tQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi9jaXYtaW1hZ2VzL2Npdi1kYXRhL2RhdGEtaGVscGVyXCI7XHJcbmNsYXNzIENpdlVwZ3JhZGVPdmVybGF5IHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgX3RlY2hPcHRpb25zO1xyXG4gIGJ1aWxkRWxlbWVudChjaXZOYW1lLCB0ZWNoT3B0aW9ucykge1xyXG4gICAgdGhpcy5fdGVjaE9wdGlvbnMgPSB0ZWNoT3B0aW9ucztcclxuICAgIGNvbnN0IG1haW5EaXYgPSB0aGlzLmJ1aWxkVXBncmFkZUNvbnRhaW5lcihjaXZOYW1lKTtcclxuICAgIHJldHVybiBtYWluRGl2O1xyXG4gIH1cclxuICBidWlsZFVwZ3JhZGVDb250YWluZXIoY2l2TmFtZSkge1xyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJjaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBhbGxUZWNocyA9IGdldENpdlRlY2hub2xvZ3lVcGdyYWRlcyhjaXZOYW1lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGVjaCBvcHRpb25zOiBcIiwgdGhpcy5fdGVjaE9wdGlvbnMpO1xyXG4gICAgaWYgKHRoaXMuX3RlY2hPcHRpb25zLl9zaG93QmxhY2tzbWl0aFRlY2gpIHtcclxuICAgICAgY29uc3QgcmVkdWNlZEJzVGVjaHMgPSBmaWx0ZXJMb3dlc3RVcGdyYWRlc0Zyb21DYXRlZ29yaWVzKFtcImJsYWNrc21pdGhcIiwgXCJhcmNoZXJ5IHJhbmdlXCJdLCBhbGxUZWNocyk7XHJcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEljb25Db250YWluZXIocmVkdWNlZEJzVGVjaHMpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl90ZWNoT3B0aW9ucy5fc2hvd01vbmFzdGFyeVRlY2gpIHtcclxuICAgICAgY29uc3QgcmVkdWNlZEVjb1RlY2hzID0gZmlsdGVyTG93ZXN0VXBncmFkZXNGcm9tQ2F0ZWdvcmllcyhbXCJsdW1iZXIgY2FtcFwiLCBcIm1pbGxcIiwgXCJ1bml2ZXJzaXR5XCIsIFwic3RhYmxlXCJdLCBhbGxUZWNocyk7XHJcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEljb25Db250YWluZXIocmVkdWNlZEVjb1RlY2hzKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fdGVjaE9wdGlvbnMuX3Nob3dVbml2ZXJzaXR5VGVjaCkge1xyXG4gICAgICBjb25zdCByZWR1Y2VkTW9ua1RlY2hzID0gZmlsdGVyTG93ZXN0VXBncmFkZXNGcm9tQ2F0ZWdvcmllcyhbXCJtb25hc3RlcnlcIl0sIGFsbFRlY2hzKTtcclxuICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkSWNvbkNvbnRhaW5lcihyZWR1Y2VkTW9ua1RlY2hzLnNsaWNlKDAsIDUpKSk7XHJcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEljb25Db250YWluZXIocmVkdWNlZE1vbmtUZWNocy5zbGljZSg1LCByZWR1Y2VkTW9ua1RlY2hzLmxlbmd0aCkpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYWluRGl2O1xyXG4gIH1cclxuICBidWlsZEljb25Db250YWluZXIoYXJyYXlPZlVwZ3JhZGVzKSB7XHJcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaXYtdXBncmFkZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgYXJyYXlPZlVwZ3JhZGVzLmZvckVhY2goKHVwZ3JhZGUpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2VQYXRoID0gYC4vJHtjaXZVcGdyYWRlSWNvbk1hcC5nZXQodXBncmFkZS5yYXdOYW1lLnRvTG93ZXJDYXNlKCkpfWA7XHJcbiAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gdGhpcy5idWlsZEljb24oaW1hZ2VQYXRoLCB1cGdyYWRlLmlkID09PSAtMSk7XHJcblxyXG4gICAgICBjb25zdCBudW1UaWVycyA9IGdldEFnZVRpZXJMZXZlbCh1cGdyYWRlLnJhd05hbWUpO1xyXG4gICAgICBjb25zdCB0aWVyQ29udGFpbmVyID0gdGhpcy5idWlsZFRpZXJDb250YWluZXIobnVtVGllcnMsIHVwZ3JhZGUuaWQgPT09IC0xKTtcclxuICAgICAgaWNvbkVsZW1lbnQuYXBwZW5kQ2hpbGQodGllckNvbnRhaW5lcik7XHJcblxyXG4gICAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xyXG4gIH1cclxuICBidWlsZEljb24oaW1hZ2VQYXRoLCBkaXNhYmxlSWNvbikge1xyXG4gICAgY29uc3QgdXBncmFkZUljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdXBncmFkZUljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwZ3JhZGUtaWNvbi1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgdXBncmFkZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIHVwZ3JhZGVJY29uLnNyYyA9IGltYWdlUGF0aDtcclxuICAgIHVwZ3JhZGVJY29uLmNsYXNzTGlzdC5hZGQoXCJ1cGdyYWRlLWljb25cIik7XHJcbiAgICB1cGdyYWRlSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGdyYWRlSWNvbik7XHJcblxyXG4gICAgaWYgKGRpc2FibGVJY29uKSB7XHJcbiAgICAgIGNvbnN0IG1lc29EaXNhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbWVzb0Rpc2FibGUuY2xhc3NMaXN0LmFkZChcImRpc2FibGUtaWNvbi1tZXNvXCIpO1xyXG4gICAgICB1cGdyYWRlSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNvRGlzYWJsZSk7XHJcbiAgICAgIHVwZ3JhZGVJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwZ3JhZGVJY29uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cGdyYWRlSWNvbkNvbnRhaW5lcjtcclxuICB9XHJcbiAgYnVpbGRUaWVyQ29udGFpbmVyKHRpZXJMZXZlbHMsIGZ1bGxEaXNhYmxlZCkge1xyXG4gICAgY29uc3QgdGllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ1cGdyYWRlLXRpZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKGZ1bGxEaXNhYmxlZCkge1xyXG4gICAgICB0aWVyLmNsYXNzTGlzdC5hZGQoYGRpc2FibGVkLTFgKTtcclxuICAgICAgdGllckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWVyKTtcclxuICAgIH0gZWxzZSBpZiAodGllckxldmVscyA9PT0gLTEgJiYgIWZ1bGxEaXNhYmxlZCkge1xyXG4gICAgICB0aWVyLmNsYXNzTGlzdC5hZGQoYGVuYWJsZWQtMWApO1xyXG4gICAgICB0aWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpZXIpO1xyXG4gICAgfSBlbHNlIGlmICh0aWVyTGV2ZWxzID4gLTEpIHtcclxuICAgICAgLy8rMSBmb3IgMCBvZmZzZXRcclxuICAgICAgY29uc3Qgb2Zmc2V0VGllcnMgPSB0aWVyTGV2ZWxzICsgMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvZmZzZXRUaWVyczsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbXVsdGlUaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtdWx0aVRpZXIuY2xhc3NMaXN0LmFkZChgZW5hYmxlZC0zYCk7XHJcbiAgICAgICAgdGllckNvbnRhaW5lci5hcHBlbmRDaGlsZChtdWx0aVRpZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aWVyTGV2ZWxzID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZVRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpc2FibGVUaWVyLmNsYXNzTGlzdC5hZGQoYGRpc2FibGVkLTNgKTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlVGllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpc2FibGVUaWVyMS5jbGFzc0xpc3QuYWRkKGBkaXNhYmxlZC0zYCk7XHJcbiAgICAgICAgdGllckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNhYmxlVGllcik7XHJcbiAgICAgICAgdGllckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNhYmxlVGllcjEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aWVyTGV2ZWxzID09PSAxKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZVRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpc2FibGVUaWVyLmNsYXNzTGlzdC5hZGQoYGRpc2FibGVkLTNgKTtcclxuICAgICAgICB0aWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2FibGVUaWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpZXJDb250YWluZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDaXZVcGdyYWRlT3ZlcmxheSB9O1xyXG4iLCJjbGFzcyBUZWNobm9sb2d5T3ZlcmxheVN0b3JlIHtcclxuICBfdXNlU291bmQgPSBmYWxzZTtcclxuICBfYXV0b0hpZGUgPSB0cnVlO1xyXG4gIF9zaG93VGVjaE92ZXJsYXkgPSB0cnVlO1xyXG4gIF9zaG93QmxhY2tzbWl0aFRlY2ggPSBmYWxzZTtcclxuICBfc2hvd1VuaXZlcnNpdHlUZWNoID0gZmFsc2U7XHJcbiAgX3Nob3dNb25hc3RhcnlUZWNoID0gZmFsc2U7XHJcbiAgX3Nob3dEb2NrVGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93QmFycmFja3NUZWNoID0gZmFsc2U7XHJcbiAgX3Nob3dBcmNoZXJ5VGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93U3RhYmxlVGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93U2llZ2VXb3Jrc2hvcFRlY2ggPSBmYWxzZTtcclxuICBfYXV0b0hpZGVEZWxheSA9IDEyO1xyXG4gIF9udW1DaXZzUGVyUm93ID0gNztcclxuICBfbnVtUGxheWVyc0luTWF0Y2ggPSAyO1xyXG4gIF9sYWJlbF91c2VySWQgPSBcIlwiO1xyXG59XHJcbmNsYXNzIFVJU2V0dGluZ3NPdmVybGF5U3RvcmUge1xyXG4gIF9mb250U2l6ZSA9IDIyO1xyXG4gIF90ZWNoQmFja2dyb3VuZE9wYWNpdHkgPSAwLjg7XHJcbn1cclxuY2xhc3MgU2Vuc2l0aXZlRGF0YVN0b3JlIHtcclxuICBfd2Vic29ja2V0X2lwID0gXCJcIjtcclxuICBfd2Vic29ja2V0X3Bhc3N3b3JkID0gXCJcIjtcclxuICBfd2Vic29ja2V0X3BvcnQgPSA0NDU1O1xyXG59XHJcblxyXG5jbGFzcyBMb2NhbFNhdmVkRGF0YSB7XHJcbiAgX3RlY2hPdmVybGF5U3RvcmU7XHJcbiAgX3VpU2V0dGluZ3NPdmVybGF5U3RvcmU7XHJcbiAgX3NlbnNpdGl2ZURhdGFTdG9yZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl90ZWNoT3ZlcmxheVN0b3JlID0gbmV3IFRlY2hub2xvZ3lPdmVybGF5U3RvcmUoKTtcclxuICAgIHRoaXMuX3VpU2V0dGluZ3NPdmVybGF5U3RvcmUgPSBuZXcgVUlTZXR0aW5nc092ZXJsYXlTdG9yZSgpO1xyXG4gICAgdGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlID0gbmV3IFNlbnNpdGl2ZURhdGFTdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZURhdGEoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgU2F2aW5nICR7dGhpcy5fdGVjaE92ZXJsYXlTdG9yZX1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVjaE92ZXJsYXlTdG9yZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLl90ZWNoT3ZlcmxheVN0b3JlKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgU2F2aW5nICR7dGhpcy5fdWlTZXR0aW5nc092ZXJsYXlTdG9yZX1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidWlTZXR0aW5nc092ZXJsYXlTdG9yZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLl91aVNldHRpbmdzT3ZlcmxheVN0b3JlKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNhdmluZ1wiLCB0aGlzLl9zZW5zaXRpdmVEYXRhU3RvcmUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZW5zaXRpdmVEYXRhU3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlKSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRGF0YSgpIHtcclxuICAgIGNvbnN0IHRlY2hEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlY2hPdmVybGF5U3RvcmVcIikpO1xyXG4gICAgaWYgKHRlY2hEYXRhKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fdGVjaE92ZXJsYXlTdG9yZSwgdGVjaERhdGEpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWQpO1xyXG4gICAgICBpZiAoIXRoaXMuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZCkge1xyXG4gICAgICAgIC8vIHRoaXMuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XHJcbiAgICAgICAgdGhpcy5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLl90ZWNoT3ZlcmxheVN0b3JlID0gdGVjaERhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1aURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidWlTZXR0aW5nc092ZXJsYXlTdG9yZVwiKSk7XHJcbiAgICBpZiAodWlEYXRhKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fdWlTZXR0aW5nc092ZXJsYXlTdG9yZSwgdWlEYXRhKTtcclxuICAgICAgLy8gdGhpcy5fdWlTZXR0aW5nc092ZXJsYXlTdG9yZSA9IHVpRGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbnNpdGl2ZURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Vuc2l0aXZlRGF0YVN0b3JlXCIpKTtcclxuICAgIGlmIChzZW5zaXRpdmVEYXRhKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlLCBzZW5zaXRpdmVEYXRhKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhcIkxvYWRlZFwiLCB0aGlzLl9zZW5zaXRpdmVEYXRhU3RvcmUpO1xyXG4gICAgICAvLyB0aGlzLl9zZW5zaXRpdmVEYXRhU3RvcmUgPSBzZW5zaXRpdmVEYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlRGF0YShrZXkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMb2NhbFNhdmVkRGF0YSB9O1xyXG4iLCJpbXBvcnQgeyBTb2NrZXRFbnVtcyB9IGZyb20gXCIuLi9jb21tb24tZGF0YVwiO1xyXG5pbXBvcnQgeyBnZXRDaXZOYW1lcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWRhdGEvZGF0YS1oZWxwZXJcIjtcclxuaW1wb3J0IHsgQ2l2VGVjaE92ZXJsYXkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaXYtdGVjaC1vdmVybGF5L2Npdi10ZWNoLW92ZXJsYXlcIjtcclxuY2xhc3MgQ2xpZW50UGFnZSB7XHJcbiAgX2RhdGFTdG9yZTtcclxuICBfY2xpZW50V2Vic29ja2V0O1xyXG4gIF90ZWNoT3ZlcmxheTtcclxuICBjb25zdHJ1Y3RvcihkYXRhU3RvcmUsIGNsaWVudFdlYnNvY2tldCkge1xyXG4gICAgdGhpcy5fZGF0YVN0b3JlID0gZGF0YVN0b3JlO1xyXG4gICAgdGhpcy5fY2xpZW50V2Vic29ja2V0ID0gY2xpZW50V2Vic29ja2V0O1xyXG4gICAgdGhpcy5fdGVjaE92ZXJsYXkgPSBuZXcgQ2l2VGVjaE92ZXJsYXkoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvYnMtd2Vic29ja2V0LW92ZXJsYXktcHVzaC1ldmVudFwiLCB0aGlzLmRpZ2VzdFdlYnNvY2tldE1lc3NhZ2UuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIGJ1aWxkSHRtbCgpIHtcclxuICAgIGNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkeW5hbWljLWNvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgY2xpZW50UGFnZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjbGllbnRQYWdlRE9NLmNsYXNzTGlzdC5hZGQoXCJjbGllbnQtcGFnZVwiKTtcclxuICAgIGNsaWVudFBhZ2VET00uaWQgPSBcImNsaWVudC1wYWdlXCI7XHJcbiAgICBib2R5Q29udGVudC5hcHBlbmRDaGlsZChjbGllbnRQYWdlRE9NKTtcclxuICB9XHJcblxyXG4gIGRpZ2VzdFdlYnNvY2tldE1lc3NhZ2UoZXZlbnQpIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShldmVudC5kZXRhaWwuZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJhd0RhdGEpO1xyXG4gICAgICBpZiAocmF3RGF0YS50eXBlID09PSBTb2NrZXRFbnVtcy5BR0VPVkVSTEFZUFVTSCkge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsaWVudC1wYWdlXCIpO1xyXG4gICAgICAgIHRoaXMuX3RlY2hPdmVybGF5LmNsZWFyQ2l2RGl2cygpO1xyXG4gICAgICAgIGlmIChyYXdEYXRhLmRhdGEuc2hvd092ZXJsYXkpIHtcclxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxPcHRpb25zID0gKCh7IF9zaG93QmxhY2tzbWl0aFRlY2gsIF9zaG93VW5pdmVyc2l0eVRlY2gsIF9zaG93TW9uYXN0YXJ5VGVjaCB9KSA9PiAoeyBfc2hvd0JsYWNrc21pdGhUZWNoLCBfc2hvd1VuaXZlcnNpdHlUZWNoLCBfc2hvd01vbmFzdGFyeVRlY2ggfSkpKHJhd0RhdGEuZGF0YSk7XHJcbiAgICAgICAgICByYXdEYXRhLmRhdGEucGlja2VkQ2l2cy5mb3JFYWNoKChwaWNrZWRDaXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJhd0RhdGEuZGF0YS5fYXV0b0hpZGUpIHtcclxuICAgICAgICAgICAgICBjbGllbnRQYWdlLmFwcGVuZENoaWxkKHRoaXMuX3RlY2hPdmVybGF5LmJ1aWxkRWxlbWVudChwaWNrZWRDaXYudG9Mb3dlckNhc2UoKSwgYWRkaXRpb25hbE9wdGlvbnMsIHBhcnNlSW50KHJhd0RhdGEuZGF0YS5fYXV0b0hpZGVEZWxheSkgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY2xpZW50UGFnZS5hcHBlbmRDaGlsZCh0aGlzLl90ZWNoT3ZlcmxheS5idWlsZEVsZW1lbnQocGlja2VkQ2l2LnRvTG93ZXJDYXNlKCksIGFkZGl0aW9uYWxPcHRpb25zLCAtMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAocmF3RGF0YS5kYXRhLnBpY2tlZENpdnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAocmF3RGF0YS5kYXRhLl91c2VTb3VuZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNvdW5kRWxlbWVudCA9IHRoaXMuX3RlY2hPdmVybGF5LmJ1aWxkU291bmRzKCk7XHJcbiAgICAgICAgICAgICAgY2xpZW50UGFnZS5hcHBlbmRDaGlsZChzb3VuZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc291bmRFbGVtZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRSYW5kb21DaXYoKSB7XHJcbiAgICBjb25zdCBjaXZOYW1lcyA9IGdldENpdk5hbWVzKCk7XHJcbiAgICByZXR1cm4gY2l2TmFtZXNbdGhpcy5yYW5kb21JbnRGcm9tSW50ZXJ2YWwoMCwgY2l2TmFtZXMubGVuZ3RoIC0gMSldLnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG4gIHJhbmRvbUludEZyb21JbnRlcnZhbChtaW4sIG1heCkge1xyXG4gICAgLy8gbWluIGFuZCBtYXggaW5jbHVkZWRcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ2xpZW50UGFnZSB9O1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxTYXZlZERhdGEgfSBmcm9tIFwiLi9kYXRhc3RvcmVcIjtcclxuaW1wb3J0IHsgQ2xpZW50UGFnZSB9IGZyb20gXCIuL2h0bWwtcGFnZXMvY2xpZW50LXBhZ2UuanNcIjtcclxuaW1wb3J0IE9CU1dlYlNvY2tldCwgeyBFdmVudFN1YnNjcmlwdGlvbiB9IGZyb20gXCJvYnMtd2Vic29ja2V0LWpzXCI7XHJcblxyXG5jb25zdCBzYXZlZERhdGEgPSBuZXcgTG9jYWxTYXZlZERhdGEoKTtcclxuc2F2ZWREYXRhLmxvYWREYXRhKCk7XHJcbnNhdmVkRGF0YS5zYXZlRGF0YSgpO1xyXG5cclxuY29uc3Qgb2JzID0gbmV3IE9CU1dlYlNvY2tldCgpO1xyXG5cclxuLy8gaHR0cHM6Ly90cmVlZS5naXRodWIuaW8vdGVjaC1vdmVybGF5L2NsaWVudCNndWlkOnBhc3N3b3JkXHJcbmNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5jb25zdCB1cmxQYXJ0cyA9IHVybC5zcGxpdChcIiNcIik7XHJcbmNvbnN0IGltcG9ydGFudFBhcnRzID0gdXJsUGFydHNbMV0uc3BsaXQoXCI6XCIpO1xyXG4vLyBhd2FpdCBvYnMuY29ubmVjdChgd3M6Ly8ke3NhdmVkRGF0YS5fc2Vuc2l0aXZlRGF0YVN0b3JlLl93ZWJzb2NrZXRfaXB9OiR7c2F2ZWREYXRhLl9zZW5zaXRpdmVEYXRhU3RvcmUuX3dlYnNvY2tldF9wb3J0fWAsIHNhdmVkRGF0YS5fc2Vuc2l0aXZlRGF0YVN0b3JlLl93ZWJzb2NrZXRfcGFzc3dvcmQpO1xyXG5hd2FpdCBvYnMuY29ubmVjdChgd3M6Ly8xMjcuMC4wLjE6NDQ1NWAsIGltcG9ydGFudFBhcnRzWzFdLCB7XHJcbiAgZXZlbnRTdWJzY3JpcHRpb25zOiBFdmVudFN1YnNjcmlwdGlvbi5BbGwsXHJcbiAgcnBjVmVyc2lvbjogMSxcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ic1NjZW5lQ2hhbmdlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGV2ZW50LmRldGFpbC5uYW1lKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpO1xyXG4gIGNvbnNvbGUubG9nKFwidGVzdGV0c3Q9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xyXG59KTtcclxuXHJcbmNvbnNvbGUubG9nKGB3czovLzEyNy4wLjAuMTo0NDU1IHB3OiR7aW1wb3J0YW50UGFydHNbMV19YCk7XHJcblxyXG5vYnMub24oXCJDb25uZWN0aW9uT3BlbmVkXCIsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIkNMSUVOVCBDT05ORUNURUQgVE8gT0JTIFdFQlNPQ0tFVFwiKTtcclxufSk7XHJcbm9icy5vbihcIlZlbmRvckV2ZW50XCIsICh7IHZlbmRvck5hbWUsIGV2ZW50VHlwZSwgZXZlbnREYXRhIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyh7IHZlbmRvck5hbWUsIGV2ZW50VHlwZSwgZXZlbnREYXRhIH0pO1xyXG59KTtcclxub2JzLm9uKFwiQ3VzdG9tRXZlbnRcIiwgKGV2ZW50RGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiY3VzdG9tIGV2ZW50XCIpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNoaWxkRGl2LmlubmVyVGV4dCA9IGV2ZW50RGF0YTtcclxuICAvLyAgIGNoaWxkRGl2LmNsYXNzTGlzdC5hZGQoXCJcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjaGlsZERpdik7XHJcblxyXG4gIGNvbnNvbGUubG9nKGV2ZW50RGF0YSk7XHJcbn0pO1xyXG5cclxub2JzLm9uKFwib2JzLXdlYnNvY2tldC1vdmVybGF5LXB1c2gtZXZlbnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXZlbnQpO1xyXG59KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJlbWl0X2V2ZW50XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIC8vICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShldmVudC5kZXRhaWwpO1xyXG4gIC8vICAgdC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3MtYnV0dG9uXCIpO1xyXG4gIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KTtcclxuXHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHluYW1pYy1jb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2hpbGREaXYuaW5uZXJUZXh0ID0gZXZlbnQuZGV0YWlsO1xyXG4gIC8vICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZChcIlwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcclxuXHJcbiAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsKTtcclxufSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlbWl0X2V2ZW50XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIC8vICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShldmVudC5kZXRhaWwpO1xyXG4gIC8vICAgdC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3MtYnV0dG9uXCIpO1xyXG4gIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KTtcclxuXHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHluYW1pYy1jb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2hpbGREaXYuaW5uZXJUZXh0ID0gZXZlbnQuZGV0YWlsO1xyXG4gIC8vICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZChcIlwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcclxuXHJcbiAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsKTtcclxufSk7XHJcblxyXG5jb25zdCBkeW5hbWljQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmR5bmFtaWNDb250ZW50RGl2LmlkID0gXCJkeW5hbWljLWNvbnRlbnRcIjtcclxuZHluYW1pY0NvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImJvZHktY29udGVudFwiKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljQ29udGVudERpdik7XHJcblxyXG5uZXcgQ2xpZW50UGFnZShzYXZlZERhdGEsIG9icykuYnVpbGRIdG1sKCk7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyIsImltcG9ydCBjcmVhdGVEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCBXZWJTb2NrZXRJcG1sIGZyb20gJ2lzb21vcnBoaWMtd3MnO1xuaW1wb3J0IHNoYTI1NiBmcm9tICdjcnlwdG8tanMvc2hhMjU2LmpzJztcbmltcG9ydCBCYXNlNjQgZnJvbSAnY3J5cHRvLWpzL2VuYy1iYXNlNjQuanMnO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBXZWJTb2NrZXRPcENvZGU7XG4oZnVuY3Rpb24gKFdlYlNvY2tldE9wQ29kZSkge1xuICAvKipcbiAgICogVGhlIGluaXRpYWwgbWVzc2FnZSBzZW50IGJ5IG9icy13ZWJzb2NrZXQgdG8gbmV3bHkgY29ubmVjdGVkIGNsaWVudHMuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiSGVsbG9cIl0gPSAwXSA9IFwiSGVsbG9cIjtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHNlbnQgYnkgYSBuZXdseSBjb25uZWN0ZWQgY2xpZW50IHRvIG9icy13ZWJzb2NrZXQgaW4gcmVzcG9uc2UgdG8gYSBgSGVsbG9gLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIklkZW50aWZ5XCJdID0gMV0gPSBcIklkZW50aWZ5XCI7XG4gIC8qKlxuICAgKiBUaGUgcmVzcG9uc2Ugc2VudCBieSBvYnMtd2Vic29ja2V0IHRvIGEgY2xpZW50IGFmdGVyIGl0IGhhcyBzdWNjZXNzZnVsbHkgaWRlbnRpZmllZCB3aXRoIG9icy13ZWJzb2NrZXQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiSWRlbnRpZmllZFwiXSA9IDJdID0gXCJJZGVudGlmaWVkXCI7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBzZW50IGJ5IGFuIGFscmVhZHktaWRlbnRpZmllZCBjbGllbnQgdG8gdXBkYXRlIGlkZW50aWZpY2F0aW9uIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiUmVpZGVudGlmeVwiXSA9IDNdID0gXCJSZWlkZW50aWZ5XCI7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBzZW50IGJ5IG9icy13ZWJzb2NrZXQgY29udGFpbmluZyBhbiBldmVudCBwYXlsb2FkLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIkV2ZW50XCJdID0gNV0gPSBcIkV2ZW50XCI7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBzZW50IGJ5IGEgY2xpZW50IHRvIG9icy13ZWJzb2NrZXQgdG8gcGVyZm9ybSBhIHJlcXVlc3QuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiUmVxdWVzdFwiXSA9IDZdID0gXCJSZXF1ZXN0XCI7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBzZW50IGJ5IG9icy13ZWJzb2NrZXQgaW4gcmVzcG9uc2UgdG8gYSBwYXJ0aWN1bGFyIHJlcXVlc3QgZnJvbSBhIGNsaWVudC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJSZXF1ZXN0UmVzcG9uc2VcIl0gPSA3XSA9IFwiUmVxdWVzdFJlc3BvbnNlXCI7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBzZW50IGJ5IGEgY2xpZW50IHRvIG9icy13ZWJzb2NrZXQgdG8gcGVyZm9ybSBhIGJhdGNoIG9mIHJlcXVlc3RzLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIlJlcXVlc3RCYXRjaFwiXSA9IDhdID0gXCJSZXF1ZXN0QmF0Y2hcIjtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHNlbnQgYnkgb2JzLXdlYnNvY2tldCBpbiByZXNwb25zZSB0byBhIHBhcnRpY3VsYXIgYmF0Y2ggb2YgcmVxdWVzdHMgZnJvbSBhIGNsaWVudC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJSZXF1ZXN0QmF0Y2hSZXNwb25zZVwiXSA9IDldID0gXCJSZXF1ZXN0QmF0Y2hSZXNwb25zZVwiO1xufSkoV2ViU29ja2V0T3BDb2RlIHx8IChXZWJTb2NrZXRPcENvZGUgPSB7fSkpO1xuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSwgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1saXRlcmFsLWVudW0tbWVtYmVyICovXG52YXIgRXZlbnRTdWJzY3JpcHRpb247XG4oZnVuY3Rpb24gKEV2ZW50U3Vic2NyaXB0aW9uKSB7XG4gIC8qKlxuICAgKiBTdWJjcmlwdGlvbiB2YWx1ZSB1c2VkIHRvIGRpc2FibGUgYWxsIGV2ZW50cy5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBHZW5lcmFsYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiR2VuZXJhbFwiXSA9IDFdID0gXCJHZW5lcmFsXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBDb25maWdgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJDb25maWdcIl0gPSAyXSA9IFwiQ29uZmlnXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBTY2VuZXNgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJTY2VuZXNcIl0gPSA0XSA9IFwiU2NlbmVzXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBJbnB1dHNgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJJbnB1dHNcIl0gPSA4XSA9IFwiSW5wdXRzXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBUcmFuc2l0aW9uc2AgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIlRyYW5zaXRpb25zXCJdID0gMTZdID0gXCJUcmFuc2l0aW9uc1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgRmlsdGVyc2AgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIkZpbHRlcnNcIl0gPSAzMl0gPSBcIkZpbHRlcnNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYE91dHB1dHNgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJPdXRwdXRzXCJdID0gNjRdID0gXCJPdXRwdXRzXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBTY2VuZUl0ZW1zYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiU2NlbmVJdGVtc1wiXSA9IDEyOF0gPSBcIlNjZW5lSXRlbXNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYE1lZGlhSW5wdXRzYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiTWVkaWFJbnB1dHNcIl0gPSAyNTZdID0gXCJNZWRpYUlucHV0c1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgdGhlIGBWZW5kb3JFdmVudGAgZXZlbnQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIlZlbmRvcnNcIl0gPSA1MTJdID0gXCJWZW5kb3JzXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBVaWAgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIlVpXCJdID0gMTAyNF0gPSBcIlVpXCI7XG4gIC8qKlxuICAgKiBIZWxwZXIgdG8gcmVjZWl2ZSBhbGwgbm9uLWhpZ2gtdm9sdW1lIGV2ZW50cy5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiQWxsXCJdID0gMjA0N10gPSBcIkFsbFwiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgdGhlIGBJbnB1dFZvbHVtZU1ldGVyc2AgaGlnaC12b2x1bWUgZXZlbnQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIklucHV0Vm9sdW1lTWV0ZXJzXCJdID0gNjU1MzZdID0gXCJJbnB1dFZvbHVtZU1ldGVyc1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgdGhlIGBJbnB1dEFjdGl2ZVN0YXRlQ2hhbmdlZGAgaGlnaC12b2x1bWUgZXZlbnQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIklucHV0QWN0aXZlU3RhdGVDaGFuZ2VkXCJdID0gMTMxMDcyXSA9IFwiSW5wdXRBY3RpdmVTdGF0ZUNoYW5nZWRcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIHRoZSBgSW5wdXRTaG93U3RhdGVDaGFuZ2VkYCBoaWdoLXZvbHVtZSBldmVudC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiSW5wdXRTaG93U3RhdGVDaGFuZ2VkXCJdID0gMjYyMTQ0XSA9IFwiSW5wdXRTaG93U3RhdGVDaGFuZ2VkXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSB0aGUgYFNjZW5lSXRlbVRyYW5zZm9ybUNoYW5nZWRgIGhpZ2gtdm9sdW1lIGV2ZW50LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJTY2VuZUl0ZW1UcmFuc2Zvcm1DaGFuZ2VkXCJdID0gNTI0Mjg4XSA9IFwiU2NlbmVJdGVtVHJhbnNmb3JtQ2hhbmdlZFwiO1xufSkoRXZlbnRTdWJzY3JpcHRpb24gfHwgKEV2ZW50U3Vic2NyaXB0aW9uID0ge30pKTtcbi8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSwgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1saXRlcmFsLWVudW0tbWVtYmVyICovXG52YXIgUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZTtcbihmdW5jdGlvbiAoUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZSkge1xuICAvKipcbiAgICogTm90IGEgcmVxdWVzdCBiYXRjaC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGVbUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgLyoqXG4gICAqIEEgcmVxdWVzdCBiYXRjaCB3aGljaCBwcm9jZXNzZXMgYWxsIHJlcXVlc3RzIHNlcmlhbGx5LCBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuICAgKlxuICAgKiBOb3RlOiBUbyBpbnRyb2R1Y2UgYXJ0aWZpY2lhbCBkZWxheSwgdXNlIHRoZSBgU2xlZXBgIHJlcXVlc3QgYW5kIHRoZSBgc2xlZXBNaWxsaXNgIHJlcXVlc3QgZmllbGQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlW1JlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGVbXCJTZXJpYWxSZWFsdGltZVwiXSA9IDBdID0gXCJTZXJpYWxSZWFsdGltZVwiO1xuICAvKipcbiAgICogQSByZXF1ZXN0IGJhdGNoIHR5cGUgd2hpY2ggcHJvY2Vzc2VzIGFsbCByZXF1ZXN0cyBzZXJpYWxseSwgaW4gc3luYyB3aXRoIHRoZSBncmFwaGljcyB0aHJlYWQuIERlc2lnbmVkIHRvIHByb3ZpZGUgaGlnaCBhY2N1cmFjeSBmb3IgYW5pbWF0aW9ucy5cbiAgICpcbiAgICogTm90ZTogVG8gaW50cm9kdWNlIGFydGlmaWNpYWwgZGVsYXksIHVzZSB0aGUgYFNsZWVwYCByZXF1ZXN0IGFuZCB0aGUgYHNsZWVwRnJhbWVzYCByZXF1ZXN0IGZpZWxkLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZVtSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlW1wiU2VyaWFsRnJhbWVcIl0gPSAxXSA9IFwiU2VyaWFsRnJhbWVcIjtcbiAgLyoqXG4gICAqIEEgcmVxdWVzdCBiYXRjaCB0eXBlIHdoaWNoIHByb2Nlc3NlcyBhbGwgcmVxdWVzdHMgdXNpbmcgYWxsIGF2YWlsYWJsZSB0aHJlYWRzIGluIHRoZSB0aHJlYWQgcG9vbC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBpcyBtYWlubHkgZXhwZXJpbWVudGFsLCBhbmQgb25seSByZWFsbHkgc2hvd3MgaXRzIGNvbG9ycyBkdXJpbmcgcmVxdWVzdHMgd2hpY2ggcmVxdWlyZSBsb3RzIG9mXG4gICAqIGFjdGl2ZSBwcm9jZXNzaW5nLCBsaWtlIGBHZXRTb3VyY2VTY3JlZW5zaG90YC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGVbUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZVtcIlBhcmFsbGVsXCJdID0gMl0gPSBcIlBhcmFsbGVsXCI7XG59KShSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlIHx8IChSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlID0ge30pKTtcblxuLyoqXG4gKiBTSEEyNTYgSGFzaGluZy5cbiAqIEBwYXJhbSAge3N0cmluZ30gW3NhbHQ9JyddIHNhbHQuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtjaGFsbGVuZ2U9JyddIGNoYWxsZW5nZS5cbiAqIEBwYXJhbSAge3N0cmluZ30gbXNnIE1lc3NhZ2UgdG8gZW5jb2RlLlxuICogQHJldHVybnMge3N0cmluZ30gc2hhMjU2IGVuY29kZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBhdXRoZW50aWNhdGlvbkhhc2hpbmcgKHNhbHQsIGNoYWxsZW5nZSwgbXNnKSB7XG4gIGNvbnN0IGhhc2ggPSBCYXNlNjQuc3RyaW5naWZ5KHNoYTI1Nihtc2cgKyBzYWx0KSk7XG4gIHJldHVybiBCYXNlNjQuc3RyaW5naWZ5KHNoYTI1NihoYXNoICsgY2hhbGxlbmdlKSk7XG59XG5cbmNvbnN0IF9leGNsdWRlZCA9IFtcImF1dGhlbnRpY2F0aW9uXCIsIFwicnBjVmVyc2lvblwiXTtcbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoJ29icy13ZWJzb2NrZXQtanMnKTtcbmNsYXNzIE9CU1dlYlNvY2tldEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5jb2RlID0gdm9pZCAwO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gIH1cbn1cbmNsYXNzIEJhc2VPQlNXZWJTb2NrZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5faWRlbnRpZmllZCA9IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJuYWxMaXN0ZW5lcnMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5zb2NrZXQgPSB2b2lkIDA7XG4gIH1cbiAgc3RhdGljIGdlbmVyYXRlTWVzc2FnZUlkKCkge1xuICAgIHJldHVybiBTdHJpbmcoQmFzZU9CU1dlYlNvY2tldC5yZXF1ZXN0Q291bnRlcisrKTtcbiAgfVxuICBnZXQgaWRlbnRpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRlbnRpZmllZDtcbiAgfVxuICAvKipcbiAgICogQ29ubmVjdCB0byBhbiBvYnMtd2Vic29ja2V0IHNlcnZlclxuICAgKiBAcGFyYW0gdXJsIFdlYnNvY2tldCBzZXJ2ZXIgdG8gY29ubmVjdCB0byAoaW5jbHVkaW5nIHdzOi8vIG9yIHdzczovLyBwcm90b2NvbClcbiAgICogQHBhcmFtIHBhc3N3b3JkIFBhc3N3b3JkXG4gICAqIEBwYXJhbSBpZGVudGlmaWNhdGlvblBhcmFtcyBEYXRhIGZvciBJZGVudGlmeSBldmVudFxuICAgKiBAcmV0dXJucyBIZWxsbyAmIElkZW50aWZpZWQgbWVzc2FnZXMgZGF0YSAoY29tYmluZWQpXG4gICAqL1xuICBhc3luYyBjb25uZWN0KHVybCA9ICd3czovLzEyNy4wLjAuMTo0NDU1JywgcGFzc3dvcmQsIGlkZW50aWZpY2F0aW9uUGFyYW1zID0ge30pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgYXdhaXQgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25uZWN0aW9uQ2xvc2VkUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoJ0Nvbm5lY3Rpb25DbG9zZWQnKTtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25FcnJvclByb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKCdDb25uZWN0aW9uRXJyb3InKTtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJhY2UoW2FzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaGVsbG8gPSBhd2FpdCBfdGhpcy5jcmVhdGVDb25uZWN0aW9uKHVybCk7XG4gICAgICAgIF90aGlzLmVtaXQoJ0hlbGxvJywgaGVsbG8pO1xuICAgICAgICByZXR1cm4gX3RoaXMuaWRlbnRpZnkoaGVsbG8sIHBhc3N3b3JkLCBpZGVudGlmaWNhdGlvblBhcmFtcyk7XG4gICAgICB9KCksXG4gICAgICAvLyBDaG9vc2UgdGhlIGJlc3QgcHJvbWlzZSBmb3IgY29ubmVjdGlvbiBlcnJvci9jbG9zZVxuICAgICAgLy8gSW4gYnJvd3NlciBjb25uZWN0aW9uIGNsb3NlIGhhcyBjbG9zZSBjb2RlICsgcmVhc29uLFxuICAgICAgLy8gd2hpbGUgaW4gbm9kZSBlcnJvciBldmVudCBoYXMgdGhlc2VcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdm9pZCBjb25uZWN0aW9uRXJyb3JQcm9taXNlLnRoZW4oZSA9PiB7XG4gICAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZvaWQgY29ubmVjdGlvbkNsb3NlZFByb21pc2UudGhlbihlID0+IHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSldKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYXdhaXQgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3QgZnJvbSBvYnMtd2Vic29ja2V0IHNlcnZlclxuICAgKi9cbiAgYXN5bmMgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAoIXRoaXMuc29ja2V0IHx8IHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldElwbWwuQ0xPU0VEKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbm5lY3Rpb25DbG9zZWRQcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZSgnQ29ubmVjdGlvbkNsb3NlZCcpO1xuICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgYXdhaXQgY29ubmVjdGlvbkNsb3NlZFByb21pc2U7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZXNzaW9uIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIGRhdGEgUmVpZGVudGlmeSBkYXRhXG4gICAqIEByZXR1cm5zIElkZW50aWZpZWQgbWVzc2FnZSBkYXRhXG4gICAqL1xuICBhc3luYyByZWlkZW50aWZ5KGRhdGEpIHtcbiAgICBjb25zdCBpZGVudGlmaWVkUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoYG9wOiR7V2ViU29ja2V0T3BDb2RlLklkZW50aWZpZWR9YCk7XG4gICAgYXdhaXQgdGhpcy5tZXNzYWdlKFdlYlNvY2tldE9wQ29kZS5SZWlkZW50aWZ5LCBkYXRhKTtcbiAgICByZXR1cm4gaWRlbnRpZmllZFByb21pc2U7XG4gIH1cbiAgLyoqXG4gICAqIFNlbmQgYSByZXF1ZXN0IHRvIG9icy13ZWJzb2NrZXRcbiAgICogQHBhcmFtIHJlcXVlc3RUeXBlIFJlcXVlc3QgbmFtZVxuICAgKiBAcGFyYW0gcmVxdWVzdERhdGEgUmVxdWVzdCBkYXRhXG4gICAqIEByZXR1cm5zIFJlcXVlc3QgcmVzcG9uc2VcbiAgICovXG4gIGFzeW5jIGNhbGwocmVxdWVzdFR5cGUsIHJlcXVlc3REYXRhKSB7XG4gICAgY29uc3QgcmVxdWVzdElkID0gQmFzZU9CU1dlYlNvY2tldC5nZW5lcmF0ZU1lc3NhZ2VJZCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoYHJlczoke3JlcXVlc3RJZH1gKTtcbiAgICBhd2FpdCB0aGlzLm1lc3NhZ2UoV2ViU29ja2V0T3BDb2RlLlJlcXVlc3QsIHtcbiAgICAgIHJlcXVlc3RJZCxcbiAgICAgIHJlcXVlc3RUeXBlLFxuICAgICAgcmVxdWVzdERhdGFcbiAgICB9KTtcbiAgICBjb25zdCB7XG4gICAgICByZXF1ZXN0U3RhdHVzLFxuICAgICAgcmVzcG9uc2VEYXRhXG4gICAgfSA9IGF3YWl0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICBpZiAoIXJlcXVlc3RTdGF0dXMucmVzdWx0KSB7XG4gICAgICB0aHJvdyBuZXcgT0JTV2ViU29ja2V0RXJyb3IocmVxdWVzdFN0YXR1cy5jb2RlLCByZXF1ZXN0U3RhdHVzLmNvbW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9XG4gIC8qKlxuICAgKiBTZW5kIGEgYmF0Y2ggcmVxdWVzdCB0byBvYnMtd2Vic29ja2V0XG4gICAqIEBwYXJhbSByZXF1ZXN0cyBBcnJheSBvZiBSZXF1ZXN0IG9iamVjdHMgKHR5cGUgYW5kIGRhdGEpXG4gICAqIEBwYXJhbSBvcHRpb25zIEEgc2V0IG9mIG9wdGlvbnMgZm9yIGhvdyB0aGUgYmF0Y2ggd2lsbCBiZSBleGVjdXRlZFxuICAgKiBAcGFyYW0gb3B0aW9ucy5leGVjdXRpb25UeXBlIFRoZSBtb2RlIG9mIGV4ZWN1dGlvbiBvYnMtd2Vic29ja2V0IHdpbGwgcnVuIHRoZSBiYXRjaCBpblxuICAgKiBAcGFyYW0gb3B0aW9ucy5oYWx0T25GYWlsdXJlIFdoZXRoZXIgb2JzLXdlYnNvY2tldCBzaG91bGQgc3RvcCBleGVjdXRpbmcgdGhlIGJhdGNoIGlmIG9uZSByZXF1ZXN0IGZhaWxzXG4gICAqIEByZXR1cm5zIFJlcXVlc3RCYXRjaCByZXNwb25zZVxuICAgKi9cbiAgYXN5bmMgY2FsbEJhdGNoKHJlcXVlc3RzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0SWQgPSBCYXNlT0JTV2ViU29ja2V0LmdlbmVyYXRlTWVzc2FnZUlkKCk7XG4gICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZShgcmVzOiR7cmVxdWVzdElkfWApO1xuICAgIGF3YWl0IHRoaXMubWVzc2FnZShXZWJTb2NrZXRPcENvZGUuUmVxdWVzdEJhdGNoLCBfZXh0ZW5kcyh7XG4gICAgICByZXF1ZXN0SWQsXG4gICAgICByZXF1ZXN0c1xuICAgIH0sIG9wdGlvbnMpKTtcbiAgICBjb25zdCB7XG4gICAgICByZXN1bHRzXG4gICAgfSA9IGF3YWl0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuICAvKipcbiAgICogQ2xlYW51cCBmcm9tIHNvY2tldCBkaXNjb25uZWN0aW9uXG4gICAqL1xuICBjbGVhbnVwKCkge1xuICAgIGlmICghdGhpcy5zb2NrZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zb2NrZXQub25vcGVuID0gbnVsbDtcbiAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSBudWxsO1xuICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBudWxsO1xuICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBudWxsO1xuICAgIHRoaXMuc29ja2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2lkZW50aWZpZWQgPSBmYWxzZTtcbiAgICAvLyBDbGVhbnVwIGxlZnRvdmVyc1xuICAgIHRoaXMuaW50ZXJuYWxMaXN0ZW5lcnMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBjb25uZWN0aW9uIHRvIHNwZWNpZmllZCBvYnMtd2Vic29ja2V0IHNlcnZlclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gdXJsIFdlYnNvY2tldCBhZGRyZXNzXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIGhlbGxvIGRhdGFcbiAgICovXG4gIGFzeW5jIGNyZWF0ZUNvbm5lY3Rpb24odXJsKSB7XG4gICAgdmFyIF90aGlzJHNvY2tldDtcbiAgICBjb25zdCBjb25uZWN0aW9uT3BlbmVkUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoJ0Nvbm5lY3Rpb25PcGVuZWQnKTtcbiAgICBjb25zdCBoZWxsb1Byb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKGBvcDoke1dlYlNvY2tldE9wQ29kZS5IZWxsb31gKTtcbiAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXRJcG1sKHVybCwgdGhpcy5wcm90b2NvbCk7XG4gICAgdGhpcy5zb2NrZXQub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgYXdhaXQgY29ubmVjdGlvbk9wZW5lZFByb21pc2U7XG4gICAgY29uc3QgcHJvdG9jb2wgPSAoX3RoaXMkc29ja2V0ID0gdGhpcy5zb2NrZXQpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRzb2NrZXQucHJvdG9jb2w7XG4gICAgLy8gQnJvd3NlcnMgZG9uJ3QgYXV0b2Nsb3NlIG9uIG1pc3Npbmcvd3JvbmcgcHJvdG9jb2xcbiAgICBpZiAoIXByb3RvY29sKSB7XG4gICAgICB0aHJvdyBuZXcgT0JTV2ViU29ja2V0RXJyb3IoLTEsICdTZXJ2ZXIgc2VudCBubyBzdWJwcm90b2NvbCcpO1xuICAgIH1cbiAgICBpZiAocHJvdG9jb2wgIT09IHRoaXMucHJvdG9jb2wpIHtcbiAgICAgIHRocm93IG5ldyBPQlNXZWJTb2NrZXRFcnJvcigtMSwgJ1NlcnZlciBzZW50IGFuIGludmFsaWQgc3VicHJvdG9jb2wnKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlbGxvUHJvbWlzZTtcbiAgfVxuICAvKipcbiAgICogU2VuZCBpZGVudGlmeSBtZXNzYWdlXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBoZWxsbyBIZWxsbyBtZXNzYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhc3N3b3JkIFBhc3N3b3JkXG4gICAqIEBwYXJhbSBpZGVudGlmaWNhdGlvblBhcmFtcyBJZGVudGlmaWNhdGlvbiBwYXJhbXNcbiAgICogQHJldHVybnMgSGVsbG8gJiBJZGVudGlmaWVkIG1lc3NhZ2VzIGRhdGEgKGNvbWJpbmVkKVxuICAgKi9cbiAgYXN5bmMgaWRlbnRpZnkoX3JlZiwgcGFzc3dvcmQsIGlkZW50aWZpY2F0aW9uUGFyYW1zID0ge30pIHtcbiAgICBsZXQge1xuICAgICAgICBhdXRoZW50aWNhdGlvbixcbiAgICAgICAgcnBjVmVyc2lvblxuICAgICAgfSA9IF9yZWYsXG4gICAgICBoZWxsb1Jlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQpO1xuICAgIC8vIFNldCBycGNWZXJzaW9uIGlmIHVuc2V0XG4gICAgY29uc3QgZGF0YSA9IF9leHRlbmRzKHtcbiAgICAgIHJwY1ZlcnNpb25cbiAgICB9LCBpZGVudGlmaWNhdGlvblBhcmFtcyk7XG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uICYmIHBhc3N3b3JkKSB7XG4gICAgICBkYXRhLmF1dGhlbnRpY2F0aW9uID0gYXV0aGVudGljYXRpb25IYXNoaW5nKGF1dGhlbnRpY2F0aW9uLnNhbHQsIGF1dGhlbnRpY2F0aW9uLmNoYWxsZW5nZSwgcGFzc3dvcmQpO1xuICAgIH1cbiAgICBjb25zdCBpZGVudGlmaWVkUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoYG9wOiR7V2ViU29ja2V0T3BDb2RlLklkZW50aWZpZWR9YCk7XG4gICAgYXdhaXQgdGhpcy5tZXNzYWdlKFdlYlNvY2tldE9wQ29kZS5JZGVudGlmeSwgZGF0YSk7XG4gICAgY29uc3QgaWRlbnRpZmllZCA9IGF3YWl0IGlkZW50aWZpZWRQcm9taXNlO1xuICAgIHRoaXMuX2lkZW50aWZpZWQgPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnSWRlbnRpZmllZCcsIGlkZW50aWZpZWQpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBycGNWZXJzaW9uXG4gICAgfSwgaGVsbG9SZXN0LCBpZGVudGlmaWVkKTtcbiAgfVxuICAvKipcbiAgICogU2VuZCBtZXNzYWdlIHRvIG9icy13ZWJzb2NrZXRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIG9wIFdlYlNvY2tldE9wQ29kZVxuICAgKiBAcGFyYW0gZCBNZXNzYWdlIGRhdGFcbiAgICovXG4gIGFzeW5jIG1lc3NhZ2Uob3AsIGQpIHtcbiAgICBpZiAoIXRoaXMuc29ja2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBjb25uZWN0ZWQnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlkZW50aWZpZWQgJiYgb3AgIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU29ja2V0IG5vdCBpZGVudGlmaWVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGVuY29kZWQgPSBhd2FpdCB0aGlzLmVuY29kZU1lc3NhZ2Uoe1xuICAgICAgb3AsXG4gICAgICBkXG4gICAgfSk7XG4gICAgdGhpcy5zb2NrZXQuc2VuZChlbmNvZGVkKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgcHJvbWlzZSB0byBsaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGludGVybmFsIGxpc3RlbmVyXG4gICAqICh3aWxsIGJlIGNsZWFuZWQgdXAgb24gZGlzY29ubmVjdClcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIGV2ZW50IEV2ZW50IHRvIGxpc3RlbiB0b1xuICAgKiBAcmV0dXJucyBFdmVudCBkYXRhXG4gICAqL1xuICBhc3luYyBpbnRlcm5hbEV2ZW50UHJvbWlzZShldmVudCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuaW50ZXJuYWxMaXN0ZW5lcnMub25jZShldmVudCwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFdlYnNvY2tldCBvcGVuIGV2ZW50IGxpc3RlbmVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBlIEV2ZW50XG4gICAqL1xuICBvbk9wZW4oZSkge1xuICAgIGRlYnVnKCdzb2NrZXQub3BlbicpO1xuICAgIHRoaXMuZW1pdCgnQ29ubmVjdGlvbk9wZW5lZCcpO1xuICAgIHRoaXMuaW50ZXJuYWxMaXN0ZW5lcnMuZW1pdCgnQ29ubmVjdGlvbk9wZW5lZCcsIGUpO1xuICB9XG4gIC8qKlxuICAgKiBXZWJzb2NrZXQgbWVzc2FnZSBldmVudCBsaXN0ZW5lclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gZSBFdmVudFxuICAgKi9cbiAgYXN5bmMgb25NZXNzYWdlKGUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvcCxcbiAgICAgICAgZFxuICAgICAgfSA9IGF3YWl0IHRoaXMuZGVjb2RlTWVzc2FnZShlLmRhdGEpO1xuICAgICAgZGVidWcoJ3NvY2tldC5tZXNzYWdlOiAlZCAlaicsIG9wLCBkKTtcbiAgICAgIGlmIChvcCA9PT0gdW5kZWZpbmVkIHx8IGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgIGNhc2UgV2ViU29ja2V0T3BDb2RlLkV2ZW50OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICAgICAgICBldmVudERhdGFcbiAgICAgICAgICAgIH0gPSBkO1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUeXBlc2NyaXB0IGp1c3QgZG9lc24ndCB1bmRlcnN0YW5kIGl0XG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnRUeXBlLCBldmVudERhdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBXZWJTb2NrZXRPcENvZGUuUmVxdWVzdFJlc3BvbnNlOlxuICAgICAgICBjYXNlIFdlYlNvY2tldE9wQ29kZS5SZXF1ZXN0QmF0Y2hSZXNwb25zZTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIHJlcXVlc3RJZFxuICAgICAgICAgICAgfSA9IGQ7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsTGlzdGVuZXJzLmVtaXQoYHJlczoke3JlcXVlc3RJZH1gLCBkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5pbnRlcm5hbExpc3RlbmVycy5lbWl0KGBvcDoke29wfWAsIGQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkZWJ1ZygnZXJyb3IgaGFuZGxpbmcgbWVzc2FnZTogJW8nLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBXZWJzb2NrZXQgZXJyb3IgZXZlbnQgbGlzdGVuZXJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIGUgRXJyb3JFdmVudFxuICAgKi9cbiAgb25FcnJvcihlKSB7XG4gICAgZGVidWcoJ3NvY2tldC5lcnJvcjogJW8nLCBlKTtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBPQlNXZWJTb2NrZXRFcnJvcigtMSwgZS5tZXNzYWdlKTtcbiAgICB0aGlzLmVtaXQoJ0Nvbm5lY3Rpb25FcnJvcicsIGVycm9yKTtcbiAgICB0aGlzLmludGVybmFsTGlzdGVuZXJzLmVtaXQoJ0Nvbm5lY3Rpb25FcnJvcicsIGVycm9yKTtcbiAgfVxuICAvKipcbiAgICogV2Vic29ja2V0IGNsb3NlIGV2ZW50IGxpc3RlbmVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBlIEV2ZW50XG4gICAqL1xuICBvbkNsb3NlKGUpIHtcbiAgICBkZWJ1Zygnc29ja2V0LmNsb3NlOiAlcyAoJWQpJywgZS5yZWFzb24sIGUuY29kZSk7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgT0JTV2ViU29ja2V0RXJyb3IoZS5jb2RlLCBlLnJlYXNvbik7XG4gICAgdGhpcy5lbWl0KCdDb25uZWN0aW9uQ2xvc2VkJywgZXJyb3IpO1xuICAgIHRoaXMuaW50ZXJuYWxMaXN0ZW5lcnMuZW1pdCgnQ29ubmVjdGlvbkNsb3NlZCcsIGVycm9yKTtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxufVxuQmFzZU9CU1dlYlNvY2tldC5yZXF1ZXN0Q291bnRlciA9IDE7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pY3JvYnVuZGxlL2lzc3Vlcy81MzEjaXNzdWVjb21tZW50LTU3NTQ3MzAyNFxuLy8gTm90IHVzaW5nIEVTTSBleHBvcnQgZHVlIHRvIGl0IGFsc28gYmVpbmcgZGV0ZWN0ZWQgYW5kIGJyZWFraW5nIHJvbGx1cCBiYXNlZCBidW5kbGVycyAodml0ZSlcbmlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xufVxuXG5jbGFzcyBPQlNXZWJTb2NrZXQgZXh0ZW5kcyBCYXNlT0JTV2ViU29ja2V0IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMucHJvdG9jb2wgPSAnb2Jzd2Vic29ja2V0Lmpzb24nO1xuICB9XG4gIGFzeW5jIGVuY29kZU1lc3NhZ2UoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuICBhc3luYyBkZWNvZGVNZXNzYWdlKGRhdGEpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgeyBFdmVudFN1YnNjcmlwdGlvbiwgT0JTV2ViU29ja2V0RXJyb3IsIFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGUsIFdlYlNvY2tldE9wQ29kZSwgT0JTV2ViU29ja2V0IGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzb24ubW9kZXJuLmpzLm1hcFxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgeyBFdmVudEVtaXR0ZXIgfVxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=