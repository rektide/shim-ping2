var qXhr= require('q-xhr')

module.exports= function(opts){
	var dataPingEls= document.querySelectorAll('[onclick][data-ping]')
	forEach.call(dataPingEls, function(el){
		el.addEventListener('click', function(evt){
			var to= opts.to? opts.to(evt):(window.location.href+'#'+this.id),
			  from= opts.from? opts.from(evt):window.location.href,
			  secure, insecure,
			  pings= this.dataset.ping.split(' ')
			for(var i in pings){
				var ping= pings[i],
				  sec= true, // TODO
				  headers= sec? (secure||(secure= {'Ping-To': to, 'Ping-From': from})): (insecure||(insecure= {'Ping-To': to, 'Referrer': null})),
			  	  xhr= new qXhr({url: this.dataset.ping, headers: headers})
			}
		}, false)
	})
}
