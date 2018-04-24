//// [intersectionWithUnionConstraint.ts]
function f1<T extends string | number, U extends string | number>(x: T & U) {
    // Combined constraint of 'T & U' is 'string | number'
    let y: string | number = x;
}

function f2<T extends string | number | undefined, U extends string | null | undefined>(x: T & U) {
    let y1: string | number = x;     // Error
    let y2: string | null = x;       // Error
    let y3: string | undefined = x;
    let y4: number | null = x;       // Error
    let y5: number | undefined = x;  // Error
    let y6: null | undefined = x;    // Error
}

type T1 = (string | number | undefined) & (string | null | undefined);  // string | undefined

// Repro from #23648

type Example<T, U> = { [K in keyof T]: K extends keyof U ? UnexpectedError<K> : NoErrorHere<K> }

type UnexpectedError<T extends PropertyKey> = T
type NoErrorHere<T extends PropertyKey> = T


//// [intersectionWithUnionConstraint.js]
"use strict";
function f1(x) {
    // Combined constraint of 'T & U' is 'string | number'
    var y = x;
}
function f2(x) {
    var y1 = x; // Error
    var y2 = x; // Error
    var y3 = x;
    var y4 = x; // Error
    var y5 = x; // Error
    var y6 = x; // Error
}
