'use client';
// 클라이언트 측 컴포넌트에서만 실행되도록 확장자를 .client.js로 사용합니다.
import styles from '../styles/Home.module.css'


function FormComponent() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const text = event.target.text.value;
        const res = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        console.log(res)
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src = url;
        audioPlayer.hidden = false;
        audioPlayer.play();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input id="text" required placeholder="응원 메시지를 입력하세요" className={styles.input}></input>
            <button type="submit" className={styles.button}>메시지 보내기</button>
            <audio id="audioPlayer" controls hidden></audio>
        </form>
    );
}

export default FormComponent;
