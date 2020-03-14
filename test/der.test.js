"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var der_1 = require("../src/crypto/der");
var hex_1 = require("../src/encoding/hex");
var chai_1 = require("chai");
require("mocha");
describe("der.decode()", function () {
    it("decodes an Ed25519 private key as expected", function () {
        // taken from Keys.test.js
        var privateKey = "302e020100300506032b657004220420db484b828e64b2d8f12ce3c0a0e93a0b8cce7af1bb8f39c97732394482538e10";
        var rawPrivKey = "db484b828e64b2d8f12ce3c0a0e93a0b8cce7af1bb8f39c97732394482538e10";
        var privKeyBytes = hex_1.decode(privateKey);
        var rawPrivKeyBytes = hex_1.decode(rawPrivKey);
        var decoded = der_1.decodeDer(privKeyBytes);
        chai_1.expect(decoded).to.deep.equal({
            seq: [
                { int: 0 },
                { seq: [{ ident: "1.3.101.112" }] },
                // in PKCS `PrivateKeyInfo` the key data is an opaque byte string
                // for Ed25519 the contents is another tagged DER `OCTET STRING`, kind of redundant
                // but for other key types this could be a complex structure
                { bytes: Uint8Array.of.apply(Uint8Array, __spreadArrays([4, 32], rawPrivKeyBytes)) }
            ]
        });
    });
    it("decodes an EncryptedPrivateKeyInfo struct", function () {
        var base64Encoded = "MIGbMFcGCSqGSIb3DQEFDTBKMCkGCSqGSIb3DQEFDDAcBAi8WY7Gy2tThQICCAAw" +
            "DAYIKoZIhvcNAgkFADAdBglghkgBZQMEAQIEEOq46NPss58chbjUn20NoK0EQG1x" +
            "R88hIXcWDOECttPTNlMXWJt7Wufm1YwBibrxmCq1QykIyTYhy1TZMyxyPxlYW6aV" +
            "9hlo4YEh3uEaCmfJzWM=";
        // otherwise the types produced by `.subarray()` won't match
        var data = Uint8Array.from(Buffer.from(base64Encoded, "base64"));
        var decoded = der_1.decodeDer(data);
        chai_1.expect(decoded).to.deep.equal({
            seq: [
                {
                    seq: [
                        // algorithm: PBES2
                        { ident: "1.2.840.113549.1.5.13" },
                        // parameters
                        {
                            seq: [
                                {
                                    seq: [
                                        // PBKDF2
                                        { ident: "1.2.840.113549.1.5.12" },
                                        {
                                            seq: [
                                                // salt
                                                { bytes: hex_1.decode("bc598ec6cb6b5385") },
                                                // iterations
                                                { int: 2048 },
                                                {
                                                    seq: [
                                                        // HMAC-SHA-256
                                                        { ident: "1.2.840.113549.2.9" },
                                                        // no parameters
                                                        {}
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    seq: [
                                        // AES-128-CBC
                                        { ident: "2.16.840.1.101.3.4.1.2" },
                                        // IV
                                        { bytes: hex_1.decode("eab8e8d3ecb39f1c85b8d49f6d0da0ad") }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                // encrypted key data
                {
                    bytes: hex_1.decode("6d7147cf212177160ce102b6d3d3365317589b7b5ae7e6d58c0189baf1982ab5" +
                        "432908c93621cb54d9332c723f19585ba695f61968e18121dee11a0a67c9cd63")
                }
            ]
        });
    });
});
