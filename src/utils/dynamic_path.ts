export default function dynamicPath(path: string) {
    if(!path) throw new Error("Please provide a path!");
    return `cheatsheets/${path.split(" ")[0].toLowerCase()}`;
}