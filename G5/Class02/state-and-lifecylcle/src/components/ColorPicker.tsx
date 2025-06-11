interface ColorPickerProps {
    handleChangeColor: (hexColor: string) => void
}

export const ColorPicker = (props: ColorPickerProps) => {
    console.log(props)
    const { handleChangeColor } = props;

    return (
        <div>
            <input type="color" onChange={(event) => {
                // console.log(event) 
                const color = event.target.value;
                
                console.log(`Color picked: ${color}`);

                handleChangeColor(color)
            }} />
        </div>
    )
}
