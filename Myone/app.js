//array of objects
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Steak",
    category: "dinner",
    price: 48.99,
    img: "./images/item-10.jpeg",
    desc: `steak fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const sectionCenter=document.querySelector(".section-center");
const btnContainer=document.querySelector(".btn-container");
// whenever we refresh the menu what content needs to be shown can be manipulated by domcontenloaded paramter


window.addEventListener("DOMContentLoaded",function()
{
  displayMenuItems(menu);
  displayMenuBtns();

  const filterBtns=btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function(btn)
{
  //console.log(btn.classList);
  btn.addEventListener('click',function(e)
  {
    // console.log(e.currentTarget.dataset.id);
     const category=e.currentTarget.dataset.id;
     const menuCategory=menu.filter(function(menuItem)
     {
       //  console.log( menuItem.category);
       if(menuItem.category===category)
       {
        return menuItem;
      }
    })
    //  console.log(menuCategory);
    if(category==="All")
    {
      displayMenuItems(menu);
    }
    else{
      displayMenuItems(menuCategory);
    }
  })
})
})
  
function displayMenuItems(menuItems)
{
  // map function used to manipulate the array items
  let displayMenu=menuItems.map(function(item)
  {
    //We used a special template string"keyboard top rightmost symbol"
    //to the items to be dynamically added without interferring Html directly using javascript
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  //to remove the comma in between the items
  displayMenu=displayMenu.join("");
    // console.log(displayMenu)
    // it replaces with displayMenu in the html inside the sectioncenter class
    sectionCenter.innerHTML=displayMenu;
}
function displayMenuBtns()
{
//  The below code will get all the categories with duplicates
  //  but we want only the unique categories
  
  //  const categories=menu.map(function(item)
  //  {
    //    return `<button class="filter-btn" data-id=${item.category}>
    //    ${item.category} </button>`
    //   //  return item.category;
    //  })
    // //  console.log(categories);
    // const btnCategory=categories.join("");
    // btnContainer.innerHTML=btnCategory;
    const categories=menu.reduce(function(values,item){
      //this below statement determines whether the category exists or not...
      if(!values.includes(item.category))
      {
        //if not exist it adds the category
        values.push(item.category);
      } 
      //if already exists it returns the values
      return values;
    },["All"]);
    let displayBtns=categories.map(function(item)
    {
      return `<button class="filter-btn" data-id=${item}>
      ${item} </button>`;
    });
    const btnCategory=displayBtns.join("");
    btnContainer.innerHTML=btnCategory;
    //Basically the above function returns array containing all categories 
    //console.log(categories);
  

}
