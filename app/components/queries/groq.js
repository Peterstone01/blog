import { client } from "../../lib/client";
///////////////////////get Hero
export const getHero = async () => {
  const query = `*[_type=="hero"][0]{
  "image": hero.asset->url
}`;
  const data = await client.fetch(query);
  return data;
};

///////////////////////get Recent && single item each for the single cards
export const getSports = async () => {
  const query = `*[_type=="post" && category->name =="sports" ]{
    title, 
      "image":mainImage.asset->url,
     "category":category->name,
      description,
        "slug":slug.current
     
    
  }`;
  const data = await client.fetch(query);
  return data;
};
///////////////////////get Recent && single item each for the single cards
export const getPolitics = async () => {
  const query = `*[_type=="post" && category->name =="politics" ][0...1]{
    title, 
      "image":mainImage.asset->url,
     "category":category->name,
      description,
        "slug":slug.current
     
    
  }`;
  const data = await client.fetch(query);
  return data;
};

///////////////////////get Recent && single item each for the single cards
export const getMusic = async () => {
  const query = `*[_type=="post" && category->name=="music"]
  
  {
    title, 
      "image":mainImage.asset->url,
     "category":category->name,
     description,
    "slug":slug.current
    
  }`;
  const data = await client.fetch(query);
  return data;
};

///////////////////////get Recent && single item each for the single cards
export const getFood = async () => {
  const query = `*[_type=="post" && category->name=="food"][0...1]
  
  {
    title, 
      "image":mainImage.asset->url,
     "category":category->name,
     description,
       "slug":slug.current
    
  }`;
  const data = await client.fetch(query);
  return data;
};

export const getSlug = async (slug) => {
  const query = `*[_type=="post" && slug.current== "${slug}"]{
    title, 
      "image":mainImage.asset->url,
     "category":category->name,
      description,
        "slug":slug.current,
        body
      
     
    
  }`;
  const data = await client.fetch(query);
  return data;
};
export const getAllCategory = async (category) => {
  const query = `*[_type=="post" && category->name == "${category}"]{
    title, 
      "image":mainImage.asset->url,
     "category":category->name,
      description,
        "slug":slug.current,
      body
     }`;
  const data = await client.fetch(query);
  return data;
};
