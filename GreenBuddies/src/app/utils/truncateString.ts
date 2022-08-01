export function truncateString(string : string | null, size : number) {
    if(string) {
        if (string.length >= size) {
            return `${string.substring(0,size)} ...`
        } else {
            return string; 
        }
    } else {
        return "";
    }
}