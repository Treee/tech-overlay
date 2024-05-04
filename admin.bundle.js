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
    const data = {
      eventData: { AGEOVERLAYPUSH: this.buildPayload(false) },
    };
    this._clientWebsocket.call("BroadcastCustomEvent", data);
    this._civList.resetState();
  }
  onShowClicked(event) {
    const data = {
      eventData: { AGEOVERLAYPUSH: this.buildPayload(true) },
    };
    this._clientWebsocket.call("BroadcastCustomEvent", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZSxHQUFHLGVBQWU7QUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDYTtBQUNIO0FBQ0Q7QUFDSTs7QUFFN0M7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMENBQTBDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4REFBOEQ7O0FBRS9E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QUFDQSw0Q0FBNEMsR0FBRztBQUMvQztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUg7QUFDckg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xrQnFDOztBQUVkO0FBQ3ZCLGlFQUFlLHNDQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9jb3JlLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvZW5jLWJhc2U2NC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy13cy9icm93c2VyLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbW1vbi1kYXRhLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pY29ucy9jaXYtaWNvbi1saXN0LmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pY29ucy9jaXYtaWNvbi5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zLyBzeW5jIFxcLihwbmcpJCIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvIHN5bmMgXFwuKHBuZykkIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvIHN5bmMgXFwuKHBuZykkIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaW1hZ2UtaGVscGVyLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy8gc3luYyBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvdGVjaC1vdmVybGF5LWNvbnRyb2wvdGVjaC1vdmVybGF5LWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2RhdGFzdG9yZS5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvaHRtbC1wYWdlcy9hZG1pbi1wYWdlLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9odG1sLXBhZ2VzL2RlZmF1bHQtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2luZGV4LWFkbWluLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS9pZ25vcmVkfFo6XFx3b3Jrc3BhY2VcXGFnZS1vZi1lbXBpcmVzXFx0ZWNoLW92ZXJsYXlcXG5vZGVfbW9kdWxlc1xcY3J5cHRvLWpzfGNyeXB0byIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9kaXN0L2pzb24ubW9kZXJuLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0cm9vdC5DcnlwdG9KUyA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0LypnbG9iYWxzIHdpbmRvdywgZ2xvYmFsLCByZXF1aXJlKi9cblxuXHQvKipcblx0ICogQ3J5cHRvSlMgY29yZSBjb21wb25lbnRzLlxuXHQgKi9cblx0dmFyIENyeXB0b0pTID0gQ3J5cHRvSlMgfHwgKGZ1bmN0aW9uIChNYXRoLCB1bmRlZmluZWQpIHtcblxuXHQgICAgdmFyIGNyeXB0bztcblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIHdpbmRvdyAoQnJvd3Nlcilcblx0ICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gd2luZG93LmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBpbiB3ZWIgd29ya2VyIChCcm93c2VyKVxuXHQgICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHNlbGYuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gd29ya2VyXG5cdCAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gZ2xvYmFsVGhpcy5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSAoZXhwZXJpbWVudGFsIElFIDExKSBjcnlwdG8gZnJvbSB3aW5kb3cgKEJyb3dzZXIpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubXNDcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSB3aW5kb3cubXNDcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSBnbG9iYWwgKE5vZGVKUylcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGltcG9ydCB2aWEgcmVxdWlyZSAoTm9kZUpTKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblx0ICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICB9XG5cblx0ICAgIC8qXG5cdCAgICAgKiBDcnlwdG9ncmFwaGljYWxseSBzZWN1cmUgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3Jcblx0ICAgICAqXG5cdCAgICAgKiBBcyBNYXRoLnJhbmRvbSgpIGlzIGNyeXB0b2dyYXBoaWNhbGx5IG5vdCBzYWZlIHRvIHVzZVxuXHQgICAgICovXG5cdCAgICB2YXIgY3J5cHRvU2VjdXJlUmFuZG9tSW50ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmIChjcnlwdG8pIHtcblx0ICAgICAgICAgICAgLy8gVXNlIGdldFJhbmRvbVZhbHVlcyBtZXRob2QgKEJyb3dzZXIpXG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdO1xuXHQgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gVXNlIHJhbmRvbUJ5dGVzIG1ldGhvZCAoTm9kZUpTKVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0by5yYW5kb21CeXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKDQpLnJlYWRJbnQzMkxFKCk7XG5cdCAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hdGl2ZSBjcnlwdG8gbW9kdWxlIGNvdWxkIG5vdCBiZSB1c2VkIHRvIGdldCBzZWN1cmUgcmFuZG9tIG51bWJlci4nKTtcblx0ICAgIH07XG5cblx0ICAgIC8qXG5cdCAgICAgKiBMb2NhbCBwb2x5ZmlsbCBvZiBPYmplY3QuY3JlYXRlXG5cblx0ICAgICAqL1xuXHQgICAgdmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBGKCkge31cblxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgIHZhciBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xuXG5cdCAgICAgICAgICAgIHN1YnR5cGUgPSBuZXcgRigpO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gbnVsbDtcblxuXHQgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBDcnlwdG9KUyBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGlicmFyeSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2xpYiA9IEMubGliID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZSBvYmplY3QgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZSA9IChmdW5jdGlvbiAoKSB7XG5cblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvdmVycmlkZXMgUHJvcGVydGllcyB0byBjb3B5IGludG8gdGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIG1ldGhvZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTcGF3blxuXHQgICAgICAgICAgICAgICAgdmFyIHN1YnR5cGUgPSBjcmVhdGUodGhpcyk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEF1Z21lbnRcblx0ICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLm1peEluKG92ZXJyaWRlcyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGluaXRpYWxpemVyXG5cdCAgICAgICAgICAgICAgICBpZiAoIXN1YnR5cGUuaGFzT3duUHJvcGVydHkoJ2luaXQnKSB8fCB0aGlzLmluaXQgPT09IHN1YnR5cGUuaW5pdCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemVyJ3MgcHJvdG90eXBlIGlzIHRoZSBzdWJ0eXBlIG9iamVjdFxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0LnByb3RvdHlwZSA9IHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSBzdXBlcnR5cGVcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyID0gdGhpcztcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEV4dGVuZHMgdGhpcyBvYmplY3QgYW5kIHJ1bnMgdGhlIGluaXQgbWV0aG9kLlxuXHQgICAgICAgICAgICAgKiBBcmd1bWVudHMgdG8gY3JlYXRlKCkgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgaW5zdGFuY2UgPSBNeVR5cGUuY3JlYXRlKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZXh0ZW5kKCk7XG5cdCAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbml0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBvYmplY3QuXG5cdCAgICAgICAgICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCBzb21lIGxvZ2ljIHdoZW4geW91ciBvYmplY3RzIGFyZSBjcmVhdGVkLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgICAgICAvLyAuLi5cblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ29waWVzIHByb3BlcnRpZXMgaW50byB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gbWl4IGluLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgTXlUeXBlLm1peEluKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJ1xuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBtaXhJbjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJRSB3b24ndCBjb3B5IHRvU3RyaW5nIHVzaW5nIHRoZSBsb29wIGFib3ZlXG5cdCAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudG9TdHJpbmcgPSBwcm9wZXJ0aWVzLnRvU3RyaW5nO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBpbnN0YW5jZS5jbG9uZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXQucHJvdG90eXBlLmV4dGVuZCh0aGlzKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICovXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5ID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZ0J5dGVzIChPcHRpb25hbCkgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGUgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSwgNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdvcmRzLCBzaWdCeXRlcykge1xuXHQgICAgICAgICAgICB3b3JkcyA9IHRoaXMud29yZHMgPSB3b3JkcyB8fCBbXTtcblxuXHQgICAgICAgICAgICBpZiAoc2lnQnl0ZXMgIT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogNDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIHdvcmQgYXJyYXkgdG8gYSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0VuY29kZXJ9IGVuY29kZXIgKE9wdGlvbmFsKSBUaGUgZW5jb2Rpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBDcnlwdG9KUy5lbmMuSGV4XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmdpZmllZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5ICsgJyc7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChlbmNvZGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoZW5jb2RlciB8fCBIZXgpLnN0cmluZ2lmeSh0aGlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uY2F0ZW5hdGVzIGEgd29yZCBhcnJheSB0byB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5IHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkxLmNvbmNhdCh3b3JkQXJyYXkyKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjb25jYXQ6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB0aGlzV29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhpc1NpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRTaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB0aGlzLmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29uY2F0XG5cdCAgICAgICAgICAgIGlmICh0aGlzU2lnQnl0ZXMgJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSBieXRlIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0aGF0Qnl0ZSA9ICh0aGF0V29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdIHw9IHRoYXRCeXRlIDw8ICgyNCAtICgodGhpc1NpZ0J5dGVzICsgaSkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgd29yZCBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhhdFNpZ0J5dGVzOyBqICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGopID4+PiAyXSA9IHRoYXRXb3Jkc1tqID4+PiAyXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzICs9IHRoYXRTaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlbW92ZXMgaW5zaWduaWZpY2FudCBiaXRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbGFtcDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcFxuXHQgICAgICAgICAgICB3b3Jkc1tzaWdCeXRlcyA+Pj4gMl0gJj0gMHhmZmZmZmZmZiA8PCAoMzIgLSAoc2lnQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB3b3Jkcy5sZW5ndGggPSBNYXRoLmNlaWwoc2lnQnl0ZXMgLyA0KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IHdvcmRBcnJheS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHdvcmQgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5CeXRlcyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHJhbmRvbSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oMTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG5CeXRlcykge1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5CeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkcy5wdXNoKGNyeXB0b1NlY3VyZVJhbmRvbUludCgpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIG5CeXRlcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogRW5jb2RlciBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogSGV4IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgSGV4ID0gQ19lbmMuSGV4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmVuYy5IZXguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBoZXhDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlICYgMHgwZikudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBoZXhDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBoZXggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHIgVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShoZXhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoaGV4U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBoZXhTdHJMZW5ndGggPSBoZXhTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGV4U3RyTGVuZ3RoOyBpICs9IDIpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDNdIHw9IHBhcnNlSW50KGhleFN0ci5zdWJzdHIoaSwgMiksIDE2KSA8PCAoMjQgLSAoaSAlIDgpICogNCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBoZXhTdHJMZW5ndGggLyAyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExhdGluMSBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIExhdGluMSA9IENfZW5jLkxhdGluMSA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBsYXRpbjFTdHJpbmcgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xQ2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBsYXRpbjFDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYml0ZSkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGxhdGluMUNoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIExhdGluMSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGluMVN0ciBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnBhcnNlKGxhdGluMVN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChsYXRpbjFTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMVN0ckxlbmd0aCA9IGxhdGluMVN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXRpbjFTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMl0gfD0gKGxhdGluMVN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZikgPDwgKDI0IC0gKGkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbGF0aW4xU3RyTGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFVURi04IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0ZjggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuVXRmOC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKExhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KSkpO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBVVEYtOCBkYXRhJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtOCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjhTdHIgVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh1dGY4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHV0ZjhTdHIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJ1ZmZlcmVkIGJsb2NrIGFsZ29yaXRobSB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBUaGUgcHJvcGVydHkgYmxvY2tTaXplIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfbWluQnVmZmVyU2l6ZSBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IHNob3VsZCBiZSBrZXB0IHVucHJvY2Vzc2VkIGluIHRoZSBidWZmZXIuIERlZmF1bHQ6IDBcblx0ICAgICAqL1xuXHQgICAgdmFyIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBDX2xpYi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGRhdGEgYnVmZmVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBXb3JkQXJyYXkuaW5pdCgpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyBuZXcgZGF0YSB0byB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGJ1ZmZlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBhcHBlbmQuIFN0cmluZ3MgYXJlIGNvbnZlcnRlZCB0byBhIFdvcmRBcnJheSB1c2luZyBVVEYtOC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9hcHBlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICBkYXRhID0gVXRmOC5wYXJzZShkYXRhKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyArPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRhdGEgYmxvY2tzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogVGhpcyBtZXRob2QgaW52b2tlcyBfZG9Qcm9jZXNzQmxvY2sob2Zmc2V0KSwgd2hpY2ggbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvRmx1c2ggV2hldGhlciBhbGwgYmxvY2tzIGFuZCBwYXJ0aWFsIGJsb2NrcyBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcHJvY2Vzc2VkIGRhdGEuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcygpO1xuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoISEnZmx1c2gnKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfcHJvY2VzczogZnVuY3Rpb24gKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFdvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVNpZ0J5dGVzID0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQnl0ZXMgPSBibG9ja1NpemUgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJsb2NrcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJsb2Nrc1JlYWR5ID0gZGF0YVNpZ0J5dGVzIC8gYmxvY2tTaXplQnl0ZXM7XG5cdCAgICAgICAgICAgIGlmIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCB1cCB0byBpbmNsdWRlIHBhcnRpYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLmNlaWwobkJsb2Nrc1JlYWR5KTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIGRvd24gdG8gaW5jbHVkZSBvbmx5IGZ1bGwgYmxvY2tzLFxuXHQgICAgICAgICAgICAgICAgLy8gbGVzcyB0aGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IG11c3QgcmVtYWluIGluIHRoZSBidWZmZXJcblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGgubWF4KChuQmxvY2tzUmVhZHkgfCAwKSAtIHRoaXMuX21pbkJ1ZmZlclNpemUsIDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgd29yZHMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5Xb3Jkc1JlYWR5ID0gbkJsb2Nrc1JlYWR5ICogYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJ5dGVzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQnl0ZXNSZWFkeSA9IE1hdGgubWluKG5Xb3Jkc1JlYWR5ICogNCwgZGF0YVNpZ0J5dGVzKTtcblxuXHQgICAgICAgICAgICAvLyBQcm9jZXNzIGJsb2Nrc1xuXHQgICAgICAgICAgICBpZiAobldvcmRzUmVhZHkpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IG5Xb3Jkc1JlYWR5OyBvZmZzZXQgKz0gYmxvY2tTaXplKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1hbGdvcml0aG0gbG9naWNcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb1Byb2Nlc3NCbG9jayhkYXRhV29yZHMsIG9mZnNldCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgICAgIHByb2Nlc3NlZFdvcmRzID0gZGF0YVdvcmRzLnNwbGljZSgwLCBuV29yZHNSZWFkeSk7XG5cdCAgICAgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5CeXRlc1JlYWR5O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHByb2Nlc3NlZFdvcmRzLCBuQnl0ZXNSZWFkeSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9kYXRhID0gdGhpcy5fZGF0YS5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21pbkJ1ZmZlclNpemU6IDBcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGhhc2hlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgaGFzaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxNiAoNTEyIGJpdHMpXG5cdCAgICAgKi9cblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2hlciA9IENyeXB0b0pTLmFsZ28uU0hBMjU2LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgaGFzaGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBSZXNldCBkYXRhIGJ1ZmZlclxuXHQgICAgICAgICAgICBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdGhpcy5fZG9SZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVcGRhdGVzIHRoaXMgaGFzaGVyIHdpdGggYSBtZXNzYWdlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0hhc2hlcn0gVGhpcyBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblxuXHQgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGhhc2hcblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgKE9wdGlvbmFsKSBBIGZpbmFsIG1lc3NhZ2UgdXBkYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gRmluYWwgbWVzc2FnZSB1cGRhdGVcblx0ICAgICAgICAgICAgaWYgKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDUxMi8zMixcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byBhIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaGFzaGVyLmluaXQoY2ZnKS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byB1c2UgaW4gdGhpcyBITUFDIGhlbHBlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBIbWFjU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhtYWNIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBrZXkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ19hbGdvLkhNQUMuaW5pdChoYXNoZXIsIGtleSkuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWxnb3JpdGhtIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbyA9IHt9O1xuXG5cdCAgICByZXR1cm4gQztcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlM7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYztcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlNjQgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlNjQgPSBDX2VuYy5CYXNlNjQgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBCYXNlNjQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgYmFzZTY0U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5fbWFwO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUxID0gKHdvcmRzW2kgPj4+IDJdICAgICAgID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICAgICAgICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMiA9ICh3b3Jkc1soaSArIDEpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMSkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTMgPSAod29yZHNbKGkgKyAyKSA+Pj4gMl0gPj4+ICgyNCAtICgoaSArIDIpICUgNCkgKiA4KSkgJiAweGZmO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlMSA8PCAxNikgfCAoYnl0ZTIgPDwgOCkgfCBieXRlMztcblxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IChqIDwgNCkgJiYgKGkgKyBqICogMC43NSA8IHNpZ0J5dGVzKTsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiAoNiAqICgzIC0gaikpKSAmIDB4M2YpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuXHQgICAgICAgICAgICBpZiAocGFkZGluZ0NoYXIpIHtcblx0ICAgICAgICAgICAgICAgIHdoaWxlIChiYXNlNjRDaGFycy5sZW5ndGggJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChwYWRkaW5nQ2hhcik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gYmFzZTY0Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgQmFzZTY0IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZTY0U3RyIFRoZSBCYXNlNjQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5CYXNlNjQucGFyc2UoYmFzZTY0U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGJhc2U2NFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NFN0ckxlbmd0aCA9IGJhc2U2NFN0ci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG5cdCAgICAgICAgICAgIHZhciByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcDtcblxuXHQgICAgICAgICAgICBpZiAoIXJldmVyc2VNYXApIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWFwLmxlbmd0aDsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VNYXBbbWFwLmNoYXJDb2RlQXQoaildID0gajtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJZ25vcmUgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcblx0ICAgICAgICAgICAgaWYgKHBhZGRpbmdDaGFyKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0luZGV4ID0gYmFzZTY0U3RyLmluZGV4T2YocGFkZGluZ0NoYXIpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdJbmRleCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJMZW5ndGggPSBwYWRkaW5nSW5kZXg7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHJldHVybiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApO1xuXG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9tYXA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSdcblx0ICAgIH07XG5cblx0ICAgIGZ1bmN0aW9uIHBhcnNlTG9vcChiYXNlNjRTdHIsIGJhc2U2NFN0ckxlbmd0aCwgcmV2ZXJzZU1hcCkge1xuXHQgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgdmFyIG5CeXRlcyA9IDA7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZTY0U3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgIGlmIChpICUgNCkge1xuXHQgICAgICAgICAgICAgIHZhciBiaXRzMSA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSAtIDEpXSA8PCAoKGkgJSA0KSAqIDIpO1xuXHQgICAgICAgICAgICAgIHZhciBiaXRzMiA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSldID4+PiAoNiAtIChpICUgNCkgKiAyKTtcblx0ICAgICAgICAgICAgICB2YXIgYml0c0NvbWJpbmVkID0gYml0czEgfCBiaXRzMjtcblx0ICAgICAgICAgICAgICB3b3Jkc1tuQnl0ZXMgPj4+IDJdIHw9IGJpdHNDb21iaW5lZCA8PCAoMjQgLSAobkJ5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICBuQnl0ZXMrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gV29yZEFycmF5LmNyZWF0ZSh3b3JkcywgbkJ5dGVzKTtcblx0ICAgIH1cblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5lbmMuQmFzZTY0O1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBJbml0aWFsaXphdGlvbiBhbmQgcm91bmQgY29uc3RhbnRzIHRhYmxlc1xuXHQgICAgdmFyIEggPSBbXTtcblx0ICAgIHZhciBLID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIGlzUHJpbWUobikge1xuXHQgICAgICAgICAgICB2YXIgc3FydE4gPSBNYXRoLnNxcnQobik7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGZhY3RvciA9IDI7IGZhY3RvciA8PSBzcXJ0TjsgZmFjdG9yKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmICghKG4gJSBmYWN0b3IpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgZnVuY3Rpb24gZ2V0RnJhY3Rpb25hbEJpdHMobikge1xuXHQgICAgICAgICAgICByZXR1cm4gKChuIC0gKG4gfCAwKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciBuID0gMjtcblx0ICAgICAgICB2YXIgblByaW1lID0gMDtcblx0ICAgICAgICB3aGlsZSAoblByaW1lIDwgNjQpIHtcblx0ICAgICAgICAgICAgaWYgKGlzUHJpbWUobikpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChuUHJpbWUgPCA4KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgSFtuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDIpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIEtbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAzKSk7XG5cblx0ICAgICAgICAgICAgICAgIG5QcmltZSsrO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgbisrO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxuXHQgICAgdmFyIFcgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMjU2IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMjU2ID0gQ19hbGdvLlNIQTI1NiA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoSC5zbGljZSgwKSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgZSA9IEhbNF07XG5cdCAgICAgICAgICAgIHZhciBmID0gSFs1XTtcblx0ICAgICAgICAgICAgdmFyIGcgPSBIWzZdO1xuXHQgICAgICAgICAgICB2YXIgaCA9IEhbN107XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IE1bb2Zmc2V0ICsgaV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCA9IFdbaSAtIDE1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwICA9ICgoZ2FtbWEweCA8PCAyNSkgfCAoZ2FtbWEweCA+Pj4gNykpICBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMHggPDwgMTQpIHwgKGdhbW1hMHggPj4+IDE4KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTB4ID4+PiAzKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTF4ID0gV1tpIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMSAgPSAoKGdhbW1hMXggPDwgMTUpIHwgKGdhbW1hMXggPj4+IDE3KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTF4IDw8IDEzKSB8IChnYW1tYTF4ID4+PiAxOSkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWExeCA+Pj4gMTApO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1haiA9IChhICYgYikgXiAoYSAmIGMpIF4gKGIgJiBjKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMCA9ICgoYSA8PCAzMCkgfCAoYSA+Pj4gMikpIF4gKChhIDw8IDE5KSB8IChhID4+PiAxMykpIF4gKChhIDw8IDEwKSB8IChhID4+PiAyMikpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMSA9ICgoZSA8PCAyNikgfCAoZSA+Pj4gNikpIF4gKChlIDw8IDIxKSB8IChlID4+PiAxMSkpIF4gKChlIDw8IDcpICB8IChlID4+PiAyNSkpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MiA9IHNpZ21hMCArIG1hajtcblxuXHQgICAgICAgICAgICAgICAgaCA9IGc7XG5cdCAgICAgICAgICAgICAgICBnID0gZjtcblx0ICAgICAgICAgICAgICAgIGYgPSBlO1xuXHQgICAgICAgICAgICAgICAgZSA9IChkICsgdDEpIHwgMDtcblx0ICAgICAgICAgICAgICAgIGQgPSBjO1xuXHQgICAgICAgICAgICAgICAgYyA9IGI7XG5cdCAgICAgICAgICAgICAgICBiID0gYTtcblx0ICAgICAgICAgICAgICAgIGEgPSAodDEgKyB0MikgfCAwO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNV0gPSAoSFs1XSArIGYpIHwgMDtcblx0ICAgICAgICAgICAgSFs2XSA9IChIWzZdICsgZykgfCAwO1xuXHQgICAgICAgICAgICBIWzddID0gKEhbN10gKyBoKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1NignbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMjU2KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEyNTYobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTI1Nik7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTI1NjtcblxufSkpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9Jcm9uc3RyaWtlU2VtaUJvbGQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2luZ2FtZV9kaXBsb21hY3ktbWVudV9iZ19mdWxsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9jaXYtdGVjaC1vdmVybGF5L2ltYWdlcy9wYXBlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2NvbXBvbmVudHMvY2l2LWltYWdlcy9taXNjL3ZldG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJNZW1iLUZvbnRcIjtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5odG1sIHtcclxuICBmb250LWZhbWlseTogTWVtYi1Gb250O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hZG1pbi1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2xpZW50LWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2R5LWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubXktaGVhZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjAlO1xyXG4gIGJvcmRlci10b3A6IDBweDtcclxuICBib3JkZXItbGVmdDogMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbn1cclxuLm15LWZvb3RlciB7XHJcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLm15LWZvb3RlciBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxufVxyXG5cclxuLmFkbWluLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ud2Vic29ja2V0LWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi53ZWJzb2NrZXQtc2V0dGluZy1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuLndlYnNvY2tldC1pbnB1dCB7XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5sZWZ0LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uaW5wdXQtbnVtYmVyIHtcclxuICB3aWR0aDogM3JlbTtcclxufVxyXG5cclxuLnRlY2gtaGVhZGVyIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMC4yNXJlbTtcclxufVxyXG4udGVjaC1zZXR0aW5ncyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRlY2gtY2l2LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnNldHRpbmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uYWN0aW9uLXNldHRpbmdzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zZXR0aW5nLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbSAxNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkbWluLWNpdi1pY29uIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggYmxhY2s7XHJcbn1cclxuLmFkbWluLWNpdi1pY29uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbn1cclxuLmFkbWluLWNpdi1pY29uIHNwYW4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5hZG1pbi1jaXYtaWNvbiBpbWcge1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGhlaWdodDogNXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNsaWVudC1wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LW5hbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1uYW1lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xyXG59XHJcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWljb24ge1xyXG4gIGhlaWdodDogNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSkpO1xyXG59XHJcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LXVuaXF1ZS11bml0LWljb24ge1xyXG4gIGhlaWdodDogNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlcjogc2lsdmVyIHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IDAga2hha2ksIDAgMXB4IGtoYWtpLCAxcHggMCBraGFraSwgMCAtMXB4IGtoYWtpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZW1ibGVtIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIHRvcDogNDUlO1xyXG59XHJcblxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuY2l2LXVwZ3JhZGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi11cGdyYWRlLWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDI1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXJnaW4tdG9wOiAwLjFyZW07XHJcbiAgYm94LXNoYWRvdzogMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZW5hYmxlZC0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5kaXNhYmxlZC0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZW5hYmxlZC0zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgd2lkdGg6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5kaXNhYmxlZC0zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxuICBoZWlnaHQ6IDVyZW07XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5kaXNhYmxlLWljb24tbWVzbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWVjby11cGdyYWRlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi1lY28tdXBncmFkZS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYnV0dG9uLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhjYmE7XHJcbn1cclxuLmJ1dHRvbi1yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDIuMXJlbTtcclxuICB3aWR0aDogNHJlbTtcclxufVxyXG4uc3dpdGNoIGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3R0b206IDRweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjZweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbn1cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XHJcbn1cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubWFzay1pbWctdmVydGljYWwge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xyXG4gIC13ZWJraXQtbWFzay1zaXplOiAxMDAlIDMwMCU7XHJcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDIwMCU7XHJcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XHJcbiAgbWFzay1zaXplOiAxMDAlIDMwMCU7XHJcbiAgbWFzay1wb3NpdGlvbjogMCAyMDAlO1xyXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5jaXYtdGVjaC1hbmltYXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xyXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xyXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIG1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGFuaW1hdGlvbjogbWFzay1tb3ZlLWluIDJzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbn1cclxuLmNpdi10ZWNoLWFuaW1hdGlvbi1sZWF2ZS1hY3RpdmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xyXG4gIC13ZWJraXQtbWFzay1zaXplOiAxMDAlIDMwMCU7XHJcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDIwMCU7XHJcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XHJcbiAgbWFzay1zaXplOiAxMDAlIDMwMCU7XHJcbiAgbWFzay1wb3NpdGlvbjogMCAyMDAlO1xyXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYW5pbWF0aW9uOiBtYXNrLW1vdmUtb3V0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hc2stbW92ZS1pbiB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMTAwJTtcclxuICAgIG1hc2stcG9zaXRpb246IDAgMTAwJTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDAlO1xyXG4gICAgbWFzay1wb3NpdGlvbjogMCAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbWFzay1tb3ZlLW91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMCU7XHJcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDAlO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMTAwJTtcclxuICAgIG1hc2stcG9zaXRpb246IDAgMTAwJTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUFpRDtBQUNuRDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHlEQUEwRTtFQUMxRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFB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QUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxSkFBcUo7RUFDckosNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7O0VBRTlCLDZJQUE2STtFQUM3SSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFKQUFxSjtFQUNySiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDhCQUE4Qjs7RUFFOUIsNklBQTZJO0VBQzdJLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UscUpBQXFKO0VBQ3JKLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCOztFQUU5Qiw2SUFBNkk7RUFDN0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVtYi1Gb250XFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9Jcm9uc3RyaWtlU2VtaUJvbGQub3RmXFxcIik7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6IE1lbWItRm9udDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5hZG1pbi1ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9pbWFnZXMvaW5nYW1lX2RpcGxvbWFjeS1tZW51X2JnX2Z1bGwucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jbGllbnQtYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHktY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjAlO1xcclxcbiAgYm9yZGVyLXRvcDogMHB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDBweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuLm15LWZvb3RlciB7XFxyXFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuLm15LWZvb3RlciBhIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRtaW4tcGFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLndlYnNvY2tldC1jb250cm9scyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi53ZWJzb2NrZXQtc2V0dGluZy1idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG4ud2Vic29ja2V0LWlucHV0IHtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb2x1bW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LW51bWJlciB7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlY2gtaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwLjI1cmVtO1xcclxcbn1cXHJcXG4udGVjaC1zZXR0aW5ncyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50ZWNoLWNpdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFjdGlvbi1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuLmFjdGlvbi1zZXR0aW5ncyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNldHRpbmctYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDE2cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkbWluLWNpdi1pY29uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGJsYWNrO1xcclxcbn1cXHJcXG4uYWRtaW4tY2l2LWljb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbn1cXHJcXG4uYWRtaW4tY2l2LWljb24gc3BhbiB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLmFkbWluLWNpdi1pY29uIGltZyB7XFxyXFxuICB3aWR0aDogNXJlbTtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpZW50LXBhZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9jaXYtdGVjaC1vdmVybGF5L2ltYWdlcy9wYXBlci5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1uYW1lLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcXHJcXG59XFxyXFxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LXVuaXF1ZS11bml0LWljb24ge1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYm9yZGVyOiBzaWx2ZXIgc29saWQgMXB4O1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAga2hha2ksIDAgMXB4IGtoYWtpLCAxcHggMCBraGFraSwgMCAtMXB4IGtoYWtpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZW1ibGVtIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICB0b3A6IDQ1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuY2l2LXVwZ3JhZGUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuY2l2LXVwZ3JhZGUtY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgaGVpZ2h0OiAyNSU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgbWFyZ2luLXRvcDogMC4xcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZW5hYmxlZC0xIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5kaXNhYmxlZC0xIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGhlaWdodDogMC43NXJlbTtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZW5hYmxlZC0zIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5kaXNhYmxlZC0zIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGhlaWdodDogMC43NXJlbTtcXHJcXG4gIHdpZHRoOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5kaXNhYmxlLWljb24tbWVzbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9jaXYtaW1hZ2VzL21pc2MvdmV0by5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWVjby11cGdyYWRlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxufVxcclxcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWVjby11cGdyYWRlLWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tYmx1ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Y2JhO1xcclxcbn1cXHJcXG4uYnV0dG9uLXJlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAyLjFyZW07XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG59XFxyXFxuLnN3aXRjaCBpbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG4uc2xpZGVyOmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm90dG9tOiA0cHg7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGhlaWdodDogMjZweDtcXHJcXG4gIGxlZnQ6IDRweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICB3aWR0aDogMjZweDtcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG59XFxyXFxuLnNsaWRlci5yb3VuZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5tYXNrLWltZy12ZXJ0aWNhbCB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcXHJcXG4gIC13ZWJraXQtbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMjAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHJcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcXHJcXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xcclxcbiAgbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdi10ZWNoLWFuaW1hdGlvbi1lbnRlci1hY3RpdmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XFxyXFxuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAzMDAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDIwMCU7XFxyXFxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFxyXFxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XFxyXFxuICBtYXNrLXNpemU6IDEwMCUgMzAwJTtcXHJcXG4gIG1hc2stcG9zaXRpb246IDAgMjAwJTtcXHJcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBhbmltYXRpb246IG1hc2stbW92ZS1pbiAycyBlYXNlLWluIGZvcndhcmRzO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtYW5pbWF0aW9uLWxlYXZlLWFjdGl2ZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcXHJcXG4gIC13ZWJraXQtbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMjAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHJcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcXHJcXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xcclxcbiAgbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGFuaW1hdGlvbjogbWFzay1tb3ZlLW91dCAycyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtYXNrLW1vdmUtaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAxMDAlO1xcclxcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAwJTtcXHJcXG4gICAgbWFzay1wb3NpdGlvbjogMCAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtYXNrLW1vdmUtb3V0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMCU7XFxyXFxuICAgIG1hc2stcG9zaXRpb246IDAgMCU7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAxMDAlO1xcclxcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhvZ2Rlbi93ZWJzb2NrZXQtc3RyZWFtL2Jsb2IvNDhkYzNkZGY5NDNlNWFkYTY2OGMzMWNjZDk0ZTkxODZmMDJmYWZiZC93cy1mYWxsYmFjay5qc1xuXG52YXIgd3MgPSBudWxsXG5cbmlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IFdlYlNvY2tldFxufSBlbHNlIGlmICh0eXBlb2YgTW96V2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IE1veldlYlNvY2tldFxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IGdsb2JhbC5XZWJTb2NrZXQgfHwgZ2xvYmFsLk1veldlYlNvY2tldFxufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IHdpbmRvdy5XZWJTb2NrZXQgfHwgd2luZG93Lk1veldlYlNvY2tldFxufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd3MgPSBzZWxmLldlYlNvY2tldCB8fCBzZWxmLk1veldlYlNvY2tldFxufVxuXG5leHBvcnQgZGVmYXVsdCB3c1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXHRcdGxldCBuYW1lc3BhY2VzQ2FjaGU7XG5cdFx0bGV0IGVuYWJsZWRDYWNoZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVPdmVycmlkZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBlbmFibGVPdmVycmlkZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobmFtZXNwYWNlc0NhY2hlICE9PSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzKSB7XG5cdFx0XHRcdFx0bmFtZXNwYWNlc0NhY2hlID0gY3JlYXRlRGVidWcubmFtZXNwYWNlcztcblx0XHRcdFx0XHRlbmFibGVkQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZW5hYmxlZENhY2hlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblx0XHRjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzID0gbmFtZXNwYWNlcztcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnNsaWNlKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgcHJlZml4ID0gJ34nO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIHN0b3JhZ2UgZm9yIG91ciBgRUVgIG9iamVjdHMuXG4gKiBBbiBgRXZlbnRzYCBpbnN0YW5jZSBpcyBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCBlbWl0dGVyLCBvbmNlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdKSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCBlbWl0dGVyLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0uZm4pIGVtaXR0ZXIuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gW2VtaXR0ZXIuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIGVtaXR0ZXI7XG59XG5cbi8qKlxuICogQ2xlYXIgZXZlbnQgYnkgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2dCBUaGUgRXZlbnQgbmFtZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyRXZlbnQoZW1pdHRlciwgZXZ0KSB7XG4gIGlmICgtLWVtaXR0ZXIuX2V2ZW50c0NvdW50ID09PSAwKSBlbWl0dGVyLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIGVsc2UgZGVsZXRlIGVtaXR0ZXIuX2V2ZW50c1tldnRdO1xufVxuXG4vKipcbiAqIE1pbmltYWwgYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFoYW5kbGVycykgcmV0dXJuIFtdO1xuICBpZiAoaGFuZGxlcnMuZm4pIHJldHVybiBbaGFuZGxlcnMuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gaGFuZGxlcnNbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtYmVyIG9mIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gbGlzdGVuZXJDb3VudChldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiAwO1xuICBpZiAobGlzdGVuZXJzLmZuKSByZXR1cm4gMTtcbiAgcmV0dXJuIGxpc3RlbmVycy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGVsc2UgYGZhbHNlYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIGZhbHNlKTtcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIHRydWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG4gIGlmICghZm4pIHtcbiAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm4gJiZcbiAgICAgICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSkgJiZcbiAgICAgICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmbiB8fFxuICAgICAgICAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpIHx8XG4gICAgICAgIChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBBbGxvdyBgRXZlbnRFbWl0dGVyYCB0byBiZSBpbXBvcnRlZCBhcyBtb2R1bGUgbmFtZXNwYWNlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU29ja2V0RW51bXMgPSB7XHJcbiAgQ2xpZW50UmVnaXN0ZXI6IFwiQ2xpZW50UmVnaXN0ZXJcIixcclxuICBDbGllbnRVblJlZ2lzdGVyOiBcIkNsaWVudFVuUmVnaXN0ZXJcIixcclxuICBQSU5HOiBcIlBJTkdcIixcclxuICBURVNUOiBcIlRFU1RcIixcclxuICBBR0VPVkVSTEFZUFVTSDogXCJBR0VPVkVSTEFZUFVTSFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgU29ja2V0RW51bXMgfTtcclxuIiwiaW1wb3J0IHsgY2l2SWNvbnNNYXAgfSBmcm9tIFwiLi4vY2l2LWltYWdlcy9pbWFnZS1oZWxwZXIuanNcIjtcclxuaW1wb3J0IHsgQ2l2SWNvbkJ1aWxkZXIgfSBmcm9tIFwiLi9jaXYtaWNvbi5qc1wiO1xyXG5cclxuY2xhc3MgQ2l2SWNvbkxpc3Qge1xyXG4gIF9jaXZJY29uQ2xpY2tDb3VudGVyID0gMDtcclxuXHJcbiAgYnVpbGRFbGVtZW50KGluY2x1ZGVMYWJlbCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpY29uQnVpbGRlciA9IG5ldyBDaXZJY29uQnVpbGRlcigpO1xyXG5cclxuICAgIGNpdkljb25zTWFwLmZvckVhY2goKGNpdkljb25VcmwsIGNpdk5hbWUpID0+IHtcclxuICAgICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZChcImFkbWluLWNpdi1pY29uXCIpO1xyXG5cclxuICAgICAgY29uc3QgaWNvbkVsZW1lbnQgPSBpY29uQnVpbGRlci5idWlsZEVsZW1lbnQoY2l2SWNvblVybCk7XHJcbiAgICAgIGlmIChpbmNsdWRlTGFiZWwpIHtcclxuICAgICAgICBjb25zdCBpY29uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBpY29uTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5zYW5pdGl6ZURpc3BsYXlWYWx1ZShjaXZOYW1lKTtcclxuICAgICAgICBpY29uRGl2LmFwcGVuZENoaWxkKGljb25MYWJlbCk7XHJcbiAgICAgIH1cclxuICAgICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XHJcblxyXG4gICAgICBpY29uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNpdkljb25DbGljayhldmVudCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbiAgaGFuZGxlQ2l2SWNvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgY2xpY2tlZCAke3RoaXMuX2Npdkljb25DbGlja0NvdW50ZXJ9YCwgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCk7XHJcbiAgICBjb25zdCBjdXJyZW50UGxheWVyQ2xhc3MgPSBgcGxheWVyLSR7dGhpcy5fY2l2SWNvbkNsaWNrQ291bnRlcn1gO1xyXG5cclxuICAgIGxldCBudW1iZXJPZlBsYXllcnNPbkNpdiA9IDA7XHJcbiAgICBsZXQgcGxheWVyQ3NzU3RyaW5nID0gXCJcIjtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHtcclxuICAgICAgaWYgKGNzc0NsYXNzLmluZGV4T2YoXCJwbGF5ZXItXCIpID4gLTEpIHtcclxuICAgICAgICBwbGF5ZXJDc3NTdHJpbmcgPSBwbGF5ZXJDc3NTdHJpbmcuY29uY2F0KGAke2Nzc0NsYXNzfTpgKTtcclxuICAgICAgICBudW1iZXJPZlBsYXllcnNPbkNpdisrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjdXJyZW50UGxheWVyQ2xhc3N9YCkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFBsYXllckNsYXNzKTtcclxuICAgICAgbGV0IGxvY2FsUGxheWVyQ3NzU3RyaW5nID0gXCJcIjtcclxuICAgICAgZS5jbGFzc0xpc3QuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICBpZiAoY3NzQ2xhc3MuaW5kZXhPZihcInBsYXllci1cIikgPiAtMSkge1xyXG4gICAgICAgICAgbG9jYWxQbGF5ZXJDc3NTdHJpbmcgPSBsb2NhbFBsYXllckNzc1N0cmluZy5jb25jYXQoYCR7Y3NzQ2xhc3N9OmApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAobG9jYWxQbGF5ZXJDc3NTdHJpbmcgIT09IFwiXCIpIHtcclxuICAgICAgICBlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBjb25pYy1ncmFkaWVudCgke3RoaXMubWFwQWxsUGxheWVyTnVtYmVyc1RvQ29sb3JTdHJpbmcobG9jYWxQbGF5ZXJDc3NTdHJpbmcsIC0xKX0pYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYHBsYXllci0ke3RoaXMuX2Npdkljb25DbGlja0NvdW50ZXJ9YCk7XHJcblxyXG4gICAgaWYgKG51bWJlck9mUGxheWVyc09uQ2l2ID4gMCkge1xyXG4gICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGNvbmljLWdyYWRpZW50KCR7dGhpcy5tYXBBbGxQbGF5ZXJOdW1iZXJzVG9Db2xvclN0cmluZyhwbGF5ZXJDc3NTdHJpbmcsIHRoaXMuX2Npdkljb25DbGlja0NvdW50ZXIpfSlgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgJHt0aGlzLm1hcFBsYXllck51bWJlclRvQ29sb3IodGhpcy5fY2l2SWNvbkNsaWNrQ291bnRlcil9KWA7XHJcbiAgICB9XHJcbiAgICBsZXQgbnVtUGxheWVycyA9IDI7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX251bVBsYXllcnNJbk1hdGNoXCIpKSB7XHJcbiAgICAgIG51bVBsYXllcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9udW1QbGF5ZXJzSW5NYXRjaFwiKS52YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuX2Npdkljb25DbGlja0NvdW50ZXIgPSAodGhpcy5fY2l2SWNvbkNsaWNrQ291bnRlciArIDEpICUgbnVtUGxheWVycztcclxuICB9XHJcbiAgbWFwQWxsUGxheWVyTnVtYmVyc1RvQ29sb3JTdHJpbmcob3RoZXJQbGF5ZXJzLCBwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGxldCBtYXBwZWRDb2xvcnMgPSBcIlwiO1xyXG4gICAgb3RoZXJQbGF5ZXJzLnNwbGl0KFwiOlwiKS5mb3JFYWNoKChwbGF5ZXIpID0+IHtcclxuICAgICAgaWYgKHBsYXllciAhPT0gXCJcIikgbWFwcGVkQ29sb3JzID0gbWFwcGVkQ29sb3JzLmNvbmNhdCh0aGlzLm1hcFBsYXllck51bWJlclRvQ29sb3IocGxheWVyLnNwbGl0KFwiLVwiKVsxXSkpLmNvbmNhdChcIixcIik7XHJcbiAgICB9KTtcclxuICAgIGlmIChwbGF5ZXJOdW1iZXIgIT09IC0xKSBtYXBwZWRDb2xvcnMgPSBtYXBwZWRDb2xvcnMuY29uY2F0KHRoaXMubWFwUGxheWVyTnVtYmVyVG9Db2xvcihwbGF5ZXJOdW1iZXIpKTtcclxuICAgIGlmIChtYXBwZWRDb2xvcnMuc3Vic3RyaW5nKG1hcHBlZENvbG9ycy5sZW5ndGggLSAxKSA9PT0gXCIsXCIpIHtcclxuICAgICAgbWFwcGVkQ29sb3JzID0gbWFwcGVkQ29sb3JzLnNsaWNlKDAsIG1hcHBlZENvbG9ycy5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXBwZWRDb2xvcnM7XHJcbiAgfVxyXG4gIG1hcFBsYXllck51bWJlclRvQ29sb3IocGxheWVyTnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIHBsYXllck51bWJlciA9PT0gXCJzdHJpbmdcIiB8fCBwbGF5ZXJOdW1iZXIgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgcGxheWVyTnVtYmVyID0gcGFyc2VJbnQocGxheWVyTnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHBsYXllck51bWJlcikge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICByZXR1cm4gXCJibHVlXCI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVkXCI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ3JlZW5cIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDM6IHtcclxuICAgICAgICByZXR1cm4gXCJ5ZWxsb3dcIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDQ6IHtcclxuICAgICAgICByZXR1cm4gXCJjeWFuXCI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgcmV0dXJuIFwicHVycGxlXCI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA2OiB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ3JleVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNzoge1xyXG4gICAgICAgIHJldHVybiBcIm9yYW5nZVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgcmVzZXRTdGF0ZSgpIHtcclxuICAgIHRoaXMuX2Npdkljb25DbGlja0NvdW50ZXIgPSAwO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZG1pbi1jaXYtaWNvblwiKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGUuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiYWRtaW4tY2l2LWljb25cIik7XHJcbiAgICAgIGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRMaXN0T2ZDaXZzQ2xpY2tlZCgpIHtcclxuICAgIGxldCBudW1QbGF5ZXJzID0gMjtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9udW1QbGF5ZXJzSW5NYXRjaFwiKSkge1xyXG4gICAgICBudW1QbGF5ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfbnVtUGxheWVyc0luTWF0Y2hcIikudmFsdWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja2VkQ2l2cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QbGF5ZXJzOyBpKyspIHtcclxuICAgICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHBsYXllci0ke2l9YCk7XHJcbiAgICAgIGlmIChwbGF5ZXJFbGVtZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjbGlja2VkQ2l2cy5wdXNoKHBsYXllckVsZW1lbnRbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpWzBdLmlubmVyVGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbGlja2VkQ2l2cztcclxuICB9XHJcbiAgc2FuaXRpemVEaXNwbGF5VmFsdWUodmFsdWUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHZhbHVlID0gYCR7dmFsdWVbMF0udG9VcHBlckNhc2UoKX0ke3ZhbHVlLnN1YnN0cmluZygxLCB2YWx1ZS5sZW5ndGgpfWA7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IENpdkljb25MaXN0IH07XHJcbiIsImNsYXNzIENpdkljb25CdWlsZGVyIHtcclxuICBidWlsZEVsZW1lbnQoaW1nUGF0aCkge1xyXG4gICAgY29uc3QgY2l2SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2l2SWNvbi5zcmMgPSBpbWdQYXRoO1xyXG5cclxuICAgIHJldHVybiBjaXZJY29uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ2l2SWNvbkJ1aWxkZXIgfTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2F6dGVjcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYXp0ZWNzLnBuZ1wiLFxuXHRcIi4vYmVuZ2FsaXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2JlbmdhbGlzLnBuZ1wiLFxuXHRcIi4vYmVyYmVycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYmVyYmVycy5wbmdcIixcblx0XCIuL2JvaGVtaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYm9oZW1pYW5zLnBuZ1wiLFxuXHRcIi4vYnJpdG9ucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYnJpdG9ucy5wbmdcIixcblx0XCIuL2J1bGdhcmlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2J1bGdhcmlhbnMucG5nXCIsXG5cdFwiLi9idXJndW5kaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYnVyZ3VuZGlhbnMucG5nXCIsXG5cdFwiLi9idXJtZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9idXJtZXNlLnBuZ1wiLFxuXHRcIi4vYnl6YW50aW5lcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYnl6YW50aW5lcy5wbmdcIixcblx0XCIuL2NlbHRzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9jZWx0cy5wbmdcIixcblx0XCIuL2NoaW5lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2NoaW5lc2UucG5nXCIsXG5cdFwiLi9jdW1hbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2N1bWFucy5wbmdcIixcblx0XCIuL2RyYXZpZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2RyYXZpZGlhbnMucG5nXCIsXG5cdFwiLi9ldGhpb3BpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9ldGhpb3BpYW5zLnBuZ1wiLFxuXHRcIi4vZnJhbmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9mcmFua3MucG5nXCIsXG5cdFwiLi9nb3Rocy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvZ290aHMucG5nXCIsXG5cdFwiLi9ndXJqYXJhcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvZ3VyamFyYXMucG5nXCIsXG5cdFwiLi9oaW5kdXN0YW5pcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvaGluZHVzdGFuaXMucG5nXCIsXG5cdFwiLi9odW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9odW5zLnBuZ1wiLFxuXHRcIi4vaW5jYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2luY2FzLnBuZ1wiLFxuXHRcIi4vaXRhbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2l0YWxpYW5zLnBuZ1wiLFxuXHRcIi4vamFwYW5lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2phcGFuZXNlLnBuZ1wiLFxuXHRcIi4va2htZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2tobWVyLnBuZ1wiLFxuXHRcIi4va29yZWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMva29yZWFucy5wbmdcIixcblx0XCIuL2xpdGh1YW5pYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9saXRodWFuaWFucy5wbmdcIixcblx0XCIuL21hZ3lhcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL21hZ3lhcnMucG5nXCIsXG5cdFwiLi9tYWxheS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbWFsYXkucG5nXCIsXG5cdFwiLi9tYWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9tYWxpYW5zLnBuZ1wiLFxuXHRcIi4vbWF5YW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9tYXlhbnMucG5nXCIsXG5cdFwiLi9tb25nb2xzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9tb25nb2xzLnBuZ1wiLFxuXHRcIi4vcGVyc2lhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3BlcnNpYW5zLnBuZ1wiLFxuXHRcIi4vcG9sZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3BvbGVzLnBuZ1wiLFxuXHRcIi4vcG9ydHVndWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvcG9ydHVndWVzZS5wbmdcIixcblx0XCIuL3JvbWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvcm9tYW5zLnBuZ1wiLFxuXHRcIi4vc2FyYWNlbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3NhcmFjZW5zLnBuZ1wiLFxuXHRcIi4vc2ljaWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9zaWNpbGlhbnMucG5nXCIsXG5cdFwiLi9zbGF2cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvc2xhdnMucG5nXCIsXG5cdFwiLi9zcGFuaXNoLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9zcGFuaXNoLnBuZ1wiLFxuXHRcIi4vdGF0YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy90YXRhcnMucG5nXCIsXG5cdFwiLi90ZXV0b25zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy90ZXV0b25zLnBuZ1wiLFxuXHRcIi4vdHVya3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3R1cmtzLnBuZ1wiLFxuXHRcIi4vdmlldG5hbWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvdmlldG5hbWVzZS5wbmdcIixcblx0XCIuL3Zpa2luZ3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3Zpa2luZ3MucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9henRlY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYXp0ZWNzLnBuZ1wiLFxuXHRcIi4vYXp0ZWNzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2F6dGVjcy50cC5wbmdcIixcblx0XCIuL2JlbmdhbGlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JlbmdhbGlzLnBuZ1wiLFxuXHRcIi4vYmVuZ2FsaXMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYmVuZ2FsaXMudHAucG5nXCIsXG5cdFwiLi9iZXJiZXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JlcmJlcnMucG5nXCIsXG5cdFwiLi9iZXJiZXJzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JlcmJlcnMudHAucG5nXCIsXG5cdFwiLi9ib2hlbWlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYm9oZW1pYW5zLnBuZ1wiLFxuXHRcIi4vYm9oZW1pYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JvaGVtaWFucy50cC5wbmdcIixcblx0XCIuL2JyaXRvbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnJpdG9ucy5wbmdcIixcblx0XCIuL2JyaXRvbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnJpdG9ucy50cC5wbmdcIixcblx0XCIuL2J1bGdhcmlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnVsZ2FyaWFucy5wbmdcIixcblx0XCIuL2J1bGdhcmlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnVsZ2FyaWFucy50cC5wbmdcIixcblx0XCIuL2J1cmd1bmRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1cmd1bmRpYW5zLnBuZ1wiLFxuXHRcIi4vYnVyZ3VuZGlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvYnVyZ3VuZGlhbnMudHAucG5nXCIsXG5cdFwiLi9idXJtZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1cm1lc2UucG5nXCIsXG5cdFwiLi9idXJtZXNlLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1cm1lc2UudHAucG5nXCIsXG5cdFwiLi9ieXphbnRpbmVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J5emFudGluZXMucG5nXCIsXG5cdFwiLi9ieXphbnRpbmVzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J5emFudGluZXMudHAucG5nXCIsXG5cdFwiLi9jZWx0cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9jZWx0cy5wbmdcIixcblx0XCIuL2NlbHRzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2NlbHRzLnRwLnBuZ1wiLFxuXHRcIi4vY2hpbmVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9jaGluZXNlLnBuZ1wiLFxuXHRcIi4vY2hpbmVzZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9jaGluZXNlLnRwLnBuZ1wiLFxuXHRcIi4vY3VtYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2N1bWFucy5wbmdcIixcblx0XCIuL2N1bWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9jdW1hbnMudHAucG5nXCIsXG5cdFwiLi9kcmF2aWRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2RyYXZpZGlhbnMucG5nXCIsXG5cdFwiLi9kcmF2aWRpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2RyYXZpZGlhbnMudHAucG5nXCIsXG5cdFwiLi9ldGhpb3BpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2V0aGlvcGlhbnMucG5nXCIsXG5cdFwiLi9ldGhpb3BpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2V0aGlvcGlhbnMudHAucG5nXCIsXG5cdFwiLi9mcmFua3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZnJhbmtzLnBuZ1wiLFxuXHRcIi4vZnJhbmtzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2ZyYW5rcy50cC5wbmdcIixcblx0XCIuL2dvdGhzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2dvdGhzLnBuZ1wiLFxuXHRcIi4vZ290aHMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZ290aHMudHAucG5nXCIsXG5cdFwiLi9ndXJqYXJhcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ndXJqYXJhcy5wbmdcIixcblx0XCIuL2d1cmphcmFzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2d1cmphcmFzLnRwLnBuZ1wiLFxuXHRcIi4vaGluZHVzdGFuaXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaGluZHVzdGFuaXMucG5nXCIsXG5cdFwiLi9oaW5kdXN0YW5pcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9oaW5kdXN0YW5pcy50cC5wbmdcIixcblx0XCIuL2h1bnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaHVucy5wbmdcIixcblx0XCIuL2h1bnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaHVucy50cC5wbmdcIixcblx0XCIuL2luY2FzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2luY2FzLnBuZ1wiLFxuXHRcIi4vaW5jYXMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaW5jYXMudHAucG5nXCIsXG5cdFwiLi9pbmRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2luZGlhbnMucG5nXCIsXG5cdFwiLi9pbmRpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2luZGlhbnMudHAucG5nXCIsXG5cdFwiLi9pdGFsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pdGFsaWFucy5wbmdcIixcblx0XCIuL2l0YWxpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2l0YWxpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vamFwYW5lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvamFwYW5lc2UucG5nXCIsXG5cdFwiLi9qYXBhbmVzZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9qYXBhbmVzZS50cC5wbmdcIixcblx0XCIuL2tobWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2tobWVyLnBuZ1wiLFxuXHRcIi4va2htZXIudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMva2htZXIudHAucG5nXCIsXG5cdFwiLi9rb3JlYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2tvcmVhbnMucG5nXCIsXG5cdFwiLi9rb3JlYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2tvcmVhbnMudHAucG5nXCIsXG5cdFwiLi9saXRodWFuaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9saXRodWFuaWFucy5wbmdcIixcblx0XCIuL2xpdGh1YW5pYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2xpdGh1YW5pYW5zLnRwLnBuZ1wiLFxuXHRcIi4vbWFneWFycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tYWd5YXJzLnBuZ1wiLFxuXHRcIi4vbWFneWFycy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tYWd5YXJzLnRwLnBuZ1wiLFxuXHRcIi4vbWFsYXkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFsYXkucG5nXCIsXG5cdFwiLi9tYWxheS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tYWxheS50cC5wbmdcIixcblx0XCIuL21hbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFsaWFucy5wbmdcIixcblx0XCIuL21hbGlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFsaWFucy50cC5wbmdcIixcblx0XCIuL21heWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tYXlhbnMucG5nXCIsXG5cdFwiLi9tYXlhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWF5YW5zLnRwLnBuZ1wiLFxuXHRcIi4vbW9uZ29scy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tb25nb2xzLnBuZ1wiLFxuXHRcIi4vbW9uZ29scy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9tb25nb2xzLnRwLnBuZ1wiLFxuXHRcIi4vcGVyc2lhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcGVyc2lhbnMucG5nXCIsXG5cdFwiLi9wZXJzaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wZXJzaWFucy50cC5wbmdcIixcblx0XCIuL3BvbGVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3BvbGVzLnBuZ1wiLFxuXHRcIi4vcG9sZXMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcG9sZXMudHAucG5nXCIsXG5cdFwiLi9wb3J0dWd1ZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3BvcnR1Z3Vlc2UucG5nXCIsXG5cdFwiLi9wb3J0dWd1ZXNlLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3BvcnR1Z3Vlc2UudHAucG5nXCIsXG5cdFwiLi9yb21hbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcm9tYW5zLnBuZ1wiLFxuXHRcIi4vcm9tYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3JvbWFucy50cC5wbmdcIixcblx0XCIuL3NhcmFjZW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NhcmFjZW5zLnBuZ1wiLFxuXHRcIi4vc2FyYWNlbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvc2FyYWNlbnMudHAucG5nXCIsXG5cdFwiLi9zaWNpbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvc2ljaWxpYW5zLnBuZ1wiLFxuXHRcIi4vc2ljaWxpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NpY2lsaWFucy50cC5wbmdcIixcblx0XCIuL3NsYXZzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NsYXZzLnBuZ1wiLFxuXHRcIi4vc2xhdnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvc2xhdnMudHAucG5nXCIsXG5cdFwiLi9zcGFuaXNoLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NwYW5pc2gucG5nXCIsXG5cdFwiLi9zcGFuaXNoLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NwYW5pc2gudHAucG5nXCIsXG5cdFwiLi90YXRhcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdGF0YXJzLnBuZ1wiLFxuXHRcIi4vdGF0YXJzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3RhdGFycy50cC5wbmdcIixcblx0XCIuL3RldXRvbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdGV1dG9ucy5wbmdcIixcblx0XCIuL3RldXRvbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdGV1dG9ucy50cC5wbmdcIixcblx0XCIuL3R1cmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3R1cmtzLnBuZ1wiLFxuXHRcIi4vdHVya3MudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvdHVya3MudHAucG5nXCIsXG5cdFwiLi92aWV0bmFtZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3ZpZXRuYW1lc2UucG5nXCIsXG5cdFwiLi92aWV0bmFtZXNlLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3ZpZXRuYW1lc2UudHAucG5nXCIsXG5cdFwiLi92aWtpbmdzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3Zpa2luZ3MucG5nXCIsXG5cdFwiLi92aWtpbmdzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3Zpa2luZ3MudHAucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2F6dGVjcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYXp0ZWNzLnBuZ1wiLFxuXHRcIi4vYmVuZ2FsaXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2JlbmdhbGlzLnBuZ1wiLFxuXHRcIi4vYmVyYmVycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYmVyYmVycy5wbmdcIixcblx0XCIuL2JvaGVtaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYm9oZW1pYW5zLnBuZ1wiLFxuXHRcIi4vYnJpdG9ucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYnJpdG9ucy5wbmdcIixcblx0XCIuL2J1bGdhcmlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2J1bGdhcmlhbnMucG5nXCIsXG5cdFwiLi9idXJndW5kaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYnVyZ3VuZGlhbnMucG5nXCIsXG5cdFwiLi9idXJtZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9idXJtZXNlLnBuZ1wiLFxuXHRcIi4vYnl6YW50aW5lcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYnl6YW50aW5lcy5wbmdcIixcblx0XCIuL2NlbHRzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9jZWx0cy5wbmdcIixcblx0XCIuL2NoaW5lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2NoaW5lc2UucG5nXCIsXG5cdFwiLi9jdW1hbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2N1bWFucy5wbmdcIixcblx0XCIuL2RyYXZpZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2RyYXZpZGlhbnMucG5nXCIsXG5cdFwiLi9ldGhpb3BpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9ldGhpb3BpYW5zLnBuZ1wiLFxuXHRcIi4vZnJhbmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9mcmFua3MucG5nXCIsXG5cdFwiLi9nb3Rocy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvZ290aHMucG5nXCIsXG5cdFwiLi9ndXJqYXJhcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvZ3VyamFyYXMucG5nXCIsXG5cdFwiLi9oaW5kdXN0YW5pcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvaGluZHVzdGFuaXMucG5nXCIsXG5cdFwiLi9odW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9odW5zLnBuZ1wiLFxuXHRcIi4vaW5jYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2luY2FzLnBuZ1wiLFxuXHRcIi4vaXRhbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2l0YWxpYW5zLnBuZ1wiLFxuXHRcIi4vamFwYW5lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2phcGFuZXNlLnBuZ1wiLFxuXHRcIi4va2htZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2tobWVyLnBuZ1wiLFxuXHRcIi4va29yZWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMva29yZWFucy5wbmdcIixcblx0XCIuL2xpdGh1YW5pYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9saXRodWFuaWFucy5wbmdcIixcblx0XCIuL21hZ3lhcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL21hZ3lhcnMucG5nXCIsXG5cdFwiLi9tYWxheS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbWFsYXkucG5nXCIsXG5cdFwiLi9tYWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9tYWxpYW5zLnBuZ1wiLFxuXHRcIi4vbWF5YW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9tYXlhbnMucG5nXCIsXG5cdFwiLi9tb25nb2xzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9tb25nb2xzLnBuZ1wiLFxuXHRcIi4vcGVyc2lhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3BlcnNpYW5zLnBuZ1wiLFxuXHRcIi4vcG9sZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3BvbGVzLnBuZ1wiLFxuXHRcIi4vcG9ydHVndWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvcG9ydHVndWVzZS5wbmdcIixcblx0XCIuL3JvbWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvcm9tYW5zLnBuZ1wiLFxuXHRcIi4vc2FyYWNlbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3NhcmFjZW5zLnBuZ1wiLFxuXHRcIi4vc2ljaWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9zaWNpbGlhbnMucG5nXCIsXG5cdFwiLi9zbGF2cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvc2xhdnMucG5nXCIsXG5cdFwiLi9zcGFuaXNoLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9zcGFuaXNoLnBuZ1wiLFxuXHRcIi4vdGF0YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy90YXRhcnMucG5nXCIsXG5cdFwiLi90ZXV0b25zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy90ZXV0b25zLnBuZ1wiLFxuXHRcIi4vdHVya3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3R1cmtzLnBuZ1wiLFxuXHRcIi4vdmlldG5hbWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvdmlldG5hbWVzZS5wbmdcIixcblx0XCIuL3Zpa2luZ3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3Zpa2luZ3MucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmcpJFwiOyIsImZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XHJcbiAgcmV0dXJuIHIua2V5cygpLm1hcChyKTtcclxufVxyXG5mdW5jdGlvbiBpbXBvcnRBbGxJbnRvTWFwKHIsIHJlbGF0aXZlSW1hZ2VQYXRoKSB7XHJcbiAgY29uc3QgbXlNYXAgPSBuZXcgTWFwKCk7XHJcbiAgci5rZXlzKClcclxuICAgIC5tYXAocilcclxuICAgIC5mb3JFYWNoKChyZWxhdGl2ZVVybCkgPT4ge1xyXG4gICAgICBjb25zdCBjaXZLZXkgPSByZWxhdGl2ZVVybC5yZXBsYWNlKHJlbGF0aXZlSW1hZ2VQYXRoLCBcIlwiKS5yZXBsYWNlKFwiLnBuZ1wiLCBcIlwiKS5zcGxpdChcIi5cIilbMF07XHJcbiAgICAgIGlmIChteU1hcC5oYXMoY2l2S2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGNpdktleVBhcnRzID0gcmVsYXRpdmVVcmwucmVwbGFjZShyZWxhdGl2ZUltYWdlUGF0aCwgXCJcIikucmVwbGFjZShcIi5wbmdcIiwgXCJcIikuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IGNpdktleTIgPSBgJHtjaXZLZXlQYXJ0c1swXX0uJHtjaXZLZXlQYXJ0c1sxXX1gO1xyXG4gICAgICAgIG15TWFwLnNldChjaXZLZXkyLCByZWxhdGl2ZVVybCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXlNYXAuc2V0KGNpdktleSwgcmVsYXRpdmVVcmwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICByZXR1cm4gbXlNYXA7XHJcbn1cclxuY29uc3QgY2l2SWNvbnNNYXAgPSBpbXBvcnRBbGxJbnRvTWFwKHJlcXVpcmUuY29udGV4dChcIi4vaWNvbnMvXCIsIHRydWUsIC9cXC4ocG5nKSQvKSwgXCJjb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvXCIpO1xyXG5jb25zdCBjaXZVbmlxdWVVbml0SWNvbnNNYXAgPSBpbXBvcnRBbGxJbnRvTWFwKHJlcXVpcmUuY29udGV4dChcIi4vY2l2LXVuaXF1ZS11bml0cy9cIiwgdHJ1ZSwgL1xcLihwbmcpJC8pLCBcImNvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL1wiKTtcclxuY29uc3QgY2l2RW1ibGVtSW1hZ2VNYXAgPSBpbXBvcnRBbGxJbnRvTWFwKHJlcXVpcmUuY29udGV4dChcIi4vY2l2LWVtYmxlbXMvXCIsIHRydWUsIC9cXC4ocG5nKSQvKSwgXCJjb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvXCIpO1xyXG5jb25zdCBjaXZVcGdyYWRlSWNvbk1hcCA9IGltcG9ydEFsbEludG9NYXAocmVxdWlyZS5jb250ZXh0KFwiLi91cGdyYWRlLWljb25zL1wiLCB0cnVlLCAvXFwuKHBuZykkLyksIFwiY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvXCIpO1xyXG5cclxuZXhwb3J0IHsgY2l2SWNvbnNNYXAsIGNpdlVuaXF1ZVVuaXRJY29uc01hcCwgY2l2RW1ibGVtSW1hZ2VNYXAsIGNpdlVwZ3JhZGVJY29uTWFwIH07XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hcmJhbGVzdGVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2FyYmFsZXN0ZXIucG5nXCIsXG5cdFwiLi9hcmNoaXRlY3R1cmUucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYXJjaGl0ZWN0dXJlLnBuZ1wiLFxuXHRcIi4vYXJyb3dzbGl0cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9hcnJvd3NsaXRzLnBuZ1wiLFxuXHRcIi4vYXJzb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYXJzb24ucG5nXCIsXG5cdFwiLi9hdG9uZW1lbnQucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYXRvbmVtZW50LnBuZ1wiLFxuXHRcIi4vYmFsbGlzdGljcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9iYWxsaXN0aWNzLnBuZ1wiLFxuXHRcIi4vYmxhc3QgZnVybmFjZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ibGFzdCBmdXJuYWNlLnBuZ1wiLFxuXHRcIi4vYmxvY2sgcHJpbnRpbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYmxvY2sgcHJpbnRpbmcucG5nXCIsXG5cdFwiLi9ibG9vZGxpbmVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Jsb29kbGluZXMucG5nXCIsXG5cdFwiLi9ib2RraW4gYXJyb3cucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYm9ka2luIGFycm93LnBuZ1wiLFxuXHRcIi4vYm9tYmFyZCB0b3dlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ib21iYXJkIHRvd2VyLnBuZ1wiLFxuXHRcIi4vYm93IHNhdy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ib3cgc2F3LnBuZ1wiLFxuXHRcIi4vYnJhY2VyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2JyYWNlci5wbmdcIixcblx0XCIuL2Nhbm5vbiBnYWxsZW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Nhbm5vbiBnYWxsZW9uLnBuZ1wiLFxuXHRcIi4vY2FwcGVkIHJhbS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jYXBwZWQgcmFtLnBuZ1wiLFxuXHRcIi4vY2FyZWVuaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2NhcmVlbmluZy5wbmdcIixcblx0XCIuL2Nhc3RsZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jYXN0bGUucG5nXCIsXG5cdFwiLi9jYXN0bGUudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2FzdGxlLnRwLnBuZ1wiLFxuXHRcIi4vY2F2YWxpZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2F2YWxpZXIucG5nXCIsXG5cdFwiLi9jaGFpbiBiYXJkaW5nIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2NoYWluIGJhcmRpbmcgYXJtb3IucG5nXCIsXG5cdFwiLi9jaGFpbiBtYWlsIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2NoYWluIG1haWwgYXJtb3IucG5nXCIsXG5cdFwiLi9jaGFtcGlvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jaGFtcGlvbi5wbmdcIixcblx0XCIuL2NoZW1pc3RyeS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jaGVtaXN0cnkucG5nXCIsXG5cdFwiLi9jcm9wIHJvdGF0aW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Nyb3Agcm90YXRpb24ucG5nXCIsXG5cdFwiLi9jcm9zc2Jvd21hbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jcm9zc2Jvd21hbi5wbmdcIixcblx0XCIuL2RhcmsucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZGFyay5wbmdcIixcblx0XCIuL2RhcmsudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZGFyay50cC5wbmdcIixcblx0XCIuL2RvdWJsZS1iaXQgYXhlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2RvdWJsZS1iaXQgYXhlLnBuZ1wiLFxuXHRcIi4vZHJ5IGRvY2sucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZHJ5IGRvY2sucG5nXCIsXG5cdFwiLi9lYWdsZSB3YXJyaW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VhZ2xlIHdhcnJpb3IucG5nXCIsXG5cdFwiLi9lbGl0ZSBiYXR0bGUgZWxlcGhhbnQucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZWxpdGUgYmF0dGxlIGVsZXBoYW50LnBuZ1wiLFxuXHRcIi4vZWxpdGUgY2Fubm9uIGdhbGxlb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZWxpdGUgY2Fubm9uIGdhbGxlb24ucG5nXCIsXG5cdFwiLi9lbGl0ZSBlYWdsZSB3YXJyaW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VsaXRlIGVhZ2xlIHdhcnJpb3IucG5nXCIsXG5cdFwiLi9lbGl0ZSBza2lybWlzaGVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VsaXRlIHNraXJtaXNoZXIucG5nXCIsXG5cdFwiLi9lbGl0ZSBzdGVwcGUgbGFuY2VyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VsaXRlIHN0ZXBwZSBsYW5jZXIucG5nXCIsXG5cdFwiLi9lbGl0ZSB1bmlxdWUgdW5pdC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSB1bmlxdWUgdW5pdC5wbmdcIixcblx0XCIuL2ZhaXRoLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZhaXRoLnBuZ1wiLFxuXHRcIi4vZmFzdCBmaXJlIHNoaXAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZmFzdCBmaXJlIHNoaXAucG5nXCIsXG5cdFwiLi9mZXJ2b3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZmVydm9yLnBuZ1wiLFxuXHRcIi4vZmV1ZGFsLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZldWRhbC5wbmdcIixcblx0XCIuL2ZldWRhbC50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mZXVkYWwudHAucG5nXCIsXG5cdFwiLi9mbGV0Y2hpbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZmxldGNoaW5nLnBuZ1wiLFxuXHRcIi4vZm9yZ2luZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mb3JnaW5nLnBuZ1wiLFxuXHRcIi4vZm9ydGlmaWVkIHdhbGwucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZm9ydGlmaWVkIHdhbGwucG5nXCIsXG5cdFwiLi9nYWxsZW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2dhbGxlb24ucG5nXCIsXG5cdFwiLi9naWxsbmV0cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9naWxsbmV0cy5wbmdcIixcblx0XCIuL2dvbGQgbWluaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2dvbGQgbWluaW5nLnBuZ1wiLFxuXHRcIi4vZ29sZCBzaGFmdCBtaW5pbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZ29sZCBzaGFmdCBtaW5pbmcucG5nXCIsXG5cdFwiLi9ndWFyZCB0b3dlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ndWFyZCB0b3dlci5wbmdcIixcblx0XCIuL2hhbGJlcmRpZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGFsYmVyZGllci5wbmdcIixcblx0XCIuL2hhbmQgY2FydC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oYW5kIGNhcnQucG5nXCIsXG5cdFwiLi9oZWF0ZWQgc2hvdC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF0ZWQgc2hvdC5wbmdcIixcblx0XCIuL2hlYXZ5IGNhbWVsLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlYXZ5IGNhbWVsLnBuZ1wiLFxuXHRcIi4vaGVhdnkgY2F2IGFyY2hlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF2eSBjYXYgYXJjaGVyLnBuZ1wiLFxuXHRcIi4vaGVhdnkgZGVtbyBzaGlwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlYXZ5IGRlbW8gc2hpcC5wbmdcIixcblx0XCIuL2hlYXZ5IHBsb3cucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVhdnkgcGxvdy5wbmdcIixcblx0XCIuL2hlYXZ5IHNjb3JwaW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlYXZ5IHNjb3JwaW9uLnBuZ1wiLFxuXHRcIi4vaGVyYmFsIG1lZGljaW5lLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlcmJhbCBtZWRpY2luZS5wbmdcIixcblx0XCIuL2hlcmVzeS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZXJlc3kucG5nXCIsXG5cdFwiLi9ob3JzZSBjb2xsYXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaG9yc2UgY29sbGFyLnBuZ1wiLFxuXHRcIi4vaHVzYmFuZHJ5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2h1c2JhbmRyeS5wbmdcIixcblx0XCIuL2h1c3Nhci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9odXNzYXIucG5nXCIsXG5cdFwiLi9pbGx1bWluYXRpb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaWxsdW1pbmF0aW9uLnBuZ1wiLFxuXHRcIi4vaW1wZXJpYWwgY2FtZWwucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaW1wZXJpYWwgY2FtZWwucG5nXCIsXG5cdFwiLi9pbXBlcmlhbCBza2lybWlzaGVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ltcGVyaWFsIHNraXJtaXNoZXIucG5nXCIsXG5cdFwiLi9pbXBlcmlhbC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pbXBlcmlhbC5wbmdcIixcblx0XCIuL2ltcGVyaWFsLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ltcGVyaWFsLnRwLnBuZ1wiLFxuXHRcIi4vaXJvbiBjYXN0aW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2lyb24gY2FzdGluZy5wbmdcIixcblx0XCIuL2tlZXAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMva2VlcC5wbmdcIixcblx0XCIuL2xlYXRoZXIgYXJjaGVyIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2xlYXRoZXIgYXJjaGVyIGFybW9yLnBuZ1wiLFxuXHRcIi4vbGlnaHQgY2F2YWxyeS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9saWdodCBjYXZhbHJ5LnBuZ1wiLFxuXHRcIi4vbG9uZyBzd29yZHNtYW4ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbG9uZyBzd29yZHNtYW4ucG5nXCIsXG5cdFwiLi9tYW4tYXQtYXJtcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9tYW4tYXQtYXJtcy5wbmdcIixcblx0XCIuL21hc29ucnkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbWFzb25yeS5wbmdcIixcblx0XCIuL211cmRlciBob2xlcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9tdXJkZXIgaG9sZXMucG5nXCIsXG5cdFwiLi9vbmFnZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvb25hZ2VyLnBuZ1wiLFxuXHRcIi4vcGFkZGVkIGFyY2hlciBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9wYWRkZWQgYXJjaGVyIGFybW9yLnBuZ1wiLFxuXHRcIi4vcGFsYWRpbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9wYWxhZGluLnBuZ1wiLFxuXHRcIi4vcGFydGhpYW4gdGFjdGljcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9wYXJ0aGlhbiB0YWN0aWNzLnBuZ1wiLFxuXHRcIi4vcGlrZW1hbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9waWtlbWFuLnBuZ1wiLFxuXHRcIi4vcGxhdGUgYmFyZGluZyBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9wbGF0ZSBiYXJkaW5nIGFybW9yLnBuZ1wiLFxuXHRcIi4vcGxhdGUgbWFpbCBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9wbGF0ZSBtYWlsIGFybW9yLnBuZ1wiLFxuXHRcIi4vcmVkZW1wdGlvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9yZWRlbXB0aW9uLnBuZ1wiLFxuXHRcIi4vcmluZyBhcmNoZXIgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcmluZyBhcmNoZXIgYXJtb3IucG5nXCIsXG5cdFwiLi9zYW5jdGl0eS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zYW5jdGl0eS5wbmdcIixcblx0XCIuL3NjYWxlIGJhcmRpbmcgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2NhbGUgYmFyZGluZyBhcm1vci5wbmdcIixcblx0XCIuL3NjYWxlIG1haWwgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2NhbGUgbWFpbCBhcm1vci5wbmdcIixcblx0XCIuL3NoaXB3cmlnaHQucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2hpcHdyaWdodC5wbmdcIixcblx0XCIuL3NpZWdlIGVuZ2luZWVycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zaWVnZSBlbmdpbmVlcnMucG5nXCIsXG5cdFwiLi9zaWVnZSBvbmFnZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2llZ2Ugb25hZ2VyLnBuZ1wiLFxuXHRcIi4vc2llZ2UgcmFtLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NpZWdlIHJhbS5wbmdcIixcblx0XCIuL3NxdWlyZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc3F1aXJlcy5wbmdcIixcblx0XCIuL3N0b25lIG1pbmluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zdG9uZSBtaW5pbmcucG5nXCIsXG5cdFwiLi9zdG9uZSBzaGFmdCBtaW5pbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc3RvbmUgc2hhZnQgbWluaW5nLnBuZ1wiLFxuXHRcIi4vc3VwcGxpZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc3VwcGxpZXMucG5nXCIsXG5cdFwiLi90aGVvY3JhY3kucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdGhlb2NyYWN5LnBuZ1wiLFxuXHRcIi4vdGh1bWIgcmluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy90aHVtYiByaW5nLnBuZ1wiLFxuXHRcIi4vdHJhY2tpbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdHJhY2tpbmcucG5nXCIsXG5cdFwiLi90cmVhZG1pbGwgY3JhbmUucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdHJlYWRtaWxsIGNyYW5lLnBuZ1wiLFxuXHRcIi4vdHdvLWhhbmRlZCBzd29yZHNtYW4ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdHdvLWhhbmRlZCBzd29yZHNtYW4ucG5nXCIsXG5cdFwiLi90d28tbWFuIHNhdy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy90d28tbWFuIHNhdy5wbmdcIixcblx0XCIuL3VuaXF1ZSB0ZWNoIGNhc3RsZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy91bmlxdWUgdGVjaCBjYXN0bGUucG5nXCIsXG5cdFwiLi91bmlxdWUgdGVjaCBpbXBlcmlhbC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy91bmlxdWUgdGVjaCBpbXBlcmlhbC5wbmdcIixcblx0XCIuL3dhciBnYWxsZXkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvd2FyIGdhbGxleS5wbmdcIixcblx0XCIuL3doZWVsYmFycm93LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3doZWVsYmFycm93LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmcpJFwiOyIsImltcG9ydCB7IFNvY2tldEVudW1zIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi1kYXRhXCI7XHJcbmNsYXNzIFRlY2hPdmVybGF5Q29udHJvbCB7XHJcbiAgX2RhdGFTdG9yZTtcclxuICBfY2l2TGlzdDtcclxuICBfY2xpZW50V2Vic29ja2V0O1xyXG4gIGNvbnN0cnVjdG9yKGRhdGFTdG9yZSwgY2l2TGlzdCwgY2xpZW50V2Vic29ja2V0KSB7XHJcbiAgICB0aGlzLl9kYXRhU3RvcmUgPSBkYXRhU3RvcmU7XHJcbiAgICB0aGlzLl9jaXZMaXN0ID0gY2l2TGlzdDtcclxuICAgIHRoaXMuX2NsaWVudFdlYnNvY2tldCA9IGNsaWVudFdlYnNvY2tldDtcclxuICB9XHJcbiAgYnVpbGRFbGVtZW50KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWNvbHVtblwiKTtcclxuICAgIC8vIGNvbnRyb2xzXHJcbiAgICBjb25zdCBjb250cm9sc0VsZW1lbnQgPSB0aGlzLmJ1aWxkVGVjaFNldHRpbmdzUGFuZWwoKTtcclxuXHJcbiAgICAvLyBsaXN0IG9mIGNpdnNcclxuICAgIGNvbnN0IGNpdkxpc3RFbGVtZW50ID0gdGhpcy5fY2l2TGlzdC5idWlsZEVsZW1lbnQodHJ1ZSk7XHJcbiAgICBjaXZMaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGVjaC1jaXYtbGlzdFwiKTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRyb2xzRWxlbWVudCk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNpdkxpc3RFbGVtZW50KTtcclxuXHJcbiAgICAvL3doZW4gdGhlIGRvbSBsb2FkcyB0aGUgY2l2IGxpc3QsIHVwZGF0ZSBpdCB3aXRoIG91ciBzZXR0aW5nc1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubW9kaWZ5Q2l2Q291bnRDU1MoKTtcclxuICAgIH0sIDUwKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYnVpbGRUZWNoU2V0dGluZ3NQYW5lbCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGVjaC1zZXR0aW5nc1wiKTtcclxuXHJcbiAgICAvL2hlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZWNoLWhlYWRlclwiKTtcclxuICAgIGhlYWRlckVsZW1lbnQuaW5uZXJIVE1MID0gXCJUZWNobm9sb2d5IE92ZXJsYXlcIjtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnV0dG9uc0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGlvbi1idXR0b25zXCIpO1xyXG4gICAgYnV0dG9uc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEJ1dHRvbihcIkNsZWFyXCIsIFwiYnV0dG9uLXJlZFwiLCB0aGlzLm9uQ2xlYXJDbGlja2VkLmJpbmQodGhpcykpKTtcclxuICAgIGJ1dHRvbnNFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRCdXR0b24oXCJTaG93XCIsIFwiYnV0dG9uLWJsdWVcIiwgdGhpcy5vblNob3dDbGlja2VkLmJpbmQodGhpcykpKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uc0VsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHNldHRpbmdzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZXR0aW5nc0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGlvbi1zZXR0aW5nc1wiKTtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZSkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhga2V5ICR7a2V5fSA6OiAke3RoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZVtrZXldfWApO1xyXG4gICAgICBpZiAoa2V5ID09PSBcIl9sYWJlbF91c2VySWRcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZVtrZXldID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIHNldHRpbmdzRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkQ2hlY2tCb3goa2V5LCB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmVba2V5XSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmVba2V5XSkge1xyXG4gICAgICAgIHNldHRpbmdzRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkSW5wdXRCb3goa2V5LCB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmVba2V5XSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2V0dGluZ3NFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbiAgYnVpbGRDaGVja0JveChsYWJlbCwgdmFsdWUpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNldHRpbmctY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hcIik7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImZvclwiLCBsYWJlbCk7XHJcblxyXG4gICAgY29uc3Qgc3BhbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzcGFuTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5zYW5pdGl6ZURpc3BsYXlWYWx1ZShsYWJlbCk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0Q2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGlucHV0Q2hlY2tib3guaWQgPSBsYWJlbDtcclxuICAgIGlucHV0Q2hlY2tib3guY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgaW5wdXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNhdmVEYXRhKGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNwYW5DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc3BhbkNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XHJcbiAgICBzcGFuQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInJvdW5kXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuTGFiZWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRDaGVja2JveCk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNwYW5DaGVja2JveCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcbiAgYnVpbGRJbnB1dEJveChsYWJlbCwgdmFsdWUpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZy1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgZWxlbWVudExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBsYWJlbCk7XHJcblxyXG4gICAgY29uc3Qgc3BhbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzcGFuTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5zYW5pdGl6ZURpc3BsYXlWYWx1ZShsYWJlbCk7XHJcblxyXG4gICAgY29uc3QgaW5wdXROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dE51bWJlci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtbnVtYmVyXCIpO1xyXG4gICAgaW5wdXROdW1iZXIudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICBpbnB1dE51bWJlci5pZCA9IGxhYmVsO1xyXG4gICAgaW5wdXROdW1iZXIudmFsdWUgPSB2YWx1ZTtcclxuICAgIGlucHV0TnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2F2ZURhdGEoZXZlbnQpO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcIl9udW1DaXZzUGVyUm93XCIpIHtcclxuICAgICAgICB0aGlzLm1vZGlmeUNpdkNvdW50Q1NTKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudExhYmVsKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3BhbkxhYmVsKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXROdW1iZXIpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBidWlsZEJ1dHRvbihsYWJlbCwgYnV0dG9uQ2xhc3MsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNldHRpbmctY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNldHRpbmctYnV0dG9uXCIsIGJ1dHRvbkNsYXNzKTtcclxuICAgIGJ1dHRvbi5pZCA9IGxhYmVsO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGxhYmVsO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBvbkNsZWFyQ2xpY2tlZChldmVudCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZXZlbnREYXRhOiB7IEFHRU9WRVJMQVlQVVNIOiB0aGlzLmJ1aWxkUGF5bG9hZChmYWxzZSkgfSxcclxuICAgIH07XHJcbiAgICB0aGlzLl9jbGllbnRXZWJzb2NrZXQuY2FsbChcIkJyb2FkY2FzdEN1c3RvbUV2ZW50XCIsIGRhdGEpO1xyXG4gICAgdGhpcy5fY2l2TGlzdC5yZXNldFN0YXRlKCk7XHJcbiAgfVxyXG4gIG9uU2hvd0NsaWNrZWQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV2ZW50RGF0YTogeyBBR0VPVkVSTEFZUFVTSDogdGhpcy5idWlsZFBheWxvYWQodHJ1ZSkgfSxcclxuICAgIH07XHJcbiAgICB0aGlzLl9jbGllbnRXZWJzb2NrZXQuY2FsbChcIkJyb2FkY2FzdEN1c3RvbUV2ZW50XCIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRQYXlsb2FkKHNob3cpIHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUsIHsgc2hvd092ZXJsYXk6IHNob3csIHBpY2tlZENpdnM6IHRoaXMuX2Npdkxpc3QuZ2V0TGlzdE9mQ2l2c0NsaWNrZWQoKSB9KTtcclxuICAgIHJldHVybiBwYXlsb2FkO1xyXG4gIH1cclxuXHJcbiAgc2F2ZURhdGEoKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IHN0b3JlZFZhbHVlO1xyXG4gICAgICBpZiAoa2V5ID09PSBcIl9sYWJlbF91c2VySWRcIikge1xyXG4gICAgICAgIHN0b3JlZFZhbHVlID0gdGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlW2tleV07XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KS52YWx1ZSA9PT0gXCJvblwiKSB7XHJcbiAgICAgICAgc3RvcmVkVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpLmNoZWNrZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RvcmVkVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZVtrZXldID0gc3RvcmVkVmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2RhdGFTdG9yZS5zYXZlRGF0YSgpO1xyXG4gIH1cclxuICBtb2RpZnlDaXZDb3VudENTUygpIHtcclxuICAgIGNvbnN0IHdpZHRoUGVyY2VudCA9IDEwMCAvIHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZS5fbnVtQ2l2c1BlclJvdztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRtaW4tY2l2LWljb25cIikuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBlLnN0eWxlLmZsZXggPSBgMSAwICR7d2lkdGhQZXJjZW50fSVgO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYW5pdGl6ZURpc3BsYXlWYWx1ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoXCJfc2hvd1wiLCBcIlwiKS5yZXBsYWNlKFwiX3VzZVwiLCBcIlwiKS5yZXBsYWNlKFwiX1wiLCBcIlwiKS5yZXBsYWNlKFwiVGVjaFwiLCBcIlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRlY2hPdmVybGF5Q29udHJvbCB9O1xyXG4iLCJjbGFzcyBUZWNobm9sb2d5T3ZlcmxheVN0b3JlIHtcclxuICBfdXNlU291bmQgPSBmYWxzZTtcclxuICBfYXV0b0hpZGUgPSB0cnVlO1xyXG4gIF9zaG93VGVjaE92ZXJsYXkgPSB0cnVlO1xyXG4gIF9zaG93QmxhY2tzbWl0aFRlY2ggPSBmYWxzZTtcclxuICBfc2hvd1VuaXZlcnNpdHlUZWNoID0gZmFsc2U7XHJcbiAgX3Nob3dNb25hc3RhcnlUZWNoID0gZmFsc2U7XHJcbiAgX3Nob3dEb2NrVGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93QmFycmFja3NUZWNoID0gZmFsc2U7XHJcbiAgX3Nob3dBcmNoZXJ5VGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93U3RhYmxlVGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93U2llZ2VXb3Jrc2hvcFRlY2ggPSBmYWxzZTtcclxuICBfYXV0b0hpZGVEZWxheSA9IDEyO1xyXG4gIF9udW1DaXZzUGVyUm93ID0gNztcclxuICBfbnVtUGxheWVyc0luTWF0Y2ggPSAyO1xyXG4gIF9sYWJlbF91c2VySWQgPSBcIlwiO1xyXG59XHJcbmNsYXNzIFVJU2V0dGluZ3NPdmVybGF5U3RvcmUge1xyXG4gIF9mb250U2l6ZSA9IDIyO1xyXG4gIF90ZWNoQmFja2dyb3VuZE9wYWNpdHkgPSAwLjg7XHJcbn1cclxuY2xhc3MgU2Vuc2l0aXZlRGF0YVN0b3JlIHtcclxuICBfd2Vic29ja2V0X2lwID0gXCJcIjtcclxuICBfd2Vic29ja2V0X3Bhc3N3b3JkID0gXCJcIjtcclxuICBfd2Vic29ja2V0X3BvcnQgPSA0NDU1O1xyXG59XHJcblxyXG5jbGFzcyBMb2NhbFNhdmVkRGF0YSB7XHJcbiAgX3RlY2hPdmVybGF5U3RvcmU7XHJcbiAgX3VpU2V0dGluZ3NPdmVybGF5U3RvcmU7XHJcbiAgX3NlbnNpdGl2ZURhdGFTdG9yZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl90ZWNoT3ZlcmxheVN0b3JlID0gbmV3IFRlY2hub2xvZ3lPdmVybGF5U3RvcmUoKTtcclxuICAgIHRoaXMuX3VpU2V0dGluZ3NPdmVybGF5U3RvcmUgPSBuZXcgVUlTZXR0aW5nc092ZXJsYXlTdG9yZSgpO1xyXG4gICAgdGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlID0gbmV3IFNlbnNpdGl2ZURhdGFTdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZURhdGEoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgU2F2aW5nICR7dGhpcy5fdGVjaE92ZXJsYXlTdG9yZX1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVjaE92ZXJsYXlTdG9yZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLl90ZWNoT3ZlcmxheVN0b3JlKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgU2F2aW5nICR7dGhpcy5fdWlTZXR0aW5nc092ZXJsYXlTdG9yZX1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidWlTZXR0aW5nc092ZXJsYXlTdG9yZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLl91aVNldHRpbmdzT3ZlcmxheVN0b3JlKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNhdmluZ1wiLCB0aGlzLl9zZW5zaXRpdmVEYXRhU3RvcmUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZW5zaXRpdmVEYXRhU3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlKSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRGF0YSgpIHtcclxuICAgIGNvbnN0IHRlY2hEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlY2hPdmVybGF5U3RvcmVcIikpO1xyXG4gICAgaWYgKHRlY2hEYXRhKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fdGVjaE92ZXJsYXlTdG9yZSwgdGVjaERhdGEpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWQpO1xyXG4gICAgICBpZiAoIXRoaXMuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZCkge1xyXG4gICAgICAgIC8vIHRoaXMuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XHJcbiAgICAgICAgdGhpcy5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLl90ZWNoT3ZlcmxheVN0b3JlID0gdGVjaERhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1aURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidWlTZXR0aW5nc092ZXJsYXlTdG9yZVwiKSk7XHJcbiAgICBpZiAodWlEYXRhKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fdWlTZXR0aW5nc092ZXJsYXlTdG9yZSwgdWlEYXRhKTtcclxuICAgICAgLy8gdGhpcy5fdWlTZXR0aW5nc092ZXJsYXlTdG9yZSA9IHVpRGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbnNpdGl2ZURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Vuc2l0aXZlRGF0YVN0b3JlXCIpKTtcclxuICAgIGlmIChzZW5zaXRpdmVEYXRhKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc2Vuc2l0aXZlRGF0YVN0b3JlLCBzZW5zaXRpdmVEYXRhKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhcIkxvYWRlZFwiLCB0aGlzLl9zZW5zaXRpdmVEYXRhU3RvcmUpO1xyXG4gICAgICAvLyB0aGlzLl9zZW5zaXRpdmVEYXRhU3RvcmUgPSBzZW5zaXRpdmVEYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlRGF0YShrZXkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMb2NhbFNhdmVkRGF0YSB9O1xyXG4iLCJpbXBvcnQgeyBUZWNoT3ZlcmxheUNvbnRyb2wgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90ZWNoLW92ZXJsYXktY29udHJvbC90ZWNoLW92ZXJsYXktY29udHJvbFwiO1xyXG5pbXBvcnQgeyBDaXZJY29uTGlzdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Npdi1pY29ucy9jaXYtaWNvbi1saXN0XCI7XHJcblxyXG5jbGFzcyBBZG1pblBhZ2Uge1xyXG4gIF9kYXRhU3RvcmU7XHJcbiAgX2NsaWVudFdlYnNvY2tldDtcclxuICBjb25zdHJ1Y3RvcihkYXRhU3RvcmUsIGNsaWVudFdlYnNvY2tldCkge1xyXG4gICAgdGhpcy5fZGF0YVN0b3JlID0gZGF0YVN0b3JlO1xyXG4gICAgdGhpcy5fY2xpZW50V2Vic29ja2V0ID0gY2xpZW50V2Vic29ja2V0O1xyXG4gIH1cclxuICBidWlsZEh0bWwoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJhZG1pbi1ib2R5XCIpO1xyXG4gICAgY29uc3QgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBhZG1pblBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRtaW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJhZG1pbi1wYWdlXCIpO1xyXG5cclxuICAgIGFkbWluUGFnZS5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkV2ViU29ja2V0SHRtbCgpKTtcclxuICAgIGNvbnN0IGNpdkljb25MaXN0ID0gbmV3IENpdkljb25MaXN0KCk7XHJcbiAgICBjb25zdCB0ZWNoT3ZlcmxheUNvbnRyb2wgPSBuZXcgVGVjaE92ZXJsYXlDb250cm9sKHRoaXMuX2RhdGFTdG9yZSwgY2l2SWNvbkxpc3QsIHRoaXMuX2NsaWVudFdlYnNvY2tldCk7XHJcbiAgICBhZG1pblBhZ2UuYXBwZW5kQ2hpbGQodGVjaE92ZXJsYXlDb250cm9sLmJ1aWxkRWxlbWVudCgpKTtcclxuXHJcbiAgICBib2R5Q29udGVudC5hcHBlbmRDaGlsZChhZG1pblBhZ2UpO1xyXG4gIH1cclxuICBidWlsZFdlYlNvY2tldEh0bWwoKSB7XHJcbiAgICBjb25zdCB3ZWJzb2NrZXRDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3ZWJzb2NrZXRDb250cm9scy5pZCA9IFwid2Vic29ja2V0LWNvbnRyb2xzXCI7XHJcbiAgICB3ZWJzb2NrZXRDb250cm9scy5jbGFzc0xpc3QuYWRkKFwid2Vic29ja2V0LWNvbnRyb2xzXCIpO1xyXG5cclxuICAgIGNvbnN0IGlwSW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpcElucHV0Qm94LmNsYXNzTGlzdC5hZGQoXCJ3ZWJzb2NrZXQtaW5wdXRcIik7XHJcbiAgICBpcElucHV0Qm94LmlkID0gXCJ3ZWJzb2NrZXQtaXAtaW5wdXRcIjtcclxuICAgIGlwSW5wdXRCb3gudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgaXBJbnB1dEJveC52YWx1ZSA9IHRoaXMuX2RhdGFTdG9yZS5fc2Vuc2l0aXZlRGF0YVN0b3JlLl93ZWJzb2NrZXRfaXAgPT09IFwiXCIgPyBcIm9icy13ZWJzb2NrZXQgaXB2NCBvciBpcHY2IGFkZHJlc3NcIiA6IHRoaXMuX2RhdGFTdG9yZS5fc2Vuc2l0aXZlRGF0YVN0b3JlLl93ZWJzb2NrZXRfaXA7XHJcbiAgICB3ZWJzb2NrZXRDb250cm9scy5hcHBlbmRDaGlsZChpcElucHV0Qm94KTtcclxuXHJcbiAgICBjb25zdCBwYXNzd29yZElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgcGFzc3dvcmRJbnB1dEJveC5jbGFzc0xpc3QuYWRkKFwid2Vic29ja2V0LWlucHV0XCIpO1xyXG4gICAgcGFzc3dvcmRJbnB1dEJveC5pZCA9IFwid2Vic29ja2V0LXBhc3N3b3JkLWlucHV0XCI7XHJcbiAgICBwYXNzd29yZElucHV0Qm94LnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICBwYXNzd29yZElucHV0Qm94LnZhbHVlID0gdGhpcy5fZGF0YVN0b3JlLl9zZW5zaXRpdmVEYXRhU3RvcmUuX3dlYnNvY2tldF9wYXNzd29yZCA9PT0gXCJcIiA/IFwicGFzc3dvcmRcIiA6IHRoaXMuX2RhdGFTdG9yZS5fc2Vuc2l0aXZlRGF0YVN0b3JlLl93ZWJzb2NrZXRfcGFzc3dvcmQ7XHJcblxyXG4gICAgd2Vic29ja2V0Q29udHJvbHMuYXBwZW5kQ2hpbGQocGFzc3dvcmRJbnB1dEJveCk7XHJcblxyXG4gICAgY29uc3Qgd2Vic29ja2V0Q29ubmVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHdlYnNvY2tldENvbm5lY3RCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICB3ZWJzb2NrZXRDb25uZWN0QnV0dG9uLnZhbHVlID0gXCJDb25uZWN0XCI7XHJcbiAgICB3ZWJzb2NrZXRDb25uZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3ZWJzb2NrZXQtc2V0dGluZy1idXR0b25cIiwgXCJidXR0b24tYmx1ZVwiKTtcclxuICAgIHdlYnNvY2tldENvbm5lY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9kYXRhU3RvcmUuc2F2ZURhdGEoKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb25uZWN0VG9PYnNXZWJzb2NrZXQoKTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIG9icy13ZWJzb2NrZXRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIElQXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHdlYnNvY2tldENvbnRyb2xzLmFwcGVuZENoaWxkKHdlYnNvY2tldENvbm5lY3RCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IHdlYnNvY2tldERpc2Nvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB3ZWJzb2NrZXREaXNjb25uZWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgd2Vic29ja2V0RGlzY29ubmVjdEJ1dHRvbi52YWx1ZSA9IFwiRGlzY29ubmVjdFwiO1xyXG4gICAgd2Vic29ja2V0RGlzY29ubmVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwid2Vic29ja2V0LXNldHRpbmctYnV0dG9uXCIsIFwiYnV0dG9uLXJlZFwiKTtcclxuICAgIHdlYnNvY2tldERpc2Nvbm5lY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9kYXRhU3RvcmUuc2F2ZURhdGEoKTtcclxuICAgICAgYXdhaXQgdGhpcy5kaXNjb25uZWN0RnJvbU9ic1dlYnNvY2tldCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRpc2Nvbm5lY3RlZCBmcm9tIG9icy13ZWJzb2NrZXRcIik7XHJcbiAgICB9KTtcclxuICAgIHdlYnNvY2tldENvbnRyb2xzLmFwcGVuZENoaWxkKHdlYnNvY2tldERpc2Nvbm5lY3RCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiB3ZWJzb2NrZXRDb250cm9scztcclxuICB9XHJcbiAgYXN5bmMgY29ubmVjdFRvT2JzV2Vic29ja2V0KCkge1xyXG4gICAgY29uc3QgaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYnNvY2tldC1pcC1pbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBpcFBhcnRzID0gaXAuc3BsaXQoXCIuXCIpO1xyXG4gICAgbGV0IGZvcm1hdHRlZElwID0gXCJcIjtcclxuICAgIGxldCBpc1ZhbGlkSXAgPSBmYWxzZTtcclxuICAgIGlmIChpcC5pbmRleE9mKFwiLm5ncm9rLWZyZWUuYXBwXCIpID4gMCkge1xyXG4gICAgICBmb3JtYXR0ZWRJcCA9IGlwO1xyXG4gICAgICBpc1ZhbGlkSXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlwUGFydHMubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgIC8vIGlwdjRcclxuICAgICAgZm9ybWF0dGVkSXAgPSBpcDtcclxuICAgICAgaXNWYWxpZElwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlwUGFydHMgPSBpcC5zcGxpdChcIjpcIik7XHJcbiAgICBpZiAoaXBQYXJ0cy5sZW5ndGggPT09IDgpIHtcclxuICAgICAgLy8gaXB2NlxyXG4gICAgICBpZiAoaXAuaW5kZXhPZihcIltcIikgIT09IDApIHtcclxuICAgICAgICBmb3JtYXR0ZWRJcCA9IGBbJHtpcH1dYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtYXR0ZWRJcCA9IGlwO1xyXG4gICAgICB9XHJcbiAgICAgIGlzVmFsaWRJcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNWYWxpZElwKSB7XHJcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWJzb2NrZXQtcGFzc3dvcmQtaW5wdXRcIikudmFsdWU7XHJcblxyXG4gICAgICB0aGlzLl9kYXRhU3RvcmUuX3NlbnNpdGl2ZURhdGFTdG9yZVtcIl93ZWJzb2NrZXRfaXBcIl0gPSBmb3JtYXR0ZWRJcDtcclxuICAgICAgdGhpcy5fZGF0YVN0b3JlLl9zZW5zaXRpdmVEYXRhU3RvcmVbXCJfd2Vic29ja2V0X3Bhc3N3b3JkXCJdID0gcGFzc3dvcmQ7XHJcbiAgICAgIGF3YWl0IHRoaXMuX2NsaWVudFdlYnNvY2tldC5jb25uZWN0KGB3c3M6Ly8ke2Zvcm1hdHRlZElwfTo0NDU1YCwgcGFzc3dvcmQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgYXN5bmMgZGlzY29ubmVjdEZyb21PYnNXZWJzb2NrZXQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLl9jbGllbnRXZWJzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWRtaW5QYWdlIH07XHJcbiIsImNsYXNzIERlZmF1bHRIVE1MUGFnZUVsZW1lbnRzIHtcclxuICBfZGF0YVN0b3JlO1xyXG4gIGNvbnN0cnVjdG9yKGRhdGFTdG9yZSkge1xyXG4gICAgdGhpcy5fZGF0YVN0b3JlID0gZGF0YVN0b3JlO1xyXG4gIH1cclxuICBidWlsZEZvb3RlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IFwiZm9vdGVyXCI7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJteS1mb290ZXJcIik7XHJcblxyXG4gICAgY29uc3QgdGV4dFNwYW5FbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgdGV4dFNwYW5FbGVtZW50MS5pbm5lckhUTUwgPSBcIkNyZWF0ZWQgYnkgXCI7XHJcblxyXG4gICAgY29uc3QgdHJlZVR3aXRjaEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgdHJlZVR3aXRjaEFuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cudHdpdGNoLnR2L2l0c2F0cmVlZVwiKTtcclxuICAgIHRyZWVUd2l0Y2hBbmNob3IuaW5uZXJIVE1MID0gXCJJdHNBVHJlZWVcIjtcclxuXHJcbiAgICBjb25zdCB0ZXh0U3BhbkVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB0ZXh0U3BhbkVsZW1lbnQyLmlubmVySFRNTCA9IGAgKDIwMTktJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9KSAtIGA7XHJcblxyXG4gICAgY29uc3QgdHJlZUdpdGh1YkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgdHJlZUdpdGh1YkFuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL1RyZWVlL3RlY2gtd2lkZ2V0LW92ZXJsYXlcIik7XHJcbiAgICB0cmVlR2l0aHViQW5jaG9yLmlubmVySFRNTCA9IFwiR2l0SHViXCI7XHJcbiAgICBjb25zdCBjcmVhdGVkQnlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNyZWF0ZWRCeUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtZW50MSk7XHJcbiAgICBjcmVhdGVkQnlFbGVtZW50LmFwcGVuZENoaWxkKHRyZWVUd2l0Y2hBbmNob3IpO1xyXG4gICAgY3JlYXRlZEJ5RWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW1lbnQyKTtcclxuICAgIGNyZWF0ZWRCeUVsZW1lbnQuYXBwZW5kQ2hpbGQodHJlZUdpdGh1YkFuY2hvcik7XHJcblxyXG4gICAgY29uc3QgdGV4dFNwYW5FbGVtZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgdGV4dFNwYW5FbGVtZW50My5pbm5lckhUTUwgPSBgQWdlIG9mIEVtcGlyZXMgSUkgwqkgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiA8Yj5Bb0UgVGVjaC9NYXAgT3ZlcmxheSBmb3IgQWdlIG9mIEVtcGlyZXMgSUk8L2I+IHdhcyBjcmVhdGVkIHVuZGVyIE1pY3Jvc29mdCdzIFwiYDtcclxuXHJcbiAgICBjb25zdCBtaWNyb3NvZnRBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIG1pY3Jvc29mdEFuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cueGJveC5jb20vZW4tdXMvZGV2ZWxvcGVycy9ydWxlc1wiKTtcclxuICAgIG1pY3Jvc29mdEFuY2hvci5pbm5lckhUTUwgPSBcIkdhbWUgQ29udGVudCBVc2FnZSBSdWxlc1wiO1xyXG5cclxuICAgIGNvbnN0IHRleHRTcGFuRWxlbWVudDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHRleHRTcGFuRWxlbWVudDQuaW5uZXJIVE1MID0gYFwiIHVzaW5nIGFzc2V0cyBmcm9tIEFnZSBvZiBFbXBpcmVzIElJLCBhbmQgaXQgaXMgbm90IGVuZG9yc2VkIGJ5IG9yIGFmZmlsaWF0ZWQgd2l0aCBNaWNyb3NvZnQuYDtcclxuICAgIGNvbnN0IG5vbkVuZG9yc2VtZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBub25FbmRvcnNlbWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtZW50Myk7XHJcbiAgICBub25FbmRvcnNlbWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobWljcm9zb2Z0QW5jaG9yKTtcclxuICAgIG5vbkVuZG9yc2VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW1lbnQ0KTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZWRCeUVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FbmRvcnNlbWVudEVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG4gIGJ1aWxkSGVhZGVyKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmlkID0gXCJoZWFkZXJcIjtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm15LWhlYWRlclwiKTtcclxuXHJcbiAgICBjb25zdCBhZG1pblBhZ2VSb3V0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZG1pblBhZ2VSb3V0ZS5pbm5lckhUTUwgPSBcInwgQURNSU4gfFwiO1xyXG4gICAgYWRtaW5QYWdlUm91dGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZCk7XHJcbiAgICAgIC8vIGFsZXJ0KGBDb3BpZWQgaWQgdG8gY2xpcGJvYXJkOiAke3RoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkfWApO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAjYWRtaW4vJHt0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZH1gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgcm91bmRNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJvdW5kTWFuYWdlci5pbm5lckhUTUwgPSBcInwgUk9VTkRTIHxcIjtcclxuICAgIHJvdW5kTWFuYWdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIiNtYXRjaHNldFwiO1xyXG4gICAgICBhbGVydChcIk5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXR0aW5nc1BhZ2VSb3V0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZXR0aW5nc1BhZ2VSb3V0ZS5pbm5lckhUTUwgPSBcInwgQ0xJRU5UIHxcIjtcclxuICAgIHNldHRpbmdzUGFnZVJvdXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgLy8gICB3aW5kb3cub3BlbihgI2NsaWVudC8ke3RoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkfWAsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAjY2xpZW50LyR7dGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWR9YDtcclxuICAgICAgd2luZG93Lm9wZW4oYC90ZWNoLW92ZXJsYXkvY2xpZW50IyR7dGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWR9YCwgXCJfYmxhbmtcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGFkbWluUGFnZVJvdXRlKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocm91bmRNYW5hZ2VyKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2V0dGluZ3NQYWdlUm91dGUpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBidWlsZEZhdkljb24oKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICBlbGVtZW50LnR5cGUgPSBcInNob3J0Y3V0IGljb25cIjtcclxuICAgIGVsZW1lbnQuaHJlZiA9IFwiZmF2aWNvbi5naWZcIjtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBpbml0RGVmYXVsdEVsZW1lbnRzKGhpZGVIZWFkZXIsIGhpZGVGb290ZXIpIHtcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEZhdkljb24oKSk7XHJcbiAgICBpZiAoIWhpZGVIZWFkZXIpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5iZWZvcmUodGhpcy5idWlsZEhlYWRlcigpKTtcclxuICAgIH1cclxuICAgIGlmICghaGlkZUZvb3Rlcikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFmdGVyKHRoaXMuYnVpbGRGb290ZXIoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEZWZhdWx0SFRNTFBhZ2VFbGVtZW50cyB9O1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxTYXZlZERhdGEgfSBmcm9tIFwiLi9kYXRhc3RvcmUuanNcIjtcclxuaW1wb3J0IHsgRGVmYXVsdEhUTUxQYWdlRWxlbWVudHMgfSBmcm9tIFwiLi9odG1sLXBhZ2VzL2RlZmF1bHQtZWxlbWVudHMuanNcIjtcclxuaW1wb3J0IHsgQWRtaW5QYWdlIH0gZnJvbSBcIi4vaHRtbC1wYWdlcy9hZG1pbi1wYWdlLmpzXCI7XHJcbmltcG9ydCBPQlNXZWJTb2NrZXQgZnJvbSBcIm9icy13ZWJzb2NrZXQtanNcIjtcclxuXHJcbmNvbnN0IHNhdmVkRGF0YSA9IG5ldyBMb2NhbFNhdmVkRGF0YSgpO1xyXG5zYXZlZERhdGEubG9hZERhdGEoKTtcclxuc2F2ZWREYXRhLnNhdmVEYXRhKCk7XHJcblxyXG5jb25zdCBvYnMgPSBuZXcgT0JTV2ViU29ja2V0KCk7XHJcblxyXG5jb25zdCBkeW5hbWljQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmR5bmFtaWNDb250ZW50RGl2LmlkID0gXCJkeW5hbWljLWNvbnRlbnRcIjtcclxuZHluYW1pY0NvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImJvZHktY29udGVudFwiKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljQ29udGVudERpdik7XHJcblxyXG5jb25zdCBkZWZhdWx0RWxlbWVudHMgPSBuZXcgRGVmYXVsdEhUTUxQYWdlRWxlbWVudHMoc2F2ZWREYXRhKTtcclxuZGVmYXVsdEVsZW1lbnRzLmluaXREZWZhdWx0RWxlbWVudHMoKTtcclxuXHJcbm5ldyBBZG1pblBhZ2Uoc2F2ZWREYXRhLCBvYnMpLmJ1aWxkSHRtbCgpO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iLCJpbXBvcnQgY3JlYXRlRGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgV2ViU29ja2V0SXBtbCBmcm9tICdpc29tb3JwaGljLXdzJztcbmltcG9ydCBzaGEyNTYgZnJvbSAnY3J5cHRvLWpzL3NoYTI1Ni5qcyc7XG5pbXBvcnQgQmFzZTY0IGZyb20gJ2NyeXB0by1qcy9lbmMtYmFzZTY0LmpzJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgV2ViU29ja2V0T3BDb2RlO1xuKGZ1bmN0aW9uIChXZWJTb2NrZXRPcENvZGUpIHtcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIG1lc3NhZ2Ugc2VudCBieSBvYnMtd2Vic29ja2V0IHRvIG5ld2x5IGNvbm5lY3RlZCBjbGllbnRzLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIkhlbGxvXCJdID0gMF0gPSBcIkhlbGxvXCI7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBzZW50IGJ5IGEgbmV3bHkgY29ubmVjdGVkIGNsaWVudCB0byBvYnMtd2Vic29ja2V0IGluIHJlc3BvbnNlIHRvIGEgYEhlbGxvYC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJJZGVudGlmeVwiXSA9IDFdID0gXCJJZGVudGlmeVwiO1xuICAvKipcbiAgICogVGhlIHJlc3BvbnNlIHNlbnQgYnkgb2JzLXdlYnNvY2tldCB0byBhIGNsaWVudCBhZnRlciBpdCBoYXMgc3VjY2Vzc2Z1bGx5IGlkZW50aWZpZWQgd2l0aCBvYnMtd2Vic29ja2V0LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIklkZW50aWZpZWRcIl0gPSAyXSA9IFwiSWRlbnRpZmllZFwiO1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2Ugc2VudCBieSBhbiBhbHJlYWR5LWlkZW50aWZpZWQgY2xpZW50IHRvIHVwZGF0ZSBpZGVudGlmaWNhdGlvbiBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIlJlaWRlbnRpZnlcIl0gPSAzXSA9IFwiUmVpZGVudGlmeVwiO1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2Ugc2VudCBieSBvYnMtd2Vic29ja2V0IGNvbnRhaW5pbmcgYW4gZXZlbnQgcGF5bG9hZC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJFdmVudFwiXSA9IDVdID0gXCJFdmVudFwiO1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2Ugc2VudCBieSBhIGNsaWVudCB0byBvYnMtd2Vic29ja2V0IHRvIHBlcmZvcm0gYSByZXF1ZXN0LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgV2ViU29ja2V0T3BDb2RlW1dlYlNvY2tldE9wQ29kZVtcIlJlcXVlc3RcIl0gPSA2XSA9IFwiUmVxdWVzdFwiO1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2Ugc2VudCBieSBvYnMtd2Vic29ja2V0IGluIHJlc3BvbnNlIHRvIGEgcGFydGljdWxhciByZXF1ZXN0IGZyb20gYSBjbGllbnQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiUmVxdWVzdFJlc3BvbnNlXCJdID0gN10gPSBcIlJlcXVlc3RSZXNwb25zZVwiO1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2Ugc2VudCBieSBhIGNsaWVudCB0byBvYnMtd2Vic29ja2V0IHRvIHBlcmZvcm0gYSBiYXRjaCBvZiByZXF1ZXN0cy5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFdlYlNvY2tldE9wQ29kZVtXZWJTb2NrZXRPcENvZGVbXCJSZXF1ZXN0QmF0Y2hcIl0gPSA4XSA9IFwiUmVxdWVzdEJhdGNoXCI7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBzZW50IGJ5IG9icy13ZWJzb2NrZXQgaW4gcmVzcG9uc2UgdG8gYSBwYXJ0aWN1bGFyIGJhdGNoIG9mIHJlcXVlc3RzIGZyb20gYSBjbGllbnQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBXZWJTb2NrZXRPcENvZGVbV2ViU29ja2V0T3BDb2RlW1wiUmVxdWVzdEJhdGNoUmVzcG9uc2VcIl0gPSA5XSA9IFwiUmVxdWVzdEJhdGNoUmVzcG9uc2VcIjtcbn0pKFdlYlNvY2tldE9wQ29kZSB8fCAoV2ViU29ja2V0T3BDb2RlID0ge30pKTtcbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UsIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItbGl0ZXJhbC1lbnVtLW1lbWJlciAqL1xudmFyIEV2ZW50U3Vic2NyaXB0aW9uO1xuKGZ1bmN0aW9uIChFdmVudFN1YnNjcmlwdGlvbikge1xuICAvKipcbiAgICogU3ViY3JpcHRpb24gdmFsdWUgdXNlZCB0byBkaXNhYmxlIGFsbCBldmVudHMuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgR2VuZXJhbGAgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIkdlbmVyYWxcIl0gPSAxXSA9IFwiR2VuZXJhbFwiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgQ29uZmlnYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiQ29uZmlnXCJdID0gMl0gPSBcIkNvbmZpZ1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgU2NlbmVzYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiU2NlbmVzXCJdID0gNF0gPSBcIlNjZW5lc1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgSW5wdXRzYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiSW5wdXRzXCJdID0gOF0gPSBcIklucHV0c1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgVHJhbnNpdGlvbnNgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJUcmFuc2l0aW9uc1wiXSA9IDE2XSA9IFwiVHJhbnNpdGlvbnNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIGV2ZW50cyBpbiB0aGUgYEZpbHRlcnNgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJGaWx0ZXJzXCJdID0gMzJdID0gXCJGaWx0ZXJzXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBPdXRwdXRzYCBjYXRlZ29yeS5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiT3V0cHV0c1wiXSA9IDY0XSA9IFwiT3V0cHV0c1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgU2NlbmVJdGVtc2AgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIlNjZW5lSXRlbXNcIl0gPSAxMjhdID0gXCJTY2VuZUl0ZW1zXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSBldmVudHMgaW4gdGhlIGBNZWRpYUlucHV0c2AgY2F0ZWdvcnkuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIk1lZGlhSW5wdXRzXCJdID0gMjU2XSA9IFwiTWVkaWFJbnB1dHNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIHRoZSBgVmVuZG9yRXZlbnRgIGV2ZW50LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJWZW5kb3JzXCJdID0gNTEyXSA9IFwiVmVuZG9yc1wiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgZXZlbnRzIGluIHRoZSBgVWlgIGNhdGVnb3J5LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJVaVwiXSA9IDEwMjRdID0gXCJVaVwiO1xuICAvKipcbiAgICogSGVscGVyIHRvIHJlY2VpdmUgYWxsIG5vbi1oaWdoLXZvbHVtZSBldmVudHMuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIkFsbFwiXSA9IDIwNDddID0gXCJBbGxcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIHRoZSBgSW5wdXRWb2x1bWVNZXRlcnNgIGhpZ2gtdm9sdW1lIGV2ZW50LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJJbnB1dFZvbHVtZU1ldGVyc1wiXSA9IDY1NTM2XSA9IFwiSW5wdXRWb2x1bWVNZXRlcnNcIjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB2YWx1ZSB0byByZWNlaXZlIHRoZSBgSW5wdXRBY3RpdmVTdGF0ZUNoYW5nZWRgIGhpZ2gtdm9sdW1lIGV2ZW50LlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgRXZlbnRTdWJzY3JpcHRpb25bRXZlbnRTdWJzY3JpcHRpb25bXCJJbnB1dEFjdGl2ZVN0YXRlQ2hhbmdlZFwiXSA9IDEzMTA3Ml0gPSBcIklucHV0QWN0aXZlU3RhdGVDaGFuZ2VkXCI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdmFsdWUgdG8gcmVjZWl2ZSB0aGUgYElucHV0U2hvd1N0YXRlQ2hhbmdlZGAgaGlnaC12b2x1bWUgZXZlbnQuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBFdmVudFN1YnNjcmlwdGlvbltFdmVudFN1YnNjcmlwdGlvbltcIklucHV0U2hvd1N0YXRlQ2hhbmdlZFwiXSA9IDI2MjE0NF0gPSBcIklucHV0U2hvd1N0YXRlQ2hhbmdlZFwiO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHZhbHVlIHRvIHJlY2VpdmUgdGhlIGBTY2VuZUl0ZW1UcmFuc2Zvcm1DaGFuZ2VkYCBoaWdoLXZvbHVtZSBldmVudC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIEV2ZW50U3Vic2NyaXB0aW9uW0V2ZW50U3Vic2NyaXB0aW9uW1wiU2NlbmVJdGVtVHJhbnNmb3JtQ2hhbmdlZFwiXSA9IDUyNDI4OF0gPSBcIlNjZW5lSXRlbVRyYW5zZm9ybUNoYW5nZWRcIjtcbn0pKEV2ZW50U3Vic2NyaXB0aW9uIHx8IChFdmVudFN1YnNjcmlwdGlvbiA9IHt9KSk7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UsIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItbGl0ZXJhbC1lbnVtLW1lbWJlciAqL1xudmFyIFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGU7XG4oZnVuY3Rpb24gKFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGUpIHtcbiAgLyoqXG4gICAqIE5vdCBhIHJlcXVlc3QgYmF0Y2guXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlW1JlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGVbXCJOb25lXCJdID0gLTFdID0gXCJOb25lXCI7XG4gIC8qKlxuICAgKiBBIHJlcXVlc3QgYmF0Y2ggd2hpY2ggcHJvY2Vzc2VzIGFsbCByZXF1ZXN0cyBzZXJpYWxseSwgYXMgZmFzdCBhcyBwb3NzaWJsZS5cbiAgICpcbiAgICogTm90ZTogVG8gaW50cm9kdWNlIGFydGlmaWNpYWwgZGVsYXksIHVzZSB0aGUgYFNsZWVwYCByZXF1ZXN0IGFuZCB0aGUgYHNsZWVwTWlsbGlzYCByZXF1ZXN0IGZpZWxkLlxuICAgKlxuICAgKiBJbml0aWFsIE9CUyBWZXJzaW9uOiA1LjAuMFxuICAgKi9cbiAgUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZVtSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlW1wiU2VyaWFsUmVhbHRpbWVcIl0gPSAwXSA9IFwiU2VyaWFsUmVhbHRpbWVcIjtcbiAgLyoqXG4gICAqIEEgcmVxdWVzdCBiYXRjaCB0eXBlIHdoaWNoIHByb2Nlc3NlcyBhbGwgcmVxdWVzdHMgc2VyaWFsbHksIGluIHN5bmMgd2l0aCB0aGUgZ3JhcGhpY3MgdGhyZWFkLiBEZXNpZ25lZCB0byBwcm92aWRlIGhpZ2ggYWNjdXJhY3kgZm9yIGFuaW1hdGlvbnMuXG4gICAqXG4gICAqIE5vdGU6IFRvIGludHJvZHVjZSBhcnRpZmljaWFsIGRlbGF5LCB1c2UgdGhlIGBTbGVlcGAgcmVxdWVzdCBhbmQgdGhlIGBzbGVlcEZyYW1lc2AgcmVxdWVzdCBmaWVsZC5cbiAgICpcbiAgICogSW5pdGlhbCBPQlMgVmVyc2lvbjogNS4wLjBcbiAgICovXG4gIFJlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGVbUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZVtcIlNlcmlhbEZyYW1lXCJdID0gMV0gPSBcIlNlcmlhbEZyYW1lXCI7XG4gIC8qKlxuICAgKiBBIHJlcXVlc3QgYmF0Y2ggdHlwZSB3aGljaCBwcm9jZXNzZXMgYWxsIHJlcXVlc3RzIHVzaW5nIGFsbCBhdmFpbGFibGUgdGhyZWFkcyBpbiB0aGUgdGhyZWFkIHBvb2wuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgaXMgbWFpbmx5IGV4cGVyaW1lbnRhbCwgYW5kIG9ubHkgcmVhbGx5IHNob3dzIGl0cyBjb2xvcnMgZHVyaW5nIHJlcXVlc3RzIHdoaWNoIHJlcXVpcmUgbG90cyBvZlxuICAgKiBhY3RpdmUgcHJvY2Vzc2luZywgbGlrZSBgR2V0U291cmNlU2NyZWVuc2hvdGAuXG4gICAqXG4gICAqIEluaXRpYWwgT0JTIFZlcnNpb246IDUuMC4wXG4gICAqL1xuICBSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlW1JlcXVlc3RCYXRjaEV4ZWN1dGlvblR5cGVbXCJQYXJhbGxlbFwiXSA9IDJdID0gXCJQYXJhbGxlbFwiO1xufSkoUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZSB8fCAoUmVxdWVzdEJhdGNoRXhlY3V0aW9uVHlwZSA9IHt9KSk7XG5cbi8qKlxuICogU0hBMjU2IEhhc2hpbmcuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtzYWx0PScnXSBzYWx0LlxuICogQHBhcmFtICB7c3RyaW5nfSBbY2hhbGxlbmdlPScnXSBjaGFsbGVuZ2UuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1zZyBNZXNzYWdlIHRvIGVuY29kZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IHNoYTI1NiBlbmNvZGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYXV0aGVudGljYXRpb25IYXNoaW5nIChzYWx0LCBjaGFsbGVuZ2UsIG1zZykge1xuICBjb25zdCBoYXNoID0gQmFzZTY0LnN0cmluZ2lmeShzaGEyNTYobXNnICsgc2FsdCkpO1xuICByZXR1cm4gQmFzZTY0LnN0cmluZ2lmeShzaGEyNTYoaGFzaCArIGNoYWxsZW5nZSkpO1xufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJhdXRoZW50aWNhdGlvblwiLCBcInJwY1ZlcnNpb25cIl07XG5jb25zdCBkZWJ1ZyA9IGNyZWF0ZURlYnVnKCdvYnMtd2Vic29ja2V0LWpzJyk7XG5jbGFzcyBPQlNXZWJTb2NrZXRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoY29kZSwgbWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuY29kZSA9IHZvaWQgMDtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9XG59XG5jbGFzcyBCYXNlT0JTV2ViU29ja2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuX2lkZW50aWZpZWQgPSBmYWxzZTtcbiAgICB0aGlzLmludGVybmFsTGlzdGVuZXJzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMuc29ja2V0ID0gdm9pZCAwO1xuICB9XG4gIHN0YXRpYyBnZW5lcmF0ZU1lc3NhZ2VJZCgpIHtcbiAgICByZXR1cm4gU3RyaW5nKEJhc2VPQlNXZWJTb2NrZXQucmVxdWVzdENvdW50ZXIrKyk7XG4gIH1cbiAgZ2V0IGlkZW50aWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkZW50aWZpZWQ7XG4gIH1cbiAgLyoqXG4gICAqIENvbm5lY3QgdG8gYW4gb2JzLXdlYnNvY2tldCBzZXJ2ZXJcbiAgICogQHBhcmFtIHVybCBXZWJzb2NrZXQgc2VydmVyIHRvIGNvbm5lY3QgdG8gKGluY2x1ZGluZyB3czovLyBvciB3c3M6Ly8gcHJvdG9jb2wpXG4gICAqIEBwYXJhbSBwYXNzd29yZCBQYXNzd29yZFxuICAgKiBAcGFyYW0gaWRlbnRpZmljYXRpb25QYXJhbXMgRGF0YSBmb3IgSWRlbnRpZnkgZXZlbnRcbiAgICogQHJldHVybnMgSGVsbG8gJiBJZGVudGlmaWVkIG1lc3NhZ2VzIGRhdGEgKGNvbWJpbmVkKVxuICAgKi9cbiAgYXN5bmMgY29ubmVjdCh1cmwgPSAnd3M6Ly8xMjcuMC4wLjE6NDQ1NScsIHBhc3N3b3JkLCBpZGVudGlmaWNhdGlvblBhcmFtcyA9IHt9KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgIGF3YWl0IHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgY29ubmVjdGlvbkNsb3NlZFByb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKCdDb25uZWN0aW9uQ2xvc2VkJyk7XG4gICAgICBjb25zdCBjb25uZWN0aW9uRXJyb3JQcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZSgnQ29ubmVjdGlvbkVycm9yJyk7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yYWNlKFthc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGhlbGxvID0gYXdhaXQgX3RoaXMuY3JlYXRlQ29ubmVjdGlvbih1cmwpO1xuICAgICAgICBfdGhpcy5lbWl0KCdIZWxsbycsIGhlbGxvKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmlkZW50aWZ5KGhlbGxvLCBwYXNzd29yZCwgaWRlbnRpZmljYXRpb25QYXJhbXMpO1xuICAgICAgfSgpLFxuICAgICAgLy8gQ2hvb3NlIHRoZSBiZXN0IHByb21pc2UgZm9yIGNvbm5lY3Rpb24gZXJyb3IvY2xvc2VcbiAgICAgIC8vIEluIGJyb3dzZXIgY29ubmVjdGlvbiBjbG9zZSBoYXMgY2xvc2UgY29kZSArIHJlYXNvbixcbiAgICAgIC8vIHdoaWxlIGluIG5vZGUgZXJyb3IgZXZlbnQgaGFzIHRoZXNlXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZvaWQgY29ubmVjdGlvbkVycm9yUHJvbWlzZS50aGVuKGUgPT4ge1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2b2lkIGNvbm5lY3Rpb25DbG9zZWRQcm9taXNlLnRoZW4oZSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGF3YWl0IHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEaXNjb25uZWN0IGZyb20gb2JzLXdlYnNvY2tldCBzZXJ2ZXJcbiAgICovXG4gIGFzeW5jIGRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKCF0aGlzLnNvY2tldCB8fCB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXRJcG1sLkNMT1NFRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25uZWN0aW9uQ2xvc2VkUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoJ0Nvbm5lY3Rpb25DbG9zZWQnKTtcbiAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgIGF3YWl0IGNvbm5lY3Rpb25DbG9zZWRQcm9taXNlO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGUgc2Vzc2lvbiBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBkYXRhIFJlaWRlbnRpZnkgZGF0YVxuICAgKiBAcmV0dXJucyBJZGVudGlmaWVkIG1lc3NhZ2UgZGF0YVxuICAgKi9cbiAgYXN5bmMgcmVpZGVudGlmeShkYXRhKSB7XG4gICAgY29uc3QgaWRlbnRpZmllZFByb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKGBvcDoke1dlYlNvY2tldE9wQ29kZS5JZGVudGlmaWVkfWApO1xuICAgIGF3YWl0IHRoaXMubWVzc2FnZShXZWJTb2NrZXRPcENvZGUuUmVpZGVudGlmeSwgZGF0YSk7XG4gICAgcmV0dXJuIGlkZW50aWZpZWRQcm9taXNlO1xuICB9XG4gIC8qKlxuICAgKiBTZW5kIGEgcmVxdWVzdCB0byBvYnMtd2Vic29ja2V0XG4gICAqIEBwYXJhbSByZXF1ZXN0VHlwZSBSZXF1ZXN0IG5hbWVcbiAgICogQHBhcmFtIHJlcXVlc3REYXRhIFJlcXVlc3QgZGF0YVxuICAgKiBAcmV0dXJucyBSZXF1ZXN0IHJlc3BvbnNlXG4gICAqL1xuICBhc3luYyBjYWxsKHJlcXVlc3RUeXBlLCByZXF1ZXN0RGF0YSkge1xuICAgIGNvbnN0IHJlcXVlc3RJZCA9IEJhc2VPQlNXZWJTb2NrZXQuZ2VuZXJhdGVNZXNzYWdlSWQoKTtcbiAgICBjb25zdCByZXNwb25zZVByb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKGByZXM6JHtyZXF1ZXN0SWR9YCk7XG4gICAgYXdhaXQgdGhpcy5tZXNzYWdlKFdlYlNvY2tldE9wQ29kZS5SZXF1ZXN0LCB7XG4gICAgICByZXF1ZXN0SWQsXG4gICAgICByZXF1ZXN0VHlwZSxcbiAgICAgIHJlcXVlc3REYXRhXG4gICAgfSk7XG4gICAgY29uc3Qge1xuICAgICAgcmVxdWVzdFN0YXR1cyxcbiAgICAgIHJlc3BvbnNlRGF0YVxuICAgIH0gPSBhd2FpdCByZXNwb25zZVByb21pc2U7XG4gICAgaWYgKCFyZXF1ZXN0U3RhdHVzLnJlc3VsdCkge1xuICAgICAgdGhyb3cgbmV3IE9CU1dlYlNvY2tldEVycm9yKHJlcXVlc3RTdGF0dXMuY29kZSwgcmVxdWVzdFN0YXR1cy5jb21tZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfVxuICAvKipcbiAgICogU2VuZCBhIGJhdGNoIHJlcXVlc3QgdG8gb2JzLXdlYnNvY2tldFxuICAgKiBAcGFyYW0gcmVxdWVzdHMgQXJyYXkgb2YgUmVxdWVzdCBvYmplY3RzICh0eXBlIGFuZCBkYXRhKVxuICAgKiBAcGFyYW0gb3B0aW9ucyBBIHNldCBvZiBvcHRpb25zIGZvciBob3cgdGhlIGJhdGNoIHdpbGwgYmUgZXhlY3V0ZWRcbiAgICogQHBhcmFtIG9wdGlvbnMuZXhlY3V0aW9uVHlwZSBUaGUgbW9kZSBvZiBleGVjdXRpb24gb2JzLXdlYnNvY2tldCB3aWxsIHJ1biB0aGUgYmF0Y2ggaW5cbiAgICogQHBhcmFtIG9wdGlvbnMuaGFsdE9uRmFpbHVyZSBXaGV0aGVyIG9icy13ZWJzb2NrZXQgc2hvdWxkIHN0b3AgZXhlY3V0aW5nIHRoZSBiYXRjaCBpZiBvbmUgcmVxdWVzdCBmYWlsc1xuICAgKiBAcmV0dXJucyBSZXF1ZXN0QmF0Y2ggcmVzcG9uc2VcbiAgICovXG4gIGFzeW5jIGNhbGxCYXRjaChyZXF1ZXN0cywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdElkID0gQmFzZU9CU1dlYlNvY2tldC5nZW5lcmF0ZU1lc3NhZ2VJZCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlUHJvbWlzZSA9IHRoaXMuaW50ZXJuYWxFdmVudFByb21pc2UoYHJlczoke3JlcXVlc3RJZH1gKTtcbiAgICBhd2FpdCB0aGlzLm1lc3NhZ2UoV2ViU29ja2V0T3BDb2RlLlJlcXVlc3RCYXRjaCwgX2V4dGVuZHMoe1xuICAgICAgcmVxdWVzdElkLFxuICAgICAgcmVxdWVzdHNcbiAgICB9LCBvcHRpb25zKSk7XG4gICAgY29uc3Qge1xuICAgICAgcmVzdWx0c1xuICAgIH0gPSBhd2FpdCByZXNwb25zZVByb21pc2U7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbiAgLyoqXG4gICAqIENsZWFudXAgZnJvbSBzb2NrZXQgZGlzY29ubmVjdGlvblxuICAgKi9cbiAgY2xlYW51cCgpIHtcbiAgICBpZiAoIXRoaXMuc29ja2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IG51bGw7XG4gICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gbnVsbDtcbiAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gbnVsbDtcbiAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gbnVsbDtcbiAgICB0aGlzLnNvY2tldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pZGVudGlmaWVkID0gZmFsc2U7XG4gICAgLy8gQ2xlYW51cCBsZWZ0b3ZlcnNcbiAgICB0aGlzLmludGVybmFsTGlzdGVuZXJzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgY29ubmVjdGlvbiB0byBzcGVjaWZpZWQgb2JzLXdlYnNvY2tldCBzZXJ2ZXJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHVybCBXZWJzb2NrZXQgYWRkcmVzc1xuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciBoZWxsbyBkYXRhXG4gICAqL1xuICBhc3luYyBjcmVhdGVDb25uZWN0aW9uKHVybCkge1xuICAgIHZhciBfdGhpcyRzb2NrZXQ7XG4gICAgY29uc3QgY29ubmVjdGlvbk9wZW5lZFByb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKCdDb25uZWN0aW9uT3BlbmVkJyk7XG4gICAgY29uc3QgaGVsbG9Qcm9taXNlID0gdGhpcy5pbnRlcm5hbEV2ZW50UHJvbWlzZShgb3A6JHtXZWJTb2NrZXRPcENvZGUuSGVsbG99YCk7XG4gICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0SXBtbCh1cmwsIHRoaXMucHJvdG9jb2wpO1xuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gdGhpcy5vbkVycm9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIGF3YWl0IGNvbm5lY3Rpb25PcGVuZWRQcm9taXNlO1xuICAgIGNvbnN0IHByb3RvY29sID0gKF90aGlzJHNvY2tldCA9IHRoaXMuc29ja2V0KSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkc29ja2V0LnByb3RvY29sO1xuICAgIC8vIEJyb3dzZXJzIGRvbid0IGF1dG9jbG9zZSBvbiBtaXNzaW5nL3dyb25nIHByb3RvY29sXG4gICAgaWYgKCFwcm90b2NvbCkge1xuICAgICAgdGhyb3cgbmV3IE9CU1dlYlNvY2tldEVycm9yKC0xLCAnU2VydmVyIHNlbnQgbm8gc3VicHJvdG9jb2wnKTtcbiAgICB9XG4gICAgaWYgKHByb3RvY29sICE9PSB0aGlzLnByb3RvY29sKSB7XG4gICAgICB0aHJvdyBuZXcgT0JTV2ViU29ja2V0RXJyb3IoLTEsICdTZXJ2ZXIgc2VudCBhbiBpbnZhbGlkIHN1YnByb3RvY29sJyk7XG4gICAgfVxuICAgIHJldHVybiBoZWxsb1Byb21pc2U7XG4gIH1cbiAgLyoqXG4gICAqIFNlbmQgaWRlbnRpZnkgbWVzc2FnZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gaGVsbG8gSGVsbG8gbWVzc2FnZSBkYXRhXG4gICAqIEBwYXJhbSBwYXNzd29yZCBQYXNzd29yZFxuICAgKiBAcGFyYW0gaWRlbnRpZmljYXRpb25QYXJhbXMgSWRlbnRpZmljYXRpb24gcGFyYW1zXG4gICAqIEByZXR1cm5zIEhlbGxvICYgSWRlbnRpZmllZCBtZXNzYWdlcyBkYXRhIChjb21iaW5lZClcbiAgICovXG4gIGFzeW5jIGlkZW50aWZ5KF9yZWYsIHBhc3N3b3JkLCBpZGVudGlmaWNhdGlvblBhcmFtcyA9IHt9KSB7XG4gICAgbGV0IHtcbiAgICAgICAgYXV0aGVudGljYXRpb24sXG4gICAgICAgIHJwY1ZlcnNpb25cbiAgICAgIH0gPSBfcmVmLFxuICAgICAgaGVsbG9SZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkKTtcbiAgICAvLyBTZXQgcnBjVmVyc2lvbiBpZiB1bnNldFxuICAgIGNvbnN0IGRhdGEgPSBfZXh0ZW5kcyh7XG4gICAgICBycGNWZXJzaW9uXG4gICAgfSwgaWRlbnRpZmljYXRpb25QYXJhbXMpO1xuICAgIGlmIChhdXRoZW50aWNhdGlvbiAmJiBwYXNzd29yZCkge1xuICAgICAgZGF0YS5hdXRoZW50aWNhdGlvbiA9IGF1dGhlbnRpY2F0aW9uSGFzaGluZyhhdXRoZW50aWNhdGlvbi5zYWx0LCBhdXRoZW50aWNhdGlvbi5jaGFsbGVuZ2UsIHBhc3N3b3JkKTtcbiAgICB9XG4gICAgY29uc3QgaWRlbnRpZmllZFByb21pc2UgPSB0aGlzLmludGVybmFsRXZlbnRQcm9taXNlKGBvcDoke1dlYlNvY2tldE9wQ29kZS5JZGVudGlmaWVkfWApO1xuICAgIGF3YWl0IHRoaXMubWVzc2FnZShXZWJTb2NrZXRPcENvZGUuSWRlbnRpZnksIGRhdGEpO1xuICAgIGNvbnN0IGlkZW50aWZpZWQgPSBhd2FpdCBpZGVudGlmaWVkUHJvbWlzZTtcbiAgICB0aGlzLl9pZGVudGlmaWVkID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoJ0lkZW50aWZpZWQnLCBpZGVudGlmaWVkKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgcnBjVmVyc2lvblxuICAgIH0sIGhlbGxvUmVzdCwgaWRlbnRpZmllZCk7XG4gIH1cbiAgLyoqXG4gICAqIFNlbmQgbWVzc2FnZSB0byBvYnMtd2Vic29ja2V0XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBvcCBXZWJTb2NrZXRPcENvZGVcbiAgICogQHBhcmFtIGQgTWVzc2FnZSBkYXRhXG4gICAqL1xuICBhc3luYyBtZXNzYWdlKG9wLCBkKSB7XG4gICAgaWYgKCF0aGlzLnNvY2tldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgY29ubmVjdGVkJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5pZGVudGlmaWVkICYmIG9wICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvY2tldCBub3QgaWRlbnRpZmllZCcpO1xuICAgIH1cbiAgICBjb25zdCBlbmNvZGVkID0gYXdhaXQgdGhpcy5lbmNvZGVNZXNzYWdlKHtcbiAgICAgIG9wLFxuICAgICAgZFxuICAgIH0pO1xuICAgIHRoaXMuc29ja2V0LnNlbmQoZW5jb2RlZCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHByb21pc2UgdG8gbGlzdGVuIGZvciBhbiBldmVudCBvbiBpbnRlcm5hbCBsaXN0ZW5lclxuICAgKiAod2lsbCBiZSBjbGVhbmVkIHVwIG9uIGRpc2Nvbm5lY3QpXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBldmVudCBFdmVudCB0byBsaXN0ZW4gdG9cbiAgICogQHJldHVybnMgRXZlbnQgZGF0YVxuICAgKi9cbiAgYXN5bmMgaW50ZXJuYWxFdmVudFByb21pc2UoZXZlbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmludGVybmFsTGlzdGVuZXJzLm9uY2UoZXZlbnQsIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBXZWJzb2NrZXQgb3BlbiBldmVudCBsaXN0ZW5lclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gZSBFdmVudFxuICAgKi9cbiAgb25PcGVuKGUpIHtcbiAgICBkZWJ1Zygnc29ja2V0Lm9wZW4nKTtcbiAgICB0aGlzLmVtaXQoJ0Nvbm5lY3Rpb25PcGVuZWQnKTtcbiAgICB0aGlzLmludGVybmFsTGlzdGVuZXJzLmVtaXQoJ0Nvbm5lY3Rpb25PcGVuZWQnLCBlKTtcbiAgfVxuICAvKipcbiAgICogV2Vic29ja2V0IG1lc3NhZ2UgZXZlbnQgbGlzdGVuZXJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIGUgRXZlbnRcbiAgICovXG4gIGFzeW5jIG9uTWVzc2FnZShlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb3AsXG4gICAgICAgIGRcbiAgICAgIH0gPSBhd2FpdCB0aGlzLmRlY29kZU1lc3NhZ2UoZS5kYXRhKTtcbiAgICAgIGRlYnVnKCdzb2NrZXQubWVzc2FnZTogJWQgJWonLCBvcCwgZCk7XG4gICAgICBpZiAob3AgPT09IHVuZGVmaW5lZCB8fCBkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIFdlYlNvY2tldE9wQ29kZS5FdmVudDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgZXZlbnREYXRhXG4gICAgICAgICAgICB9ID0gZDtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVHlwZXNjcmlwdCBqdXN0IGRvZXNuJ3QgdW5kZXJzdGFuZCBpdFxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50VHlwZSwgZXZlbnREYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgV2ViU29ja2V0T3BDb2RlLlJlcXVlc3RSZXNwb25zZTpcbiAgICAgICAgY2FzZSBXZWJTb2NrZXRPcENvZGUuUmVxdWVzdEJhdGNoUmVzcG9uc2U6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICByZXF1ZXN0SWRcbiAgICAgICAgICAgIH0gPSBkO1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbExpc3RlbmVycy5lbWl0KGByZXM6JHtyZXF1ZXN0SWR9YCwgZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuaW50ZXJuYWxMaXN0ZW5lcnMuZW1pdChgb3A6JHtvcH1gLCBkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGVidWcoJ2Vycm9yIGhhbmRsaW5nIG1lc3NhZ2U6ICVvJywgZXJyb3IpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogV2Vic29ja2V0IGVycm9yIGV2ZW50IGxpc3RlbmVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBlIEVycm9yRXZlbnRcbiAgICovXG4gIG9uRXJyb3IoZSkge1xuICAgIGRlYnVnKCdzb2NrZXQuZXJyb3I6ICVvJywgZSk7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgT0JTV2ViU29ja2V0RXJyb3IoLTEsIGUubWVzc2FnZSk7XG4gICAgdGhpcy5lbWl0KCdDb25uZWN0aW9uRXJyb3InLCBlcnJvcik7XG4gICAgdGhpcy5pbnRlcm5hbExpc3RlbmVycy5lbWl0KCdDb25uZWN0aW9uRXJyb3InLCBlcnJvcik7XG4gIH1cbiAgLyoqXG4gICAqIFdlYnNvY2tldCBjbG9zZSBldmVudCBsaXN0ZW5lclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gZSBFdmVudFxuICAgKi9cbiAgb25DbG9zZShlKSB7XG4gICAgZGVidWcoJ3NvY2tldC5jbG9zZTogJXMgKCVkKScsIGUucmVhc29uLCBlLmNvZGUpO1xuICAgIGNvbnN0IGVycm9yID0gbmV3IE9CU1dlYlNvY2tldEVycm9yKGUuY29kZSwgZS5yZWFzb24pO1xuICAgIHRoaXMuZW1pdCgnQ29ubmVjdGlvbkNsb3NlZCcsIGVycm9yKTtcbiAgICB0aGlzLmludGVybmFsTGlzdGVuZXJzLmVtaXQoJ0Nvbm5lY3Rpb25DbG9zZWQnLCBlcnJvcik7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cbn1cbkJhc2VPQlNXZWJTb2NrZXQucmVxdWVzdENvdW50ZXIgPSAxO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taWNyb2J1bmRsZS9pc3N1ZXMvNTMxI2lzc3VlY29tbWVudC01NzU0NzMwMjRcbi8vIE5vdCB1c2luZyBFU00gZXhwb3J0IGR1ZSB0byBpdCBhbHNvIGJlaW5nIGRldGVjdGVkIGFuZCBicmVha2luZyByb2xsdXAgYmFzZWQgYnVuZGxlcnMgKHZpdGUpXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbn1cblxuY2xhc3MgT0JTV2ViU29ja2V0IGV4dGVuZHMgQmFzZU9CU1dlYlNvY2tldCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLnByb3RvY29sID0gJ29ic3dlYnNvY2tldC5qc29uJztcbiAgfVxuICBhc3luYyBlbmNvZGVNZXNzYWdlKGRhdGEpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cbiAgYXN5bmMgZGVjb2RlTWVzc2FnZShkYXRhKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRXZlbnRTdWJzY3JpcHRpb24sIE9CU1dlYlNvY2tldEVycm9yLCBSZXF1ZXN0QmF0Y2hFeGVjdXRpb25UeXBlLCBXZWJTb2NrZXRPcENvZGUsIE9CU1dlYlNvY2tldCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc29uLm1vZGVybi5qcy5tYXBcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9pbmRleC5qcydcblxuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH1cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9