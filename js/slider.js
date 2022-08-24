// console.log('slider')
// Usate Vue per generare il markup delle slide, fare il binding della classe active e fare il cambio di slide al click sulle frecce, seguendo le logiche già sviluppate nei precedenti esercizi.
// Siete liberi di usare anche strategie diverse se lo ritenete opportuno.


const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const root = new Vue({
	el:'#root',
	data:{
		slides,
		alt:['foto1','foto2','foto3','foto4','foto5',],
		slideActive:0,
	},
	methods:{
		nextSlide(){
			if(this.slideActive>=this.slides.length-1){
				this.slideActive=0
			}else{	
				this.slideActive++
			}
			
		},
		prevSlide(){
			if(this.slideActive<=0){
				this.slideActive=this.slides.length-1
			}else{
				
			this.slideActive--
			}
		},
	

	}

	
})