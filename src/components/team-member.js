import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

const TeamMember = ({ member }) => {
    const data = useStaticQuery(graphql`
        query {
          allFile(filter: { sourceInstanceName: { eq: "images" } }) {
            nodes {
              relativePath
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: BLURRED)
              }
            }
          }
        }
      `);


    // Find the matching image by comparing relative paths
    const imageNode = data.allFile.nodes.find(
      node => node.relativePath === member.image
    );

    const image = imageNode ? getImage(imageNode) : null;

  return (
    <div className="flex gap-6 py-6">
      {/* <div className="box"> */}
        {image? <GatsbyImage
                    className='box'
                    image={image}
                    alt={`Image of team member ${member.name}`}
                /> : <p>Image not available</p>}
      {/* </div> */}
      <div className="w-9/12">
        <h3 className="text-2xl pb-2">{member.name}</h3>
        <p className="text-sm pb-2">{member.about}</p>
        <p className="text-sm pb-2">{member.why}</p>
      </div>
    </div>
  );
};

export default TeamMember;
