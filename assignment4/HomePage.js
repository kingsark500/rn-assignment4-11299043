import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

import { FlatList } from 'react-native';

const profileImage = { uri: 'https://your-profile-image-url.com' }; // Replace with your profile image URL

const featuredJobs = [
  {
    id: '1',title: 'Software Engineer',company: 'Facebook',salary: '$180,000',location: 'Accra, Ghana',
  },

  {
    id: '2', title: 'Data Scientist',company: 'Google',salary: '$160,000',location: 'New York, US',
  },

  {
    id: '3', title: 'Retail Worker',company: 'Target',salary: '$16,000',location: 'California, US',
  },
 
  {
    id: '4', title: 'Data Science Lecturer',company: 'Harvard University',salary: '$78,000',location: 'New York, US',
  },

  {
    id: '5', title: 'DevsOps Engineer',company: 'Rockstar Games',salary: '$150,000',location: 'Alabama, US',
  },

  {
    id: '6', title: 'Analytics Researcher',company: 'Harvard',salary: '$50,000',location: 'New York, US',
  },
  

];

const popularJobs = [
  {
    id: '1', title: 'Jr Executive',company: 'Burger King',salary: '$96,000/y',location: 'Los Angeles, US',
  },

  {
    id: '2',title: 'Product Manager',company: 'Beats',salary: '$84,000/y',location: 'Florida, US',
  },

  {
    id: '3',title: 'Product Manager',company: 'Facebook',salary: '$86,000/y',location: 'Florida, US',
  },
  
  {
    id:'4', title:'Sys admin', company:'Apple', salary:'$45,000/y', location:'Miami, US'
  },

  {
    id:'5', title:'Marketing Consultant', company:'Mcdonalds', salary:'$67,000/y', location:'california, US'
  },

  {
    id:'6', title:'Front-end developer', company:'Medtek', salary:'$89,000/y', location:'Paris, France'
  },

  {
    id:'7', title:'Database Administrator', company:'Ernest Pharmacy', salary:'$30,000/y', location:'Kumasi, Ghana'
  },

  {
    id:'8', title:'Full-stack developer', company:'Samsung', salary:'$109,000/y', location:'Hong kong, Japan'
  },

  
];

const JobItem = ({ job }) => (
  <View style={styles.jobItem}>

    <Image source={{ uri: getCompanyLogo(job.company) }} style={styles.companyLogo} />

    <View style={styles.jobDetails}>

      <Text style={styles.jobTitle}>{job.title}</Text>

      <Text style={styles.jobCompany}>{job.company}</Text>
      
      <Text style={styles.jobSalary}>{job.salary}</Text>

      <Text style={styles.jobLocation}>{job.location}</Text>

    </View>

  </View>
);

const getCompanyLogo = (company) => {
  switch (company) {
    case 'Burger King':
      return 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Burger_King_Logo.svg';

    case 'Beats':
      return 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Beats_by_Dre_logo.svg';

    case 'Facebook':
      return 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg';

    default:
      return 'https://via.placeholder.com/40';

  }
};



export default function Homepage() {

  

    return(

      <ScrollView style={styles.container}>

      <View style={styles.profileContainer}>
          <Image source={ require("./Ellipse (1).png")}  style={styles.profileImage} />

        <Text style={styles.ericName}>Eric Atsu</Text>

        <Text style={styles.ericEmail}>eric@gmail.com</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput

          style={styles.EricInput}

          placeholder="Search a job or position"
        />
       

      </View>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>

      <FlatList


        data={featuredJobs}
        renderItem={({ item }) => (

          <View style={styles.featuredJobItem}>
            

            <View style={styles.featurejobText}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>


            <Text style={styles.jobSalary}>{item.salary}</Text>

            <Text style={styles.jobLocation}>{item.location}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal

        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredJobsList}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>

      <FlatList


    data={popularJobs}
    renderItem={({ item }) => (

      <View style={styles.popularJobItem}>
    

      <Text style={styles.jobTitlePop}>{item.title}</Text>

      <Text style={styles.jobCompanyPop}>{item.company}</Text>


      <Text style={styles.jobSalaryPop}>{item.salary}</Text>

      <Text style={styles.jobLocationPop}>{item.location}</Text>
    </View>
)}
keyExtractor={item => item.id}

contentContainerStyle={styles.popularJobsList}
/>
      
    </ScrollView>

    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
    },
    profileContainer: {
      alignItems: 'right',
      marginVertical: 20,
    },
    profileImage: {
      width: 54,
      height: 54,
      borderRadius: 40,
      left:270,
      top:65
    },
    ericName: {
      fontSize: 24,
      fontWeight: '700',
      marginTop: 10,
      color:'#0D0D26',

    },
    ericEmail: {
      fontSize: 20,
      color: '#95969D',
      width:254,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#ddd',
    },
    EricInput: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      backgroundColor:'#F2F2F3',
      height:48,
      width:263,
    },
   
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginVertical: 10,
      color:'#0D0D26',
    },

    featuredJobsList: {
      marginBottom: 20,
      
    },

    featuredJobItem: {
      backgroundColor: '#34A853',
      borderRadius: 24,
      padding: 15,
      marginRight: 15,
      flexDirection: 'row',
      alignItems: 'center',
      height:200,
      width:280,
      left:24,
    
    },
    featurejobText:{
      
    },
    jobItem: {
      backgroundColor: '#FFFFFF',
      height:74,
      width:327,
      borderRadius: 20,
      padding: 15,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    jobDetails: {
      flex: 1,
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: '600',
      width:145,
      height:21,
      left:10,
      color:'#FFFFFF',
      marginTop:50,
    },
    jobCompany: {
      fontSize: 14,
      color: '#FFFFFF',
      width:68,
      height:21,
      top:30,
      opacity:75,
      lineHeight:21,
      marginBottom:100,
      bottom:90,
      left:15,
    },
    jobSalary: {
      fontSize: 15,
      color: '#FFFFFF',
      marginTop: 5,
      width:56,
      height:24,
      textAlign:'left',
      bottom:9,
      left:15,
    },
    jobLocation: {
      color:"#FFFFFF",
      bottom:30,
      left:150,
    },
    jobTitlePop:{
        color:'#0D0D26',
        width:84,
        height:30,
        left:40,
        fontSize:14,
        fontWeight:'600',
        lineHeight:18.2,
    },
    jobCompanyPop:{
      color:'#0D0D26',
      width:74,
      height:21,
      left:40,
      fontSize:13,
      fontWeight:'400',
      lineHeight:18.2,
    },
    jobLocationPop:{
      color:'#0D0D26',
      width:89,
      height:40,
      left:265,
      bottom:54,
    },
    jobSalaryPop:{
      color:'#0D0D26',
      width:62,
      height:19,
      left:265,
      fontSize:12,
      fontWeight:'400',
      lineHeight:19.2,
      textAlign:'right',
      bottom:54
    },
    popularJobsList: {
      paddingBottom: 90,
    },
    popularJobItem:{
      backgroundColor:'#FFFFFF',
      height:90,
      width:74,
      top:20, 
      borderRadius:20,
    }
  });