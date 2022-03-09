// var sum=0;
// console.log(process.argv)
// for(i=2;i<process.argv.length;i++) {
//     sum=sum+Number(process.argv[i]);
// }
// console.log(sum);


// console.log(process.argv)
// const sum=(a,b)=>a+b
// console.log(sum(2,6));




const fs=require("fs");
// writing the single gile 

// const quote="Always ready to face anything";
// fs.writeFile("./text.txt",quote,(err)=>{
//     console.log("Yes you can")
// })



//   creating multiple files within folder


const quote2="Live life laugh"
const [, ,noOfFiles]=process.argv;
console.log(process.argv);

for(let i=0;i<=noOfFiles;i++){
    fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
        console.log("completed writing",`text-${i}.html`);
    });
}


//reading the file from folder


// fs.readFile("./backup",(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(files);
// })

// const quote3="Never depends on anything"


//add to existing files 

// fs.appendFile("text.txt",quote3+"\n",(err)=>{
//     console.log("complete appending");
// })


//read directory

// fs.readdir("./backup",(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(files);
// })








//delete backup folder with directories

// const quote3="Live life laugh"
// const [, ,noOfFiles]=process.argv;
// console.log(process.argv);



// const fs=require("fs");
// const quote2="Live life laugh"
// const [, ,noOfFiles]=process.argv;
// console.log(process.argv);
// for(let i=0;i<noOfFiles;i++){
//     fs.unlink(`./backup/text-${i}.html`,(err)=>{
//         console.log("completed writing",`text-${i}.html`);
//     });
// }

 


fs.readdir("./backup",(err,files)=>{
    console.log(files);
    files.forEach(fileName=>
        fs.unlink(`./backup/${fileName}`,(err)=>{
            console.log("Completed Deleting")
        }))
})