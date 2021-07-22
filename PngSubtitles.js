

class PngSubtitles
{
    constructor(target,subtitlesPath)
        {   
            this.target=target
            this.ST_info
            this.timer=null
            var div = document.createElement("div");
            div.id="captions"
            div.className="caption-container"
            var img = document.createElement("img");
            img.className="captions"
            img.src=""
            div.appendChild(img);
            var video = document.getElementById(target)
            video.insertAdjacentElement('afterend', div);
            fetch(subtitlesPath)
            .then((resp) => resp.json())
            .then((json) => 
                {
                   this.ST_info=json;
                })
                document.querySelector("#"+target).addEventListener('play', function() {
                    this.timer = setInterval(this._updateCap.bind(this), 100);
                }.bind(this),false);
                
                document.querySelector("#"+target).addEventListener('pause', function() {
                
                    clearInterval(this.timer);
                    this.timer = null;
                }.bind(this),false)
        }

    
    _sec2time(timeInSeconds) 
        {
            var pad = function(num, size) { return ('000' + num).slice(size * -1); },
            time = parseFloat(timeInSeconds).toFixed(3),
            hours = Math.floor(time / 60 / 60),
            minutes = Math.floor(time / 60) % 60,
            seconds = Math.floor(time - minutes * 60),
            milliseconds = time.slice(-3);
        
            return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + '.' + pad(milliseconds, 3);
        }

    _updateCap () 
    {
        const ct= this._sec2time(document.querySelector("#"+this.target).currentTime)
            for (var i = 0; i < this.ST_info.div.length; i++) 
            {
                if(document.querySelector('#'+this.target).paused)
                    {
                        break;
                    }
                    if (this.ST_info.div[i].begin <= ct && ct <=this.ST_info.div[i].end) 
                    {
                        const src = this.ST_info.div[i].image.src;
                        const subt = document.querySelector("#captions > img")
                        subt.src = "subtitles/" + src
                        break;
                    }
            }
    }

}

