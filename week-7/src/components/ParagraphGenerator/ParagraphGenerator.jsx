import { useState } from 'react';
import './para.css';

const ParagraphGenerator = () => {
    const [wordCount, setWordCount] = useState();
    const [paragraph, setParagraph] = useState('');
    const wordArrays = {
        3: ['cat', 'dog', 'run', 'fun'],
        4: ['jump', 'play', 'ball', 'food'],
        5: ['happy', 'sleep', 'music', 'dance'],
    };
    const generateParagraph = () => {
        const words = [];
        for (let i = 0; i < wordCount; i++) {
            const wordLength = Math.floor(Math.random() * 3) + 3;
            const wordArray = wordArrays[wordLength];
            const randomIndex = Math.floor(Math.random() * wordArray.length);
            words.push(wordArray[randomIndex]);
        }
        const generatedParagraph = words.join(' ');
        setParagraph(generatedParagraph);
    };

    const handleWordCountChange = event => {
        setWordCount(event.target.value);
    };

    return (
        <div className="paragraph-generator-container">
            <h2 className="heading">Paragraph Generator</h2>
            <div className="input-container">
                <input
                    id="wordCount"
                    value={wordCount}
                    onChange={handleWordCountChange}
                    className="input"
                    placeholder='Enter the Number of words'
                />
                <button onClick={generateParagraph} className="button">Generate</button>
            </div>
            <div className="paragraph-container">
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
    );
}

export default ParagraphGenerator;
