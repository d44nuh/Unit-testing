import { describe, it, expect} from "vitest"
import {hashPassword, comparePassword} from "../../../src/utils/password.util.ts";

describe("password test", () =>{
    const password1 = "micontrasena123";
    const password2 = "otracontrasena456";
    let hash1: string;
    let hash2: string;
    it("this must generate a hash that is not empty and different from the original password", async() => {
        hash1 = await hashPassword(password1);
        hash2 = await hashPassword(password2);

        expect(hash1).toBeTypeOf("string");
        expect(hash2).toBeTypeOf("string");

        expect(hash1.length).toBeGreaterThan(0);
        expect(hash2.length).toBeGreaterThan(0);

        expect(hash1).not.toBe(password1);
        expect(hash2).not.toBe(password2);
    });

    it("should be matching password and hash", async()=>{
        expect(await comparePassword(password1,hash1)).toBe(true);
        expect(await comparePassword(password2, hash2)).toBe(true);
    });

    it("should NOT be matching password and hash", async()=>{
        expect(await comparePassword(password1,hash2)).toBe(false);
        expect(await comparePassword(password2, hash1)).toBe(false);
    });

});