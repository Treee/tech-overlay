(self["webpackChunktech_overlay"] = self["webpackChunktech_overlay"] || []).push([["admin"],{

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

/***/ "./src/components/civ-icons/civ-icon-list.js":
/*!***************************************************!*\
  !*** ./src/components/civ-icons/civ-icon-list.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CivIconList: () => (/* binding */ CivIconList)
/* harmony export */ });
/* harmony import */ var _civ_images_image_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../civ-images/image-helper.js */ "./src/components/civ-images/image-helper.js");
/* harmony import */ var _civ_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./civ-icon.js */ "./src/components/civ-icons/civ-icon.js");



class CivIconList {
  _civIconClickCounter = 0;

  buildElement(includeLabel) {
    const element = document.createElement("div");
    const iconBuilder = new _civ_icon_js__WEBPACK_IMPORTED_MODULE_1__.CivIconBuilder();

    _civ_images_image_helper_js__WEBPACK_IMPORTED_MODULE_0__.civIconsMap.forEach((civIconUrl, civName) => {
      const iconDiv = document.createElement("div");
      iconDiv.classList.add("admin-civ-icon");

      const iconElement = iconBuilder.buildElement(civIconUrl);
      if (includeLabel) {
        const iconLabel = document.createElement("span");
        iconLabel.innerHTML = this.sanitizeDisplayValue(civName);
        iconDiv.appendChild(iconLabel);
      }
      iconDiv.appendChild(iconElement);

      iconDiv.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.handleCivIconClick(event);
        return false;
      });

      element.appendChild(iconDiv);
    });

    return element;
  }
  handleCivIconClick(event) {
    // console.log(`clicked ${this._civIconClickCounter}`, event.target.innerText);
    const currentPlayerClass = `player-${this._civIconClickCounter}`;

    let numberOfPlayersOnCiv = 0;
    let playerCssString = "";
    event.target.classList.forEach((cssClass) => {
      if (cssClass.indexOf("player-") > -1) {
        playerCssString = playerCssString.concat(`${cssClass}:`);
        numberOfPlayersOnCiv++;
      }
    });

    document.querySelectorAll(`.${currentPlayerClass}`).forEach((e) => {
      e.classList.remove(currentPlayerClass);
      let localPlayerCssString = "";
      e.classList.forEach((cssClass) => {
        if (cssClass.indexOf("player-") > -1) {
          localPlayerCssString = localPlayerCssString.concat(`${cssClass}:`);
        }
      });

      if (localPlayerCssString !== "") {
        e.style.backgroundImage = `conic-gradient(${this.mapAllPlayerNumbersToColorString(localPlayerCssString, -1)})`;
      } else {
        e.style.backgroundImage = "";
      }
    });
    event.target.classList.add(`player-${this._civIconClickCounter}`);

    if (numberOfPlayersOnCiv > 0) {
      event.target.style.backgroundImage = `conic-gradient(${this.mapAllPlayerNumbersToColorString(playerCssString, this._civIconClickCounter)})`;
    } else {
      event.target.style.backgroundImage = `linear-gradient(rgba(0,0,0,0), ${this.mapPlayerNumberToColor(this._civIconClickCounter)})`;
    }
    let numPlayers = 2;

    if (document.getElementById("_numPlayersInMatch")) {
      numPlayers = document.getElementById("_numPlayersInMatch").value;
    }
    this._civIconClickCounter = (this._civIconClickCounter + 1) % numPlayers;
  }
  mapAllPlayerNumbersToColorString(otherPlayers, playerNumber) {
    let mappedColors = "";
    otherPlayers.split(":").forEach((player) => {
      if (player !== "") mappedColors = mappedColors.concat(this.mapPlayerNumberToColor(player.split("-")[1])).concat(",");
    });
    if (playerNumber !== -1) mappedColors = mappedColors.concat(this.mapPlayerNumberToColor(playerNumber));
    if (mappedColors.substring(mappedColors.length - 1) === ",") {
      mappedColors = mappedColors.slice(0, mappedColors.length - 1);
    }
    return mappedColors;
  }
  mapPlayerNumberToColor(playerNumber) {
    if (typeof playerNumber === "string" || playerNumber instanceof String) {
      playerNumber = parseInt(playerNumber);
    }

    switch (playerNumber) {
      case 0: {
        return "blue";
      }
      case 1: {
        return "red";
      }
      case 2: {
        return "green";
      }
      case 3: {
        return "yellow";
      }
      case 4: {
        return "cyan";
      }
      case 5: {
        return "purple";
      }
      case 6: {
        return "grey";
      }
      case 7: {
        return "orange";
      }
    }
    return "";
  }
  resetState() {
    this._civIconClickCounter = 0;
    document.querySelectorAll(".admin-civ-icon").forEach((e) => {
      e.className = "";
      e.classList.add("admin-civ-icon");
      e.style.backgroundImage = "";
    });
  }
  getListOfCivsClicked() {
    let numPlayers = 2;
    if (document.getElementById("_numPlayersInMatch")) {
      numPlayers = document.getElementById("_numPlayersInMatch").value;
    }
    const clickedCivs = [];
    for (let i = 0; i < numPlayers; i++) {
      const playerElement = document.getElementsByClassName(`player-${i}`);
      if (playerElement.length > 0) {
        clickedCivs.push(playerElement[0].getElementsByTagName("span")[0].innerText);
      }
    }
    return clickedCivs;
  }
  sanitizeDisplayValue(value) {
    // console.log(value);
    value = `${value[0].toUpperCase()}${value.substring(1, value.length)}`;
    return value;
  }
}



/***/ }),

/***/ "./src/components/civ-icons/civ-icon.js":
/*!**********************************************!*\
  !*** ./src/components/civ-icons/civ-icon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CivIconBuilder: () => (/* binding */ CivIconBuilder)
/* harmony export */ });
class CivIconBuilder {
  buildElement(imgPath) {
    const civIcon = new Image();
    civIcon.src = imgPath;

    return civIcon;
  }
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

/***/ "./src/components/tech-overlay-control/tech-overlay-control.js":
/*!*********************************************************************!*\
  !*** ./src/components/tech-overlay-control/tech-overlay-control.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TechOverlayControl: () => (/* binding */ TechOverlayControl)
/* harmony export */ });
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common-data */ "./src/common-data.js");

class TechOverlayControl {
  _dataStore;
  _civList;
  _clientWebsocket;
  constructor(dataStore, civList, clientWebsocket) {
    this._dataStore = dataStore;
    this._civList = civList;
    this._clientWebsocket = clientWebsocket;
  }
  buildElement() {
    const element = document.createElement("div");
    element.classList.add("left-column");
    // controls
    const controlsElement = this.buildTechSettingsPanel();

    // list of civs
    const civListElement = this._civList.buildElement(true);
    civListElement.classList.add("tech-civ-list");

    element.appendChild(controlsElement);
    element.appendChild(civListElement);

    //when the dom loads the civ list, update it with our settings
    setTimeout(() => {
      this.modifyCivCountCSS();
    }, 50);
    return element;
  }

  buildTechSettingsPanel() {
    const element = document.createElement("div");
    element.classList.add("tech-settings");

    //header
    const headerElement = document.createElement("div");
    headerElement.classList.add("tech-header");
    headerElement.innerHTML = "Technology Overlay";
    element.appendChild(headerElement);

    const buttonsElement = document.createElement("div");
    buttonsElement.classList.add("action-buttons");
    buttonsElement.appendChild(this.buildButton("Clear", "button-red", this.onClearClicked.bind(this)));
    buttonsElement.appendChild(this.buildButton("Show", "button-blue", this.onShowClicked.bind(this)));
    element.appendChild(buttonsElement);

    const settingsElement = document.createElement("div");
    settingsElement.classList.add("action-settings");
    Object.keys(this._dataStore._techOverlayStore).forEach((key, index) => {
      // console.log(`key ${key} :: ${this._dataStore._techOverlayStore[key]}`);
      if (key === "_label_userId") {
        return;
      }
      if (typeof this._dataStore._techOverlayStore[key] === "boolean") {
        settingsElement.appendChild(this.buildCheckBox(key, this._dataStore._techOverlayStore[key]));
      } else if (typeof this._dataStore._techOverlayStore[key]) {
        settingsElement.appendChild(this.buildInputBox(key, this._dataStore._techOverlayStore[key]));
      }
    });
    element.appendChild(settingsElement);

    return element;
  }
  buildCheckBox(label, value) {
    const container = document.createElement("div");
    container.classList.add("setting-container");

    const element = document.createElement("label");
    element.classList.add("switch");
    element.setAttribute("for", label);

    const spanLabel = document.createElement("span");
    spanLabel.innerHTML = this.sanitizeDisplayValue(label);

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = label;
    inputCheckbox.checked = value;
    inputCheckbox.addEventListener("change", (event) => {
      this.saveData(event);
    });

    const spanCheckbox = document.createElement("span");
    spanCheckbox.classList.add("slider");
    spanCheckbox.classList.add("round");

    container.appendChild(spanLabel);
    container.appendChild(element);

    element.appendChild(inputCheckbox);
    element.appendChild(spanCheckbox);

    return container;
  }
  buildInputBox(label, value) {
    const element = document.createElement("div");
    element.classList.add("setting-container");

    const elementLabel = document.createElement("label");
    elementLabel.setAttribute("for", label);

    const spanLabel = document.createElement("span");
    spanLabel.innerHTML = this.sanitizeDisplayValue(label);

    const inputNumber = document.createElement("input");
    inputNumber.classList.add("input-number");
    inputNumber.type = "number";
    inputNumber.id = label;
    inputNumber.value = value;
    inputNumber.addEventListener("change", (event) => {
      this.saveData(event);
      if (event.target.id === "_numCivsPerRow") {
        this.modifyCivCountCSS();
      }
    });

    element.appendChild(elementLabel);
    element.appendChild(spanLabel);
    element.appendChild(inputNumber);

    return element;
  }
  buildButton(label, buttonClass, callback) {
    const element = document.createElement("div");
    element.classList.add("setting-container");

    const button = document.createElement("button");
    button.classList.add("setting-button", buttonClass);
    button.id = label;
    button.innerHTML = label;
    button.addEventListener("click", callback, false);
    element.appendChild(button);
    return element;
  }

  onClearClicked(event) {
    const requestType = "CallVendorRequest";
    const data = {
      vendorName: "obs-browser",
      requestType: "emit_event",
      requestData: {
        eventType: "obs-websocket-overlay-push-event",
        eventData: { testKey: "testValue" },
        // event_data: { AGEOVERLAYPUSH: this.buildPayload(false) },
      },
    };
    this._clientWebsocket.call(requestType, data);
    this._civList.resetState();
  }
  onShowClicked(event) {
    const requestType = "CallVendorRequest";
    const data = {
      vendorName: "obs-browser",
      requestType: "emit_event",
      requestData: {
        eventType: "obs-websocket-overlay-push-event",
        eventData: { testKey: "testValue" },
        // event_data: { AGEOVERLAYPUSH: this.buildPayload(true) },
      },
    };
    this._clientWebsocket.call(requestType, data);
  }

  buildPayload(show) {
    const payload = Object.assign({}, this._dataStore._techOverlayStore, { showOverlay: show, pickedCivs: this._civList.getListOfCivsClicked() });
    return payload;
  }

  saveData() {
    Object.keys(this._dataStore._techOverlayStore).forEach((key, index) => {
      let storedValue;
      if (key === "_label_userId") {
        storedValue = this._dataStore._techOverlayStore[key];
      } else if (document.getElementById(key).value === "on") {
        storedValue = document.getElementById(key).checked;
      } else {
        storedValue = document.getElementById(key).value;
      }
      this._dataStore._techOverlayStore[key] = storedValue;
    });
    this._dataStore.saveData();
  }
  modifyCivCountCSS() {
    const widthPercent = 100 / this._dataStore._techOverlayStore._numCivsPerRow;
    document.querySelectorAll(".admin-civ-icon").forEach((e) => {
      e.style.flex = `1 0 ${widthPercent}%`;
    });
  }

  sanitizeDisplayValue(value) {
    return value.replace("_show", "").replace("_use", "").replace("_", "").replace("Tech", "");
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

/***/ "./src/html-pages/admin-page.js":
/*!**************************************!*\
  !*** ./src/html-pages/admin-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminPage: () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var _components_tech_overlay_control_tech_overlay_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tech-overlay-control/tech-overlay-control */ "./src/components/tech-overlay-control/tech-overlay-control.js");
/* harmony import */ var _components_civ_icons_civ_icon_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/civ-icons/civ-icon-list */ "./src/components/civ-icons/civ-icon-list.js");



class AdminPage {
  _dataStore;
  _clientWebsocket;
  constructor(dataStore, clientWebsocket) {
    this._dataStore = dataStore;
    this._clientWebsocket = clientWebsocket;
  }
  buildHtml() {
    document.body.classList.add("admin-body");
    const bodyContent = document.getElementById("dynamic-content");

    const adminPage = document.createElement("div");
    adminPage.classList.add("admin-page");

    adminPage.appendChild(this.buildWebSocketHtml());
    const civIconList = new _components_civ_icons_civ_icon_list__WEBPACK_IMPORTED_MODULE_1__.CivIconList();
    const techOverlayControl = new _components_tech_overlay_control_tech_overlay_control__WEBPACK_IMPORTED_MODULE_0__.TechOverlayControl(this._dataStore, civIconList, this._clientWebsocket);
    adminPage.appendChild(techOverlayControl.buildElement());

    bodyContent.appendChild(adminPage);
  }
  buildWebSocketHtml() {
    const websocketControls = document.createElement("div");
    websocketControls.id = "websocket-controls";
    websocketControls.classList.add("websocket-controls");

    const ipInputBox = document.createElement("input");
    ipInputBox.classList.add("websocket-input");
    ipInputBox.id = "websocket-ip-input";
    ipInputBox.type = "text";
    ipInputBox.value = this._dataStore._sensitiveDataStore._websocket_ip === "" ? "obs-websocket ipv4 or ipv6 address" : this._dataStore._sensitiveDataStore._websocket_ip;
    websocketControls.appendChild(ipInputBox);

    const passwordInputBox = document.createElement("input");
    passwordInputBox.classList.add("websocket-input");
    passwordInputBox.id = "websocket-password-input";
    passwordInputBox.type = "password";
    passwordInputBox.value = this._dataStore._sensitiveDataStore._websocket_password === "" ? "password" : this._dataStore._sensitiveDataStore._websocket_password;

    websocketControls.appendChild(passwordInputBox);

    const websocketConnectButton = document.createElement("input");
    websocketConnectButton.type = "button";
    websocketConnectButton.value = "Connect";
    websocketConnectButton.classList.add("websocket-setting-button", "button-blue");
    websocketConnectButton.addEventListener("click", async (event) => {
      this._dataStore.saveData();
      const result = await this.connectToObsWebsocket();
      if (result) {
        console.log("Connected to obs-websocket");
      } else {
        console.log("Invalid IP");
      }
    });
    websocketControls.appendChild(websocketConnectButton);

    const websocketDisconnectButton = document.createElement("input");
    websocketDisconnectButton.type = "button";
    websocketDisconnectButton.value = "Disconnect";
    websocketDisconnectButton.classList.add("websocket-setting-button", "button-red");
    websocketDisconnectButton.addEventListener("click", async (event) => {
      this._dataStore.saveData();
      await this.disconnectFromObsWebsocket();
      console.log("Disconnected from obs-websocket");
    });
    websocketControls.appendChild(websocketDisconnectButton);

    return websocketControls;
  }
  async connectToObsWebsocket() {
    const ip = document.getElementById("websocket-ip-input").value;
    let ipParts = ip.split(".");
    let formattedIp = "";
    let isValidIp = false;
    if (ip.indexOf(".ngrok-free.app") > 0) {
      formattedIp = ip;
      isValidIp = true;
    }
    if (ipParts.length === 4) {
      // ipv4
      formattedIp = ip;
      isValidIp = true;
    }
    ipParts = ip.split(":");
    if (ipParts.length === 8) {
      // ipv6
      if (ip.indexOf("[") !== 0) {
        formattedIp = `[${ip}]`;
      } else {
        formattedIp = ip;
      }
      isValidIp = true;
    }
    if (isValidIp) {
      const password = document.getElementById("websocket-password-input").value;

      this._dataStore._sensitiveDataStore["_websocket_ip"] = formattedIp;
      this._dataStore._sensitiveDataStore["_websocket_password"] = password;
      await this._clientWebsocket.connect(`wss://${formattedIp}:4455`, password);
      return true;
    }
    return false;
  }
  async disconnectFromObsWebsocket() {
    await this._clientWebsocket.disconnect();
  }
}




/***/ }),

/***/ "./src/html-pages/default-elements.js":
/*!********************************************!*\
  !*** ./src/html-pages/default-elements.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultHTMLPageElements: () => (/* binding */ DefaultHTMLPageElements)
/* harmony export */ });
class DefaultHTMLPageElements {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildFooter() {
    const element = document.createElement("footer");
    element.id = "footer";
    element.classList.add("my-footer");

    const textSpanElement1 = document.createElement("span");
    textSpanElement1.innerHTML = "Created by ";

    const treeTwitchAnchor = document.createElement("a");
    treeTwitchAnchor.setAttribute("href", "https://www.twitch.tv/itsatreee");
    treeTwitchAnchor.innerHTML = "ItsATreee";

    const textSpanElement2 = document.createElement("span");
    textSpanElement2.innerHTML = ` (2019-${new Date().getFullYear()}) - `;

    const treeGithubAnchor = document.createElement("a");
    treeGithubAnchor.setAttribute("href", "https://github.com/Treee/tech-widget-overlay");
    treeGithubAnchor.innerHTML = "GitHub";
    const createdByElement = document.createElement("div");
    createdByElement.appendChild(textSpanElement1);
    createdByElement.appendChild(treeTwitchAnchor);
    createdByElement.appendChild(textSpanElement2);
    createdByElement.appendChild(treeGithubAnchor);

    const textSpanElement3 = document.createElement("span");
    textSpanElement3.innerHTML = `Age of Empires II © Microsoft Corporation. <b>AoE Tech/Map Overlay for Age of Empires II</b> was created under Microsoft's "`;

    const microsoftAnchor = document.createElement("a");
    microsoftAnchor.setAttribute("href", "https://www.xbox.com/en-us/developers/rules");
    microsoftAnchor.innerHTML = "Game Content Usage Rules";

    const textSpanElement4 = document.createElement("span");
    textSpanElement4.innerHTML = `" using assets from Age of Empires II, and it is not endorsed by or affiliated with Microsoft.`;
    const nonEndorsementElement = document.createElement("div");
    nonEndorsementElement.appendChild(textSpanElement3);
    nonEndorsementElement.appendChild(microsoftAnchor);
    nonEndorsementElement.appendChild(textSpanElement4);

    element.appendChild(createdByElement);
    element.appendChild(nonEndorsementElement);
    return element;
  }
  buildHeader() {
    const element = document.createElement("div");
    element.id = "header";
    element.classList.add("my-header");

    const adminPageRoute = document.createElement("div");
    adminPageRoute.innerHTML = "| ADMIN |";
    adminPageRoute.addEventListener("click", (event) => {
      navigator.clipboard.writeText(this._dataStore._techOverlayStore._label_userId);
      // alert(`Copied id to clipboard: ${this._dataStore._techOverlayStore._label_userId}`);
      window.location.href = `#admin/${this._dataStore._techOverlayStore._label_userId}`;
    });

    const roundManager = document.createElement("div");
    roundManager.innerHTML = "| ROUNDS |";
    roundManager.addEventListener("click", (event) => {
      //   window.location.href = "#matchset";
      alert("Not yet implemented");
    });

    const settingsPageRoute = document.createElement("div");
    settingsPageRoute.innerHTML = "| CLIENT |";
    settingsPageRoute.addEventListener("click", (event) => {
      //   window.open(`#client/${this._dataStore._techOverlayStore._label_userId}`, "_blank");
      // window.location.href = `#client/${this._dataStore._techOverlayStore._label_userId}`;
      window.open(`/tech-overlay/client#${this._dataStore._techOverlayStore._label_userId}`, "_blank");
    });

    element.appendChild(adminPageRoute);
    element.appendChild(roundManager);
    element.appendChild(settingsPageRoute);

    return element;
  }
  buildFavIcon() {
    const element = document.createElement("link");
    element.type = "shortcut icon";
    element.href = "favicon.gif";
    return element;
  }
  initDefaultElements(hideHeader, hideFooter) {
    document.head.appendChild(this.buildFavIcon());
    if (!hideHeader) {
      document.body.before(this.buildHeader());
    }
    if (!hideFooter) {
      document.body.after(this.buildFooter());
    }
  }
}




/***/ }),

/***/ "./src/index-admin.js":
/*!****************************!*\
  !*** ./src/index-admin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _datastore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datastore.js */ "./src/datastore.js");
/* harmony import */ var _html_pages_default_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-pages/default-elements.js */ "./src/html-pages/default-elements.js");
/* harmony import */ var _html_pages_admin_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-pages/admin-page.js */ "./src/html-pages/admin-page.js");
/* harmony import */ var obs_websocket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! obs-websocket-js */ "./node_modules/obs-websocket-js/dist/json.modern.js");







const savedData = new _datastore_js__WEBPACK_IMPORTED_MODULE_1__.LocalSavedData();
savedData.loadData();
savedData.saveData();

const obs = new obs_websocket_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

const dynamicContentDiv = document.createElement("div");
dynamicContentDiv.id = "dynamic-content";
dynamicContentDiv.classList.add("body-content");
document.body.appendChild(dynamicContentDiv);

const defaultElements = new _html_pages_default_elements_js__WEBPACK_IMPORTED_MODULE_2__.DefaultHTMLPageElements(savedData);
defaultElements.initDefaultElements();

new _html_pages_admin_page_js__WEBPACK_IMPORTED_MODULE_3__.AdminPage(savedData, obs).buildHtml();


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index-admin.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZSxHQUFHLGVBQWU7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdkO0FBQ3JCO0FBQ2dEO0FBQzJCO0FBQ3BCO0FBQ1g7QUFDNUM7QUFDQSxzQkFBc0IseURBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvRkFBdUI7QUFDbkQ7QUFDQTtBQUNBLElBQUksZ0VBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUNhO0FBQ0g7QUFDRDtBQUNJOztBQUU3QztBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4Q0FBOEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhEQUE4RDs7QUFFL0Q7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZUFBZSw4REFBZ0IsQ0FBQyxnREFBTTtBQUN0QyxTQUFTLDhEQUFnQixDQUFDLGdEQUFNO0FBQ2hDOztBQUVBO0FBQ0EsY0FBYyxrQ0FBVztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1REFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQVk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxxREFBYTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsMkJBQTJCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsVUFBVTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSw2REFBNkQsVUFBVTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxzQkFBc0I7QUFDL0Usc0JBQXNCLHFEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsOERBQThELDJCQUEyQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLCtDQUErQyxVQUFVO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxHQUFHO0FBQy9DO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxSDtBQUNySDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGtCcUM7O0FBRWQ7QUFDdkIsaUVBQWUsc0NBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9lbmMtYmFzZTY0LmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvc2hhMjU2LmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXdzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL29icy13ZWJzb2NrZXQtanMvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tbW9uLWRhdGEuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LWljb25zL2Npdi1pY29uLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LWljb25zL2Npdi1pY29uLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvIHN5bmMgXFwuKHBuZykkIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy8gc3luYyBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy8gc3luYyBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pbWFnZS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zLyBzeW5jIFxcLihwbmcpJCIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy90ZWNoLW92ZXJsYXktY29udHJvbC90ZWNoLW92ZXJsYXktY29udHJvbC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvZGF0YXN0b3JlLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9odG1sLXBhZ2VzL2FkbWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2h0bWwtcGFnZXMvZGVmYXVsdC1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvaW5kZXgtYWRtaW4uanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5L2lnbm9yZWR8WjpcXHdvcmtzcGFjZVxcYWdlLW9mLWVtcGlyZXNcXHRlY2gtb3ZlcmxheVxcbm9kZV9tb2R1bGVzXFxjcnlwdG8tanN8Y3J5cHRvIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL2Rpc3QvanNvbi5tb2Rlcm4uanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL29icy13ZWJzb2NrZXQtanMvbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKmdsb2JhbHMgd2luZG93LCBnbG9iYWwsIHJlcXVpcmUqL1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXG5cdCAgICB2YXIgY3J5cHRvO1xuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGluIHdlYiB3b3JrZXIgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gc2VsZi5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3b3JrZXJcblx0ICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBnbG9iYWxUaGlzLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIChleHBlcmltZW50YWwgSUUgMTEpIGNyeXB0byBmcm9tIHdpbmRvdyAoQnJvd3Nlcilcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5tc0NyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5tc0NyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIGdsb2JhbCAoTm9kZUpTKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbC5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW1wb3J0IHZpYSByZXF1aXJlIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgIH1cblxuXHQgICAgLypcblx0ICAgICAqIENyeXB0b2dyYXBoaWNhbGx5IHNlY3VyZSBwc2V1ZG9yYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuXHQgICAgICpcblx0ICAgICAqIEFzIE1hdGgucmFuZG9tKCkgaXMgY3J5cHRvZ3JhcGhpY2FsbHkgbm90IHNhZmUgdG8gdXNlXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcnlwdG9TZWN1cmVSYW5kb21JbnQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKGNyeXB0bykge1xuXHQgICAgICAgICAgICAvLyBVc2UgZ2V0UmFuZG9tVmFsdWVzIG1ldGhvZCAoQnJvd3Nlcilcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheSgxKSlbMF07XG5cdCAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBVc2UgcmFuZG9tQnl0ZXMgbWV0aG9kIChOb2RlSlMpXG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvLnJhbmRvbUJ5dGVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tQnl0ZXMoNCkucmVhZEludDMyTEUoKTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcignTmF0aXZlIGNyeXB0byBtb2R1bGUgY291bGQgbm90IGJlIHVzZWQgdG8gZ2V0IHNlY3VyZSByYW5kb20gbnVtYmVyLicpO1xuXHQgICAgfTtcblxuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWxsIG9mIE9iamVjdC5jcmVhdGVcblxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fVxuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBvYmo7XG5cblx0ICAgICAgICAgICAgc3VidHlwZSA9IG5ldyBGKCk7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGF0U2lnQnl0ZXM7IGogKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaikgPj4+IDJdID0gdGhhdFdvcmRzW2ogPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goY3J5cHRvU2VjdXJlUmFuZG9tSW50KCkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2U2NCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2U2NCA9IENfZW5jLkJhc2U2NCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBCYXNlNjQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEJhc2U2NCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBiYXNlNjRTdHJpbmcgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgYmFzZTY0Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSArPSAzKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTEgPSAod29yZHNbaSA+Pj4gMl0gICAgICAgPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgICAgICAgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUyID0gKHdvcmRzWyhpICsgMSkgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAxKSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMyA9ICh3b3Jkc1soaSArIDIpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMikgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGUxIDw8IDE2KSB8IChieXRlMiA8PCA4KSB8IGJ5dGUzO1xuXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgKGogPCA0KSAmJiAoaSArIGogKiAwLjc1IDwgc2lnQnl0ZXMpOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRDaGFycy5wdXNoKG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+ICg2ICogKDMgLSBqKSkpICYgMHgzZikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmdDaGFyID0gbWFwLmNoYXJBdCg2NCk7XG5cdCAgICAgICAgICAgIGlmIChwYWRkaW5nQ2hhcikge1xuXHQgICAgICAgICAgICAgICAgd2hpbGUgKGJhc2U2NENoYXJzLmxlbmd0aCAlIDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRDaGFycy5wdXNoKHBhZGRpbmdDaGFyKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBiYXNlNjRDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBCYXNlNjQgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlNjRTdHIgVGhlIEJhc2U2NCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5wYXJzZShiYXNlNjRTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoYmFzZTY0U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgYmFzZTY0U3RyTGVuZ3RoID0gYmFzZTY0U3RyLmxlbmd0aDtcblx0ICAgICAgICAgICAgdmFyIG1hcCA9IHRoaXMuX21hcDtcblx0ICAgICAgICAgICAgdmFyIHJldmVyc2VNYXAgPSB0aGlzLl9yZXZlcnNlTWFwO1xuXG5cdCAgICAgICAgICAgIGlmICghcmV2ZXJzZU1hcCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldmVyc2VNYXAgPSB0aGlzLl9yZXZlcnNlTWFwID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXAubGVuZ3RoOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZU1hcFttYXAuY2hhckNvZGVBdChqKV0gPSBqO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIElnbm9yZSBwYWRkaW5nXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuXHQgICAgICAgICAgICBpZiAocGFkZGluZ0NoYXIpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBwYWRkaW5nSW5kZXggPSBiYXNlNjRTdHIuaW5kZXhPZihwYWRkaW5nQ2hhcik7XG5cdCAgICAgICAgICAgICAgICBpZiAocGFkZGluZ0luZGV4ICE9PSAtMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NFN0ckxlbmd0aCA9IHBhZGRpbmdJbmRleDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgcmV0dXJuIHBhcnNlTG9vcChiYXNlNjRTdHIsIGJhc2U2NFN0ckxlbmd0aCwgcmV2ZXJzZU1hcCk7XG5cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21hcDogJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89J1xuXHQgICAgfTtcblxuXHQgICAgZnVuY3Rpb24gcGFyc2VMb29wKGJhc2U2NFN0ciwgYmFzZTY0U3RyTGVuZ3RoLCByZXZlcnNlTWFwKSB7XG5cdCAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICB2YXIgbkJ5dGVzID0gMDtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYXNlNjRTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgaWYgKGkgJSA0KSB7XG5cdCAgICAgICAgICAgICAgdmFyIGJpdHMxID0gcmV2ZXJzZU1hcFtiYXNlNjRTdHIuY2hhckNvZGVBdChpIC0gMSldIDw8ICgoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgdmFyIGJpdHMyID0gcmV2ZXJzZU1hcFtiYXNlNjRTdHIuY2hhckNvZGVBdChpKV0gPj4+ICg2IC0gKGkgJSA0KSAqIDIpO1xuXHQgICAgICAgICAgICAgIHZhciBiaXRzQ29tYmluZWQgPSBiaXRzMSB8IGJpdHMyO1xuXHQgICAgICAgICAgICAgIHdvcmRzW25CeXRlcyA+Pj4gMl0gfD0gYml0c0NvbWJpbmVkIDw8ICgyNCAtIChuQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgIG5CeXRlcysrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBXb3JkQXJyYXkuY3JlYXRlKHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgfVxuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLmVuYy5CYXNlNjQ7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIEluaXRpYWxpemF0aW9uIGFuZCByb3VuZCBjb25zdGFudHMgdGFibGVzXG5cdCAgICB2YXIgSCA9IFtdO1xuXHQgICAgdmFyIEsgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gaXNQcmltZShuKSB7XG5cdCAgICAgICAgICAgIHZhciBzcXJ0TiA9IE1hdGguc3FydChuKTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgZmFjdG9yID0gMjsgZmFjdG9yIDw9IHNxcnROOyBmYWN0b3IrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKCEobiAlIGZhY3RvcikpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmdW5jdGlvbiBnZXRGcmFjdGlvbmFsQml0cyhuKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoKG4gLSAobiB8IDApKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIG4gPSAyO1xuXHQgICAgICAgIHZhciBuUHJpbWUgPSAwO1xuXHQgICAgICAgIHdoaWxlIChuUHJpbWUgPCA2NCkge1xuXHQgICAgICAgICAgICBpZiAoaXNQcmltZShuKSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKG5QcmltZSA8IDgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBIW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgS1tuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDMpKTtcblxuXHQgICAgICAgICAgICAgICAgblByaW1lKys7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBuKys7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0XG5cdCAgICB2YXIgVyA9IFtdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS0yNTYgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEyNTYgPSBDX2FsZ28uU0hBMjU2ID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChILnNsaWNlKDApKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcblx0ICAgICAgICAgICAgdmFyIGYgPSBIWzVdO1xuXHQgICAgICAgICAgICB2YXIgZyA9IEhbNl07XG5cdCAgICAgICAgICAgIHZhciBoID0gSFs3XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4ID0gV1tpIC0gMTVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTAgID0gKChnYW1tYTB4IDw8IDI1KSB8IChnYW1tYTB4ID4+PiA3KSkgIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWEweCA8PCAxNCkgfCAoZ2FtbWEweCA+Pj4gMTgpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMHggPj4+IDMpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXggPSBXW2kgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExICA9ICgoZ2FtbWExeCA8PCAxNSkgfCAoZ2FtbWExeCA+Pj4gMTcpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMXggPDwgMTMpIHwgKGdhbW1hMXggPj4+IDE5KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTF4ID4+PiAxMCk7XG5cblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gZ2FtbWEwICsgV1tpIC0gN10gKyBnYW1tYTEgKyBXW2kgLSAxNl07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHZhciBjaCAgPSAoZSAmIGYpIF4gKH5lICYgZyk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqID0gKGEgJiBiKSBeIChhICYgYykgXiAoYiAmIGMpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwID0gKChhIDw8IDMwKSB8IChhID4+PiAyKSkgXiAoKGEgPDwgMTkpIHwgKGEgPj4+IDEzKSkgXiAoKGEgPDwgMTApIHwgKGEgPj4+IDIyKSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExID0gKChlIDw8IDI2KSB8IChlID4+PiA2KSkgXiAoKGUgPDwgMjEpIHwgKGUgPj4+IDExKSkgXiAoKGUgPDwgNykgIHwgKGUgPj4+IDI1KSk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyID0gc2lnbWEwICsgbWFqO1xuXG5cdCAgICAgICAgICAgICAgICBoID0gZztcblx0ICAgICAgICAgICAgICAgIGcgPSBmO1xuXHQgICAgICAgICAgICAgICAgZiA9IGU7XG5cdCAgICAgICAgICAgICAgICBlID0gKGQgKyB0MSkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZCA9IGM7XG5cdCAgICAgICAgICAgICAgICBjID0gYjtcblx0ICAgICAgICAgICAgICAgIGIgPSBhO1xuXHQgICAgICAgICAgICAgICAgYSA9ICh0MSArIHQyKSB8IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFs0XSArIGUpIHwgMDtcblx0ICAgICAgICAgICAgSFs1XSA9IChIWzVdICsgZikgfCAwO1xuXHQgICAgICAgICAgICBIWzZdID0gKEhbNl0gKyBnKSB8IDA7XG5cdCAgICAgICAgICAgIEhbN10gPSAoSFs3XSArIGgpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEyNTYpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjU2KTtcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMjU2O1xuXG59KSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0lyb25zdHJpa2VTZW1pQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaW5nYW1lX2RpcGxvbWFjeS1tZW51X2JnX2Z1bGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2Npdi10ZWNoLW92ZXJsYXkvaW1hZ2VzL3BhcGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9jaXYtaW1hZ2VzL21pc2MvdmV0by5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1lbWItRm9udFwiO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcbmh0bWwge1xyXG4gIGZvbnQtZmFtaWx5OiBNZW1iLUZvbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFkbWluLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jbGllbnQtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHktY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5teS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMCU7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxufVxyXG4ubXktZm9vdGVyIHtcclxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4ubXktZm9vdGVyIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG59XHJcblxyXG4uYWRtaW4tcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi53ZWJzb2NrZXQtY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLndlYnNvY2tldC1zZXR0aW5nLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG4ud2Vic29ja2V0LWlucHV0IHtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmxlZnQtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1udW1iZXIge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG59XHJcblxyXG4udGVjaC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwLjI1cmVtO1xyXG59XHJcbi50ZWNoLXNldHRpbmdzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGVjaC1jaXYtbGlzdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc2V0dGluZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5hY3Rpb24tc2V0dGluZ3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNldHRpbmctYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtIDE2cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRtaW4tY2l2LWljb24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCBibGFjaztcclxufVxyXG4uYWRtaW4tY2l2LWljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxufVxyXG4uYWRtaW4tY2l2LWljb24gc3BhbiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmFkbWluLWNpdi1pY29uIGltZyB7XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY2xpZW50LXBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtbmFtZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LW5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCB3aGl0ZSwgMCAxcHggd2hpdGUsIDFweCAwIHdoaXRlLCAwIC0xcHggd2hpdGU7XHJcbn1cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtaWNvbiB7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KSk7XHJcbn1cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdW5pcXVlLXVuaXQtaWNvbiB7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyOiBzaWx2ZXIgc29saWQgMXB4O1xyXG59XHJcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWRlc2NyaXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBraGFraSwgMCAxcHgga2hha2ksIDFweCAwIGtoYWtpLCAwIC0xcHgga2hha2k7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1lbWJsZW0ge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdG9wOiA0NSU7XHJcbn1cclxuXHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdXBncmFkZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuY2l2LXVwZ3JhZGUtY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcclxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5lbmFibGVkLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGhlaWdodDogMC43NXJlbTtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmRpc2FibGVkLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5lbmFibGVkLTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGhlaWdodDogMC43NXJlbTtcclxuICB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmRpc2FibGVkLTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgd2lkdGg6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xyXG4gIGhlaWdodDogNXJlbTtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmRpc2FibGUtaWNvbi1tZXNvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDVyZW07XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZWNvLXVwZ3JhZGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWVjby11cGdyYWRlLWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5idXR0b24tYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGNiYTtcclxufVxyXG4uYnV0dG9uLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMi4xcmVtO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG59XHJcbi5zd2l0Y2ggaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBib3R0b206IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICB3aWR0aDogMjZweDtcclxufVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcclxufVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxufVxyXG4uc2xpZGVyLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5tYXNrLWltZy12ZXJ0aWNhbCB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XHJcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcclxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICBtYXNrLXNpemU6IDEwMCUgMzAwJTtcclxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XHJcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmNpdi10ZWNoLWFuaW1hdGlvbi1lbnRlci1hY3RpdmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xyXG4gIC13ZWJraXQtbWFzay1zaXplOiAxMDAlIDMwMCU7XHJcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDIwMCU7XHJcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XHJcbiAgbWFzay1zaXplOiAxMDAlIDMwMCU7XHJcbiAgbWFzay1wb3NpdGlvbjogMCAyMDAlO1xyXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYW5pbWF0aW9uOiBtYXNrLW1vdmUtaW4gMnMgZWFzZS1pbiBmb3J3YXJkcztcclxufVxyXG4uY2l2LXRlY2gtYW5pbWF0aW9uLWxlYXZlLWFjdGl2ZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XHJcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcclxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICBtYXNrLXNpemU6IDEwMCUgMzAwJTtcclxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XHJcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbmltYXRpb246IG1hc2stbW92ZS1vdXQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbWFzay1tb3ZlLWluIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAxMDAlO1xyXG4gICAgbWFzay1wb3NpdGlvbjogMCAxMDAlO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMCU7XHJcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtYXNrLW1vdmUtb3V0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAwJTtcclxuICAgIG1hc2stcG9zaXRpb246IDAgMCU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAxMDAlO1xyXG4gICAgbWFzay1wb3NpdGlvbjogMCAxMDAlO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQWlEO0FBQ25EO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseURBQTBFO0VBQzFFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixz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VztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFKQUFxSjtFQUNySiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDhCQUE4Qjs7RUFFOUIsNklBQTZJO0VBQzdJLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUpBQXFKO0VBQ3JKLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCOztFQUU5Qiw2SUFBNkk7RUFDN0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxxSkFBcUo7RUFDckosNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7O0VBRTlCLDZJQUE2STtFQUM3SSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNZW1iLUZvbnRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lyb25zdHJpa2VTZW1pQm9sZC5vdGZcXFwiKTtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogTWVtYi1Gb250O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkbWluLWJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2ltYWdlcy9pbmdhbWVfZGlwbG9tYWN5LW1lbnVfYmdfZnVsbC5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNsaWVudC1ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keS1jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMCU7XFxyXFxuICBib3JkZXItdG9wOiAwcHg7XFxyXFxuICBib3JkZXItbGVmdDogMHB4O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHg7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbn1cXHJcXG4ubXktZm9vdGVyIHtcXHJcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXHJcXG4gIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG4ubXktZm9vdGVyIGEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxyXFxufVxcclxcblxcclxcbi5hZG1pbi1wYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ud2Vic29ja2V0LWNvbnRyb2xzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLndlYnNvY2tldC1zZXR0aW5nLWJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcbi53ZWJzb2NrZXQtaW5wdXQge1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWNvbHVtbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtbnVtYmVyIHtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaC1oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAuMjVyZW07XFxyXFxufVxcclxcbi50ZWNoLXNldHRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlY2gtY2l2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uYWN0aW9uLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG4uYWN0aW9uLXNldHRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uc2V0dGluZy1idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMTZyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRtaW4tY2l2LWljb24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggYmxhY2s7XFxyXFxufVxcclxcbi5hZG1pbi1jaXYtaWNvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxufVxcclxcbi5hZG1pbi1jaXYtaWNvbiBzcGFuIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4uYWRtaW4tY2l2LWljb24gaW1nIHtcXHJcXG4gIHdpZHRoOiA1cmVtO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbGllbnQtcGFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2Npdi10ZWNoLW92ZXJsYXkvaW1hZ2VzL3BhcGVyLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LW5hbWUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1pY29uIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpKTtcXHJcXG59XFxyXFxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdW5pcXVlLXVuaXQtaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXI6IHNpbHZlciBzb2xpZCAxcHg7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWRlc2NyaXB0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBraGFraSwgMCAxcHgga2hha2ksIDFweCAwIGtoYWtpLCAwIC0xcHgga2hha2k7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1lbWJsZW0ge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIHRvcDogNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdXBncmFkZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdXBncmFkZS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5lbmFibGVkLTEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBoZWlnaHQ6IDAuNzVyZW07XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmRpc2FibGVkLTEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5lbmFibGVkLTMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBoZWlnaHQ6IDAuNzVyZW07XFxyXFxuICB3aWR0aDogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmRpc2FibGVkLTMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmRpc2FibGUtaWNvbi1tZXNvIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2Npdi1pbWFnZXMvbWlzYy92ZXRvLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZWNvLXVwZ3JhZGUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcGFkZGluZzogMC43NXJlbTtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZWNvLXVwZ3JhZGUtY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1ibHVlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhjYmE7XFxyXFxufVxcclxcbi5idXR0b24tcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDIuMXJlbTtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbn1cXHJcXG4uc3dpdGNoIGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3R0b206IDRweDtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgbGVmdDogNHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIHdpZHRoOiAyNnB4O1xcclxcbn1cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xcclxcbn1cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hc2staW1nLXZlcnRpY2FsIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcclxcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XFxyXFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2l2LXRlY2gtYW5pbWF0aW9uLWVudGVyLWFjdGl2ZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcXHJcXG4gIC13ZWJraXQtbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMjAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHJcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcXHJcXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xcclxcbiAgbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGFuaW1hdGlvbjogbWFzay1tb3ZlLWluIDJzIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1hbmltYXRpb24tbGVhdmUtYWN0aXZlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcclxcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XFxyXFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYW5pbWF0aW9uOiBtYXNrLW1vdmUtb3V0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1hc2stbW92ZS1pbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICAgIG1hc2stcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDAlO1xcclxcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1hc2stbW92ZS1vdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAwJTtcXHJcXG4gICAgbWFzay1wb3NpdGlvbjogMCAwJTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICAgIG1hc2stcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL21heG9nZGVuL3dlYnNvY2tldC1zdHJlYW0vYmxvYi80OGRjM2RkZjk0M2U1YWRhNjY4YzMxY2NkOTRlOTE4NmYwMmZhZmJkL3dzLWZhbGxiYWNrLmpzXG5cbnZhciB3cyA9IG51bGxcblxuaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdzID0gV2ViU29ja2V0XG59IGVsc2UgaWYgKHR5cGVvZiBNb3pXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdzID0gTW96V2ViU29ja2V0XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdzID0gZ2xvYmFsLldlYlNvY2tldCB8fCBnbG9iYWwuTW96V2ViU29ja2V0XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdzID0gd2luZG93LldlYlNvY2tldCB8fCB3aW5kb3cuTW96V2ViU29ja2V0XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IHNlbGYuV2ViU29ja2V0IHx8IHNlbGYuTW96V2ViU29ja2V0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdzXG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXHRjcmVhdGVEZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXHRcdGxldCBlbmFibGVPdmVycmlkZSA9IG51bGw7XG5cdFx0bGV0IG5hbWVzcGFjZXNDYWNoZTtcblx0XHRsZXQgZW5hYmxlZENhY2hlO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZU92ZXJyaWRlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVuYWJsZU92ZXJyaWRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChuYW1lc3BhY2VzQ2FjaGUgIT09IGNyZWF0ZURlYnVnLm5hbWVzcGFjZXMpIHtcblx0XHRcdFx0XHRuYW1lc3BhY2VzQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzO1xuXHRcdFx0XHRcdGVuYWJsZWRDYWNoZSA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbmFibGVkQ2FjaGU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXHRcdGNyZWF0ZURlYnVnLm5hbWVzcGFjZXMgPSBuYW1lc3BhY2VzO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc2xpY2UoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHQvKipcblx0KiBYWFggRE8gTk9UIFVTRS4gVGhpcyBpcyBhIHRlbXBvcmFyeSBzdHViIGZ1bmN0aW9uLlxuXHQqIFhYWCBJdCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0Ki9cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTb2NrZXRFbnVtcyA9IHtcclxuICBDbGllbnRSZWdpc3RlcjogXCJDbGllbnRSZWdpc3RlclwiLFxyXG4gIENsaWVudFVuUmVnaXN0ZXI6IFwiQ2xpZW50VW5SZWdpc3RlclwiLFxyXG4gIFBJTkc6IFwiUElOR1wiLFxyXG4gIFRFU1Q6IFwiVEVTVFwiLFxyXG4gIEFHRU9WRVJMQVlQVVNIOiBcIkFHRU9WRVJMQVlQVVNIXCIsXHJcbn07XHJcblxyXG5leHBvcnQgeyBTb2NrZXRFbnVtcyB9O1xyXG4iLCJpbXBvcnQgeyBjaXZJY29uc01hcCB9IGZyb20gXCIuLi9jaXYtaW1hZ2VzL2ltYWdlLWhlbHBlci5qc1wiO1xyXG5pbXBvcnQgeyBDaXZJY29uQnVpbGRlciB9IGZyb20gXCIuL2Npdi1pY29uLmpzXCI7XHJcblxyXG5jbGFzcyBDaXZJY29uTGlzdCB7XHJcbiAgX2Npdkljb25DbGlja0NvdW50ZXIgPSAwO1xyXG5cclxuICBidWlsZEVsZW1lbnQoaW5jbHVkZUxhYmVsKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGljb25CdWlsZGVyID0gbmV3IENpdkljb25CdWlsZGVyKCk7XHJcblxyXG4gICAgY2l2SWNvbnNNYXAuZm9yRWFjaCgoY2l2SWNvblVybCwgY2l2TmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKFwiYWRtaW4tY2l2LWljb25cIik7XHJcblxyXG4gICAgICBjb25zdCBpY29uRWxlbWVudCA9IGljb25CdWlsZGVyLmJ1aWxkRWxlbWVudChjaXZJY29uVXJsKTtcclxuICAgICAgaWYgKGluY2x1ZGVMYWJlbCkge1xyXG4gICAgICAgIGNvbnN0IGljb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGljb25MYWJlbC5pbm5lckhUTUwgPSB0aGlzLnNhbml0aXplRGlzcGxheVZhbHVlKGNpdk5hbWUpO1xyXG4gICAgICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaWNvbkxhYmVsKTtcclxuICAgICAgfVxyXG4gICAgICBpY29uRGl2LmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcclxuXHJcbiAgICAgIGljb25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2l2SWNvbkNsaWNrKGV2ZW50KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpY29uRGl2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBoYW5kbGVDaXZJY29uQ2xpY2soZXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBjbGlja2VkICR7dGhpcy5fY2l2SWNvbkNsaWNrQ291bnRlcn1gLCBldmVudC50YXJnZXQuaW5uZXJUZXh0KTtcclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJDbGFzcyA9IGBwbGF5ZXItJHt0aGlzLl9jaXZJY29uQ2xpY2tDb3VudGVyfWA7XHJcblxyXG4gICAgbGV0IG51bWJlck9mUGxheWVyc09uQ2l2ID0gMDtcclxuICAgIGxldCBwbGF5ZXJDc3NTdHJpbmcgPSBcIlwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5mb3JFYWNoKChjc3NDbGFzcykgPT4ge1xyXG4gICAgICBpZiAoY3NzQ2xhc3MuaW5kZXhPZihcInBsYXllci1cIikgPiAtMSkge1xyXG4gICAgICAgIHBsYXllckNzc1N0cmluZyA9IHBsYXllckNzc1N0cmluZy5jb25jYXQoYCR7Y3NzQ2xhc3N9OmApO1xyXG4gICAgICAgIG51bWJlck9mUGxheWVyc09uQ2l2Kys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2N1cnJlbnRQbGF5ZXJDbGFzc31gKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50UGxheWVyQ2xhc3MpO1xyXG4gICAgICBsZXQgbG9jYWxQbGF5ZXJDc3NTdHJpbmcgPSBcIlwiO1xyXG4gICAgICBlLmNsYXNzTGlzdC5mb3JFYWNoKChjc3NDbGFzcykgPT4ge1xyXG4gICAgICAgIGlmIChjc3NDbGFzcy5pbmRleE9mKFwicGxheWVyLVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICBsb2NhbFBsYXllckNzc1N0cmluZyA9IGxvY2FsUGxheWVyQ3NzU3RyaW5nLmNvbmNhdChgJHtjc3NDbGFzc306YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChsb2NhbFBsYXllckNzc1N0cmluZyAhPT0gXCJcIikge1xyXG4gICAgICAgIGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGNvbmljLWdyYWRpZW50KCR7dGhpcy5tYXBBbGxQbGF5ZXJOdW1iZXJzVG9Db2xvclN0cmluZyhsb2NhbFBsYXllckNzc1N0cmluZywgLTEpfSlgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChgcGxheWVyLSR7dGhpcy5fY2l2SWNvbkNsaWNrQ291bnRlcn1gKTtcclxuXHJcbiAgICBpZiAobnVtYmVyT2ZQbGF5ZXJzT25DaXYgPiAwKSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgY29uaWMtZ3JhZGllbnQoJHt0aGlzLm1hcEFsbFBsYXllck51bWJlcnNUb0NvbG9yU3RyaW5nKHBsYXllckNzc1N0cmluZywgdGhpcy5fY2l2SWNvbkNsaWNrQ291bnRlcil9KWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCAke3RoaXMubWFwUGxheWVyTnVtYmVyVG9Db2xvcih0aGlzLl9jaXZJY29uQ2xpY2tDb3VudGVyKX0pYDtcclxuICAgIH1cclxuICAgIGxldCBudW1QbGF5ZXJzID0gMjtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfbnVtUGxheWVyc0luTWF0Y2hcIikpIHtcclxuICAgICAgbnVtUGxheWVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX251bVBsYXllcnNJbk1hdGNoXCIpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2l2SWNvbkNsaWNrQ291bnRlciA9ICh0aGlzLl9jaXZJY29uQ2xpY2tDb3VudGVyICsgMSkgJSBudW1QbGF5ZXJzO1xyXG4gIH1cclxuICBtYXBBbGxQbGF5ZXJOdW1iZXJzVG9Db2xvclN0cmluZyhvdGhlclBsYXllcnMsIHBsYXllck51bWJlcikge1xyXG4gICAgbGV0IG1hcHBlZENvbG9ycyA9IFwiXCI7XHJcbiAgICBvdGhlclBsYXllcnMuc3BsaXQoXCI6XCIpLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG4gICAgICBpZiAocGxheWVyICE9PSBcIlwiKSBtYXBwZWRDb2xvcnMgPSBtYXBwZWRDb2xvcnMuY29uY2F0KHRoaXMubWFwUGxheWVyTnVtYmVyVG9Db2xvcihwbGF5ZXIuc3BsaXQoXCItXCIpWzFdKSkuY29uY2F0KFwiLFwiKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHBsYXllck51bWJlciAhPT0gLTEpIG1hcHBlZENvbG9ycyA9IG1hcHBlZENvbG9ycy5jb25jYXQodGhpcy5tYXBQbGF5ZXJOdW1iZXJUb0NvbG9yKHBsYXllck51bWJlcikpO1xyXG4gICAgaWYgKG1hcHBlZENvbG9ycy5zdWJzdHJpbmcobWFwcGVkQ29sb3JzLmxlbmd0aCAtIDEpID09PSBcIixcIikge1xyXG4gICAgICBtYXBwZWRDb2xvcnMgPSBtYXBwZWRDb2xvcnMuc2xpY2UoMCwgbWFwcGVkQ29sb3JzLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hcHBlZENvbG9ycztcclxuICB9XHJcbiAgbWFwUGxheWVyTnVtYmVyVG9Db2xvcihwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgcGxheWVyTnVtYmVyID09PSBcInN0cmluZ1wiIHx8IHBsYXllck51bWJlciBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICBwbGF5ZXJOdW1iZXIgPSBwYXJzZUludChwbGF5ZXJOdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAocGxheWVyTnVtYmVyKSB7XHJcbiAgICAgIGNhc2UgMDoge1xyXG4gICAgICAgIHJldHVybiBcImJsdWVcIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDE6IHtcclxuICAgICAgICByZXR1cm4gXCJyZWRcIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICByZXR1cm4gXCJncmVlblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgIHJldHVybiBcInllbGxvd1wiO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgIHJldHVybiBcImN5YW5cIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDU6IHtcclxuICAgICAgICByZXR1cm4gXCJwdXJwbGVcIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDY6IHtcclxuICAgICAgICByZXR1cm4gXCJncmV5XCI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA3OiB7XHJcbiAgICAgICAgcmV0dXJuIFwib3JhbmdlXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICByZXNldFN0YXRlKCkge1xyXG4gICAgdGhpcy5fY2l2SWNvbkNsaWNrQ291bnRlciA9IDA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkbWluLWNpdi1pY29uXCIpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgZS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJhZG1pbi1jaXYtaWNvblwiKTtcclxuICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldExpc3RPZkNpdnNDbGlja2VkKCkge1xyXG4gICAgbGV0IG51bVBsYXllcnMgPSAyO1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX251bVBsYXllcnNJbk1hdGNoXCIpKSB7XHJcbiAgICAgIG51bVBsYXllcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9udW1QbGF5ZXJzSW5NYXRjaFwiKS52YWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrZWRDaXZzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBsYXllcnM7IGkrKykge1xyXG4gICAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgcGxheWVyLSR7aX1gKTtcclxuICAgICAgaWYgKHBsYXllckVsZW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNsaWNrZWRDaXZzLnB1c2gocGxheWVyRWxlbWVudFswXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIilbMF0uaW5uZXJUZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsaWNrZWRDaXZzO1xyXG4gIH1cclxuICBzYW5pdGl6ZURpc3BsYXlWYWx1ZSh2YWx1ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgdmFsdWUgPSBgJHt2YWx1ZVswXS50b1VwcGVyQ2FzZSgpfSR7dmFsdWUuc3Vic3RyaW5nKDEsIHZhbHVlLmxlbmd0aCl9YDtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgQ2l2SWNvbkxpc3QgfTtcclxuIiwiY2xhc3MgQ2l2SWNvbkJ1aWxkZXIge1xyXG4gIGJ1aWxkRWxlbWVudChpbWdQYXRoKSB7XHJcbiAgICBjb25zdCBjaXZJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjaXZJY29uLnNyYyA9IGltZ1BhdGg7XHJcblxyXG4gICAgcmV0dXJuIGNpdkljb247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDaXZJY29uQnVpbGRlciB9O1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXp0ZWNzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9henRlY3MucG5nXCIsXG5cdFwiLi9iZW5nYWxpcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYmVuZ2FsaXMucG5nXCIsXG5cdFwiLi9iZXJiZXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9iZXJiZXJzLnBuZ1wiLFxuXHRcIi4vYm9oZW1pYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9ib2hlbWlhbnMucG5nXCIsXG5cdFwiLi9icml0b25zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9icml0b25zLnBuZ1wiLFxuXHRcIi4vYnVsZ2FyaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYnVsZ2FyaWFucy5wbmdcIixcblx0XCIuL2J1cmd1bmRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9idXJndW5kaWFucy5wbmdcIixcblx0XCIuL2J1cm1lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2J1cm1lc2UucG5nXCIsXG5cdFwiLi9ieXphbnRpbmVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9ieXphbnRpbmVzLnBuZ1wiLFxuXHRcIi4vY2VsdHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2NlbHRzLnBuZ1wiLFxuXHRcIi4vY2hpbmVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvY2hpbmVzZS5wbmdcIixcblx0XCIuL2N1bWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvY3VtYW5zLnBuZ1wiLFxuXHRcIi4vZHJhdmlkaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvZHJhdmlkaWFucy5wbmdcIixcblx0XCIuL2V0aGlvcGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2V0aGlvcGlhbnMucG5nXCIsXG5cdFwiLi9mcmFua3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2ZyYW5rcy5wbmdcIixcblx0XCIuL2dvdGhzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9nb3Rocy5wbmdcIixcblx0XCIuL2d1cmphcmFzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9ndXJqYXJhcy5wbmdcIixcblx0XCIuL2hpbmR1c3RhbmlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9oaW5kdXN0YW5pcy5wbmdcIixcblx0XCIuL2h1bnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2h1bnMucG5nXCIsXG5cdFwiLi9pbmNhcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvaW5jYXMucG5nXCIsXG5cdFwiLi9pdGFsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvaXRhbGlhbnMucG5nXCIsXG5cdFwiLi9qYXBhbmVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvamFwYW5lc2UucG5nXCIsXG5cdFwiLi9raG1lci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMva2htZXIucG5nXCIsXG5cdFwiLi9rb3JlYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9rb3JlYW5zLnBuZ1wiLFxuXHRcIi4vbGl0aHVhbmlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2xpdGh1YW5pYW5zLnBuZ1wiLFxuXHRcIi4vbWFneWFycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbWFneWFycy5wbmdcIixcblx0XCIuL21hbGF5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9tYWxheS5wbmdcIixcblx0XCIuL21hbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL21hbGlhbnMucG5nXCIsXG5cdFwiLi9tYXlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL21heWFucy5wbmdcIixcblx0XCIuL21vbmdvbHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL21vbmdvbHMucG5nXCIsXG5cdFwiLi9wZXJzaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvcGVyc2lhbnMucG5nXCIsXG5cdFwiLi9wb2xlcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvcG9sZXMucG5nXCIsXG5cdFwiLi9wb3J0dWd1ZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9wb3J0dWd1ZXNlLnBuZ1wiLFxuXHRcIi4vcm9tYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9yb21hbnMucG5nXCIsXG5cdFwiLi9zYXJhY2Vucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvc2FyYWNlbnMucG5nXCIsXG5cdFwiLi9zaWNpbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3NpY2lsaWFucy5wbmdcIixcblx0XCIuL3NsYXZzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9zbGF2cy5wbmdcIixcblx0XCIuL3NwYW5pc2gucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3NwYW5pc2gucG5nXCIsXG5cdFwiLi90YXRhcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3RhdGFycy5wbmdcIixcblx0XCIuL3RldXRvbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3RldXRvbnMucG5nXCIsXG5cdFwiLi90dXJrcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvdHVya3MucG5nXCIsXG5cdFwiLi92aWV0bmFtZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy92aWV0bmFtZXNlLnBuZ1wiLFxuXHRcIi4vdmlraW5ncy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvdmlraW5ncy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2F6dGVjcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9henRlY3MucG5nXCIsXG5cdFwiLi9henRlY3MudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYXp0ZWNzLnRwLnBuZ1wiLFxuXHRcIi4vYmVuZ2FsaXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYmVuZ2FsaXMucG5nXCIsXG5cdFwiLi9iZW5nYWxpcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9iZW5nYWxpcy50cC5wbmdcIixcblx0XCIuL2JlcmJlcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYmVyYmVycy5wbmdcIixcblx0XCIuL2JlcmJlcnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYmVyYmVycy50cC5wbmdcIixcblx0XCIuL2JvaGVtaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ib2hlbWlhbnMucG5nXCIsXG5cdFwiLi9ib2hlbWlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYm9oZW1pYW5zLnRwLnBuZ1wiLFxuXHRcIi4vYnJpdG9ucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9icml0b25zLnBuZ1wiLFxuXHRcIi4vYnJpdG9ucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9icml0b25zLnRwLnBuZ1wiLFxuXHRcIi4vYnVsZ2FyaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idWxnYXJpYW5zLnBuZ1wiLFxuXHRcIi4vYnVsZ2FyaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idWxnYXJpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vYnVyZ3VuZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnVyZ3VuZGlhbnMucG5nXCIsXG5cdFwiLi9idXJndW5kaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idXJndW5kaWFucy50cC5wbmdcIixcblx0XCIuL2J1cm1lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnVybWVzZS5wbmdcIixcblx0XCIuL2J1cm1lc2UudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnVybWVzZS50cC5wbmdcIixcblx0XCIuL2J5emFudGluZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnl6YW50aW5lcy5wbmdcIixcblx0XCIuL2J5emFudGluZXMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnl6YW50aW5lcy50cC5wbmdcIixcblx0XCIuL2NlbHRzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2NlbHRzLnBuZ1wiLFxuXHRcIi4vY2VsdHMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY2VsdHMudHAucG5nXCIsXG5cdFwiLi9jaGluZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2NoaW5lc2UucG5nXCIsXG5cdFwiLi9jaGluZXNlLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2NoaW5lc2UudHAucG5nXCIsXG5cdFwiLi9jdW1hbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY3VtYW5zLnBuZ1wiLFxuXHRcIi4vY3VtYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2N1bWFucy50cC5wbmdcIixcblx0XCIuL2RyYXZpZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZHJhdmlkaWFucy5wbmdcIixcblx0XCIuL2RyYXZpZGlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZHJhdmlkaWFucy50cC5wbmdcIixcblx0XCIuL2V0aGlvcGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZXRoaW9waWFucy5wbmdcIixcblx0XCIuL2V0aGlvcGlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZXRoaW9waWFucy50cC5wbmdcIixcblx0XCIuL2ZyYW5rcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9mcmFua3MucG5nXCIsXG5cdFwiLi9mcmFua3MudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZnJhbmtzLnRwLnBuZ1wiLFxuXHRcIi4vZ290aHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZ290aHMucG5nXCIsXG5cdFwiLi9nb3Rocy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9nb3Rocy50cC5wbmdcIixcblx0XCIuL2d1cmphcmFzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2d1cmphcmFzLnBuZ1wiLFxuXHRcIi4vZ3VyamFyYXMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZ3VyamFyYXMudHAucG5nXCIsXG5cdFwiLi9oaW5kdXN0YW5pcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9oaW5kdXN0YW5pcy5wbmdcIixcblx0XCIuL2hpbmR1c3RhbmlzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2hpbmR1c3RhbmlzLnRwLnBuZ1wiLFxuXHRcIi4vaHVucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9odW5zLnBuZ1wiLFxuXHRcIi4vaHVucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9odW5zLnRwLnBuZ1wiLFxuXHRcIi4vaW5jYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaW5jYXMucG5nXCIsXG5cdFwiLi9pbmNhcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pbmNhcy50cC5wbmdcIixcblx0XCIuL2luZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaW5kaWFucy5wbmdcIixcblx0XCIuL2luZGlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaW5kaWFucy50cC5wbmdcIixcblx0XCIuL2l0YWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2l0YWxpYW5zLnBuZ1wiLFxuXHRcIi4vaXRhbGlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaXRhbGlhbnMudHAucG5nXCIsXG5cdFwiLi9qYXBhbmVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9qYXBhbmVzZS5wbmdcIixcblx0XCIuL2phcGFuZXNlLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2phcGFuZXNlLnRwLnBuZ1wiLFxuXHRcIi4va2htZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMva2htZXIucG5nXCIsXG5cdFwiLi9raG1lci50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9raG1lci50cC5wbmdcIixcblx0XCIuL2tvcmVhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMva29yZWFucy5wbmdcIixcblx0XCIuL2tvcmVhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMva29yZWFucy50cC5wbmdcIixcblx0XCIuL2xpdGh1YW5pYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2xpdGh1YW5pYW5zLnBuZ1wiLFxuXHRcIi4vbGl0aHVhbmlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbGl0aHVhbmlhbnMudHAucG5nXCIsXG5cdFwiLi9tYWd5YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hZ3lhcnMucG5nXCIsXG5cdFwiLi9tYWd5YXJzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hZ3lhcnMudHAucG5nXCIsXG5cdFwiLi9tYWxheS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tYWxheS5wbmdcIixcblx0XCIuL21hbGF5LnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hbGF5LnRwLnBuZ1wiLFxuXHRcIi4vbWFsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tYWxpYW5zLnBuZ1wiLFxuXHRcIi4vbWFsaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tYWxpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vbWF5YW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21heWFucy5wbmdcIixcblx0XCIuL21heWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tYXlhbnMudHAucG5nXCIsXG5cdFwiLi9tb25nb2xzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21vbmdvbHMucG5nXCIsXG5cdFwiLi9tb25nb2xzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21vbmdvbHMudHAucG5nXCIsXG5cdFwiLi9wZXJzaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wZXJzaWFucy5wbmdcIixcblx0XCIuL3BlcnNpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3BlcnNpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vcG9sZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcG9sZXMucG5nXCIsXG5cdFwiLi9wb2xlcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wb2xlcy50cC5wbmdcIixcblx0XCIuL3BvcnR1Z3Vlc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcG9ydHVndWVzZS5wbmdcIixcblx0XCIuL3BvcnR1Z3Vlc2UudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcG9ydHVndWVzZS50cC5wbmdcIixcblx0XCIuL3JvbWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9yb21hbnMucG5nXCIsXG5cdFwiLi9yb21hbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcm9tYW5zLnRwLnBuZ1wiLFxuXHRcIi4vc2FyYWNlbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvc2FyYWNlbnMucG5nXCIsXG5cdFwiLi9zYXJhY2Vucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zYXJhY2Vucy50cC5wbmdcIixcblx0XCIuL3NpY2lsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zaWNpbGlhbnMucG5nXCIsXG5cdFwiLi9zaWNpbGlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvc2ljaWxpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vc2xhdnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvc2xhdnMucG5nXCIsXG5cdFwiLi9zbGF2cy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zbGF2cy50cC5wbmdcIixcblx0XCIuL3NwYW5pc2gucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvc3BhbmlzaC5wbmdcIixcblx0XCIuL3NwYW5pc2gudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvc3BhbmlzaC50cC5wbmdcIixcblx0XCIuL3RhdGFycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy90YXRhcnMucG5nXCIsXG5cdFwiLi90YXRhcnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdGF0YXJzLnRwLnBuZ1wiLFxuXHRcIi4vdGV1dG9ucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy90ZXV0b25zLnBuZ1wiLFxuXHRcIi4vdGV1dG9ucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy90ZXV0b25zLnRwLnBuZ1wiLFxuXHRcIi4vdHVya3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdHVya3MucG5nXCIsXG5cdFwiLi90dXJrcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy90dXJrcy50cC5wbmdcIixcblx0XCIuL3ZpZXRuYW1lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdmlldG5hbWVzZS5wbmdcIixcblx0XCIuL3ZpZXRuYW1lc2UudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdmlldG5hbWVzZS50cC5wbmdcIixcblx0XCIuL3Zpa2luZ3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdmlraW5ncy5wbmdcIixcblx0XCIuL3Zpa2luZ3MudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdmlraW5ncy50cC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXp0ZWNzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9henRlY3MucG5nXCIsXG5cdFwiLi9iZW5nYWxpcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYmVuZ2FsaXMucG5nXCIsXG5cdFwiLi9iZXJiZXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9iZXJiZXJzLnBuZ1wiLFxuXHRcIi4vYm9oZW1pYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9ib2hlbWlhbnMucG5nXCIsXG5cdFwiLi9icml0b25zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9icml0b25zLnBuZ1wiLFxuXHRcIi4vYnVsZ2FyaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYnVsZ2FyaWFucy5wbmdcIixcblx0XCIuL2J1cmd1bmRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9idXJndW5kaWFucy5wbmdcIixcblx0XCIuL2J1cm1lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2J1cm1lc2UucG5nXCIsXG5cdFwiLi9ieXphbnRpbmVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9ieXphbnRpbmVzLnBuZ1wiLFxuXHRcIi4vY2VsdHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2NlbHRzLnBuZ1wiLFxuXHRcIi4vY2hpbmVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvY2hpbmVzZS5wbmdcIixcblx0XCIuL2N1bWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvY3VtYW5zLnBuZ1wiLFxuXHRcIi4vZHJhdmlkaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvZHJhdmlkaWFucy5wbmdcIixcblx0XCIuL2V0aGlvcGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2V0aGlvcGlhbnMucG5nXCIsXG5cdFwiLi9mcmFua3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2ZyYW5rcy5wbmdcIixcblx0XCIuL2dvdGhzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9nb3Rocy5wbmdcIixcblx0XCIuL2d1cmphcmFzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9ndXJqYXJhcy5wbmdcIixcblx0XCIuL2hpbmR1c3RhbmlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9oaW5kdXN0YW5pcy5wbmdcIixcblx0XCIuL2h1bnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2h1bnMucG5nXCIsXG5cdFwiLi9pbmNhcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvaW5jYXMucG5nXCIsXG5cdFwiLi9pdGFsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvaXRhbGlhbnMucG5nXCIsXG5cdFwiLi9qYXBhbmVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvamFwYW5lc2UucG5nXCIsXG5cdFwiLi9raG1lci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMva2htZXIucG5nXCIsXG5cdFwiLi9rb3JlYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9rb3JlYW5zLnBuZ1wiLFxuXHRcIi4vbGl0aHVhbmlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2xpdGh1YW5pYW5zLnBuZ1wiLFxuXHRcIi4vbWFneWFycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbWFneWFycy5wbmdcIixcblx0XCIuL21hbGF5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9tYWxheS5wbmdcIixcblx0XCIuL21hbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL21hbGlhbnMucG5nXCIsXG5cdFwiLi9tYXlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL21heWFucy5wbmdcIixcblx0XCIuL21vbmdvbHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL21vbmdvbHMucG5nXCIsXG5cdFwiLi9wZXJzaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvcGVyc2lhbnMucG5nXCIsXG5cdFwiLi9wb2xlcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvcG9sZXMucG5nXCIsXG5cdFwiLi9wb3J0dWd1ZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9wb3J0dWd1ZXNlLnBuZ1wiLFxuXHRcIi4vcm9tYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9yb21hbnMucG5nXCIsXG5cdFwiLi9zYXJhY2Vucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvc2FyYWNlbnMucG5nXCIsXG5cdFwiLi9zaWNpbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3NpY2lsaWFucy5wbmdcIixcblx0XCIuL3NsYXZzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9zbGF2cy5wbmdcIixcblx0XCIuL3NwYW5pc2gucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3NwYW5pc2gucG5nXCIsXG5cdFwiLi90YXRhcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3RhdGFycy5wbmdcIixcblx0XCIuL3RldXRvbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3RldXRvbnMucG5nXCIsXG5cdFwiLi90dXJrcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvdHVya3MucG5nXCIsXG5cdFwiLi92aWV0bmFtZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy92aWV0bmFtZXNlLnBuZ1wiLFxuXHRcIi4vdmlraW5ncy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvdmlraW5ncy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZykkXCI7IiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICByZXR1cm4gci5rZXlzKCkubWFwKHIpO1xyXG59XHJcbmZ1bmN0aW9uIGltcG9ydEFsbEludG9NYXAociwgcmVsYXRpdmVJbWFnZVBhdGgpIHtcclxuICBjb25zdCBteU1hcCA9IG5ldyBNYXAoKTtcclxuICByLmtleXMoKVxyXG4gICAgLm1hcChyKVxyXG4gICAgLmZvckVhY2goKHJlbGF0aXZlVXJsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNpdktleSA9IHJlbGF0aXZlVXJsLnJlcGxhY2UocmVsYXRpdmVJbWFnZVBhdGgsIFwiXCIpLnJlcGxhY2UoXCIucG5nXCIsIFwiXCIpLnNwbGl0KFwiLlwiKVswXTtcclxuICAgICAgaWYgKG15TWFwLmhhcyhjaXZLZXkpKSB7XHJcbiAgICAgICAgY29uc3QgY2l2S2V5UGFydHMgPSByZWxhdGl2ZVVybC5yZXBsYWNlKHJlbGF0aXZlSW1hZ2VQYXRoLCBcIlwiKS5yZXBsYWNlKFwiLnBuZ1wiLCBcIlwiKS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgY29uc3QgY2l2S2V5MiA9IGAke2NpdktleVBhcnRzWzBdfS4ke2NpdktleVBhcnRzWzFdfWA7XHJcbiAgICAgICAgbXlNYXAuc2V0KGNpdktleTIsIHJlbGF0aXZlVXJsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBteU1hcC5zZXQoY2l2S2V5LCByZWxhdGl2ZVVybCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIHJldHVybiBteU1hcDtcclxufVxyXG5jb25zdCBjaXZJY29uc01hcCA9IGltcG9ydEFsbEludG9NYXAocmVxdWlyZS5jb250ZXh0KFwiLi9pY29ucy9cIiwgdHJ1ZSwgL1xcLihwbmcpJC8pLCBcImNvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9cIik7XHJcbmNvbnN0IGNpdlVuaXF1ZVVuaXRJY29uc01hcCA9IGltcG9ydEFsbEludG9NYXAocmVxdWlyZS5jb250ZXh0KFwiLi9jaXYtdW5pcXVlLXVuaXRzL1wiLCB0cnVlLCAvXFwuKHBuZykkLyksIFwiY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvXCIpO1xyXG5jb25zdCBjaXZFbWJsZW1JbWFnZU1hcCA9IGltcG9ydEFsbEludG9NYXAocmVxdWlyZS5jb250ZXh0KFwiLi9jaXYtZW1ibGVtcy9cIiwgdHJ1ZSwgL1xcLihwbmcpJC8pLCBcImNvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9cIik7XHJcbmNvbnN0IGNpdlVwZ3JhZGVJY29uTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL3VwZ3JhZGUtaWNvbnMvXCIsIHRydWUsIC9cXC4ocG5nKSQvKSwgXCJjb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9cIik7XHJcblxyXG5leHBvcnQgeyBjaXZJY29uc01hcCwgY2l2VW5pcXVlVW5pdEljb25zTWFwLCBjaXZFbWJsZW1JbWFnZU1hcCwgY2l2VXBncmFkZUljb25NYXAgfTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FyYmFsZXN0ZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYXJiYWxlc3Rlci5wbmdcIixcblx0XCIuL2FyY2hpdGVjdHVyZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9hcmNoaXRlY3R1cmUucG5nXCIsXG5cdFwiLi9hcnJvd3NsaXRzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Fycm93c2xpdHMucG5nXCIsXG5cdFwiLi9hcnNvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9hcnNvbi5wbmdcIixcblx0XCIuL2F0b25lbWVudC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9hdG9uZW1lbnQucG5nXCIsXG5cdFwiLi9iYWxsaXN0aWNzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2JhbGxpc3RpY3MucG5nXCIsXG5cdFwiLi9ibGFzdCBmdXJuYWNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2JsYXN0IGZ1cm5hY2UucG5nXCIsXG5cdFwiLi9ibG9jayBwcmludGluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ibG9jayBwcmludGluZy5wbmdcIixcblx0XCIuL2Jsb29kbGluZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYmxvb2RsaW5lcy5wbmdcIixcblx0XCIuL2JvZGtpbiBhcnJvdy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ib2RraW4gYXJyb3cucG5nXCIsXG5cdFwiLi9ib21iYXJkIHRvd2VyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2JvbWJhcmQgdG93ZXIucG5nXCIsXG5cdFwiLi9ib3cgc2F3LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2JvdyBzYXcucG5nXCIsXG5cdFwiLi9icmFjZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYnJhY2VyLnBuZ1wiLFxuXHRcIi4vY2Fubm9uIGdhbGxlb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2Fubm9uIGdhbGxlb24ucG5nXCIsXG5cdFwiLi9jYXBwZWQgcmFtLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2NhcHBlZCByYW0ucG5nXCIsXG5cdFwiLi9jYXJlZW5pbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2FyZWVuaW5nLnBuZ1wiLFxuXHRcIi4vY2FzdGxlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Nhc3RsZS5wbmdcIixcblx0XCIuL2Nhc3RsZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jYXN0bGUudHAucG5nXCIsXG5cdFwiLi9jYXZhbGllci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jYXZhbGllci5wbmdcIixcblx0XCIuL2NoYWluIGJhcmRpbmcgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2hhaW4gYmFyZGluZyBhcm1vci5wbmdcIixcblx0XCIuL2NoYWluIG1haWwgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2hhaW4gbWFpbCBhcm1vci5wbmdcIixcblx0XCIuL2NoYW1waW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2NoYW1waW9uLnBuZ1wiLFxuXHRcIi4vY2hlbWlzdHJ5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2NoZW1pc3RyeS5wbmdcIixcblx0XCIuL2Nyb3Agcm90YXRpb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY3JvcCByb3RhdGlvbi5wbmdcIixcblx0XCIuL2Nyb3NzYm93bWFuLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Nyb3NzYm93bWFuLnBuZ1wiLFxuXHRcIi4vZGFyay5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9kYXJrLnBuZ1wiLFxuXHRcIi4vZGFyay50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9kYXJrLnRwLnBuZ1wiLFxuXHRcIi4vZG91YmxlLWJpdCBheGUucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZG91YmxlLWJpdCBheGUucG5nXCIsXG5cdFwiLi9kcnkgZG9jay5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9kcnkgZG9jay5wbmdcIixcblx0XCIuL2VhZ2xlIHdhcnJpb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZWFnbGUgd2Fycmlvci5wbmdcIixcblx0XCIuL2VsaXRlIGJhdHRsZSBlbGVwaGFudC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSBiYXR0bGUgZWxlcGhhbnQucG5nXCIsXG5cdFwiLi9lbGl0ZSBjYW5ub24gZ2FsbGVvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSBjYW5ub24gZ2FsbGVvbi5wbmdcIixcblx0XCIuL2VsaXRlIGVhZ2xlIHdhcnJpb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZWxpdGUgZWFnbGUgd2Fycmlvci5wbmdcIixcblx0XCIuL2VsaXRlIHNraXJtaXNoZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZWxpdGUgc2tpcm1pc2hlci5wbmdcIixcblx0XCIuL2VsaXRlIHN0ZXBwZSBsYW5jZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZWxpdGUgc3RlcHBlIGxhbmNlci5wbmdcIixcblx0XCIuL2VsaXRlIHVuaXF1ZSB1bml0LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VsaXRlIHVuaXF1ZSB1bml0LnBuZ1wiLFxuXHRcIi4vZmFpdGgucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZmFpdGgucG5nXCIsXG5cdFwiLi9mYXN0IGZpcmUgc2hpcC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mYXN0IGZpcmUgc2hpcC5wbmdcIixcblx0XCIuL2ZlcnZvci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mZXJ2b3IucG5nXCIsXG5cdFwiLi9mZXVkYWwucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZmV1ZGFsLnBuZ1wiLFxuXHRcIi4vZmV1ZGFsLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZldWRhbC50cC5wbmdcIixcblx0XCIuL2ZsZXRjaGluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mbGV0Y2hpbmcucG5nXCIsXG5cdFwiLi9mb3JnaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZvcmdpbmcucG5nXCIsXG5cdFwiLi9mb3J0aWZpZWQgd2FsbC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mb3J0aWZpZWQgd2FsbC5wbmdcIixcblx0XCIuL2dhbGxlb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZ2FsbGVvbi5wbmdcIixcblx0XCIuL2dpbGxuZXRzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2dpbGxuZXRzLnBuZ1wiLFxuXHRcIi4vZ29sZCBtaW5pbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZ29sZCBtaW5pbmcucG5nXCIsXG5cdFwiLi9nb2xkIHNoYWZ0IG1pbmluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9nb2xkIHNoYWZ0IG1pbmluZy5wbmdcIixcblx0XCIuL2d1YXJkIHRvd2VyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2d1YXJkIHRvd2VyLnBuZ1wiLFxuXHRcIi4vaGFsYmVyZGllci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oYWxiZXJkaWVyLnBuZ1wiLFxuXHRcIi4vaGFuZCBjYXJ0LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hhbmQgY2FydC5wbmdcIixcblx0XCIuL2hlYXRlZCBzaG90LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlYXRlZCBzaG90LnBuZ1wiLFxuXHRcIi4vaGVhdnkgY2FtZWwucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVhdnkgY2FtZWwucG5nXCIsXG5cdFwiLi9oZWF2eSBjYXYgYXJjaGVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlYXZ5IGNhdiBhcmNoZXIucG5nXCIsXG5cdFwiLi9oZWF2eSBkZW1vIHNoaXAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVhdnkgZGVtbyBzaGlwLnBuZ1wiLFxuXHRcIi4vaGVhdnkgcGxvdy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF2eSBwbG93LnBuZ1wiLFxuXHRcIi4vaGVhdnkgc2NvcnBpb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVhdnkgc2NvcnBpb24ucG5nXCIsXG5cdFwiLi9oZXJiYWwgbWVkaWNpbmUucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVyYmFsIG1lZGljaW5lLnBuZ1wiLFxuXHRcIi4vaGVyZXN5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlcmVzeS5wbmdcIixcblx0XCIuL2hvcnNlIGNvbGxhci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ob3JzZSBjb2xsYXIucG5nXCIsXG5cdFwiLi9odXNiYW5kcnkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaHVzYmFuZHJ5LnBuZ1wiLFxuXHRcIi4vaHVzc2FyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2h1c3Nhci5wbmdcIixcblx0XCIuL2lsbHVtaW5hdGlvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pbGx1bWluYXRpb24ucG5nXCIsXG5cdFwiLi9pbXBlcmlhbCBjYW1lbC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pbXBlcmlhbCBjYW1lbC5wbmdcIixcblx0XCIuL2ltcGVyaWFsIHNraXJtaXNoZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaW1wZXJpYWwgc2tpcm1pc2hlci5wbmdcIixcblx0XCIuL2ltcGVyaWFsLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ltcGVyaWFsLnBuZ1wiLFxuXHRcIi4vaW1wZXJpYWwudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaW1wZXJpYWwudHAucG5nXCIsXG5cdFwiLi9pcm9uIGNhc3RpbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaXJvbiBjYXN0aW5nLnBuZ1wiLFxuXHRcIi4va2VlcC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9rZWVwLnBuZ1wiLFxuXHRcIi4vbGVhdGhlciBhcmNoZXIgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbGVhdGhlciBhcmNoZXIgYXJtb3IucG5nXCIsXG5cdFwiLi9saWdodCBjYXZhbHJ5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2xpZ2h0IGNhdmFscnkucG5nXCIsXG5cdFwiLi9sb25nIHN3b3Jkc21hbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9sb25nIHN3b3Jkc21hbi5wbmdcIixcblx0XCIuL21hbi1hdC1hcm1zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL21hbi1hdC1hcm1zLnBuZ1wiLFxuXHRcIi4vbWFzb25yeS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9tYXNvbnJ5LnBuZ1wiLFxuXHRcIi4vbXVyZGVyIGhvbGVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL211cmRlciBob2xlcy5wbmdcIixcblx0XCIuL29uYWdlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9vbmFnZXIucG5nXCIsXG5cdFwiLi9wYWRkZWQgYXJjaGVyIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3BhZGRlZCBhcmNoZXIgYXJtb3IucG5nXCIsXG5cdFwiLi9wYWxhZGluLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3BhbGFkaW4ucG5nXCIsXG5cdFwiLi9wYXJ0aGlhbiB0YWN0aWNzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3BhcnRoaWFuIHRhY3RpY3MucG5nXCIsXG5cdFwiLi9waWtlbWFuLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3Bpa2VtYW4ucG5nXCIsXG5cdFwiLi9wbGF0ZSBiYXJkaW5nIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3BsYXRlIGJhcmRpbmcgYXJtb3IucG5nXCIsXG5cdFwiLi9wbGF0ZSBtYWlsIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3BsYXRlIG1haWwgYXJtb3IucG5nXCIsXG5cdFwiLi9yZWRlbXB0aW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3JlZGVtcHRpb24ucG5nXCIsXG5cdFwiLi9yaW5nIGFyY2hlciBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9yaW5nIGFyY2hlciBhcm1vci5wbmdcIixcblx0XCIuL3NhbmN0aXR5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NhbmN0aXR5LnBuZ1wiLFxuXHRcIi4vc2NhbGUgYmFyZGluZyBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zY2FsZSBiYXJkaW5nIGFybW9yLnBuZ1wiLFxuXHRcIi4vc2NhbGUgbWFpbCBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zY2FsZSBtYWlsIGFybW9yLnBuZ1wiLFxuXHRcIi4vc2hpcHdyaWdodC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zaGlwd3JpZ2h0LnBuZ1wiLFxuXHRcIi4vc2llZ2UgZW5naW5lZXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NpZWdlIGVuZ2luZWVycy5wbmdcIixcblx0XCIuL3NpZWdlIG9uYWdlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zaWVnZSBvbmFnZXIucG5nXCIsXG5cdFwiLi9zaWVnZSByYW0ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2llZ2UgcmFtLnBuZ1wiLFxuXHRcIi4vc3F1aXJlcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zcXVpcmVzLnBuZ1wiLFxuXHRcIi4vc3RvbmUgbWluaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3N0b25lIG1pbmluZy5wbmdcIixcblx0XCIuL3N0b25lIHNoYWZ0IG1pbmluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zdG9uZSBzaGFmdCBtaW5pbmcucG5nXCIsXG5cdFwiLi9zdXBwbGllcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zdXBwbGllcy5wbmdcIixcblx0XCIuL3RoZW9jcmFjeS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy90aGVvY3JhY3kucG5nXCIsXG5cdFwiLi90aHVtYiByaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3RodW1iIHJpbmcucG5nXCIsXG5cdFwiLi90cmFja2luZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy90cmFja2luZy5wbmdcIixcblx0XCIuL3RyZWFkbWlsbCBjcmFuZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy90cmVhZG1pbGwgY3JhbmUucG5nXCIsXG5cdFwiLi90d28taGFuZGVkIHN3b3Jkc21hbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy90d28taGFuZGVkIHN3b3Jkc21hbi5wbmdcIixcblx0XCIuL3R3by1tYW4gc2F3LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3R3by1tYW4gc2F3LnBuZ1wiLFxuXHRcIi4vdW5pcXVlIHRlY2ggY2FzdGxlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3VuaXF1ZSB0ZWNoIGNhc3RsZS5wbmdcIixcblx0XCIuL3VuaXF1ZSB0ZWNoIGltcGVyaWFsLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3VuaXF1ZSB0ZWNoIGltcGVyaWFsLnBuZ1wiLFxuXHRcIi4vd2FyIGdhbGxleS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy93YXIgZ2FsbGV5LnBuZ1wiLFxuXHRcIi4vd2hlZWxiYXJyb3cucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvd2hlZWxiYXJyb3cucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZykkXCI7IiwiaW1wb3J0IHsgU29ja2V0RW51bXMgfSBmcm9tIFwiLi4vLi4vY29tbW9uLWRhdGFcIjtcclxuY2xhc3MgVGVjaE92ZXJsYXlDb250cm9sIHtcclxuICBfZGF0YVN0b3JlO1xyXG4gIF9jaXZMaXN0O1xyXG4gIF9jbGllbnRXZWJzb2NrZXQ7XHJcbiAgY29uc3RydWN0b3IoZGF0YVN0b3JlLCBjaXZMaXN0LCBjbGllbnRXZWJzb2NrZXQpIHtcclxuICAgIHRoaXMuX2RhdGFTdG9yZSA9IGRhdGFTdG9yZTtcclxuICAgIHRoaXMuX2Npdkxpc3QgPSBjaXZMaXN0O1xyXG4gICAgdGhpcy5fY2xpZW50V2Vic29ja2V0ID0gY2xpZW50V2Vic29ja2V0O1xyXG4gIH1cclxuICBidWlsZEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxlZnQtY29sdW1uXCIpO1xyXG4gICAgLy8gY29udHJvbHNcclxuICAgIGNvbnN0IGNvbnRyb2xzRWxlbWVudCA9IHRoaXMuYnVpbGRUZWNoU2V0dGluZ3NQYW5lbCgpO1xyXG5cclxuICAgIC8vIGxpc3Qgb2YgY2l2c1xyXG4gICAgY29uc3QgY2l2TGlzdEVsZW1lbnQgPSB0aGlzLl9jaXZMaXN0LmJ1aWxkRWxlbWVudCh0cnVlKTtcclxuICAgIGNpdkxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZWNoLWNpdi1saXN0XCIpO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udHJvbHNFbGVtZW50KTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2l2TGlzdEVsZW1lbnQpO1xyXG5cclxuICAgIC8vd2hlbiB0aGUgZG9tIGxvYWRzIHRoZSBjaXYgbGlzdCwgdXBkYXRlIGl0IHdpdGggb3VyIHNldHRpbmdzXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5tb2RpZnlDaXZDb3VudENTUygpO1xyXG4gICAgfSwgNTApO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBidWlsZFRlY2hTZXR0aW5nc1BhbmVsKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZWNoLXNldHRpbmdzXCIpO1xyXG5cclxuICAgIC8vaGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRlY2gtaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlRlY2hub2xvZ3kgT3ZlcmxheVwiO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCBidXR0b25zRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidXR0b25zRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uLWJ1dHRvbnNcIik7XHJcbiAgICBidXR0b25zRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkQnV0dG9uKFwiQ2xlYXJcIiwgXCJidXR0b24tcmVkXCIsIHRoaXMub25DbGVhckNsaWNrZWQuYmluZCh0aGlzKSkpO1xyXG4gICAgYnV0dG9uc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEJ1dHRvbihcIlNob3dcIiwgXCJidXR0b24tYmx1ZVwiLCB0aGlzLm9uU2hvd0NsaWNrZWQuYmluZCh0aGlzKSkpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25zRWxlbWVudCk7XHJcblxyXG4gICAgY29uc3Qgc2V0dGluZ3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNldHRpbmdzRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uLXNldHRpbmdzXCIpO1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgJHtrZXl9IDo6ICR7dGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlW2tleV19YCk7XHJcbiAgICAgIGlmIChrZXkgPT09IFwiX2xhYmVsX3VzZXJJZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlW2tleV0gPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgc2V0dGluZ3NFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRDaGVja0JveChrZXksIHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZVtrZXldKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZVtrZXldKSB7XHJcbiAgICAgICAgc2V0dGluZ3NFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRJbnB1dEJveChrZXksIHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZVtrZXldKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzZXR0aW5nc0VsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBidWlsZENoZWNrQm94KGxhYmVsLCB2YWx1ZSkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2V0dGluZy1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGxhYmVsKTtcclxuXHJcbiAgICBjb25zdCBzcGFuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW5MYWJlbC5pbm5lckhUTUwgPSB0aGlzLnNhbml0aXplRGlzcGxheVZhbHVlKGxhYmVsKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgaW5wdXRDaGVja2JveC5pZCA9IGxhYmVsO1xyXG4gICAgaW5wdXRDaGVja2JveC5jaGVja2VkID0gdmFsdWU7XHJcbiAgICBpbnB1dENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2F2ZURhdGEoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3BhbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzcGFuQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInNsaWRlclwiKTtcclxuICAgIHNwYW5DaGVja2JveC5jbGFzc0xpc3QuYWRkKFwicm91bmRcIik7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5MYWJlbCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dENoZWNrYm94KTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3BhbkNoZWNrYm94KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuICBidWlsZElucHV0Qm94KGxhYmVsLCB2YWx1ZSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBlbGVtZW50TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGxhYmVsKTtcclxuXHJcbiAgICBjb25zdCBzcGFuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW5MYWJlbC5pbm5lckhUTUwgPSB0aGlzLnNhbml0aXplRGlzcGxheVZhbHVlKGxhYmVsKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0TnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1udW1iZXJcIik7XHJcbiAgICBpbnB1dE51bWJlci50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIGlucHV0TnVtYmVyLmlkID0gbGFiZWw7XHJcbiAgICBpbnB1dE51bWJlci52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaW5wdXROdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zYXZlRGF0YShldmVudCk7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiX251bUNpdnNQZXJSb3dcIikge1xyXG4gICAgICAgIHRoaXMubW9kaWZ5Q2l2Q291bnRDU1MoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50TGFiZWwpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuTGFiZWwpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dE51bWJlcik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG4gIGJ1aWxkQnV0dG9uKGxhYmVsLCBidXR0b25DbGFzcywgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZy1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2V0dGluZy1idXR0b25cIiwgYnV0dG9uQ2xhc3MpO1xyXG4gICAgYnV0dG9uLmlkID0gbGFiZWw7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gbGFiZWw7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIG9uQ2xlYXJDbGlja2VkKGV2ZW50KSB7XHJcbiAgICBjb25zdCByZXF1ZXN0VHlwZSA9IFwiQ2FsbFZlbmRvclJlcXVlc3RcIjtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHZlbmRvck5hbWU6IFwib2JzLWJyb3dzZXJcIixcclxuICAgICAgcmVxdWVzdFR5cGU6IFwiZW1pdF9ldmVudFwiLFxyXG4gICAgICByZXF1ZXN0RGF0YToge1xyXG4gICAgICAgIGV2ZW50VHlwZTogXCJvYnMtd2Vic29ja2V0LW92ZXJsYXktcHVzaC1ldmVudFwiLFxyXG4gICAgICAgIGV2ZW50RGF0YTogeyB0ZXN0S2V5OiBcInRlc3RWYWx1ZVwiIH0sXHJcbiAgICAgICAgLy8gZXZlbnRfZGF0YTogeyBBR0VPVkVSTEFZUFVTSDogdGhpcy5idWlsZFBheWxvYWQoZmFsc2UpIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fY2xpZW50V2Vic29ja2V0LmNhbGwocmVxdWVzdFR5cGUsIGRhdGEpO1xyXG4gICAgdGhpcy5fY2l2TGlzdC5yZXNldFN0YXRlKCk7XHJcbiAgfVxyXG4gIG9uU2hvd0NsaWNrZWQoZXZlbnQpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RUeXBlID0gXCJDYWxsVmVuZG9yUmVxdWVzdFwiO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdmVuZG9yTmFtZTogXCJvYnMtYnJvd3NlclwiLFxyXG4gICAgICByZXF1ZXN0VHlwZTogXCJlbWl0X2V2ZW50XCIsXHJcbiAgICAgIHJlcXVlc3REYXRhOiB7XHJcbiAgICAgICAgZXZlbnRUeXBlOiBcIm9icy13ZWJzb2NrZXQtb3ZlcmxheS1wdXNoLWV2ZW50XCIsXHJcbiAgICAgICAgZXZlbnREYXRhOiB7IHRlc3RLZXk6IFwidGVzdFZhbHVlXCIgfSxcclxuICAgICAgICAvLyBldmVudF9kYXRhOiB7IEFHRU9WRVJMQVlQVVNIOiB0aGlzLmJ1aWxkUGF5bG9hZCh0cnVlKSB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIHRoaXMuX2NsaWVudFdlYnNvY2tldC5jYWxsKHJlcXVlc3RUeXBlLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkUGF5bG9hZChzaG93KSB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLCB7IHNob3dPdmVybGF5OiBzaG93LCBwaWNrZWRDaXZzOiB0aGlzLl9jaXZMaXN0LmdldExpc3RPZkNpdnNDbGlja2VkKCkgfSk7XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxuICB9XHJcblxyXG4gIHNhdmVEYXRhKCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzdG9yZWRWYWx1ZTtcclxuICAgICAgaWYgKGtleSA9PT0gXCJfbGFiZWxfdXNlcklkXCIpIHtcclxuICAgICAgICBzdG9yZWRWYWx1ZSA9IHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZVtrZXldO1xyXG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSkudmFsdWUgPT09IFwib25cIikge1xyXG4gICAgICAgIHN0b3JlZFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KS5jaGVja2VkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0b3JlZFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KS52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmVba2V5XSA9IHN0b3JlZFZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9kYXRhU3RvcmUuc2F2ZURhdGEoKTtcclxuICB9XHJcbiAgbW9kaWZ5Q2l2Q291bnRDU1MoKSB7XHJcbiAgICBjb25zdCB3aWR0aFBlcmNlbnQgPSAxMDAgLyB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUuX251bUNpdnNQZXJSb3c7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkbWluLWNpdi1pY29uXCIpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgZS5zdHlsZS5mbGV4ID0gYDEgMCAke3dpZHRoUGVyY2VudH0lYDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVEaXNwbGF5VmFsdWUodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFwiX3Nob3dcIiwgXCJcIikucmVwbGFjZShcIl91c2VcIiwgXCJcIikucmVwbGFjZShcIl9cIiwgXCJcIikucmVwbGFjZShcIlRlY2hcIiwgXCJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUZWNoT3ZlcmxheUNvbnRyb2wgfTtcclxuIiwiY2xhc3MgVGVjaG5vbG9neU92ZXJsYXlTdG9yZSB7XHJcbiAgX3VzZVNvdW5kID0gZmFsc2U7XHJcbiAgX2F1dG9IaWRlID0gdHJ1ZTtcclxuICBfc2hvd1RlY2hPdmVybGF5ID0gdHJ1ZTtcclxuICBfc2hvd0JsYWNrc21pdGhUZWNoID0gZmFsc2U7XHJcbiAgX3Nob3dVbml2ZXJzaXR5VGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93TW9uYXN0YXJ5VGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93RG9ja1RlY2ggPSBmYWxzZTtcclxuICBfc2hvd0JhcnJhY2tzVGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93QXJjaGVyeVRlY2ggPSBmYWxzZTtcclxuICBfc2hvd1N0YWJsZVRlY2ggPSBmYWxzZTtcclxuICBfc2hvd1NpZWdlV29ya3Nob3BUZWNoID0gZmFsc2U7XHJcbiAgX2F1dG9IaWRlRGVsYXkgPSAxMjtcclxuICBfbnVtQ2l2c1BlclJvdyA9IDc7XHJcbiAgX251bVBsYXllcnNJbk1hdGNoID0gMjtcclxuICBfbGFiZWxfdXNlcklkID0gXCJcIjtcclxufVxyXG5jbGFzcyBVSVNldHRpbmdzT3ZlcmxheVN0b3JlIHtcclxuICBfZm9udFNpemUgPSAyMjtcclxuICBfdGVjaEJhY2tncm91bmRPcGFjaXR5ID0gMC44O1xyXG59XHJcbmNsYXNzIFNlbnNpdGl2ZURhdGFTdG9yZSB7XHJcbiAgX3dlYnNvY2tldF9pcCA9IFwiXCI7XHJcbiAgX3dlYnNvY2tldF9wYXNzd29yZCA9IFwiXCI7XHJcbiAgX3dlYnNvY2tldF9wb3J0ID0gNDQ1NTtcclxufVxyXG5cclxuY2xhc3MgTG9jYWxTYXZlZERhdGEge1xyXG4gIF90ZWNoT3ZlcmxheVN0b3JlO1xyXG4gIF91aVNldHRpbmdzT3ZlcmxheVN0b3JlO1xyXG4gIF9zZW5zaXRpdmVEYXRhU3RvcmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fdGVjaE92ZXJsYXlTdG9yZSA9IG5ldyBUZWNobm9sb2d5T3ZlcmxheVN0b3JlKCk7XHJcbiAgICB0aGlzLl91aVNldHRpbmdzT3ZlcmxheVN0b3JlID0gbmV3IFVJU2V0dGluZ3NPdmVybGF5U3RvcmUoKTtcclxuICAgIHRoaXMuX3NlbnNpdGl2ZURhdGFTdG9yZSA9IG5ldyBTZW5zaXRpdmVEYXRhU3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHNhdmVEYXRhKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYFNhdmluZyAke3RoaXMuX3RlY2hPdmVybGF5U3RvcmV9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlY2hPdmVybGF5U3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fdGVjaE92ZXJsYXlTdG9yZSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYFNhdmluZyAke3RoaXMuX3VpU2V0dGluZ3NPdmVybGF5U3RvcmV9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVpU2V0dGluZ3NPdmVybGF5U3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fdWlTZXR0aW5nc092ZXJsYXlTdG9yZSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJTYXZpbmdcIiwgdGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Vuc2l0aXZlRGF0YVN0b3JlXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlbnNpdGl2ZURhdGFTdG9yZSkpO1xyXG4gIH1cclxuXHJcbiAgbG9hZERhdGEoKSB7XHJcbiAgICBjb25zdCB0ZWNoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWNoT3ZlcmxheVN0b3JlXCIpKTtcclxuICAgIGlmICh0ZWNoRGF0YSkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3RlY2hPdmVybGF5U3RvcmUsIHRlY2hEYXRhKTtcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkKTtcclxuICAgICAgaWYgKCF0aGlzLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWQpIHtcclxuICAgICAgICAvLyB0aGlzLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gICAgICAgIHRoaXMuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdGhpcy5fdGVjaE92ZXJsYXlTdG9yZSA9IHRlY2hEYXRhO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdWlEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVpU2V0dGluZ3NPdmVybGF5U3RvcmVcIikpO1xyXG4gICAgaWYgKHVpRGF0YSkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3VpU2V0dGluZ3NPdmVybGF5U3RvcmUsIHVpRGF0YSk7XHJcbiAgICAgIC8vIHRoaXMuX3VpU2V0dGluZ3NPdmVybGF5U3RvcmUgPSB1aURhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5zaXRpdmVEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbnNpdGl2ZURhdGFTdG9yZVwiKSk7XHJcbiAgICBpZiAoc2Vuc2l0aXZlRGF0YSkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3NlbnNpdGl2ZURhdGFTdG9yZSwgc2Vuc2l0aXZlRGF0YSk7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJMb2FkZWRcIiwgdGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlKTtcclxuICAgICAgLy8gdGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlID0gc2Vuc2l0aXZlRGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZURhdGEoa2V5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTG9jYWxTYXZlZERhdGEgfTtcclxuIiwiaW1wb3J0IHsgVGVjaE92ZXJsYXlDb250cm9sIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVjaC1vdmVybGF5LWNvbnRyb2wvdGVjaC1vdmVybGF5LWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgQ2l2SWNvbkxpc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaXYtaWNvbnMvY2l2LWljb24tbGlzdFwiO1xyXG5cclxuY2xhc3MgQWRtaW5QYWdlIHtcclxuICBfZGF0YVN0b3JlO1xyXG4gIF9jbGllbnRXZWJzb2NrZXQ7XHJcbiAgY29uc3RydWN0b3IoZGF0YVN0b3JlLCBjbGllbnRXZWJzb2NrZXQpIHtcclxuICAgIHRoaXMuX2RhdGFTdG9yZSA9IGRhdGFTdG9yZTtcclxuICAgIHRoaXMuX2NsaWVudFdlYnNvY2tldCA9IGNsaWVudFdlYnNvY2tldDtcclxuICB9XHJcbiAgYnVpbGRIdG1sKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYWRtaW4tYm9keVwiKTtcclxuICAgIGNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkeW5hbWljLWNvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgYWRtaW5QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkbWluUGFnZS5jbGFzc0xpc3QuYWRkKFwiYWRtaW4tcGFnZVwiKTtcclxuXHJcbiAgICBhZG1pblBhZ2UuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFdlYlNvY2tldEh0bWwoKSk7XHJcbiAgICBjb25zdCBjaXZJY29uTGlzdCA9IG5ldyBDaXZJY29uTGlzdCgpO1xyXG4gICAgY29uc3QgdGVjaE92ZXJsYXlDb250cm9sID0gbmV3IFRlY2hPdmVybGF5Q29udHJvbCh0aGlzLl9kYXRhU3RvcmUsIGNpdkljb25MaXN0LCB0aGlzLl9jbGllbnRXZWJzb2NrZXQpO1xyXG4gICAgYWRtaW5QYWdlLmFwcGVuZENoaWxkKHRlY2hPdmVybGF5Q29udHJvbC5idWlsZEVsZW1lbnQoKSk7XHJcblxyXG4gICAgYm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRtaW5QYWdlKTtcclxuICB9XHJcbiAgYnVpbGRXZWJTb2NrZXRIdG1sKCkge1xyXG4gICAgY29uc3Qgd2Vic29ja2V0Q29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2Vic29ja2V0Q29udHJvbHMuaWQgPSBcIndlYnNvY2tldC1jb250cm9sc1wiO1xyXG4gICAgd2Vic29ja2V0Q29udHJvbHMuY2xhc3NMaXN0LmFkZChcIndlYnNvY2tldC1jb250cm9sc1wiKTtcclxuXHJcbiAgICBjb25zdCBpcElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaXBJbnB1dEJveC5jbGFzc0xpc3QuYWRkKFwid2Vic29ja2V0LWlucHV0XCIpO1xyXG4gICAgaXBJbnB1dEJveC5pZCA9IFwid2Vic29ja2V0LWlwLWlucHV0XCI7XHJcbiAgICBpcElucHV0Qm94LnR5cGUgPSBcInRleHRcIjtcclxuICAgIGlwSW5wdXRCb3gudmFsdWUgPSB0aGlzLl9kYXRhU3RvcmUuX3NlbnNpdGl2ZURhdGFTdG9yZS5fd2Vic29ja2V0X2lwID09PSBcIlwiID8gXCJvYnMtd2Vic29ja2V0IGlwdjQgb3IgaXB2NiBhZGRyZXNzXCIgOiB0aGlzLl9kYXRhU3RvcmUuX3NlbnNpdGl2ZURhdGFTdG9yZS5fd2Vic29ja2V0X2lwO1xyXG4gICAgd2Vic29ja2V0Q29udHJvbHMuYXBwZW5kQ2hpbGQoaXBJbnB1dEJveCk7XHJcblxyXG4gICAgY29uc3QgcGFzc3dvcmRJbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHBhc3N3b3JkSW5wdXRCb3guY2xhc3NMaXN0LmFkZChcIndlYnNvY2tldC1pbnB1dFwiKTtcclxuICAgIHBhc3N3b3JkSW5wdXRCb3guaWQgPSBcIndlYnNvY2tldC1wYXNzd29yZC1pbnB1dFwiO1xyXG4gICAgcGFzc3dvcmRJbnB1dEJveC50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgcGFzc3dvcmRJbnB1dEJveC52YWx1ZSA9IHRoaXMuX2RhdGFTdG9yZS5fc2Vuc2l0aXZlRGF0YVN0b3JlLl93ZWJzb2NrZXRfcGFzc3dvcmQgPT09IFwiXCIgPyBcInBhc3N3b3JkXCIgOiB0aGlzLl9kYXRhU3RvcmUuX3NlbnNpdGl2ZURhdGFTdG9yZS5fd2Vic29ja2V0X3Bhc3N3b3JkO1xyXG5cclxuICAgIHdlYnNvY2tldENvbnRyb2xzLmFwcGVuZENoaWxkKHBhc3N3b3JkSW5wdXRCb3gpO1xyXG5cclxuICAgIGNvbnN0IHdlYnNvY2tldENvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB3ZWJzb2NrZXRDb25uZWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgd2Vic29ja2V0Q29ubmVjdEJ1dHRvbi52YWx1ZSA9IFwiQ29ubmVjdFwiO1xyXG4gICAgd2Vic29ja2V0Q29ubmVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwid2Vic29ja2V0LXNldHRpbmctYnV0dG9uXCIsIFwiYnV0dG9uLWJsdWVcIik7XHJcbiAgICB3ZWJzb2NrZXRDb25uZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fZGF0YVN0b3JlLnNhdmVEYXRhKCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29ubmVjdFRvT2JzV2Vic29ja2V0KCk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBvYnMtd2Vic29ja2V0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBJUFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3ZWJzb2NrZXRDb250cm9scy5hcHBlbmRDaGlsZCh3ZWJzb2NrZXRDb25uZWN0QnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCB3ZWJzb2NrZXREaXNjb25uZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgd2Vic29ja2V0RGlzY29ubmVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIHdlYnNvY2tldERpc2Nvbm5lY3RCdXR0b24udmFsdWUgPSBcIkRpc2Nvbm5lY3RcIjtcclxuICAgIHdlYnNvY2tldERpc2Nvbm5lY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcIndlYnNvY2tldC1zZXR0aW5nLWJ1dHRvblwiLCBcImJ1dHRvbi1yZWRcIik7XHJcbiAgICB3ZWJzb2NrZXREaXNjb25uZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fZGF0YVN0b3JlLnNhdmVEYXRhKCk7XHJcbiAgICAgIGF3YWl0IHRoaXMuZGlzY29ubmVjdEZyb21PYnNXZWJzb2NrZXQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJEaXNjb25uZWN0ZWQgZnJvbSBvYnMtd2Vic29ja2V0XCIpO1xyXG4gICAgfSk7XHJcbiAgICB3ZWJzb2NrZXRDb250cm9scy5hcHBlbmRDaGlsZCh3ZWJzb2NrZXREaXNjb25uZWN0QnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gd2Vic29ja2V0Q29udHJvbHM7XHJcbiAgfVxyXG4gIGFzeW5jIGNvbm5lY3RUb09ic1dlYnNvY2tldCgpIHtcclxuICAgIGNvbnN0IGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWJzb2NrZXQtaXAtaW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgaXBQYXJ0cyA9IGlwLnNwbGl0KFwiLlwiKTtcclxuICAgIGxldCBmb3JtYXR0ZWRJcCA9IFwiXCI7XHJcbiAgICBsZXQgaXNWYWxpZElwID0gZmFsc2U7XHJcbiAgICBpZiAoaXAuaW5kZXhPZihcIi5uZ3Jvay1mcmVlLmFwcFwiKSA+IDApIHtcclxuICAgICAgZm9ybWF0dGVkSXAgPSBpcDtcclxuICAgICAgaXNWYWxpZElwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChpcFBhcnRzLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAvLyBpcHY0XHJcbiAgICAgIGZvcm1hdHRlZElwID0gaXA7XHJcbiAgICAgIGlzVmFsaWRJcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpcFBhcnRzID0gaXAuc3BsaXQoXCI6XCIpO1xyXG4gICAgaWYgKGlwUGFydHMubGVuZ3RoID09PSA4KSB7XHJcbiAgICAgIC8vIGlwdjZcclxuICAgICAgaWYgKGlwLmluZGV4T2YoXCJbXCIpICE9PSAwKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSXAgPSBgWyR7aXB9XWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybWF0dGVkSXAgPSBpcDtcclxuICAgICAgfVxyXG4gICAgICBpc1ZhbGlkSXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzVmFsaWRJcCkge1xyXG4gICAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vic29ja2V0LXBhc3N3b3JkLWlucHV0XCIpLnZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fZGF0YVN0b3JlLl9zZW5zaXRpdmVEYXRhU3RvcmVbXCJfd2Vic29ja2V0X2lwXCJdID0gZm9ybWF0dGVkSXA7XHJcbiAgICAgIHRoaXMuX2RhdGFTdG9yZS5fc2Vuc2l0aXZlRGF0YVN0b3JlW1wiX3dlYnNvY2tldF9wYXNzd29yZFwiXSA9IHBhc3N3b3JkO1xyXG4gICAgICBhd2FpdCB0aGlzLl9jbGllbnRXZWJzb2NrZXQuY29ubmVjdChgd3NzOi8vJHtmb3JtYXR0ZWRJcH06NDQ1NWAsIHBhc3N3b3JkKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGFzeW5jIGRpc2Nvbm5lY3RGcm9tT2JzV2Vic29ja2V0KCkge1xyXG4gICAgYXdhaXQgdGhpcy5fY2xpZW50V2Vic29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFkbWluUGFnZSB9O1xyXG4iLCJjbGFzcyBEZWZhdWx0SFRNTFBhZ2VFbGVtZW50cyB7XHJcbiAgX2RhdGFTdG9yZTtcclxuICBjb25zdHJ1Y3RvcihkYXRhU3RvcmUpIHtcclxuICAgIHRoaXMuX2RhdGFTdG9yZSA9IGRhdGFTdG9yZTtcclxuICB9XHJcbiAgYnVpbGRGb290ZXIoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGVsZW1lbnQuaWQgPSBcImZvb3RlclwiO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibXktZm9vdGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHRleHRTcGFuRWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHRleHRTcGFuRWxlbWVudDEuaW5uZXJIVE1MID0gXCJDcmVhdGVkIGJ5IFwiO1xyXG5cclxuICAgIGNvbnN0IHRyZWVUd2l0Y2hBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHRyZWVUd2l0Y2hBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LnR3aXRjaC50di9pdHNhdHJlZWVcIik7XHJcbiAgICB0cmVlVHdpdGNoQW5jaG9yLmlubmVySFRNTCA9IFwiSXRzQVRyZWVlXCI7XHJcblxyXG4gICAgY29uc3QgdGV4dFNwYW5FbGVtZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgdGV4dFNwYW5FbGVtZW50Mi5pbm5lckhUTUwgPSBgICgyMDE5LSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSkgLSBgO1xyXG5cclxuICAgIGNvbnN0IHRyZWVHaXRodWJBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHRyZWVHaXRodWJBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9UcmVlZS90ZWNoLXdpZGdldC1vdmVybGF5XCIpO1xyXG4gICAgdHJlZUdpdGh1YkFuY2hvci5pbm5lckhUTUwgPSBcIkdpdEh1YlwiO1xyXG4gICAgY29uc3QgY3JlYXRlZEJ5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjcmVhdGVkQnlFbGVtZW50LmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbWVudDEpO1xyXG4gICAgY3JlYXRlZEJ5RWxlbWVudC5hcHBlbmRDaGlsZCh0cmVlVHdpdGNoQW5jaG9yKTtcclxuICAgIGNyZWF0ZWRCeUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtZW50Mik7XHJcbiAgICBjcmVhdGVkQnlFbGVtZW50LmFwcGVuZENoaWxkKHRyZWVHaXRodWJBbmNob3IpO1xyXG5cclxuICAgIGNvbnN0IHRleHRTcGFuRWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHRleHRTcGFuRWxlbWVudDMuaW5uZXJIVE1MID0gYEFnZSBvZiBFbXBpcmVzIElJIMKpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gPGI+QW9FIFRlY2gvTWFwIE92ZXJsYXkgZm9yIEFnZSBvZiBFbXBpcmVzIElJPC9iPiB3YXMgY3JlYXRlZCB1bmRlciBNaWNyb3NvZnQncyBcImA7XHJcblxyXG4gICAgY29uc3QgbWljcm9zb2Z0QW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBtaWNyb3NvZnRBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3Lnhib3guY29tL2VuLXVzL2RldmVsb3BlcnMvcnVsZXNcIik7XHJcbiAgICBtaWNyb3NvZnRBbmNob3IuaW5uZXJIVE1MID0gXCJHYW1lIENvbnRlbnQgVXNhZ2UgUnVsZXNcIjtcclxuXHJcbiAgICBjb25zdCB0ZXh0U3BhbkVsZW1lbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB0ZXh0U3BhbkVsZW1lbnQ0LmlubmVySFRNTCA9IGBcIiB1c2luZyBhc3NldHMgZnJvbSBBZ2Ugb2YgRW1waXJlcyBJSSwgYW5kIGl0IGlzIG5vdCBlbmRvcnNlZCBieSBvciBhZmZpbGlhdGVkIHdpdGggTWljcm9zb2Z0LmA7XHJcbiAgICBjb25zdCBub25FbmRvcnNlbWVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbm9uRW5kb3JzZW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbWVudDMpO1xyXG4gICAgbm9uRW5kb3JzZW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKG1pY3Jvc29mdEFuY2hvcik7XHJcbiAgICBub25FbmRvcnNlbWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtZW50NCk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVkQnlFbGVtZW50KTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRW5kb3JzZW1lbnRFbGVtZW50KTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBidWlsZEhlYWRlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJteS1oZWFkZXJcIik7XHJcblxyXG4gICAgY29uc3QgYWRtaW5QYWdlUm91dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRtaW5QYWdlUm91dGUuaW5uZXJIVE1MID0gXCJ8IEFETUlOIHxcIjtcclxuICAgIGFkbWluUGFnZVJvdXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWQpO1xyXG4gICAgICAvLyBhbGVydChgQ29waWVkIGlkIHRvIGNsaXBib2FyZDogJHt0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZH1gKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgI2FkbWluLyR7dGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWR9YDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJvdW5kTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb3VuZE1hbmFnZXIuaW5uZXJIVE1MID0gXCJ8IFJPVU5EUyB8XCI7XHJcbiAgICByb3VuZE1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIjbWF0Y2hzZXRcIjtcclxuICAgICAgYWxlcnQoXCJOb3QgeWV0IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0dGluZ3NQYWdlUm91dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0dGluZ3NQYWdlUm91dGUuaW5uZXJIVE1MID0gXCJ8IENMSUVOVCB8XCI7XHJcbiAgICBzZXR0aW5nc1BhZ2VSb3V0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vICAgd2luZG93Lm9wZW4oYCNjbGllbnQvJHt0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZH1gLCBcIl9ibGFua1wiKTtcclxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgI2NsaWVudC8ke3RoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkfWA7XHJcbiAgICAgIHdpbmRvdy5vcGVuKGAvdGVjaC1vdmVybGF5L2NsaWVudCMke3RoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkfWAsIFwiX2JsYW5rXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChhZG1pblBhZ2VSb3V0ZSk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJvdW5kTWFuYWdlcik7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNldHRpbmdzUGFnZVJvdXRlKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbiAgYnVpbGRGYXZJY29uKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgZWxlbWVudC50eXBlID0gXCJzaG9ydGN1dCBpY29uXCI7XHJcbiAgICBlbGVtZW50LmhyZWYgPSBcImZhdmljb24uZ2lmXCI7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbiAgaW5pdERlZmF1bHRFbGVtZW50cyhoaWRlSGVhZGVyLCBoaWRlRm9vdGVyKSB7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMuYnVpbGRGYXZJY29uKCkpO1xyXG4gICAgaWYgKCFoaWRlSGVhZGVyKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYmVmb3JlKHRoaXMuYnVpbGRIZWFkZXIoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWhpZGVGb290ZXIpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hZnRlcih0aGlzLmJ1aWxkRm9vdGVyKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRGVmYXVsdEhUTUxQYWdlRWxlbWVudHMgfTtcclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IExvY2FsU2F2ZWREYXRhIH0gZnJvbSBcIi4vZGF0YXN0b3JlLmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRIVE1MUGFnZUVsZW1lbnRzIH0gZnJvbSBcIi4vaHRtbC1wYWdlcy9kZWZhdWx0LWVsZW1lbnRzLmpzXCI7XHJcbmltcG9ydCB7IEFkbWluUGFnZSB9IGZyb20gXCIuL2h0bWwtcGFnZXMvYWRtaW4tcGFnZS5qc1wiO1xyXG5pbXBvcnQgT0JTV2ViU29ja2V0IGZyb20gXCJvYnMtd2Vic29ja2V0LWpzXCI7XHJcblxyXG5jb25zdCBzYXZlZERhdGEgPSBuZXcgTG9jYWxTYXZlZERhdGEoKTtcclxuc2F2ZWREYXRhLmxvYWREYXRhKCk7XHJcbnNhdmVkRGF0YS5zYXZlRGF0YSgpO1xyXG5cclxuY29uc3Qgb2JzID0gbmV3IE9CU1dlYlNvY2tldCgpO1xyXG5cclxuY29uc3QgZHluYW1pY0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5keW5hbWljQ29udGVudERpdi5pZCA9IFwiZHluYW1pYy1jb250ZW50XCI7XHJcbmR5bmFtaWNDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJib2R5LWNvbnRlbnRcIik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHluYW1pY0NvbnRlbnREaXYpO1xyXG5cclxuY29uc3QgZGVmYXVsdEVsZW1lbnRzID0gbmV3IERlZmF1bHRIVE1MUGFnZUVsZW1lbnRzKHNhdmVkRGF0YSk7XHJcbmRlZmF1bHRFbGVtZW50cy5pbml0RGVmYXVsdEVsZW1lbnRzKCk7XHJcblxyXG5uZXcgQWRtaW5QYWdlKHNhdmVkRGF0YSwgb2JzKS5idWlsZEh0bWwoKTtcclxuIiwiLyogKGlnbm9yZWQpICovIiwiaW1wb3J0IGNyZWF0ZURlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0IFdlYlNvY2tldElwbWwgZnJvbSAnaXNvbW9ycGhpYy13cyc7XG5pbXBvcnQgc2hhMjU2IGZyb20gJ2NyeXB0by1qcy9zaGEyNTYuanMnO1xuaW1wb3J0IEJhc2U2NCBmcm9tICdjcnlwdG8tanMvZW5jLWJhc2U2NC5qcyc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIFdlYlNvY2tldE9wQ29kZTtcbihmdW5jdGlvbiAoV2ViU29ja2V0T3BDb2RlKSB7XG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBtZXNzYWdlIHNlbnQgYnkgb2JzLXdlYnNvY2tldCB0byBuZXdseSBjb25uZWN0ZWQgY2xpZW50cy5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJIZWxsb1wiXSA9IDBdID0gXCJIZWxsb1wiO1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2Ugc2VudCBieSBhIG5ld2x5IGNvbm5lY3RlZCBjbGllbnQgdG8gb2JzLXdlYnNvY2tldCBpbiByZXNwb25zZSB0byBhIGBIZWxsb2AuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiSWRlbnRpZnlcIl0gPSAxXSA9IFwiSWRlbnRpZnlcIjtcbiAgLyoqXG4gICAqIFRoZSByZXNwb25zZSBzZW50IGJ5IG9icy13ZWJzb2NrZXQgdG8gYSBjbGllbnQgYWZ0ZXIgaXQgaGFzIHN1Y2Nlc3NmdWxseSBpZGVudGlmaWVkIHdpdGggb2JzLXdlYnNvY2tldC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJJZGVudGlmaWVkXCJdID0gMl0gPSBcIklkZW50aWZpZWRcIjtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHNlbnQgYnkgYW4gYWxyZWFkeS1pZGVudGlmaWVkIGNsaWVudCB0byB1cGRhdGUgaWRlbnRpZmljYXRpb24gcGFyYW1ldGVycy5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJSZWlkZW50aWZ5XCJdID0gM10gPSBcIlJlaWRlbnRpZnlcIjtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHNlbnQgYnkgb2JzLXdlYnNvY2tldCBjb250YWluaW5nIGFuIGV2ZW50IHBheWxvYWQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiRXZlbnRcIl0gPSA1XSA9IFwiRXZlbnRcIjtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHNlbnQgYnkgYSBjbGllbnQgdG8gb2JzLXdlYnNvY2tldCB0byBwZXJmb3JtIGEgcmVxdWVzdC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJSZXF1ZXN0XCJdID0gNl0gPSBcIlJlcXVlc3RcIjtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHNlbnQgYnkgb2JzLXdlYnNvY2tldCBpbiByZXNwb25zZSB0byBhIHBhcnRpY3VsYXIgcmVxdWVzdCBmcm9tIGEgY2xpZW50LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIlJlcXVlc3RSZXNwb25zZVwiXSA9IDddID0gXCJSZXF1ZXN0UmVzcG9uc2VcIjtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHNlbnQgYnkgYSBjbGllbnQgdG8gb2JzLXdlYnNvY2tldCB0byBwZXJmb3JtIGEgYmF0Y2ggb2YgcmVxdWVzdHMuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiUmVxdWVzdEJhdGNoXCJdID0gOF0gPSBcIlJlcXVlc3RCYXRjaFwiO1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2Ugc2VudCBieSBvYnMtd2Vic29ja2V0IGluIHJlc3BvbnNlIHRvIGEgcGFydGljdWxhciBiYXRjaCBvZiByZXF1ZXN0cyBmcm9tIGEgY2xpZW50LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIlJlcXVlc3RCYXRjaFJlc3BvbnNlXCJdID0gOV0gPSBcIlJlcXVlc3RCYXRjaFJlc3BvbnNlXCI7XG59KShXZWJTb2NrZXRPcENvZGUgfHwgKFdlYlNvY2tldE9wQ29kZSA9IHt9KSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlLCBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLWxpdGVyYWwtZW51bS1tZW1iZXIgKi9cbnZhciBFdmVudFN1YnNjcmlwdGlvbjtcbihmdW5jdGlvbiAoRXZlbnRTdWJzY3JpcHRpb24pIHtcbiAgLyoqXG4gICAqIFN1YmNyaXB0aW9uIHZhbHVlIHVzZWQgdG8gZGlzYWJsZSBhbGwgZXZlbnRzLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYEdlbmVyYWxgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJHZW5lcmFsXCJdID0gMV0gPSBcIkdlbmVyYWxcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYENvbmZpZ2AgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIkNvbmZpZ1wiXSA9IDJdID0gXCJDb25maWdcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYFNjZW5lc2AgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIlNjZW5lc1wiXSA9IDRdID0gXCJTY2VuZXNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYElucHV0c2AgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIklucHV0c1wiXSA9IDhdID0gXCJJbnB1dHNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYFRyYW5zaXRpb25zYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiVHJhbnNpdGlvbnNcIl0gPSAxNl0gPSBcIlRyYW5zaXRpb25zXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBGaWx0ZXJzYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiRmlsdGVyc1wiXSA9IDMyXSA9IFwiRmlsdGVyc1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgT3V0cHV0c2AgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIk91dHB1dHNcIl0gPSA2NF0gPSBcIk91dHB1dHNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYFNjZW5lSXRlbXNgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJTY2VuZUl0ZW1zXCJdID0gMTI4XSA9IFwiU2NlbmVJdGVtc1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgTWVkaWFJbnB1dHNgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJNZWRpYUlucHV0c1wiXSA9IDI1Nl0gPSBcIk1lZGlhSW5wdXRzXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSB0aGUgYFZlbmRvckV2ZW50YCBldmVudC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiVmVuZG9yc1wiXSA9IDUxMl0gPSBcIlZlbmRvcnNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYFVpYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiVWlcIl0gPSAxMDI0XSA9IFwiVWlcIjtcbiAgLyoqXG4gICAqIEhlbHBlciB0byByZWNlaXZlIGFsbCBub24taGlnaC12b2x1bWUgZXZlbnRzLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJBbGxcIl0gPSAyMDQ3XSA9IFwiQWxsXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSB0aGUgYElucHV0Vm9sdW1lTWV0ZXJzYCBoaWdoLXZvbHVtZSBldmVudC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiSW5wdXRWb2x1bWVNZXRlcnNcIl0gPSA2NTUzNl0gPSBcIklucHV0Vm9sdW1lTWV0ZXJzXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSB0aGUgYElucHV0QWN0aXZlU3RhdGVDaGFuZ2VkYCBoaWdoLXZvbHVtZSBldmVudC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiSW5wdXRBY3RpdmVTdGF0ZUNoYW5nZWRcIl0gPSAxMzEwNzJdID0gXCJJbnB1dEFjdGl2ZVN0YXRlQ2hhbmdlZFwiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgdGhlIGBJbnB1dFNob3dTdGF0ZUNoYW5nZWRgIGhpZ2gtdm9sdW1lIGV2ZW50LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJJbnB1dFNob3dTdGF0ZUNoYW5nZWRcIl0gPSAyNjIxNDRdID0gXCJJbnB1dFNob3dTdGF0ZUNoYW5nZWRcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIHRoZSBgU2NlbmVJdGVtVHJhbnNmb3JtQ2hhbmdlZGAgaGlnaC12b2x1bWUgZXZlbnQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIlNjZW5lSXRlbVRyYW5zZm9ybUNoYW5nZWRcIl0gPSA1MjQyODhdID0gXCJTY2VuZUl0ZW1UcmFuc2Zvcm1DaGFuZ2VkXCI7XG59KShFdmVudFN1YnNjcmlwdGlvbiB8fCAoRXZlbnRTdWJzY3JpcHRpb24gPSB7fSkpO1xuLyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlLCBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLWxpdGVyYWwtZW51bS1tZW1iZXIgKi9cbnZhciBSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlO1xuKGZ1bmN0aW9uIChSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlKSB7XG4gIC8qKlxuICAgKiBOb3QgYSByZXF1ZXN0IGJhdGNoLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZVtSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlW1wiTm9uZVwiXSA9IC0xXSA9IFwiTm9uZVwiO1xuICAvKipcbiAgICogQSByZXF1ZXN0IGJhdGNoIHdoaWNoIHByb2Nlc3NlcyBhbGwgcmVxdWVzdHMgc2VyaWFsbHksIGFzIGZhc3QgYXMgcG9zc2libGUuXG4gICAqXG4gICAqIE5vdGU6IFRvIGludHJvZHVjZSBhcnRpZmljaWFsIGRlbGF5LCB1c2UgdGhlIGBTbGVlcGAgcmVxdWVzdCBhbmQgdGhlIGBzbGVlcE1pbGxpc2AgcmVxdWVzdCBmaWVsZC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGVbUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZVtcIlNlcmlhbFJlYWx0aW1lXCJdID0gMF0gPSBcIlNlcmlhbFJlYWx0aW1lXCI7XG4gIC8qKlxuICAgKiBBIHJlcXVlc3QgYmF0Y2ggdHlwZSB3aGljaCBwcm9jZXNzZXMgYWxsIHJlcXVlc3RzIHNlcmlhbGx5LCBpbiBzeW5jIHdpdGggdGhlIGdyYXBoaWNzIHRocmVhZC4gRGVzaWduZWQgdG8gcHJvdmlkZSBoaWdoIGFjY3VyYWN5IGZvciBhbmltYXRpb25zLlxuICAgKlxuICAgKiBOb3RlOiBUbyBpbnRyb2R1Y2UgYXJ0aWZpY2lhbCBkZWxheSwgdXNlIHRoZSBgU2xlZXBgIHJlcXVlc3QgYW5kIHRoZSBgc2xlZXBGcmFtZXNgIHJlcXVlc3QgZmllbGQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlW1JlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGVbXCJTZXJpYWxGcmFtZVwiXSA9IDFdID0gXCJTZXJpYWxGcmFtZVwiO1xuICAvKipcbiAgICogQSByZXF1ZXN0IGJhdGNoIHR5cGUgd2hpY2ggcHJvY2Vzc2VzIGFsbCByZXF1ZXN0cyB1c2luZyBhbGwgYXZhaWxhYmxlIHRocmVhZHMgaW4gdGhlIHRocmVhZCBwb29sLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGlzIG1haW5seSBleHBlcmltZW50YWwsIGFuZCBvbmx5IHJlYWxseSBzaG93cyBpdHMgY29sb3JzIGR1cmluZyByZXF1ZXN0cyB3aGljaCByZXF1aXJlIGxvdHMgb2ZcbiAgICogYWN0aXZlIHByb2Nlc3NpbmcsIGxpa2UgYEdldFNvdXJjZVNjcmVlbnNob3RgLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZVtSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlW1wiUGFyYWxsZWxcIl0gPSAyXSA9IFwiUGFyYWxsZWxcIjtcbn0pKFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGUgfHwgKFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGUgPSB7fSkpO1xuXG4vKipcbiAqIFNIQTI1NiBIYXNoaW5nLlxuICogQHBhcmFtICB7c3RyaW5nfSBbc2FsdD0nJ10gc2FsdC5cbiAqIEBwYXJhbSAge3N0cmluZ30gW2NoYWxsZW5nZT0nJ10gY2hhbGxlbmdlLlxuICogQHBhcmFtICB7c3RyaW5nfSBtc2cgTWVzc2FnZSB0byBlbmNvZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBzaGEyNTYgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGF1dGhlbnRpY2F0aW9uSGFzaGluZyAoc2FsdCwgY2hhbGxlbmdlLCBtc2cpIHtcbiAgY29uc3QgaGFzaCA9IEJhc2U2NC5zdHJpbmdpZnkoc2hhMjU2KG1zZyArIHNhbHQpKTtcbiAgcmV0dXJuIEJhc2U2NC5zdHJpbmdpZnkoc2hhMjU2KGhhc2ggKyBjaGFsbGVuZ2UpKTtcbn1cblxuY29uc3QgX2V4Y2x1ZGVkID0gW1wiYXV0aGVudGljYXRpb25cIiwgXCJycGNWZXJzaW9uXCJdO1xuY29uc3QgZGVidWcgPSBjcmVhdGVEZWJ1Zygnb2JzLXdlYnNvY2tldC1qcycpO1xuY2xhc3MgT0JTV2ViU29ja2V0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmNvZGUgPSB2b2lkIDA7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgfVxufVxuY2xhc3MgQmFzZU9CU1dlYlNvY2tldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLl9pZGVudGlmaWVkID0gZmFsc2U7XG4gICAgdGhpcy5pbnRlcm5hbExpc3RlbmVycyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLnNvY2tldCA9IHZvaWQgMDtcbiAgfVxuICBzdGF0aWMgZ2VuZXJhdGVNZXNzYWdlSWQoKSB7XG4gICAgcmV0dXJuIFN0cmluZyhCYXNlT0JTV2ViU29ja2V0LnJlcXVlc3RDb3VudGVyKyspO1xuICB9XG4gIGdldCBpZGVudGlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZGVudGlmaWVkO1xuICB9XG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGFuIG9icy13ZWJzb2NrZXQgc2VydmVyXG4gICAqIEBwYXJhbSB1cmwgV2Vic29ja2V0IHNlcnZlciB0byBjb25uZWN0IHRvIChpbmNsdWRpbmcgd3M6Ly8gb3Igd3NzOi8vIHByb3RvY29sKVxuICAgKiBAcGFyYW0gcGFzc3dvcmQgUGFzc3dvcmRcbiAgICogQHBhcmFtIGlkZW50aWZpY2F0aW9uUGFyYW1zIERhdGEgZm9yIElkZW50aWZ5IGV2ZW50XG4gICAqIEByZXR1cm5zIEhlbGxvICYgSWRlbnRpZmllZCBtZXNzYWdlcyBkYXRhIChjb21iaW5lZClcbiAgICovXG4gIGFzeW5jIGNvbm5lY3QodXJsID0gJ3dzOi8vMTI3LjAuMC4xOjQ0NTUnLCBwYXNzd29yZCwgaWRlbnRpZmljYXRpb25QYXJhbXMgPSB7fSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICBhd2FpdCB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25DbG9zZWRQcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZSgnQ29ubmVjdGlvbkNsb3NlZCcpO1xuICAgICAgY29uc3QgY29ubmVjdGlvbkVycm9yUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoJ0Nvbm5lY3Rpb25FcnJvcicpO1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmFjZShbYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBoZWxsbyA9IGF3YWl0IF90aGlzLmNyZWF0ZUNvbm5lY3Rpb24odXJsKTtcbiAgICAgICAgX3RoaXMuZW1pdCgnSGVsbG8nLCBoZWxsbyk7XG4gICAgICAgIHJldHVybiBfdGhpcy5pZGVudGlmeShoZWxsbywgcGFzc3dvcmQsIGlkZW50aWZpY2F0aW9uUGFyYW1zKTtcbiAgICAgIH0oKSxcbiAgICAgIC8vIENob29zZSB0aGUgYmVzdCBwcm9taXNlIGZvciBjb25uZWN0aW9uIGVycm9yL2Nsb3NlXG4gICAgICAvLyBJbiBicm93c2VyIGNvbm5lY3Rpb24gY2xvc2UgaGFzIGNsb3NlIGNvZGUgKyByZWFzb24sXG4gICAgICAvLyB3aGlsZSBpbiBub2RlIGVycm9yIGV2ZW50IGhhcyB0aGVzZVxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2b2lkIGNvbm5lY3Rpb25FcnJvclByb21pc2UudGhlbihlID0+IHtcbiAgICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdm9pZCBjb25uZWN0aW9uQ2xvc2VkUHJvbWlzZS50aGVuKGUgPT4ge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KV0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGlzY29ubmVjdCBmcm9tIG9icy13ZWJzb2NrZXQgc2VydmVyXG4gICAqL1xuICBhc3luYyBkaXNjb25uZWN0KCkge1xuICAgIGlmICghdGhpcy5zb2NrZXQgfHwgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0SXBtbC5DTE9TRUQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29ubmVjdGlvbkNsb3NlZFByb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKCdDb25uZWN0aW9uQ2xvc2VkJyk7XG4gICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICBhd2FpdCBjb25uZWN0aW9uQ2xvc2VkUHJvbWlzZTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlIHNlc3Npb24gcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gZGF0YSBSZWlkZW50aWZ5IGRhdGFcbiAgICogQHJldHVybnMgSWRlbnRpZmllZCBtZXNzYWdlIGRhdGFcbiAgICovXG4gIGFzeW5jIHJlaWRlbnRpZnkoZGF0YSkge1xuICAgIGNvbnN0IGlkZW50aWZpZWRQcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZShgb3A6JHtXZWJTb2NrZXRPcENvZGUuSWRlbnRpZmllZH1gKTtcbiAgICBhd2FpdCB0aGlzLm1lc3NhZ2UoV2ViU29ja2V0T3BDb2RlLlJlaWRlbnRpZnksIGRhdGEpO1xuICAgIHJldHVybiBpZGVudGlmaWVkUHJvbWlzZTtcbiAgfVxuICAvKipcbiAgICogU2VuZCBhIHJlcXVlc3QgdG8gb2JzLXdlYnNvY2tldFxuICAgKiBAcGFyYW0gcmVxdWVzdFR5cGUgUmVxdWVzdCBuYW1lXG4gICAqIEBwYXJhbSByZXF1ZXN0RGF0YSBSZXF1ZXN0IGRhdGFcbiAgICogQHJldHVybnMgUmVxdWVzdCByZXNwb25zZVxuICAgKi9cbiAgYXN5bmMgY2FsbChyZXF1ZXN0VHlwZSwgcmVxdWVzdERhdGEpIHtcbiAgICBjb25zdCByZXF1ZXN0SWQgPSBCYXNlT0JTV2ViU29ja2V0LmdlbmVyYXRlTWVzc2FnZUlkKCk7XG4gICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZShgcmVzOiR7cmVxdWVzdElkfWApO1xuICAgIGF3YWl0IHRoaXMubWVzc2FnZShXZWJTb2NrZXRPcENvZGUuUmVxdWVzdCwge1xuICAgICAgcmVxdWVzdElkLFxuICAgICAgcmVxdWVzdFR5cGUsXG4gICAgICByZXF1ZXN0RGF0YVxuICAgIH0pO1xuICAgIGNvbnN0IHtcbiAgICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgICByZXNwb25zZURhdGFcbiAgICB9ID0gYXdhaXQgcmVzcG9uc2VQcm9taXNlO1xuICAgIGlmICghcmVxdWVzdFN0YXR1cy5yZXN1bHQpIHtcbiAgICAgIHRocm93IG5ldyBPQlNXZWJTb2NrZXRFcnJvcihyZXF1ZXN0U3RhdHVzLmNvZGUsIHJlcXVlc3RTdGF0dXMuY29tbWVudCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH1cbiAgLyoqXG4gICAqIFNlbmQgYSBiYXRjaCByZXF1ZXN0IHRvIG9icy13ZWJzb2NrZXRcbiAgICogQHBhcmFtIHJlcXVlc3RzIEFycmF5IG9mIFJlcXVlc3Qgb2JqZWN0cyAodHlwZSBhbmQgZGF0YSlcbiAgICogQHBhcmFtIG9wdGlvbnMgQSBzZXQgb2Ygb3B0aW9ucyBmb3IgaG93IHRoZSBiYXRjaCB3aWxsIGJlIGV4ZWN1dGVkXG4gICAqIEBwYXJhbSBvcHRpb25zLmV4ZWN1dGlvblR5cGUgVGhlIG1vZGUgb2YgZXhlY3V0aW9uIG9icy13ZWJzb2NrZXQgd2lsbCBydW4gdGhlIGJhdGNoIGluXG4gICAqIEBwYXJhbSBvcHRpb25zLmhhbHRPbkZhaWx1cmUgV2hldGhlciBvYnMtd2Vic29ja2V0IHNob3VsZCBzdG9wIGV4ZWN1dGluZyB0aGUgYmF0Y2ggaWYgb25lIHJlcXVlc3QgZmFpbHNcbiAgICogQHJldHVybnMgUmVxdWVzdEJhdGNoIHJlc3BvbnNlXG4gICAqL1xuICBhc3luYyBjYWxsQmF0Y2gocmVxdWVzdHMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3RJZCA9IEJhc2VPQlNXZWJTb2NrZXQuZ2VuZXJhdGVNZXNzYWdlSWQoKTtcbiAgICBjb25zdCByZXNwb25zZVByb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKGByZXM6JHtyZXF1ZXN0SWR9YCk7XG4gICAgYXdhaXQgdGhpcy5tZXNzYWdlKFdlYlNvY2tldE9wQ29kZS5SZXF1ZXN0QmF0Y2gsIF9leHRlbmRzKHtcbiAgICAgIHJlcXVlc3RJZCxcbiAgICAgIHJlcXVlc3RzXG4gICAgfSwgb3B0aW9ucykpO1xuICAgIGNvbnN0IHtcbiAgICAgIHJlc3VsdHNcbiAgICB9ID0gYXdhaXQgcmVzcG9uc2VQcm9taXNlO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG4gIC8qKlxuICAgKiBDbGVhbnVwIGZyb20gc29ja2V0IGRpc2Nvbm5lY3Rpb25cbiAgICovXG4gIGNsZWFudXAoKSB7XG4gICAgaWYgKCF0aGlzLnNvY2tldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSBudWxsO1xuICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IG51bGw7XG4gICAgdGhpcy5zb2NrZXQub25lcnJvciA9IG51bGw7XG4gICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IG51bGw7XG4gICAgdGhpcy5zb2NrZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faWRlbnRpZmllZCA9IGZhbHNlO1xuICAgIC8vIENsZWFudXAgbGVmdG92ZXJzXG4gICAgdGhpcy5pbnRlcm5hbExpc3RlbmVycy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGNvbm5lY3Rpb24gdG8gc3BlY2lmaWVkIG9icy13ZWJzb2NrZXQgc2VydmVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB1cmwgV2Vic29ja2V0IGFkZHJlc3NcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgaGVsbG8gZGF0YVxuICAgKi9cbiAgYXN5bmMgY3JlYXRlQ29ubmVjdGlvbih1cmwpIHtcbiAgICB2YXIgX3RoaXMkc29ja2V0O1xuICAgIGNvbnN0IGNvbm5lY3Rpb25PcGVuZWRQcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZSgnQ29ubmVjdGlvbk9wZW5lZCcpO1xuICAgIGNvbnN0IGhlbGxvUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoYG9wOiR7V2ViU29ja2V0T3BDb2RlLkhlbGxvfWApO1xuICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldElwbWwodXJsLCB0aGlzLnByb3RvY29sKTtcbiAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zb2NrZXQub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICBhd2FpdCBjb25uZWN0aW9uT3BlbmVkUHJvbWlzZTtcbiAgICBjb25zdCBwcm90b2NvbCA9IChfdGhpcyRzb2NrZXQgPSB0aGlzLnNvY2tldCkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHNvY2tldC5wcm90b2NvbDtcbiAgICAvLyBCcm93c2VycyBkb24ndCBhdXRvY2xvc2Ugb24gbWlzc2luZy93cm9uZyBwcm90b2NvbFxuICAgIGlmICghcHJvdG9jb2wpIHtcbiAgICAgIHRocm93IG5ldyBPQlNXZWJTb2NrZXRFcnJvcigtMSwgJ1NlcnZlciBzZW50IG5vIHN1YnByb3RvY29sJyk7XG4gICAgfVxuICAgIGlmIChwcm90b2NvbCAhPT0gdGhpcy5wcm90b2NvbCkge1xuICAgICAgdGhyb3cgbmV3IE9CU1dlYlNvY2tldEVycm9yKC0xLCAnU2VydmVyIHNlbnQgYW4gaW52YWxpZCBzdWJwcm90b2NvbCcpO1xuICAgIH1cbiAgICByZXR1cm4gaGVsbG9Qcm9taXNlO1xuICB9XG4gIC8qKlxuICAgKiBTZW5kIGlkZW50aWZ5IG1lc3NhZ2VcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIGhlbGxvIEhlbGxvIG1lc3NhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFzc3dvcmQgUGFzc3dvcmRcbiAgICogQHBhcmFtIGlkZW50aWZpY2F0aW9uUGFyYW1zIElkZW50aWZpY2F0aW9uIHBhcmFtc1xuICAgKiBAcmV0dXJucyBIZWxsbyAmIElkZW50aWZpZWQgbWVzc2FnZXMgZGF0YSAoY29tYmluZWQpXG4gICAqL1xuICBhc3luYyBpZGVudGlmeShfcmVmLCBwYXNzd29yZCwgaWRlbnRpZmljYXRpb25QYXJhbXMgPSB7fSkge1xuICAgIGxldCB7XG4gICAgICAgIGF1dGhlbnRpY2F0aW9uLFxuICAgICAgICBycGNWZXJzaW9uXG4gICAgICB9ID0gX3JlZixcbiAgICAgIGhlbGxvUmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCk7XG4gICAgLy8gU2V0IHJwY1ZlcnNpb24gaWYgdW5zZXRcbiAgICBjb25zdCBkYXRhID0gX2V4dGVuZHMoe1xuICAgICAgcnBjVmVyc2lvblxuICAgIH0sIGlkZW50aWZpY2F0aW9uUGFyYW1zKTtcbiAgICBpZiAoYXV0aGVudGljYXRpb24gJiYgcGFzc3dvcmQpIHtcbiAgICAgIGRhdGEuYXV0aGVudGljYXRpb24gPSBhdXRoZW50aWNhdGlvbkhhc2hpbmcoYXV0aGVudGljYXRpb24uc2FsdCwgYXV0aGVudGljYXRpb24uY2hhbGxlbmdlLCBwYXNzd29yZCk7XG4gICAgfVxuICAgIGNvbnN0IGlkZW50aWZpZWRQcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZShgb3A6JHtXZWJTb2NrZXRPcENvZGUuSWRlbnRpZmllZH1gKTtcbiAgICBhd2FpdCB0aGlzLm1lc3NhZ2UoV2ViU29ja2V0T3BDb2RlLklkZW50aWZ5LCBkYXRhKTtcbiAgICBjb25zdCBpZGVudGlmaWVkID0gYXdhaXQgaWRlbnRpZmllZFByb21pc2U7XG4gICAgdGhpcy5faWRlbnRpZmllZCA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdJZGVudGlmaWVkJywgaWRlbnRpZmllZCk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIHJwY1ZlcnNpb25cbiAgICB9LCBoZWxsb1Jlc3QsIGlkZW50aWZpZWQpO1xuICB9XG4gIC8qKlxuICAgKiBTZW5kIG1lc3NhZ2UgdG8gb2JzLXdlYnNvY2tldFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gb3AgV2ViU29ja2V0T3BDb2RlXG4gICAqIEBwYXJhbSBkIE1lc3NhZ2UgZGF0YVxuICAgKi9cbiAgYXN5bmMgbWVzc2FnZShvcCwgZCkge1xuICAgIGlmICghdGhpcy5zb2NrZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGNvbm5lY3RlZCcpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaWRlbnRpZmllZCAmJiBvcCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb2NrZXQgbm90IGlkZW50aWZpZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZW5jb2RlZCA9IGF3YWl0IHRoaXMuZW5jb2RlTWVzc2FnZSh7XG4gICAgICBvcCxcbiAgICAgIGRcbiAgICB9KTtcbiAgICB0aGlzLnNvY2tldC5zZW5kKGVuY29kZWQpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBwcm9taXNlIHRvIGxpc3RlbiBmb3IgYW4gZXZlbnQgb24gaW50ZXJuYWwgbGlzdGVuZXJcbiAgICogKHdpbGwgYmUgY2xlYW5lZCB1cCBvbiBkaXNjb25uZWN0KVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgdG8gbGlzdGVuIHRvXG4gICAqIEByZXR1cm5zIEV2ZW50IGRhdGFcbiAgICovXG4gIGFzeW5jIGludGVybmFsRXZlbnRQcm9taXNlKGV2ZW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5pbnRlcm5hbExpc3RlbmVycy5vbmNlKGV2ZW50LCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogV2Vic29ja2V0IG9wZW4gZXZlbnQgbGlzdGVuZXJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIGUgRXZlbnRcbiAgICovXG4gIG9uT3BlbihlKSB7XG4gICAgZGVidWcoJ3NvY2tldC5vcGVuJyk7XG4gICAgdGhpcy5lbWl0KCdDb25uZWN0aW9uT3BlbmVkJyk7XG4gICAgdGhpcy5pbnRlcm5hbExpc3RlbmVycy5lbWl0KCdDb25uZWN0aW9uT3BlbmVkJywgZSk7XG4gIH1cbiAgLyoqXG4gICAqIFdlYnNvY2tldCBtZXNzYWdlIGV2ZW50IGxpc3RlbmVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBlIEV2ZW50XG4gICAqL1xuICBhc3luYyBvbk1lc3NhZ2UoZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG9wLFxuICAgICAgICBkXG4gICAgICB9ID0gYXdhaXQgdGhpcy5kZWNvZGVNZXNzYWdlKGUuZGF0YSk7XG4gICAgICBkZWJ1Zygnc29ja2V0Lm1lc3NhZ2U6ICVkICVqJywgb3AsIGQpO1xuICAgICAgaWYgKG9wID09PSB1bmRlZmluZWQgfHwgZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgY2FzZSBXZWJTb2NrZXRPcENvZGUuRXZlbnQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgICAgIGV2ZW50RGF0YVxuICAgICAgICAgICAgfSA9IGQ7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFR5cGVzY3JpcHQganVzdCBkb2Vzbid0IHVuZGVyc3RhbmQgaXRcbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudFR5cGUsIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFdlYlNvY2tldE9wQ29kZS5SZXF1ZXN0UmVzcG9uc2U6XG4gICAgICAgIGNhc2UgV2ViU29ja2V0T3BDb2RlLlJlcXVlc3RCYXRjaFJlc3BvbnNlOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgcmVxdWVzdElkXG4gICAgICAgICAgICB9ID0gZDtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxMaXN0ZW5lcnMuZW1pdChgcmVzOiR7cmVxdWVzdElkfWAsIGQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmludGVybmFsTGlzdGVuZXJzLmVtaXQoYG9wOiR7b3B9YCwgZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRlYnVnKCdlcnJvciBoYW5kbGluZyBtZXNzYWdlOiAlbycsIGVycm9yKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFdlYnNvY2tldCBlcnJvciBldmVudCBsaXN0ZW5lclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gZSBFcnJvckV2ZW50XG4gICAqL1xuICBvbkVycm9yKGUpIHtcbiAgICBkZWJ1Zygnc29ja2V0LmVycm9yOiAlbycsIGUpO1xuICAgIGNvbnN0IGVycm9yID0gbmV3IE9CU1dlYlNvY2tldEVycm9yKC0xLCBlLm1lc3NhZ2UpO1xuICAgIHRoaXMuZW1pdCgnQ29ubmVjdGlvbkVycm9yJywgZXJyb3IpO1xuICAgIHRoaXMuaW50ZXJuYWxMaXN0ZW5lcnMuZW1pdCgnQ29ubmVjdGlvbkVycm9yJywgZXJyb3IpO1xuICB9XG4gIC8qKlxuICAgKiBXZWJzb2NrZXQgY2xvc2UgZXZlbnQgbGlzdGVuZXJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIGUgRXZlbnRcbiAgICovXG4gIG9uQ2xvc2UoZSkge1xuICAgIGRlYnVnKCdzb2NrZXQuY2xvc2U6ICVzICglZCknLCBlLnJlYXNvbiwgZS5jb2RlKTtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBPQlNXZWJTb2NrZXRFcnJvcihlLmNvZGUsIGUucmVhc29uKTtcbiAgICB0aGlzLmVtaXQoJ0Nvbm5lY3Rpb25DbG9zZWQnLCBlcnJvcik7XG4gICAgdGhpcy5pbnRlcm5hbExpc3RlbmVycy5lbWl0KCdDb25uZWN0aW9uQ2xvc2VkJywgZXJyb3IpO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG59XG5CYXNlT0JTV2ViU29ja2V0LnJlcXVlc3RDb3VudGVyID0gMTtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWljcm9idW5kbGUvaXNzdWVzLzUzMSNpc3N1ZWNvbW1lbnQtNTc1NDczMDI0XG4vLyBOb3QgdXNpbmcgRVNNIGV4cG9ydCBkdWUgdG8gaXQgYWxzbyBiZWluZyBkZXRlY3RlZCBhbmQgYnJlYWtpbmcgcm9sbHVwIGJhc2VkIGJ1bmRsZXJzICh2aXRlKVxuaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG59XG5cbmNsYXNzIE9CU1dlYlNvY2tldCBleHRlbmRzIEJhc2VPQlNXZWJTb2NrZXQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5wcm90b2NvbCA9ICdvYnN3ZWJzb2NrZXQuanNvbic7XG4gIH1cbiAgYXN5bmMgZW5jb2RlTWVzc2FnZShkYXRhKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG4gIGFzeW5jIGRlY29kZU1lc3NhZ2UoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCB7IEV2ZW50U3Vic2NyaXB0aW9uLCBPQlNXZWJTb2NrZXRFcnJvciwgUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZSwgV2ViU29ja2V0T3BDb2RlLCBPQlNXZWJTb2NrZXQgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNvbi5tb2Rlcm4uanMubWFwXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vaW5kZXguanMnXG5cbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9XG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==