export async function wait(ms: number) { //Only for development
    return await new Promise(resolve => setTimeout(resolve, ms));
}