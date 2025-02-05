
import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState,
      AddPotionForm, AddOutfitForm, ReactTooltip,axios } from "../../../index";
import Swal from 'sweetalert2';
import OutfitFilter from "./OutfitFilter";

function Outfit({setGems,gems, updatePreview}){
    var hpTotal = 50;
    var xpTotal = 50;
    const [hp, setHp] = useState(50);
    const [xp, setXp] = useState(0);
    const [hpBarWidth, sethpBarWidth] = useState("100");
    const [hpHitWidth, sethpHitWidth] = useState("0");
    const [HpIncreaseWidth, setHPIncreaseWidth] = useState("0");

    const[charClass,setCharClass]=useState("All");
    const[rarity, setRarity]=useState("All");
    const[bodyPart, setBodyPart]=useState("All");
    const[avatarClass, setAvatarClass]=useState("");
//     var avatarClass= "Warrior";


  const[display2,setDisplay2]=useState({
        armors:[],
  });
  const rarityHandler=(e)=>{
      setRarity(e.target.value);


  }
  const classHandler=(e)=>{
        setCharClass(e.target.value);

  }
  const bodyPartHandler=(e)=>{
        setBodyPart(e.target.value);

  }

  useEffect(() =>{
     axios.get(`/api/outfit`).then(res =>{
           if(res.data.status===200){
            //      console.log(res.data)
                 setDisplay2({
                       armors:res.data.armor

                 })
                 if(res.data.avatar[0].name === "warrior"){
                       setAvatarClass("Warrior");
                 }else if(res.data.avatar[0].name === "marksman"){
                       setAvatarClass("Marksman");
                 }else{
                       setAvatarClass("Mage")
                 }
           }

     })
  },[])
  useEffect(()=>{
      // console.log(avatarClass);
      // console.log(display2.armors[0]);
      // console.log(Object.keys(display2.armors).length);
  },[display2])



  const buttonHandler=(e)=>{
     Swal.fire("You have successfully bought the item");
  }

    return(

              <div className="shop-filtShop">
                  <div className="shop-filter">
                                    <p>Class</p>
                                    <select name="class" className="form-select" onChange={classHandler}>
                                          <option value="All">All</option>
                                          <option value="Warrior">Warrior</option>
                                          <option value="Marksman">Marksman</option>
                                          <option value="Mage">Mage</option>
                                    </select><br></br>
                                    <p>Rarity</p>
                                    <select name="class" className="form-select" onChange={rarityHandler}>
                                          <option value="All">All</option>
                                          <option value="Common">Common</option>
                                          <option value="Uncommon">Uncommon</option>
                                          <option value="Rare">Rare</option>
                                    </select><br></br>
                                    <p>Body Part</p>
                                    <select name="class" className="form-select" onChange={bodyPartHandler}>
                                          <option value="All">All</option>
                                          <option value="Head">Head</option>
                                          <option value="Arms">Arms</option>
                                          <option value="Torso">Torso</option>
                                          <option value="Legs">Legs</option>
                                          <option value="Footwear">Feet</option>ePreview
                                    </select><br></br>
                  </div>

                  <div className="shop-shop">
                         <div className="shop-category">
                               {(charClass==="All" && rarity==="All" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                     <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="All")?
                              <div className="shop-categoryName">
                                     <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && 1==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {(charClass==="All" && rarity==="All" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                     <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                              {(charClass==="Warrior" && rarity==="All" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                     <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {(charClass==="Marksman" && rarity==="All" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                     <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                {(charClass==="Mage" && rarity==="All" && bodyPart==="All")?
                              <div className="shop-categoryName">
                                     <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="All" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                     <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                     <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Warrior-All-Uncommon-All */}
                                {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-All-Uncommon-All */}
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-All-Uncommon-All */}
                               {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                               {/* Warrior-All-Rare-All */}
                               {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-All-Rare-All */}
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-All-Rare-All */}
                               {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Warrior-Warrior-Common-All */}
                               {(charClass==="Warrior" && rarity==="Common" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-Marksman-Common-All */}
                              {(charClass==="Marksman" && rarity==="Common" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-Mage-Common-All */}
                               {(charClass==="Mage" && rarity==="Common" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Common" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                  {/* Warrior-Warrior-Uncommon-All */}
                                  {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-Marksman-Uncommon-All */}
                              {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-Mage-Uncommon-All */}
                               {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Warrior-Warrior-Rare-All */}
                              {/* {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Footwear</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              } */}
                              {/* Marksman-Marksman-Rare-All */}
                              {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-Mage-Rare-All */}
                               {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                {/* Warrior-Warrior-All-Head (down to footwear)*/}
                                {(charClass==="Warrior" && rarity==="All" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="All" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="All" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="All" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" ){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="All" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" ){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="All" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-Marksman-Rare-All */}
                              {(charClass==="Marksman" && rarity==="All" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="Marksman" && bodyPart==="Head" && rarity==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" ){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="All" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="All" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="All" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="All" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-Mage-Rare-All */}
                               {(charClass==="Mage" && rarity==="All" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="All" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="All" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="All" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="All" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="All" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                    {/* Warrior-All-All-Head */}
                                    {(charClass==="All" && rarity==="All" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>

                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-All-All-Head */}
                              {(charClass==="All" && rarity==="All" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Head"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Torso")?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Torso"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Legs"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Footwear"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-All-All-head  down to footwear */}
                               {(charClass==="All" && rarity==="All" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Head" ){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Arms"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Torso" ){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Legs" ){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="All" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="All" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Footwear" ){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Warrior-All-Common-Head */}
                               {(charClass==="All" && rarity==="Common" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>

                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-All-Common-Head down to footwear*/}
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Torso")?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-All-Common-head  down to footwear */}
                               {(charClass==="All" && rarity==="Common" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Head" && w.rarity_type==="Common"){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Common" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Common" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                   {/* Warrior-All-Uncommon-Head */}
                                   {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>

                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-All-Uncommon-Head down to footwear*/}
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Torso")?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-All-Uncommon-head  down to footwear */}
                               {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Uncommon" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {/* Warrior-All-Rare-Head */}
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>

                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Warrior" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-All-Rare-Head down to footwear*/}
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Torso")?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Marksman" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* Mage-All-Rare-head  down to footwear */}
                               {(charClass==="All" && rarity==="Rare" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Arms" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Arms" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Torso" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Legs" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="All" && rarity==="Rare" && bodyPart==="Footwear" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                                 {(charClass==="All" && rarity==="Rare" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class==="Mage" && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                              {/* Warrior-Warrior-Rare-All */}
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                               {/* Mage-Mage-Rare-All */}
                               {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Warrior-Warrior-Common-Head */}
                              {(charClass==="Warrior" && rarity==="Common" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Common" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Common" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Warrior" && rarity==="Common" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                                 {(charClass==="Warrior" && rarity==="Common" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* Marksman-Marksman-Common-Head */}
                              {(charClass==="Marksman" && rarity==="Common" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Marksman</h5>
                              </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="Common" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                              {(charClass==="Marksman" && rarity==="Common" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Common" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Common" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Common" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {/* marksman-uncommon-head */}
                        {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                              {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Uncommon" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                  {/* marksman-uncommon-head */}
                        {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                              {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Marksman" && rarity==="Rare" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                {/* Warrior-Warrior-Uncommon-Head */}
                                {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Warrior</h5>
                              </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Uncommon" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Warrior" && rarity==="Rare" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                                 {(charClass==="Warrior" && rarity==="Common" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }




                               {/* Mage-Mage-Rare-All */}
                               {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Head" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Arms"&& w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Torso" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Legs" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="All" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart==="Footwear" && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }

                              {/* mage-common-head */}
                              {(charClass==="Mage" && rarity==="Common" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Common" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Common" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Common" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Common" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Common" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                               {/* mage-uncommon-head */}
                               {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Uncommon" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {/* mage-rare-head */}
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="Head" )?
                              <div className="shop-categoryName">
                                    <h5>Mage</h5>
                              </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Rare" && bodyPart==="Head" )?<div>
                              <div className="shop-categoryName">
                                    <p>Head</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                              {(charClass==="Mage" && rarity==="Rare" && bodyPart==="Arms" )?<div>
                              <div className="shop-categoryName">
                                    <p>Arms</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="Torso" )?<div>
                              <div className="shop-categoryName">
                                    <p>Torso</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="Legs" )?<div>
                              <div className="shop-categoryName">
                                    <p>Legs</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }
                                 {(charClass==="Mage" && rarity==="Rare" && bodyPart==="Footwear" )?<div>
                              <div className="shop-categoryName">
                                    <p>Feet</p>
                              </div>
                              {display2.armors.map((w,index)=>{
                                          if(w.class===charClass && w.bodyPart===bodyPart && w.rarity_type===rarity){
                                                return (
                                                <div key={index} className="shop-outfitFilter">
                                                <OutfitFilter data= {w} value={w.product_id} avatarClass={avatarClass} setGems={setGems} gems={gems} updatePreview ={updatePreview}/>
                                                </div>
                                          )
                                    }
                                    })}
                                    </div>:""
                              }


                         </div>
                   </div>
            </div>
    );
}

export default Outfit;
