export function replaceThousands(x: string, replace = ",") {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, replace);
}
