import React from 'react';
import estilos from './Dropzone.module.css';
import dropzone_bg from './dropzone_bg.svg';

const Dropzone = ({ img, setImg }) => {
    const handleImgChange = ({ target }) => {
        if (target.files[0]) {
            setImg({
                preview: URL.createObjectURL(target.files[0]),
                raw: target.files[0]
            });
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        let file;

        if (e.dataTransfer.items) {
            if (e.dataTransfer.items[0].kind === 'file') {
                file = e.dataTransfer.items[0].getAsFile();
            }
        } else {
            file = e.dataTransfer.files[0];
        }

        setImg({
            preview: URL.createObjectURL(file),
            raw: file
        });
    };

    return (
        <label
            className={`${estilos.Dropzone} ${img.preview ? estilos.ativo : ''}`}
            htmlFor="arquivo"
            style={{backgroundImage: `url(${img.preview || dropzone_bg })`, marginRight: 0}}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <button
                className={`${estilos.btnFechar} ${img.preview ? estilos.ativo : ''}`}
                onClick={() => setImg('')}
            ></button>

            <div className={estilos.preview}></div>
            <input type="file" name="arquivo" id="arquivo" onChange={handleImgChange} />
        </label>
    );
};

export default Dropzone;
