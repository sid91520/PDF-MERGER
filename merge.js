import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();


export const merger1=async (p1,p2) => {
  await merger.add(p1);  
  await merger.add(p2); 
  await merger.setMetadata({
    producer: "pdf-merger-js based script",
    author: "Siddharth  Sharma",
    creator: "Siddharth Sharma",
    title: "PDF MERGER"
  });


  await merger.save('public/merged.pdf');
 
}
// module.exports={merger1}
