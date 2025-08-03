export default function (props){
    const {variant,backgroundColor,color,width,height,className,borderColor,onClick,boxShadow}=props;
    let style="default"
    if(variant&&variant.length>0){
        style=variant;
    }
    return <button style={{
                            backgroundColor,
                            color,
                            width,
                            height,
                            borderColor,
                            boxShadow
                          }} 
                          onClick={onClick}
                          className={style+" "+className+" "}>{props.children}</button>
}