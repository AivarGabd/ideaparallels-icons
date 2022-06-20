import React from "react";
import { useTheme, Text, Button, Grid, Row, Image,Card } from "@nextui-org/react";

export const ArticlePreview = () => {
  return (
    <Grid.Container
      css={{ borderRadius: "14px", padding: "0.75rem", maxWidth: "330px" }}
    >
      <Grid>
        <Text>
          Getting to your first 1000 customers looks like this.
        </Text>
      </Grid>
      <Grid>
        <Text>
          When OpenPhone got into YCombinator, they had 60 users.
        </Text>
      </Grid>
      <Grid>
        <Text>
          Stage 1: 0 to 1400 free users in 5 months. How? 2 channels
        </Text>
      </Grid>
      <Card>
        <Image
          
          src="https://api.typefully.com/media-p/ebfbd916-f77f-43a7-aab3-f9f0d4389ad8/"
          alt="Default Image"
        />
      </Card>

    </Grid.Container>
  );
};