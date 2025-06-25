//your JS code here. If required.
const output = document.querySelector('#output');
let time1 = Math.floor(Math.random() * 2000) + 1000;
let time2 = Math.floor(Math.random() * 2000) + 1000;
let time3 = Math.floor(Math.random() * 2000) + 1000;
const promise1 = ()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(["Promise 1",time1]);
		},time1)
	})
};
const promise2 = ()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(["Promise 2",time2]);
		},time2)
	})
};
const promise3 = ()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(["Promise 3",time3]);
		},time3)
	})
};
function DisplayBefore(){
	const tr = document.createElement('tr');
	const td = document.createElement('td');
	td.setAttribute('colspan',"2");
	td.style.textAlign = "center"
	td.innerHTML = "Loading..."
	tr.appendChild(td);
	output.appendChild(tr);
	
}
DisplayBefore()
Promise.all([promise1(),promise2(),promise3()]).then((data)=>{
	console.log(data);
	output.innerHTML= `
	<tr>
	<td>${data[0][0]}</td>
	<td>${(data[0][1]/1000).toFixed(3)}</td>
	</tr>
	<tr>
	<td>${data[1][0]}</td>
	<td>${(data[1][1]/1000).toFixed(3)}</td>
	</tr>
	<tr>
	<td>${data[2][0]}</td>
	<td>${(data[2][1]/1000).toFixed(3)}</td>
	</tr>
	<tr>
	<td>Total</td>
	<td>${((data[0][1] + data[1][1] + data[2][1])/1000).toFixed(3) }</td>
	</tr>
	`
	
})




