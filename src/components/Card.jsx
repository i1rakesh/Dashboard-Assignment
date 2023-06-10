function Card(props){
const name = props.name;
const incRate = props.incRate;
const percent = props.percentage;
const img = props.img;
const incRateImg = props.incRateImg;
const icon = props.icon;
    return(
<div class="w-[100vw] md:w-1/2 px-2">
                <div class="bg-[#EDEDF6] p-6 rounded-2xl hover:text-white hover:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500 to-90%">
                  <div className="flex justify-between mb-10">
                    <img src={img} alt="" />
                    <div className="flex">
                      <img className="w-fit h-fit self-center" src={incRateImg} alt="" />
                      <h5>{incRate}</h5>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-[24px] font-bold">{percent}</h1>
                      <h4>{name}</h4>
                    </div>
                    <img src={icon} alt="" className="h-fit w-fit" />
                  </div>
                </div>
              </div>

)
}
export default Card