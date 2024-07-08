import itemCard from "../item-card/item-card"

export default function (data: any[]) {
  return `
            <ul clas="list">

                ${data.map((el: any) => itemCard(el)).join("")}
            
            <ul>
            
        
        `
}
