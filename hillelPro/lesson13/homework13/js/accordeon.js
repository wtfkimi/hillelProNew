

class Accordeon {
    // Accordeon working with only three items.
    #packages = ["essential active", "standard", "pro"];
    static packageToItem = {
        essential: "item0",
        standard: "item1",
        pro: "item2"
    }
    static ITEMS = ["item0 activeItem item rotate", "item1 item", "item2 item"];
    constructor(el, items) {
        this.el = el;
        this.items = items
        const itemChildren = [...items.children];
        const children = [...el.children];
        children.forEach((el, index )=> {
            el.classList += this.#packages[index];
        })
        itemChildren.forEach((el, index ) => {
            el.classList.remove("none")
            el.classList += Accordeon.ITEMS[index];
        })
        this.el.addEventListener('click', e => {
            Accordeon.setActiveClassAndRenderItem(e, children, itemChildren);
        })
    }

    static setActiveClassAndRenderItem (e, child, itemChild) {
        child.forEach((chil) => {
            if (chil.classList.contains("active") && !e.target.classList.contains("accordeon")){
                // ACTIVE ACCORDEON
                chil.classList.remove("active");
                e.target.classList.add("active");
            }
        })
        // ACTIVE ITEM
        if (!e.target.classList.contains("accordeon")) {
            const item = Accordeon.packageToItem[e.target.classList[0]];
            const itemRendered = itemChild.filter(it => it.classList[0] === item);
            const itemRemoveActive = itemChild.filter(it => it.classList.contains("activeItem") || it.classList.contains("rotate"));
            if (itemRemoveActive.length > 0) {
                itemRemoveActive[0].classList.remove("activeItem");
                itemRemoveActive[0].classList.remove("rotate");
            }
            itemRendered[0].classList.add("activeItem");
            setTimeout(() => {
                itemRendered[0].classList.add("rotate")
            }, 100)
        }
    }
}