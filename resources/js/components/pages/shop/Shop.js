import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, useRef,
      AddPotionForm, AddOutfitForm, AddCardForm, ReactTooltip,axios, ShopTabs } from "../../../index";
import Swal from 'sweetalert2';
import WeaponFilter from "./WeaponFilter";
import OutfitFilter from "./OutfitFilter";

function Shop({setGems,gems}){

    const [tab, setTab] = useState('all');

    const [avatarClass, setAvatarClass] = useState('');
    const charClass = useRef();
    const bgColor = useRef();
    const sex = useRef();
    const isFemale = useRef();
    const skinTone = useRef();

    const avatarCanvasRef = useRef();
    const avatarCtx = useRef();
    const [CANVAS_WIDTH, setCanvasWidth] = useState(120);
    const [CANVAS_HEIGHT, setCanvasHeight] = useState(120);
    const avatarImage = useRef();

    const baseDir = 'assets/images/spritesheets/';
    const spriteWidth = 64;         // 832px / 13 cols
    const spriteHeight = 64;        // 1344px / 21 rows
    const frameY = useRef(10);      // walking anim starts at the 11th row
    const frameX = useRef(0);       // starts at top left of frameY
    const cycles = useRef(8);       // walking anim has 9 cycles

    const [items, setItems] = useState();

    const selections = useRef([]);
    const actual_selections = useRef([]);


    useEffect(()=>{
        document.querySelector('.party-nav-item.party-active-nav').classList.remove('party-active-nav');
        document.getElementById(tab).classList.add('party-active-nav');
    }, [tab])

    useEffect(() => {

        axios.get(`api/get_user_info`).then(res => {
            var data = res.data;
            setAvatarClass(data.class);
            setItems(data.items);

            charClass.current = data.class;
            bgColor.current = data.background_color;
            isFemale.current = data.sex;
            skinTone.current = data.skin_tone;
            selections.current = data.items;
            actual_selections.current = data.items;

            var chClass = charClass.current;
            if(chClass === "warrior"){
                frameY.current = 14;
                cycles.current = 5;
            }else if(chClass === "mage"){
                frameY.current = 2;
                cycles.current = 6;
            }else if(chClass === "marksman"){
                frameY.current = 18;
                cycles.current = 10;
            }

            var canvas = avatarCanvasRef.current;
            avatarCtx.current = canvas.getContext('2d');
            canvas.width = canvas.height = 120;

            avatarImage.current = new Image();
            avatarImage.current.src = isFemale.current ? baseDir + 'body/female/human/' + skinTone.current + '.png' : baseDir + 'body/male/human/' + skinTone.current + '.png';

            animate()
        });
     }, []);

     const animate = () => {
        avatarCtx.current.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        avatarCtx.current.fillStyle = bgColor.current;
        avatarCtx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        //try to implement slash oversize by doubling second argument of drawImage if slash oversize -> also adjust selectionImg frames
        avatarCtx.current.drawImage(avatarImage.current, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        selections.current.sort( (a, b) => (a.zPos > b.zPos) ? 1: -1 );
        if(charClass.current == "warrior"){
            selections.current.forEach(selection => {
                    if(selection.base_src.indexOf("thrust") != -1){
                        frameY.current = 6;
                        cycles.current = 7;
                    }else if(selection.base_src.indexOf("slash/") != -1){
                        frameY.current = 14;
                        cycles.current = 5;
                    }else if(selection.base_src.indexOf("slash_oversize") != -1){
                        frameY.current = 10;
                        cycles.current = 8;
                    }else if(selection.base_src.indexOf("bow") != -1){
                        frameY.current = 18;
                        cycles.current = 10;
                    }else{
                        frameY.current = 14;
                        cycles.current = 8;
                    }
            })
        }else if(charClass.current == "mage"){
            selections.current.forEach(selection => {
                if(selection.img_name != "simple_staff.png") {
                    if(selection.base_src.indexOf("thrust") != -1){
                        frameY.current = 6;
                        cycles.current = 7;
                    }else if(selection.base_src.indexOf("slash/") != -1){
                        frameY.current = 14;
                        cycles.current = 5;
                    }else if(selection.base_src.indexOf("slash_oversize") != -1){
                        frameY.current = 10;
                        cycles.current = 8;
                    }else if(selection.base_src.indexOf("bow") != -1){
                        frameY.current = 18;
                        cycles.current = 10;
                    }else{
                        frameY.current = 14;
                        cycles.current = 8;
                    }
                }else{
                    frameY.current = 2;
                    cycles.current = 6;
                }
            })
        }

        selections.current.forEach(selection => {
            var selectionImg = new Image();
            if ( selection.sex === "unisex"){
                sex.current = isFemale.current ? "female" : "male";
            }else{
                sex.current = selection.sex;
            }
            if (sex.current === "none"){
                selectionImg.src = selection.base_src + selection.img_name;
            }else{
                if(selection.base_src.indexOf("slash_oversize/") != -1){
                    selectionImg.src = selection.base_src + sex.current + "/universal/" + selection.img_name;
                }else{
                    selectionImg.src = selection.base_src + sex.current + "/" + selection.img_name;
                }
            }
            avatarCtx.current.drawImage(selectionImg, frameX.current * spriteWidth, frameY.current * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        });
        if (frameX.current < cycles.current) frameX.current += 1;
        else frameX.current = 0 ;
        setTimeout(animate, 1000 / 8);
     }

    const updatePreview = (item) => {
        console.log("IN SHOP")
        console.log(item)
        if(item.item_type == "weapon"){
            selections.current = selections.current.filter(selection => selection.base_src.indexOf("weapon") == -1);
        }else{
            selections.current = selections.current.filter(selection =>  selection.hasOwnProperty('body_part') == false || selection.body_part.indexOf(item.body_part) == -1);
        }
        selections.current.push(item)
        console.log("SELECTIONS")
        console.log(selections.current)
    }

    const resetAvatarPreview = () => {
        selections.current = actual_selections.current;
    }

    return(
        <section className="container shop-wrapper">

            <div className="shop-left">
                <div className="party-nav">
                    <div onClick={() => setTab('all')}  id='all' className="party-nav-item party-active-nav" ><Link to="">All</Link></div>
                    <div onClick={() => setTab('potions')} id='potions' className="party-nav-item" ><Link to="">Potions</Link></div>
                    <div onClick={() => setTab('weapons')} id='weapons'  className="party-nav-item" ><Link to="">Weapons</Link></div>
                    <div onClick={() => setTab('outfit')} id='outfit' className="party-nav-item" ><Link to="">Outfit</Link></div>
                </div>

                <ShopTabs tab={tab} setGems={setGems} gems={gems} updatePreview={updatePreview}></ShopTabs>
            </div>

            <section id="shop-avatar-preview shop-right">
                {/* <div id='char-cust-header'>
                    <div className="text-center"></div>
                </div> */}
                <div id="shop-preview-animations-box">
                    <center>
                        <canvas ref={avatarCanvasRef} id="previewAnimations"></canvas>
                        <button onClick={resetAvatarPreview} className="btn-custom-primary reset-shop-preview-btn">Reset</button>
                    </center>
                </div>
            </section>



        </section>

    );
}

export default Shop;
