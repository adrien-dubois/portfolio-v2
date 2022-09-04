import React, { useEffect, useState } from 'react'
import { texts } from './DataSkills';
//@ts-ignore
import TagCloud from 'TagCloud';

const WordCloud = () => {

    const [isLoading, setLoad] = useState<boolean>(true);
    const container = '.content';

    const options = {
        radius: 300,
        // animation speed
        // slow, normal, fast
        maxSpeed: 'normal',
        initSpeed: 'fast',
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
        // interact with cursor move on mouse out
        keep: true,
    }

    useEffect(() => {
        if(isLoading){
            TagCloud(container, texts, options);
            setLoad(false);
            console.log('i fire once');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className="main">
        <span className="content"></span>
    </div>
  )
}

export default WordCloud