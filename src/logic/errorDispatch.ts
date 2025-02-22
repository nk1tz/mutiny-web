// IMPORTANT: this should match 1:1 with the MutinyJsError enum in mutiny-wasm
// If we can handle all of these, we can handle all the errors that Mutiny can throw

// WARNING: autogenerated code, generated by calling:
// `node scripts/errorsToTs.cjs /path/to/mutiny-wasm/src/error.rs`
type MutinyError =
    | "Mutiny is already running."
    | "Mutiny is not running."
    | "Incorrect expected network."
    | "Resource Not found."
    | "Funding transaction could not be created."
    | "Network connection closed."
    | "The invoice or address is on a different network."
    | "An invoice must not get payed twice."
    | "Payment timed out."
    | "The given invoice is invalid."
    | "Failed to create invoice."
    | "Channel reserve amount is too high."
    | "We do not have enough balance to pay the given amount."
    | "Failed to call on the given LNURL."
    | "Failed to make a request to the LSP."
    | "Failed to request channel from LSP due to funding error."
    | "Failed to request channel from LSP due to amount being too high."
    | "Failed to have a connection to the LSP node."
    | "Subscription Client Not Configured"
    | "Invalid Parameter"
    | "Called incorrect lnurl function."
    | "Failed to find route."
    | "Failed to parse the given peer information."
    | "Failed to create channel."
    | "Failed to close channel."
    | "Failed to persist data."
    | "Failed to read data from storage."
    | "Failed to decode lightning data."
    | "Failed to generate seed"
    | "Invalid mnemonic"
    | "Failed to conduct wallet operation."
    | "Failed to sign given transaction."
    | "Failed to conduct chain access operation."
    | "Failed to to sync on-chain wallet."
    | "Failed to execute a rapid gossip sync function"
    | "Failed to read or write json from the front end"
    | "The given node pubkey is invalid."
    | "Failed to get nostr data."
    | "Failed to get the bitcoin price."
    | "Satoshi amount is invalid"
    | "Failed to execute a dlc function"
    | "Failed to execute a wasm_bindgen function"
    | "Invalid Arguments were given"
    | "Incorrect password entered."
    | "Cannot change password to the same password."
    | "Unknown Error";

export function matchError(e: unknown): Error {
    let errorString;

    if (e instanceof Error) {
        errorString = e.message;
    } else if (typeof e === "string") {
        errorString = e;
    } else {
        errorString = "Unknown error";
    }

    switch (errorString as MutinyError) {
        case "Failed to make a request to the LSP.":
        case "Failed to request channel from LSP due to funding error.":
        case "Failed to have a connection to the LSP node.":
            return new Error("LSP error, only on-chain is available for now.");
    }

    return new Error(errorString);
}
